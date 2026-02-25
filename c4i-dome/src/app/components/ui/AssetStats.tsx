import React from 'react';

interface AssetStatItem {
  label: string;
  value: number;
}

interface AssetStatsProps {
  stats: AssetStatItem[];
}

const AssetStats: React.FC<AssetStatsProps> = ({ stats }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: '20px',
      gap: '30px',
      width: '100%'
    }}>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#ffffff'
            }}>
              {stat.label}
            </span>
            <button style={{
              width: '72px',
              height: '30px',
              borderRadius: '4px',
              padding: '0 6px',
              opacity: 1,
              backgroundColor: '#404040',
              color: '#ffffff',
              border: 'none',
              fontFamily: 'Poppins',
              fontWeight: 1000,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {stat.value}
            </button>
          </div>
          
          {index < stats.length - 1 && (
            <div style={{
              height: '20px',
              width: '1px',
              backgroundColor: '#555555'
            }}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AssetStats;