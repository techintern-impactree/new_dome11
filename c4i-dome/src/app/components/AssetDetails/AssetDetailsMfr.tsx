"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface AssetData {
  name: string;
  assetId: string;
  type: string;
  dateAdded: string;
  lastMaintenance: string;
  nextMaintenance: string;
  manufacturer: string;
  model: string;
  uavWeight: string;
  currentMission: string;
  operator: string;
  totalMissions: number;
  endurance: string;
  range: string;
  cruiseSpeed: string;
  maxAltitude: string;
  battery: string;
  windResistance: string;
  autoPilot: string;
  dustWaterResistance: string;
  sensors: string;
  flightModes: string;
}

const AssetDetailsMfr = () => {
  const [activeIcon, setActiveIcon] = useState("vector");
  const [assetData, setAssetData] = useState<AssetData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentDrone, setCurrentDrone] = useState<number>(1);

  useEffect(() => {
    const fetchAssetData = async (): Promise<void> => {
      try {
        setTimeout(() => {
          setAssetData({
            name: "Eagle eye",
            assetId: "SRV-0018",
            type: "Surveillance",
            dateAdded: "04/08/2020",
            lastMaintenance: "18/06/2025",
            nextMaintenance: "18/12/2025",
            manufacturer: "Zuppa",
            model: "AJEET Mini SHIKRA",
            uavWeight: "Up to 1.8 Kgs",
            currentMission: "Sindoor",
            operator: "Venkat",
            totalMissions: 5,
            endurance: "20+ Minutes",
            range: "3 Km",
            cruiseSpeed: "57 - 64 Km/h",
            maxAltitude: "200-meter altitude AMSL",
            battery: "4200 mAh, 6S1P, Li-Ion",
            windResistance: "36 Km/hr",
            autoPilot: "NavGati™ - PCB & Firmware (Proprietary)",
            dustWaterResistance: "IP54",
            sensors:
              "Ground Facing LIDAR (Terrain Follow), Barometer, Magnetic Compass, Accelerometer",
            flightModes:
              "Waypoint Navigation mode, Manual control mode, Hover, Return-to-Home mode, Position Hold",
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchAssetData();
  }, []);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const getDroneImagePath = (number: number) => {
    switch (number) {
      case 1:
        return "/assets/current-missions/drones/scout_1.png";
      case 2:
        return "/assets/asset-details/drone-images/hawk-vision.svg";
      case 3:
        return "/assets/current-missions/drones/falcon-watch.png";
      case 4:
        return "/assets/current-missions/drones/owl-scout.png";
      default:
        return "/assets/asset-details/drone-images/drone-eagle-eye.svg";
    }
  };

  const getDroneName = (number: number) => {
    switch (number) {
      case 1:
        return "Eagle Eye";
      case 2:
        return "Hawk Vision";
      case 3:
        return "Falcon Watch";
      case 4:
        return "Owl Scout";
      default:
        return "Eagle Eye";
    }
  };

  const handlePreviousDrone = (): void => {
    setCurrentDrone((prev) => (prev > 1 ? prev - 1 : 4));
  };

  const handleNextDrone = (): void => {
    setCurrentDrone((prev) => (prev < 4 ? prev + 1 : 1));
  };

  if (loading || !assetData) {
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
      </div>
    );
  }

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
          display: "flex",
          margin: "10px",
          gap: "10px",
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#292929",
            borderRadius: "16px",
            padding: "12px",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Drone Display Section */}
          <div
            style={{
              width: "100%",
              height: "414px",
              backgroundColor: "#343332",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Back Button */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 20,
              }}
            >
              <button
                onClick={() => window.history.back()}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#4b4b4b",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src="/assets/asset-details/icons/back.png"
                  alt="Back"
                  style={{ width: "16px", height: "16px" }}
                />
              </button>
            </div>

            {/* Status Indicator */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "white",
                  backgroundColor: "#2d2c2c",
                  borderRadius: "12px",
                  padding: "6px 12px 6px 34px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "12px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#00ff00",
                    borderRadius: "50%",
                  }}
                ></div>
                Ready
              </div>
            </div>

            {/* Drone Base Image - Full Card Size */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0.4,
                top: "0",
                left: "0",
                zIndex: 1,
              }}
            >
              <img
                src="/assets/current-missions/drones/drone-base.png"
                alt="Drone Base"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Drone Image */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "390px",
                height: "390px",
                zIndex: 2,
              }}
            >
              <img
                src={getDroneImagePath(currentDrone)}
                alt={`Drone ${currentDrone}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePreviousDrone}
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "30px",
                height: "64px",
                backgroundColor: "#4b4b4b",
                borderRadius: "0 6px 6px 0",
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
              onClick={handleNextDrone}
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "30px",
                height: "64px",
                backgroundColor: "#4b4b4b",
                borderRadius: "6px 0 0 6px",
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
          </div>

          {/* Asset Information Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
              padding: "0 12px",
            }}
          >
            {/* Asset Name, ID, Type Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "38px",
                alignItems: "center",
                backgroundColor: "#343434",
                borderRadius: "16px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    Asset name
                  </p>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "white",
                      lineHeight: "1.2",
                    }}
                  >
                    {getDroneName(currentDrone)}
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "34px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    margin: "0 19px",
                  }}
                ></div>
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    Asset ID
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    <img
                      src="/assets/current-missions/icons/tag.png"
                      alt="Tag"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        color: "white",
                        marginLeft: "6px",
                      }}
                    >
                      {assetData.assetId}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "34px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    margin: "0 19px",
                  }}
                ></div>
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    marginBottom: "3px",
                  }}
                >
                  Type
                </p>
                <p
                  style={{
                    fontSize: "21px",
                    fontWeight: "500",
                    color: "white",
                    lineHeight: "1.2",
                  }}
                >
                  {assetData.type}
                </p>
              </div>
            </div>

            {/* Date Information Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#343434",
                borderRadius: "16px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    Date added
                  </p>
                  <p
                    style={{
                      fontSize: "21px",
                      fontWeight: "500",
                      color: "white",
                      lineHeight: "1.2",
                    }}
                  >
                    {assetData.dateAdded}
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "34px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    margin: "0 38px",
                  }}
                ></div>
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    Last maintenance
                  </p>
                  <p
                    style={{
                      fontSize: "21px",
                      fontWeight: "500",
                      color: "white",
                      lineHeight: "1.2",
                    }}
                  >
                    {assetData.lastMaintenance}
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "34px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    margin: "0 38px",
                  }}
                ></div>
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    marginBottom: "3px",
                  }}
                >
                  Next maintenance
                </p>
                <p
                  style={{
                    fontSize: "21px",
                    fontWeight: "500",
                    color: "white",
                    lineHeight: "1.2",
                  }}
                >
                  {assetData.nextMaintenance}
                </p>
              </div>
            </div>

            {/* Manufacturer and Model Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              {/* Manufacturer Card */}
              <div
                style={{
                  width: "32%",
                  backgroundColor: "#343434",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "60px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/assets/asset-details/icons/package.png"
                      alt="Package"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                  <button
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#4b4b4b",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="/assets/asset-details/icons/redirect.png"
                      alt="Redirect"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </button>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "1px",
                    }}
                  >
                    Manufacturer
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                      marginTop: "0px",
                    }}
                  >
                    {assetData.manufacturer}
                  </p>
                </div>
              </div>

              {/* Model and Weight Card */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#343434",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                <div style={{ marginBottom: "30px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    Model
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    {assetData.model}
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    marginBottom: "16px",
                  }}
                ></div>

                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#7f7f7f",
                      marginBottom: "3px",
                    }}
                  >
                    UAV Weight with Battery
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    {assetData.uavWeight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Specifications */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#292929",
            borderRadius: "16px",
            padding: "12px",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#343434",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                height: "100%",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {/* Custom scrollbar styling */}
              <style>
                {`
                            div::-webkit-scrollbar {
                                width: 4px;
                            }
                            div::-webkit-scrollbar-track {
                                background: #2d2d2d;
                                border-radius: 2px;
                            }
                            div::-webkit-scrollbar-thumb {
                                background: #555;
                                border-radius: 2px;
                            }
                            div::-webkit-scrollbar-thumb:hover {
                                background: #777;
                            }
                            `}
              </style>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Current Mission:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.currentMission}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Operator:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.operator}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Total missions:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.totalMissions}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Endurance (Ideal Wind & MSL Conditions):
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.endurance}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Range:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.range}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Nominal Cruise Speed:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.cruiseSpeed}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Maximum Operating Altitude:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.maxAltitude}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Battery:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.battery}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Wind Resistance:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.windResistance}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Auto pilot:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.autoPilot}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Dust / Water Resistance:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.dustWaterResistance}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Sensors:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.sensors}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#7f7f7f",
                    flex: 1,
                  }}
                >
                  Flight Modes:
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    flex: 1,
                    textAlign: "right",
                  }}
                >
                  {assetData.flightModes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailsMfr;
