import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { getJobs, getApplications, updateJobStatus } from '../../utils/db';
import EmployerHeader from '../../components/EmployerHeader';

export default function ManageJobsEmployerPortal() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Postings');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
    
    async function loadData() {
      await loadJobs(session.companyName);
      const apps = await getApplications();
      setApplications(apps);
    }
    loadData();
  }, [navigate]);

  const loadJobs = async (companyName) => {
    const allJobs = await getJobs();
    const companyJobs = allJobs.filter(
      j => j.company && j.company.toLowerCase() === companyName.toLowerCase()
    );
    setJobs(companyJobs);
  };

  const handleUpdateStatus = async (jobId, newStatus) => {
    const success = await updateJobStatus(jobId, newStatus);
    if (success && user) {
      await loadJobs(user.companyName);
    }
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Filter Jobs
  const filteredJobs = jobs.filter(job => {
    const status = job.status || 'Active'; // default to active if undefined
    
    // Status Filter
    if (statusFilter !== 'All Postings') {
      if (statusFilter === 'Active' && status !== 'Active') return false;
      if (statusFilter === 'Paused' && status !== 'Paused') return false;
      if (statusFilter === 'Closed' && status !== 'Closed') return false;
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        job.title.toLowerCase().includes(q) ||
        job.branch.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="jobs" />
      
      {/* Main Content Canvas */}
      <main className="max-w-container-max mx-auto px-margin-mobile py-8 pb-32">
        {/* Header Section */}
        <header className="mb-8 text-left">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-1 font-extrabold">Manage Postings</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Track and manage your active industrial job listings.</p>
        </header>

        {/* Search & Filter Bar */}
        <section className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant mb-8 shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md outline-none text-sm font-semibold" 
              placeholder="Search jobs by title or branch..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto text-left">
            <span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap font-bold text-xs uppercase">Status:</span>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md focus:outline-none focus:ring-2 focus:ring-primary w-full text-sm font-bold text-primary"
            >
              <option>All Postings</option>
              <option>Active</option>
              <option>Paused</option>
              <option>Closed</option>
            </select>
          </div>
          <Link 
            to="/employer-portal/post-a-job---employer-portal" 
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors w-full md:w-auto text-sm shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Post New Job
          </Link>
        </section>

        {/* Job Listing Cards (Grid/Stack) */}
        <section className="grid grid-cols-1 gap-4 text-left">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const jobApps = applications.filter(app => app.jobId === job.id);
              const jobStatus = job.status || 'Active';
              
              const isActive = jobStatus === 'Active';
              const isPaused = jobStatus === 'Paused';
              const isClosed = jobStatus === 'Closed';

              let statusBadgeClass = "bg-green-50 text-green-800";
              let statusDotColor = "bg-green-500";
              if (isPaused) {
                statusBadgeClass = "bg-orange-50 text-orange-800 border-orange-200";
                statusDotColor = "bg-orange-500";
              } else if (isClosed) {
                statusBadgeClass = "bg-surface-container-highest text-on-surface-variant";
                statusDotColor = "bg-outline";
              }

              return (
                <div 
                  key={job.id} 
                  className={`bg-white border border-outline-variant rounded-xl p-6 transition-all duration-300 hover:shadow-md ${
                    isClosed ? 'opacity-85' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg p-2 border border-outline-variant">
                        <img alt="Company Logo" className="w-full h-full object-contain" src={job.logo} />
                      </div>
                      <div>
                        <h3 className="font-headline-md text-lg text-on-surface font-extrabold">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="bg-surface-container-high px-2.5 py-0.5 rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                            Branch: {job.branch}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border ${statusBadgeClass}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor}`}></span> 
                            {jobStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex md:flex-col items-start md:items-end justify-between md:justify-center gap-4 md:gap-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-semibold text-sm">
                        <span className="material-symbols-outlined text-[18px]">group</span>
                        <span>{jobApps.length} {jobApps.length === 1 ? 'Applicant' : 'Applicants'}</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant/80 text-xs font-medium">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Link 
                        to={`/employer-portal/applicants-maintenance-engineer?jobId=${job.id}`} 
                        className="flex-1 sm:flex-none text-center bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/95 transition-colors"
                      >
                        View Applicants
                      </Link>
                      
                      {isActive && (
                        <button 
                          onClick={() => handleUpdateStatus(job.id, 'Paused')}
                          className="flex-1 sm:flex-none border border-orange-300 text-orange-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-50 transition-colors"
                        >
                          Pause
                        </button>
                      )}
                      
                      {isPaused && (
                        <button 
                          onClick={() => handleUpdateStatus(job.id, 'Active')}
                          className="flex-1 sm:flex-none bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors"
                        >
                          Resume
                        </button>
                      )}

                      {!isClosed && (
                        <button 
                          onClick={() => {
                            if (window.confirm("Are you sure you want to close this job listing? Applicants will no longer be able to apply.")) {
                              handleUpdateStatus(job.id, 'Closed');
                            }
                          }}
                          className="flex-1 sm:flex-none border border-red-200 text-red-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors"
                        >
                          Close Job
                        </button>
                      )}

                      {isClosed && (
                        <button 
                          onClick={() => handleUpdateStatus(job.id, 'Active')}
                          className="flex-1 sm:flex-none bg-secondary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary/95 transition-colors"
                        >
                          Re-post Job
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="border border-dashed border-outline-variant rounded-xl p-12 text-center bg-surface-container-low">
              <span className="material-symbols-outlined text-[48px] text-outline mb-2">work_off</span>
              <p className="font-bold text-on-surface text-lg">No postings match your criteria.</p>
              <p className="text-on-surface-variant text-sm mt-1">Try modifying your search or post a new job.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
