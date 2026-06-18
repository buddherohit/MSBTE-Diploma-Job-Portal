import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { addJob } from '../../utils/db';

export default function PostAJobEmployerPortal() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(1);

  // Form Fields
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('Operations & Maintenance');
  const [type, setType] = useState('Full-time');
  const [location, setLocation] = useState('Chakan (MIDC), Pune');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [description, setDescription] = useState('');
  
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [minCgpa, setMinCgpa] = useState('6.0');
  const [skills, setSkills] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleBranchToggle = (branch) => {
    if (selectedBranches.includes(branch)) {
      setSelectedBranches(selectedBranches.filter(b => b !== branch));
    } else {
      setSelectedBranches([...selectedBranches, branch]);
    }
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step === 1) {
      if (!title || !salaryMin || !salaryMax || !description) {
        alert("Please fill out all fields in Step 1.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (selectedBranches.length === 0) {
        alert("Please select at least one target diploma branch.");
        return;
      }
      setStep(3);
    }
  };

  const handlePublish = () => {
    if (!user) return;
    
    // Add job to database
    addJob({
      title,
      company: user.companyName,
      department,
      type,
      location,
      district: location.includes('Pune') ? 'Pune' : location.includes('Mumbai') ? 'Mumbai' : location.includes('Nagpur') ? 'Nagpur' : 'Aurangabad',
      salary: `₹${Number(salaryMin).toLocaleString('en-IN')} - ₹${Number(salaryMax).toLocaleString('en-IN')} /mo`,
      salaryVal: Number(salaryMin),
      branch: selectedBranches.join(', '),
      badge: 'New',
      badgeClass: 'bg-green-50 text-green-700 border border-green-200',
      experience: 'Fresher',
      description,
      responsibilities: [
        "Monitor assembly lines or network nodes depending on engineering section.",
        "Assist senior planning engineers in daily reporting and calibration.",
        "Follow plant or site ISO safety standards."
      ],
      education: [`MSBTE Diploma (${selectedBranches.join('/')})`, `Min CGPA: ${minCgpa}`],
      skills: skills.split(',').map(s => s.trim()).filter(Boolean),
      aboutCompany: `${user.companyName} is a verified industry partner.`,
      sector: user.sector || 'Industrial Services',
      website: 'https://' + user.companyName.toLowerCase().replace(/\s+/g, '') + '.com'
    });

    alert("Job published successfully!");
    navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      {/* Top AppBar */}
      <header className="bg-white w-full top-0 sticky border-b border-outline-variant z-40">
        <div className="flex items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto text-left">
          <button 
            onClick={() => {
              if (step > 1) setStep(step - 1);
              else navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
            }} 
            className="p-2 hover:bg-surface-container rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md ml-4 text-on-surface font-bold">Post a Job</h1>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-margin-mobile py-8 pb-32 text-left">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="font-label-md text-primary block font-bold">Step {step} of 3</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
                {step === 1 ? 'Job Basics' : step === 2 ? 'Candidate Requirements' : 'Final Verification'}
              </h2>
            </div>
            <span className="font-label-sm text-on-surface-variant mb-1 font-semibold">
              {step === 1 ? '33% Completed' : step === 2 ? '66% Completed' : '100% Ready'}
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out" 
              style={{ width: `${step * 33.3}%` }}
            ></div>
          </div>
        </div>

        {/* STEP 1: Job Basics */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-outline-variant space-y-4">
              <div className="flex items-center gap-2 border-b border-outline-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant font-bold text-xs">Industrial Alignment</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase">Job Title</label>
                  <input 
                    className="bg-surface border border-outline-variant rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm font-semibold" 
                    placeholder="e.g. Production Engineer" 
                    required 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase">Company Department</label>
                  <select 
                    className="bg-surface border border-outline-variant rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm font-semibold"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option>Operations & Maintenance</option>
                    <option>Quality Assurance</option>
                    <option>Research & Development</option>
                    <option>Supply Chain</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase">Employment Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Full-time', 'Internship', 'Trainee'].map((t) => (
                    <label key={t} className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="job_type" 
                        checked={type === t} 
                        onChange={() => setType(t)} 
                        className="hidden" 
                      />
                      <div className={`px-6 py-2 rounded-full border transition-all text-xs font-bold ${
                        type === t 
                          ? 'bg-primary text-white border-primary shadow-sm' 
                          : 'bg-white text-on-surface-variant border-outline-variant hover:bg-surface-container'
                      }`}>
                        {t}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-outline-variant space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span> 
                  Maharashtra Industrial Zone
                </label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Chakan (MIDC), Pune</option>
                  <option>Hinjewadi IT Park, Pune</option>
                  <option>Waluj Industrial Area, Aurangabad</option>
                  <option>Taloja MIDC, Navi Mumbai</option>
                  <option>Butibori MIDC, Nagpur</option>
                  <option>Ambad MIDC, Nashik</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase">Monthly Salary Range (₹)</label>
                <div className="flex items-center gap-4">
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold" 
                    placeholder="Min Salary (e.g. 15000)" 
                    type="number" 
                    required
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                  />
                  <span className="text-on-surface-variant font-bold">to</span>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold" 
                    placeholder="Max Salary (e.g. 25000)" 
                    type="number" 
                    required
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase">Job Description & Responsibilities</label>
              <textarea 
                className="bg-white border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold resize-none" 
                placeholder="Describe day-to-day tasks, shift patterns, and equipment to be handled..." 
                rows="5"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <Link to="/employer-portal/employer-dashboard-industrial-blueprints-refined" className="flex-1 py-3 text-center rounded-lg border border-primary text-primary font-bold hover:bg-surface-container-low transition-colors">
                Cancel
              </Link>
              <button type="submit" className="flex-[2] py-3 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/95 shadow-md transition-transform active:scale-98">
                Continue to Requirements
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Candidate Requirements */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-outline-variant space-y-4">
              <h3 className="font-label-md text-on-surface font-bold text-sm uppercase mb-2">Target Diploma Branch</h3>
              <div className="flex flex-wrap gap-3">
                {['Mechanical', 'Electrical', 'Civil', 'Electronics', 'Computer'].map((branch) => {
                  const labelMap = { 'Computer': 'Computer / IT', 'Mechanical': 'Mechanical (ME)', 'Civil': 'Civil (CE)', 'Electrical': 'Electrical (EE)', 'Electronics': 'Electronics (EJ)' };
                  const isChecked = selectedBranches.includes(branch);
                  return (
                    <button
                      key={branch}
                      type="button"
                      onClick={() => handleBranchToggle(branch)}
                      className={`px-4 py-2.5 rounded-lg border flex items-center gap-2 transition-all font-bold text-xs ${
                        isChecked 
                          ? 'bg-primary text-white border-primary shadow-sm' 
                          : 'bg-white text-on-surface-variant border-outline-variant hover:bg-surface-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {branch === 'Mechanical' ? 'settings' : branch === 'Electrical' ? 'bolt' : branch === 'Civil' ? 'foundation' : branch === 'Electronics' ? 'memory' : 'terminal'}
                      </span>
                      <span>{labelMap[branch] || branch}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-outline-variant flex flex-col gap-2 text-left">
                <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-primary">school</span> 
                  Minimum Cumulative CGPA
                </label>
                <input 
                  className="bg-surface border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold" 
                  placeholder="e.g. 6.5" 
                  step="0.1" 
                  type="number" 
                  min="0"
                  max="10"
                  required
                  value={minCgpa}
                  onChange={(e) => setMinCgpa(e.target.value)}
                />
                <span className="text-xs text-outline italic">Scale of 10.0</span>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-outline-variant flex flex-col gap-2 text-left">
                <label className="font-label-md text-on-surface-variant font-bold text-xs uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-primary">psychology</span> 
                  Technical Skills
                </label>
                <input 
                  className="bg-surface border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-semibold" 
                  placeholder="AutoCAD, PLC, HVAC, Welding" 
                  type="text" 
                  required
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <span className="text-xs text-outline italic">Separate by commas</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="flex-1 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-surface-container-low transition-colors"
              >
                Back
              </button>
              <button type="submit" className="flex-[2] py-3 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/95 shadow-md transition-transform active:scale-98">
                Continue to Review
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Review & Publish */}
        {step === 3 && (
          <div className="space-y-6">
            <section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-outline-variant">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-1 font-bold">{title}</h2>
                  <p className="text-on-surface-variant text-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    {location} • {type}
                  </p>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-primary font-bold text-sm hover:underline"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                  Edit Basics
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Salary Range</p>
                  <p className="font-bold text-primary">₹{Number(salaryMin).toLocaleString('en-IN')} - ₹{Number(salaryMax).toLocaleString('en-IN')} /mo</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Min CGPA Required</p>
                  <p className="font-bold text-on-surface">{minCgpa} CGPA</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Department</p>
                  <p className="font-bold text-on-surface">{department}</p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-outline-variant">
                <h3 className="font-bold text-base text-on-surface">Target Branches & Skills</h3>
                <button 
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1 text-primary font-bold text-sm hover:underline"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                  Edit Requirements
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">Target MSBTE Branches</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBranches.map((br) => (
                      <span key={br} className="bg-primary-container text-primary px-3 py-1 rounded-md text-xs font-bold border border-primary/20">{br} Engineering</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">Technical Proficiencies</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.split(',').map((skill, i) => (
                      <span key={i} className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-xs font-bold">{skill.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-base text-on-surface mb-3 border-b border-outline-variant pb-2">Job Description Summary</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line font-medium">
                {description}
              </p>
            </section>

            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={() => setStep(2)} 
                className="flex-1 py-3 rounded-lg border border-primary text-primary font-bold hover:bg-surface-container-low transition-colors"
              >
                Back
              </button>
              <button 
                onClick={handlePublish}
                className="flex-[2] py-3 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/95 shadow-md transition-transform active:scale-98"
              >
                Publish Job Listing
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
