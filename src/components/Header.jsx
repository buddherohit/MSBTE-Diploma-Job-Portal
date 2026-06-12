import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutSession, initAuth } from '../utils/auth';

export default function Header({ activePage }) {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initAuth();
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logoutSession();
    setUser(null);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const getLinkClass = (pageName) => {
    const baseClass = "text-body-md pb-1 transition-colors duration-150 border-b-2";
    if (activePage === pageName) {
      return `${baseClass} font-bold text-primary border-primary`;
    }
    return `${baseClass} font-semibold text-on-surface-variant hover:text-primary border-transparent hover:border-primary/60`;
  };

  const getMobileLinkClass = (pageName) => {
    if (activePage === pageName) {
      return "text-body-md font-bold text-primary transition-colors duration-150";
    }
    return "text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150";
  };

  const renderProfileSection = (isMobile = false) => {
    if (!user) {
      if (isMobile) {
        return (
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-outline-variant">
            <Link
              to="/public/student-login"
              className="w-full text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/public/create-account"
              className="w-full text-center bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        );
      }
      return (
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/public/student-login"
            className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm"
          >
            Login
          </Link>
          <Link
            to="/public/create-account"
            className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
          >
            Register
          </Link>
        </div>
      );
    }

    const initials = user.name
      ? user.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()
          .substring(0, 2)
      : 'U';

    const dashboardPath =
      user.role === 'student'
        ? '/student-portal/dashboard'
        : '/employer-portal/employer-dashboard-industrial-blueprints-refined';

    const profilePath =
      user.role === 'student'
        ? '/student-portal/profile'
        : '/employer-portal/employer-profile-settings';

    if (isMobile) {
      return (
        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-outline-variant">
          <div className="flex items-center gap-3 px-2">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
              {initials}
            </div>
            <div className="text-left">
              <h4 className="font-bold text-on-surface text-body-md">{user.name}</h4>
              <p className="text-[11px] text-on-surface-variant font-semibold">{user.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to={dashboardPath}
              className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low text-body-md text-on-surface font-semibold text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-primary">dashboard</span>
              Dashboard
            </Link>
            <Link
              to={profilePath}
              className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low text-body-md text-on-surface font-semibold text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-primary">person</span>
              My Profile
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors font-bold text-body-md"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div className="relative flex items-center gap-4 z-50">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 focus:outline-none hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm hover:ring-2 hover:ring-primary/20 transition-all">
            {initials}
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-xl">expand_more</span>
        </button>

        {dropdownOpen && (
          <>
            <div className="fixed inset-0 z-40 cursor-default" onClick={() => setDropdownOpen(false)}></div>
            <div className="absolute right-0 top-12 z-50 w-64 bg-white/95 backdrop-blur-md border border-outline-variant shadow-xl rounded-2xl p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="pb-3 border-b border-outline-variant text-left">
                <h4 className="font-bold text-on-surface text-body-md leading-tight">{user.name}</h4>
                <p className="text-[11px] text-on-surface-variant font-semibold mt-1 truncate">{user.email}</p>
                <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                  user.role === 'student' ? 'bg-primary-fixed text-primary' : 'bg-secondary-fixed text-secondary'
                }`}>
                  {user.role}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  to={dashboardPath}
                  className="flex items-center gap-2 p-2 rounded-lg text-body-md text-on-surface hover:bg-surface-container transition-colors text-left"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="material-symbols-outlined text-xl text-on-surface-variant">dashboard</span>
                  Dashboard
                </Link>
                <Link
                  to={profilePath}
                  className="flex items-center gap-2 p-2 rounded-lg text-body-md text-on-surface hover:bg-surface-container transition-colors text-left"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="material-symbols-outlined text-xl text-on-surface-variant">person</span>
                  My Profile
                </Link>
              </div>
              <div className="pt-2 border-t border-outline-variant">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 p-2 rounded-lg text-body-md text-red-600 hover:bg-red-50 transition-colors text-left font-bold"
                >
                  <span className="material-symbols-outlined text-xl">logout</span>
                  Log Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

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
      <div className={`fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Drawer Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant">
          <Link to="/" className="flex items-center gap-2 text-left" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline-md text-[16px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
              <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
            </div>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer hover:bg-surface-container-highest transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
        
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-5 py-8 text-left">
          <Link className={getMobileLinkClass('home')} to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link className={getMobileLinkClass('jobs')} to="/public/find-diploma-jobs" onClick={() => setMobileMenuOpen(false)}>Find Jobs</Link>
          <Link className={getMobileLinkClass('companies')} to="/public/industry" onClick={() => setMobileMenuOpen(false)}>Companies</Link>
          <Link className={getMobileLinkClass('about')} to="/public/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link className={getMobileLinkClass('contact')} to="/public/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
        
        {/* Drawer Action/Profile Section */}
        {renderProfileSection(true)}
      </div>

      {/* TopAppBar */}
      <header className="bg-surface z-30 sticky top-0 border-b border-outline-variant w-full">
        <div className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="material-symbols-outlined text-primary cursor-pointer lg:hidden text-2xl select-none focus:outline-none"
            >
              menu
            </button>
            <Link className="flex items-center gap-2 cursor-pointer text-left" to="/">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass('home')} to="/">Home</Link>
            <Link className={getLinkClass('jobs')} to="/public/find-diploma-jobs">Find Jobs</Link>
            <Link className={getLinkClass('companies')} to="/public/industry">Companies</Link>
            <Link className={getLinkClass('about')} to="/public/about">About Us</Link>
            <Link className={getLinkClass('contact')} to="/public/contact">Contact</Link>
          </nav>

          {renderProfileSection(false)}
        </div>
      </header>
    </>
  );
}
