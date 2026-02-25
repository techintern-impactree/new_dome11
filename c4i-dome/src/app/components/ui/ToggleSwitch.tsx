"use client";

import React from "react";

export interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (newState: boolean) => void;
  id?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  id,
  size = "md",
  disabled = false,
}) => {
  const sizeConfig = {
    sm: {
      width: "44px",
      height: "22px",
      handleSize: "18px",
      leftOn: "24px",
      leftOff: "2px",
    },
    md: {
      width: "52px",
      height: "28px",
      handleSize: "22px",
      leftOn: "26px",
      leftOff: "2px",
    },
    lg: {
      width: "60px",
      height: "32px",
      handleSize: "26px",
      leftOn: "30px",
      leftOff: "2px",
    },
  };

  const { width, height, handleSize, leftOn, leftOff } = sizeConfig[size];

  const handleClick = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        borderRadius: "34px",
        backgroundColor: isOn ? "#198754" : "#6c757d",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.3s ease",
        border: "1px solid #ced4da",
        opacity: disabled ? 0.6 : 1,
      }}
      onClick={handleClick}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: isOn ? leftOn : leftOff,
          width: handleSize,
          height: handleSize,
          borderRadius: "50%",
          backgroundColor: "white",
          transition: "left 0.3s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      />
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleClick}
        style={{
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};

export default ToggleSwitch;
