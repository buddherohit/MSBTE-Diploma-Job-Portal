// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { getCurrentUser } from '../../utils/auth';
import { getJobById, applyToJob, getSavedJobIds, toggleSaveJobId, getJobs } from '../../utils/db';

export default function Jobdetails() {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('id') || 'thermax-maintenance';
  const navigate = useNavigate();

  const [currentJob, setCurrentJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  // Form inputs state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [gpa, setGpa] = useState('');

  // Fetch job data from the single source of truth (db.js)
  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true);
      try {
        const [job, allJobs] = await Promise.all([getJobById(jobId), getJobs()]);

        if (!job) {
          // Job not found — navigate to jobs list
          navigate('/public/find-diploma-jobs');
          return;
        }

        setCurrentJob(job);

        // Compute similar jobs (same branch, different id)
        const similar = allJobs.filter(j => j.id !== jobId && j.branch === job.branch);
        setSimilarJobs(similar.length > 0 ? similar : allJobs.filter(j => j.id !== jobId));

        // Determine saved / already applied status
        const savedIds = getSavedJobIds();
        setIsSaved(savedIds.includes(job.id));

        const user = getCurrentUser();
        if (user) {
          setFullName(user.name || '');
          setEmail(user.email || '');
          setEnrollment(user.enrollment || '');
          setGpa(user.gpa || '');
        }

        const applications = JSON.parse(localStorage.getItem('msbte_applications') || '[]');
        const userEmail = user ? user.email : '';
        const alreadyApplied = applications.some(
          app => app.jobId === job.id && app.studentEmail.toLowerCase() === userEmail.toLowerCase()
        );
        setIsApplied(alreadyApplied);
      } catch (err) {
        console.error('Failed to load job details:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [jobId, navigate]);

  const toggleSave = () => {
    if (!currentJob) return;
    toggleSaveJobId(currentJob.id);
    setIsSaved(prev => !prev);
  };

  const handleApply = () => {
    if (isApplied) return;

    // Check if user is logged in
    const user = getCurrentUser();
    if (!user) {
      // Redirect to login with return URL
      navigate(`/public/student-login?redirect=/public/jobdetails?id=${jobId}`);
      return;
    }
    if (user.role === 'employer') {
      // Employers cannot apply — redirect
      return;
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentJob) return;
    setIsSubmitting(true);

    try {
      const user = getCurrentUser();
      const newApp = await applyToJob({
        jobId: currentJob.id,
        jobTitle: currentJob.title,
        company: currentJob.company,
        logo: currentJob.logo,
        location: currentJob.location,
        studentEmail: user ? user.email : email,
        studentName: fullName,
        enrollment,
        gpa,
      });

      setRefId(newApp.id);
      setIsSubmitted(true);
      setIsApplied(true);
    } catch (err) {
      console.error('Failed to submit application:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  // ── Loading skeleton ──
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-surface text-on-surface">
        <Header activePage="jobs" />
        <main className="pt-8 pb-32 px-margin-mobile max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-pulse">
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-surface-container-low rounded-2xl h-40" />
              <div className="bg-surface-container-low rounded-2xl h-64" />
              <div className="bg-surface-container-low rounded-2xl h-48" />
            </div>
            <div className="hidden lg:block lg:col-span-4 space-y-4">
              <div className="bg-surface-container-low rounded-2xl h-52" />
              <div className="bg-surface-container-low rounded-2xl h-36" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!currentJob) return null;

  const user = getCurrentUser();
  const isEmployer = user && user.role === 'employer';
  const isAdmin = user && user.role === 'admin';

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <Header activePage="jobs" />

      <main className="pt-8 pb-32 px-margin-mobile max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job Details & Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Job Header Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="w-20 h-20 rounded-xl border border-outline-variant p-3 bg-white flex items-center justify-center shadow-sm">
                  <img alt={`${currentJob.company} Logo`} className="max-w-full max-h-full object-contain" src={currentJob.logo} />
                </div>
                {(currentJob.urgent || currentJob.badge === 'Urgent') && (
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-xs rounded-full">Urgent</span>
                )}
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold leading-tight">{currentJob.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-on-surface-variant font-body-md">
                <span className="font-bold text-primary text-lg">{currentJob.company}</span>
                <span className="text-outline">•</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>{currentJob.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Details Grid (Mobile/Tablet) */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Salary Range</span>
                <span className="text-on-surface font-bold text-lg">{currentJob.salary}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Job Type</span>
                <span className="text-on-surface font-bold text-lg">{currentJob.type}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant col-span-2 text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Branch Requirement</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-primary">{currentJob.branchIcon}</span>
                  <span className="text-on-surface font-bold">{currentJob.branch}</span>
                </div>
              </div>
            </div>

            {/* Job Description Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <h2 className="font-headline-md text-xl font-bold text-primary mb-4 pb-2 border-b border-outline-variant/60">Job Description</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {currentJob.description}
              </p>
              <h3 className="font-bold text-on-surface mb-3 text-base">Key Responsibilities:</h3>
              <ul className="space-y-4">
                {(currentJob.responsibilities || []).map((resp, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-on-tertiary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface-variant leading-normal">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility & Skills Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <h2 className="font-headline-md text-xl font-bold text-primary mb-4 pb-2 border-b border-outline-variant/60">Eligibility &amp; Skills</h2>
              <div className="space-y-6">
                <div>
                  <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-3 block">Education &amp; Experience</span>
                  <div className="flex flex-wrap gap-2">
                    {(currentJob.education || []).map((edu, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed font-semibold text-sm rounded-lg border border-primary-fixed-dim shadow-sm">
                        {edu}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-3 block">Technical Proficiencies</span>
                  <div className="flex flex-wrap gap-2">
                    {(currentJob.skills || []).map((skill, i) => (
                      <span key={i} className="px-3 py-2 bg-[#DBEAFE] text-[#1E40AF] font-bold text-sm rounded-full shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Similar Opportunities Section */}
            {similarJobs.length > 0 && (
              <div className="text-left">
                <h2 className="font-headline-md text-2xl font-bold text-on-surface mb-6 px-2">Similar Opportunities</h2>
                <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
                  {similarJobs.slice(0, 4).map((job) => (
                    <Link
                      key={job.id}
                      to={`/public/jobdetails?id=${job.id}`}
                      className="min-w-[280px] bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant p-1 flex items-center justify-center">
                            <img alt={`${job.company} Logo`} className="w-full h-full object-contain" src={job.logo} />
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="font-label-md text-label-md text-on-surface truncate">{job.title}</h4>
                            <span className="text-on-surface-variant font-label-sm text-label-sm block truncate">{job.company} • {(job.location || '').split(',')[0]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3 border-t border-outline-variant/30 pt-2">
                        <span className="text-primary font-label-sm text-label-sm font-bold">{job.salary}</span>
                        <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Action & Employer Brief (Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 hidden lg:block">
            
            {/* Apply & Save Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-md text-left flex flex-col gap-5">
              <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/60">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Estimated Package</span>
                <span className="text-3xl font-extrabold text-primary">{currentJob.salary}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Job Type</span>
                  <span className="font-bold text-on-surface">{currentJob.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Location</span>
                  <span className="font-bold text-on-surface">{currentJob.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Required Branch</span>
                  <span className="font-bold text-primary text-right flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">{currentJob.branchIcon}</span>
                    {(currentJob.branch || '').split(' ')[0]}
                  </span>
                </div>
                {currentJob.experience && (
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Experience</span>
                    <span className="font-bold text-on-surface">{currentJob.experience}</span>
                  </div>
                )}
              </div>

              {/* Employer/Admin notice */}
              {(isEmployer || isAdmin) ? (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-sm font-semibold flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-base mt-0.5">info</span>
                  <span>{isAdmin ? 'Admin view — applications managed in Admin Portal' : 'Employers cannot apply to jobs. Log in as a student to apply.'}</span>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/60">
                  <button 
                    disabled={isApplied}
                    onClick={handleApply} 
                    className={`w-full h-12 font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
                      isApplied 
                        ? 'bg-tertiary-container text-on-tertiary-container opacity-80 cursor-not-allowed' 
                        : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
                    }`}
                  >
                    <span>{isApplied ? 'Applied ✓' : (user ? 'Apply Now' : 'Login to Apply')}</span>
                    <span className="material-symbols-outlined text-lg">{isApplied ? 'check' : 'bolt'}</span>
                  </button>

                  <button 
                    className={`w-full h-12 flex items-center justify-center border border-primary rounded-xl font-bold gap-2 transition-all active:scale-95 hover:bg-surface-container-low ${isSaved ? 'bg-primary text-white' : 'text-primary'}`} 
                    onClick={toggleSave}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                    <span>{isSaved ? 'Opportunity Saved' : 'Save Opportunity'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Employer Brief */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm text-left flex flex-col gap-4">
              <h3 className="font-bold text-on-surface flex items-center gap-2 text-base">
                <span className="material-symbols-outlined text-primary">domain</span>
                <span>Employer Brief</span>
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {currentJob.aboutCompany}
              </p>
              <div className="flex justify-between items-center pt-3 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
                <span>{currentJob.sector}</span>
                {currentJob.website && (
                  <a target="_blank" rel="noopener noreferrer" href={currentJob.website} className="text-primary hover:underline flex items-center gap-1 font-bold">
                    Visit Site <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Sticky Action Bar (Mobile/Tablet Only) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-outline-variant px-margin-mobile py-4 z-40 lg:hidden shadow-lg">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button 
            className={`w-12 h-12 flex items-center justify-center border border-primary rounded-xl transition-all active:scale-95 hover:bg-surface-container-low ${isSaved ? 'bg-primary text-white' : 'text-primary'}`} 
            onClick={toggleSave}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
          </button>
          
          {!(isEmployer || isAdmin) && (
            <button 
              disabled={isApplied}
              onClick={handleApply} 
              className={`flex-1 h-12 font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
                isApplied 
                  ? 'bg-tertiary-container text-on-tertiary-container opacity-80 cursor-not-allowed' 
                  : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
              }`}
            >
              <span>{isApplied ? 'Applied ✓' : (user ? 'Apply Now' : 'Login to Apply')}</span>
              <span className="material-symbols-outlined text-lg">{isApplied ? 'check' : 'bolt'}</span>
            </button>
          )}
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed text-left">
              Connecting Maharashtra diploma students with high-impact career opportunities in industrial powerhouses.
            </p>
          </div>

          <div className="md:col-span-2 text-left">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/about">How It Works</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Dashboard</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/industry">Browse Companies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/terms">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 text-left">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-2">Support</h4>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">call</span>
              <span className="font-semibold">+91 12345 67890</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">mail</span>
              <span className="font-semibold break-all">support@msbtejobs.in</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
              <span className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
          © 2024 MSBTEJobs Diploma Jobs Portal. Built for the future of Maharashtra's Industry.
        </div>
      </footer>

      {/* Apply Job Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4 sm:items-center sm:p-0">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
          
          {/* Content */}
          <div className="bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl border border-outline-variant w-full max-w-md shadow-2xl relative z-10 overflow-hidden">
            
            {!isSubmitted ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-headline-md text-lg font-bold text-on-surface">Apply for {currentJob.title}</h2>
                  <button className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant" onClick={closeModal}>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Enrollment No.</label>
                      <input 
                        type="text" 
                        required 
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">CGPA / %</label>
                      <input 
                        type="text" 
                        required 
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-2">Resume</label>
                    <div className="border border-dashed border-outline-variant rounded-xl p-4 bg-surface flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">description</span>
                        <div className="flex flex-col text-left">
                          <span className="text-on-surface font-label-md text-sm">{fullName ? `${fullName.split(' ')[0]}_Resume.pdf` : 'Resume.pdf'}</span>
                          <span className="text-on-surface-variant text-[11px]">MSBTE Verified Profile Resume</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded uppercase">Verified</span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 mt-2 bg-primary text-white font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-primary/95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Confirm &amp; Submit Application
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl font-bold">check</span>
                </div>
                
                <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">Application Submitted!</h2>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Your application for <span className="font-bold text-primary">{currentJob.title}</span> at <span className="font-bold text-primary">{currentJob.company}</span> has been successfully sent to the hiring manager.
                </p>
                
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant w-full text-left mb-6 text-sm space-y-1 text-on-surface-variant">
                  <div><strong>Application Ref ID:</strong> <span className="font-mono text-on-surface">{refId}</span></div>
                  <div><strong>Status:</strong> <span className="text-tertiary font-bold uppercase text-xs">Applied (Under Review)</span></div>
                </div>
                
                <div className="flex gap-4 w-full">
                  <Link to="/student-portal/dashboard" onClick={closeModal} className="flex-1 h-12 border border-primary text-primary font-label-md text-sm rounded-xl flex items-center justify-center hover:bg-surface-container-low transition-colors">
                    Go to Dashboard
                  </Link>
                  <Link to="/student-portal/application-history" onClick={closeModal} className="flex-1 h-12 bg-primary text-white font-label-md text-sm rounded-xl flex items-center justify-center hover:bg-primary/95 transition-colors">
                    Track Application
                  </Link>
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}
