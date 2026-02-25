"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AssetStats from "../ui/AssetStats";
import DroneCard from "../ui/DroneCard";

const AssetDetails = () => {
  const [activeIcon, setActiveIcon] = useState("vector");
  const [activeCategory, setActiveCategory] = useState("All");

  const assetStats = [
    { label: "Total Assets:", value: 20 },
    { label: "Active Assets:", value: 15 },
    { label: "Idle Assets:", value: 3 },
    { label: "Under Maintenance:", value: 2 },
    { label: "In Mission:", value: 10 },
  ];

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleDroneClick = () => {
    window.location.href = "/asset-details-mfr";
  };

  const categories = [
    "All",
    "Surveillance",
    "Kamikaze",
    "Payload",
    "Logistics",
    "Hybrid",
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Sidebar activeIcon={activeIcon} onIconClick={handleIconClick} />

      <div
        style={{
          flex: 1,
          backgroundColor: "#292929",
          margin: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          color: "#ffffff",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <AssetStats stats={assetStats} />
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#555555",
            marginBottom: "0px",
          }}
        ></div>

        <div
          style={{
            width: "calc(100% - 4px)",
            height: "41px",
            opacity: 1,
            gap: "6px",
            borderRadius: "4px",
            padding: "4px 10px",
            backgroundColor: "#343434",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                height: "33px",
                opacity: 1,
                padding: category === "All" ? "6px" : "6px 12px",
                gap: "6px",
                borderRadius: "4px",
                backgroundColor:
                  activeCategory === category ? "#3e3e3e" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "14px",
                color: "#ffffff",
                marginRight: "10px",
              }}
            >
              {category}
            </div>
          ))}
        </div>
        {/* drones grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* All Category - Show all drones */}
          {activeCategory === "All" && (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                  minHeight: "450px",
                }}
              >
                <DroneCard
                  droneNumber={1}
                  model="AJEET Mini SHIKIRA"
                  assetName="Eagle eye"
                  assetId="SRV-0018"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={2}
                  model="AJEET Mini SHIKIRA"
                  assetName="Hawk vision"
                  assetId="SRV-0019"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={3}
                  model="AJEET Mini SHIKIRA"
                  assetName="Falcon watch"
                  assetId="SRV-0020"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={4}
                  model="AJEET Mini SHIKIRA"
                  assetName="Owl scout"
                  assetId="SRV-0021"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                  minHeight: "450px",
                }}
              >
                <DroneCard
                  droneNumber={1}
                  model="AJEET Mini SHIKIRA"
                  assetName="Eagle eye"
                  assetId="SRV-0018"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={2}
                  model="AJEET Mini SHIKIRA"
                  assetName="Hawk vision"
                  assetId="SRV-0019"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={3}
                  model="AJEET Mini SHIKIRA"
                  assetName="Falcon watch"
                  assetId="SRV-0020"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
                <DroneCard
                  droneNumber={4}
                  model="AJEET Mini SHIKIRA"
                  assetName="Owl scout"
                  assetId="SRV-0021"
                  type="Surveillance"
                  status="Ready"
                  onClick={handleDroneClick}
                />
              </div>
            </>
          )}

          {/* Surveillance Category - Show 1-2 drones */}
          {activeCategory === "Surveillance" && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "450px",
              }}
            >
              <DroneCard
                droneNumber={1}
                model="AJEET Mini SHIKIRA"
                assetName="Eagle eye"
                assetId="SRV-0018"
                type="Surveillance"
                status="Ready"
                onClick={handleDroneClick}
              />
              <DroneCard
                droneNumber={2}
                model="AJEET Mini SHIKIRA"
                assetName="Hawk vision"
                assetId="SRV-0019"
                type="Surveillance"
                status="Ready"
                onClick={handleDroneClick}
              />
            </div>
          )}

          {/* Logistics Category - Show 1-2 drones */}
          {activeCategory === "Logistics" && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "450px",
              }}
            >
              <DroneCard
                droneNumber={1}
                model="Logistics Drone"
                assetName="Cargo Master"
                assetId="LOG-001"
                type="Logistics"
                status="Ready"
                onClick={handleDroneClick}
              />
              <DroneCard
                droneNumber={4}
                model="AJEET Mini SHIKIRA"
                assetName="Owl scout"
                assetId="SRV-0021"
                type="Surveillance"
                status="Ready"
                onClick={handleDroneClick}
              />
            </div>
          )}

          {/* Kamikaze Category - Show 1-2 drones */}
          {activeCategory === "Kamikaze" && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "450px",
              }}
            >
              <DroneCard
                droneNumber={1}
                model="Kamikaze Drone"
                assetName="Strike One"
                assetId="KMZ-001"
                type="Kamikaze"
                status="Ready"
                onClick={handleDroneClick}
              />
              <DroneCard
                droneNumber={2}
                model="Kamikaze Drone"
                assetName="Target Seeker"
                assetId="KMZ-002"
                type="Kamikaze"
                status="Ready"
                onClick={handleDroneClick}
              />
            </div>
          )}

          {/* Payload Category - Show 1-2 drones */}
          {activeCategory === "Payload" && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "450px",
              }}
            >
              <DroneCard
                droneNumber={1}
                model="Payload Carrier"
                assetName="Heavy Lifter"
                assetId="PLD-001"
                type="Payload"
                status="Ready"
                onClick={handleDroneClick}
              />
              <DroneCard
                droneNumber={4}
                model="AJEET Mini SHIKIRA"
                assetName="Owl scout"
                assetId="SRV-0021"
                type="Surveillance"
                status="Ready"
                onClick={handleDroneClick}
              />
            </div>
          )}

          {/* Hybrid Category - Show 1-2 drones */}
          {activeCategory === "Hybrid" && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "450px",
              }}
            >
              <DroneCard
                droneNumber={1}
                model="Hybrid Drone"
                assetName="Multi-Role"
                assetId="HYB-001"
                type="Hybrid"
                status="Ready"
                onClick={handleDroneClick}
              />
              <DroneCard
                droneNumber={2}
                model="Hybrid Drone"
                assetName="Versatile One"
                assetId="HYB-002"
                type="Hybrid"
                status="Ready"
                onClick={handleDroneClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
