"use client";

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import StreamList from "../../components/WebRTC/StreamList";
import WebRTCStreamViewer from "../../components/WebRTC/WebRTCStreamViewer";

export default function StreamsPage() {
  const [activeIcon, setActiveIcon] = useState("cam-view");
  const [selectedStreamId, setSelectedStreamId] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Sidebar
        activeIcon={activeIcon}
        onIconClick={(icon: string) => setActiveIcon(icon)}
      />

      <div
        style={{
          flex: 1,
          backgroundColor: "#292929",
          margin: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            padding: "20px 28px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {selectedStreamId && (
            <button
              onClick={() => setSelectedStreamId(null)}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: "8px",
                padding: "6px 14px",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              ← Back to Streams
            </button>
          )}
          <h1
            style={{
              margin: 0,
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {selectedStreamId
              ? `Viewing: ${selectedStreamId}`
              : "Live Drone Streams"}
          </h1>
          {selectedStreamId && (
            <span
              style={{
                background: "#ef4444",
                color: "#fff",
                padding: "2px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                marginLeft: "auto",
              }}
            >
              🔴 LIVE
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: "auto", padding: "24px 28px" }}>
          {selectedStreamId ? (
            <div
              style={{
                height: "100%",
                minHeight: "500px",
                background: "#000",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <WebRTCStreamViewer streamId={selectedStreamId} />
            </div>
          ) : (
            <StreamList onSelectStream={(id) => setSelectedStreamId(id)} />
          )}
        </div>
      </div>
    </div>
  );
}
