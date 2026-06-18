import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser, logoutSession, initAuth } from '../utils/auth';

export default function AdminHeader({ activePage }) {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    initAuth();
    let session = getCurrentUser();
    // Auto login default admin if accessing admin portal directly for testing/development convenience
    if (!session || session.role !== 'admin') {
      session = {
        email: 'admin@msbtejobs.in',
        name: 'MSBTE Admin Console',
        role: 'admin',
        id: 'ADM-88231'
      };
      localStorage.setItem('msbte_session', JSON.stringify(session));
    }
    setUser(session);
  }, []);

  const handleLogout = () => {
    logoutSession();
    setUser(null);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const getLinkClass = (pageName) => {
    const baseClass = "mx-2 px-4 py-3 flex items-center gap-3 rounded-lg transition-all font-label-md text-label-md";
    if (activePage === pageName) {
      return `${baseClass} bg-primary text-white font-bold shadow-sm`;
    }
    return `${baseClass} text-on-surface-variant hover:bg-surface-container-high hover:text-primary`;
  };

  const menuItems = [
    { name: 'overview', label: 'Overview', icon: 'dashboard', path: '/admin-portal/admin-dashboard-overview' },
    { name: 'students', label: 'Student Directory', icon: 'school', path: '/admin-portal/admin-student-registry' },
    { name: 'employers', label: 'Employer Registry', icon: 'domain', path: '/admin-portal/admin-employer-registry' },
    { name: 'verification', label: 'Verification Hub', icon: 'verified_user', path: '/admin-portal/verification-hub' },
    { name: 'moderation', label: 'User Moderation', icon: 'gavel', path: '/admin-portal/moderation-user-management' },
    { name: 'permissions', label: 'Roles & Staff', icon: 'manage_accounts', path: '/admin-portal/user-roles-permissions' },
    { name: 'health', label: 'System Health', icon: 'settings_heart', path: '/admin-portal/system-health-monitoring' },
    { name: 'settings', label: 'Platform Controls', icon: 'settings', path: '/admin-portal/admin-settings-platform-controls' }
  ];

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer Content */}
      <div className={`fixed left-0 top-0 bottom-0 z-50 w-72 max-w-[80vw] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant">
          <Link to="/" className="flex items-center gap-2 text-left" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline-md text-[16px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Admin</span></span>
              <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Control Suite</span>
            </div>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 py-6 overflow-y-auto flex-1">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              className={getLinkClass(item.name)} 
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {user && (
          <div className="pt-4 border-t border-outline-variant">
            <div className="flex items-center gap-3 px-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                A
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="font-bold text-on-surface text-body-md leading-tight truncate">{user.name}</h4>
                <p className="text-[10px] text-on-surface-variant font-semibold truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors font-bold text-body-md"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Sticky Top Header Bar */}
      <header className="fixed top-0 right-0 left-0 lg:left-72 h-16 z-30 bg-surface border-b border-outline-variant flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="material-symbols-outlined text-primary cursor-pointer lg:hidden text-2xl select-none focus:outline-none"
          >
            menu
          </button>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">System: Optimal</span>
          </div>
          <h2 className="lg:hidden font-headline-md text-headline-md font-bold text-primary">MSBTE Admin Hub</h2>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/admin-portal/moderation-user-management" 
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center relative p-1.5 rounded-full hover:bg-surface-container"
            title="System Alerts"
          >
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              5
            </span>
          </Link>

          {user && (
            <div className="relative flex items-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none hover:opacity-90 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm hover:ring-2 hover:ring-primary/20 transition-all text-sm">
                  A
                </div>
                <span className="hidden md:inline font-semibold text-body-md text-on-surface-variant">{user.name}</span>
                <span className="material-symbols-outlined text-on-surface-variant text-xl">expand_more</span>
              </button>

              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setDropdownOpen(false)}></div>
                  <div className="absolute right-0 top-11 z-50 w-64 bg-white border border-outline-variant shadow-xl rounded-2xl p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="pb-3 border-b border-outline-variant text-left">
                      <h4 className="font-bold text-on-surface text-body-md leading-tight">{user.name}</h4>
                      <p className="text-[11px] text-on-surface-variant font-semibold mt-1 truncate">{user.email}</p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-primary-fixed text-primary uppercase tracking-wider">
                        Superuser Session
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link to="/" className="flex items-center gap-2 p-2 rounded-lg text-body-md text-on-surface hover:bg-surface-container transition-colors text-left" onClick={() => setDropdownOpen(false)}>
                        <span className="material-symbols-outlined text-xl text-on-surface-variant">home</span>
                        Main Portal Home
                      </Link>
                      <Link to="/admin-portal/admin-settings-platform-controls" className="flex items-center gap-2 p-2 rounded-lg text-body-md text-on-surface hover:bg-surface-container transition-colors text-left" onClick={() => setDropdownOpen(false)}>
                        <span className="material-symbols-outlined text-xl text-on-surface-variant">settings</span>
                        Platform Controls
                      </Link>
                    </div>
                    <div className="pt-2 border-t border-outline-variant">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 p-2 rounded-lg text-body-md text-red-600 hover:bg-red-50 transition-colors text-left font-bold"
                      >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Log Out Admin
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-screen fixed left-0 top-0 z-40 bg-surface-container-low border-r border-outline-variant py-6">
        <div className="px-6 mb-6">
          <Link to="/" className="flex items-center gap-2.5 text-left mb-6">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline-md text-[18px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Admin</span></span>
              <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Control Suite</span>
            </div>
          </Link>

          {user && (
            <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl border border-outline-variant/50">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                ADM
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-label-md text-label-md text-primary font-bold truncate">System Admin</p>
                <p className="text-[10px] text-on-surface-variant leading-none truncate">Superuser • MSBTE</p>
              </div>
            </div>
          )}
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link key={item.name} className={getLinkClass(item.name)} to={item.path}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mx-4 p-4 bg-primary-fixed rounded-xl border border-primary-container/20">
          <p className="font-label-sm text-label-sm text-primary mb-1 font-bold">DTE Support</p>
          <p className="text-[10px] text-primary/70 mb-3">Direct line for infrastructure incidents.</p>
          <a 
            href="mailto:support@dte.maharashtra.gov.in"
            className="block text-center w-full py-2 bg-primary text-white text-[11px] font-bold rounded-lg hover:bg-primary-container transition-colors"
          >
            CONTACT OPS HUB
          </a>
        </div>
      </aside>
    </>
  );
}
