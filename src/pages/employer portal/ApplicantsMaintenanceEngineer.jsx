import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { getJobById, getApplications, updateApplicationStatus } from '../../utils/db';
import EmployerHeader from '../../components/EmployerHeader';

export default function ApplicantsMaintenanceEngineer() {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('jobId') || 'thermax-maintenance';
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);
  const [allApps, setAllApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);

    const currentJob = getJobById(jobId);
    setJob(currentJob);

    // Get all applications for this job
    const loadedApps = getApplications().filter(app => app.jobId === jobId);
    setAllApps(loadedApps);
  }, [jobId, navigate]);

  useEffect(() => {
    let result = allApps;

    // Filter by tab
    if (activeTab === 'New') {
      result = result.filter(app => app.status === 'Under Review');
    } else if (activeTab === 'Shortlisted') {
      result = result.filter(app => app.status === 'Shortlisted');
    } else if (activeTab === 'Interviewed') {
      result = result.filter(app => app.status === 'Interview Scheduled' || app.status === 'Interview');
    } else if (activeTab === 'Rejected') {
      result = result.filter(app => app.status === 'Rejected');
    }

    // Filter by search query
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(app => 
        (app.studentName && app.studentName.toLowerCase().includes(lower)) ||
        (app.enrollment && app.enrollment.toLowerCase().includes(lower)) ||
        (app.studentEmail && app.studentEmail.toLowerCase().includes(lower)) ||
        (app.gpa && app.gpa.toLowerCase().includes(lower))
      );
    }

    setFilteredApps(result);
  }, [allApps, activeTab, searchTerm]);

  const handleAction = (appId, newStatus) => {
    const updated = updateApplicationStatus(appId, newStatus);
    if (updated) {
      const loadedApps = getApplications().filter(app => app.jobId === jobId);
      setAllApps(loadedApps);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center font-bold">
        Loading session...
      </div>
    );
  }

  // Count metrics for tabs
  const countAll = allApps.length;
  const countNew = allApps.filter(app => app.status === 'Under Review').length;
  const countShortlisted = allApps.filter(app => app.status === 'Shortlisted').length;
  const countInterviewed = allApps.filter(app => app.status === 'Interview Scheduled' || app.status === 'Interview').length;
  const countRejected = allApps.filter(app => app.status === 'Rejected').length;

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'S';
  };

  const getBadgeClass = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Shortlisted':
        return 'bg-purple-50 text-purple-700 border border-purple-200';
      case 'Interview Scheduled':
      case 'Interview':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'Selected':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Rejected':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-surface-container-highest text-on-surface-variant';
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="applicants" />

      <main className="max-w-container-max mx-auto px-4 md:px-6 py-6 text-left">
        {/* Page Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2 font-medium">
              <Link to="/employer-portal/employer-dashboard-industrial-blueprints-refined" className="cursor-pointer hover:text-primary">Dashboard</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary font-bold">{job ? job.title : 'Loading Job...'}</span>
            </nav>
            <h2 className="font-headline-md text-headline-md font-extrabold text-on-surface">
              Applicants: {job ? job.title : 'Loading...'} <span className="text-outline">({countAll})</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Link to="/employer-portal/post-a-job---employer-portal" className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:opacity-90 transition-all active:scale-95">
              <span className="material-symbols-outlined text-sm">edit</span> Edit Job
            </Link>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Applicants view link copied to clipboard!");
              }} 
              className="border border-outline text-primary px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined text-sm">share</span> Share Link
            </button>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white border border-outline-variant rounded-xl p-4 md:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold" 
                placeholder="Search by name, enrollment, or GPA..." 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Status Tabs */}
            <div className="flex p-1 bg-surface-container-high rounded-xl w-full lg:w-auto overflow-x-auto gap-1">
              <button 
                onClick={() => setActiveTab('All')}
                className={`px-5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'All' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                All ({countAll})
              </button>
              <button 
                onClick={() => setActiveTab('New')}
                className={`px-5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'New' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                New ({countNew})
              </button>
              <button 
                onClick={() => setActiveTab('Shortlisted')}
                className={`px-5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'Shortlisted' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Shortlisted ({countShortlisted})
              </button>
              <button 
                onClick={() => setActiveTab('Interviewed')}
                className={`px-5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'Interviewed' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Interviewed ({countInterviewed})
              </button>
              <button 
                onClick={() => setActiveTab('Rejected')}
                className={`px-5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'Rejected' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Rejected ({countRejected})
              </button>
            </div>
          </div>
        </div>

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
              <div key={app.id} className="bg-white border border-outline-variant rounded-xl p-6 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-extrabold text-lg border border-outline-variant shadow-sm">
                      {getInitials(app.studentName)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeClass(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-1">{app.studentName}</h3>
                  <p className="text-on-surface-variant text-sm font-semibold mb-3">MSBTE Student</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase tracking-wider font-bold">GPA</span>
                      <span className="font-bold text-xl text-primary">{app.gpa || 'N/A'}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase tracking-wider font-bold">Location</span>
                      <span className="text-on-surface font-semibold text-sm">{app.location || 'Maharashtra'}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container text-on-surface px-2..5 py-1 rounded-md text-[10px] font-bold uppercase">Diploma Student</span>
                    <span className="bg-surface-container text-on-surface px-2.5 py-1 rounded-md text-[10px] font-bold uppercase">MSBTE</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant">
                  <div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
                    <span>Applied: {app.date}</span>
                    <span className="flex items-center gap-1 font-semibold text-primary"><span className="material-symbols-outlined text-[14px]">description</span> Resume.pdf</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      to={`/employer-portal/review-candidateaditya-ahire?appId=${app.id}`} 
                      className="bg-primary-container text-on-primary-container py-2.5 rounded-lg font-bold text-xs hover:bg-primary hover:text-white transition-colors text-center flex items-center justify-center"
                    >
                      View Profile
                    </Link>
                    
                    {app.status === 'Under Review' && (
                      <button 
                        onClick={() => handleAction(app.id, 'Shortlisted')}
                        className="border border-outline-variant text-on-surface py-2.5 rounded-lg font-bold text-xs hover:bg-surface-container transition-colors"
                      >
                        Shortlist
                      </button>
                    )}

                    {app.status === 'Shortlisted' && (
                      <button 
                        onClick={() => handleAction(app.id, 'Interview Scheduled')}
                        className="bg-amber-100 text-amber-800 border border-amber-200 py-2.5 rounded-lg font-bold text-xs hover:bg-amber-200 transition-colors"
                      >
                        Schedule
                      </button>
                    )}

                    {(app.status === 'Interview Scheduled' || app.status === 'Interview') && (
                      <button 
                        onClick={() => handleAction(app.id, 'Selected')}
                        className="bg-green-100 text-green-800 border border-green-200 py-2.5 rounded-lg font-bold text-xs hover:bg-green-200 transition-colors"
                      >
                        Select Candidate
                      </button>
                    )}

                    {(app.status === 'Selected' || app.status === 'Rejected') && (
                      <span className="text-center font-bold text-xs text-outline py-2.5 border border-transparent">
                        Status Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full border border-dashed border-outline-variant rounded-xl p-8 text-center bg-surface-container-low">
              <span className="material-symbols-outlined text-[40px] text-outline mb-2">person_search</span>
              <p className="font-bold text-on-surface">No applicants match this category.</p>
              <p className="text-xs text-on-surface-variant mt-1">Try resetting the tab filters or checking your search query.</p>
            </div>
          )}
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-outline-variant flex justify-around items-center px-4 py-3 pb-safe-area-inset-bottom">
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/employer-dashboard-industrial-blueprints-refined">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-xs font-bold">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/post-a-job---employer-portal">
          <span className="material-symbols-outlined">post_add</span>
          <span className="font-label-sm text-xs font-bold">Post Job</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary" to="/employer-portal/applicants-maintenance-engineer">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-sm text-xs font-bold">Applicants</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" to="/employer-portal/employer-profile-settings">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-xs font-bold">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
