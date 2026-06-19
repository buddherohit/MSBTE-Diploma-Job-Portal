// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getJobs, getSavedJobIds, toggleSaveJobId } from '../../utils/db';

const allJobs = [
  {
    id: "thermax-maintenance",
    title: "Maintenance Engineer",
    company: "Thermax Limited",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y",
    location: "Pune, MH",
    district: "Pune",
    salary: "₹3.5 - 4.2 LPA",
    salaryVal: 350000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "Urgent",
    badgeClass: "bg-red-50 text-red-700 border border-red-200",
    experience: "0-2 Years"
  },
  {
    id: "lt-production",
    title: "Production Engineer",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUssuEmg1BjBZuERyN0MLhVkWR-uui1z4nLnwNoI0TSJwIpaZFNCUHxbVqgXit-idic_kklHqy11BwWPCp00EiCtJmkYTRkBUo6YzKqyovaQkwNry_uJwTYwPlDwRxhWjRfx9-2hXy0lRzdscP7vqRlrKDB7tS0ZOHkyYuhGhHUdeln0yUECcxZ3_PDSdbze1odty0CS_9KQWN6bkxaa5rN7uzJQsJlrLw06Zq9kPatoFYuq074kACBxFgvsyL9nZ02ZP5mETGzwE",
    location: "Mumbai, MH",
    district: "Mumbai",
    salary: "₹3.5 - 5 LPA",
    salaryVal: 350000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "architecture",
    badge: "New",
    badgeClass: "bg-green-50 text-green-700 border border-green-200",
    experience: "0-1 Years"
  },
  {
    id: "tata-design",
    title: "Junior Design Engineer",
    company: "TATA Motors",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2nEAnVDPBuaVO_W6FP6m0kLjWVQ3_b40YxthXAtG440kNxRfcTK9C0TZNes8jnkfrq87X0SMxrE3y2amMlXkh7RnyL8WkL42Zu7T58DJfCqQB2yd188KP2P_QjKsFQowbaDkN98vdqvedrr_TnKgg2YixenUX9X10AgNz_B2g1gg1nDHfzd9JN4SMCOu85Z36LOZ68XF64JRpiSmhKiS4znMgpKvUUF6Hf8YdB6UEOHbaDUGVrH4aE804gD0zPg2fjG8Pq1bUH4",
    location: "Pune, MH",
    district: "Pune",
    salary: "₹3 - 4.5 LPA",
    salaryVal: 300000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "",
    badgeClass: "",
    experience: "0-2 Years"
  },
  {
    id: "shapoorji-civil",
    title: "Site Supervisor",
    company: "Shapoorji Pallonji",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Nagpur, MH",
    district: "Nagpur",
    salary: "₹2.8 - 4 LPA",
    salaryVal: 280000,
    type: "Full-time",
    branch: "Civil",
    branchIcon: "home_work",
    badge: "",
    badgeClass: "",
    experience: "0-2 Years"
  },
  {
    id: "siemens-electrical",
    title: "Electrical Technician",
    company: "Siemens India",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWh8SDj52cM4qTR3DUFshfmGBaKKVRMIhB4B7lzZGwq0ad_BrrWi0BohvE9FH697BCWocbu-9cBf2SzNlOqrSyDSREp1zHtPQ70IdbiGtNo-0lXi5Ciw_tYzmVFgak7bEZIYq_Z_fFc3E5eeUiJp2X0q9MLF3JH1TX7_veduB_aCngK-eLfUYOtW_SNi0EJQ6OoSnOYiZI-wrOKpAcvZx8Tbwz1RDWlyKKGmi42PXt1Woh3bqWmrs66nCQp8A5mJdlcC6QuRPOzE",
    location: "Aurangabad, MH",
    district: "Aurangabad",
    salary: "₹2.5 - 3.5 LPA",
    salaryVal: 250000,
    type: "Full-time",
    branch: "Electrical",
    branchIcon: "bolt",
    badge: "",
    badgeClass: "",
    experience: "Fresher"
  },
  {
    id: "tata-trainee",
    title: "Junior Production Engineer",
    company: "Tata Motors Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM",
    location: "Pune, Chakan",
    district: "Pune",
    salary: "₹18,000 - ₹25,000 /mo",
    salaryVal: 216000,
    type: "Trainee",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "Urgent",
    badgeClass: "bg-red-50 text-red-700 border border-red-200",
    experience: "0-1 Years"
  },
  {
    id: "lt-civil",
    title: "Diploma Trainee - Civil",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Mumbai, BKC",
    district: "Mumbai",
    salary: "₹22,000 - ₹28,000 /mo",
    salaryVal: 264000,
    type: "Trainee",
    branch: "Civil",
    branchIcon: "apartment",
    badge: "New Listing",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    experience: "Fresher"
  },
  {
    id: "infosys-support",
    title: "Technical Support Associate",
    company: "Infosys BPM",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg",
    location: "Pune, Hinjewadi",
    district: "Pune",
    salary: "₹15,000 /mo",
    salaryVal: 180000,
    type: "Internship",
    branch: "Computer",
    branchIcon: "computer",
    badge: "Internship",
    badgeClass: "bg-purple-50 text-purple-700 border border-purple-200",
    experience: "Fresher"
  }
];

const defaultSavedJobs = [
  {
    id: "thermax-maintenance",
    title: "Maintenance Engineer",
    company: "Thermax Limited",
    location: "Pune, MH",
    salary: "₹3.5 - 4.2 LPA",
    branch: "Mechanical",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y"
  }
];

export default function FindDiplomaJobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const branchParam = searchParams.get('branch');
  const typeParam = searchParams.get('type');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');

  const [savedJobs, setSavedJobs] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Load branch from search params
  useEffect(() => {
    if (branchParam) {
      setSelectedBranches([branchParam]);
    } else {
      setSelectedBranches([]);
    }
  }, [branchParam]);

  // Load type from search params
  useEffect(() => {
    if (typeParam) {
      const typeMap = {
        'internship': 'Internship',
        'full-time': 'Full-time',
        'trainee': 'Trainee'
      };
      const typeLabel = typeMap[typeParam.toLowerCase()];
      if (typeLabel) {
        setSelectedTypes([typeLabel]);
      }
    } else {
      setSelectedTypes([]);
    }
  }, [typeParam]);

  const [jobs, setJobs] = useState([]);

  // Load jobs and saved jobs
  useEffect(() => {
    async function loadData() {
      const fetchedJobs = await getJobs();
      setJobs(fetchedJobs);
      const savedIds = getSavedJobIds();
      const saved = fetchedJobs.filter(j => savedIds.includes(j.id));
      setSavedJobs(saved);
    }
    loadData();
  }, []);

  const handleBranchSelect = (branch) => {
    if (selectedBranches.includes(branch)) {
      const updated = selectedBranches.filter(b => b !== branch);
      setSelectedBranches(updated);
      updateBranchParam(updated);
    } else {
      const updated = [...selectedBranches, branch];
      setSelectedBranches(updated);
      updateBranchParam(updated);
    }
  };

  const updateBranchParam = (branches) => {
    if (branches.length === 1) {
      searchParams.set('branch', branches[0]);
    } else {
      searchParams.delete('branch');
    }
    setSearchParams(searchParams);
  };

  const handleTypeSelect = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleDistrictSelect = (district) => {
    if (selectedDistricts.includes(district)) {
      setSelectedDistricts(selectedDistricts.filter(d => d !== district));
    } else {
      setSelectedDistricts([...selectedDistricts, district]);
    }
  };

  const handleExperienceSelect = (exp) => {
    if (selectedExperiences.includes(exp)) {
      setSelectedExperiences(selectedExperiences.filter(e => e !== exp));
    } else {
      setSelectedExperiences([...selectedExperiences, exp]);
    }
  };

  const toggleSaveJob = (job) => {
    toggleSaveJobId(job.id);
    const savedIds = getSavedJobIds();
    const saved = jobs.filter(j => savedIds.includes(j.id));
    setSavedJobs(saved);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBranches([]);
    setSelectedTypes([]);
    setSelectedDistricts([]);
    setSelectedExperiences([]);
    setSortBy('relevance');
    searchParams.delete('branch');
    searchParams.delete('type');
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic
  const filteredJobs = jobs.filter(job => {
    // 1. Branch Filter
    if (selectedBranches.length > 0) {
      const matchesBranch = selectedBranches.some(b => {
        const branchLower = b.toLowerCase();
        if (branchLower === 'computer') {
          return job.branch.toLowerCase().includes('computer') || job.branch.toLowerCase().includes('it');
        }
        return job.branch.toLowerCase().includes(branchLower);
      });
      if (!matchesBranch) return false;
    }

    // 2. Job Type Filter
    if (selectedTypes.length > 0) {
      if (!selectedTypes.includes(job.type)) return false;
    }

    // 3. District Filter
    if (selectedDistricts.length > 0) {
      if (!selectedDistricts.includes(job.district)) return false;
    }

    // 4. Experience Filter
    if (selectedExperiences.length > 0) {
      if (!selectedExperiences.includes(job.experience)) return false;
    }

    // 5. Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      return (
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.branch.toLowerCase().includes(q)
      );
    }

    return true;
  });

  // Sort Logic
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'salary_high') {
      return b.salaryVal - a.salaryVal;
    } else if (sortBy === 'urgent') {
      const aUrgent = a.badge === 'Urgent' ? 1 : 0;
      const bUrgent = b.badge === 'Urgent' ? 1 : 0;
      return bUrgent - aUrgent;
    }
    return 0; // Default relevance
  });

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <Header activePage={typeParam && typeParam.toLowerCase() === 'internship' ? 'internships' : 'jobs'} />

      {/* Main Container */}
      <main className="max-w-container-max mx-auto px-margin-mobile pt-8 pb-32">
        
        {/* Hub Header */}
        <section className="bg-gradient-to-r from-primary-fixed/40 to-secondary-fixed/30 border border-outline-variant/60 rounded-3xl p-6 md:p-10 mb-8 text-left shadow-sm">
          <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-2">
            Find Your First Engineering Move
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover verified industrial jobs and apprenticeships across Maharashtra's hub cities tailored specifically for MSBTE diploma graduates.
          </p>
        </section>

        {/* Primary Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Sticky Filters (Desktop) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 hidden lg:block space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm text-left">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">tune</span>
                  <span>Filters</span>
                </h3>
                {(selectedBranches.length > 0 || selectedTypes.length > 0 || selectedDistricts.length > 0 || selectedExperiences.length > 0 || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Branch Filters */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Diploma Branch</h4>
                <div className="space-y-3">
                  {['Mechanical', 'Civil', 'Electrical', 'Computer'].map((branch) => {
                    const labelMap = { 'Computer': 'Computer / IT', 'Mechanical': 'Mechanical (ME)', 'Civil': 'Civil (CE)', 'Electrical': 'Electrical (EE)' };
                    return (
                      <label key={branch} className="flex items-center gap-3 cursor-pointer group select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                        <input 
                          type="checkbox"
                          checked={selectedBranches.includes(branch)}
                          onChange={() => handleBranchSelect(branch)}
                          className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                        />
                        <span>{labelMap[branch] || branch}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Job Type Filters */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Job Type</h4>
                <div className="space-y-3">
                  {['Full-time', 'Internship', 'Trainee'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                      <input 
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeSelect(type)}
                        className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location/District Filters */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">District</h4>
                <div className="space-y-3">
                  {['Pune', 'Mumbai', 'Nagpur', 'Aurangabad'].map((dist) => (
                    <label key={dist} className="flex items-center gap-3 cursor-pointer group select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                      <input 
                        type="checkbox"
                        checked={selectedDistricts.includes(dist)}
                        onChange={() => handleDistrictSelect(dist)}
                        className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                      />
                      <span>{dist}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Filters */}
              <div className="mb-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Experience</h4>
                <div className="space-y-3">
                  {['Fresher', '0-1 Years', '0-2 Years'].map((exp) => (
                    <label key={exp} className="flex items-center gap-3 cursor-pointer group select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                      <input 
                        type="checkbox"
                        checked={selectedExperiences.includes(exp)}
                        onChange={() => handleExperienceSelect(exp)}
                        className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                      />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* RIGHT COL: Search Box, Control Bar & Listings */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Search Input Box */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <span className="material-symbols-outlined text-outline text-2xl pl-1">search</span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, company, or skills..." 
                className="w-full bg-transparent border-0 focus:ring-0 text-on-surface placeholder-on-surface-variant outline-none font-body-md py-1"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>

            {/* Results Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white border border-outline-variant/60 rounded-xl px-5 py-3 shadow-xs text-left">
              <span className="text-on-surface-variant font-bold text-sm">
                Showing {sortedJobs.length} {sortedJobs.length === 1 ? 'Opportunity' : 'Opportunities'}
              </span>
              
              <div className="flex items-center gap-3 justify-between sm:justify-end">
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant rounded-lg text-sm font-bold text-on-surface hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-sm">tune</span>
                  Filters
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant text-xs font-semibold whitespace-nowrap">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border-0 bg-transparent text-primary text-sm font-bold focus:ring-0 py-0.5 pl-1 pr-6 cursor-pointer"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="salary_high">Highest Package</option>
                    <option value="urgent">Urgent Listings</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings List */}
            <div className="space-y-4">
              {sortedJobs.length > 0 ? (
                sortedJobs.map((job) => {
                  const isSaved = savedJobs.some(j => j.id === job.id);
                  return (
                    <article 
                      key={job.id} 
                      className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 md:p-6 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center gap-5 group text-left"
                    >
                      {/* Logo */}
                      <div className="w-16 h-16 rounded-xl border border-outline-variant p-2 bg-white flex items-center justify-center shadow-xs flex-shrink-0">
                        <img alt={`${job.company} Logo`} className="max-w-full max-h-full object-contain" src={job.logo} />
                      </div>

                      {/* Details */}
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="font-headline-md text-lg md:text-xl font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                            <Link to={`/public/jobdetails?id=${job.id}`}>{job.title}</Link>
                          </h3>
                          {job.badge && (
                            <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase ${job.badgeClass}`}>
                              {job.badge}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-primary mb-3">
                          <span>{job.company}</span>
                          <span className="text-outline-variant">•</span>
                          <span className="text-on-surface-variant font-medium">{job.branch} Engineering</span>
                        </div>

                        {/* Metadata Pills */}
                        <div className="flex flex-wrap gap-4 text-on-surface-variant text-xs font-semibold">
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">payments</span>
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">history_edu</span>
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex md:flex-col lg:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0 items-center justify-end">
                        <Link 
                          to={`/public/jobdetails?id=${job.id}`} 
                          className="flex-1 md:flex-none bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold text-center hover:bg-primary/95 transition-colors active:scale-95 shadow-sm min-w-[100px]"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => toggleSaveJob(job)}
                          className={`w-10 h-10 border rounded-xl flex items-center justify-center transition-all active:scale-95 hover:bg-surface-container ${
                            isSaved 
                              ? 'bg-primary border-primary text-white' 
                              : 'border-outline-variant text-primary hover:border-primary'
                          }`}
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
                <div className="border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center p-10 text-center bg-surface-container-low min-h-[350px]">
                  <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-outline-variant">
                    <span className="material-symbols-outlined text-[44px]">search_off</span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">No matching jobs found</h3>
                  <p className="font-body-md text-on-surface-variant max-w-md mb-6">
                    We couldn't find any positions matching your criteria. Try adjusting your query or resetting your filters.
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/95 transition-all shadow-sm"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </main>

      {/* FLOATING ACTION BUTTON (Saves View) */}
      <Link 
        to="/student-portal/saved-jobs-student-portal"
        className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40 border-2 border-white"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
        {savedJobs.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {savedJobs.length}
          </span>
        )}
      </Link>

      {/* MOBILE FILTER DRAWER OVERLAY */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          ></div>
          
          {/* Drawer Body */}
          <div className="relative w-80 max-w-[85vw] bg-surface-container-lowest h-full flex flex-col p-6 shadow-2xl overflow-y-auto text-left animate-slide-left z-10">
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/60 mb-6">
              <h3 className="font-bold text-lg text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">tune</span>
                <span>Filters</span>
              </h3>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 hover:bg-surface-container rounded-full text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Branch Filters */}
            <div className="mb-6 pb-6 border-b border-outline-variant/60">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Diploma Branch</h4>
              <div className="space-y-3">
                {['Mechanical', 'Civil', 'Electrical', 'Computer'].map((branch) => {
                  const labelMap = { 'Computer': 'Computer / IT', 'Mechanical': 'Mechanical (ME)', 'Civil': 'Civil (CE)', 'Electrical': 'Electrical (EE)' };
                  return (
                    <label key={branch} className="flex items-center gap-3 cursor-pointer select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                      <input 
                        type="checkbox"
                        checked={selectedBranches.includes(branch)}
                        onChange={() => handleBranchSelect(branch)}
                        className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                      />
                      <span>{labelMap[branch] || branch}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Job Type Filters */}
            <div className="mb-6 pb-6 border-b border-outline-variant/60">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Job Type</h4>
              <div className="space-y-3">
                {['Full-time', 'Internship', 'Trainee'].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                    <input 
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeSelect(type)}
                      className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location/District Filters */}
            <div className="mb-6 pb-6 border-b border-outline-variant/60">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">District</h4>
              <div className="space-y-3">
                {['Pune', 'Mumbai', 'Nagpur', 'Aurangabad'].map((dist) => (
                  <label key={dist} className="flex items-center gap-3 cursor-pointer select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                    <input 
                      type="checkbox"
                      checked={selectedDistricts.includes(dist)}
                      onChange={() => handleDistrictSelect(dist)}
                      className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                    />
                    <span>{dist}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Filters */}
            <div className="mb-8">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mb-3">Experience</h4>
              <div className="space-y-3">
                {['Fresher', '0-1 Years', '0-2 Years'].map((exp) => (
                  <label key={exp} className="flex items-center gap-3 cursor-pointer select-none text-sm font-semibold text-on-surface-variant hover:text-on-surface">
                    <input 
                      type="checkbox"
                      checked={selectedExperiences.includes(exp)}
                      onChange={() => handleExperienceSelect(exp)}
                      className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                    />
                    <span>{exp}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-auto flex gap-4 pt-4 border-t border-outline-variant/60">
              <button 
                onClick={clearFilters}
                className="flex-1 py-3 border border-outline-variant rounded-xl font-bold text-sm text-center text-on-surface hover:bg-surface-container"
              >
                Reset
              </button>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3 bg-primary text-white rounded-xl font-bold text-sm text-center hover:bg-primary/95"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Footer Info */}
      <footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed text-left">
              Connecting Maharashtra diploma students with high-impact career opportunities in industrial powerhouses.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">link</span>
              </a>
            </div>
          </div>

          {/* For Students Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">How It Works</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Career Tips</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
            </ul>
          </div>

          {/* For Employers Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-2 flex flex-col gap-4 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-2">Support</h5>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">call</span>
              <span className="font-semibold">+91 12345 67890</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">mail</span>
              <span className="font-semibold break-all">support@msbtejobs.in</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
              <span className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
          © 2024 MSBTEJobs Diploma Jobs Portal. Built for the future of Maharashtra's Industry.
        </div>
      </footer>

      {/* Atmosphere Effects */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-fixed/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-fixed/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}

