// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers, updateUserVerificationStatus } from '../../utils/auth';

const DEFAULT_REGISTRY_EMPLOYERS = [
  {
    email: 'employer@msbtejobs.in',
    name: 'Rohan Sharma',
    companyName: 'Tata Motors Engineering',
    sector: 'Manufacturing',
    location: 'Pune, MH',
    role: 'employer',
    status: 'Verified',
    id: 'MSBTE-5523',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOBhUNNo0Uq6cIeO-Zp_9_LVEX-HjRPxcHj4ciaJq4Z_v8WSYfy15mFA2-DV0NCB0o7YQUpHsbQk-eSN8ldcJzZm9-wR8P7PJ1biJ4Mz-abTk-HZLDmcmXomx8xagGo4SzfIQrBOKsKo1Lzo3hgQUQjj4Pzgc3TiEGJ8v7gE4YuMZT3yhF995oKynfGpfG6GcmOrhRlu1_ouI4-Kt9QJtLT7LNqKaw6Fm5CmoxwXpR_KvxBfOZriLxYF5g0xwLZtpeTi6FZKI4G74'
  },
  {
    email: 'lt-recruiter@msbtejobs.in',
    name: 'Aditya Patil',
    companyName: 'L&T Construction Div.',
    sector: 'Civil/Infra',
    location: 'Mumbai, MH',
    role: 'employer',
    status: 'Pending Verification',
    id: 'MSBTE-9011',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Lw2ZVQqB8XiX8nA67pabVLHvMBNkm41qkCPgGNoFxQeGc1MFqZtKDfjQd_cKkw7sxLfFkt8_KLFrBbogeoWPB2Aah545CKwfVMzeFSR-203mWJVKAiHooWgS72tGKzLI_ps1a6UPcd771EAy0GnzK7EYKSyuuYSDqq7lFc-nAcuiRGcBTyajaWzxle6m8yDEsNSZ0hXFo9sLtl9xnvyacuve02I0UXfhREADmfcSSJ27Uad40j9EIYonCCsiPinzXOCq95_Qj_M'
  },
  {
    email: 'bel-recruiter@msbtejobs.in',
    name: 'Ketan Deshmukh',
    companyName: 'Bharat Electronics',
    sector: 'IT/Tech',
    location: 'Bengaluru/Remote',
    role: 'employer',
    status: 'Verified',
    id: 'MSBTE-2287',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGMiC8X2TJmS5LjURXRfuS-Qgj4_NIuPCGKjAXE_hyeu5U5DGhJrhA3zkGbjoKLqbrtd8uVpUiOf96GvDEjNsstzTC3-pQ44G2oCp6ctK8O-J0UHFm2KixdKjQHP_srhPBHPsQWZDxR5n_hpLutYE5rprBHdXsu14-FrIMvSwGcDGagkY0KIFAskcM_PcSohhVqFx7sYmBUPyrADzf15eDuZdrPs9PAr0rxGiy8NfKd29N3rjOcPBRxkRwqB2iV4OKc15WkYBLQQ'
  },
  {
    email: 'precision@msbtejobs.in',
    name: 'Suresh Patil',
    companyName: 'Precision Placements Ltd',
    sector: 'IT/Tech',
    location: 'Nagpur, MH',
    role: 'employer',
    status: 'Flagged',
    id: 'MSBTE-1102',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XooeSQ0qU7fav0sofejSmksh-PjnP5iNEgw9rI0X-MVSNxCNYeU0xc3vFAWLLQRV4-QtNI0kXquHlihuL70EJnwyuQaVrGNuVDqKIsW7zvmng7uzyrE_4chZ7AgIGNP01HVPp8b6P8epd7yTAVepbRNQAPXkdmHwHeW6dLAwUqiDVyJCkJWFgvC_Kd41eyXVlTBp8e7SUEiKz7Hg7f3jLQgRDEWEBSQFNMoi-cR1-VHpwmjKfI-ObpUzH57UjdH32a1Fu2cYhAg'
  }
];

export default function AdminEmployerRegistry() {
  const [employers, setEmployers] = useState([]);
  const [search, setSearch] = useState('');
  const [sectorFilter, setSectorFilter] = useState('All Sectors');
  const [statusFilter, setStatusFilter] = useState('All Status');

  useEffect(() => {
    loadEmployers();
  }, []);

  const loadEmployers = async () => {
    try {
      const allUsers = await getUsers();
      const recruitersList = allUsers.filter(u => u.role === 'employer');

      // Adapt fields if missing
      const formatted = recruitersList.map(e => ({
        ...e,
        companyName: e.companyName || 'Industrial Partner',
        sector: e.sector || 'Manufacturing',
        location: e.location || 'Maharashtra',
        status: e.status || (e.verified ? 'Verified' : 'Pending Verification'),
        id: e.id || `MSBTE-${Math.floor(1000 + Math.random() * 9000)}`,
        logo: e.logo || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'
      }));

      setEmployers(formatted);
    } catch (err) {
      console.error("Failed to load employers:", err);
    }
  };

  const updateEmployerStatus = async (email, newStatus) => {
    try {
      const allUsers = await getUsers();
      const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, newStatus, newStatus === 'Verified');
      }
      await loadEmployers();
    } catch (e) {
      console.error("Failed to update employer status:", e);
    }
  };

  // Filter Logic
  const filteredEmployers = employers.filter(emp => {
    const matchesSearch = 
      emp.companyName.toLowerCase().includes(search.toLowerCase()) ||
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesSector = sectorFilter === 'All Sectors' || emp.sector === sectorFilter;
    
    let matchesStatus = true;
    if (statusFilter !== 'All Status') {
      if (statusFilter === 'Pending') {
        matchesStatus = emp.status.toLowerCase().includes('pending');
      } else {
        matchesStatus = emp.status === statusFilter;
      }
    }

    return matchesSearch && matchesSector && matchesStatus;
  });

  const pendingCount = employers.filter(e => e.status.toLowerCase().includes('pending')).length;

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="employers" />

      {/* Main Content Area */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Page Title */}
        <div className="mb-6 mt-4">
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Employer Directory</h2>
          <p className="text-on-surface-variant font-medium text-sm mt-1">
            Manage industry accreditations and recruiters posting MSBTE diploma openings.
          </p>
        </div>

        {/* Summary Stat Bar */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 border border-outline-variant rounded-2xl shadow-sm flex flex-col gap-1">
            <span className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Total Partners</span>
            <span className="text-4xl font-black text-primary mt-1">{employers.length}</span>
            <div className="w-full h-1.5 bg-surface-variant mt-3 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-primary"></div>
            </div>
          </div>
          <div className="bg-white p-6 border border-outline-variant rounded-2xl shadow-sm flex flex-col gap-1">
            <span className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Pending Verification</span>
            <span className="text-4xl font-black text-secondary mt-1">{pendingCount}</span>
            <div className="flex items-center gap-1.5 mt-2 text-secondary font-bold text-xs">
              <span className="material-symbols-outlined text-[14px]">priority_high</span>
              Requires prompt review
            </div>
          </div>
          <div className="bg-white p-6 border border-outline-variant rounded-2xl shadow-sm flex flex-col gap-1">
            <span className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Active Listings</span>
            <span className="text-4xl font-black text-green-600 mt-1">124</span>
            <div className="flex items-center gap-1.5 mt-2 text-green-600 font-bold text-xs">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              High platform engagement
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search Bar */}
            <div className="w-full lg:flex-1">
              <label className="block text-xs font-bold text-on-surface-variant mb-2">Company Name or Recruiter Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium" 
                  placeholder="Search industrial partners..." 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="min-w-[150px]">
                <label className="block text-xs font-bold text-on-surface-variant mb-2">Industry Sector</label>
                <select 
                  className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                >
                  <option>All Sectors</option>
                  <option>Manufacturing</option>
                  <option>Civil/Infra</option>
                  <option>IT/Tech</option>
                </select>
              </div>
              <div className="min-w-[150px]">
                <label className="block text-xs font-bold text-on-surface-variant mb-2">Status</label>
                <select 
                  className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Verified</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>
            <button 
              onClick={() => {
                setSearch('');
                setSectorFilter('All Sectors');
                setStatusFilter('All Status');
              }}
              className="w-full lg:w-auto bg-surface-container-high border border-outline-variant text-on-surface px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-outline-variant transition-all shadow-sm h-[48px]"
            >
              <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              Reset
            </button>
          </div>
        </section>

        {/* Directory List */}
        <section className="flex flex-col gap-6">
          {filteredEmployers.length > 0 ? (
            filteredEmployers.map((emp) => (
              <div 
                key={emp.email} 
                className={`bg-white border rounded-2xl p-5 hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden ${
                  emp.status.toLowerCase().includes('pending') ? 'border-2 border-secondary/20' : 'border-outline-variant'
                }`}
              >
                {emp.status.toLowerCase().includes('pending') && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                )}
                
                <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center p-2 border border-outline-variant overflow-hidden shrink-0">
                  <img 
                    alt={emp.companyName} 
                    className="w-full h-full object-contain" 
                    src={emp.logo}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'; }}
                  />
                </div>
                
                <div className="flex-1 flex flex-col gap-1 text-center md:text-left min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors truncate">
                      {emp.companyName}
                    </h3>
                    
                    {emp.status === 'Verified' && (
                      <span className="self-center sm:self-auto bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border border-green-200">
                        Verified
                      </span>
                    )}
                    {emp.status.toLowerCase().includes('pending') && (
                      <span className="self-center sm:self-auto bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border border-yellow-200">
                        Pending
                      </span>
                    )}
                    {emp.status === 'Flagged' && (
                      <span className="self-center sm:self-auto bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border border-red-200">
                        Flagged
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-on-surface-variant font-medium">{emp.sector} • {emp.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <span className="px-2 py-0.5 bg-surface-container rounded-lg text-[10px] font-bold text-outline">ID: {emp.id}</span>
                    <span className="px-2 py-0.5 bg-surface-container rounded-lg text-[10px] font-bold text-outline">Contact: {emp.name} ({emp.email})</span>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                  <Link 
                    to="/admin-portal/verify-employer-maharashtra-industrial-corp"
                    className="flex-1 md:flex-none text-center px-4 py-2.5 text-primary border border-primary hover:bg-primary hover:text-white rounded-xl font-bold text-xs transition-all shadow-sm whitespace-nowrap"
                  >
                    View Audit Profile
                  </Link>
                  {emp.status.toLowerCase().includes('pending') && (
                    <button 
                      onClick={() => updateEmployerStatus(emp.email, 'Verified')}
                      className="px-5 py-2.5 bg-secondary text-white rounded-xl font-bold text-xs hover:brightness-110 transition-all shadow-sm"
                    >
                      Verify Now
                    </button>
                  )}
                  {emp.status !== 'Flagged' && (
                    <button 
                      onClick={() => updateEmployerStatus(emp.email, 'Flagged')}
                      className="px-3 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold text-xs transition-colors"
                      title="Flag Company"
                    >
                      Flag
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-on-surface-variant font-medium bg-white rounded-2xl border border-dashed border-outline-variant">
              No industrial partners matched your active filters.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
