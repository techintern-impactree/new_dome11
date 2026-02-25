"use client";
import React from "react";
import FlyingBox from "./FlyingBox";
import droneBase from "../../../../public/assets/current-missions/drones/drone-base.png";
import tagIcon from "../../../../public/assets/current-missions/icons/tag.png";

interface DroneCardProps {
  droneNumber: number;
  model?: string;
  assetName?: string;
  assetId?: string;
  type?: string;
  status?: "Flying" | "Ready";
  onClick?: () => void;
  onDroneChange?: (newDroneNumber: number) => void;
}

const DroneCard = ({
  droneNumber,
  model = "AJEET Mini SHIKIRA",
  assetName = "Eagle eye",
  assetId = "SRV-0018",
  type = "Surveillance",
  status = "Flying",
  onClick,
  onDroneChange,
}: DroneCardProps) => {
  const getDroneImagePath = (number: number) => {
    switch (number) {
      case 1:
        return "/assets/current-missions/drones/scout_1.png";
      case 2:
        return "/assets/current-missions/drones/hawk-vision.png";
      case 3:
        return "/assets/current-missions/drones/falcon-watch.png";
      case 4:
        return "/assets/current-missions/drones/owl-scout.png";
      default:
        return "/assets/current-missions/drones/eagle-eye.png";
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDroneChange) {
      const newNumber = droneNumber > 1 ? droneNumber - 1 : 4;
      onDroneChange(newNumber);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDroneChange) {
      const newNumber = droneNumber < 4 ? droneNumber + 1 : 1;
      onDroneChange(newNumber);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        minHeight: "450px",
        backgroundColor: "#343434",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        padding: "0",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FlyingBox status={status} />

      {onDroneChange && (
        <>
          <button
            onClick={handlePrevious}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              backgroundColor: "#4b4b4b",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img
              src="/assets/asset-details/icons/caret-left.png"
              alt="Previous"
              style={{ width: "16px", height: "16px" }}
            />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              backgroundColor: "#4b4b4b",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img
              src="/assets/asset-details/icons/caret-right.png"
              alt="Next"
              style={{ width: "16px", height: "16px" }}
            />
          </button>
        </>
      )}

      <div
        style={{
          position: "absolute",
          width: "632px",
          height: "149px",
          opacity: 0.4,
          top: "180px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <img
          src={droneBase.src}
          alt="Drone Base"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "250px",
          zIndex: 2,
        }}
      >
        <img
          src={getDroneImagePath(droneNumber)}
          alt={`Drone ${droneNumber}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "122px",
          background:
            "linear-gradient(360deg, #343434 66.79%, #606062 170.65%)",
          borderRadius: "0 0 12px 12px",
          padding: "15px 20px",
          boxSizing: "border-box",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "24px",
            borderBottom: "1px solid #555555",
            paddingBottom: "4px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#ffffff", fontWeight: "500" }}
          >
            Model:
          </span>
          <span
            style={{ fontSize: "12px", color: "#cccccc", fontWeight: "600" }}
          >
            {model}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "24px",
            borderBottom: "1px solid #555555",
            paddingBottom: "4px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#ffffff", fontWeight: "500" }}
          >
            Asset name:
          </span>
          <span
            style={{ fontSize: "12px", color: "#cccccc", fontWeight: "600" }}
          >
            {assetName}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "24px",
            borderBottom: "1px solid #555555",
            paddingBottom: "4px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#ffffff", fontWeight: "500" }}
          >
            Asset ID:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <img src={tagIcon.src} alt="Tag" width={16} height={16} />
            <span
              style={{ fontSize: "12px", color: "#cccccc", fontWeight: "600" }}
            >
              {assetId}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "24px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#ffffff", fontWeight: "500" }}
          >
            Type:
          </span>
          <span
            style={{ fontSize: "12px", color: "#cccccc", fontWeight: "600" }}
          >
            {type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DroneCard;
