import React from 'react';

interface ControlFrameProps {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
  onCenter: () => void;
}

const styles: Record<string, React.CSSProperties> = {
  controlFrame: {
    width: '173px',
    height: '173px',
    borderRadius: '50%',
    position: 'relative',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5))',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 255, 0.2) inset',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)', 
    WebkitBackdropFilter: 'blur(5px)'
  },

  innerCircle: {
    width: '69px',
    height: '69px',
    borderRadius: '50%',
    backgroundColor: '#CACACA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },

  centerButton: {
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF', 
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  
  controlButton: {
    position: 'absolute',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,  
  },

  up: {
    top: '8px',
    left: '50%',
  },
  down: {
    bottom: '8px',
    left: '50%',
  },
  left: {
    left: '8px',
    top: '50%',
  },
  right: {
    right: '8px',
    top: '50%',
  },
};

const ControlFrame: React.FC<ControlFrameProps> = ({
  onUp,
  onDown,
  onLeft,
  onRight,
  onCenter,
}) => {
  const assetPathBase = '/assets/camera-view/controls/';
  const rightIconPath = `${assetPathBase}right.png`;
  const leftIconPath = `${assetPathBase}left.png`;
  const upIconPath = `${assetPathBase}up.png`;
  const downIconPath = `${assetPathBase}down.png`;

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  return (
    <div style={styles.controlFrame}>
      <button 
        style={{ ...styles.controlButton, ...styles.up, transform: 'translateX(-50%)' }} 
        onClick={onUp}
      >
        <img src={upIconPath} alt="Up Control" style={imgStyle} />
      </button>

      <button 
        style={{ ...styles.controlButton, ...styles.down, transform: 'translateX(-50%)' }} 
        onClick={onDown}
      >
        <img src={downIconPath} alt="Down Control" style={imgStyle} />
      </button>

      <button 
        style={{ ...styles.controlButton, ...styles.left, transform: 'translateY(-50%)' }} 
        onClick={onLeft}
      >
        <img src={leftIconPath} alt="Left Control" style={imgStyle} />
      </button>

      <button 
        style={{ ...styles.controlButton, ...styles.right, transform: 'translateY(-50%)' }} 
        onClick={onRight}
      >
        <img src={rightIconPath} alt="Right Control" style={imgStyle} />
      </button>

      <div style={styles.innerCircle}>
        <button style={styles.centerButton} onClick={onCenter}>
        </button>
      </div>
    </div>
  );
};

export default ControlFrame;