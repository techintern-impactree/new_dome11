"use client";
import React from "react";

interface IDBoxProps {
  id: string;
  backgroundColor: string;
  textColor: string;
  dotColor: string;
  position: React.CSSProperties;
}

interface AimpointsSectionProps {
  labelStyle: React.CSSProperties;
  valueStyle: React.CSSProperties;
}

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface MultiCamViewAssetsProps {
  activeTab?: "assets" | "proposed";
  onTabChange?: (tab: "assets" | "proposed") => void;
}

const IDBox: React.FC<IDBoxProps> = ({
  id,
  backgroundColor,
  textColor,
  dotColor,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "4px 8px",
        backgroundColor: backgroundColor,
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: dotColor,
          borderRadius: "50%",
          marginRight: "6px",
          flexShrink: 0,
        }}
      ></div>
      <span
        style={{
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "16.5px",
          color: textColor,
          whiteSpace: "nowrap",
        }}
      >
        {id}
      </span>
    </div>
  );
};

interface LatLongProps {
  latitude: string;
  longitude: string;
  labelColor?: string;
  valueColor?: string;
  backgroundColor?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  valueFontSize?: string;
}

const LatLong: React.FC<LatLongProps> = ({
  latitude,
  longitude,
  labelColor = "#ffffff",
  valueColor = "#F2CE16",
  backgroundColor = "#00000033",
  position = {},
  width,
  height,
  borderRadius = "8px",
  padding = "12px",
  valueFontSize = "14px",
}) => {
  return (
    <div
      style={{
        position: "relative",
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderRadius: borderRadius,
        padding: padding,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "12px",
          color: labelColor,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span>Latitude:</span>
          <span
            style={{
              color: valueColor,
              fontWeight: "600",
              fontSize: valueFontSize,
            }}
          >
            {latitude}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span>Longitude:</span>
          <span
            style={{
              color: valueColor,
              fontWeight: "600",
              fontSize: valueFontSize,
            }}
          >
            {longitude}
          </span>
        </div>
      </div>
    </div>
  );
};

interface AssetCardProps {
  asset: {
    name: string;
    type: string;
    id: string;
    statusColor: string;
    latitude: string;
    longitude: string;
  };
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const labelStyle = {
    backgroundColor: "transparent",
    color: "#B2B2B2",
    fontWeight: "600",
    width: "65px",
    height: "15px",
    lineHeight: "15px",
    fontSize: "12px",
    display: "inline-block",
    textAlign: "left" as const,
  };

  const valueStyle = {
    color: "#ffffff",
    width: "95px",
    height: "21px",
    lineHeight: "21px",
    fontSize: "17px",
    display: "inline-block",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#3E3E3E",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: 1,
          }}
        >
          <img
            src="/assets/current-missions/icons/orange-drone.png"
            alt="Drone"
            width={30}
            height={30}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "18px",
                color: "#ffffff",
              }}
            >
              {asset.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: asset.statusColor,
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#cccccc",
                }}
              >
                {asset.type}
              </div>
            </div>
          </div>
        </div>

        <div>
          <IDBox
            id={asset.id}
            backgroundColor="#343434"
            textColor="#ffffff"
            dotColor="#cccccc"
            position={{}}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#3E3E3E",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "14px",
              color: "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            Current Location:
          </div>

          <LatLong
            latitude={asset.latitude}
            longitude={asset.longitude}
            labelColor="#ffffff"
            valueColor="#F2CE16"
            backgroundColor="#343434"
            width="auto"
            height="auto"
            borderRadius="6px"
            padding="8px 12px"
            position={{}}
            valueFontSize="18px"
          />
        </div>

        <AimpointsSection labelStyle={labelStyle} valueStyle={valueStyle} />

        <UsersSection />
      </div>
    </div>
  );
};

const AimpointsSection: React.FC<AimpointsSectionProps> = ({
  labelStyle,
  valueStyle,
}) => {
  const aimpoints = [
    { lat: "13.01206", long: "80.21817" },
    { lat: "13.54374", long: "80.22456" },
    { lat: "23.87453", long: "46.78456" },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "512px",
        backgroundColor: "#343434",
        borderRadius: "4px",
        border: "1px solid #555555",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: "#3E3E3E",
          borderRadius: "4px 4px 0 0",
          borderBottom: "1px solid #555555",
        }}
      >
        <img
          src="/assets/current-missions/icons/caret-down.png"
          alt="Caret Down"
          width={16}
          height={16}
          style={{
            transition: "transform 0.2s ease",
          }}
        />
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            color: "#ffffff",
            fontWeight: "500",
          }}
        >
          Aimpoints ({aimpoints.length})
        </span>
      </div>

      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {aimpoints.map((aimpoint, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "Poppins",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#FF0000",
                borderRadius: "50%",
              }}
            ></div>

            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span style={labelStyle}>Latitude:</span>
              <span style={valueStyle}>{aimpoint.lat}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span style={labelStyle}>Longitude:</span>
              <span style={valueStyle}>{aimpoint.long}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UsersSection: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "8px",
        fontFamily: "Poppins",
        fontSize: "12px",
        color: "#888888",
        fontStyle: "italic",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img
        src="/assets/current-missions/icons/multiple-users.png"
        alt="Multiple Users Icon"
        width={16}
        height={16}
        style={{
          filter:
            "sepia(100%) saturate(200%) hue-rotate(250deg) brightness(80%)",
        }}
      />
      <span style={{ margin: "0 4px" }}>•</span>
      Venkat • Vivek
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textTransform: "uppercase",
        color: isActive ? "#ffffff" : "#888888",
        padding: "8px 16px",
        backgroundColor: isActive ? "#3E3E3E" : "#2A2A2A",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </div>
  );
};

const MultiCamViewAssets = ({
  activeTab = "assets",
  onTabChange,
}: MultiCamViewAssetsProps) => {
  const assets = [
    {
      name: "Eagle Eye",
      type: "Surveillance",
      id: "SRV-0018",
      statusColor: "#00FF00",
      latitude: "13.0150",
      longitude: "80.2200",
    },
    {
      name: "Bulls Eye",
      type: "Kamikaze",
      id: "KMZ-0220",
      statusColor: "#00FF00",
      latitude: "13.0126",
      longitude: "80.21817",
    },
    {
      name: "Hawk Eye",
      type: "Payload",
      id: "PAY-0729",
      statusColor: "#00FF00",
      latitude: "13.0175",
      longitude: "80.2225",
    },
    {
      name: "Hammerhead",
      type: "Logistics",
      id: "LOG-0154",
      statusColor: "#00FF00",
      latitude: "13.0200",
      longitude: "80.2250",
    },
    {
      name: "MultiScan X",
      type: "Surveillance",
      id: "HYB-0917",
      statusColor: "#00FF00",
      latitude: "13.0225",
      longitude: "80.2275",
    },
    {
      name: "Scout Alpha X",
      type: "Surveillance",
      id: "ZO3-SRV-1201",
      statusColor: "#00FF00",
      latitude: "13.0250",
      longitude: "80.2300",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        backgroundColor: "#343434",
        borderRadius: "10px",
        padding: "12px 20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "0 10px",
          height: "33px",
          flexShrink: 0,
        }}
      >
        <Tab
          label="ASSETS"
          isActive={activeTab === "assets"}
          onClick={() => onTabChange?.("assets")}
        />
        <Tab
          label="PROPOSED"
          isActive={activeTab === "proposed"}
          onClick={() => onTabChange?.("proposed")}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#555555",
          margin: "10px 0",
          flexShrink: 0,
        }}
      ></div>

      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "0 10px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default MultiCamViewAssets;
