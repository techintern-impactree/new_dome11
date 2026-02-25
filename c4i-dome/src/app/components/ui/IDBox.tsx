'use client';
import React from 'react';

interface IDBoxProps {
  id: string;
  backgroundColor?: string;
  textColor?: string;
  dotColor?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const IDBox = ({
  id,
  backgroundColor = '#009E06',
  textColor = '#ffffff',
  dotColor = '#ffffff',
  position = { bottom: '20px', right: '20px' }
}: IDBoxProps) => {
  return (
    <div style={{
      position: 'absolute',
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
      backgroundColor: backgroundColor,
      color: textColor,
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      zIndex: 2 
    }}>
      <div style={{
        width: '6px',
        height: '6px',
        backgroundColor: dotColor,
        borderRadius: '50%'
      }}></div>
      {id}
    </div>
  );
};

export default IDBox;

  
