"use client";

import WebRTCStreamViewer from "../../../components/WebRTC/WebRTCStreamViewer";
import { use } from "react";

interface Params {
  streamId: string;
}

export default function EmbedStreamPage({ params }: { params: Promise<Params> }) {
  const { streamId } = use(params);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <WebRTCStreamViewer streamId={streamId} isEmbed />
    </div>
  );
}
