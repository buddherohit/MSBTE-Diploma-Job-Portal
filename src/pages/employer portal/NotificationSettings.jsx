import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function NotificationSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Toggle States
  const [appPush, setAppPush] = useState(true);
  const [appEmail, setAppEmail] = useState(true);
  const [appSms, setAppSms] = useState(false);

  const [intPush, setIntPush] = useState(true);
  const [intEmail, setIntEmail] = useState(true);
  const [intSms, setIntSms] = useState(true);

  const [jobPush, setJobPush] = useState(false);
  const [jobEmail, setJobEmail] = useState(true);
  const [jobSms, setJobSms] = useState(false);

  const [platPush, setPlatPush] = useState(true);
  const [platEmail, setPlatEmail] = useState(true);
  const [platSms, setPlatSms] = useState(false);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleLogout = () => {
    logoutSession();
    navigate('/');
  };

  const handleSave = () => {
    alert("Notification preferences saved successfully!");
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="settings" />

      {/* Top Header Label */}
      <div className="bg-white border-b border-outline-variant py-3 sticky top-20 z-20 shadow-xs text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile flex justify-between items-center">
          <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">Notification Preferences</span>
          <Link to="/employer-portal/employer-settings-main-menuemployer-settings-main-menu" className="text-primary font-bold text-xs hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">arrow_back</span> Back to Settings
          </Link>
        </div>
      </div>

      <div className="flex max-w-container-max mx-auto min-h-[calc(100vh-128px)] text-left">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden md:flex flex-col h-full py-6 w-80 bg-surface border-r border-outline-variant shrink-0">
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
            </div>
            <div>
              <h2 className="font-label-md text-on-surface font-bold text-sm">Settings Hub</h2>
              <p className="text-xs text-on-surface-variant font-semibold">Manage organization & account</p>
            </div>
          </div>
          <nav className="flex-grow flex flex-col gap-1 px-3">
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/employer-profile-settings"
            >
              <span className="material-symbols-outlined">account_circle</span>
              <span>Account Details</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/company-profile-settings"
            >
              <span className="material-symbols-outlined">domain</span>
              <span>Company Profile</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/billing-&-subscription-settings"
            >
              <span className="material-symbols-outlined">payments</span>
              <span>Billing & Subscription</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/team-management-settings"
            >
              <span className="material-symbols-outlined">group</span>
              <span>Team Management</span>
            </Link>
          </nav>
          <div className="px-6 mt-auto">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all font-bold text-sm"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Content Canvas */}
        <main className="flex-grow p-4 md:p-8 overflow-y-auto pb-32 md:pb-8">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold mb-2">Notification Settings</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl">Control how and when you receive updates about applications, interviews, and platform news. Choose the channels that best fit your industrial recruitment workflow.</p>
          </div>
          
          {/* Bento-style Settings Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter">
            {/* Category: New Applications */}
            <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-xs">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-fixed text-primary rounded-lg">
                    <span className="material-symbols-outlined">person_add</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">New Applications</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Alerts when candidates apply to your active job listings.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Push Notification</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={appPush} onChange={(e) => setAppPush(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Email Summary</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={appEmail} onChange={(e) => setAppEmail(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">SMS Alert</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={appSms} onChange={(e) => setAppSms(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Category: Interview Reminders */}
            <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-xs">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Interview Reminders</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Stay on top of upcoming interviews and candidate meetings.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Push Notification</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={intPush} onChange={(e) => setIntPush(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Email Invitation</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={intEmail} onChange={(e) => setIntEmail(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">SMS Reminder (15 min prior)</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={intSms} onChange={(e) => setIntSms(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Category: Job Posting Status */}
            <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-xs">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg">
                    <span className="material-symbols-outlined">assignment_turned_in</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Job Posting Status</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Updates on job approvals, expirations, or requirement flags.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Push Notification</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={jobPush} onChange={(e) => setJobPush(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Email Report</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={jobEmail} onChange={(e) => setJobEmail(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">SMS Urgent Alert</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={jobSms} onChange={(e) => setJobSms(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Category: Platform Updates */}
            <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-xs">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface-container-high rounded-lg text-primary">
                    <span className="material-symbols-outlined">update</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Platform Updates</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">News about new features, security updates, and maintenance.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">In-App Banner</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={platPush} onChange={(e) => setPlatPush(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Monthly Newsletter</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={platEmail} onChange={(e) => setPlatEmail(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">SMS System Status</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={platSms} onChange={(e) => setPlatSms(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant pt-6">
            <button 
              type="button"
              onClick={() => navigate('/employer-portal/employer-settings-main-menuemployer-settings-main-menu')}
              className="w-full sm:w-auto px-6 py-2.5 font-bold text-sm text-on-surface-variant border border-outline-variant rounded-lg hover:bg-surface-container transition-colors"
            >
              Discard Changes
            </button>
            <button 
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-8 py-2.5 font-bold text-sm bg-primary text-white rounded-lg shadow-md hover:bg-primary/95 transition-all"
            >
              Save Preferences
            </button>
          </div>
        </main>
      </div>

      {/* Mobile Settings Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container border-t border-outline-variant z-50 rounded-t-xl shadow-md">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" to="/employer-portal/employer-dashboard-industrial-blueprints-refined">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-xs font-semibold">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" to="/employer-portal/manage-jobs-employer-portal">
          <span className="material-symbols-outlined">work</span>
          <span className="font-label-sm text-xs font-semibold">Jobs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" to="/employer-portal/employer-settings-main-menuemployer-settings-main-menu">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="font-label-sm text-xs font-bold">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
