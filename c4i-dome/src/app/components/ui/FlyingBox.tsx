'use client';
import React from 'react';
import greenDot from '../../../../public/assets/current-missions/icons/green-dot.png';

interface FlyingBoxProps {
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  iconGap?: string;
  status?: 'Flying' | 'Ready'; // status props for cockpit and assets page
}

const FlyingBox = ({
  position = { top: '20px', left: '20px' },
  iconGap = '8px',
  status = 'Flying' 
}: FlyingBoxProps) => {
  return (
    <div style={{
      position: 'absolute',
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
      backgroundColor: '#2D2C2C',
      borderRadius: '6px',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: iconGap
    }}>
      <img 
        src={greenDot.src}
        alt="Green Dot" 
        width={10}
        height={10}
      />
      <span style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#ffffff'
      }}>
        {status}
      </span>
    </div>
  );
};

export default FlyingBox;