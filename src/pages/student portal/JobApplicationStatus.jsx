import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '../../components/StudentHeader';
import { getCurrentUser } from '../../utils/auth';
import { getApplicationsByStudent } from '../../utils/db';

export default function JobApplicationStatus() {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('All');
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

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Stats
  const activeCount = applications.filter(a => a.status !== 'Rejected').length;
  const shortlistedCount = applications.filter(a => ['Shortlisted', 'Interview Scheduled', 'Interview', 'Selected'].includes(a.status)).length;
  const rejectedCount = applications.filter(a => a.status === 'Rejected').length;

  const filteredApps = applications.filter(app => {
    if (filter === 'All') return true;
    if (filter === 'Active') return app.status !== 'Rejected' && app.status !== 'Selected';
    if (filter === 'Shortlisted') return ['Shortlisted', 'Interview Scheduled', 'Interview', 'Selected'].includes(app.status);
    if (filter === 'Rejected') return app.status === 'Rejected';
    return true;
  });

  const getProgressStyles = (status) => {
    // Return line-width percent and step colors
    // Steps: 1. Applied, 2. Technical, 3. Interview, 4. Selection
    let linePercent = '0%';
    let step1 = 'active'; // Applied
    let step2 = 'pending'; // Technical
    let step3 = 'pending'; // Interview
    let step4 = 'pending'; // Selection

    if (status === 'Under Review') {
      linePercent = '33%';
      step1 = 'active';
      step2 = 'active';
    } else if (status === 'Interview Scheduled' || status === 'Interview') {
      linePercent = '66%';
      step1 = 'active';
      step2 = 'active';
      step3 = 'active';
    } else if (status === 'Selected' || status === 'Shortlisted') {
      linePercent = '100%';
      step1 = 'active';
      step2 = 'active';
      step3 = 'active';
      step4 = 'active';
    }

    return { linePercent, step1, step2, step3, step4 };
  };

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="applications" />
      
      <main className="pt-8 pb-24 md:pb-8 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-stack-lg text-left">
          <div className="bg-white border border-outline-variant p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300">
            <div>
              <span className="text-on-surface-variant font-label-md uppercase tracking-wider">Active Applications</span>
              <h2 id="appliedCountStat" className="font-headline-lg text-headline-lg mt-2 text-primary font-extrabold">{activeCount}</h2>
            </div>
            <div className="mt-4 flex items-center text-primary text-sm font-semibold">
              <span className="material-symbols-outlined mr-1">trending_up</span>
              <span>Updated in real-time</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300 border-l-4 border-l-secondary">
            <div>
              <span className="text-on-surface-variant font-label-md uppercase tracking-wider">Shortlisted / Interviews</span>
              <h2 className="font-headline-lg text-headline-lg mt-2 text-secondary font-extrabold">{shortlistedCount}</h2>
            </div>
            <div className="mt-4 flex items-center text-[#385723] text-sm font-semibold">
              <span className="material-symbols-outlined mr-1">check_circle</span>
              <span>Ready for next round</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300">
            <div>
              <span className="text-on-surface-variant font-label-md uppercase tracking-wider">Rejected / Closed</span>
              <h2 className="font-headline-lg text-headline-lg mt-2 text-red-600 font-extrabold">{rejectedCount}</h2>
            </div>
            <div className="mt-4 flex items-center text-on-surface-variant text-sm font-semibold">
              <span className="material-symbols-outlined mr-1">info</span>
              <span>View feedback for improvements</span>
            </div>
          </div>
        </section>

        {/* Status Tracking List */}
        <section className="space-y-stack-md text-left">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline-md text-headline-md font-bold">Active Tracking</h3>
            <div className="flex gap-2">
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white border border-outline-variant rounded-lg text-sm font-bold p-2 text-primary focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active Only</option>
                <option value="Shortlisted">Shortlisted/Interviews</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredApps.length > 0 ? (
              filteredApps.map((app) => {
                const isRejected = app.status === 'Rejected';
                const { linePercent, step1, step2, step3, step4 } = getProgressStyles(app.status);

                return (
                  <div key={app.id} className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-md transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Company Info */}
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-16 h-16 bg-white rounded-lg border border-outline-variant p-2 flex items-center justify-center shrink-0">
                          <img alt={`${app.company} Logo`} className="max-w-full max-h-full object-contain" src={app.logo}/>
                        </div>
                        <div>
                          <h4 className="font-headline-md text-headline-md text-primary font-bold leading-tight">{app.jobTitle}</h4>
                          <p className="text-on-surface-variant font-semibold">{app.company} • {app.location}</p>
                          <p className="text-label-sm text-outline mt-1 italic">Applied: {app.date} • {app.updatedAt}</p>
                        </div>
                      </div>

                      {/* Progress Stepper */}
                      <div className="flex-1 max-w-xl">
                        {!isRejected ? (
                          <div className="relative flex items-center justify-between w-full">
                            {/* Progress Line */}
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
                            <div 
                              className="absolute top-1/2 left-0 h-[2px] bg-primary -translate-y-1/2 z-0 transition-all duration-700" 
                              style={{ width: linePercent }}
                            ></div>
                            
                            {/* Step 1: Applied */}
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-sm">check</span>
                              </div>
                              <span className="text-[10px] font-bold uppercase text-primary">Applied</span>
                            </div>
                            
                            {/* Step 2: Technical */}
                            <div className={`relative z-10 flex flex-col items-center gap-2 ${step2 === 'pending' ? 'opacity-40' : ''}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step2 === 'active' ? 'bg-primary text-white' : 'bg-surface border-2 border-outline-variant'}`}>
                                <span className="material-symbols-outlined text-sm">history_edu</span>
                              </div>
                              <span className="text-[10px] font-bold uppercase">Technical</span>
                            </div>
                            
                            {/* Step 3: Interview */}
                            <div className={`relative z-10 flex flex-col items-center gap-2 ${step3 === 'pending' ? 'opacity-40' : ''}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step3 === 'active' ? 'bg-primary text-white' : 'bg-surface border-2 border-outline-variant'}`}>
                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                              </div>
                              <span className="text-[10px] font-bold uppercase">Interview</span>
                            </div>
                            
                            {/* Step 4: Selection */}
                            <div className={`relative z-10 flex flex-col items-center gap-2 ${step4 === 'pending' ? 'opacity-40' : ''}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step4 === 'active' ? 'bg-primary text-white' : 'bg-surface border-2 border-outline-variant'}`}>
                                <span className="material-symbols-outlined text-sm">military_tech</span>
                              </div>
                              <span className="text-[10px] font-bold uppercase">Selection</span>
                            </div>
                          </div>
                        ) : (
                          <div className="relative flex items-center justify-between w-full">
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-600 -translate-y-1/2 z-0"></div>
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-sm">close</span>
                              </div>
                              <span className="text-[10px] font-bold uppercase text-red-600">Closed (Rejected)</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Actions & Badge */}
                      <div className="flex flex-col items-end gap-3 min-w-[140px]">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                          app.status === 'Interview Scheduled' || app.status === 'Interview'
                            ? 'bg-secondary-fixed text-on-secondary-fixed-variant'
                            : app.status === 'Selected'
                            ? 'bg-green-100 text-green-800'
                            : isRejected
                            ? 'bg-red-100 text-red-800'
                            : 'bg-surface-container-high text-on-surface-variant'
                        }`}>
                          {app.status === 'Interview Scheduled' || app.status === 'Interview' ? 'Action Required' : app.status}
                        </span>
                        <div className="flex gap-2 w-full md:w-auto">
                          <Link to="/public/contact" className="flex-1 md:flex-none px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-low text-center">Support</Link>
                          <Link to={`/public/jobdetails?id=${app.jobId}`} className="flex-1 md:flex-none px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/95 text-center">Job Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="border border-dashed border-outline-variant rounded-xl p-10 text-center bg-surface-container-low">
                <span className="material-symbols-outlined text-[48px] text-outline mb-2">assignment_turned_in</span>
                <p className="font-bold text-on-surface text-lg">No tracking items matching filter.</p>
                <p className="text-on-surface-variant text-sm mt-1">Explore job opportunities and submit applications to track progress here.</p>
                <Link to="/public/find-diploma-jobs" className="mt-4 inline-block bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all">Find Jobs</Link>
              </div>
            )}
          </div>
        </section>

        {/* Skill Assessment CTA */}
        <section className="mt-stack-lg bg-[#091E42] text-white p-8 rounded-xl relative overflow-hidden text-left">
          <div className="relative z-10 max-w-lg">
            <h3 className="font-headline-lg text-headline-lg text-white mb-2 font-bold">Boost Your Odds</h3>
            <p className="text-slate-300 mb-6 font-body-md">Complete a verified skill assessment in 'CAD Design' or 'Structural Mechanics' to jump to the front of the queue for top industrial roles.</p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-bold text-label-md hover:scale-105 transition-transform">Start Assessment</button>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -br-10 -mb-10"></div>
        </section>
      </main>
    </div>
  );
}
