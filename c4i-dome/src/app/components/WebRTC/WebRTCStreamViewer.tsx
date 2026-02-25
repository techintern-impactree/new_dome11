"use client";

import React, { useEffect, useRef, useState } from "react";

// Configure via environment variables:
//   NEXT_PUBLIC_SIGNALING_SERVER  – WebSocket signaling URL  (default: ws://localhost:4001)
//   NEXT_PUBLIC_TURN_URL          – TURN server URL          (default: turn:20.244.82.40:3478)
//   NEXT_PUBLIC_TURN_USERNAME     – TURN username            (default: dome)
//   NEXT_PUBLIC_TURN_CREDENTIAL   – TURN credential          (default: domepass123)
const SIGNALING_SERVER =
  process.env.NEXT_PUBLIC_SIGNALING_SERVER || "ws://localhost:4001";
const TURN_URL =
  process.env.NEXT_PUBLIC_TURN_URL || "turn:20.244.82.40:3478";
const TURN_USERNAME = process.env.NEXT_PUBLIC_TURN_USERNAME || "dome";
const TURN_CREDENTIAL = process.env.NEXT_PUBLIC_TURN_CREDENTIAL || "domepass123";

interface WebRTCStreamViewerProps {
  streamId: string;
  /** Compact embed mode – hides meta panels */
  isEmbed?: boolean;
  /** Optional CSS class name for the outer container */
  className?: string;
}

type ConnectionStatus =
  | "connecting"
  | "connected"
  | "waiting for stream"
  | "streaming"
  | "disconnected"
  | "error"
  | "stream ended"
  | string;

const WebRTCStreamViewer: React.FC<WebRTCStreamViewerProps> = ({
  streamId,
  isEmbed = false,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const isCleanedUpRef = useRef(false);

  const [status, setStatus] = useState<ConnectionStatus>("connecting");
  const [error, setError] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);

  useEffect(() => {
    if (!streamId) {
      setError("No stream ID provided");
      return;
    }

    isCleanedUpRef.current = false;
    initializeWebRTC();

    return () => {
      isCleanedUpRef.current = true;
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamId]);

  const initializeWebRTC = () => {
    wsRef.current = new WebSocket(SIGNALING_SERVER);

    wsRef.current.onopen = () => {
      setStatus("connected");
    };

    wsRef.current.onmessage = async (event: MessageEvent) => {
      const message = JSON.parse(event.data as string);

      switch (message.type) {
        case "connected":
          setClientId(message.clientId as string);
          wsRef.current?.send(
            JSON.stringify({ type: "register-viewer", streamId })
          );
          break;

        case "registered":
          setStatus("waiting for stream");
          break;

        case "offer":
          await handleOffer(message.offer, message.senderId as string);
          break;

        case "ice-candidate":
          if (message.candidate && pcRef.current) {
            try {
              const candidateData =
                typeof message.candidate === "string"
                  ? JSON.parse(message.candidate)
                  : message.candidate;
              await pcRef.current.addIceCandidate(
                new RTCIceCandidate(candidateData)
              );
            } catch (e) {
              console.error("Failed to add ICE candidate:", e);
            }
          }
          break;

        case "stream-ended":
          setStatus("stream ended");
          setError("The stream has ended");
          break;

        case "error":
          setError(message.message as string);
          setStatus("error");
          break;
      }
    };

    wsRef.current.onerror = () => {
      setError("WebSocket connection error");
      setStatus("error");
    };

    wsRef.current.onclose = () => {
      if (!isCleanedUpRef.current) setStatus("disconnected");
    };
  };

  const handleOffer = async (
    offer: RTCSessionDescriptionInit | string,
    senderId: string
  ) => {
    try {
      const offerData: RTCSessionDescriptionInit =
        typeof offer === "string" ? JSON.parse(offer) : offer;

      pcRef.current = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" },
          {
            urls: [TURN_URL, `${TURN_URL}?transport=tcp`],
            username: TURN_USERNAME,
            credential: TURN_CREDENTIAL,
          },
        ],
        iceTransportPolicy: "all",
      });

      pcRef.current.ontrack = (event: RTCTrackEvent) => {
        if (isCleanedUpRef.current) return;
        if (videoRef.current && event.streams[0]) {
          const videoEl = videoRef.current;
          const stream = event.streams[0];

          if (videoEl.srcObject !== stream) {
            videoEl.srcObject = stream;
            videoEl.muted = false;
            videoEl.volume = 1.0;

            setTimeout(() => {
              if (!isCleanedUpRef.current && videoEl.srcObject) {
                videoEl
                  .play()
                  .then(() => {
                    setNeedsManualPlay(false);
                    setError(null);
                  })
                  .catch(() => {
                    setNeedsManualPlay(true);
                    setError(null);
                  });
              }
            }, 500);
          }

          setStatus("streaming");
        }
      };

      pcRef.current.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
        if (event.candidate && wsRef.current) {
          wsRef.current.send(
            JSON.stringify({
              type: "ice-candidate",
              candidate: event.candidate,
              targetId: senderId,
            })
          );
        }
      };

      pcRef.current.onconnectionstatechange = () => {
        if (pcRef.current) setStatus(pcRef.current.connectionState);
      };

      await pcRef.current.setRemoteDescription(
        new RTCSessionDescription(offerData)
      );
      const answer = await pcRef.current.createAnswer();
      await pcRef.current.setLocalDescription(answer);

      wsRef.current?.send(
        JSON.stringify({ type: "answer", answer, targetId: senderId })
      );
    } catch (err) {
      console.error("Error handling offer:", err);
      setError("Failed to establish WebRTC connection");
      setStatus("error");
    }
  };

  const cleanup = () => {
    pcRef.current?.close();
    pcRef.current = null;
    wsRef.current?.close();
    wsRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  const handleManualPlay = () => {
    videoRef.current
      ?.play()
      .then(() => setNeedsManualPlay(false))
      .catch((e: Error) => setError("Failed to play: " + e.message));
  };

  const statusColor: Record<string, string> = {
    streaming: "#22c55e",
    connected: "#3b82f6",
    "waiting for stream": "#f59e0b",
    disconnected: "#6b7280",
    error: "#ef4444",
    "stream ended": "#6b7280",
  };

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        borderRadius: isEmbed ? 0 : "12px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        playsInline
        controls={!isEmbed}
        style={{
          width: "100%",
          height: isEmbed ? "100vh" : "100%",
          minHeight: "300px",
          objectFit: "contain",
          background: "#000",
          display: "block",
        }}
      />

      {/* Manual play overlay */}
      {needsManualPlay && (
        <button
          onClick={handleManualPlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "16px 32px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "3px solid white",
            borderRadius: "50px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ▶ Click to Play
        </button>
      )}

      {/* Status badge */}
      {!isEmbed && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.7)",
            color: statusColor[status] || "#fff",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            border: `1px solid ${statusColor[status] || "#fff"}`,
            zIndex: 5,
          }}
        >
          {status}
        </div>
      )}

      {/* Error banner */}
      {error && !isEmbed && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(239,68,68,0.9)",
            color: "white",
            padding: "8px 16px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Stream info footer (non-embed only) */}
      {!isEmbed && (
        <div
          style={{
            padding: "12px 16px",
            background: "rgba(0,0,0,0.8)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            gap: "24px",
            fontSize: "12px",
            color: "#aaa",
            flexWrap: "wrap",
          }}
        >
          <span>
            Stream: <strong style={{ color: "#fff" }}>{streamId}</strong>
          </span>
          <span>
            Status:{" "}
            <strong style={{ color: statusColor[status] || "#fff" }}>
              {status}
            </strong>
          </span>
          {clientId && (
            <span>
              Client ID: <strong style={{ color: "#fff" }}>{clientId}</strong>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default WebRTCStreamViewer;
