import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, updateUserProfile, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function CompanyProfileSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Form States
  const [companyName, setCompanyName] = useState('');
  const [regNumber, setRegNumber] = useState('U67120MH2023PLC001');
  const [sector, setSector] = useState('Manufacturing');
  const [companySize, setCompanySize] = useState('201-500 Employees');
  const [location, setLocation] = useState('Pimpri-Chinchwad, Pune, Maharashtra');
  const [about, setAbout] = useState('Established in 1998, we are a leading automotive component manufacturer specializing in precision engineering and sustainable manufacturing practices for global OEM partners.');
  const [logo, setLogo] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuCOWXFHSowe2VKamJi5AdMMDQeyGWA1Lwz0cxJq81mkgI2Xjnw3xC_7x7fYW2FUr0ZI6qgqo-m3goNDKKYJENzESsWk73Uy_912zbVYZykDxxocbqiBFmCB_NT0HXUJFrokC7ElCQYYau1RKbTLUZzRqZgrolSSk816dv7oTMAjtXLde50bfhA4m28vXwRATpm15UQJug1DCxTpz8uvLQGYz013vgHuKKgltmJgI46FGOFzfD6OoTei4Q7zk5FvRoLcMgztD0geB0s');

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
    setCompanyName(session.companyName || '');
    if (session.regNumber) setRegNumber(session.regNumber);
    if (session.sector) {
      // Capitalize first letter for select matching
      const s = session.sector;
      setSector(s.charAt(0).toUpperCase() + s.slice(1));
    }
    if (session.companySize) setCompanySize(session.companySize);
    if (session.location) setLocation(session.location);
    if (session.aboutCompany) setAbout(session.aboutCompany);
    if (session.logo) setLogo(session.logo);
  }, [navigate]);

  const handleSave = (e) => {
    if (e) e.preventDefault();
    if (!user) return;

    if (!companyName.trim()) {
      setErrorMsg("Company name cannot be empty.");
      return;
    }

    const updated = {
      ...user,
      companyName: companyName.trim(),
      regNumber: regNumber.trim(),
      sector: sector.toLowerCase(),
      companySize,
      location: location.trim(),
      aboutCompany: about.trim(),
      logo
    };

    updateUserProfile(updated);
    setUser(updated);
    setSuccessMsg("Company profile updated successfully!");
    setErrorMsg('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

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
      
      {/* Top Save Bar for Quick Access */}
      <div className="bg-white border-b border-outline-variant py-3 sticky top-20 z-20 shadow-xs">
        <div className="max-w-container-max mx-auto px-margin-mobile flex justify-between items-center">
          <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">Company Profile</span>
          <button 
            onClick={handleSave}
            className="bg-primary hover:bg-primary/95 text-white px-6 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>

      <main className="max-w-container-max mx-auto flex text-left">
        {/* Navigation Drawer (Sidebar) */}
        <aside className="hidden md:flex flex-col h-[calc(100vh-128px)] py-6 w-80 bg-surface border-r border-outline-variant shrink-0 sticky top-32">
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
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-primary font-bold bg-primary-fixed/30 border-r-4 border-primary transition-all text-sm" 
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
        <section className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
          <header className="mb-8">
            <h1 className="font-display-lg text-headline-lg text-primary font-extrabold mt-1">Company Profile</h1>
            <p className="text-body-md text-on-surface-variant mt-1">Complete your organization's identity to build trust with high-potential diploma candidates.</p>
          </header>

          {successMsg && (
            <div className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-4 mb-6 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-4 mb-6 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-6">
            {/* Logo Section */}
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm space-y-4">
              <h2 className="font-headline-md text-base text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">image</span>
                Brand Identity
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-28 h-28 rounded-xl bg-surface-container border border-outline-variant flex items-center justify-center p-2 shadow-xs shrink-0">
                  <img alt="Company Logo" className="max-w-full max-h-full object-contain" src={logo} />
                </div>
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <p className="font-bold text-sm text-on-surface">Company Logo Link</p>
                  <input 
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-xs font-semibold" 
                    type="text" 
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                    placeholder="URL to logo image"
                  />
                  <p className="text-[10px] text-on-surface-variant font-medium">Please enter a valid image URL for your brand logo.</p>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm space-y-4">
              <h2 className="font-headline-md text-base text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">info</span>
                Organization Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Company Name</label>
                  <input 
                    className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold" 
                    type="text" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Registration ID / CIN</label>
                  <input 
                    className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold" 
                    type="text" 
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Industry Sector</label>
                  <select 
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold text-primary outline-none"
                  >
                    <option>Manufacturing</option>
                    <option>Infrastructure & Civil</option>
                    <option>Energy & Power</option>
                    <option>Information Technology</option>
                    <option>Chemical Process</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Company Size</label>
                  <select 
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold text-primary outline-none"
                  >
                    <option>1-50 Employees</option>
                    <option>51-200 Employees</option>
                    <option>201-500 Employees</option>
                    <option>500+ Employees</option>
                  </select>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Headquarters Location</label>
                  <input 
                    className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold" 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm space-y-4">
              <h2 className="font-headline-md text-base text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">description</span>
                About the Company
              </h2>
              <div className="space-y-2">
                <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Executive Summary</label>
                <textarea 
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-sm font-semibold resize-none outline-none focus:ring-1 focus:ring-primary" 
                  rows="6"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Describe your company's mission and engineering wing..."
                  required
                ></textarea>
                <p className="text-[10px] text-outline text-right font-medium">Character count: {about.length} / 2000</p>
              </div>
            </div>
          </form>
        </section>
      </main>

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
