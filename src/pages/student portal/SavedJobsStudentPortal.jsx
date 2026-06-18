// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { getSavedJobIds, toggleSaveJobId, getJobById } from '../../utils/db';
import StudentHeader from '../../components/StudentHeader';

export default function SavedJobsStudentPortal() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);

    loadSavedJobs();
  }, [navigate]);

  const loadSavedJobs = () => {
    const ids = getSavedJobIds();
    const loaded = ids.map(id => getJobById(id)).filter(Boolean);
    setSavedJobs(loaded);
    setFilteredJobs(loaded);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredJobs(savedJobs);
    } else {
      const lower = searchTerm.toLowerCase();
      const filtered = savedJobs.filter(job => 
        job.title.toLowerCase().includes(lower) || 
        job.company.toLowerCase().includes(lower) || 
        job.location.toLowerCase().includes(lower) ||
        job.branch.toLowerCase().includes(lower)
      );
      setFilteredJobs(filtered);
    }
  }, [searchTerm, savedJobs]);

  const handleUnsave = (jobId) => {
    toggleSaveJobId(jobId);
    loadSavedJobs();
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="jobs" />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-6 pt-8 pb-32 text-left">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-headline-lg text-primary font-bold">Saved Opportunities</h2>
            <p className="font-body-md text-on-surface-variant">Track and manage the roles you are interested in.</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-semibold text-sm" 
              placeholder="Search within saved jobs..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center p-2 rounded-lg border border-outline-variant">
                      <img alt={`${job.company} logo`} className="w-full h-full object-contain" src={job.logo} />
                    </div>
                    <button 
                      onClick={() => handleUnsave(job.id)}
                      className="text-primary hover:text-red-600 transition-colors p-1"
                      title="Unsave job"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-lg mb-1 truncate">{job.title}</h4>
                  <p className="text-on-surface-variant text-sm mb-4">{job.company} • {job.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary-fixed text-primary text-[10px] font-bold rounded-full">{job.branch}</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-full">{job.type}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                  <span className="font-bold text-primary text-sm">{job.salary}</span>
                  <Link 
                    to={`/public/jobdetails?id=${job.id}`} 
                    className="bg-primary text-white px-4 py-2 rounded font-bold text-xs hover:bg-primary/95 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full border border-dashed border-outline-variant rounded-xl p-8 text-center bg-surface-container-low">
              <span className="material-symbols-outlined text-[40px] text-outline mb-2">bookmark_border</span>
              <p className="font-bold text-on-surface">No saved opportunities found.</p>
              <p className="text-xs text-on-surface-variant mt-1">Bookmark vacancies on the Find Jobs page to see them listed here.</p>
              <Link to="/public/find-diploma-jobs" className="mt-4 inline-block bg-primary text-white px-5 py-2 rounded-lg font-bold text-xs hover:opacity-95 shadow-sm">
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
