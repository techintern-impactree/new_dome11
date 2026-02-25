import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    // WebRTC signaling server – override with NEXT_PUBLIC_SIGNALING_SERVER env var
    NEXT_PUBLIC_SIGNALING_SERVER:
      process.env.NEXT_PUBLIC_SIGNALING_SERVER || "ws://localhost:4001",
    // Backend REST API (for /api/streams, /api/health)
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001",
    // TURN server credentials
    NEXT_PUBLIC_TURN_URL:
      process.env.NEXT_PUBLIC_TURN_URL || "turn:20.244.82.40:3478",
    NEXT_PUBLIC_TURN_USERNAME:
      process.env.NEXT_PUBLIC_TURN_USERNAME || "dome",
    NEXT_PUBLIC_TURN_CREDENTIAL:
      process.env.NEXT_PUBLIC_TURN_CREDENTIAL || "domepass123",
  },
};

export default nextConfig;
