"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ToggleSwitch from '../ui/ToggleSwitch'; 
import { useRouter } from 'next/navigation';
import ControlFrame from '../ui/ControlFrame';

const ThermalCamView: React.FC = () => {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState('cam-view'); 
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isThermalCamActive, setIsThermalCamActive] = useState(true); 
  const [isNightVisionActive, setIsNightVisionActive] = useState(false);
  const [showVideoPanel, setShowVideoPanel] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  
     useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isRecording) {
        interval = setInterval(() => {
          setRecordingTime(prev => prev + 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isRecording]);
  
    const handleVideoClick = () => {
      if (!isRecording) {
        setIsRecording(true);
        setShowVideoPanel(true);
        setRecordingTime(0);
        console.log('Recording started');
      } else {
        setIsRecording(false);
        setShowVideoPanel(false);
        console.log('Recording stopped. Total time:', recordingTime, 'seconds');
      }
    };
  
    const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
    console.log(`Navigating to: ${iconName}`);
  };

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  const handleThermalCamToggle = (newState: boolean) => {
    setIsThermalCamActive(newState);
    console.log('Thermal Camera:', newState ? 'ON' : 'OFF');
  };

 const handleNightVisionToggle = (newState: boolean) => {
  setIsNightVisionActive(newState);
  if (newState) {
    router.push('/night-vision-cam');
  }
  console.log('Night Vision:', newState ? 'ON' : 'OFF');
};

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#1a1a1a'
    }}>
      <Sidebar activeIcon={activeIcon} onIconClick={handleIconClick} />
      
      <div style={{
        flex: 1,
        backgroundColor: '#292929',
        margin: '20px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        color: '#ffffff',
        position: 'relative'
      }}>
        
        <div 
          style={{
            position: 'absolute',
            width: '140px',
            height: '35px',
            top: '18px',
            left: '15px',
            borderRadius: '10px',
            padding: '4px 10px',
            background: 'rgba(91, 91, 91, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}
          onClick={toggleLeftPanel}
        >
          <img 
            src={isLeftPanelOpen ? "/assets/map-view/icons/chevrons-left.png" : "/assets/map-view/icons/chevrons-right.png"} 
            alt="chevron" 
            style={{ width: '20px', height: '20px' }} 
          />
        </div>

         <div style={{
          position: 'absolute',
          width: showVideoPanel ? '520px' : '420px',
          height: '90px',
          top: '840px',
          left: '675px',
          borderRadius: '24px',
          padding: '8px 8px 8px 16px',
          background: 'linear-gradient(135deg, rgba(91, 91, 91, 0.3), rgba(255, 255, 255, 0.1))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          opacity: 1,
          transition: 'all 0.3s ease-in-out',
          zIndex: 5
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flex: 1
          }}>
            <img
              src="/assets/current-missions/icons/crosshair.png"
              alt="Crosshair"
              style={{
                width: '60px',
                height: '60px'
              }}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#b2b2b2',
                fontWeight: '500',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Target Distance
              </span>
              <span style={{
                fontSize: '18px',
                color: '#ffffff',
                fontWeight: '500',
                fontFamily: 'Poppins, sans-serif'
              }}>
                12.4 km
              </span>
            </div>
          </div>

          <div style={{
            width: '2px',
            height: '55px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            margin: '0 12px',
            flexShrink: 0
          }}></div>

          <div style={{
            width: showVideoPanel ? '200px' : '140px',
            height: '68px',
            borderRadius: '20px',
            padding: showVideoPanel ? '8px 10px' : '8px',
            background: '#ffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: showVideoPanel ? 'space-between' : 'space-around',
            opacity: 1,
            position: 'relative',
            transition: 'all 0.3s ease-in-out',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src="/assets/camera-view/camera-icon.png"
              alt="Camera"
              style={{
                width: '48px',
                height: '48px',
                flexShrink: 0
              }}
            />

            <div style={{
              width: '2px',
              height: '40px',
              backgroundColor: '#5B5B5B',
              margin: showVideoPanel ? '0 10px' : '0 8px',
              flexShrink: 0,
              opacity: 1,
              visibility: 'visible'
            }}></div>
           
            {!showVideoPanel ? (
              <img
                src="/assets/camera-view/video-camview.png"
                alt="Video Cam"
                style={{
                  width: '48px',
                  height: '48px',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onClick={handleVideoClick}
              />
            ) : (
              <div style={{
                width: '120px',
                height: '49px',
                borderRadius: '50px',
                padding: '6px 10px 6px 6px',
                gap: '10px',
                background: '#5B5B5B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                opacity: 1,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                flexShrink: 0
              }}>
                <img
                  src="/assets/camera-view/record-button.png"
                  alt="Record"
                  style={{
                    width: '35px',
                    height: '35px',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  onClick={handleVideoClick}
                />
               
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  flexShrink: 0
                }}>
                  <img
                    src="/assets/map-view/icons/red-ellipse.png"
                    alt="Recording"
                    style={{
                      width: '10px',
                      height: '10px',
                      animation: isRecording ? 'blink 1s infinite' : 'none',
                      flexShrink: 0
                    }}
                  />
                  <span style={{
                    fontSize: '16px',
                    color: '#ffffff',
                    fontWeight: '500',
                    fontFamily: 'Poppins, monospace',
                    whiteSpace: 'nowrap'
                  }}>
                    {formatTime(recordingTime)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{
          position: 'absolute',
          width: '973.482421875px',
          height: '385px',
          top: '238px',
          left: '440px',
          opacity: 1,
          border: '1px solid transparent' 
        }}>
          <img 
            src="/assets/camera-view/axis-in-center.png" 
            alt="Axis Center"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        <div style={{
          position: 'absolute',
          width: '85px',
          height: '35px',
          top: '18px',
          left: '180px',
          borderRadius: '100px',
          padding: '4px',
          background: 'rgba(91, 91, 91, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50px',
            padding: '10px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="/assets/map-view/icons/above-vector.png" alt="vector" style={{ width: '12px', height: '12px' }} />
          </div>
          
          <div style={{
            width: '46.11px',
            height: '24px',
            borderRadius: '31.48px',
            padding: '2px',
            background: 'linear-gradient(40deg, #FF2F2F, #FF2F2F)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6.3px'
          }}>
            <span style={{ fontSize: '10px', color: 'white', fontWeight: '500' }}>40°</span>
          </div>
        </div>

        {isLeftPanelOpen && (
          <div style={{
            position: 'absolute',
            width: '140px',
            height: '370px',
            top: '60px',
            left: '15px',
            borderRadius: '10px',
            padding: '15px',
            background: 'rgba(91, 91, 91, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/assets/map-view/icons/flying-drone.png" alt="drone" style={{ width: '24px', height: '24px' }} />
                <span style={{ fontSize: '18px', fontWeight: '500' }}>28.04m</span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#cccccc', marginBottom: '4px' }}>Latitude</div>
                  <div style={{ fontSize: '13px', fontWeight: '500' }}>13.01206</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#cccccc', marginBottom: '4px' }}>Longitude</div>
                  <div style={{ fontSize: '13px', fontWeight: '500' }}>80.21817</div>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#cccccc', marginBottom: '4px' }}>Flight Time</div>
                  <div style={{ fontSize: '13px', fontWeight: '500' }}>12:24</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#cccccc', marginBottom: '4px' }}>Flying time left</div>
                  <div style={{ fontSize: '13px', fontWeight: '500' }}>20:22</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span style={{ fontSize: '15px' }}>56%</span>
                <img src="/assets/map-view/icons/battery.png" alt="battery" style={{ width: '20px', height: '18px' }} />
                <img src="/assets/map-view/icons/wifi.png" alt="wifi" style={{ width: '18px', height: '18px' }} />
              </div>
            </div>
          </div>
        )}

         <div
      style={{
        position: 'absolute',
        width: '173px',
        height: '173px',
        top: 'calc(385px + 380px + 1px)', 
        left: '15px',
      }}
    >
      <ControlFrame 
        onUp={() => console.log('Up pressed')}
        onDown={() => console.log('Down pressed')}
        onLeft={() => console.log('Left pressed')}
        onRight={() => console.log('Right pressed')}
        onCenter={() => console.log('Center pressed')}
      />
    </div>

      <div style={{
          position: 'absolute',
          width: '150px',
          height: isLeftPanelOpen ? '545px' : '180px',
          top: '18px',
          right: '12px',
          borderRadius: '10px',
          padding: '15px',
          background: 'rgba(91, 91, 91, 0.2)',
          zIndex: 1,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column'
      }}>
          <div style={{ 
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              Thermal Cam
            </div>
            <ToggleSwitch 
              isOn={isThermalCamActive}
              onToggle={handleThermalCamToggle}
              id="thermalCamSwitch"
              size="md"
            />
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%', marginBottom: '20px' }}></div>

          <div style={{ 
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              Night Vision
            </div>
            <ToggleSwitch 
              isOn={isNightVisionActive}
              onToggle={handleNightVisionToggle}
              id="nightVisionSwitch"
              size="md"
            />
          </div>

           {isLeftPanelOpen && (
            <>
              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%', marginBottom: '14px' }}></div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '13px', color: '#cccccc', marginBottom: '4px' }}>Mission</div>
                <div style={{ fontSize: '15px', fontWeight: '500' }}>Sindoor</div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '13px', color: '#cccccc', marginBottom: '4px' }}>Mission Status</div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#00FF00' }}>Engaged</div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%', marginBottom: '14px' }}></div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '14px', color: '#cccccc', marginBottom: '4px' }}>Speed</div>
                <div style={{ fontSize: '15px', fontWeight: '500' }}>20 Km/h</div>
              </div>
              
              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '100%', marginBottom: '14px' }}></div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '13px', color: '#cccccc', marginBottom: '4px' }}>Wind</div>
                <div style={{ fontSize: '15px', fontWeight: '500' }}>7 m/s</div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '13px', color: '#cccccc', marginBottom: '4px' }}>Home Point</div>
                <div style={{ fontSize: '15px', fontWeight: '500' }}>6 Km</div>
              </div>
            </>
          )}
        </div>

        <div style={{
        position: 'absolute',
        width: '400px',
        height: '88px',
        top: '45px',
        left: '700px',
        padding: '10px',
        gap: '10px',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        }}>
        <img 
            src="/assets/camera-view/abort-mission.png" 
            alt="Abort Mission"
            style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
            }}
        />
        </div>

        <div 
          style={{
            position: 'absolute',
            width: '44px',
            height: '44px',
            top: '595px',
            right: '12px',
            borderRadius: '50px',
            padding: '10px',
            background: 'rgba(242, 206, 22, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #F2CE16',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img src="/assets/map-view/icons/chat-text.png" alt="chat" style={{ width: '20px', height: '20px' }} />
        </div>

        {isChatOpen && (
          <div style={{
            position: 'absolute',
            width: '394px',
            height: '166px',
            top: '550px',
            right: '70px',
            borderRadius: '4px',
            padding: '6px',
            background: '#F2CE161F',
            border: '1px solid #F2CE16',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>Commands</div>
              <img 
                src="/assets/map-view/icons/exit.png" 
                alt="exit" 
                style={{ width: '16px', height: '16px', cursor: 'pointer' }} 
                onClick={() => setIsChatOpen(false)}
              />
            </div>
            
            <div style={{
              width: '382px',
              height: '36px',
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#F2224899'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/assets/map-view/icons/red-ellipse.png" alt="red ellipse" style={{ width: '10px', height: '10px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>Abort Mission</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '80px', justifyContent: 'flex-end' }}>
                <img src="/assets/map-view/icons/clock.png" alt="clock" style={{ width: '12px', height: '12px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>16:43</span>
              </div>
            </div>

            <div style={{
              width: '382px',
              height: '36px',
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#F2224899'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/assets/map-view/icons/red-ellipse.png" alt="red ellipse" style={{ width: '10px', height: '10px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>CMD 1</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '50px', justifyContent: 'flex-end' }}>
                <img src="/assets/map-view/icons/clock.png" alt="clock" style={{ width: '12px', height: '12px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>16:50</span>
              </div>
            </div>

            <div style={{
              width: '382px',
              height: '36px',
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#F2224899'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/assets/map-view/icons/red-ellipse.png" alt="red ellipse" style={{ width: '10px', height: '10px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>CMD 3</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '50px', justifyContent: 'flex-end' }}>
                <img src="/assets/map-view/icons/clock.png" alt="clock" style={{ width: '12px', height: '12px' }} />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>17:17</span>
              </div>
            </div>
          </div>
        )}

        <div style={{
          position: 'absolute',
          width: '44px',
          height: '40px',
          top: '660px',
          right: '12px',
          borderRadius: '6px',
          background: '#ffff',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src="/assets/map-view/icons/zoom-in.png" alt="zoom in" style={{ width: '20px', height: '20px' }} />
        </div>

        <div style={{
          position: 'absolute',
          width: '44px',
          height: '40px',
          top: '720px',
          right: '12px',
          borderRadius: '6px',
          background: '#ffff',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src="/assets/map-view/icons/zoom-out.png" alt="zoom out" style={{ width: '20px', height: '20px' }} />
        </div>
        
        <div style={{
          position: 'absolute',
          width: '178px',
          height: '161px',
          bottom: '10px',
          right: '12px',
          borderRadius: '16px',
          padding: '2px',
          background: 'rgba(91, 91, 91, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}>
          <img 
            src="/assets/map-view/icons/enlarge.png" 
            alt="enlarge" 
            style={{ 
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '16px',
              height: '16px'
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default ThermalCamView;