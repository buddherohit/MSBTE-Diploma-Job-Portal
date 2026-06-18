// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';

export default function EmployerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both your company email and password.');
      return;
    }

    const user = loginUser(email.trim(), password, 'employer');

    if (user) {
      setSuccess('Logged in successfully!');
      setTimeout(() => {
        navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
      }, 800);
    } else {
      setError('Invalid company credentials. Try email: employer@msbtejobs.in, password: employer123');
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-between">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full h-16 flex items-center justify-between px-margin-mobile bg-white border-b border-outline-variant z-50">
        <Link className="flex items-center gap-2 cursor-pointer" to="/">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
            <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
          </div>
        </Link>
        <Link to="/" className="font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors duration-200 px-4 py-2 rounded-lg">
          Back to Home
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-margin-mobile py-24">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-primary mb-2">Employer Login</h1>
            <p className="text-on-surface-variant font-body-md">Connect with Maharashtra's top polytechnic technicians</p>
          </div>

          {/* Path Switcher */}
          <div className="bg-surface-container p-1 rounded-xl mb-8 flex relative overflow-hidden">
            <Link to="/public/student-login?tab=student" className="relative z-10 flex-1 py-3 text-sm font-semibold transition-colors duration-200 text-on-surface-variant text-center">
              Student Login
            </Link>
            <button className="relative z-10 flex-1 py-3 text-sm font-semibold transition-colors duration-200 bg-primary rounded-lg text-white shadow-sm">
              Employer Login
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSignIn}>
              {error && (
                <div className="bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2 text-left">
                  <span className="material-symbols-outlined text-lg">error</span>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="bg-green-50 text-green-600 border border-green-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2 text-left">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>{success}</span>
                </div>
              )}

              <div className="text-left">
                <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="company-email">Company Email / Corporate ID</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">corporate_fare</span>
                  <input 
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" 
                    id="company-email" 
                    placeholder="name@company.com" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-left">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
                  <Link className="text-xs font-bold text-primary hover:underline" to="/public/forgot-password">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                  <input 
                    className="w-full pl-12 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" 
                    id="password" 
                    placeholder="••••••••" 
                    required 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary focus:outline-none" 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox"/>
                <label className="text-xs font-semibold text-on-surface-variant" htmlFor="remember">Remember my organization</label>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                Sign In as Employer
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
                <div className="relative flex justify-center text-xs"><span className="bg-white px-4 text-outline uppercase tracking-widest">or</span></div>
              </div>

              <Link to="/public/employer-register" className="w-full block text-center bg-white border border-primary text-primary py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                Register Your Organization
              </Link>
            </form>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-xs text-on-surface-variant">
              By signing in, you agree to our 
              <Link className="text-primary hover:underline ml-1" to="/public/terms#terms">Terms of Service</Link> & 
              <Link className="text-primary hover:underline ml-1" to="/public/terms#privacy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
