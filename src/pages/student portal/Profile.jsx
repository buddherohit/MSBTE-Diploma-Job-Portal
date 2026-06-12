import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, updateUserProfile } from '../../utils/auth';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // States for all profile fields
  const [fullName, setFullName] = useState('');
  const [branch, setBranch] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  
  const [passingYear, setPassingYear] = useState('2024');
  const [gpa, setGpa] = useState('');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const [internshipType, setInternshipType] = useState('Compulsory 6-Week Summer Training');
  const [internshipCompany, setInternshipCompany] = useState('');
  const [internshipPeriod, setInternshipPeriod] = useState('');
  const [internshipGuide, setInternshipGuide] = useState('');
  const [internshipSupervisor, setInternshipSupervisor] = useState('');
  const [internshipProjectTitle, setInternshipProjectTitle] = useState('');
  const [internshipProjectSummary, setInternshipProjectSummary] = useState('');

  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login');
    } else {
      setUser(session);
      // Initialize states from session
      setFullName(session.name || '');
      setBranch(session.branch || '');
      setInstituteName(session.institute || '');
      setEnrollment(session.enrollment || '');
      
      const isDefaultMock = session.email === 'student@msbtejobs.in';
      
      setPassingYear(session.passingYear || (isDefaultMock ? '2024' : '2024'));
      setGpa(session.gpa || (isDefaultMock ? '88.40%' : ''));
      setSkills(session.skills || (isDefaultMock ? ['AutoCAD', 'PLC', 'Hydraulics', 'Pneumatics', 'Maintenance'] : []));
      
      setInternshipType(session.internshipType || (isDefaultMock ? 'Compulsory 6-Week Summer Training' : 'Compulsory 6-Week Summer Training'));
      setInternshipCompany(session.internshipCompany || (isDefaultMock ? 'Tata Motors Ltd.' : ''));
      setInternshipPeriod(session.internshipPeriod || (isDefaultMock ? 'June 2023 - Aug 2023' : ''));
      setInternshipGuide(session.internshipGuide || (isDefaultMock ? 'Prof. S. R. Mane' : ''));
      setInternshipSupervisor(session.internshipSupervisor || (isDefaultMock ? 'Mr. Vijay Shinde (Plant Manager)' : ''));
      setInternshipProjectTitle(session.internshipProjectTitle || (isDefaultMock ? 'Optimization of Lubrication Schedules for Hydraulic Presses' : ''));
      setInternshipProjectSummary(session.internshipProjectSummary || (isDefaultMock ? 'Worked on the assembly line for passenger vehicles. Assisted in quality control audits and optimized the lubrication schedule for hydraulic presses, reducing downtime by 5%.' : ''));
      
      setLinkedinUrl(session.linkedinUrl || (isDefaultMock ? 'https://linkedin.com/in/rahulsharma' : ''));
      setPortfolioUrl(session.portfolioUrl || (isDefaultMock ? 'https://rahulportfolio.dev' : ''));
    }
  }, [navigate]);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSaveChanges = (e) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName.trim() || !instituteName.trim() || !enrollment.trim() || !branch) {
      setError('Name, Institute, Enrollment, and Branch are required fields.');
      return;
    }

    const updatedUser = {
      ...user,
      name: fullName.trim(),
      branch,
      institute: instituteName.trim(),
      enrollment: enrollment.trim(),
      passingYear,
      gpa: gpa.trim(),
      skills,
      internshipType,
      internshipCompany: internshipCompany.trim(),
      internshipPeriod: internshipPeriod.trim(),
      internshipGuide: internshipGuide.trim(),
      internshipSupervisor: internshipSupervisor.trim(),
      internshipProjectTitle: internshipProjectTitle.trim(),
      internshipProjectSummary: internshipProjectSummary.trim(),
      linkedinUrl: linkedinUrl.trim(),
      portfolioUrl: portfolioUrl.trim()
    };

    try {
      updateUserProfile(updatedUser);
      setSuccess('Profile updated successfully! Redirecting...');
      setTimeout(() => {
        navigate('/student-portal/dashboard');
      }, 1000);
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  if (!user) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      
      {/* Top Navigation Shell */}
      <header className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline h-16">
        <div className="flex items-center gap-4">
          <button 
            type="button"
            onClick={() => navigate('/student-portal/dashboard')}
            className="p-2 hover:bg-surface-container rounded-full transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
          </button>
          <h1 className="font-headline-lg text-headline-lg font-extrabold text-primary dark:text-primary-fixed">Edit Profile</h1>
        </div>
        <button 
          type="button"
          onClick={handleSaveChanges}
          className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/95 transition-all flex items-center gap-2 active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">save</span>
          <span>Save Changes</span>
        </button>
      </header>

      <main className="max-w-[800px] mx-auto px-4 py-8 mb-24 lg:mb-12 w-full">
        <form className="flex flex-col gap-stack-lg" onSubmit={handleSaveChanges}>
          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 rounded-lg p-4 text-sm font-semibold flex items-center gap-2 text-left">
              <span className="material-symbols-outlined text-lg">error</span>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-600 border border-green-200 rounded-lg p-4 text-sm font-semibold flex items-center gap-2 text-left">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span>{success}</span>
            </div>
          )}

          {/* Section 1: Basic Info */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Basic Information</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="relative group mx-auto md:mx-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high bg-primary-fixed/20 flex items-center justify-center text-primary font-bold text-3xl">
                  {fullName ? fullName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'S'}
                </div>
                <label className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  <input className="hidden" type="file"/>
                </label>
              </div>
              <div className="flex-1 w-full grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Full Name</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-body-md" 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-semibold">Branch</label>
                    <select 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all text-body-md appearance-none"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                    >
                      <option value="Computer Engineering">Computer Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Chemical Engineering">Chemical Engineering</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-on-surface-variant font-semibold">College Name</label>
                    <input 
                      className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all text-body-md" 
                      type="text" 
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Academic Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-semibold">MSBTE Enrollment No.</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                  type="text" 
                  value={enrollment}
                  onChange={(e) => setEnrollment(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-semibold">Passing Year</label>
                <select 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md"
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-semibold">Aggregate % / GPA</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                  type="text" 
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Section 3: Resume Upload */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">description</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Resume</h2>
            </div>
            <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-fixed/40 text-primary flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[32px]">picture_as_pdf</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">Resume_{fullName.replace(/\s+/g, '_') || 'Student'}.pdf</p>
                  <p className="text-label-sm text-on-surface-variant">Uploaded on Oct 12, 2023 • 1.2 MB</p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none border border-primary text-primary px-4 py-2 rounded-lg font-bold text-label-sm hover:bg-primary-fixed transition-colors focus:outline-none" type="button">View</button>
                <button className="flex-1 md:flex-none bg-primary text-white px-4 py-2 rounded-lg font-bold text-label-sm hover:bg-primary/95 transition-colors focus:outline-none" type="button">Replace</button>
              </div>
            </div>
          </section>

          {/* Section 4: Technical Skills */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">handyman</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="bg-primary-fixed/40 text-primary px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2 font-bold shadow-sm">
                  {skill} 
                  <button type="button" onClick={() => handleRemoveSkill(skill)} className="hover:text-error focus:outline-none">
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                placeholder="Add a new skill (e.g. AutoCAD, PLC, SolidWorks)" 
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
              />
              <button 
                className="bg-primary text-white px-4 py-2 rounded-lg font-bold active:scale-95 transition-transform" 
                type="button"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </section>

          {/* Section 5: MSBTE Industrial Internship & Training */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">badge</span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">MSBTE Industrial Internship & Training</h2>
              </div>
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold font-label-sm">Compulsory Module</span>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Training Type</label>
                  <select 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all text-body-md"
                    value={internshipType}
                    onChange={(e) => setInternshipType(e.target.value)}
                  >
                    <option value="Compulsory 6-Week Summer Training">Compulsory 6-Week Summer Training</option>
                    <option value="Semester-long Industry Project">Semester-long Industry Project</option>
                    <option value="Optional Industrial Internship">Optional Industrial Internship</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Company Name</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                    type="text" 
                    value={internshipCompany}
                    onChange={(e) => setInternshipCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Duration / Period</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                    type="text" 
                    value={internshipPeriod}
                    onChange={(e) => setInternshipPeriod(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">College Internal Guide</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                    type="text" 
                    value={internshipGuide}
                    onChange={(e) => setInternshipGuide(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-on-surface-variant font-semibold">Industry Supervisor Contact</label>
                  <input 
                    className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-body-md" 
                    type="text" 
                    value={internshipSupervisor}
                    onChange={(e) => setInternshipSupervisor(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-on-surface-variant font-semibold">Project Title & Summary</label>
                <input 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none mb-2 text-body-md" 
                  type="text" 
                  value={internshipProjectTitle}
                  onChange={(e) => setInternshipProjectTitle(e.target.value)}
                />
                <textarea 
                  className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 py-2 text-body-md focus:ring-2 focus:ring-primary outline-none h-24" 
                  placeholder="Brief description of your role and projects..."
                  value={internshipProjectSummary}
                  onChange={(e) => setInternshipProjectSummary(e.target.value)}
                ></textarea>
              </div>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                  <div>
                    <p className="font-label-sm text-on-surface font-semibold">MSBTE Training Certificate</p>
                    <p className="text-xs text-on-surface-variant">Tata_Motors_Training_Certificate.pdf</p>
                  </div>
                </div>
                <button className="text-primary hover:underline text-sm font-bold focus:outline-none" type="button">Change File</button>
              </div>
            </div>
          </section>

          {/* Section 6: Links */}
          <section className="glass-card p-6 rounded-xl shadow-sm bg-white border border-outline-variant text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">link</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Links</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary transition-all">
                <span className="material-symbols-outlined text-[#0077B5]">language</span>
                <input 
                  className="flex-1 bg-transparent border-none py-3 outline-none text-body-md" 
                  placeholder="LinkedIn URL" 
                  type="url" 
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary transition-all">
                <span className="material-symbols-outlined text-on-surface">public</span>
                <input 
                  className="flex-1 bg-transparent border-none py-3 outline-none text-body-md" 
                  placeholder="Portfolio URL" 
                  type="url" 
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                />
              </div>
            </div>
          </section>
        </form>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant py-1" to="/student-portal/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-[10px] mt-0.5">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant py-1" to="/public/find-diploma-jobs">
          <span className="material-symbols-outlined">work</span>
          <span className="font-label-sm text-[10px] mt-0.5">Jobs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" to="/student-portal/profile">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant py-1" to="/student-portal/notifications-alerts">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-sm text-[10px] mt-0.5">Alerts</span>
        </Link>
      </nav>
    </div>
  );
}
