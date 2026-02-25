'use client';
import React from 'react';

interface LatLongProps {
  latitude: string;
  longitude: string;
  labelColor?: string;
  valueColor?: string;
  backgroundColor?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  valueFontSize?: string; 
}

const LatLong = ({
  latitude,
  longitude,
  labelColor = '#ffffff',
  valueColor = '#F2CE16',
  backgroundColor = '#00000033',
  position = { top: '20px', right: '20px' },
  width,
  height,
  borderRadius = '8px',
  padding = '12px',
  valueFontSize = '15px'
}: LatLongProps) => {
  return (
    <div style={{
      position: 'absolute',
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
      backgroundColor: backgroundColor,
      width: width,
      height: height,
      borderRadius: borderRadius,
      padding: padding,
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '12px',
        color: labelColor
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Latitude:</span>
          <span style={{
            color: valueColor,
            fontWeight: '600',
            fontSize: valueFontSize 
          }}>
            {latitude}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Longitude:</span>
          <span style={{
            color: valueColor,
            fontWeight: '600',
            fontSize: valueFontSize 
          }}>
            {longitude}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatLong;