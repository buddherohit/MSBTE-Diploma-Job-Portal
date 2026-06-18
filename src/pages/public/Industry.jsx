// MANUAL_JSX_FILE
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const partnerCompanies = [
  {
    id: "tata-motors",
    name: "Tata Motors Ltd.",
    sector: "Automotive & Manufacturing",
    industryType: "Manufacturing",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM",
    location: "Pune, Maharashtra",
    district: "Pune",
    size: "10,000+",
    openings: 3,
    verified: true,
    branchFilter: "mechanical",
    description: "Tata Motors Limited is India's largest automobile manufacturer and a global leader in cars, utility vehicles, trucks, and buses."
  },
  {
    id: "lt-construction",
    name: "L&T Construction",
    sector: "Construction & Heavy Engineering",
    industryType: "Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Mumbai, Maharashtra",
    district: "Mumbai",
    size: "50,000+",
    openings: 42,
    verified: true,
    branchFilter: "civil",
    description: "L&T Construction is India's largest construction organization and ranked among the world's top 30 contractors."
  },
  {
    id: "thermax-limited",
    name: "Thermax Limited",
    sector: "Energy & Environmental Solutions",
    industryType: "Energy",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuALzA2b87tOrdglue6dxJPhf5U5M51w52ReeYwrI57TxliB5DPsKmRFx03nSWOaOeNBQxa6dFdLvRZfWtglQUEgLR3w5d15EUIAQ9E7YrB0tw8JyaExefpUMU8v99sfVmNcPm1T2nxfNcQmD6F6uxYH-GHMBKVXz1Y3ndSPxfHAh2iYcbM9Tg5YjrAx01evEYy_IwNi_FbBTPKJjJFZb8WD90xYuOAxR3lfIZHbkeL9PeOK-9Lmb3rQC96C2QJVdUpVN1B0KLudrak",
    location: "Pune, Maharashtra",
    district: "Pune",
    size: "5,000+",
    openings: 14,
    verified: true,
    branchFilter: "mechanical",
    description: "Thermax Limited provides engineering solutions to energy, water, and environment sectors worldwide."
  },
  {
    id: "siemens-india",
    name: "Siemens India",
    sector: "Industrial Automation & Switchgear",
    industryType: "Manufacturing",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWh8SDj52cM4qTR3DUFshfmGBaKKVRMIhB4B7lzZGwq0ad_BrrWi0BohvE9FH697BCWocbu-9cBf2SzNlOqrSyDSREp1zHtPQ70IdbiGtNo-0lXi5Ciw_tYzmVFgak7bEZIYq_Z_fFc3E5eeUiJp2X0q9MLF3JH1TX7_veduB_aCngK-eLfUYOtW_SNi0EJQ6OoSnOYiZI-wrOKpAcvZx8Tbwz1RDWlyKKGmi42PXt1Woh3bqWmrs66nCQp8A5mJdlcC6QuRPOzE",
    location: "Aurangabad, Maharashtra",
    district: "Aurangabad",
    size: "8,000+",
    openings: 8,
    verified: true,
    branchFilter: "electrical",
    description: "Siemens India is a pioneer in infrastructure, transport, transmission, and smart grid automation solutions."
  },
  {
    id: "shapoorji-pallonji",
    name: "Shapoorji Pallonji",
    sector: "Infrastructure & Concrete Technology",
    industryType: "Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Nagpur, Maharashtra",
    district: "Nagpur",
    size: "15,000+",
    openings: 5,
    verified: true,
    branchFilter: "civil",
    description: "Shapoorji Pallonji Group is an Indian business conglomerate with interests in construction, real estate, and energy."
  },
  {
    id: "infosys-bpm",
    name: "Infosys BPM",
    sector: "Information Technology Outsourcing",
    industryType: "IT",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg",
    location: "Pune, Maharashtra",
    district: "Pune",
    size: "25,000+",
    openings: 12,
    verified: true,
    branchFilter: "computer",
    description: "Infosys BPM, the business process management subsidiary of Infosys, provides digital business transformation services."
  },
  {
    id: "bajaj-electricals",
    name: "Bajaj Electricals Ltd.",
    sector: "Consumer Durables & EPC",
    industryType: "Electrical",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTA4O7Z4QEHjnjVPr8VFDI1ZbjvjPt_Ae_ktw8Fq5h7rkxkJ0c7OEZlnfoLEZTlB609PuvB2sCc3DUwWWilEWd7euTkVobCJRGulgHgL-l_6jsflu92kGR7bmCnlr14WG4f7d2rgwnqrDLAarCPuZWHkZn7fhLDSgpbM39vXRKsGzTTaVmz4HTwTO3D2-eCIGtSGpiz9OHRnexdA7kOoxQNtRDiiO8w8UooXqfesXvYhIvcrOWaEqFwKMS-WXJdvOu1puQ6tdInZ0",
    location: "Mumbai, Maharashtra",
    district: "Mumbai",
    size: "6,000+",
    openings: 10,
    verified: true,
    branchFilter: "electrical",
    description: "Bajaj Electricals Limited is a globally renowned consumer products and engineering EPC company headquartered in Mumbai."
  }
];

export default function Industry() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [activeSpecialization, setActiveSpecialization] = useState('All');

  const filteredCompanies = useMemo(() => {
    return partnerCompanies.filter(comp => {
      // 1. Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = comp.name.toLowerCase().includes(query);
        const matchesSector = comp.sector.toLowerCase().includes(query);
        const matchesDesc = comp.description.toLowerCase().includes(query);
        if (!matchesName && !matchesSector && !matchesDesc) {
          return false;
        }
      }
      // 2. District Filter
      if (selectedDistrict !== 'All' && comp.district !== selectedDistrict) {
        return false;
      }
      // 3. Industry Type Filter
      if (selectedIndustry !== 'All' && comp.industryType !== selectedIndustry) {
        return false;
      }
      // 4. Specialization Chip Filter
      if (activeSpecialization !== 'All') {
        if (activeSpecialization === 'Manufacturing' && comp.industryType !== 'Manufacturing') return false;
        if (activeSpecialization === 'Electrical' && comp.industryType !== 'Electrical') return false;
        if (activeSpecialization === 'Software' && comp.industryType !== 'IT') return false;
        if (activeSpecialization === 'Construction' && comp.industryType !== 'Construction') return false;
        if (activeSpecialization === 'Energy' && comp.industryType !== 'Energy') return false;
      }
      return true;
    });
  }, [searchQuery, selectedDistrict, selectedIndustry, activeSpecialization]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('All');
    setSelectedIndustry('All');
    setActiveSpecialization('All');
  };

  // Stats calculation
  const totalOpenings = useMemo(() => {
    return partnerCompanies.reduce((acc, curr) => acc + curr.openings, 0);
  }, []);

  const uniqueDistrictsCount = useMemo(() => {
    const districts = partnerCompanies.map(c => c.district);
    return new Set(districts).size;
  }, []);

  return (
    <div className="w-full min-h-screen bg-background text-on-background flex flex-col">
      <Header activePage="companies" />

      <main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-24 text-left w-full">
        {/* Bento Hero Header */}
        <section className="bg-gradient-to-r from-primary-fixed/40 to-tertiary-fixed-dim/30 border border-outline-variant/60 rounded-3xl p-6 md:p-10 mb-8 shadow-xs">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface mb-2">Industrial Partners Directory</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Connect directly with Maharashtra's premier engineering corporations, manufacturing clusters, and technical hubs that actively recruit MSBTE diploma graduates.
          </p>
        </section>

        {/* Premium Bento Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Total Partners</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-primary">{partnerCompanies.length}</span>
              <span className="text-[11px] font-bold text-tertiary">100% Verified</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Active Openings</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-primary">{totalOpenings}</span>
              <span className="text-[11px] font-bold text-secondary-container">Hiring Now</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Districts Covered</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-primary">{uniqueDistrictsCount}</span>
              <span className="text-[11px] font-bold text-on-surface-variant">Maharashtra Wide</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Placement Rate</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-primary">87%</span>
              <span className="text-[11px] font-bold text-tertiary">Batch 2024-25</span>
            </div>
          </div>
        </section>

        {/* Search & Quick Filters Panel */}
        <section className="mb-8">
          <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-xs flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all text-body-md" 
                placeholder="Search companies by name, sector, or keywords..." 
                type="text"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <select 
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="flex-grow sm:flex-initial px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-semibold text-sm text-on-surface-variant min-w-[140px] focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
              >
                <option value="All">All Districts</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Aurangabad">Aurangabad</option>
              </select>

              <select 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="flex-grow sm:flex-initial px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-semibold text-sm text-on-surface-variant min-w-[150px] focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
              >
                <option value="All">All Industries</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Construction">Construction</option>
                <option value="Energy">Energy & Environment</option>
                <option value="IT">IT / CS</option>
                <option value="Electrical">Electrical Infrastructure</option>
              </select>

              <button 
                onClick={resetFilters}
                className="flex-grow sm:flex-initial px-5 py-3 border border-outline-variant hover:bg-surface-container rounded-xl font-bold text-sm text-on-surface-variant active:scale-95 transition-all"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Specialization Filter Bento Chips */}
        <section className="mb-8">
          <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Quick Specialization Filters</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { label: 'All Sectors', icon: 'grid_view', val: 'All', color: 'bg-surface-container-high' },
              { label: 'Manufacturing', icon: 'precision_manufacturing', val: 'Manufacturing', color: 'bg-tertiary-fixed text-on-tertiary-fixed' },
              { label: 'Electrical Infrastructure', icon: 'bolt', val: 'Electrical', color: 'bg-primary-fixed text-on-primary-fixed' },
              { label: 'Software / IT', icon: 'terminal', val: 'Software', color: 'bg-secondary-fixed text-on-secondary-fixed' },
              { label: 'Heavy Engineering', icon: 'foundation', val: 'Construction', color: 'bg-surface-container-highest text-on-surface' },
              { label: 'Energy Systems', icon: 'energy_program_saving', val: 'Energy', color: 'bg-tertiary-fixed-dim text-on-tertiary-fixed-variant' }
            ].map((spec) => {
              const isActive = activeSpecialization === spec.val;
              return (
                <button
                  key={spec.val}
                  onClick={() => setActiveSpecialization(spec.val)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap active:scale-95 transition-all shadow-xs border ${
                    isActive 
                      ? 'ring-2 ring-primary border-primary bg-primary text-white' 
                      : `border-outline-variant hover:border-primary/40 ${spec.color}`
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{spec.icon}</span>
                  <span>{spec.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Company Cards Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCompanies.map((comp) => (
              <div 
                key={comp.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 group relative overflow-hidden text-left"
              >
                {comp.verified && (
                  <div className="absolute top-4 right-4 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-xs">
                    <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified Partner
                  </div>
                )}
                
                {/* Logo */}
                <div className="w-20 h-20 rounded-xl border border-outline-variant p-2 bg-white flex items-center justify-center shadow-xs flex-shrink-0">
                  <img alt={`${comp.name} Logo`} className="max-w-full max-h-full object-contain" src={comp.logo} />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <h3 className="font-headline-md text-lg md:text-xl font-extrabold text-on-surface mb-1 group-hover:text-primary transition-colors truncate pr-28">
                    {comp.name}
                  </h3>
                  <p className="text-secondary font-semibold text-xs mb-3 uppercase tracking-wider">{comp.sector}</p>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2 pr-2">
                    {comp.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold text-on-surface-variant mb-6 border-t border-outline-variant/40 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-primary">location_on</span>
                      <span className="truncate">{comp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-primary">groups</span>
                      <span>{comp.size} Employees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-primary">work</span>
                      <span className="text-secondary-container font-bold">{comp.openings} Open Positions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-primary">school</span>
                      <span className="capitalize">{comp.branchFilter} Recruits</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Link 
                      to={`/public/find-diploma-jobs?branch=${comp.branchFilter}`}
                      className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm text-center hover:bg-primary/95 transition-all shadow-xs active:scale-95"
                    >
                      View Jobs
                    </Link>
                    <Link 
                      to={`/public/company-profile?company=${comp.id}`}
                      className="flex-1 border border-primary text-primary py-3 rounded-xl font-bold text-sm text-center hover:bg-primary-fixed transition-all active:scale-95"
                    >
                      Company Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-surface-container-low min-h-[350px]">
            <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-outline-variant shadow-xs">
              <span class="material-symbols-outlined text-[44px]">domain_disabled</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">No industrial partners found</h3>
            <p className="font-body-md text-on-surface-variant max-w-md mb-6 leading-relaxed">
              We couldn't find any companies matching your search filters. Try typing a different keyword or resetting your location/sector selects.
            </p>
            <button 
              onClick={resetFilters}
              className="px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/95 transition-all active:scale-95 shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* Desktop Footer Info */}
      <footer className="py-16 border-t border-outline-variant bg-white text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span class="text-secondary-container">Jobs</span></span>
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
              <span className="font-semibold break-all text-left">support@msbtejobs.in</span>
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
