import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [appliedDetails, setAppliedDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login');
    } else {
      setUser(session);
    }

    const details = JSON.parse(localStorage.getItem('applied_job_details') || '[]');
    setAppliedDetails(details);
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-on-surface-variant font-bold">Verifying Session...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      {/* Student Navbar */}
      <StudentHeader activePage="dashboard" />

      {/* Main Workspace */}
      <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Welcome Section / Hero Banner */}
        <section className="relative overflow-hidden bg-white border border-outline-variant rounded-3xl p-8 md:p-10 shadow-sm text-on-surface">
          {/* Atmospheric Background Element */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-fixed/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-fixed/20 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-left space-y-3">
              <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">
                Student Overview
              </span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg font-extrabold tracking-tight text-on-surface">
                Welcome back, <span className="text-primary">{user.name}</span>!
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-2xl">
                Check out your application status and recommended jobs for <span className="font-bold text-secondary">Diploma in {user.branch || 'Engineering'}</span>. Your engineering journey starts here.
              </p>
            </div>
            <Link 
              to="/student-portal/profile" 
              className="bg-primary text-white hover:bg-primary/95 shadow-md font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">edit_document</span>
              Update Profile
            </Link>
          </div>
        </section>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Applied Jobs */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">work</span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-headline-md font-extrabold text-on-surface">{12 + appliedDetails.length}</p>
              <p className="text-on-surface-variant font-label-md text-[11px] font-bold uppercase tracking-wider mt-1">Applied</p>
            </div>
          </div>

          {/* Shortlisted */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">verified</span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-headline-md font-extrabold text-on-surface">2</p>
              <p className="text-on-surface-variant font-label-md text-[11px] font-bold uppercase tracking-wider mt-1">Shortlisted</p>
            </div>
          </div>

          {/* Saved */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">bookmark</span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-headline-md font-extrabold text-on-surface">5</p>
              <p className="text-on-surface-variant font-label-md text-[11px] font-bold uppercase tracking-wider mt-1">Saved</p>
            </div>
          </div>

          {/* Views */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">visibility</span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-headline-md font-extrabold text-on-surface">45</p>
              <p className="text-on-surface-variant font-label-md text-[11px] font-bold uppercase tracking-wider mt-1">Views</p>
            </div>
          </div>
        </section>

        {/* Promo banner inside grid */}
        <section className="bg-[#091E42] rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
            <span className="material-symbols-outlined text-[150px]">school</span>
          </div>
          <div className="text-left space-y-2 relative z-10">
            <h4 className="font-headline-md text-[20px] font-extrabold text-white">MSBTE Campus Placement Drive 2024</h4>
            <p className="text-slate-300 max-w-2xl text-body-md leading-relaxed">
              Top industrial engineering firms like Tata Motors and Kirloskar are visiting Pune and Chakan zones for direct selection processes.
            </p>
          </div>
          <button className="bg-white text-primary hover:bg-slate-50 font-bold px-6 py-3 rounded-xl text-body-md shrink-0 shadow-md relative z-10 transition-transform active:scale-95">
            Register Interest
          </button>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Active Applications */}
          <section className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">Active Applications</h2>
              <Link className="text-primary font-bold hover:underline text-sm flex items-center gap-0.5" to="/student-portal/application-history">
                View History <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low border-b border-outline-variant">
                    <tr>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Job Title</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Company</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Applied Date</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Status</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {appliedDetails.map((job) => (
                      <tr key={job.id} className="hover:bg-slate-50 transition-colors bg-green-50/10">
                        <td className="px-6 py-4 font-bold text-primary text-sm">{job.title}</td>
                        <td className="px-6 py-4 text-sm text-on-surface">{job.company}</td>
                        <td className="px-6 py-4 text-sm text-on-surface-variant">{job.date}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-fixed text-primary">
                            Under Review
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/public/jobdetails?id=${job.id}`} className="text-primary hover:text-primary-dim transition-colors">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary text-sm">Junior Design Engineer</td>
                      <td className="px-6 py-4 text-sm text-on-surface">Mahindra & Mahindra</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Oct 24, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-fixed text-primary">
                          Under Review
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/student-portal/job-application-status" className="text-primary hover:text-primary-dim transition-colors">
                          <span className="material-symbols-outlined text-xl">visibility</span>
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary text-sm">Production Supervisor</td>
                      <td className="px-6 py-4 text-sm text-on-surface">Bajaj Auto Ltd.</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Oct 20, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed/50 text-on-tertiary-fixed-variant">
                          Interview
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/student-portal/job-application-status" className="text-primary hover:text-primary-dim transition-colors">
                          <span className="material-symbols-outlined text-xl">visibility</span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Quick Actions Panel */}
          <section className="space-y-4 text-left">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">Quick Actions</h2>
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm space-y-4">
              <Link 
                to="/student-portal/resume-builder-dashboard" 
                className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="leading-tight">
                  <h4 className="font-bold text-sm text-on-surface">AI Resume Builder</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Optimize your industrial resume</p>
                </div>
              </Link>

              <Link 
                to="/student-portal/saved-jobs-student-portal" 
                className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </div>
                <div className="leading-tight">
                  <h4 className="font-bold text-sm text-on-surface">Saved Positions</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Track jobs you want to apply for</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Recommended Jobs */}
        <section className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">Recommended Openings</h2>
            <div className="flex gap-2">
              <button 
                className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full bg-white hover:bg-surface-container transition-colors shadow-sm active:scale-95" 
                onClick={() => document.getElementById('jobScroll').scrollBy({left: -320, behavior: 'smooth'})}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full bg-white hover:bg-surface-container transition-colors shadow-sm active:scale-95" 
                onClick={() => document.getElementById('jobScroll').scrollBy({left: 320, behavior: 'smooth'})}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-4" id="jobScroll" style={{ scrollbarWidth: 'none' }}>
            
            {/* Job Card 1 */}
            <div className="min-w-[300px] md:min-w-[360px] snap-start bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                  </div>
                  <span className="px-2.5 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase rounded-md">New</span>
                </div>
                <h4 className="font-bold text-lg text-on-surface leading-tight hover:text-primary transition-colors cursor-pointer">Maintenance Engineer</h4>
                <p className="text-on-surface-variant text-sm mt-1">Thermax Limited • Pune, MH</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-primary-fixed/40 text-primary text-[10px] font-bold rounded-md">Mechanical</span>
                  <span className="px-2.5 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-md">Full Time</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-outline-variant/60">
                <span className="font-bold text-primary">₹3.5 - 4.2 LPA</span>
                <Link to="/public/jobdetails" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-sm">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="min-w-[300px] md:min-w-[360px] snap-start bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
                  </div>
                  <span className="px-2.5 py-1 bg-error-container text-on-error-container text-[10px] font-bold uppercase rounded-md">Urgent</span>
                </div>
                <h4 className="font-bold text-lg text-on-surface leading-tight hover:text-primary transition-colors cursor-pointer">Quality Control Inspector</h4>
                <p className="text-on-surface-variant text-sm mt-1">Godrej & Boyce • Mumbai, MH</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-primary-fixed/40 text-primary text-[10px] font-bold rounded-md">Manufacturing</span>
                  <span className="px-2.5 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-md">Day Shift</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-outline-variant/60">
                <span className="font-bold text-primary">₹3.2 - 3.8 LPA</span>
                <Link to="/public/jobdetails" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-sm">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="min-w-[300px] md:min-w-[360px] snap-start bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary text-2xl">home_work</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-on-surface leading-tight hover:text-primary transition-colors cursor-pointer">Site Supervisor (Civil)</h4>
                <p className="text-on-surface-variant text-sm mt-1">Afcons Infrastructure • Nashik, MH</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-primary-fixed/40 text-primary text-[10px] font-bold rounded-md">Civil Eng</span>
                  <span className="px-2.5 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-md">Permanent</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-outline-variant/60">
                <span className="font-bold text-primary">₹4.0 - 5.0 LPA</span>
                <Link to="/public/jobdetails" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-sm">
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer bar for Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-outline-variant shadow-lg rounded-t-2xl">
        <Link className="flex flex-col items-center justify-center text-primary py-1 scale-95" to="/student-portal/dashboard">
          <span className="material-symbols-outlined filled-icon">dashboard</span>
          <span className="font-label-sm text-[10px] mt-0.5">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary py-1" to="/public/find-diploma-jobs">
          <span className="material-symbols-outlined">work</span>
          <span className="font-label-sm text-[10px] mt-0.5">Jobs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary py-1" to="/student-portal/profile">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-[10px] mt-0.5">Profile</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary py-1" to="/student-portal/notifications-alerts">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-sm text-[10px] mt-0.5">Alerts</span>
        </Link>
      </nav>
    </div>
  );
}
