import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '../../components/StudentHeader';
import { getCurrentUser } from '../../utils/auth';
import { getApplicationsByStudent } from '../../utils/db';

export default function ApplicationHistory() {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [filterChip, setFilterChip] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login');
      return;
    }
    setUser(session);
    setApplications(getApplicationsByStudent(session.email));
  }, [navigate]);

  const handleWithdraw = (appId) => {
    if (window.confirm("Are you sure you want to withdraw this application?")) {
      const rawApps = localStorage.getItem('msbte_applications');
      if (rawApps) {
        const apps = JSON.parse(rawApps);
        const updated = apps.filter(a => a.id !== appId);
        localStorage.setItem('msbte_applications', JSON.stringify(updated));
        
        // Re-read student apps
        const session = getCurrentUser();
        if (session) {
          setApplications(getApplicationsByStudent(session.email));
        }
      }
    }
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  const filteredApps = applications.filter(app => {
    if (filterChip === 'All') return true;
    if (filterChip === 'Active') return ['Under Review', 'Interview Scheduled', 'Interview'].includes(app.status);
    if (filterChip === 'Completed') return ['Selected', 'Rejected'].includes(app.status);
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="applications" />
      
      <main className="pb-24 px-margin-mobile max-w-xl mx-auto text-left">
        {/* Screen Title */}
        <div className="py-6">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold">My Applications</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Track your industrial journey</p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 mb-8 overflow-x-auto hide-scrollbar py-2">
          {['All', 'Active', 'Completed'].map((chip) => (
            <button
              key={chip}
              onClick={() => setFilterChip(chip)}
              className={`px-6 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap shadow-sm border ${
                filterChip === chip
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-on-surface-variant border-outline-variant hover:bg-surface-container'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Application List */}
        <div className="space-y-stack-md">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => {
              const isInterviewing = app.status === 'Interview Scheduled' || app.status === 'Interview';
              const isShortlisted = app.status === 'Shortlisted';
              const isSelected = app.status === 'Selected';
              const isRejected = app.status === 'Rejected';

              return (
                <div 
                  key={app.id} 
                  className={`bg-white rounded-xl p-5 border border-outline-variant shadow-sm hover:shadow-md transition-shadow ${
                    isRejected ? 'opacity-80 bg-surface-container-low' : ''
                  }`}
                >
                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant p-2 shrink-0">
                      <img className="max-w-full max-h-full object-contain" src={app.logo} alt={`${app.company} Logo`} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-headline-md text-body-md font-bold text-on-surface leading-tight truncate">{app.jobTitle}</h3>
                      <p className="font-label-md text-label-md text-on-surface-variant truncate">{app.company}</p>
                      <p className="font-label-sm text-label-sm text-outline mt-1">Applied: {app.date}</p>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-label-sm text-label-sm font-bold shrink-0 flex items-center gap-1 ${
                      isInterviewing 
                        ? 'bg-secondary-container text-on-secondary-container' 
                        : isSelected
                        ? 'bg-green-100 text-green-800'
                        : isRejected
                        ? 'bg-red-100 text-red-800'
                        : 'bg-primary-fixed text-on-primary-fixed'
                    }`}>
                      {isInterviewing && <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container animate-pulse"></span>}
                      {app.status}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {isInterviewing ? (
                      <Link 
                        to="/student-portal/job-application-status"
                        className="flex-1 py-2.5 bg-primary text-white rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary/95 shadow-sm text-center"
                      >
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        Schedule Interview
                      </Link>
                    ) : (
                      <Link 
                        to={`/public/jobdetails?id=${app.jobId}`}
                        className="flex-1 py-2.5 bg-white border border-primary text-primary text-center rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors"
                      >
                        View Details
                      </Link>
                    )}
                    
                    {!isSelected && !isRejected && (
                      <button 
                        onClick={() => handleWithdraw(app.id)}
                        className="px-4 py-2.5 bg-white border border-outline-variant text-red-600 rounded-lg hover:bg-red-50 transition-colors font-bold text-sm"
                      >
                        Withdraw
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="border border-dashed border-outline-variant rounded-xl p-10 text-center bg-surface-container-low">
              <span className="material-symbols-outlined text-[48px] text-outline mb-2">work_off</span>
              <p className="font-bold text-on-surface text-lg">No application records found.</p>
              <p className="text-on-surface-variant text-sm mt-1">Try modifying your filter categories above.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
