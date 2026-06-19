import React, { useState, useEffect } from 'react';
import { useNavigate as useNav, Link as RouterLink } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { getJobs, getApplications } from '../../utils/db';
import EmployerHeader from '../../components/EmployerHeader';

export default function EmployerDashboardIndustrialBlueprintsRefined() {
  const [user, setUser] = useState(null);
  const [activeJobs, setActiveJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const navigate = useNav();

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);

    async function loadDashboardData() {
      try {
        const allJobs = await getJobs();
        const companyJobs = allJobs.filter(
          job => job.company && session.companyName && job.company.toLowerCase() === session.companyName.toLowerCase()
        );
        setActiveJobs(companyJobs);

        const allApps = await getApplications();
        const companyApps = allApps.filter(
          app => app.company && session.companyName && app.company.toLowerCase() === session.companyName.toLowerCase()
        );
        setApplications(companyApps);
      } catch (err) {
        console.error("Failed to load dashboard metrics:", err);
      }
    }
    loadDashboardData();
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Calculate metrics
  const activeJobsCount = activeJobs.length;
  const totalApplicantsCount = applications.length;
  const shortlistedCount = applications.filter(app => ['Shortlisted', 'Interview Scheduled', 'Interview', 'Selected'].includes(app.status)).length;
  const interviewsCount = applications.filter(app => ['Interview Scheduled', 'Interview'].includes(app.status)).length;

  const initials = user.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    : 'R';

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="dashboard" />

      <main className="max-w-container-max mx-auto px-margin-mobile pt-stack-lg pb-32">
        {/* Welcome Section */}
        <section className="mb-stack-lg space-y-stack-sm text-left">
          <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold">Welcome back, {user.name}</h2>
          <div className="flex flex-col gap-2">
            <p className="font-body-md text-on-surface-variant flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-primary text-xl filled-icon">business</span>
              {user.companyName}
            </p>
            <div>
              <span className="inline-flex px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full font-label-sm font-bold uppercase text-[10px]">Verified Recruiter</span>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg text-left">
          <div className="bg-white border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">work</span>
              <span className="text-[#385723] font-label-sm font-bold bg-green-50 px-2 py-0.5 rounded">Live</span>
            </div>
            <p className="font-label-md text-on-surface-variant font-semibold">Active Jobs</p>
            <h3 className="font-headline-lg text-headline-lg font-extrabold">{activeJobsCount}</h3>
          </div>
          <div className="bg-white border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">groups</span>
              <span className="text-primary font-label-sm font-bold bg-primary-fixed px-2 py-0.5 rounded">+{totalApplicantsCount} total</span>
            </div>
            <p className="font-label-md text-on-surface-variant font-semibold">Total Applicants</p>
            <h3 className="font-headline-lg text-headline-lg font-extrabold">{totalApplicantsCount}</h3>
          </div>
          <div className="bg-white border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            </div>
            <p className="font-label-md text-on-surface-variant font-semibold">Shortlisted</p>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-secondary">{shortlistedCount}</h3>
          </div>
          <div className="bg-white border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">event_upcoming</span>
            </div>
            <p className="font-label-md text-on-surface-variant font-semibold">Interviews</p>
            <h3 className="font-headline-lg text-headline-lg font-extrabold">{interviewsCount}</h3>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Manage Recent Jobs */}
          <section className="lg:col-span-2 space-y-stack-md text-left">
            <div className="flex justify-between items-center">
              <h4 className="font-headline-md text-headline-md font-bold">Manage Recent Jobs</h4>
              <RouterLink to="/employer-portal/manage-jobs-employer-portal" className="text-primary font-bold flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </RouterLink>
            </div>
            <div className="space-y-4">
              {activeJobs.length > 0 ? (
                activeJobs.map((job) => {
                  const jobApps = applications.filter(app => app.jobId === job.id);
                  return (
                    <div key={job.id} className="bg-white border border-outline-variant p-5 rounded-xl flex items-center justify-between shadow-sm hover:border-primary transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                          <img alt="Company Logo" className="w-full h-full object-contain" src={job.logo} />
                        </div>
                        <div>
                          <h5 className="font-label-md text-lg font-bold">{job.title}</h5>
                          <p className="font-body-md text-sm text-on-surface-variant font-semibold">{job.location} • {job.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="hidden md:block text-center">
                          <p className="font-label-sm text-on-surface-variant font-semibold">Applicants</p>
                          <p className="font-headline-md text-primary font-bold">{jobApps.length}</p>
                        </div>
                        <RouterLink to={`/employer-portal/applicants-maintenance-engineer?jobId=${job.id}`} className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-primary/95 transition-colors shadow-sm text-center">
                          View Applicants
                        </RouterLink>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="border border-dashed border-outline-variant rounded-xl p-8 text-center bg-surface-container-low">
                  <span className="material-symbols-outlined text-[40px] text-outline mb-2">work_off</span>
                  <p className="font-bold text-on-surface">No jobs posted yet.</p>
                  <RouterLink to="/employer-portal/post-a-job---employer-portal" className="mt-3 inline-block bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:opacity-95 shadow-md">
                    Post Your First Job
                  </RouterLink>
                </div>
              )}
            </div>
          </section>

          {/* Recent Applicants */}
          <section className="space-y-stack-md text-left">
            <h4 className="font-headline-md text-headline-md font-bold">Recent Applicants</h4>
            <div className="space-y-3">
              {applications.length > 0 ? (
                applications.slice(0, 5).map((app) => (
                  <div key={app.id} className="bg-white border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      {app.studentName ? app.studentName.split(' ').map(n=>n[0]).join('').toUpperCase().substring(0, 2) : 'S'}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h6 className="font-bold text-sm truncate">{app.studentName}</h6>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold truncate">{app.jobTitle}</p>
                      <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded mt-1 uppercase ${
                        app.status === 'Interview Scheduled' || app.status === 'Interview'
                          ? 'bg-amber-100 text-amber-800'
                          : app.status === 'Selected'
                          ? 'bg-green-100 text-green-800'
                          : app.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>{app.status}</span>
                    </div>
                    <RouterLink to={`/employer-portal/review-candidateaditya-ahire?appId=${app.id}`} className="text-primary border border-primary px-4 py-1 rounded-full font-bold text-xs hover:bg-primary hover:text-white transition-all shrink-0">
                      Review
                    </RouterLink>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-outline-variant rounded-xl p-6 text-center bg-surface-container-low">
                  <p className="text-on-surface-variant text-sm font-semibold">No candidates have applied yet.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* FAB for Mobile */}
      <RouterLink to="/employer-portal/post-a-job---employer-portal" className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center z-50 active:scale-95 transition-transform border border-white">
        <span className="material-symbols-outlined text-3xl text-white">add</span>
      </RouterLink>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-outline-variant flex justify-around items-center px-4 py-3 pb-safe-area-inset-bottom">
        <RouterLink className="flex flex-col items-center gap-1 text-primary" to="/employer-portal/employer-dashboard-industrial-blueprints-refined">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-xs font-bold">Dashboard</span>
        </RouterLink>
        <RouterLink className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/post-a-job---employer-portal">
          <span className="material-symbols-outlined">post_add</span>
          <span className="font-label-sm text-xs font-bold">Post Job</span>
        </RouterLink>
        <RouterLink className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/applicants-maintenance-engineer">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-sm text-xs font-bold">Applicants</span>
        </RouterLink>
        <RouterLink className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/employer-settings-main-menuemployer-settings-main-menu">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-xs font-bold">Settings</span>
        </RouterLink>
      </nav>
    </div>
  );
}
