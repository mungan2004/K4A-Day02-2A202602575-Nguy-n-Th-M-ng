import React, { useState, useEffect } from 'react';
import { Baby, Activity, Mic, AlertTriangle, ShieldCheck, PlayCircle, Wind, FileText, MonitorPlay, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' or 'pitch'
  
  const [demoState, setDemoState] = useState('safe'); // 'safe', 'crying', 'blocked'
  const [events, setEvents] = useState([
    { id: 1, time: new Date().toLocaleTimeString(), text: 'System initialized. All sensors online.', type: 'info' }
  ]);
  const [audioBars, setAudioBars] = useState(Array.from({ length: 40 }, () => 10));

  // Simulate audio visualizer
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioBars(prev => prev.map(() => {
        let baseHeight = 10;
        let volatility = 15;
        
        if (demoState === 'crying') {
          baseHeight = 60;
          volatility = 40;
        } else if (demoState === 'blocked') {
          baseHeight = 20;
          volatility = 30; // some muffled noise
        }
        
        return baseHeight + Math.random() * volatility;
      }));
    }, 100);
    return () => clearInterval(interval);
  }, [demoState]);

  const addEvent = (text, type = 'info') => {
    setEvents(prev => [{
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      text,
      type
    }, ...prev].slice(0, 50));
  };

  const triggerCrying = () => {
    setDemoState('crying');
    addEvent('AUDIO AI: Detected baby crying pattern (Confidence: 98%)', 'warning');
    setTimeout(() => {
      addEvent('SYSTEM: Auto-playing soothing White Noise...', 'info');
    }, 1500);
  };

  const triggerBlocked = () => {
    setDemoState('blocked');
    addEvent('VISION AI: Face blocked / Unsafe posture detected! (Latency: 1.2s)', 'warning');
    addEvent('SYSTEM: Sending emergency alert to parents!', 'warning');
  };

  const resetSafe = () => {
    setDemoState('safe');
    addEvent('SYSTEM: Status returned to Safe.', 'info');
  };

  // Determine Bounding Box styles based on state
  const bbStyle = {
    top: demoState === 'blocked' ? '30%' : '25%',
    left: demoState === 'blocked' ? '25%' : '35%',
    width: demoState === 'blocked' ? '50%' : '30%',
    height: demoState === 'blocked' ? '40%' : '25%',
  };

  return (
    <div className="app-container">
      {/* Critical Alert Overlay */}
      {demoState === 'blocked' && activeTab === 'demo' && (
        <div className="critical-alert-overlay">
          <h1>CRITICAL ALERT: CHECK BABY</h1>
        </div>
      )}

      {/* Header */}
      <header className="glass-panel header">
        <div className="brand">
          <Baby size={32} className="brand-icon" />
          <h1>Nora AI Monitor</h1>
        </div>
        
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'pitch' ? 'active' : ''}`}
            onClick={() => setActiveTab('pitch')}
          >
            <FileText size={18} /> Problem & Workflow
          </button>
          <button 
            className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('demo')}
          >
            <MonitorPlay size={18} /> Live Demo
          </button>
        </div>

        <div className="status-indicator">
          <div className="status-dot"></div>
          Live - System Active
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* ===================== TAB: PITCH DECK ===================== */}
        {activeTab === 'pitch' && (
          <div className="pitch-container glass-panel">
            <div className="pitch-header">
              <h2>Project Overview: AI Baby Monitoring System</h2>
              <p>Ứng dụng công nghệ Computer Vision và Audio AI để giám sát giấc ngủ của trẻ sơ sinh 24/7.</p>
            </div>
            
            <div className="pitch-grid">
              {/* Problem Statement */}
              <div className="pitch-card problem-card">
                <h3><AlertTriangle color="#ff3366" size={20}/> 1. Problem Statement & Pain Points</h3>
                <ul>
                  <li><strong>Thời gian túc trực:</strong> Trẻ ngủ 14-17 giờ/ngày, bố mẹ kiệt sức vì mất ngủ hàng chục tiếng để canh chừng con.</li>
                  <li><strong>Nguy cơ cao:</strong> Rủi ro hội chứng đột tử trẻ sơ sinh (SIDS), ngạt thở do lật úp mặt vào chăn đệm.</li>
                  <li><strong>Thiết bị cũ:</strong> Baby monitor truyền thống chỉ quan sát thụ động, không có cảnh báo tự động. Thiết bị wearable (đeo) thì gây kích ứng da bé.</li>
                </ul>
              </div>

              {/* Solution */}
              <div className="pitch-card solution-card">
                <h3><ShieldCheck color="#00ff66" size={20}/> 2. Solution (Hướng giải quyết)</h3>
                <ul>
                  <li><strong>Computer Vision:</strong> Nhận diện tư thế ngủ nguy hiểm, chăn gối che lấp vùng mặt.</li>
                  <li><strong>Audio AI:</strong> Phân tích tiếng khóc (đói, đau, khó chịu) và phát hiện âm thanh ho, sặc.</li>
                  <li><strong>Tự động hóa:</strong> Tự động phát White Noise dỗ dành. Gửi cảnh báo về điện thoại phụ huynh trong chưa đầy 2 giây.</li>
                </ul>
              </div>
              
              {/* Workflow */}
              <div className="pitch-card workflow-card" style={{ gridColumn: '1 / -1' }}>
                <h3><Activity color="#00f0ff" size={20}/> 3. Workflow Transformation</h3>
                <div className="workflow-compare">
                  <div className="workflow-col before">
                    <h4>Current State (Manual)</h4>
                    <div className="wf-steps">
                      <div className="step">1. Đặt bé ngủ (5')</div>
                      <ArrowRight size={16} />
                      <div className="step bottleneck">2. Phụ huynh ngồi canh nôi (Lên tới 10 tiếng) <br/> <small><i>[Bottleneck]</i></small></div>
                      <ArrowRight size={16} />
                      <div className="step">3. Trẻ khóc, dỗ bé (10')</div>
                    </div>
                  </div>
                  
                  <div className="workflow-col after">
                    <h4>Future State (AI Workflow)</h4>
                    <div className="wf-steps">
                      <div className="step">1. Đặt bé ngủ (5')</div>
                      <ArrowRight size={16} />
                      <div className="step ai-step">2. AI Camera/Audio tự động giám sát (0' người)</div>
                      <ArrowRight size={16} />
                      <div className="step ai-step">3. Cảnh báo tới App (&lt; 2s)</div>
                      <ArrowRight size={16} />
                      <div className="step">4. Phụ huynh dỗ bé (10')</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="pitch-card metrics-card" style={{ gridColumn: '1 / -1' }}>
                <h3><Activity color="#00f0ff" size={20}/> 4. Success Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-val">&gt; 90%</span>
                    <span className="metric-label">AI Accuracy</span>
                  </div>
                  <div className="metric">
                    <span className="metric-val">&lt; 2 giây</span>
                    <span className="metric-label">Latency (Độ trễ)</span>
                  </div>
                  <div className="metric">
                    <span className="metric-val">&lt; 5%</span>
                    <span className="metric-label">False Positive Rate</span>
                  </div>
                  <div className="metric">
                    <span className="metric-val">0 giờ</span>
                    <span className="metric-label">Thời gian canh trực tiếp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB: LIVE DEMO ===================== */}
        {activeTab === 'demo' && (
          <div className="demo-layout">
            {/* Camera Feed */}
            <div className="glass-panel camera-container">
              <div className="camera-hud">
                <div className="hud-item">CAM_01_NIGHTVISION</div>
                <div className="hud-item">AI_VISION_ON</div>
              </div>
              
              <div className="video-wrapper">
                <img 
                  src="./baby-mockup.png" 
                  alt="Baby sleeping in crib" 
                  className={`video-feed ${demoState === 'blocked' ? 'alert-mode' : ''}`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div style="color: #666; text-align: center; margin-top: 40%">[Camera Feed Offline / Generating...]</div>';
                  }}
                />
                
                <div className="ai-overlay">
                  <div 
                    className={`bounding-box ${demoState === 'blocked' ? 'danger' : ''}`}
                    style={bbStyle}
                  >
                    <div className="bb-label">
                      {demoState === 'safe' && 'Face: Clear | Posture: Safe'}
                      {demoState === 'crying' && 'Face: Clear | Audio: Crying'}
                      {demoState === 'blocked' && 'WARNING: Face Obscured'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              
              {/* Audio AI Panel */}
              <div className="glass-panel audio-panel">
                <div className="panel-title">
                  <Mic size={18} /> Audio AI Analysis
                </div>
                <div className="audio-visualizer">
                  {audioBars.map((height, i) => (
                    <div 
                      key={i} 
                      className={`bar ${demoState === 'crying' ? 'crying' : ''}`} 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className={`audio-status ${demoState === 'crying' ? 'crying' : ''}`}>
                  {demoState === 'crying' ? 'CRITICAL: Crying Detected' : 'STATUS: Ambient Noise / Quiet'}
                </div>
              </div>

              {/* Activity Log */}
              <div className="glass-panel events-panel">
                <div className="panel-title">
                  <Activity size={18} /> Real-time Activity Log
                </div>
                <div className="events-list">
                  {events.map(ev => (
                    <div key={ev.id} className={`event-item ${ev.type === 'warning' ? 'warning' : ''}`}>
                      <div className="event-time">{ev.time}</div>
                      <div className="event-desc">{ev.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="glass-panel controls-panel">
                <div className="panel-title">
                  <PlayCircle size={18} /> Presentation Demo Controls
                </div>
                <div className="demo-buttons">
                  <button 
                    onClick={resetSafe} 
                    className={demoState === 'safe' ? 'active-demo' : ''}
                  >
                    <ShieldCheck size={24} /> Normal Sleeping
                  </button>
                  <button 
                    onClick={triggerCrying}
                    className={demoState === 'crying' ? 'active-demo' : ''}
                    style={{ borderColor: demoState === 'crying' ? 'var(--neon-purple)' : '' }}
                  >
                    <Wind size={24} /> Simulate Crying (Audio)
                  </button>
                  <button 
                    onClick={triggerBlocked}
                    className={demoState === 'blocked' ? 'active-demo' : ''}
                    style={{ gridColumn: '1 / -1' }}
                  >
                    <AlertTriangle size={24} color="#ff3366" /> Simulate Danger (Face Blocked)
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}
