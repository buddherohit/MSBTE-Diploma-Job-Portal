import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function EmployerSettingsMainMenuEmployerSettingsMainMenu() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="settings" />
      
      <main className="flex min-h-[calc(100vh-80px)] max-w-container-max mx-auto text-left">
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold" 
              to="/employer-portal/employer-profile-settings"
            >
              <span className="material-symbols-outlined">account_circle</span>
              <span className="font-label-md text-sm">Account Details</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold" 
              to="/employer-portal/company-profile-settings"
            >
              <span className="material-symbols-outlined">domain</span>
              <span className="font-label-md text-sm">Company Profile</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold" 
              to="/employer-portal/billing-&-subscription-settings"
            >
              <span className="material-symbols-outlined">payments</span>
              <span className="font-label-md text-sm">Billing & Subscription</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold" 
              to="/employer-portal/team-management-settings"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-md text-sm">Team Management</span>
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
        <section className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
          <header className="mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-2 font-extrabold text-primary">Employer Settings</h2>
            <p className="text-on-surface-variant text-body-md">Configure your personal and corporate recruitment identity.</p>
          </header>
          
          {/* Bento Grid of Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Account Details Card */}
            <Link 
              to="/employer-portal/employer-profile-settings"
              className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer block text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary border border-outline-variant">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2">Account Details</h3>
              <p className="text-on-surface-variant font-medium text-sm mb-6">Manage your personal profile, secure your account, and update contact information.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface-variant">Personal Info</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface-variant">Security</span>
              </div>
            </Link>

            {/* Company Profile Card */}
            <Link 
              to="/employer-portal/company-profile-settings"
              className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer block text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary border border-outline-variant">
                  <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 bg-green-50 text-green-700 rounded border border-green-200 uppercase tracking-wider">Verified</span>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
                </div>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2">Company Profile</h3>
              <p className="text-on-surface-variant font-medium text-sm mb-6">Define office locations, industry specializations, and verification status to build trust with candidates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface-variant">Location</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface-variant">Industry</span>
              </div>
            </Link>

            {/* Billing & Subscription Card */}
            <Link 
              to="/employer-portal/billing-&-subscription-settings"
              className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer block text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary border border-outline-variant">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2">Billing & Subscription</h3>
              <p className="text-on-surface-variant font-medium text-sm mb-6">Manage your active recruitment plan, view limits, and update billing preferences.</p>
              <div className="flex items-center justify-between p-3 bg-secondary-container/10 rounded-lg border border-secondary/20">
                <span className="font-label-sm text-xs font-bold text-secondary">Current Plan: Industrial Pro</span>
                <span className="text-secondary font-extrabold text-xs">View</span>
              </div>
            </Link>

            {/* Team Management Card */}
            <Link 
              to="/employer-portal/team-management-settings"
              className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer block text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary border border-outline-variant">
                  <span className="material-symbols-outlined text-3xl">group</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2">Team Management</h3>
              <p className="text-on-surface-variant font-medium text-sm mb-6">Invite recruiters, assign hierarchical roles, and monitor team activity logs across the organization.</p>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">RS</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center text-[10px] font-bold">JD</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+2</div>
              </div>
            </Link>
          </div>

          {/* Recruiter Tip Section */}
          <div className="mt-8 bg-tertiary-container text-on-tertiary p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <div>
                <h4 className="font-headline-md text-white mb-1 font-bold">Recruiter Tip</h4>
                <p className="font-body-md text-white/95 text-sm">Keeping your company profile updated with recent industrial office photos and specific technical roles increases candidate application rates by up to 45%.</p>
              </div>
              <Link to="/employer-portal/company-profile-settings" className="md:ml-auto px-6 py-2.5 bg-white text-primary font-bold rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap text-sm text-center">
                Update Profile
              </Link>
            </div>
          </div>

          {/* Mobile Logout Button */}
          <div className="mt-8 md:hidden">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 py-4 bg-red-50 text-red-600 border border-red-200 rounded-xl font-bold text-sm shadow-sm"
            >
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
