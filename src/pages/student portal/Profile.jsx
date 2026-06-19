// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateUserProfile } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Mechanical Engineering');
  const [institute, setInstitute] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [passingYear, setPassingYear] = useState('2024');
  const [gpa, setGpa] = useState('');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [trainingType, setTrainingType] = useState('Compulsory 6-Week Summer Training');
  const [trainingCompany, setTrainingCompany] = useState('Tata Motors Ltd.');
  const [trainingDuration, setTrainingDuration] = useState('June 2023 - Aug 2023');
  const [trainingGuide, setTrainingGuide] = useState('Prof. S. R. Mane');
  const [trainingSupervisor, setTrainingSupervisor] = useState('Mr. Vijay Shinde (Plant Manager)');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);

    // Populate values
    setName(session.name || '');
    setBranch(session.branch || 'Mechanical Engineering');
    setInstitute(session.institute || '');
    setEnrollment(session.enrollment || '');
    setPassingYear(session.passingYear || '2024');
    setGpa(session.gpa || '');
    setSkills(session.skills || ['AutoCAD', 'PLC', 'Hydraulics', 'Pneumatics']);
    setTrainingType(session.trainingType || 'Compulsory 6-Week Summer Training');
    setTrainingCompany(session.trainingCompany || 'Tata Motors Ltd.');
    setTrainingDuration(session.trainingDuration || 'June 2023 - Aug 2023');
    setTrainingGuide(session.trainingGuide || 'Prof. S. R. Mane');
    setTrainingSupervisor(session.trainingSupervisor || 'Mr. Vijay Shinde (Plant Manager)');
    setProjectTitle(session.projectTitle || 'Optimization of Lubrication Schedules for Hydraulic Presses');
    setProjectSummary(session.projectSummary || 'Worked on the assembly line for passenger vehicles. Assisted in quality control audits and optimized the lubrication schedule for hydraulic presses, reducing downtime by 5%.');
    setLinkedin(session.linkedin || 'https://linkedin.com/in/rahulsharma');
    setPortfolio(session.portfolio || 'https://rahulsharma.dev');
  }, [navigate]);

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    const updatedUser = {
      ...user,
      name,
      branch,
      institute,
      enrollment,
      passingYear,
      gpa,
      skills,
      trainingType,
      trainingCompany,
      trainingDuration,
      trainingGuide,
      trainingSupervisor,
      projectTitle,
      projectSummary,
      linkedin,
      portfolio
    };

    try {
      await updateUserProfile(updatedUser);
      setSuccessMsg('Profile updated successfully!');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setSuccessMsg('');
      }, 4000);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="profile" />

      <main className="max-w-[800px] mx-auto px-4 py-8 mb-24 text-left">
        {successMsg && (
          <div className="mb-6 bg-green-50 text-green-700 border border-green-200 rounded-lg p-4 font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span>{successMsg}</span>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-headline-lg text-primary font-bold">Edit Profile</h2>
            <p className="font-body-md text-on-surface-variant">Update your details to be found by leading recruiters.</p>
          </div>
          <button 
            onClick={handleSave}
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            <span>Save Changes</span>
          </button>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-6">
          {/* Section 1: Basic Info */}
          <section className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Basic Information</h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full flex-1 grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Full Name</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-semibold" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-bold text-sm">Branch</label>
                    <select 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all font-semibold"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                    >
                      <option>Mechanical Engineering</option>
                      <option>Electrical Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Computer Technology</option>
                      <option>Electronics & Telecommunication</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-bold text-sm">College Name</label>
                    <input 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all font-semibold" 
                      type="text" 
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Academic Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">MSBTE Enrollment No.</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                  type="text" 
                  value={enrollment}
                  onChange={(e) => setEnrollment(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Passing Year</label>
                <select 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold"
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                >
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Aggregate GPA / %</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                  type="text" 
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          {/* Section 3: Technical Skills */}
          <section className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">handyman</span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-100 flex items-center gap-2">
                  {skill} 
                  <button type="button" onClick={() => handleRemoveSkill(skill)} className="hover:text-red-600 flex items-center justify-center focus:outline-none">
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none font-semibold text-sm" 
                placeholder="Add a new skill (e.g. AutoCAD, PLC)" 
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
                      setSkills([...skills, newSkill.trim()]);
                      setNewSkill('');
                    }
                  }
                }}
              />
              <button 
                type="button" 
                onClick={(e) => {
                  if (newSkill.trim() && !skills.includes(newSkill.trim())) {
                    setSkills([...skills, newSkill.trim()]);
                    setNewSkill('');
                  }
                }}
                className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-95"
              >
                Add
              </button>
            </div>
          </section>

          {/* Section 4: MSBTE Industrial Training */}
          <section className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">badge</span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">MSBTE Industrial Training</h3>
              </div>
              <span className="bg-primary-fixed text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Compulsory Module</span>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Training Type</label>
                  <select 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all font-semibold"
                    value={trainingType}
                    onChange={(e) => setTrainingType(e.target.value)}
                  >
                    <option>Compulsory 6-Week Summer Training</option>
                    <option>Semester-long Industry Project</option>
                    <option>Optional Industrial Internship</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Company Name</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                    type="text" 
                    value={trainingCompany}
                    onChange={(e) => setTrainingCompany(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Duration / Period</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                    type="text" 
                    value={trainingDuration}
                    onChange={(e) => setTrainingDuration(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">College Internal Guide</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                    type="text" 
                    value={trainingGuide}
                    onChange={(e) => setTrainingGuide(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-bold text-sm">Industry Supervisor Contact</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none font-semibold" 
                    type="text" 
                    value={trainingSupervisor}
                    onChange={(e) => setTrainingSupervisor(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-bold text-sm">Project Title & Summary</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none mb-2 font-semibold" 
                  type="text" 
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
                <textarea 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none h-24 font-semibold" 
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Section 5: Professional Links */}
          <section className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">link</span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Professional Links</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-[#F1F5F9] rounded-lg px-4 border border-[#CBD5E1] focus-within:ring-2 focus-within:ring-primary transition-all">
                <span className="material-symbols-outlined text-[#0077B5]">language</span>
                <input 
                  className="flex-1 bg-transparent border-none py-3 outline-none text-sm font-semibold" 
                  placeholder="LinkedIn URL" 
                  type="url" 
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4 bg-[#F1F5F9] rounded-lg px-4 border border-[#CBD5E1] focus-within:ring-2 focus-within:ring-primary transition-all">
                <span className="material-symbols-outlined text-on-surface">public</span>
                <input 
                  className="flex-1 bg-transparent border-none py-3 outline-none text-sm font-semibold" 
                  placeholder="Portfolio URL" 
                  type="url" 
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button 
              type="submit"
              className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-lg font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
