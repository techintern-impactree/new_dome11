"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import overviewIcon from "../../../../public/assets/sidebar-icons/mission.png";
import mapIcon from "../../../../public/assets/sidebar-icons/map.png";
import cameraIcon from "../../../../public/assets/sidebar-icons/camera.png";
import galleryIcon from "../../../../public/assets/sidebar-icons/gallery.png";
import droneIcon from "../../../../public/assets/sidebar-icons/drone.png";
import notificationsIcon from "../../../../public/assets/sidebar-icons/notifications.png";
import profileIcon from "../../../../public/assets/sidebar-icons/profile.png";
import settingsIcon from "../../../../public/assets/sidebar-icons/settings.png";
import logoutIcon from "../../../../public/assets/sidebar-icons/sign-out.png";
import rubicrLogo from "../../../../public/assets/sidebar-icons/rubicr-logo.png";
import domeLogo from "../../../../public/assets/sign-in/Dome_logo.png";
import IndrashakthiLogo from "../../../../public/assets/sign-in/indrashakthi_white_1.svg";
import SignOut from "../SignOut/SignOut";

interface SidebarProps {
  activeIcon: string;
  onIconClick: (iconName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeIcon, onIconClick }) => {
  const pathname = usePathname();
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);

  const getCurrentActiveIcon = () => {
    const routeToIconMap: Record<string, string> = {
      "/cockpit": "overview",
      "/cam-view": "camera",
      "/camera-view": "camera",
      "/multi-cam-view": "camera",
      "/night-vision-cam": "camera",
      "/thermal-cam-view": "camera",
      "/map-view": "map",
      "/gallery": "gallery",
      "/asset-details": "drone",
      "/notifications": "notifications",
      "/profile": "profile",
    };

    // if (pathname.includes('cam') || pathname.includes('camera')) {
    //   return 'camera';
    // }

    // if (pathname.includes('gallery')) {
    //   return 'gallery';
    // }
    // 🔥 Handle dynamic route: /multi-cam-view/{id}
    if (pathname.startsWith("/multi-cam-view/")) {
      return "camera";
    }

    if (pathname.startsWith("/asset")) {
      return "drone";
    }

    return routeToIconMap[pathname] || activeIcon;
  };

  const currentActiveIcon = getCurrentActiveIcon();

  const getIconStyle = (iconName: string) => {
    const isActive = currentActiveIcon === iconName;
    return {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: isActive ? "#ffffff" : "#3E3E3E",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
    };
  };

  const getIconImageStyle = (iconName: string) => {
    const isActive = currentActiveIcon === iconName;

    if (isActive) {
      return {
        width: "24px",
        height: "24px",
        filter: "invert(1)",
      };
    }

    return {
      width: "24px",
      height: "24px",
      filter: "invert(0)",
    };
  };

  const handleIconClick = (iconName: string) => {
    onIconClick(iconName);

    switch (iconName) {
      case "overview":
        window.location.href = "/cockpit";
        break;
      case "camera":
        window.location.href = "/multi-cam-view";
        break;
      case "map":
        window.location.href = "/map-view";
        break;
      case "gallery":
        window.location.href = "/gallery";
        break;
      case "drone":
        window.location.href = "/asset-details";
        break;
      // case "notifications":
      //   window.location.href = "/notifications";
      //   break;
      // case "profile":
      //   window.location.href = "/profile";
      //   break;
      case "logout":
        setShowSignOutPopup(true);
        break;
      default:
        break;
    }
  };

  const handleCloseSignOut = () => {
    setShowSignOutPopup(false);
  };

  const handleConfirmSignOut = () => {
    console.log("User signed out");
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userSession");

    setShowSignOutPopup(false);
    window.location.href = "/sign_in";
  };

  return (
    <>
      <div
        style={{
          width: "80px",
          backgroundColor: "#292929",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "166px",
              borderRadius: "50px",
              padding: "4px",
              backgroundColor: "#464646",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              className="tooltip"
              style={getIconStyle("overview")}
              onClick={() => handleIconClick("overview")}
            >
              <img
                src={overviewIcon.src}
                alt="Overview"
                style={getIconImageStyle("overview")}
              />
              <span className="tooltip-text">Cockpit</span>
            </div>

            <div
              className="tooltip"
              style={getIconStyle("camera")}
              onClick={() => handleIconClick("camera")}
            >
              <img
                src={cameraIcon.src}
                alt="Camera"
                style={getIconImageStyle("camera")}
              />
              <span className="tooltip-text">Multi-Cam</span>
            </div>

            <div
              className="tooltip"
              style={getIconStyle("map")}
              onClick={() => handleIconClick("map")}
            >
              <img
                src={mapIcon.src}
                alt="Map"
                style={getIconImageStyle("map")}
              />
              <span className="tooltip-text">Map View</span>
            </div>
          </div>

          <div
            className="tooltip"
            style={getIconStyle("gallery")}
            onClick={() => handleIconClick("gallery")}
          >
            <img
              src={galleryIcon.src}
              alt="Gallery"
              style={getIconImageStyle("gallery")}
            />
            <span className="tooltip-text">Gallery</span>
          </div>

          <div
            className="tooltip"
            style={getIconStyle("drone")}
            onClick={() => handleIconClick("drone")}
          >
            <img
              src={droneIcon.src}
              alt="Drone"
              style={getIconImageStyle("drone")}
            />
            <span className="tooltip-text">Assets</span>
          </div>

          <div
            style={{
              width: "30px",
              height: "1px",
              backgroundColor: "#949494",
            }}
          ></div>

          <div
            className="tooltip"
            style={getIconStyle("notifications")}
            onClick={() => handleIconClick("notifications")}
          >
            <img
              src={notificationsIcon.src}
              alt="Notifications"
              style={getIconImageStyle("notifications")}
            />
            <span className="tooltip-text">Notifications</span>
          </div>

          <div
            className="tooltip"
            style={getIconStyle("profile")}
            onClick={() => handleIconClick("profile")}
          >
            <img
              src={profileIcon.src}
              alt="Profile"
              style={getIconImageStyle("profile")}
            />
            <span className="tooltip-text">Profile</span>
          </div>

          <div
            className="tooltip"
            style={getIconStyle("settings")}
            onClick={() => handleIconClick("settings")}
          >
            <img
              src={settingsIcon.src}
              alt="Settings"
              style={getIconImageStyle("settings")}
            />
            <span className="tooltip-text">Settings</span>
          </div>

          <div
            className="tooltip"
            style={getIconStyle("logout")}
            onClick={() => handleIconClick("logout")}
          >
            <img
              src={logoutIcon.src}
              alt="Log Out"
              style={getIconImageStyle("logout")}
            />
            <span className="tooltip-text">Logout</span>
          </div>
        </div>

        <div
          style={{
            width: "75px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            // src={domeLogo.src}
            src={IndrashakthiLogo.src}
            alt="Dome Logo"
            style={{
              width: "75px",
              height: "80px",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          />
        </div>
      </div>

      {showSignOutPopup && (
        <SignOut
          onClose={handleCloseSignOut}
          onConfirm={handleConfirmSignOut}
        />
      )}
    </>
  );
};

export default Sidebar;
