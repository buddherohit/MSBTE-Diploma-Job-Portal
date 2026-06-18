import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';

export default function SystemHealthMonitoring() {
  const [cpuLoad, setCpuLoad] = useState(42.8);
  const [loadBars, setLoadBars] = useState([40, 45, 38, 50, 62, 58, 42, 30, 45, 55, 40, 65, 80, 55, 40]);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [systemStopped, setSystemStopped] = useState(false);
  const [ipTrace, setIpTrace] = useState('');
  
  // Dynamic Incident Logs state
  const [incidentLogs, setIncidentLogs] = useState([
    { id: 1, time: '14:22:01.04', type: 'Failed Job: Emailer_v2', src: 'Queue::Industrial_Jobs', level: 'Critical', color: 'bg-red-100 text-red-800' },
    { id: 2, time: '14:18:45.12', type: 'Failed Admin Login', src: 'IP: 192.168.1.104', level: 'Warning', color: 'bg-yellow-100 text-yellow-800' },
    { id: 3, time: '14:05:00.00', type: 'Daily Snapshot', src: 'Sys::Internal_Backup', level: 'Success', color: 'bg-green-100 text-green-800' },
    { id: 4, time: '13:58:22.88', type: 'SQL Injection Blocked', src: 'WAF::Filter_Primary', level: 'Blocked', color: 'bg-red-100 text-red-800' }
  ]);

  // Simulate dynamic load fluctuations
  useEffect(() => {
    if (systemStopped) return;
    const interval = setInterval(() => {
      const variation = (Math.random() * 4 - 2);
      setCpuLoad(prev => parseFloat(Math.min(Math.max(prev + variation, 15), 95).toFixed(1)));
    }, 4000);
    return () => clearInterval(interval);
  }, [systemStopped]);

  const handleForceRefresh = () => {
    // Generate new random chart heights
    const newBars = Array.from({ length: 15 }, () => Math.floor(20 + Math.random() * 75));
    setLoadBars(newBars);
    setCpuLoad(parseFloat((30 + Math.random() * 50).toFixed(1)));
    alert('System metrics re-calculated from clusters.');
  };

  const handleEmergencyStop = () => {
    if (systemStopped) {
      setSystemStopped(false);
      alert('System restarted successfully. Booting server nodes...');
    } else {
      const confirmStop = window.confirm('WARNING: Emergency stop will suspend database writes and platform APIs immediately. Proceed?');
      if (confirmStop) {
        setSystemStopped(true);
        setCpuLoad(0);
        setLoadBars(Array(15).fill(0));
        alert('All platform clusters have been suspended. APIs are offline.');
      }
    }
  };

  const handleMaintenanceToggle = () => {
    setMaintenanceMode(prev => {
      const next = !prev;
      alert(`Maintenance Mode ${next ? 'ENABLED' : 'DISABLED'}. ${next ? 'All user logins suspended.' : 'User logins restored.'}`);
      return next;
    });
  };

  const handleTraceIP = (e) => {
    e.preventDefault();
    if (!ipTrace.trim()) return;
    
    const timeString = new Date().toLocaleTimeString('en-US', { hour12: false });
    const newIncident = {
      id: Date.now(),
      time: timeString,
      type: `IP Trace: ${ipTrace}`,
      src: 'Network::Traceroute',
      level: 'Info',
      color: 'bg-blue-100 text-blue-800'
    };
    
    setIncidentLogs(prev => [newIncident, ...prev]);
    alert(`Traceroute started for IP/URL: ${ipTrace}. Output sent to logs queue.`);
    setIpTrace('');
  };

  const handleBanIP = (src) => {
    alert(`Access blocked for: ${src}. Security policies updated.`);
    const timeString = new Date().toLocaleTimeString('en-US', { hour12: false });
    setIncidentLogs(prev => [
      { id: Date.now(), time: timeString, type: `IP BANNED: ${src}`, src: 'WAF::IPBlocklist', level: 'Blocked', color: 'bg-red-100 text-red-800' },
      ...prev
    ]);
  };

  const handleRetryJob = (id) => {
    alert('Job execution triggered. Retrying email dispatch...');
    setIncidentLogs(prev => prev.map(log => {
      if (log.id === id) {
        return { ...log, level: 'Success', color: 'bg-green-100 text-green-800', type: 'Emailer_v2 Retried successfully' };
      }
      return log;
    }));
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="health" />

      {/* Main Content Canvas */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {systemStopped && (
          <div className="bg-red-600 text-white p-4 rounded-xl mb-6 font-bold flex items-center justify-between shadow-lg animate-pulse">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span>
              <span>EMERGENCY SUSPENSION ACTIVE: All read/write database actions are suspended.</span>
            </div>
            <button onClick={handleEmergencyStop} className="bg-white text-red-600 px-4 py-1 rounded-lg text-xs font-bold shadow hover:bg-neutral-100">
              RESTART APIs
            </button>
          </div>
        )}

        {/* Header Section */}
        <div className="mb-8 mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">System Health & Ops</h2>
            <p className="text-on-surface-variant font-medium text-sm mt-1">
              Real-time infrastructure monitoring and industrial-grade configuration.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleForceRefresh}
              className="bg-white border border-outline-variant text-on-surface px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-surface-container transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">refresh</span>
              FORCE REFRESH
            </button>
            <button 
              onClick={handleEmergencyStop}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md ${
                systemStopped ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              {systemStopped ? 'RESTART CLUSTER' : 'EMERGENCY STOP'}
            </button>
          </div>
        </div>

        {/* Bento Grid - Real-time Graphs */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8">
          {/* Server Load Graph */}
          <div className="xl:col-span-8 bg-white border border-outline-variant rounded-2xl p-6 relative overflow-hidden shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider pl-0.5">Server Load (CPU/MEM)</h3>
                <p className="text-3xl font-black text-on-surface mt-1">
                  {cpuLoad}% <span className="text-xs font-semibold text-outline ml-2">Avg. Cluster Load</span>
                </p>
              </div>
              <div className="flex gap-1.5 font-bold text-[10px] text-on-surface">
                <span className="px-2.5 py-1 bg-surface-container rounded-lg border border-outline-variant/50">1h</span>
                <span className="px-2.5 py-1 bg-primary text-white rounded-lg shadow-sm">6h</span>
                <span className="px-2.5 py-1 bg-surface-container rounded-lg border border-outline-variant/50">24h</span>
              </div>
            </div>
            
            <div className="h-44 w-full flex items-end gap-1.5">
              {loadBars.map((val, idx) => (
                <div 
                  key={idx}
                  style={{ height: `${val}%` }}
                  className="flex-1 bg-primary/25 rounded-t-lg hover:bg-primary transition-all duration-300 cursor-pointer"
                  title={`Cluster segment #${idx + 1}: ${val}%`}
                ></div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-between text-[9px] font-bold text-outline uppercase tracking-wider pl-1">
              <span>12:00 PM</span>
              <span>01:00 PM</span>
              <span>02:00 PM</span>
              <span>03:00 PM</span>
              <span>04:00 PM</span>
              <span>05:00 PM</span>
            </div>
          </div>

          {/* API Latency */}
          <div className="xl:col-span-4 bg-white border border-outline-variant rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xs font-bold text-outline uppercase tracking-wider pl-0.5">API Latency metrics</h3>
              <div className="flex items-center justify-center p-6 bg-surface-container rounded-full w-28 h-28 mx-auto border-4 border-primary mt-6 shadow-sm">
                <div className="text-center">
                  <p className="text-xl font-black text-on-surface">{systemStopped ? 'Offline' : '84ms'}</p>
                  <p className="text-[9px] font-bold text-primary tracking-wider mt-0.5">{systemStopped ? 'STOPPED' : 'NOMINAL'}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-2.5 font-semibold text-xs text-on-surface-variant">
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span>Auth API Gateway</span>
                <span className="font-bold text-primary">12ms</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span>Job Recommendation Engine</span>
                <span className="font-bold text-primary">42ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Database Read Replicas</span>
                <span className="font-bold text-orange-600">156ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration & Logs Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Platform Controls */}
          <div className="xl:col-span-1 flex flex-col gap-6">
            <section className="bg-inverse-surface text-white rounded-2xl p-6 shadow-md border border-outline">
              <h3 className="text-xs font-bold text-primary-fixed uppercase tracking-widest mb-6">Platform Controls</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm">Platform Maintenance Mode</p>
                    <p className="text-[10px] text-primary-fixed-dim mt-0.5">Suspend all user registrations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="sr-only peer"
                      checked={maintenanceMode}
                      onChange={handleMaintenanceToggle}
                    />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
                
                <div className="pt-4 border-t border-white/10 text-left">
                  <p className="font-bold text-sm mb-3">Incremental Data Backup</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => alert('Daily database backup triggered to cloud server.')}
                      className="bg-white/10 border border-white/20 text-[9px] font-bold py-2 rounded-lg uppercase hover:bg-white/20"
                    >
                      Daily Sync
                    </button>
                    <button 
                      onClick={() => alert('Full archival database copy initialized.')}
                      className="bg-primary text-white text-[9px] font-bold py-2 rounded-lg uppercase border border-primary-container"
                    >
                      Weekly Full
                    </button>
                  </div>
                  <p className="text-[10px] text-primary-fixed-dim mt-2.5 italic">Last backup: Sunday, 02:00 AM</p>
                </div>
              </div>
            </section>
            
            {/* IP Trace lookup */}
            <div className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm text-left">
              <h4 className="text-xs font-bold text-on-surface mb-3 uppercase tracking-wider pl-0.5">Router Traceroute IP</h4>
              <form onSubmit={handleTraceIP} className="flex gap-2">
                <input 
                  className="flex-grow bg-surface-container-low border border-outline-variant rounded-xl text-xs font-semibold p-2.5 outline-none focus:ring-2 focus:ring-primary focus:bg-white" 
                  placeholder="e.g. 192.168.1.104" 
                  type="text"
                  value={ipTrace}
                  onChange={(e) => setIpTrace(e.target.value)}
                />
                <button type="submit" className="p-2.5 bg-primary hover:brightness-110 text-white rounded-xl flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                </button>
              </form>
            </div>
          </div>

          {/* Incident Logs Table */}
          <div className="xl:col-span-2 bg-white border border-outline-variant rounded-2xl flex flex-col overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-surface-container-high border-b border-outline-variant flex justify-between items-center">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase pl-0.5">Incident Logs & Security Events</h3>
              <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full uppercase">
                Monitoring Live
              </span>
            </div>
            
            <div className="overflow-x-auto flex-grow">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-[10px] font-bold text-outline uppercase border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Event Type</th>
                    <th className="px-6 py-3">Source IP/Node</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant font-semibold text-xs">
                  {incidentLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">{log.time}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-outline">dns</span>
                          <span>{log.type}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">{log.src}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${log.color}`}>
                          {log.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {log.level === 'Critical' && (
                          <button 
                            onClick={() => handleRetryJob(log.id)}
                            className="text-primary hover:underline font-bold uppercase text-[10px]"
                          >
                            Retry
                          </button>
                        )}
                        {log.level === 'Warning' && (
                          <button 
                            onClick={() => handleBanIP(log.src)}
                            className="text-red-600 hover:underline font-bold uppercase text-[10px]"
                          >
                            Ban IP
                          </button>
                        )}
                        {log.level !== 'Critical' && log.level !== 'Warning' && (
                          <span className="text-outline text-[10px]">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant w-full py-4 mt-auto flex flex-col sm:flex-row justify-between items-center px-6 lg:ml-72 lg:max-w-[calc(100%-18rem)]">
        <p className="text-xs text-on-surface-variant font-medium">© 2024 MSBTE Diploma Jobs - Industrial Administration Suite</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <Link className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" to="/admin-portal/system-health-monitoring">System Status</Link>
          <a className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" href="mailto:support@dte.gov.in">Admin Support</a>
          <Link className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" to="/admin-portal/admin-settings-platform-controls">Platform Controls</Link>
        </div>
      </footer>
    </div>
  );
}
