// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '../../components/StudentHeader';
import { getCurrentUser } from '../../utils/auth';
import { getJobs, getApplications, applyToJob } from '../../utils/db';

const BRANCHES = ['All Branches', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Telecommunication', 'Computer Technology', 'Information Technology', 'Automobile Engineering'];
const JOB_TYPES = ['All Types', 'Full-time', 'Internship', 'Part-time'];

export default function FindDiplomaAppliedJobs() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [myApplicationIds, setMyApplicationIds] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showAppliedOnly, setShowAppliedOnly] = useState(false);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);

    // Pre-select branch from student profile
    if (session.branch) setSelectedBranch(session.branch);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [allJobs, allApps] = await Promise.all([getJobs(), getApplications()]);
        setJobs(allJobs);

        // Build a set of jobIds the current student has applied to
        const appliedIds = new Set(
          allApps
            .filter(app => app.studentEmail?.toLowerCase() === session.email?.toLowerCase())
            .map(app => app.jobId)
        );
        setMyApplicationIds(appliedIds);
      } catch (err) {
        console.error('Failed to load jobs:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  // Apply filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = !searchQuery
      || job.title?.toLowerCase().includes(searchQuery.toLowerCase())
      || job.company?.toLowerCase().includes(searchQuery.toLowerCase())
      || job.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = selectedBranch === 'All Branches' || job.branch === selectedBranch;
    const matchesType = selectedType === 'All Types' || job.type === selectedType;
    const matchesApplied = !showAppliedOnly || myApplicationIds.has(job.id);
    return matchesSearch && matchesBranch && matchesType && matchesApplied;
  });

  const handleQuickApply = async (job) => {
    if (!user || myApplicationIds.has(job.id)) return;
    try {
      await applyToJob({
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        logo: job.logo,
        location: job.location,
        studentEmail: user.email,
        studentName: user.name,
        enrollment: user.enrollment || '',
        gpa: user.gpa || '',
      });
      setMyApplicationIds(prev => new Set([...prev, job.id]));
    } catch (err) {
      console.error('Failed to apply:', err);
    }
  };

  if (!user) return null;

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface">
      <StudentHeader activePage="jobs" />

      <main className="max-w-container-max mx-auto px-4 pt-8 pb-16 text-left">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-primary font-bold text-[11px] uppercase tracking-widest mb-1">Student Portal</p>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Find Diploma Jobs</h1>
          <p className="text-on-surface-variant mt-1">
            Jobs matched to your branch — <span className="text-primary font-bold">{user.branch || 'All Branches'}</span>.
            {' '}{filteredJobs.length} opportunities found.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white border border-outline-variant rounded-2xl p-4 shadow-sm mb-6 flex flex-wrap gap-4 items-end">
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by title, company, location..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant rounded-xl text-on-surface font-semibold text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          {/* Branch Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Branch</label>
            <select
              value={selectedBranch}
              onChange={e => setSelectedBranch(e.target.value)}
              className="bg-surface border border-outline-variant rounded-xl px-4 py-2.5 text-on-surface font-semibold text-sm focus:ring-2 focus:ring-primary outline-none"
            >
              {BRANCHES.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Job Type</label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="bg-surface border border-outline-variant rounded-xl px-4 py-2.5 text-on-surface font-semibold text-sm focus:ring-2 focus:ring-primary outline-none"
            >
              {JOB_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>

          {/* Applied Toggle */}
          <button
            onClick={() => setShowAppliedOnly(prev => !prev)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border transition-all ${
              showAppliedOnly
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-on-surface border-outline-variant hover:border-primary hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            {showAppliedOnly ? 'Show All' : 'Applied Only'}
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-outline-variant rounded-2xl h-52" />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-on-surface-variant text-3xl">search_off</span>
            </div>
            <h3 className="font-bold text-on-surface text-xl mb-2">No Jobs Found</h3>
            <p className="text-on-surface-variant mb-6">Try adjusting your filters or clearing the search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedBranch('All Branches'); setSelectedType('All Types'); setShowAppliedOnly(false); }}
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:brightness-110 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Job Cards Grid */}
        {!isLoading && filteredJobs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map(job => {
              const isApplied = myApplicationIds.has(job.id);
              return (
                <div
                  key={job.id}
                  className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl border border-outline-variant bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-on-surface text-base leading-tight truncate">{job.title}</h3>
                        <p className="text-primary text-sm font-semibold truncate">{job.company}</p>
                      </div>
                      {(job.urgent || job.badge === 'Urgent') && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase shrink-0">Urgent</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                      <span className="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">work</span>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">school</span>
                        {(job.branch || '').split(' ')[0]}
                      </span>
                    </div>

                    <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">{job.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-4 border-t border-outline-variant/40 flex items-center justify-between gap-3">
                    <span className="text-primary font-extrabold text-sm">{job.salary}</span>
                    <div className="flex gap-2">
                      <Link
                        to={`/public/jobdetails?id=${job.id}`}
                        className="px-3 py-1.5 border border-outline-variant text-on-surface text-xs font-bold rounded-lg hover:border-primary hover:text-primary transition-colors"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => isApplied ? null : handleQuickApply(job)}
                        disabled={isApplied}
                        className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                          isApplied
                            ? 'bg-tertiary-container text-on-tertiary-container cursor-default opacity-80'
                            : 'bg-primary text-white hover:brightness-110 active:scale-95'
                        }`}
                      >
                        {isApplied ? '✓ Applied' : 'Quick Apply'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        {!isLoading && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/student-portal/application-history"
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined">history</span>
              View My Applications
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
