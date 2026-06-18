import React, { useState, useEffect } from 'react';
import AdminHeader from '../../components/AdminHeader';
import { getCurrentUser, updateUserProfile } from '../../utils/auth';

export default function AdminSettingsPlatformControls() {
  const [adminName, setAdminName] = useState('Rajesh Deshmukh');
  const [adminEmail, setAdminEmail] = useState('r.deshmukh@msbte.maharashtra.gov.in');
  const [accessLevel, setAccessLevel] = useState('SUPER_ADMIN_V4');
  
  // Toggle States
  const [emailDigests, setEmailDigests] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [systemLogs, setSystemLogs] = useState(false);
  const [maintenanceActive, setMaintenanceActive] = useState(false);

  useEffect(() => {
    const session = getCurrentUser();
    if (session && session.role === 'admin') {
      setAdminName(session.name || 'Rajesh Deshmukh');
      setAdminEmail(session.email || 'admin@msbtejobs.in');
      setAccessLevel(session.id || 'SUPER_ADMIN_V4');
    }
  }, []);

  const handleProfileSave = (e) => {
    e.preventDefault();
    const session = getCurrentUser();
    if (session) {
      const updated = {
        ...session,
        name: adminName,
        email: adminEmail
      };
      updateUserProfile(updated);
      alert('Administrator profile updated successfully in MSBTE database!');
    } else {
      alert('Profile details saved to local configuration.');
    }
  };

  const handleInitiateMaintenance = () => {
    setMaintenanceActive(prev => {
      const next = !prev;
      alert(`Platform Maintenance Mode ${next ? 'INITIALIZED' : 'CANCELLED'}. All incoming public traffic will be routed to placeholders.`);
      return next;
    });
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="settings" />

      {/* Main Content Canvas */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {maintenanceActive && (
          <div className="bg-orange-600 text-white p-4 rounded-xl mb-6 font-bold flex items-center gap-2 shadow animate-pulse">
            <span className="material-symbols-outlined">construction</span>
            <span>MAINTENANCE MODE SHIELD ACTIVE: Public users see system updates warning screen.</span>
          </div>
        )}

        {/* Page Header */}
        <div className="mb-8 mt-4">
          <h3 className="text-3xl font-extrabold text-primary tracking-tight">System Configuration</h3>
          <p className="text-on-surface-variant font-medium text-sm mt-1">
            Global administrative settings and core platform controls.
          </p>
        </div>

        {/* Settings Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Profile & Identity */}
          <div className="col-span-12 md:col-span-8 bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pl-0.5">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>badge</span>
              <h4 className="text-lg font-bold text-on-surface">Profile & Identity</h4>
            </div>
            
            <form onSubmit={handleProfileSave} className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs font-semibold">
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold">Admin Full Name</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" 
                  type="text" 
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold">Access Level Key</label>
                <div className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-primary font-bold">
                  {accessLevel}
                </div>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold">Official Email Address</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" 
                  type="email" 
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-outline-variant flex justify-end">
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:brightness-110 shadow-sm transition-all"
                >
                  Save Profile Details
                </button>
              </div>
            </form>
          </div>

          {/* System Defaults */}
          <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant rounded-2xl p-6 shadow-sm text-xs font-semibold text-on-surface">
            <div className="flex items-center gap-2.5 mb-6 pl-0.5">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings_suggest</span>
              <h4 className="text-lg font-bold text-on-surface">System Defaults</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant">
                <span className="text-on-surface-variant">Default Locale</span>
                <span className="text-primary font-bold">English (IN)</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant">
                <span className="text-on-surface-variant">Time Zone</span>
                <span className="text-primary font-bold">IST (UTC +5:30)</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant">
                <span className="text-on-surface-variant">Database Auto-Archive</span>
                <span className="text-primary font-bold">90 Days</span>
              </div>
            </div>
          </div>

          {/* Security & Access */}
          <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant rounded-2xl p-6 shadow-sm border-l-4 border-primary text-left">
            <div className="flex items-center gap-2.5 mb-6 pl-0.5">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>shield_person</span>
              <h4 className="text-lg font-bold text-on-surface">Security & Access</h4>
            </div>
            
            <div className="space-y-3 font-semibold text-xs text-on-surface">
              <button 
                onClick={() => alert("Redirecting to Multi-factor authentication settings...")}
                className="w-full flex items-center justify-between p-3.5 bg-surface-container-low hover:bg-surface-container rounded-xl transition-all"
              >
                <span>Multi-Factor Auth</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[9px] font-bold border border-green-200">ACTIVE</span>
              </button>
              <button 
                onClick={() => alert("Session duration configured to 30 minutes.")}
                className="w-full flex items-center justify-between p-3.5 bg-surface-container-low hover:bg-surface-container rounded-xl transition-all"
              >
                <span>Session Timeout Limit</span>
                <span className="text-on-surface-variant">30m</span>
              </button>
              <button 
                onClick={() => alert("Administrative access keys rotated successfully. Old signatures revoked.")}
                className="w-full py-2.5 bg-primary text-white rounded-xl font-bold mt-2 shadow-sm hover:brightness-110"
              >
                Rotate Access Keys
              </button>
            </div>
          </div>

          {/* Notification Engine */}
          <div className="col-span-12 md:col-span-5 bg-white border border-outline-variant rounded-2xl p-6 shadow-sm text-left">
            <div className="flex items-center gap-2.5 mb-6 pl-0.5">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>notifications_active</span>
              <h4 className="text-lg font-bold text-on-surface">Notification Engine</h4>
            </div>
            
            <div className="space-y-5">
              {/* Switch 1 */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-on-surface">Daily Verification Digests</p>
                  <p className="text-on-surface-variant text-[10px] font-semibold">Summary of pending student registries</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    className="sr-only peer"
                    checked={emailDigests}
                    onChange={() => setEmailDigests(!emailDigests)}
                  />
                  <div className="w-10 h-5 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Switch 2 */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-on-surface">Critical System Alerts</p>
                  <p className="text-on-surface-variant text-[10px] font-semibold">Instant notifications for flagged profiles</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    className="sr-only peer"
                    checked={criticalAlerts}
                    onChange={() => setCriticalAlerts(!criticalAlerts)}
                  />
                  <div className="w-10 h-5 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Switch 3 */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-on-surface">Activity SysLogs</p>
                  <p className="text-on-surface-variant text-[10px] font-semibold">Log minor configuration update events</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    className="sr-only peer"
                    checked={systemLogs}
                    onChange={() => setSystemLogs(!systemLogs)}
                  />
                  <div className="w-10 h-5 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Maintenance Mode */}
          <div className="col-span-12 md:col-span-3 bg-neutral-900 border border-outline text-white rounded-2xl p-6 shadow-md relative overflow-hidden group text-left">
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)' }}></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: '\'FILL\' 1' }}>construction</span>
                  <h4 className="text-base font-bold">Maintenance</h4>
                </div>
                <p className="text-[11px] font-medium leading-relaxed opacity-75 mb-6">
                  Restricts public registration workflows during platform updates.
                </p>
              </div>
              <button 
                onClick={handleInitiateMaintenance}
                className="w-full py-3 px-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all text-xs shadow-sm"
              >
                <span className="material-symbols-outlined text-base">power_settings_new</span>
                {maintenanceActive ? 'TERMINATE SHIELD' : 'INITIATE MODE'}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
