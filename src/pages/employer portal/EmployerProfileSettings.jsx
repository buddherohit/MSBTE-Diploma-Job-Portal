import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, updateUserProfile, logoutSession } from '../../utils/auth';

export default function EmployerProfileSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // States for all employer fields
  const [companyName, setCompanyName] = useState('');
  const [sector, setSector] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [established, setEstablished] = useState('');
  const [bio, setBio] = useState('');
  const [recruiterName, setRecruiterName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hiringStatus, setHiringStatus] = useState(true);
  const [categories, setCategories] = useState(['Mechanical', 'Electrical']);
  const [newCategory, setNewCategory] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login');
    } else {
      setUser(session);
      
      const isDefaultMock = session.email === 'employer@msbtejobs.in';
      
      setCompanyName(session.companyName || (isDefaultMock ? 'Tata Communications Ltd.' : ''));
      setSector(session.sector || (isDefaultMock ? 'manufacturing' : ''));
      setLocation(session.location || (isDefaultMock ? 'Pimpri-Chinchwad MIDC, Pune' : ''));
      setWebsite(session.website || (isDefaultMock ? 'https://www.tatacommunications.com' : ''));
      setEstablished(session.established || (isDefaultMock ? '1966' : ''));
      setBio(session.bio || (isDefaultMock ? 'Tata Communications is a leading global digital infrastructure provider powering todays fast-growing digital economy.' : ''));
      setRecruiterName(session.name || (isDefaultMock ? 'Rohan Sharma' : ''));
      setPhone(session.phone || (isDefaultMock ? '9876543210' : ''));
      setEmail(session.email || '');
      
      if (session.hiringStatus !== undefined) setHiringStatus(session.hiringStatus);
      if (session.categories) setCategories(session.categories);
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutSession();
    navigate('/');
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (catToRemove) => {
    setCategories(categories.filter((c) => c !== catToRemove));
  };

  const handleSaveChanges = (e) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');

    if (!companyName.trim() || !recruiterName.trim() || !phone.trim() || !sector) {
      setError('Company Name, Recruiter Name, Phone, and Sector are required fields.');
      return;
    }

    const updatedUser = {
      ...user,
      companyName: companyName.trim(),
      sector,
      location: location.trim(),
      website: website.trim(),
      established,
      bio: bio.trim(),
      name: recruiterName.trim(),
      contactPerson: recruiterName.trim(),
      phone: phone.trim(),
      hiringStatus,
      categories
    };

    try {
      updateUserProfile(updatedUser);
      setSuccess('Profile updated successfully! Redirecting...');
      setTimeout(() => {
        navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
      }, 1000);
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-on-surface-variant font-bold">Verifying Session...</p>
      </div>
    );
  }

  const initials = recruiterName
    ? recruiterName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : 'E';

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      {/* Top Header Shell */}
      <header className="fixed top-0 right-0 left-0 md:left-80 z-40 bg-surface dark:bg-on-background border-b border-outline-variant h-16 flex justify-between items-center px-margin-mobile md:px-gutter">
        <div className="flex items-center gap-4">
          <Link 
            to="/employer-portal/employer-dashboard-industrial-blueprints-refined"
            className="p-2 hover:bg-surface-container rounded-full transition-colors focus:outline-none md:hidden"
          >
            <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Company Settings</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleSaveChanges}
            className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/95 transition-all active:scale-95 shadow-sm"
          >
            Save Changes
          </button>
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">
            {initials}
          </div>
        </div>
      </header>

      {/* Settings Navigation Drawer (Desktop Only) */}
      <nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-80 bg-surface dark:bg-surface border-r border-outline-variant z-50">
        <div className="p-6 border-b border-surface-container-low flex flex-col items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-4xl">corporate_fare</span>
          </div>
          <div className="text-left">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Employer Portal</h2>
            <p className="text-on-surface-variant font-label-sm">{companyName || 'Manage Organization'}</p>
            <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 inline-block">MIDC Recruiter</span>
          </div>
        </div>
        
        <div className="flex-1 py-4 space-y-1">
          <Link 
            to="/employer-portal/employer-dashboard-industrial-blueprints-refined"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </Link>
          <Link 
            to="/employer-portal/employer-profile-settings"
            className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4 font-bold"
          >
            <span className="material-symbols-outlined">domain</span>
            <span className="font-label-md">Company Profile</span>
          </Link>
          <Link 
            to="/employer-portal/billing-&-subscription-settings"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-primary">payments</span>
            <span className="font-label-md">Billing & Plan</span>
          </Link>
          <Link 
            to="/employer-portal/team-management-settings"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-primary">group</span>
            <span className="font-label-md">Team Members</span>
          </Link>
        </div>

        <div className="p-4 border-t border-outline-variant">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors font-bold text-body-md"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Log Out
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="md:ml-80 pt-24 px-margin-mobile md:px-gutter max-w-6xl w-full mx-auto pb-24 text-left">
        <header className="mb-8">
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold">Employer Settings</h2>
          <p className="text-on-surface-variant max-w-2xl mt-1">Manage your organization's public identity, contact channels, and recruitment preferences.</p>
        </header>

        <form onSubmit={handleSaveChanges} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {error && (
            <div className="lg:col-span-12 bg-red-50 text-red-600 border border-red-200 rounded-lg p-4 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="lg:col-span-12 bg-green-50 text-green-600 border border-green-200 rounded-lg p-4 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span>{success}</span>
            </div>
          )}

          {/* Identity & Details Section */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">business</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Company Identity</h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 mx-auto md:mx-0 text-center">
                  <div className="relative w-32 h-32 rounded-xl bg-primary-fixed/20 border-2 border-dashed border-primary flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-primary text-5xl">factory</span>
                  </div>
                  <p className="text-label-sm text-outline mt-2 font-bold cursor-pointer hover:text-primary">Change Logo</p>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-on-surface-variant font-semibold">Company Name</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        type="text" 
                        value={companyName} 
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-on-surface-variant font-semibold">Industry Sector</label>
                      <select 
                        className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option value="" disabled>Select Sector</option>
                        <option value="manufacturing">Engineering & Manufacturing</option>
                        <option value="electrical">Energy & Environment</option>
                        <option value="auto">Automobile</option>
                        <option value="civil">Infrastructure & Civil</option>
                        <option value="it">Information Technology</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-semibold">MIDC Location (Maharashtra)</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                      <input 
                        className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg pl-10 pr-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">description</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Professional Details</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-semibold">Company Website</label>
                    <input 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                      type="url" 
                      value={website} 
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-semibold">Year Established</label>
                    <input 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                      type="number" 
                      value={established} 
                      onChange={(e) => setEstablished(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Brief Corporate Bio</label>
                  <textarea 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none resize-none transition-all h-32" 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell candidates about your company's core mission and values..."
                  ></textarea>
                </div>
              </div>
            </section>
          </div>

          {/* Right Contact/Preferences Column */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">contact_mail</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Contact Point</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Recruiter Name</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                    type="text" 
                    value={recruiterName} 
                    onChange={(e) => setRecruiterName(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Phone Number</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2.5 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Verified Corporate Email</label>
                  <div className="relative">
                    <input 
                      className="w-full bg-slate-200 border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-on-surface-variant cursor-not-allowed" 
                      disabled 
                      type="email" 
                      value={email} 
                    />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recruitment Preferences */}
            <section className="bg-white rounded-xl p-6 border border-outline-variant shadow-sm border-l-4 border-l-primary">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">person_search</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Preferences</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Hiring Status</label>
                  <div className="flex items-center justify-between p-3 bg-[#F1F5F9] rounded-lg">
                    <span className="font-label-md text-on-surface font-bold text-sm">Currently Hiring</span>
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={hiringStatus}
                        onChange={(e) => setHiringStatus(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Hiring Categories</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {categories.map((cat, idx) => (
                      <span key={idx} className="bg-primary-fixed/40 text-primary px-3 py-1.5 rounded-full text-label-sm font-bold flex items-center gap-2 shadow-sm">
                        {cat}
                        <button type="button" onClick={() => handleRemoveCategory(cat)} className="hover:text-red-600 focus:outline-none">
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      className="flex-1 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Add Category (e.g. Civil)"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCategory();
                        }
                      }}
                    />
                    <button 
                      type="button"
                      onClick={handleAddCategory}
                      className="bg-primary text-white px-3 py-2 rounded-lg font-bold text-sm active:scale-95 transition-transform"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface border-t border-outline-variant shadow-lg">
        <Link 
          to="/employer-portal/employer-dashboard-industrial-blueprints-refined"
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-[10px] mt-0.5">Dashboard</span>
        </Link>
        <Link 
          to="/employer-portal/manage-jobs-employer-portal"
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1"
        >
          <span className="material-symbols-outlined">work</span>
          <span className="font-label-sm text-[10px] mt-0.5">Jobs</span>
        </Link>
        <Link 
          to="/employer-portal/employer-profile-settings"
          className="flex flex-col items-center justify-center text-primary px-4 py-1"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-[10px] mt-0.5">Settings</span>
        </Link>
      </nav>
    </div>
  );
}

