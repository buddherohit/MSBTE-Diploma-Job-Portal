// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateUserProfile } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function EditEducationDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  // Form states
  const [branch, setBranch] = useState('');
  const [currentYear, setCurrentYear] = useState('3rd Year');
  const [sem1, setSem1] = useState('');
  const [sem2, setSem2] = useState('');
  const [sem3, setSem3] = useState('');
  const [sem4, setSem4] = useState('');
  const [sem5, setSem5] = useState('');
  
  // Capstone project states
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [projectTech, setProjectTech] = useState([]);
  const [newTech, setNewTech] = useState('');
  const [projectRepo, setProjectRepo] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);

    // Prefill states
    setBranch(session.branch || 'Mechanical Engineering');
    setCurrentYear(session.currentYear || '3rd Year');
    setSem1(session.sem1 || '85.40');
    setSem2(session.sem2 || '87.10');
    setSem3(session.sem3 || '88.00');
    setSem4(session.sem4 || '89.20');
    setSem5(session.sem5 || '88.50');
    setProjectTitle(session.projectTitle || 'Solar Powered Desalination System');
    setProjectSummary(session.projectSummary || 'Designed and fabricated a prototype solar still capable of producing 2 liters of potable water daily. Focused on thermal efficiency and sustainable material usage.');
    setProjectTech(session.projectTech || ['AutoCAD', 'SolidWorks', 'Thermodynamics']);
    setProjectRepo(session.projectRepo || 'https://github.com/rahulsharma/solar-desalination');
  }, [navigate]);

  const handleAddTech = (e) => {
    e.preventDefault();
    if (newTech.trim() && !projectTech.includes(newTech.trim())) {
      setProjectTech([...projectTech, newTech.trim()]);
      setNewTech('');
    }
  };

  const handleRemoveTech = (techToRemove) => {
    setProjectTech(projectTech.filter(t => t !== techToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    // Calculate overall GPA average if needed, or update user
    const updatedUser = {
      ...user,
      branch,
      currentYear,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      projectTitle,
      projectSummary,
      projectTech,
      projectRepo
    };

    updateUserProfile(updatedUser);
    setSuccessMsg('Academic details successfully updated!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setSuccessMsg('');
      navigate('/student-portal/resume-builder-dashboard');
    }, 1200);
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="resumes" />

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 text-left">
        {successMsg && (
          <div className="mb-6 bg-green-50 text-green-700 border border-green-200 rounded-lg p-4 font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span>{successMsg}</span>
          </div>
        )}

        <header className="mb-10">
          <div className="flex items-center gap-2 text-secondary mb-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-label-sm text-xs font-bold uppercase tracking-widest">Educational Blueprint</span>
          </div>
          <h1 className="font-headline-lg text-3xl font-extrabold text-on-surface mb-2">Academic Profile</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl font-semibold">
            Complete your technical background details according to MSBTE standards. This information will be used to generate your industry-ready resume.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Academic Background Card */}
          <section className="bg-white border border-outline-variant p-6 md:p-8 rounded-xl shadow-sm">
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_balance</span>
              Diploma Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Branch Selection */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Diploma Branch</label>
                <select 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-semibold"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Computer Technology</option>
                  <option>Electronics & Telecommunication</option>
                </select>
              </div>
              {/* Year of Study */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Current Year of Study</label>
                <div className="flex gap-2">
                  {['1st Year', '2nd Year', '3rd Year'].map((y) => (
                    <label key={y} className="flex-1 relative cursor-pointer group">
                      <input 
                        className="sr-only peer" 
                        name="year" 
                        type="radio" 
                        checked={currentYear === y}
                        onChange={() => setCurrentYear(y)}
                      />
                      <div className="p-3 text-center border border-outline-variant rounded-lg font-bold text-sm peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary group-hover:bg-surface-container transition-all">
                        {y}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Performance Grid */}
          <section className="bg-white border border-outline-variant p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
              <h2 className="font-headline-md text-xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Semester Performance
              </h2>
              <span className="bg-tertiary-fixed text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">MSBTE Pattern</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Semester 1', val: sem1, set: setSem1 },
                { label: 'Semester 2', val: sem2, set: setSem2 },
                { label: 'Semester 3', val: sem3, set: setSem3 },
                { label: 'Semester 4', val: sem4, set: setSem4 },
                { label: 'Semester 5', val: sem5, set: setSem5 }
              ].map((sem, index) => (
                <div key={index} className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
                  <span className="font-label-sm text-xs font-bold text-primary uppercase">{sem.label}</span>
                  <div className="relative">
                    <input 
                      className="w-full bg-white border border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none font-semibold" 
                      placeholder="Percentage" 
                      step="0.01" 
                      type="number"
                      value={sem.val}
                      onChange={(e) => sem.set(e.target.value)}
                    />
                    <span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
                  </div>
                </div>
              ))}
              <div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3 opacity-60">
                <span className="font-label-sm text-xs font-bold text-primary uppercase">Semester 6</span>
                <div className="relative">
                  <input className="w-full bg-surface-container border border-[#CBD5E1] rounded-md py-2 px-3 outline-none cursor-not-allowed font-semibold" disabled placeholder="In Progress" type="text" />
                </div>
              </div>
            </div>
          </section>

          {/* Final Year Project */}
          <section className="bg-white border-2 border-secondary-container p-6 md:p-8 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-secondary-container text-6xl opacity-10">rocket_launch</span>
            </div>
            <h2 className="font-headline-md text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">lightbulb</span>
              Final Year Project (Capstone)
            </h2>
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Project Title</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none font-semibold" 
                  placeholder="e.g., Solar Powered Desalination System" 
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Project Description & Industry Impact</label>
                <textarea 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none resize-none font-semibold h-28" 
                  placeholder="Briefly describe the problem solved, technologies used, and your role in the team..." 
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Key Technologies</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {projectTech.map((tech, i) => (
                      <span key={i} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-100 flex items-center gap-1">
                        {tech}
                        <span onClick={() => handleRemoveTech(tech)} className="material-symbols-outlined text-[14px] cursor-pointer hover:text-red-700">close</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input 
                      className="flex-1 bg-white border border-[#CBD5E1] rounded-lg py-2 px-4 text-sm focus:border-primary outline-none font-semibold" 
                      placeholder="Add tech (e.g. AutoCAD, Python)" 
                      type="text"
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          if (newTech.trim() && !projectTech.includes(newTech.trim())) {
                            setProjectTech([...projectTech, newTech.trim()]);
                            setNewTech('');
                          }
                        }
                      }}
                    />
                    <button 
                      type="button" 
                      onClick={(e) => {
                        if (newTech.trim() && !projectTech.includes(newTech.trim())) {
                          setProjectTech([...projectTech, newTech.trim()]);
                          setNewTech('');
                        }
                      }}
                      className="bg-secondary text-white px-4 py-2 rounded-lg font-bold text-xs"
                    >
                      Add
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Project Link / Repo (Optional)</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-outline-variant">link</span>
                    <input 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none font-semibold" 
                      placeholder="https://github.com/..." 
                      type="url"
                      value={projectRepo}
                      onChange={(e) => setProjectRepo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <footer className="flex justify-end gap-4 pt-6">
            <button 
              type="button"
              onClick={() => navigate('/student-portal/resume-builder-dashboard')}
              className="px-8 py-3 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-surface-container transition-all active:scale-95"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-10 py-3 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Commit to Resume
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}
