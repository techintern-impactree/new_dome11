"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { EyeClosedIcon, EyeIcon, EyeOffIcon, HomeIcon } from "lucide-react";
import ToggleSwitch from "../ui/ToggleSwitch";
import { useRouter } from "next/navigation";
// import "./MapView.css";

const MapView = () => {
  const [activeIcon, setActiveIcon] = useState("overview");
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [viewMode, setViewMode] = useState("satellite"); // Add this state
  const [isThermalCamActive, setIsThermalCamActive] = useState(false);
  const [isFirstVideo, setIsFirstVideo] = useState(true);

  const router = useRouter();
  //   const handleThermalCamToggle = (mode:string) => {
  //   const newState = !isThermalCamActive;
  //   setIsThermalCamActive(newState);
  //   if (newState) {
  //     router.push("/thermal-cam-view");
  //   }
  //   console.log("Thermal Camera:", newState ? "ON" : "OFF");
  // };
  const handleViewModeToggle = () => {
    setViewMode((prev) => (prev === "satellite" ? "night" : "satellite"));
  };

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
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
          // padding: "20px",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div className="d-flex gap-2">
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "35px",
              top: "18px",
              left: "15px",
              borderRadius: "10px",
              padding: "4px 10px",
              background: "rgba(91, 91, 91, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              zIndex: 5,
            }}
            onClick={() => window.history.back()}
          >
            {/* {isLeftPanelOpen ? <EyeIcon /> : <EyeOffIcon />} */}
            {/* <img
                      src={
                        isLeftPanelOpen
                          ? "/assets/map-view/icons/chevrons-left.png"
                          : "/assets/map-view/icons/chevrons-right.png"
                      }
                      alt="chevron"
                      style={{ width: "20px", height: "20px" }}
                    /> */}
            <img
              src={"/assets/map-view/icons/chevrons-left.png"}
              alt="chevron"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "95px",
              height: "35px",
              top: "18px",
              left: "60px",
              borderRadius: "10px",
              padding: "4px 10px",
              background: "rgba(91, 91, 91, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              zIndex: 5,
            }}
            onClick={toggleLeftPanel}
          >
            {isLeftPanelOpen ? <EyeIcon /> : <EyeOffIcon />}
            {/* <img
                    src={
                      isLeftPanelOpen
                        ? "/assets/map-view/icons/chevrons-left.png"
                        : "/assets/map-view/icons/chevrons-right.png"
                    }
                    alt="chevron"
                    style={{ width: "20px", height: "20px" }}
                  /> */}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "85px",
            height: "35px",
            top: "18px",
            left: "180px",
            borderRadius: "100px",
            padding: "4px",
            background: "rgba(91, 91, 91, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50px",
              padding: "10px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/map-view/icons/above-vector.png"
              alt="vector"
              style={{ width: "12px", height: "12px" }}
            />
          </div>

          <div
            style={{
              width: "46.11px",
              height: "24px",
              borderRadius: "31.48px",
              padding: "2px",
              background: "linear-gradient(40deg, #FF2F2F, #FF2F2F)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6.3px",
            }}
          >
            <span
              style={{ fontSize: "10px", color: "white", fontWeight: "500" }}
            >
              40°
            </span>
          </div>
        </div>

        {isLeftPanelOpen && (
          <div
            style={{
              position: "absolute",
              width: "140px",
              height: "370px",
              top: "60px",
              left: "15px",
              borderRadius: "10px",
              padding: "15px",
              background: "rgba(91, 91, 91, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <HomeIcon size={20} color="#FF2F2F" />
                {/* <img
                  src="/assets/map-view/icons/flying-drone.png"
                  alt="drone"
                  style={{ width: "24px", height: "24px" }}
                /> */}
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  28.04m
                </span>
              </div>

              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  width: "100%",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#cccccc",
                      marginBottom: "4px",
                    }}
                  >
                    Latitude
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "500" }}>
                    13.01206
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#cccccc",
                      marginBottom: "4px",
                    }}
                  >
                    Longitude
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "500" }}>
                    80.21817
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  width: "100%",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#cccccc",
                      marginBottom: "4px",
                    }}
                  >
                    Mission Time
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "500" }}>
                    12:24
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#cccccc",
                      marginBottom: "4px",
                    }}
                  >
                    Flying time left
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "500" }}>
                    20:22
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "15px" }}>56%</span>
                <img
                  src="/assets/map-view/icons/battery.png"
                  alt="battery"
                  style={{ width: "20px", height: "18px" }}
                />
                <img
                  src="/assets/map-view/icons/wifi.png"
                  alt="wifi"
                  style={{ width: "18px", height: "18px" }}
                />
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "88px",
            top: "0px",
            left: "700px",
            padding: "10px",
            gap: "10px",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/camera-view/abort-mission.png"
            alt="Abort Mission"
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
            width: "400px",
            height: "45px",
            bottom: "10px",
            left: "15px",
            borderRadius: "10px",
            padding: "10px",
            background: "rgba(91, 91, 91, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/assets/map-view/icons/drone-signals/green.png"
              alt="green"
              style={{ width: "16px", height: "16px" }}
            />
            <span style={{ fontSize: "15px", color: "#ffffff" }}>
              Approaching
            </span>
          </div>
          <div style={{ color: "#ffffff", fontSize: "14px" }}>|</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/assets/map-view/icons/drone-signals/orange.png"
              alt="orange"
              style={{ width: "16px", height: "16px" }}
            />
            <span style={{ fontSize: "15px", color: "#ffffff" }}>Holding</span>
          </div>
          <div style={{ color: "#ffffff", fontSize: "14px" }}>|</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/assets/map-view/icons/drone-signals/red.png"
              alt="red"
              style={{ width: "16px", height: "16px" }}
            />
            <span style={{ fontSize: "15px", color: "#ffffff" }}>
              Returning
            </span>
          </div>
        </div>

        {isLeftPanelOpen && (
          <div
            style={{
              position: "absolute",
              width: "150px",
              // height: "300px",
              top: "18px",
              right: "12px",
              borderRadius: "10px",
              padding: "15px",
              background: "rgba(91, 91, 91, 0.2)",
              zIndex: 1,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#cccccc",
                  marginBottom: "4px",
                }}
              >
                Mission
              </div>
              <div style={{ fontSize: "13px", fontWeight: "500" }}>Sindoor</div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#cccccc",
                  marginBottom: "4px",
                }}
              >
                Mission Status
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#00FF00",
                }}
              >
                Engaged
              </div>
            </div>

            {/* <div>
            <div
              style={{
                fontSize: "11px",
                color: "#cccccc",
                marginBottom: "4px",
              }}
            >
              Speed
            </div>
            <div style={{ fontSize: "13px", fontWeight: "500" }}>20 Km/h</div>
          </div> */}

            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#cccccc",
                  marginBottom: "4px",
                }}
              >
                Wind
              </div>
              <div style={{ fontSize: "13px", fontWeight: "500" }}>7 m/s</div>
            </div>

            {/* <div>
            <div
              style={{
                fontSize: "11px",
                color: "#cccccc",
                marginBottom: "4px",
              }}
            >
              Home Point
            </div>
            <div style={{ fontSize: "13px", fontWeight: "500" }}>6 Km</div>
          </div> */}
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                width: "100%",
              }}
            ></div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "500",
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Switch Map
              </div>
              {/* <ToggleSwitch
              // isOn={isThermalCamActive}
              // onToggle={handleThermalCamToggle}
              // id="thermalCamSwitch"
              isOn={viewMode === "satellite"}
              onToggle={handleViewModeToggle}
              id="viewModeSwitch"
              size="md"
            /> */}
              <label className="switch">
                <input
                  type="checkbox"
                  checked={!isFirstVideo}
                  onChange={() => setIsFirstVideo(!isFirstVideo)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            width: "44px",
            height: "44px",
            top: "570px",
            right: "12px",
            borderRadius: "50px",
            padding: "10px",
            background: "rgba(242, 206, 22, 0.12)",
            backdropFilter: "blur(10px)",
            border: "1px solid #F2CE16",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img
            src="/assets/map-view/icons/chat-text.png"
            alt="chat"
            style={{ width: "20px", height: "20px" }}
          />
        </div>

        {isChatOpen && (
          <div
            style={{
              position: "absolute",
              width: "394px",
              height: "166px",
              top: "550px",
              right: "70px",
              borderRadius: "4px",
              padding: "6px",
              background: "#F2CE161F",
              border: "1px solid #F2CE16",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              zIndex: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#ffffff",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Commands
              </div>
              <img
                src="/assets/map-view/icons/exit.png"
                alt="exit"
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
                onClick={() => setIsChatOpen(false)}
              />
            </div>

            <div
              style={{
                width: "382px",
                height: "36px",
                borderRadius: "6px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#F2224899",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <img
                  src="/assets/map-view/icons/red-ellipse.png"
                  alt="red ellipse"
                  style={{ width: "10px", height: "10px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Abort Mission
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "80px",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="/assets/map-view/icons/clock.png"
                  alt="clock"
                  style={{ width: "12px", height: "12px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  16:43
                </span>
              </div>
            </div>

            <div
              style={{
                width: "382px",
                height: "36px",
                borderRadius: "6px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#F2224899",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <img
                  src="/assets/map-view/icons/red-ellipse.png"
                  alt="red ellipse"
                  style={{ width: "10px", height: "10px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  CMD 1
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "50px",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="/assets/map-view/icons/clock.png"
                  alt="clock"
                  style={{ width: "12px", height: "12px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  16:50
                </span>
              </div>
            </div>

            <div
              style={{
                width: "382px",
                height: "36px",
                borderRadius: "6px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#F2224899",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <img
                  src="/assets/map-view/icons/red-ellipse.png"
                  alt="red ellipse"
                  style={{ width: "10px", height: "10px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  CMD 3
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "50px",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="/assets/map-view/icons/clock.png"
                  alt="clock"
                  style={{ width: "12px", height: "12px" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  17:17
                </span>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            width: "44px",
            height: "40px",
            // top: "660px",
            top: "630px",
            right: "12px",
            borderRadius: "6px",
            background: "#ffff",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/map-view/icons/zoom-in.png"
            alt="zoom in"
            style={{ width: "20px", height: "20px" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "44px",
            height: "40px",
            // top: "720px",
            top: "690px",
            right: "12px",
            borderRadius: "6px",
            background: "#ffff",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/map-view/icons/zoom-out.png"
            alt="zoom out"
            style={{ width: "20px", height: "20px" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "178px",
            height: "161px",
            bottom: "10px",
            right: "12px",
            borderRadius: "16px",
            padding: "2px",
            background: "rgba(91, 91, 91, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            zIndex: 5,
            cursor: "pointer",
          }}
          onClick={() => router.push("/multi-cam-view/1")}
        >
          <img
            src="/assets/map-view/icons/enlarge.png"
            alt="enlarge"
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "16px",
              height: "16px",
            }}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 10,
            }}
          >
            {/* <source src="/assets/current-missions/videos/multiscan-x.mp4" type="video/mp4" /> */}
            <source
              src="/assets/current-missions/videos/hawkEye.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: "20px",
          }}
        >
          <div style={{ position: "relative", cursor: "pointer" }}></div>
        </div>
        <video
          key={isFirstVideo ? "video1" : "video2"}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            borderRadius: "16px",
          }}
        >
          {/* <source src="/assets/current-missions/videos/multiscan-x.mp4" type="video/mp4" /> */}
          {/* <source
            src="/assets/current-missions/videos/MapView1.mp4"
            type="video/mp4"
          /> */}
          {/* <source
            src={
              viewMode === "satellite"
                ? "/assets/current-missions/videos/MapView1.mp4"
                : "/assets/current-missions/videos/MapView.mp4"
            }
            type="video/mp4"
          /> */}
          <source
            src={
              isFirstVideo
                ? "/assets/current-missions/videos/MapView_1_slow.mp4"
                : "/assets/current-missions/videos/MapView_slow.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MapView;
