import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/Header';

const allJobs = [
  {
    id: "tata-trainee",
    title: "Junior Production Engineer",
    company: "Tata Motors Ltd.",
    location: "Pune, Chakan",
    salary: "₹18,000 - ₹25,000 /mo",
    branch: "Mechanical",
    type: "job",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM",
    badge: "Urgent",
    badgeClass: "bg-error-container text-on-error-container"
  },
  {
    id: "lt-civil",
    title: "Diploma Trainee - Civil",
    company: "L&T Construction",
    location: "Mumbai, BKC",
    salary: "₹22,000 - ₹28,000 /mo",
    branch: "Civil",
    type: "job",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    badge: "New Listing",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant"
  },
  {
    id: "infosys-support",
    title: "Technical Support Associate",
    company: "Infosys BPM",
    location: "Pune, Hinjewadi",
    salary: "₹15,000 /mo (Stipend)",
    branch: "Computer",
    type: "internship",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg",
    badge: "Internship",
    badgeClass: "bg-blue-100 text-blue-800"
  }
];

const defaultSavedJobs = [
  {
    id: "forbes-qc",
    title: "Quality Control Engineer",
    company: "Forbes Marshall Pvt. Ltd.",
    location: "Pune, Maharashtra",
    salary: "₹3.5L - ₹5.2L Per Annum",
    branch: "Mechanical",
    tags: ["Mechanical", "Six Sigma"],
    badge: "Urgent",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzqlHrRpiLt_9I2iccBzwdDS3BvlnuH2kzlYAQIe2Z9fX556Rgs38MGlhMn8wJMpc_F33Qa3welcCuRZ9QiAwqA-75Y2w6JcTi__raDLlFl7KWr2WYZ70zTjUJRPtmnJQ-uvvd-tVJwPcmqwUaYkrYMOv_S3eMAT5PtGvdMkHEy7zdwUdzU0-Yq0due6W6EeqQGovepFAgzGicZ8HUlEdVS2A8y7R6sHnyPQV1yU3MUBeP76DbmzccMMnlCNalfmggSZpIWkFTc9U"
  },
  {
    id: "kirloskar-gte",
    title: "Graduate Trainee Engineer",
    company: "Kirloskar Brothers Ltd.",
    location: "Sangli, Maharashtra",
    salary: "₹2.8L - ₹4.0L Per Annum",
    branch: "Production",
    tags: ["Production", "CAD"],
    badge: "",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEuXCkjWrjF6AEzl7-muBXszDGmhc_g-32S3HBBSE170Zqkp3_YFOpc8NKUCKg3zugtMkHhicbzbGoZsW2ekBRShA2QfCw-mGRaLRjABoRX-0ATAfNPllFgDQiyYa5HcccbZErBSzKafd9UhKa1IrA56Ok0UEeH_Gs-lCKx4arwnf_dNIk3Sfgee9gPymt2nk0VIbL8_rZViqOckTdQmvvh0QbegmEhA5kh7NYrRaB5hSg-GuLHtbHE1hrTOj75TJS7FxEn-XWN4U"
  },
  {
    id: "tata-als",
    title: "Assembly Line Supervisor",
    company: "Tata Motors",
    location: "Pimpri, Pune",
    salary: "₹4.2L - ₹6.0L Per Annum",
    branch: "Electrical",
    tags: ["Electrical", "Automation"],
    badge: "New",
    badgeClass: "bg-primary-container text-on-primary-container",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiItun5oeHuUyyFHesxSZ9Jp_Z3XdVMkU8NhOMlAuetPELVPiWLKfCkTw7dJ0hJqV1QpMAQk4ekcbQYTpsnRsyZAfxUYAaVZZhKevMwbv69Y8j6Ku6fJliQaq5Zy0OBT9lk-kOJNErMFfsq_p2rF6i9Qukzv6bHuWSyky7qm2h5RaiN4nzkghlmv1b2J0UIqUAubu1QbmnVqCAK-rP1PvsEhSnBlLSdtjpbHBzxInTVf5L_a400X-AOWK3GDbx1KoL4tUokwF7gNA"
  }
];

export default function FindDiplomaJobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentBranch = searchParams.get('branch') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('saved_jobs');
    if (!raw) {
      localStorage.setItem('saved_jobs', JSON.stringify(defaultSavedJobs));
      setSavedJobs(defaultSavedJobs);
    } else {
      setSavedJobs(JSON.parse(raw));
    }
  }, []);

  const filterBranch = (branch) => {
    if (branch === 'all') {
      searchParams.delete('branch');
    } else {
      searchParams.set('branch', branch);
    }
    setSearchParams(searchParams);
  };

  const toggleSaveJob = (job) => {
    let updated;
    const isSaved = savedJobs.some(j => j.id === job.id);
    if (isSaved) {
      updated = savedJobs.filter(j => j.id !== job.id);
    } else {
      updated = [...savedJobs, {
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        branch: job.branch,
        logo: job.logo,
        type: job.type,
        tags: [job.branch, job.type === 'internship' ? 'Internship' : 'Full Time'],
        badge: job.badge || '',
        badgeClass: job.badgeClass || 'bg-primary-container text-on-primary-container'
      }];
    }
    setSavedJobs(updated);
    localStorage.setItem('saved_jobs', JSON.stringify(updated));
  };

  const clearFilters = () => {
    setSearchQuery('');
    searchParams.delete('branch');
    setSearchParams(searchParams);
  };

  // Filtering Logic
  const filteredJobs = allJobs.filter(job => {
    // 1. Branch filter
    let branchMatch = true;
    if (currentBranch !== 'all') {
      const b = currentBranch.toLowerCase();
      if (b === 'mechanical') branchMatch = job.branch.toLowerCase().includes('mechanical');
      else if (b === 'civil') branchMatch = job.branch.toLowerCase().includes('civil');
      else if (b === 'electrical') branchMatch = job.branch.toLowerCase().includes('electrical');
      else if (b === 'computer' || b === 'it') {
        branchMatch = job.branch.toLowerCase().includes('computer') || 
                      job.branch.toLowerCase().includes('it') || 
                      job.branch.toLowerCase().includes('comp');
      }
    }

    // 2. Search query filter
    let searchMatch = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      searchMatch = job.title.toLowerCase().includes(q) ||
                    job.company.toLowerCase().includes(q) ||
                    job.location.toLowerCase().includes(q) ||
                    job.branch.toLowerCase().includes(q) ||
                    job.type.toLowerCase().includes(q);
    }

    return branchMatch && searchMatch;
  });

  return (
    <div className="w-full min-h-screen">
      <Header activePage="jobs" />

      <main className="max-w-container-max mx-auto px-margin-mobile pb-32">
        {/* Hero & Search Section */}
        <section className="py-stack-lg">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Find Your First Engineering Move</h2>
            <p className="text-on-surface-variant">Exclusive diploma jobs across Maharashtra's industrial hubs.</p>
          </div>
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mb-stack-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all text-body-md outline-none border" 
              placeholder="Search jobs, roles or companies" 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Path Switcher */}
          <div className="flex p-1 bg-surface-container rounded-full w-fit mb-stack-lg border border-outline-variant">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md transition-all">I am a Student</button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-all">I am a Recruiter</button>
          </div>
          {/* Filter Chips (Horizontal Scroll on Mobile) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
              <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider mr-2">Branch:</span>
              <button 
                className={`flex-none px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap ${currentBranch.toLowerCase() === 'mechanical' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant border border-outline-variant hover:border-primary transition-colors'}`} 
                onClick={() => filterBranch(currentBranch.toLowerCase() === 'mechanical' ? 'all' : 'Mechanical')}
              >
                ME (Mechanical)
              </button>
              <button 
                className={`flex-none px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap ${currentBranch.toLowerCase() === 'civil' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant border border-outline-variant hover:border-primary transition-colors'}`} 
                onClick={() => filterBranch(currentBranch.toLowerCase() === 'civil' ? 'all' : 'Civil')}
              >
                CE (Civil)
              </button>
              <button 
                className={`flex-none px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap ${currentBranch.toLowerCase() === 'electrical' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant border border-outline-variant hover:border-primary transition-colors'}`} 
                onClick={() => filterBranch(currentBranch.toLowerCase() === 'electrical' ? 'all' : 'Electrical')}
              >
                EE (Electrical)
              </button>
              <button 
                className={`flex-none px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap ${currentBranch.toLowerCase() === 'computer' || currentBranch.toLowerCase() === 'it' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant border border-outline-variant hover:border-primary transition-colors'}`} 
                onClick={() => filterBranch(currentBranch.toLowerCase() === 'computer' ? 'all' : 'Computer')}
              >
                IT/Comp
              </button>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider mr-2">Filters:</span>
              <button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant flex items-center gap-1">
                District <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <button className="flex-none bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-tertiary-container/20">Fresher</button>
              <button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant">Internship</button>
            </div>
          </div>
        </section>

        {/* Job Cards Vertical List */}
        <div className="space-y-stack-md">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isSaved = savedJobs.some((j) => j.id === job.id);
              return (
                <article key={job.id} className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0px_4px_12px_rgba(15,23,42,0.08)] transition-all flex flex-col md:flex-row md:items-center gap-4 group">
                  <div className="flex-none w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                    <img alt={job.company} className="w-full h-full object-contain" src={job.logo} />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">
                        <Link to={`/public/jobdetails?id=${job.id}`}>{job.title}</Link>
                      </h3>
                      {job.badge && (
                        <span className={`${job.badgeClass} text-label-sm font-label-sm px-2 py-0.5 rounded uppercase`}>
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-label-md mb-2">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-on-surface-variant text-label-md">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">location_on</span> {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">payments</span> {job.salary}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">school</span> {job.branch} Engineering
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0 md:flex-col lg:flex-row">
                    <Link to={`/public/jobdetails?id=${job.id}`} className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md flex-grow md:flex-none hover:opacity-90 transition-opacity text-center flex items-center justify-center">Apply Now</Link>
                    <button 
                      className={`border border-primary text-primary px-4 py-3 rounded-lg flex items-center justify-center transition-colors ${isSaved ? 'bg-primary-fixed' : 'hover:bg-primary-fixed'}`}
                      onClick={() => toggleSaveJob(job)}
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>
                        bookmark
                      </span>
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            /* Premium Empty State */
            <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-8 text-center bg-surface-container-low min-h-[350px]">
              <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-outline">
                <span className="material-symbols-outlined text-[40px]">search_off</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">No matching jobs found</h3>
              <p className="font-body-md text-on-surface-variant max-w-md mb-6">We couldn't find any positions matching your search. Try adjusting your search query or branch filters.</p>
              <button 
                className="px-6 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity"
                onClick={clearFilters}
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Action Button */}
      <Link 
        to="/student-portal/saved-jobs-student-portal"
        className="fixed bottom-24 right-6 w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-40"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
        <span className="absolute -top-1 -right-1 bg-error text-on-error text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
          {savedJobs.length}
        </span>
      </Link>

      {/* Bottom Navigation Bar */}
      <footer className="md:hidden fixed bottom-0 w-full z-50 bg-surface dark:bg-on-background shadow-md rounded-t-xl flex justify-around items-center px-4 py-2 pb-safe">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" to="/student-portal/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-label-sm mt-1">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 scale-95 transition-transform duration-150" to="/public/find-diploma-jobs">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <span className="font-label-sm text-label-sm mt-0.5">Jobs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" to="/student-portal/profile">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-label-sm mt-1">Profile</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" to="/student-portal/notifications-alerts">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-sm text-label-sm mt-1">Alerts</span>
        </Link>
      </footer>

      {/* Atmosphere Effects */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-fixed/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-fixed/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
