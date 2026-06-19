// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, loginSession } from '../../utils/auth';

export default function StudentRegister() {
  const [fullName, setFullName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Input Validations
    if (!fullName.trim() || !enrollment.trim() || !instituteName.trim() || !branch || !email.trim() || !password.trim()) {
      setError('Please fill in all the details.');
      return;
    }

    if (enrollment.trim().length < 6) {
      setError('Please enter a valid Enrollment Number (at least 6 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!agreePolicy) {
      setError('You must agree to the MSBTE Industrial Policy to proceed.');
      return;
    }

    // Attempt Registration
    const newUser = {
      email: email.trim(),
      password,
      role: 'student',
      name: fullName.trim(),
      enrollment: enrollment.trim(),
      institute: instituteName.trim(),
      branch
    };

    try {
      registerUser(newUser);
      const { password: _, ...safeUser } = newUser;
      loginSession(safeUser);
      setSuccess('Account created successfully! Redirecting to dashboard...');
      setTimeout(() => {
        navigate('/student-portal/dashboard');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full bg-surface dark:bg-inverse-surface shadow-sm z-50 flex items-center justify-between px-margin-mobile h-16">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
            <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
          </div>
        </Link>
        <Link to="/public/student-login" className="font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors duration-200 px-4 py-2 rounded-lg">
          Back to Login
        </Link>
      </header>

      {/* Main Registration Canvas */}
      <main className="flex-grow pt-24 pb-12 px-margin-mobile flex items-center justify-center bg-pattern">
        <div className="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Visual/Context */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-stack-lg bg-primary-container rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10 text-left">
              <h2 className="font-headline-lg text-headline-lg text-white mb-4 font-bold leading-tight">Empowering Maharashtra's Future Engineers.</h2>
              <p className="font-body-lg text-body-lg text-primary-container-lowest opacity-90 leading-relaxed">Join over 50,000 diploma students connecting directly with the state's leading industrial powerhouses.</p>
            </div>
            <div className="mt-8 space-y-6 relative z-10 text-left">
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined p-2 bg-white/10 rounded-lg" data-icon="verified">verified</span>
                <span className="font-label-md text-label-md">MSBTE Verified Profiles</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined p-2 bg-white/10 rounded-lg" data-icon="precision_manufacturing">precision_manufacturing</span>
                <span className="font-label-md text-label-md">Direct Industry Placement</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined p-2 bg-white/10 rounded-lg" data-icon="auto_awesome">auto_awesome</span>
                <span className="font-label-md text-label-md">AI-Driven Resume Builder</span>
              </div>
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden mt-8">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Student collaboration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx_ZNyI49EZIcjMcbOtqpocayee9CT3RdYkYNJR3KrJi5v4kWp4xxj1hVl6Qm5XZxoLwMUombkRLqecxdoqKuZI4XCE0AuunbTapFPK5pBduUK3U1AvydAlGRb4Ym1yZf5ZGh50KOqEhQS1lznM6Q4W5ej_a9mo-dE2Kcq8IaGgpIqDSuz-V5Cdqfz3fCpcHHlemsYEwZtj2DW3r9ZS0yyLpLfLvmjjlGRsYNWaiZoeNLyiBNLvP-lm2kxtAOpaLIPnpaS7VRcScA" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant">
            <div className="mb-8 space-y-2 text-left">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">Student Registration</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Create your official industrial profile to get started.</p>
            </div>
            
            <form className="space-y-stack-md" onSubmit={handleRegister}>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md text-left">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="person">person</span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md" 
                      placeholder="Jayesh Patil" 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                {/* Enrollment Number */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block">Enrollment Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="badge">badge</span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md" 
                      placeholder="2100000000" 
                      type="text" 
                      value={enrollment}
                      onChange={(e) => setEnrollment(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Institute Name */}
              <div className="space-y-2 text-left">
                <label className="font-label-md text-label-md text-on-surface-variant block">Institute Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="account_balance">account_balance</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md" 
                    placeholder="Government Polytechnic, Mumbai" 
                    type="text" 
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                  />
                </div>
              </div>

              {/* Diploma Branch */}
              <div className="space-y-2 text-left">
                <label className="font-label-md text-label-md text-on-surface-variant block">Diploma Branch</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="engineering">engineering</span>
                  <select 
                    className="w-full pl-10 pr-10 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md appearance-none"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="" disabled>Select your branch</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 text-left">
                <label className="font-label-md text-label-md text-on-surface-variant block">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="mail">mail</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md" 
                    placeholder="jayesh.patil@example.com" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2 text-left">
                <label className="font-label-md text-label-md text-on-surface-variant block">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md" 
                    placeholder="••••••••" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Policy Checkbox */}
              <div className="flex items-start gap-3 pt-2 text-left">
                <input 
                  className="mt-1 w-5 h-5 text-primary border-outline rounded focus:ring-primary cursor-pointer" 
                  id="policy" 
                  type="checkbox" 
                  checked={agreePolicy}
                  onChange={(e) => setAgreePolicy(e.target.checked)}
                />
                <label className="font-body-md text-body-md text-on-surface-variant" htmlFor="policy">
                  I Agree to the <a href="#" className="text-primary font-bold hover:underline">MSBTE Industrial Policy</a> and authorize MahaResume to share my academic credentials with verified employers.
                </label>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 rounded-lg font-bold text-headline-md shadow-md active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
                <span>Register</span>
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>

              <div className="text-center pt-4">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account? 
                  <Link className="text-primary font-bold hover:underline ml-1" to="/public/student-login">Log in now</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Contextual Footer */}
      <footer className="mt-auto py-8 px-margin-mobile border-t border-outline-variant bg-surface-container-low">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline" data-icon="gavel">gavel</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant text-left">Official Platform of Maharashtra State Board of Technical Education</span>
          </div>
          <div className="flex gap-6">
            <Link className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors" to="/public/terms#privacy">Privacy Policy</Link>
            <Link className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors" to="/public/terms#terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
