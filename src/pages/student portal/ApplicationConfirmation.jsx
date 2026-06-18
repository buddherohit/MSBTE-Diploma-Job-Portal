// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function ApplicationConfirmation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState(null);

  const jobTitle = searchParams.get('title') || 'Maintenance Engineer';
  const companyName = searchParams.get('company') || 'Thermax Limited';
  const logo = searchParams.get('logo') || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y';
  const location = searchParams.get('location') || 'Pune, MH';

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="jobs" />

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 relative overflow-hidden text-left">
        {/* Background Pattern Decor */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full filter blur-[80px]"></div>
        </div>

        <div className="w-full max-w-2xl z-10">
          {/* Success Animation Container */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6 shadow-md border border-green-200">
              <span className="material-symbols-outlined text-6xl md:text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="font-headline-lg text-3xl font-extrabold text-on-surface mb-2">Application Submitted!</h1>
            <p className="font-body-md text-on-surface-variant max-w-md font-semibold text-sm">
              Your application for <span className="font-bold text-on-surface">{jobTitle}</span> at <span className="font-bold text-on-surface">{companyName}</span> has been successfully sent.
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant p-2 overflow-hidden">
                  <img className="w-full h-full object-contain" alt={`${companyName} logo`} src={logo} />
                </div>
                <div>
                  <p className="bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-1">Applied Successfully</p>
                  <h3 className="font-bold text-lg text-on-surface leading-snug">{jobTitle}</h3>
                  <p className="text-xs text-on-surface-variant font-semibold">{companyName} • {location}</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Applied Date</span>
                <span className="font-bold text-sm text-on-surface mt-0.5">{currentDate}</span>
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
            <h4 className="font-bold text-xs text-primary mb-4 flex items-center gap-2 uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">info</span>
              Next Steps
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                <p className="text-xs text-on-surface-variant font-semibold">The HR team at {companyName} will review your academic background, skills, and industrial training.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                <p className="text-xs text-on-surface-variant font-semibold">You will be notified on the portal and email if you are shortlisted for an interview.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                <p className="text-xs text-on-surface-variant font-semibold">You can track the live progress of your application on the tracking timeline.</p>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/student-portal/job-application-status"
              className="flex-1 bg-primary text-white py-4 px-6 rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              View Application Status
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link 
              to="/public/find-diploma-jobs"
              className="flex-1 bg-white border border-primary text-primary py-4 px-6 rounded-lg font-bold text-sm hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">search</span>
              Back to Jobs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
