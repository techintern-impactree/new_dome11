"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../Sidebar/Sidebar";
import profileIcon from "../../../../public/assets/current-missions/icons/profile.png";
import crosshairIcon from "../../../../public/assets/current-missions/icons/crosshair.png";
import thermalIcon from "../../../../public/assets/current-missions/icons/thermal.png";
import cameraIcon from "../../../../public/assets/current-missions/icons/camera.png";
import videoIcon from "../../../../public/assets/current-missions/icons/video.png";
import grayDot from "../../../../public/assets/current-missions/icons/gray-dot.png";
import LatLong from "../ui/LatLong";
import IDBox from "../ui/IDBox";
import DroneCard from "../ui/DroneCard";
import MultiCamViewAssets from "../ui/MultiCamViewAssets";

const MultiCamView = () => {
  const [activeIcon, setActiveIcon] = useState("overview");
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const router = useRouter();

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  const handleVideoClick = (droneId: string) => {
    router.push("/cam-view");
  };

  const camItems = [
    {
      camId: "1",
      src: "/assets/current-missions/videos/hawkEye.mp4",
      title: "Hawk Eye",
      tag: "Payload",
      id: "PAY-0729",
      latitude: "13.0175",
      longitude: "80.2225",
      mission: "Mission 1",
    },
    {
      camId: "2",
      src: "/assets/current-missions/videos/DFSF1.mp4",
      title: "Bulls Eye",
      tag: "Kamikaze",
      id: "KMZ-0220",
      latitude: "13.0126",
      longitude: "80.21817",
      mission: "Mission 1",
    },
    {
      camId: "3",
      src: "/assets/current-missions/videos/DFSF2.mp4",
      title: "Eagle Eye",
      tag: "Surveillance",
      id: "SRV-0018",
      latitude: "13.0150",
      longitude: "80.2200",
      mission: "Mission 2",
    },
    {
      camId: "4",
      src: "/assets/current-missions/videos/DFSF4.mp4",
      title: "Hammerhead",
      tag: "Logistics",
      id: "LOG-0154",
      latitude: "13.0200",
      longitude: "80.2250",
      mission: "Mission 2",
    },
    {
      camId: "5",
      src: "/assets/current-missions/videos/DFSF5.mp4",
      title: "MultiScan X",
      tag: "Surveillance",
      id: "HYB-0917",
      latitude: "13.0225",
      longitude: "80.2275",
      mission: "Mission 1",
    },
    {
      camId: "6",
      src: "/assets/current-missions/videos/DFSF2.mp4",
      title: "Scout Alpha",
      tag: "Surveillance",
      id: "ZO3-SRV-1201",
      latitude: "13.0250",
      longitude: "80.2300",
      mission: "Mission 1",
    },
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
          padding: "10px",
          color: "#ffffff",
          gap: isLeftPanelOpen ? "10px" : "0px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* default sidebar panel - open */}
        {!isLeftPanelOpen && (
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "20px",
              width: "50px",
              height: "50px",
              backgroundColor: "#3E3E3E",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.2s, transform 0.3s ease",
              zIndex: 10,
              overflow: "auto",
            }}
            onClick={toggleLeftPanel}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4E4E4E";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3E3E3E";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/assets/current-missions/icons/sidebar.png"
              alt="Open sidebar"
              width={30}
              height={30}
            />
          </div>
        )}

        {/* sidebar panel implementation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "600px",
            transition: "all 0.4s ease-in-out",
            transform: isLeftPanelOpen ? "translateX(0)" : "translateX(-100%)",
            opacity: isLeftPanelOpen ? 1 : 0,
            marginLeft: isLeftPanelOpen ? "0" : "-600px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "85px",
              backgroundColor: "#343434",
              borderRadius: "10px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              ASSETS DEPLOYED
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#9747FF",
                  width: "70px",
                  height: "40px",
                  borderRadius: "50px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  6
                </span>
              </div>

              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3E3E3E",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.2s, transform 0.2s ease",
                }}
                onClick={toggleLeftPanel}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4E4E4E";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#3E3E3E";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src="/assets/current-missions/icons/sidebar.png"
                  alt="Close sidebar"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              minHeight: "300px",
              backgroundColor: "#343434",
              borderRadius: "10px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              border: "1px solid #FF8A00",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <img
                    src={crosshairIcon.src}
                    alt="Crosshair"
                    width={32}
                    height={32}
                  />
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#ffffff",
                    }}
                  >
                    Sindoor
                    <br></br>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#FFFFFF",
                      }}
                    >
                      28 July 2025, 2200 hrs – 29 July 2025, 0400 hrs
                    </span>
                  </span>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "84.12px",
                    height: "29px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <img src={grayDot.src} alt="Gray Dot" width={8} height={8} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#F2CE16",
                    }}
                  >
                    M-231-A
                  </span>
                </div>
              </div>
            </div>

            {/* <div
              style={{
                width: "100%",
                height: "128px",
                backgroundColor: "#3E3E3E",
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Operation Silent Watch
              </h3>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#555555",
                  margin: "8px 0",
                }}
              ></div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#cccccc",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                Night-time surveillance of enemy movement along LoC Sector 4
              </p>
            </div> */}
            <div
              style={{
                width: "100%",
                height: "128px",
                backgroundColor: "#3E3E3E",
                borderRadius: "8px",
                padding: "6px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                gap: "8px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Operation Silent Watch
              </h3>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#555555",
                  margin: "0px",
                }}
              ></div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#cccccc",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                Night-time surveillance of enemy movement along LoC Sector 4
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={cameraIcon.src}
                    alt="Camera"
                    width={20}
                    height={20}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Images(12)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "6px",
                  }}
                >
                  <img src={videoIcon.src} alt="Video" width={20} height={20} />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Videos(14)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={thermalIcon.src}
                    alt="Thermal"
                    width={8.13}
                    height={17.5}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Thermal Images(10)
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                }}
              >
                <img
                  src={profileIcon.src}
                  alt="Profile"
                  width={14}
                  height={14}
                />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Brigadier Arvind Rathore
                </span>
              </div>
            </div>
          </div>

          <MultiCamViewAssets
            activeTab="assets"
            onTabChange={(tab) => console.log("Tab changed:", tab)}
          />
        </div>

        {/* Video containers section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingRight: "10px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              width: "100%",
            }}
          >
            {camItems?.map((item: any, index) => {
              return (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    backgroundColor: "#343434",
                    borderRadius: "6px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  // onClick={() => handleVideoClick("KMZ-0220")}
                  onClick={() => router.push(`/multi-cam-view/${item?.camId}`)}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    {/* <source src="/assets/current-missions/videos/bulls-eye.mp4" type="video/mp4" /> */}
                    <source src={item?.src} type="video/mp4" />
                    {/* <source src={Cam1} type="video/mp4" /> */}
                    Your browser does not support the video tag.
                  </video>

                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "80px",
                      background:
                        "linear-gradient(to bottom, transparent 0%,  rgba(0,0,0,0.3) 30%,  rgba(0,0,0,0.6) 70%,  rgba(0,0,0,0.8) 100%)",
                      zIndex: 1,
                    }}
                  />

                  <LatLong
                    latitude={item?.latitude}
                    longitude={item?.longitude}
                    position={{ top: "10px", right: "10px" }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "15px",
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#ffffff",
                      }}
                    >
                      {item?.title}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="/assets/current-missions/icons/green-dot.png"
                        alt="Green Dot"
                        width={8}
                        height={8}
                        style={{ zIndex: 3 }}
                      />
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item?.tag}
                      </span>
                    </div>
                  </div>

                  <div style={{ zIndex: 2 }}>
                    <IDBox
                      id={item?.id}
                      position={{ bottom: "15px", right: "15px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCamView;
