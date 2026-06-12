import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (selectedRole === 'student') {
      navigate('/public/student-register');
    } else if (selectedRole === 'employer') {
      navigate('/public/employer-register');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full flex items-center justify-between px-margin-mobile h-16 bg-surface shadow-sm z-50">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">MSBTE Jobs</h1>
        </Link>
        <div className="hidden md:flex gap-gutter">
          <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
          <a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Guidelines</a>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-margin-mobile relative overflow-hidden">
        {/* Atmospheric Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-container-max w-full flex flex-col items-center z-10">
          <div className="text-center mb-stack-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full font-label-md text-label-md mb-4 inline-block">
              Registration
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-stack-sm">Join MSBTE Diploma Jobs</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Empowering Maharashtra's technical talent with high-impact career opportunities in industrial powerhouses.
            </p>
          </div>

          {/* Path Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter w-full max-w-4xl">
            {/* Student Card */}
            <button 
              className={`role-card group text-left p-stack-lg bg-surface-container-lowest border rounded-xl shadow-sm hover:shadow-lg flex flex-col items-center md:items-start focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2 transition-all ${
                selectedRole === 'student' 
                  ? 'border-primary bg-primary/5 ring-2 ring-primary shadow-md' 
                  : 'border-outline-variant'
              }`} 
              onClick={() => setSelectedRole('student')}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-stack-md transition-colors ${
                selectedRole === 'student' ? 'bg-primary' : 'bg-primary-fixed group-hover:bg-primary'
              }`}>
                <span className={`material-symbols-outlined text-4xl transition-colors ${
                  selectedRole === 'student' ? 'text-white' : 'text-primary group-hover:text-on-primary'
                }`} data-icon="school">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm font-bold">I am a Student</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left mb-stack-md leading-relaxed">
                Fresh graduate or final year student looking for industrial training, apprenticeships, or full-time roles in Maharashtra.
              </p>
              <div className="mt-auto flex items-center text-primary font-bold text-label-md gap-2 group-hover:translate-x-1 transition-transform">
                Build My Profile <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </button>

            {/* Employer Card */}
            <button 
              className={`role-card group text-left p-stack-lg bg-surface-container-lowest border rounded-xl shadow-sm hover:shadow-lg flex flex-col items-center md:items-start focus:outline-none focus:ring-2 focus:ring-secondary ring-offset-2 transition-all ${
                selectedRole === 'employer' 
                  ? 'border-secondary bg-secondary/5 ring-2 ring-secondary shadow-md' 
                  : 'border-outline-variant'
              }`}
              onClick={() => setSelectedRole('employer')}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-stack-md transition-colors ${
                selectedRole === 'employer' ? 'bg-secondary' : 'bg-secondary-fixed group-hover:bg-secondary'
              }`}>
                <span className={`material-symbols-outlined text-4xl transition-colors ${
                  selectedRole === 'employer' ? 'text-white' : 'text-secondary group-hover:text-on-primary'
                }`} data-icon="factory">factory</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm font-bold">I am an Employer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left mb-stack-md leading-relaxed">
                Recruiter or business owner seeking skilled MSBTE diploma technicians for mechanical, civil, IT, or electronics roles.
              </p>
              <div className="mt-auto flex items-center text-secondary font-bold text-label-md gap-2 group-hover:translate-x-1 transition-transform">
                Hire Technical Talent <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </button>
          </div>

          <div className="mt-stack-lg flex flex-col items-center gap-4 w-full">
            <button 
              className={`font-bold py-4 px-12 rounded-full shadow-lg transition-all flex items-center gap-2 ${
                selectedRole 
                  ? 'bg-primary text-white hover:scale-105 active:scale-95 cursor-pointer opacity-100' 
                  : 'bg-primary text-white opacity-50 cursor-not-allowed'
              }`}
              disabled={!selectedRole}
              onClick={handleNextStep}
            >
              Next Step <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              Already have an account? <Link className="text-primary font-bold hover:underline ml-1" to="/public/student-login">Log In</Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-stack-lg border-t border-outline-variant bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div className="flex items-center gap-2 opacity-60">
            <span className="material-symbols-outlined text-sm" data-icon="gavel">gavel</span>
            <p className="text-label-sm font-label-sm">© 2024 MSBTE Jobs. MSBTE Placement Portal.</p>
          </div>
          <div className="flex gap-stack-md">
            <a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
