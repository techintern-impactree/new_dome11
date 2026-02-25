"use client";
import React from "react";
import warningIcon from "../../../../public/assets/sidebar-icons/warning-icon.png";

interface SignOutProps {
  onClose: () => void;
  onConfirm: () => void;
}

const SignOut: React.FC<SignOutProps> = ({ onClose, onConfirm }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "#333333",
          borderRadius: "8px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={warningIcon.src}
            alt="Warning"
            style={{
              width: "100px",
              height: "70px",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#ffff",
            textAlign: "center",
          }}
        >
          Are you sure you want to Sign out?
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "10px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              width: "144px",
              height: "42px",
              borderRadius: "6px",
              padding: "6px",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              color: "#374151",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            style={{
              width: "144px",
              height: "42px",
              borderRadius: "6px",
              padding: "6px",
              backgroundColor: "#D90404",
              border: "none",
              color: "#ffffff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#B80202";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#D90404";
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
