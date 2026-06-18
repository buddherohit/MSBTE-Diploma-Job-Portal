import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function BillingSubscriptionSettings() {
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
      
      {/* Top Header Label */}
      <div className="bg-white border-b border-outline-variant py-3 sticky top-20 z-20 shadow-xs text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile flex justify-between items-center">
          <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">Billing & Subscription</span>
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
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-primary font-bold bg-primary-fixed/30 border-r-4 border-primary transition-all text-sm" 
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

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 max-w-5xl mx-auto w-full">
          <header className="mb-8">
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold mb-1">Billing & Subscription</h2>
            <p className="text-on-surface-variant text-body-md">Manage your organization's subscription, usage, and payment methods.</p>
          </header>
          
          {/* Subscription Overview Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Current Plan Card */}
            <div className="md:col-span-2 p-6 rounded-xl bg-primary text-on-primary flex flex-col justify-between relative overflow-hidden text-white shadow-sm">
              <div className="relative z-10">
                <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">Active Plan</span>
                <h3 className="font-headline-lg text-display-md mb-1 font-bold">Industrial Partner</h3>
                <p className="text-sm opacity-90">Enterprise Recruiter Tier</p>
              </div>
              <div className="mt-8 flex items-end justify-between relative z-10">
                <div>
                  <p className="text-xs opacity-75">Next Renewal</p>
                  <p className="font-bold text-sm">October 24, 2026</p>
                </div>
                <button 
                  onClick={() => alert("Enterprise upgrades can be customized by emailing billing@msbtejobs.in")}
                  className="bg-white text-primary px-5 py-2 rounded-lg font-bold hover:scale-105 transition-transform active:scale-95 text-xs shadow-md"
                >
                  Upgrade Plan
                </button>
              </div>
              {/* Decorative Element */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Quick Stats */}
            <div className="p-6 rounded-xl border border-outline-variant bg-white flex flex-col justify-center gap-4 shadow-xs">
              <div>
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">Monthly Billing</p>
                <p className="text-3xl font-extrabold text-primary">₹45,000<span className="text-sm font-normal text-on-surface-variant">/mo</span></p>
              </div>
              <div className="pt-4 border-t border-outline-variant">
                <button 
                  onClick={() => alert("Showing comparison brochure")}
                  className="text-primary font-bold text-xs flex items-center gap-2 hover:underline"
                >
                  View Plan Comparison
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>
          </div>

          {/* Usage Section */}
          <section className="mb-8">
            <h3 className="font-headline-md text-base text-on-surface mb-6 font-bold uppercase tracking-wider">Current Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Posting Progress */}
              <div className="p-6 rounded-xl border border-outline-variant bg-white shadow-xs">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">work_history</span>
                    <span className="font-bold text-sm">Job Posting Limits</span>
                  </div>
                  <span className="font-bold text-primary text-sm">8 / 10 used</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-3 mb-2 overflow-hidden">
                  <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                </div>
                <p className="text-[11px] text-on-surface-variant font-medium">2 postings remaining in your current cycle.</p>
              </div>
              
              {/* Talent Export Progress */}
              <div className="p-6 rounded-xl border border-outline-variant bg-white shadow-xs">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">person_search</span>
                    <span className="font-bold text-sm">Talent Export Credits</span>
                  </div>
                  <span className="font-bold text-tertiary text-sm">420 / 500 used</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-3 mb-2 overflow-hidden">
                  <div className="bg-tertiary h-3 rounded-full transition-all duration-1000" style={{ width: '84%' }}></div>
                </div>
                <p className="text-[11px] text-on-surface-variant font-medium">Credits reset on the 1st of every month.</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-base text-on-surface font-bold uppercase tracking-wider">Payment Methods</h3>
                <button 
                  onClick={() => alert("Payment configuration dashboard is locked under rec-admin permission.")}
                  className="text-primary font-bold text-xs hover:bg-primary-fixed/20 px-3 py-1 rounded-md transition-colors"
                >
                  Manage
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-outline-variant rounded-xl bg-white shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-on-background rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
                    <div>
                      <p className="font-semibold text-sm">•••• •••• •••• 4242</p>
                      <p className="text-[11px] text-on-surface-variant">Expires 12/28 • Default</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <button 
                  onClick={() => alert("Redirecting to safe checkout link...")}
                  className="w-full border-2 border-dashed border-outline-variant rounded-xl p-4 text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 font-bold text-xs uppercase"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add New Payment Method
                </button>
              </div>
            </section>

            {/* Upcoming Invoices */}
            <section>
              <h3 className="font-headline-md text-base text-on-surface font-bold uppercase tracking-wider mb-6">Upcoming Invoices</h3>
              <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-xs">
                <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/40">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Invoice Date</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Amount</span>
                </div>
                <div className="divide-y divide-outline-variant">
                  <div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors group">
                    <div>
                      <p className="font-semibold text-sm">Sept 24, 2026</p>
                      <p className="text-[11px] text-on-surface-variant font-medium">Processing • ID: #INV-0042</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-sm">₹45,000</span>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary cursor-pointer text-lg">download</span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors group">
                    <div>
                      <p className="font-semibold text-sm">Oct 24, 2026</p>
                      <p className="text-[11px] text-on-surface-variant font-medium">Scheduled • ID: #INV-0043</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-sm">₹45,000</span>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary cursor-pointer text-lg">schedule</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => alert("Generating full billing invoice summary PDF")}
                  className="w-full py-3 text-primary text-xs font-bold border-t border-outline-variant hover:bg-surface-container-low transition-colors uppercase tracking-wider"
                >
                  View Billing History
                </button>
              </div>
            </section>
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
