import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';

export default function StudentLogin() {
  const [activeTab, setActiveTab] = useState('student');
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!emailOrId.trim() || !password.trim()) {
      setError('Please enter both your ID/Email and password.');
      return;
    }

    // Attempt login
    const user = loginUser(emailOrId.trim(), password, activeTab);

    if (user) {
      setSuccess('Logged in successfully!');
      setTimeout(() => {
        if (activeTab === 'student') {
          navigate('/student-portal/dashboard');
        } else {
          navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
        }
      }, 800);
    } else {
      setError('Invalid credentials. Check your email/ID and password.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full h-16 flex items-center justify-between px-margin-mobile bg-surface shadow-sm z-50">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MSBTE Jobs</span>
        </Link>
        <Link to="/" className="font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors duration-200 px-4 py-2 rounded-lg">
          Back to Home
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-margin-mobile py-24">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Branding & Title */}
          <div className="text-center mb-stack-lg">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant font-body-md">Empowering Maharashtra's Diploma Talent</p>
          </div>

          {/* Path Switcher (Student vs Employer) */}
          <div className="bg-surface-container p-1 rounded-xl mb-stack-lg flex relative overflow-hidden">
            <div 
              className="absolute h-[calc(100%-8px)] bg-primary rounded-lg transition-all duration-300 ease-out top-1" 
              style={{ 
                left: activeTab === 'student' ? '4px' : 'calc(50% + 2px)', 
                width: 'calc(50% - 6px)' 
              }}
            ></div>
            <button 
              type="button"
              className={`relative z-10 flex-1 py-3 text-label-md font-bold transition-colors duration-200 ${
                activeTab === 'student' ? 'text-white' : 'text-on-surface-variant'
              }`} 
              onClick={() => {
                setActiveTab('student');
                setError('');
              }}
            >
              Student Login
            </button>
            <button 
              type="button"
              className={`relative z-10 flex-1 py-3 text-label-md font-bold transition-colors duration-200 ${
                activeTab === 'employer' ? 'text-white' : 'text-on-surface-variant'
              }`} 
              onClick={() => {
                setActiveTab('employer');
                setError('');
              }}
            >
              Employer Login
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
            <form className="space-y-stack-md" onSubmit={handleSignIn}>
              {error && (
                <div className="bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">error</span>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="bg-green-50 text-green-600 border border-green-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>{success}</span>
                </div>
              )}

              {/* Dynamic Label */}
              <div id="id-label-container">
                <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="user-id">
                  {activeTab === 'student' ? 'Enrollment Number / Email' : 'Official Email'}
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="person">person</span>
                  <input 
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" 
                    id="user-id" 
                    placeholder={activeTab === 'student' ? '2100000001 or email' : 'hr@company.com'} 
                    type="text"
                    value={emailOrId}
                    onChange={(e) => setEmailOrId(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-label-md font-label-md text-on-surface" htmlFor="password">Password</label>
                  <a className="text-label-sm font-label-sm text-primary hover:underline" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                  <input 
                    className="w-full pl-12 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" 
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary focus:outline-none" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox"/>
                <label className="text-label-sm font-label-sm text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-label-md shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                Sign In
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
                <div className="relative flex justify-center text-label-sm"><span className="bg-surface-container-lowest px-4 text-outline uppercase tracking-widest">or</span></div>
              </div>

              <Link 
                to="/public/create-account" 
                className="w-full block text-center border border-primary text-primary py-4 rounded-lg font-bold text-label-md hover:bg-primary/5 transition-colors"
              >
                Create an Account
              </Link>
            </form>
          </div>

          {/* Footer Links */}
          <div className="mt-stack-lg text-center space-y-4">
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              By signing in, you agree to our 
              <a className="text-primary hover:underline ml-1" href="#">Terms of Service</a> & 
              <a className="text-primary hover:underline ml-1" href="#">Privacy Policy</a>
            </p>
            <div className="flex justify-center gap-6 text-outline">
              <a className="hover:text-primary transition-colors flex items-center gap-1 text-label-sm font-label-sm" href="#">
                <span className="material-symbols-outlined text-sm" data-icon="help">help</span> Help Center
              </a>
              <a className="hover:text-primary transition-colors flex items-center gap-1 text-label-sm font-label-sm" href="#">
                <span className="material-symbols-outlined text-sm" data-icon="language">language</span> English (IN)
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Side Graphics */}
      <div className="fixed bottom-12 right-12 hidden lg:block opacity-20 pointer-events-none">
        <div className="relative w-64 h-64 border-2 border-primary border-dashed rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border border-primary border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
          <span className="material-symbols-outlined text-primary text-8xl absolute" data-icon="engineering">engineering</span>
        </div>
      </div>
    </div>
  );
}
