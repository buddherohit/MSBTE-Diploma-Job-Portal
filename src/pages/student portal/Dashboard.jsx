import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '../../components/StudentHeader';
import { getCurrentUser } from '../../utils/auth';
import { getApplicationsByStudent, getSavedJobIds, getJobs } from '../../utils/db';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [savedCount, setSavedCount] = useState(0);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login');
      return;
    }
    setUser(session);

    // Fetch dynamic data
    const studentApps = getApplicationsByStudent(session.email);
    setApplications(studentApps);

    const savedIds = getSavedJobIds();
    setSavedCount(savedIds.length);

    // Fetch recommended jobs matching student branch
    const all = getJobs();
    const branchKeyword = session.branch ? session.branch.split(' ')[0].toLowerCase() : '';
    const matching = all.filter(job => 
      job.branch.toLowerCase().includes(branchKeyword)
    );
    // Fallback if no matching branch jobs, show all other jobs
    setRecommendedJobs(matching.length > 0 ? matching : all);
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Calculate statistics
  const appliedCount = applications.length;
  const shortlistedCount = applications.filter(app => 
    ['Shortlisted', 'Interview Scheduled', 'Interview', 'Selected'].includes(app.status)
  ).length;

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="dashboard" />
      
      <main className="max-w-container-max mx-auto px-margin-mobile py-stack-lg space-y-stack-lg">
        {/* Welcome Section */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-gutter text-left">
          <div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-wider">Student Overview</p>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2 font-extrabold">
              Welcome back, {user.name}!
            </h1>
            <p className="text-on-surface-variant mt-1">
              Check out your application status and recommended jobs for Diploma in {user.branch || 'Engineering'}.
            </p>
          </div>
          <Link to="/student-portal/resume-builder-dashboard" className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">upload_file</span>
            Update Resume
          </Link>
        </section>

        {/* Profile & Stats Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Profile Completion Card */}
          <div className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-fixed text-primary rounded-lg">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                </div>
                <span className="text-label-md font-bold text-primary">85% Complete</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Profile Strength</h3>
              <p className="text-on-surface-variant text-body-md mb-6">Complete your technical certifications to reach 100% and get noticed by top recruiters.</p>
            </div>
            <div className="space-y-3">
              <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[85%] rounded-full transition-all duration-1000"></div>
              </div>
              <Link className="text-primary font-bold text-label-md flex items-center gap-1 hover:underline" to="/student-portal/profile">
                Complete Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
              <span id="appliedCountStat" className="text-display-lg font-display-lg text-primary font-extrabold">{appliedCount}</span>
              <span className="text-on-surface-variant font-label-md mt-1">Applied</span>
            </div>
            <div className="bg-[#E2F0D9] text-[#385723] border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
              <span className="text-display-lg font-display-lg text-secondary font-extrabold">{shortlistedCount}</span>
              <span className="text-[#385723] font-label-md mt-1">Shortlisted</span>
            </div>
            <Link to="/student-portal/saved-jobs-student-portal" className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow hover:scale-[1.02] transition-all">
              <span id="savedCountStat" className="text-display-lg font-display-lg text-primary font-extrabold">{savedCount}</span>
              <span className="text-on-surface-variant font-label-md mt-1">Saved</span>
            </Link>
            <div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
              <span className="text-display-lg font-display-lg text-primary font-extrabold">45</span>
              <span className="text-on-surface-variant font-label-md mt-1">Profile Views</span>
            </div>
            {/* CTA / Promo Card in the Stats Grid */}
            <div className="col-span-2 lg:col-span-4 bg-[#091E42] text-white rounded-xl p-6 flex items-center justify-between overflow-hidden relative group">
              <div className="z-10 text-left">
                <h4 className="font-headline-md text-headline-md mb-2 text-white font-bold">Campus Drive 2026</h4>
                <p className="text-slate-300 opacity-90 max-w-md">L&T and Tata Motors are visiting MSBTE affiliated colleges next week. Register now for the pre-placement talk.</p>
                <button className="mt-4 bg-primary text-white px-5 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors">Register Interest</button>
              </div>
              <div className="hidden lg:block absolute right-[-20px] top-[-20px] opacity-20 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[180px] text-white">school</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Applications */}
        <section className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md font-bold">Active Applications</h2>
            <Link className="text-primary font-bold hover:underline" to="/student-portal/application-history">View All</Link>
          </div>
          <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4 font-label-md text-on-surface-variant">Job Title</th>
                    <th className="px-6 py-4 font-label-md text-on-surface-variant">Company</th>
                    <th className="px-6 py-4 font-label-md text-on-surface-variant">Date Applied</th>
                    <th className="px-6 py-4 font-label-md text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 font-label-md text-on-surface-variant">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant" id="applicationsTableBody">
                  {applications.length > 0 ? (
                    applications.slice(0, 4).map((app) => (
                      <tr key={app.id} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="px-6 py-4 font-bold text-primary">{app.jobTitle}</td>
                        <td className="px-6 py-4">{app.company}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{app.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-label-sm font-bold ${
                            app.status === 'Interview Scheduled' || app.status === 'Interview'
                              ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                              : app.status === 'Selected' || app.status === 'Shortlisted'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : app.status === 'Rejected'
                              ? 'bg-red-50 text-red-700 border border-red-200'
                              : 'bg-primary-fixed text-on-primary-fixed-variant'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="/student-portal/job-application-status" className="text-primary hover:text-primary-container">
                            <span className="material-symbols-outlined">visibility</span>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-on-surface-variant font-medium">
                        No active applications. <Link to="/public/find-diploma-jobs" className="text-primary font-bold hover:underline">Apply to a job</Link> to get started!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommended for you */}
        <section className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md font-bold">Recommended for you</h2>
            <div className="flex gap-2">
              <button 
                className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-surface-container transition-colors" 
                onClick={() => document.getElementById('jobScroll').scrollBy({left: -350, behavior: 'smooth'})}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-surface-container transition-colors" 
                onClick={() => document.getElementById('jobScroll').scrollBy({left: 350, behavior: 'smooth'})}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex gap-gutter overflow-x-auto hide-scrollbar snap-x pb-4" id="jobScroll">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="min-w-[300px] md:min-w-[380px] snap-start bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded bg-surface-container p-2 flex items-center justify-center border border-outline-variant">
                      <img alt={`${job.company} Logo`} className="w-full h-full object-contain" src={job.logo}/>
                    </div>
                    {job.badge && (
                      <span className={`px-2 py-1 text-label-sm font-bold rounded ${job.badge === 'Urgent' ? 'bg-red-50 text-red-700' : 'bg-secondary-fixed text-on-secondary-fixed'}`}>
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-lg mb-1 truncate">{job.title}</h4>
                  <p className="text-on-surface-variant text-body-md mb-4 truncate">{job.company} • {job.location}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary-fixed text-primary text-label-sm rounded-full font-semibold">{job.branch}</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm rounded-full font-semibold">{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                  <span className="font-bold text-primary">{job.salary}</span>
                  <Link to={`/public/jobdetails?id=${job.id}`} className="bg-primary text-white px-4 py-2 rounded font-bold hover:bg-primary/95 transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button (FAB) - For Home/Dashboard */}
      <Link to="/public/find-diploma-jobs" className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40 border-2 border-white">
        <span className="material-symbols-outlined text-[32px]">search</span>
      </Link>
    </div>
  );
}
