import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, updateUserProfile, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function EmployerProfileSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hiringStatus, setHiringStatus] = useState(true);
  const [categories, setCategories] = useState(['Mechanical', 'Electrical']);
  const [newCategory, setNewCategory] = useState('');
  
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
    setName(session.name || session.contactPerson || '');
    setPhone(session.phone || '');
    setHiringStatus(session.hiringStatus !== false);
    if (session.categories) {
      setCategories(session.categories);
    }
  }, [navigate]);

  const handleSave = (e) => {
    if (e) e.preventDefault();
    if (!user) return;

    if (!name.trim() || !phone.trim()) {
      setErrorMsg("Please fill out recruiter name and phone number.");
      return;
    }

    const updated = {
      ...user,
      name: name.trim(),
      contactPerson: name.trim(),
      phone: phone.trim(),
      hiringStatus,
      categories
    };

    updateUserProfile(updated);
    setUser(updated);
    setSuccessMsg("Account details updated successfully!");
    setErrorMsg('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (cat) => {
    setCategories(categories.filter(c => c !== cat));
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
          <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">Account Settings</span>
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
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-primary font-bold bg-primary-fixed/30 border-r-4 border-primary transition-all text-sm" 
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
        <div className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
          <header className="mb-8">
            <h2 className="font-display-lg text-headline-lg text-primary font-extrabold tracking-tight">Recruiter Profile</h2>
            <p className="text-on-surface-variant max-w-2xl mt-1">Manage your recruiter login details, contact coordinates, and basic notification filters.</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Identity Form */}
            <div className="lg:col-span-8 space-y-6">
              <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-outline-variant">
                  <span className="material-symbols-outlined text-primary">contact_phone</span>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Personal Recruiter Identity</h3>
                </div>
                
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-md text-xs uppercase font-bold text-on-surface-variant">Full Name</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-sm font-semibold" 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-md text-xs uppercase font-bold text-on-surface-variant">Phone Number</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-sm font-semibold" 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Recruiter contact phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-md text-xs uppercase font-bold text-on-surface-variant">Corporate Email (Uneditable)</label>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-sm font-semibold text-on-surface-variant" 
                        disabled 
                        type="email" 
                        value={user.email} 
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-700 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <span className="text-[10px] text-outline font-medium">To modify your corporate email contact, reach out to helpdesk@msbtejobs.in</span>
                  </div>
                </form>
              </section>

              {/* Password change panel */}
              <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-outline-variant">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Security & Sign In</h3>
                </div>
                <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/60">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm">Reset Password</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">Need a new secure password? Request a reset token.</p>
                    </div>
                    <button 
                      onClick={() => alert("Password reset token sent to your corporate email.")}
                      className="px-4 py-1.5 border border-primary text-primary hover:bg-primary-fixed/20 rounded-lg text-xs font-bold transition-all"
                    >
                      Request Reset
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Recruitment Preferences Column */}
            <div className="lg:col-span-4 space-y-6">
              <section className="bg-white rounded-xl p-6 border border-outline-variant border-l-4 border-l-secondary shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-secondary">person_search</span>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Recruitment Options</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Hiring Status</label>
                    <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg border border-outline-variant">
                      <span className="font-bold text-xs text-on-surface">{hiringStatus ? 'Currently Hiring' : 'Hiring Paused'}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={hiringStatus}
                          onChange={(e) => setHiringStatus(e.target.checked)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-label-md text-xs font-bold uppercase text-on-surface-variant">Target MSBTE Branches</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <span key={cat} className="bg-primary-fixed text-primary px-3 py-1 rounded-full text-[10px] font-bold border border-primary/20 flex items-center gap-1">
                          {cat} 
                          <span 
                            onClick={() => handleRemoveCategory(cat)}
                            className="material-symbols-outlined text-[14px] cursor-pointer hover:bg-primary-fixed-dim rounded-full"
                          >
                            close
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <input 
                        type="text" 
                        placeholder="e.g. Civil" 
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="bg-surface border border-outline-variant rounded px-2.5 py-1 text-xs outline-none focus:ring-1 focus:ring-primary flex-1 font-semibold"
                      />
                      <button 
                        type="button"
                        onClick={handleAddCategory}
                        className="px-3 py-1 bg-primary text-white text-xs font-bold rounded hover:bg-primary/95"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Danger Zone */}
              <div className="p-4 border border-red-200 bg-red-50 rounded-xl flex items-center justify-between shadow-xs">
                <div>
                  <p className="font-bold text-sm text-on-surface">Deactivate Profile</p>
                  <p className="text-xs text-on-surface-variant">Temporarily hide recruiter profile</p>
                </div>
                <button 
                  onClick={() => {
                    if (window.confirm("Are you sure you want to deactivate your recruiter profile? This will temporarily pause your visibility.")) {
                      alert("Profile deactivated.");
                    }
                  }} 
                  className="text-red-600 font-bold text-xs hover:underline"
                >
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
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
