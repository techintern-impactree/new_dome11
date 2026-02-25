"use client";

import React, { useEffect, useState, useCallback } from "react";

// Configure via environment variable:
//   NEXT_PUBLIC_API_URL  – backend base URL (default: http://localhost:4001)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001";

export interface StreamInfo {
  id: string;
  streamerId: string;
  createdAt: string;
  viewerCount: number;
}

interface StreamListProps {
  /** Called when the user clicks "Watch" on a stream card */
  onSelectStream: (streamId: string) => void;
}

const StreamList: React.FC<StreamListProps> = ({ onSelectStream }) => {
  const [streams, setStreams] = useState<StreamInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStreams = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/streams`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { streams: StreamInfo[] } = await res.json();
      setStreams(data.streams);
      setError(null);
    } catch (err) {
      console.error("Error fetching streams:", err);
      setError("Failed to load streams");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStreams();
    const interval = setInterval(fetchStreams, 5000);
    return () => clearInterval(interval);
  }, [fetchStreams]);

  /* ── Styles ───────────────────────────────────────────────────── */
  const card: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "border-color 0.2s",
  };

  /* ── Loading ──────────────────────────────────────────────────── */
  if (loading) {
    return (
      <div style={centeredBox}>
        <div style={spinner} />
        <p style={{ color: "#aaa", marginTop: "12px" }}>Loading streams…</p>
      </div>
    );
  }

  /* ── Error ────────────────────────────────────────────────────── */
  if (error) {
    return (
      <div style={centeredBox}>
        <p style={{ color: "#ef4444", marginBottom: "12px" }}>⚠️ {error}</p>
        <button onClick={fetchStreams} style={retryBtn}>
          Retry
        </button>
      </div>
    );
  }

  /* ── Empty ────────────────────────────────────────────────────── */
  if (streams.length === 0) {
    return (
      <div style={centeredBox}>
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>📹</div>
        <h3 style={{ color: "#fff", margin: 0 }}>No Active Streams</h3>
        <p style={{ color: "#aaa", marginTop: "8px", textAlign: "center" }}>
          Start streaming from the Android app to see it here.
        </p>
        <button onClick={fetchStreams} style={{ ...retryBtn, marginTop: "16px" }}>
          🔄 Refresh
        </button>
      </div>
    );
  }

  /* ── Stream grid ─────────────────────────────────────────────── */
  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#667eea", margin: 0, fontSize: "1.5rem" }}>
          Live Streams
        </h2>
        <button onClick={fetchStreams} style={retryBtn}>
          🔄 Refresh
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {streams.map((stream) => (
          <div key={stream.id} style={card}>
            {/* Badge row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  padding: "2px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                🔴 LIVE
              </span>
              <span style={{ color: "#aaa", fontSize: "12px" }}>
                👥 {stream.viewerCount}{" "}
                {stream.viewerCount === 1 ? "viewer" : "viewers"}
              </span>
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
                <span style={{ color: "#aaa", fontSize: "12px" }}>ID:</span>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  {stream.id}
                </span>
              </div>
              <div style={{ color: "#777", fontSize: "12px" }}>
                Started: {new Date(stream.createdAt).toLocaleTimeString()}
              </div>
            </div>

            {/* Watch button */}
            <button
              onClick={() => onSelectStream(stream.id)}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                marginTop: "4px",
              }}
            >
              ▶ Watch Stream
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Shared style helpers ─────────────────────────────────────────── */
const centeredBox: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 32px",
  width: "100%",
};

const retryBtn: React.CSSProperties = {
  background: "rgba(255,255,255,0.1)",
  border: "1.5px solid rgba(255,255,255,0.25)",
  color: "#fff",
  padding: "8px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
};

const spinner: React.CSSProperties = {
  width: "48px",
  height: "48px",
  border: "4px solid rgba(255,255,255,0.1)",
  borderTopColor: "#667eea",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default StreamList;
