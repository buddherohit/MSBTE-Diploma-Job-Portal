import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getJobs } from '../../utils/db';

export default function EmployerJobOversightThermaxLtd() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadCompanyJobs();
  }, []);

  const loadCompanyJobs = () => {
    const allJobs = getJobs();
    // Filter jobs for Thermax Limited
    const companyJobs = allJobs.filter(j => j.company.toLowerCase().includes('thermax'));
    
    // Seed initial mock jobs for Thermax if not present for a clean professional look
    if (companyJobs.length === 0) {
      // Create defaults
      const defaults = [
        {
          id: "thermax-thermal",
          title: "Junior Mechanical Engineer - Thermal Systems",
          company: "Thermax Limited",
          location: "Pune, MH",
          badge: "Urgent Hiring",
          experience: "0-2 Years",
          applicants: 412,
          shortlisted: 84,
          interviews: 12,
          skills: ["AutoCAD Expert", "Thermodynamics", "Site Inspection"],
          status: "Live"
        },
        {
          id: "thermax-draftsman",
          title: "Associate Electrical Draftsman",
          company: "Thermax Limited",
          location: "Chakan Plant, MH",
          badge: "Standard",
          experience: "0-1 Years",
          applicants: 156,
          shortlisted: 32,
          interviews: 0,
          skills: ["SolidWorks", "Electrical Schematics"],
          status: "Expiring in 3 Days"
        },
        {
          id: "thermax-safety",
          title: "Safety Officer - Pune Regional Office",
          company: "Thermax Limited",
          location: "Pune Regional, MH",
          badge: "Flagged",
          experience: "1-3 Years",
          applicants: 45,
          shortlisted: 2,
          interviews: 0,
          skills: ["Safety Codes", "Compliance Logs"],
          status: "Flagged for Review"
        }
      ];
      const merged = [...defaults, ...allJobs];
      localStorage.setItem('msbte_jobs', JSON.stringify(merged));
      setJobs(defaults);
    } else {
      // Map properties for UI representation
      const formatted = companyJobs.map(j => ({
        id: j.id,
        title: j.title,
        company: j.company,
        location: j.location || "Pune, MH",
        badge: j.badge || "Standard",
        experience: j.experience || "0-2 Years",
        applicants: j.applicants || Math.floor(50 + Math.random() * 300),
        shortlisted: j.shortlisted || Math.floor(5 + Math.random() * 50),
        interviews: j.interviews || Math.floor(Math.random() * 10),
        skills: j.skills || ["AutoCAD", "Mechanical Engineering"],
        status: j.badge === 'Urgent' ? 'Live' : (j.badge === 'Flagged' ? 'Flagged for Review' : 'Live')
      }));
      setJobs(formatted);
    }
  };

  const handleSuspend = (id) => {
    const allJobs = getJobs();
    const updated = allJobs.filter(job => job.id !== id);
    localStorage.setItem('msbte_jobs', JSON.stringify(updated));
    alert('Listing suspended and removed from public views.');
    loadCompanyJobs();
  };

  const handlePromote = (id) => {
    const allJobs = getJobs();
    const updated = allJobs.map(job => {
      if (job.id === id) {
        return { ...job, badge: 'Urgent' };
      }
      return job;
    });
    localStorage.setItem('msbte_jobs', JSON.stringify(updated));
    alert('Job promoted to featured listing successfully!');
    loadCompanyJobs();
  };

  const handleDismissReport = (id) => {
    const allJobs = getJobs();
    const updated = allJobs.map(job => {
      if (job.id === id) {
        return { ...job, badge: 'New' };
      }
      return job;
    });
    localStorage.setItem('msbte_jobs', JSON.stringify(updated));
    alert('Compliance report dismissed. Listing restored to normal.');
    loadCompanyJobs();
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="verification" />

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Employer Summary Card */}
        <div className="bg-white border border-outline-variant rounded-2xl p-6 mb-8 mt-4 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-sm">
          <div className="w-16 h-16 bg-surface-container border border-outline-variant rounded-xl p-2 flex items-center justify-center shrink-0 shadow-sm">
            <img 
              alt="Thermax Logo" 
              className="max-w-full h-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0G_-0gBZHBgUTsiPcWt1ERFvFaFqCMLCtcnUTfqp2l2Bj670GEHX8SdDKdYJRV6Pv7sdcyrksIrAexjKqNINaupBFDPUc0DHqJ92NKjmabCJFyNfBlrkYZx5w3M_Dsuscbjy8f1YAzg2Rk0brt2X-DEt5UN7BqrfaC_kX-tCePbfLj-qUytNEgtckc371ZdByPJeQulWvdc6_vZewwc3zbeiJX88xfEeJDEHfKtf2xXzXFYPgHeNtcD5HZieDB0F4nMDP4ZdeSwA"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'; }}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-black text-on-surface tracking-tight">Thermax Limited</h2>
              <span className="bg-primary text-white text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Gold Partner</span>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span> Pune, Maharashtra 
              <span className="text-outline">|</span>
              <span className="material-symbols-outlined text-sm">factory</span> Energy & Environment
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container border border-outline-variant px-4 py-2 rounded-xl text-center shadow-sm">
              <div className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider">Active Jobs</div>
              <div className="text-2xl font-black text-primary mt-0.5">{jobs.length}</div>
            </div>
            <div className="bg-surface-container border border-outline-variant px-4 py-2 rounded-xl text-center shadow-sm">
              <div className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider">Trust Score</div>
              <div className="text-2xl font-black text-green-600 mt-0.5">98%</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-xl font-bold text-on-surface">Active Job Listings</h3>
            <p className="text-on-surface-variant text-sm font-semibold mt-1">
              Overseeing {jobs.length} live recruitment drives for diploma students.
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => alert('Filtering listings...')}
              className="bg-white border border-outline-variant text-on-surface px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">filter_list</span> Filter
            </button>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className={`lg:col-span-12 bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col justify-between ${
                job.badge === 'Flagged' ? 'border-2 border-red-500/30 bg-red-50/10' : 'border-outline-variant'
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-[9px] px-2 py-0.5 rounded font-extrabold uppercase tracking-wider ${
                        job.badge === 'Flagged' 
                          ? 'bg-red-100 text-red-800 border border-red-200' 
                          : (job.badge === 'Urgent Hiring' || job.badge === 'Urgent' ? 'bg-orange-100 text-orange-800 border border-orange-200' : 'bg-blue-100 text-blue-800 border border-blue-200')
                      }`}>
                        {job.badge}
                      </span>
                      {job.badge === 'Flagged' && (
                        <span className="bg-red-100 text-red-800 text-[9px] px-2 py-0.5 rounded font-bold uppercase flex items-center gap-0.5 border border-red-200">
                          <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>flag</span>
                          Needs Audit
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-on-surface mb-1">{job.title}</h4>
                    <p className="text-on-surface-variant text-xs font-semibold">Location: {job.location} • Ref ID: {job.id}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {job.badge === 'Flagged' ? (
                      <>
                        <button 
                          onClick={() => handleDismissReport(job.id)}
                          className="px-4 py-2 bg-green-500 text-white rounded-xl font-bold text-xs hover:bg-green-600 transition-colors shadow-sm"
                        >
                          Dismiss Report
                        </button>
                        <button 
                          onClick={() => handleSuspend(job.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-700 transition-colors shadow-sm"
                        >
                          Suspend Listing
                        </button>
                      </>
                    ) : (
                      <>
                        {job.badge !== 'Urgent' && (
                          <button 
                            onClick={() => handlePromote(job.id)}
                            className="px-4 py-2 bg-secondary text-white rounded-xl font-bold text-xs hover:brightness-110 transition-colors shadow-sm"
                          >
                            Promote to Featured
                          </button>
                        )}
                        <button 
                          onClick={() => handleSuspend(job.id)}
                          className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold text-xs transition-colors"
                        >
                          Suspend
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-outline-variant py-4 my-4 bg-surface-container-low/40 px-3 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-black text-on-surface">{job.applicants}</div>
                    <div className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider mt-0.5">Applicants</div>
                  </div>
                  <div className="text-center border-x border-outline-variant">
                    <div className="text-2xl font-black text-primary">{job.shortlisted}</div>
                    <div className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider mt-0.5">Shortlisted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-secondary">{job.interviews}</div>
                    <div className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider mt-0.5">Interviews</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="bg-surface-container text-on-surface-variant px-2.5 py-0.5 rounded-lg text-xs font-semibold border border-outline-variant/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
