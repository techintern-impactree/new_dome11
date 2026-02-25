"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AssetStats from "../ui/AssetStats";
import IDBox from "../ui/IDBox";

// ------------------------------
//   Styles (to avoid inline mess)
// ------------------------------
const dropdownBox: React.CSSProperties = {
  width: "161px",
  height: "42px",
  borderRadius: "4px",
  padding: "6px",
  backgroundColor: "#404040",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  color: "#fff",
  fontSize: "14px",
};

const dropdownList: React.CSSProperties = {
  width: "161px",
  position: "absolute",
  backgroundColor: "#404040",
  borderRadius: "4px",
  padding: "6px",
  zIndex: 10,
};

const dropdownItem: React.CSSProperties = {
  padding: "8px",
  color: "#ffffff",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "2px",
};

// ------------------------------
//   Component
// ------------------------------
const GalleryAssets = () => {
  const [activeIcon, setActiveIcon] = useState("vector");

  // Filters
  const [currentView, setCurrentView] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMission, setSelectedMission] = useState("All");

  // Dropdowns
  const [showViewDropdown, setShowViewDropdown] = useState(false);
  const [showMissionDropdown, setShowMissionDropdown] = useState(false);

  // ------------------------------
  //   Data
  // ------------------------------
  const galleryItems = [
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_1.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/current-missions/videos/DFSF5.mp4",
      title: "Hawk Eye",
      tag: "Payload",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 2",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_19.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/current-missions/videos/MapView_slow.mp4",
      title: "Hawk Eye",
      tag: "Payload",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 2",
    },
    {
      src: "/assets/current-missions/videos/DFSF2.mp4",
      title: "Scout Alpha",
      tag: "Surveillance",
      id: "ZO3-SRV-1201",
      type: "video",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_6.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/current-missions/videos/DFSF5.mp4",
      title: "Hawk Eye",
      tag: "Payload",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 2",
    },
    {
      src: "/assets/current-missions/videos/DFSF1.mp4",
      title: "Hawk Eye",
      tag: "Kamikaze",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 1",
    },
    {
      src: "/assets/current-missions/videos/hawkEye.mp4",
      title: "Scout Alpha",
      tag: "Payload",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 2",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_2.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 2",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_3.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/current-missions/videos/DFSF4.mp4",
      title: "Hawk Eye",
      tag: "Kamikaze",
      id: "PAY-0729",
      type: "video",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_4.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_11.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_5.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_7.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_8.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_9.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_10.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_12.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },

    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_13.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_14.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_15.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_16.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_17.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
    {
      src: "/assets/recorded-gallery/screenshots/Screenshot_18.png",
      title: "Scout Alpha",
      tag: "Hybrid",
      id: "PAY-0729",
      type: "image",
      mission: "Mission 1",
    },
  ];

  // Get unique tags
  const tags = ["All", ...Array.from(new Set(galleryItems.map((i) => i.tag)))];

  // Missions
  const missions = ["All", "Mission 1", "Mission 2"];

  // ------------------ FILTER ITEMS (Type + Mission ONLY) ------------------
  const filteredItems = galleryItems.filter((item) => {
    // Videos / Images filter
    if (currentView === "Videos" && item.type !== "video") return false;
    if (currentView === "Images" && item.type !== "image") return false;

    // Mission Filter
    if (selectedMission !== "All" && item.mission !== selectedMission)
      return false;

    return true;
  });

  // ------------------ TAG COUNTS BASED ON ABOVE FILTERS ------------------
  const filteredTagCounts = filteredItems.reduce((acc: any, item) => {
    acc[item.tag] = (acc[item.tag] || 0) + 1;
    return acc;
  }, {});

  // ------------------ FINAL ITEMS (Apply tag filter LAST) ------------------
  const finalItems =
    activeCategory === "All"
      ? filteredItems
      : filteredItems.filter((item) => item.tag === activeCategory);

  // Stats
  const assetStats = [
    {
      label: "Total Images:",
      value: galleryItems.filter((i) => i.type === "image").length,
    },
    {
      label: "Total Videos:",
      value: galleryItems.filter((i) => i.type === "video").length,
    },
  ];

  // ------------------------------
  //   UI
  // ------------------------------
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#1a1a1a" }}
    >
      <Sidebar activeIcon={activeIcon} onIconClick={setActiveIcon} />

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
          position: "relative",
          overflow: "auto",
        }}
      >
        {/* ---------------- VIEW & MISSION DROPDOWNS ---------------- */}
        <div className="d-flex justify-content-center">
          {/* View Dropdown */}
          <div
            style={{
              ...dropdownBox,
              position: "absolute",
              right: "190px",
              top: "20px",
            }}
            onClick={() => {
              setShowViewDropdown(!showViewDropdown);
              setShowMissionDropdown(false);
            }}
          >
            <span>{currentView}</span>
            <img
              src="/assets/asset-details/icons/dropdown.png"
              alt=""
              width={16}
            />
          </div>

          {showViewDropdown && (
            <div style={{ ...dropdownList, right: "190px", top: "72px" }}>
              {["All", "Videos", "Images"].map((view) => (
                <div
                  key={view}
                  style={dropdownItem}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#505050")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  onClick={() => {
                    setCurrentView(view);
                    setShowViewDropdown(false);
                  }}
                >
                  {view}
                </div>
              ))}
            </div>
          )}

          {/* Mission Dropdown */}
          <div
            style={{
              ...dropdownBox,
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
            onClick={() => {
              setShowMissionDropdown(!showMissionDropdown);
              setShowViewDropdown(false);
            }}
          >
            <span>{selectedMission}</span>
            <img
              src="/assets/asset-details/icons/dropdown.png"
              alt=""
              width={16}
            />
          </div>

          {showMissionDropdown && (
            <div style={{ ...dropdownList, right: "20px", top: "72px" }}>
              {missions.map((m) => (
                <div
                  key={m}
                  style={dropdownItem}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#505050")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  onClick={() => {
                    setSelectedMission(m);
                    setShowMissionDropdown(false);
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={{ marginBottom: "10px" }}>
          <AssetStats stats={assetStats} />
        </div>

        {/* <div
          style={{
            width: "100%",
            height: "1px",
            background: "#555",
            marginBottom: "20px",
          }}
        /> */}

        {/* ---------------- TAG FILTERS ---------------- */}
        <div
          style={{
            height: "41px",
            padding: "4px 10px",
            backgroundColor: "#343434",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          {tags.map((tag) => (
            <div
              key={tag}
              onClick={() => setActiveCategory(tag)}
              style={{
                padding: "6px 12px",
                borderRadius: "4px",
                backgroundColor:
                  activeCategory === tag ? "#3e3e3e" : "transparent",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {tag}
              {""}(
              {tag === "All"
                ? filteredItems.length || 0
                : filteredTagCounts[tag] || 0}
              )
            </div>
          ))}
        </div>

        {/* ---------------- GALLERY GRID ---------------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            width: "100%",
          }}
        >
          {finalItems?.length > 0 ? (
            finalItems.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#404040",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                {item.type === "video" ? (
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
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* Gradient */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 100%)",
                  }}
                />

                {/* Info Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    {item.title}
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
                      width={8}
                      height={8}
                    />
                    <span style={{ fontSize: "11px" }}>{item.tag}</span>
                  </div>
                </div>

                <IDBox
                  id={item.id}
                  position={{ bottom: "15px", right: "15px" }}
                />
              </div>
            ))
          ) : (
            <h1 style={{ fontSize: "18px" }}>No Video / Image Taken</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryAssets;
