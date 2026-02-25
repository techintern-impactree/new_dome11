"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
// props
import Button from "../ui/Button";
import LatLong from "../ui/LatLong";
import IDBox from "../ui/IDBox";
import DroneCard from "../ui/DroneCard";
import FlyingBox from "../ui/FlyingBox";

// assets import
import profileIcon from "../../../../public/assets/current-missions/icons/profile.png";
import crosshairIcon from "../../../../public/assets/current-missions/icons/crosshair.png";
import greenPolygon from "../../../../public/assets/current-missions/icons/green-polygon.png";
import thermalIcon from "../../../../public/assets/current-missions/icons/thermal.png";
import cameraIcon from "../../../../public/assets/current-missions/icons/camera.png";
import videoIcon from "../../../../public/assets/current-missions/icons/video.png";
import grayDot from "../../../../public/assets/current-missions/icons/gray-dot.png";
import mapView from "../../../../public/assets/current-missions/map-view.png";
import calendarIcon from "../../../../public/assets/current-missions/icons/calendar.png";
import timeIcon from "../../../../public/assets/current-missions/icons/time.png";
import locationIcon from "../../../../public/assets/current-missions/icons/location.png";
import targetIcon from "../../../../public/assets/current-missions/icons/target.png";
import vectorIcon from "../../../../public/assets/current-missions/icons/vector.png";
import { useRouter } from "next/navigation";

const Cockpit = () => {
  const [activeIcon, setActiveIcon] = useState("overview");

  const router = useRouter();

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

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
          gap: "20px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: "10px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0px 0px 0px 6px",
                color: "#FF8A00",
              }}
            >
              CURRENT MISSION
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button />

            <div style={{ position: "relative", cursor: "pointer" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#343434",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "#ffffff" }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#ff0000",
                  borderRadius: "50%",
                  border: "2px solid #343434",
                }}
              ></div>
            </div>
            {/* <div>
              <h1
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0px 0px 0px 6px",
                  color: "white",
                }}
              >
                Hello Vivek!
              </h1>
            </div> */}
          </div>
        </div>

        {/* Row 1 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minHeight: "0",
          }}
        >
          <div
            style={{
              width: "100%",
              // minHeight: "200px",
              backgroundColor: "#343434",
              borderRadius: "12px",
              padding: "6px 10px 6px 10px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              border: "1px solid #FF8A00",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
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
                </span>
                <img
                  src={greenPolygon.src}
                  alt="Green Polygon"
                  width={10}
                  height={10}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#F2CE16",
                    whiteSpace: "nowrap",
                  }}
                >
                  28 July 2025, 2200 hrs – 29 July 2025, 0400 hrs
                </span>
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
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // gap: "8px",
                    // padding: "8px 12px",
                    gap: "6px",
                    padding: "6px",
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
                    gap: "6px",
                    padding: "6px",
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
                    gap: "6px",
                    padding: "6px",
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

          {/* Row 2 */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              width: "100%",
              // minHeight: "381px",
              minHeight: "590px",
            }}
          >
            <div
              style={{
                flex: 1,
                // height: "381px",
                height: "590px",
                backgroundColor: "#343434",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => router.push("/multi-cam-view/3")}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                {/* <source src="/assets/current-missions/videos/scout-alpha.mp4" type="video/mp4" /> */}
                <source
                  src="/assets/current-missions/videos/DFSF2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <LatLong
                latitude="13.0126"
                longitude="80.21817"
                position={{ top: "10px", right: "10px" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "100%",
                  height: "80px",
                  background:
                    "linear-gradient(to bottom, transparent 0%,  rgba(0,0,0,0.3) 30%,  rgba(0,0,0,0.6) 70%,  rgba(0,0,0,0.8) 100%)",
                }}

                // style={{
                //   position: "absolute",
                //   bottom: 0,
                //   left: 0,
                //   width: "100%",
                //   height: "80px",
                //   background:
                //     "linear-gradient(to bottom, transparent 0%,  rgba(0,0,0,0.3) 30%,  rgba(0,0,0,0.6) 70%,  rgba(0,0,0,0.8) 100%)",
                //   zIndex: 1,
                // }}
              >
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
                    Scout Alpha
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
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#FFFFFF",
                      }}
                    >
                      Surveillance
                    </span>
                  </div>
                </div>
              </div>
              <IDBox id="ZO3-SRV-1201" />
            </div>

            <div
              style={{
                flex: 1,
                // height: "381px",
                height: "590px",
                backgroundColor: "#343434",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => router.push("/multi-cam-view/1")}
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
                  // filter:
                  //   "invert(1) hue-rotate(190deg) saturate(2) contrast(2.1) brightness(1)",
                }}
              >
                {/* <source src="/assets/current-missions/videos/multiscan-x.mp4" type="video/mp4" /> */}
                <source
                  src="/assets/current-missions/videos/hawkEye.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <LatLong
                latitude="13.0126"
                longitude="80.21817"
                position={{ top: "10px", right: "10px" }}
              />

              {/* <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              > */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "100%",
                  height: "80px",
                  background:
                    "linear-gradient(to bottom, transparent 0%,  rgba(0,0,0,0.3) 30%,  rgba(0,0,0,0.6) 70%,  rgba(0,0,0,0.8) 100%)",
                }}
              >
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
                      color: "#FFFFF",
                    }}
                  >
                    MultiScan X
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
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#ffff",
                      }}
                    >
                      Surveillance
                    </span>
                  </div>
                </div>
              </div>
              <IDBox id="HYB-0917" />
            </div>

            <div
              style={{
                flex: 1,
                // height: "381px",
                height: "590px",
                backgroundColor: "#343434",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => router.push("/map-view")}
            >
              {/* <img
                src={mapView.src}
                alt="Map View"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              /> */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                {/* <source src="/assets/current-missions/videos/multiscan-x.mp4" type="video/mp4" /> */}
                <source
                  src="/assets/current-missions/videos/MapView_slow.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#00000033",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src="/assets/current-missions/icons/upper-arrow.png"
                  alt="Upper Arrow"
                  width={25}
                  height={25}
                />
              </div> */}
            </div>
          </div>

          {/* Row 3 */}
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
            />
            <DroneCard
              droneNumber={2}
              model="AJEET Mini SHIKIRA"
              assetName="Hawk vision"
              assetId="SRV-0019"
              type="Surveillance"
            />
            <DroneCard
              droneNumber={3}
              model="AJEET Mini SHIKIRA"
              assetName="Falcon watch"
              assetId="SRV-0020"
              type="Surveillance"
            />
            <DroneCard
              droneNumber={4}
              model="AJEET Mini SHIKIRA"
              assetName="Owl scout"
              assetId="SRV-0021"
              type="Surveillance"
            />
          </div>

          {/* Row 4 */}
          <div
            style={{
              width: "100%",
              minHeight: "800px",
              backgroundColor: "#343434",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#FF8A00",
                  margin: 0,
                }}
              >
                PREVIOUS MISSIONS
              </h2>

              <Button text="Last 7 Days" showStatusDot={true} />
            </div>

            <div
              style={{
                width: "100%",
                backgroundColor: "#343434",
                borderRadius: "12px",
                padding: "0",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Mission Item 1 - Badur Card - COMPLETED */}
                <div
                  style={{
                    width: "100%",
                    minHeight: "240px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "12px",
                    border: "1px solid #FF8A00",
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    boxSizing: "border-box",
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
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#ffffff",
                        }}
                      >
                        Badur
                      </span>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#3E3E3E",
                            border: "1px solid #F2CE16",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#F2CE16",
                          }}
                        >
                          M-104-E
                        </div>
                        <div
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#3E3E3E",
                            border: "1px solid #F2CE16",
                            borderRadius: "4px",
                            fontSize: "12px",
                            color: "#F2CE16",
                          }}
                        >
                          Reconnaissance
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 12px",
                        backgroundColor: "#61DC561F",
                        borderRadius: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#61DC56",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#61DC56",
                        }}
                      >
                        Completed
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#3E3E3E",
                      borderRadius: "8px",
                      border: "1px solid #555555",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
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
                      }}
                    ></div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        width: "100%",
                        gap: "20px",
                      }}
                    >
                      {/* Left Side - Calendar and Location */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={calendarIcon.src}
                            alt="Calendar"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            2025-09-25
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={locationIcon.src}
                            alt="Location"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            12.4 km
                          </span>
                        </div>
                      </div>

                      {/* Right Side - Time and Target */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          flex: 1,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={timeIcon.src}
                            alt="Time"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            1H 23M
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={targetIcon.src}
                            alt="Target"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            180m
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Drone Info - Icon on left, name on right */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "8px 0",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Drone Icon on Left */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={vectorIcon.src}
                        alt="Drone"
                        width={18}
                        height={18}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#ffffff",
                        }}
                      >
                        Drone:
                      </span>
                    </div>

                    {/* Drone Name on Right */}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#ffffff",
                      }}
                    >
                      AJEET MINI SHIKIRA
                    </span>
                  </div>
                </div>

                {/* Mission Item 2 - Badur Card - ABORTED */}
                <div
                  style={{
                    width: "100%",
                    minHeight: "240px",
                    backgroundColor: "#3E3E3E",
                    borderRadius: "12px",
                    border: "1px solid #FF8A00",
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    boxSizing: "border-box",
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
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {/* Badur Title */}
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#ffffff",
                        }}
                      >
                        Badur
                      </span>

                      {/* M-104-E and Reconnaissance Boxes */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#3E3E3E",
                            border: "1px solid #F2CE16",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#F2CE16",
                          }}
                        >
                          M-104-E
                        </div>
                        <div
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#3E3E3E",
                            border: "1px solid #F2CE16",
                            borderRadius: "4px",
                            fontSize: "12px",
                            color: "#F2CE16",
                          }}
                        >
                          Reconnaissance
                        </div>
                      </div>
                    </div>

                    {/* Aborted Icon with Warning Symbol */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 12px",
                        backgroundColor: "#DC35611F",
                        borderRadius: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#DC3561",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M4 1V4M4 7H4.01"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#DC3561",
                        }}
                      >
                        Aborted
                      </span>
                    </div>
                  </div>

                  {/* Operation Silent Watch Box - WITH BORDER */}
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#3E3E3E",
                      borderRadius: "8px",
                      border: "1px solid #555555",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        margin: 0,
                        color: "#ffffff",
                      }}
                    >
                      Operation Silent Watch
                    </h3>

                    {/* Line after Operation Silent Watch */}
                    <div
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#555555",
                      }}
                    ></div>

                    {/* Mission Details - Calendar, Location, Time, Target */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        width: "100%",
                        gap: "20px",
                      }}
                    >
                      {/* Left Side - Calendar and Location */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={calendarIcon.src}
                            alt="Calendar"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            2025-09-24
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={locationIcon.src}
                            alt="Location"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            10.2 km
                          </span>
                        </div>
                      </div>

                      {/* Right Side - Time and Target */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          flex: 1,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={timeIcon.src}
                            alt="Time"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            0H 45M
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={targetIcon.src}
                            alt="Target"
                            width={14}
                            height={14}
                          />
                          <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                            150m
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Drone Info - Icon on left, name on right */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "8px 0",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Drone Icon on Left */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={vectorIcon.src}
                        alt="Drone"
                        width={18}
                        height={18}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#ffffff",
                        }}
                      >
                        Drone:
                      </span>
                    </div>

                    {/* Drone Name on Right */}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#ffffff",
                      }}
                    >
                      AJEET MINI SHIKIRA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cockpit;
