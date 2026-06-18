import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { getApplications, updateApplicationStatus } from '../../utils/db';

export default function ReviewCandidateAdityaAhire() {
  const [searchParams] = useSearchParams();
  const appId = searchParams.get('appId') || "APP-82761"; // Fallback to Aditya's application
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [application, setApplication] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);

    // Find the specific application
    const allApps = getApplications();
    const currentApp = allApps.find(a => a.id === appId);
    setApplication(currentApp || allApps[0]);
  }, [appId, navigate]);

  const handleStatusUpdate = (newStatus) => {
    if (!application) return;
    const updated = updateApplicationStatus(application.id, newStatus);
    if (updated) {
      setApplication(updated);
      setSuccessMsg(`Application status updated to "${newStatus}"!`);
      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    }
  };

  if (!user || !application) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading candidate profile...</div>;
  }

  const initials = application.studentName
    ? application.studentName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    : 'S';

  const isRejected = application.status === 'Rejected';
  const isShortlisted = application.status === 'Shortlisted';
  const isInterview = application.status === 'Interview Scheduled' || application.status === 'Interview';
  const isSelected = application.status === 'Selected';

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      {/* TopAppBar */}
      <header className="bg-white border-b border-outline-variant flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-16 z-50 sticky top-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined')}
            className="p-2 hover:bg-surface-container rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Review Application</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-on-surface-variant hidden md:inline">{user.companyName}</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile py-6 text-left">
        {successMsg && (
          <div className="mb-6 bg-green-50 text-green-700 border border-green-200 rounded-lg p-4 font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span>{successMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Candidate Summary Card */}
          <section className="lg:col-span-4 space-y-gutter">
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full bg-primary text-white font-headline-lg flex items-center justify-center text-3xl font-extrabold shadow-md">
                    {initials}
                  </div>
                  <span className="absolute bottom-1 right-1 bg-[#E2F0D9] text-[#385723] p-1 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">{application.studentName}</h2>
                <p className="text-on-surface-variant font-semibold text-sm mt-1">{application.branch || 'Mechanical Engineering'}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-primary-fixed text-primary px-3 py-1 rounded-full text-xs font-bold">Class of 2026</span>
                  <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">Maharashtra Region</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleStatusUpdate('Rejected')}
                  className={`flex items-center justify-center gap-2 py-3 border font-bold rounded-lg transition-colors ${
                    isRejected 
                      ? 'bg-red-50 border-red-300 text-red-600' 
                      : 'border-red-500 text-red-600 hover:bg-red-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                  Reject
                </button>
                <button 
                  onClick={() => handleStatusUpdate('Shortlisted')}
                  className={`flex items-center justify-center gap-2 py-3 border font-bold rounded-lg transition-colors ${
                    isShortlisted 
                      ? 'bg-green-50 border-green-300 text-green-700' 
                      : 'border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">check</span>
                  Shortlist
                </button>
              </div>
            </div>

            {/* Quick Stats Bento Item */}
            <div className="bg-[#091E42] text-white rounded-xl p-6 space-y-4 shadow-md text-left">
              <h3 className="font-label-md uppercase tracking-wider text-slate-300 text-xs font-extrabold">Candidate Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-extrabold text-white">{application.gpa ? `${application.gpa} CGPA` : '8.80'}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-300">Aggregate GPA</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">180d</p>
                  <p className="text-[10px] uppercase font-bold text-slate-300">Internship Exp</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Details & Tabs */}
          <section className="lg:col-span-8 space-y-6">
            {/* Navigation Tabs */}
            <nav className="flex border-b border-outline-variant">
              {['profile', 'resume', 'contact'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-bold text-sm transition-all border-b-2 uppercase tracking-wider ${
                    activeTab === tab 
                      ? 'text-primary border-primary' 
                      : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            {/* Tab Content: Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Application Note */}
                <div className="bg-[#F0F4F8] border border-outline-variant/60 p-6 rounded-xl relative overflow-hidden text-left">
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <span className="material-symbols-outlined text-8xl">format_quote</span>
                  </div>
                  <h4 className="font-bold text-sm text-primary mb-2 uppercase tracking-wide">Application Note</h4>
                  <p className="font-body-md text-on-surface-variant italic">
                    "I am highly interested in the positions at {user.companyName} as I have hands-on experience in these fields and I'm eager to contribute to Maharashtra's engineering growth."
                  </p>
                </div>

                {/* Education */}
                <div className="bg-white border border-outline-variant p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">school</span>
                    <h3 className="font-headline-md text-on-surface font-bold">Education</h3>
                  </div>
                  <div className="pl-9 relative">
                    <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-outline-variant"></div>
                    <div className="mb-2">
                      <h4 className="font-bold text-on-surface">MSBTE Diploma in Engineering</h4>
                      <p className="text-on-surface-variant text-sm font-semibold">Government Polytechnic, Pune</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-primary font-bold">
                        <span>Class of 2026</span>
                        <span>Aggregate CGPA: {application.gpa || '8.80'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience & Internships */}
                <div className="bg-white border border-outline-variant p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">work_history</span>
                    <h3 className="font-headline-md text-on-surface font-bold">Experience</h3>
                  </div>
                  <div className="pl-9 relative">
                    <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-outline-variant"></div>
                    <div>
                      <h4 className="font-bold text-on-surface">Graduate Engineer Trainee (Intern)</h4>
                      <p className="text-on-surface-variant text-sm font-semibold">Larsen & Toubro (L&T), Chakan</p>
                      <p className="text-xs text-outline mt-1">Dec 2025 - May 2026 (6 months)</p>
                      <ul className="mt-3 list-disc list-inside text-sm text-on-surface-variant space-y-1 font-medium">
                        <li>Assisted in maintenance of heavy machinery and production lines.</li>
                        <li>Worked with QC team on component testing and calibration.</li>
                        <li>Documented boiler operational safety protocols.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="bg-white border border-outline-variant p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                    <h3 className="font-headline-md text-on-surface font-bold">Key Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['AutoCAD', 'Boiler Operations', 'PLC Programming', 'Calibration', '5S Principles'].map((skill, i) => (
                      <div key={i} className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 border border-[#1E40AF]/10 shadow-sm">
                        <span className="material-symbols-outlined text-sm">check</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: Resume */}
            {activeTab === 'resume' && (
              <div className="bg-white border border-outline-variant p-8 rounded-xl space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto text-primary">
                  <span className="material-symbols-outlined text-[44px]">picture_as_pdf</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">{application.studentName}_Resume.pdf</h3>
                  <p className="text-on-surface-variant text-sm mt-1">MSBTE Portal Verified Profile Resume (PDF format)</p>
                </div>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert("Downloading resume..."); }}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary/95 flex items-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    Download Resume
                  </a>
                </div>
              </div>
            )}

            {/* Tab Content: Contact */}
            {activeTab === 'contact' && (
              <div className="bg-white border border-outline-variant p-6 rounded-xl space-y-4 animate-in fade-in duration-300 text-left">
                <h3 className="font-bold text-lg text-on-surface mb-4">Contact Information</h3>
                <div className="space-y-3 font-semibold text-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                    <div>
                      <span className="text-on-surface-variant text-xs block font-bold">Email Address</span>
                      <a href={`mailto:${application.studentEmail}`} className="text-primary hover:underline font-extrabold">{application.studentEmail}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">phone</span>
                    <div>
                      <span className="text-on-surface-variant text-xs block font-bold">Mobile Phone</span>
                      <span className="text-on-surface font-extrabold">+91 98765 43210</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">badge</span>
                    <div>
                      <span className="text-on-surface-variant text-xs block font-bold">Enrollment Number</span>
                      <span className="text-on-surface font-mono font-extrabold">{application.enrollment || '2100000001'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="sticky bottom-0 w-full bg-white border-t border-outline-variant px-margin-mobile py-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] text-left">
        <div className="max-w-container-max mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex flex-col">
            <span className="text-xs text-on-surface-variant font-bold">Reviewing Application for</span>
            <span className="font-bold text-primary">{application.jobTitle} • {application.id}</span>
          </div>
          
          <button 
            disabled={isRejected || isInterview}
            onClick={() => handleStatusUpdate('Interview Scheduled')}
            className={`w-full md:w-auto font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm ${
              isInterview 
                ? 'bg-amber-100 text-amber-800 border border-amber-200 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary/95 active:scale-95 transition-all'
            }`}
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>{isInterview ? 'Interview Scheduled' : 'Schedule Interview'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
