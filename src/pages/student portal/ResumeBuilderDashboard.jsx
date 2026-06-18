// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function ResumeBuilderDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'S';
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Compute profile progress score dynamically
  let progressScore = 40; // baseline
  if (user.skills && user.skills.length > 0) progressScore += 15;
  if (user.projectTitle) progressScore += 15;
  if (user.trainingCompany) progressScore += 15;
  if (user.linkedin || user.portfolio) progressScore += 15;
  if (progressScore > 100) progressScore = 100;

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="resumes" />

      <div className="max-w-container-max mx-auto flex">
        {/* NavigationDrawer (Desktop Only) */}
        <aside className="hidden md:flex flex-col h-[calc(100vh-72px)] sticky top-[72px] w-80 bg-white border-r border-outline-variant py-6 text-left">
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
              {getInitials(user.name)}
            </div>
            <div>
              <p className="font-body-md font-bold text-on-surface">{user.name}</p>
              <p className="text-label-sm text-on-surface-variant font-medium">{user.branch || 'Mechanical Engineering'}</p>
              <p className="text-label-sm text-primary font-bold">Student Account</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <Link className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" to="/student-portal/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-body-md font-bold">Dashboard</span>
            </Link>
            <Link className="bg-primary-container text-on-primary-container font-bold rounded-full mx-2 px-4 py-3 flex items-center gap-4" to="/student-portal/resume-builder-dashboard">
              <span className="material-symbols-outlined">history_edu</span>
              <span className="font-body-md">Resume Builder</span>
            </Link>
            <Link className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" to="/student-portal/profile">
              <span className="material-symbols-outlined">person</span>
              <span className="font-body-md font-bold">My Profile</span>
            </Link>
            <Link className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" to="/student-portal/settings-student-portal">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-body-md font-bold">Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 pb-32 text-left">
          {/* Welcome Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-8 bg-primary text-white rounded-xl p-8 shadow-lg flex flex-col justify-between min-h-[240px]">
              <div>
                <h2 className="font-headline-lg text-3xl font-extrabold mb-2 text-white">Resume Progress: {progressScore}%</h2>
                <p className="font-body-md opacity-90 max-w-md font-medium text-slate-100">
                  {progressScore < 100 
                    ? "Complete all sections to unlock premium MSBTE-verified templates for recruitment drives."
                    : "Your profile is fully complete! Preview your resume and export it below."
                  }
                </p>
              </div>
              <div className="w-full bg-white/20 h-4 rounded-full mt-6 overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-500 shadow-md"
                  style={{ width: `${progressScore}%` }}
                ></div>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-white border border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div 
                onClick={() => navigate('/student-portal/select-resume-template')}
                className="relative w-full aspect-[3/4] max-w-[180px] mb-4 bg-surface-container rounded-lg shadow-sm overflow-hidden group cursor-pointer border border-outline-variant"
              >
                <img alt="Template Preview" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK84o43yo7AIZyCviaNL7dBesbLKCc31KmO4usR7O27Fse-6tWfAZx86tlD0IDjOImmIDNb7ayxQA5UKC0KIfx-Kbc1cG-3sojBmFFWDKUC2C1SSkZ6u6qgB_Iy3MA1x5PlYoJn74N3g84J2nOIZFowEPiC4MvmbsjuoQBBMjcwoW_jdl_0jrHmo0azoJvri0y5j89HBoWIoJ81rQQsXRatNmstz0RW_V9T76N2RQaecjLU3FYAEQq2QO4zVJnVLQbsDzoNkx3708"/>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary px-4 py-2 rounded-full font-bold text-xs shadow-md">Select Template</span>
                </div>
              </div>
              <p className="font-bold text-sm text-on-surface">Modern Industrial Blueprint</p>
            </div>
          </div>

          {/* Bento Grid of Sections */}
          <h3 className="font-headline-md text-2xl font-bold mb-6">Resume Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Personal Info */}
            <button 
              onClick={() => navigate('/student-portal/profile')}
              className="flex flex-col p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]"
            >
              <div className="flex justify-between items-start w-full mb-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-bold text-lg mb-1">Personal Info</p>
              <p className="text-xs text-on-surface-variant font-medium mb-4">Contact details, LinkedIn link, and profile summaries.</p>
              <span className="mt-auto text-primary font-bold text-xs flex items-center gap-1">Edit Section <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </button>

            {/* Education (MSBTE Focus) */}
            <button 
              onClick={() => navigate('/student-portal/edit-education-details')}
              className="flex flex-col p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]"
            >
              <div className="flex justify-between items-start w-full mb-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-bold text-lg mb-1">Education (MSBTE)</p>
              <p className="text-xs text-on-surface-variant font-medium mb-4">Diploma details, semester marks, and college info.</p>
              <span className="mt-auto text-primary font-bold text-xs flex items-center gap-1">Edit Section <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </button>

            {/* Industrial Training */}
            <button 
              onClick={() => navigate('/student-portal/profile')}
              className="flex flex-col p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]"
            >
              <div className="flex justify-between items-start w-full mb-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">factory</span>
                </div>
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-bold text-lg mb-1">Industrial Training</p>
              <p className="text-xs text-on-surface-variant font-medium mb-4">Mandatory 6-week summer training and supervisor credentials.</p>
              <span className="mt-auto text-primary font-bold text-xs flex items-center gap-1">Edit Section <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </button>

            {/* Technical Skills */}
            <button 
              onClick={() => navigate('/student-portal/profile')}
              className="flex flex-col p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]"
            >
              <div className="flex justify-between items-start w-full mb-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">construction</span>
                </div>
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-bold text-lg mb-1">Technical Skills</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {user.skills ? user.skills.slice(0, 3).map((s, i) => (
                  <span key={i} className="bg-primary-fixed text-primary text-[9px] px-2 py-0.5 rounded font-bold">{s}</span>
                )) : null}
                {user.skills && user.skills.length > 3 && <span className="text-[9px] text-on-surface-variant font-semibold">+{user.skills.length - 3} more</span>}
              </div>
              <span className="mt-auto text-primary font-bold text-xs flex items-center gap-1">Edit Skills <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </button>

            {/* Capstone Projects */}
            <button 
              onClick={() => navigate('/student-portal/edit-education-details')}
              className="flex flex-col p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]"
            >
              <div className="flex justify-between items-start w-full mb-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-bold text-lg mb-1">Capstone Projects</p>
              <p className="text-xs text-on-surface-variant font-medium mb-4">Final Year Project title, technologies, and repository links.</p>
              <span className="mt-auto text-primary font-bold text-xs flex items-center gap-1">Edit Projects <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </button>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 bg-surface-container-low border border-outline-variant rounded-xl p-6">
            <h4 className="font-bold text-sm text-on-surface mb-4">Quick Tips for Maharashtra Students</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-white border border-outline-variant/50 rounded-lg">
                <span className="material-symbols-outlined text-secondary">lightbulb</span>
                <p className="text-xs text-on-surface-variant font-semibold">Highlight your "Industrial Training" specifically, as recruiters in MIDC areas value this MSBTE requirement.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white border border-outline-variant/50 rounded-lg">
                <span className="material-symbols-outlined text-secondary">lightbulb</span>
                <p className="text-xs text-on-surface-variant font-semibold">Keep your MSBTE percentage/CGPA clear and verified for government and private core job applications.</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/student-portal/resume-preview-export')}
        className="fixed bottom-10 right-10 flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(30,64,175,0.3)] hover:scale-105 active:scale-95 transition-all z-50 border border-white/20"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
        <span className="font-bold text-sm">Preview & Export</span>
      </button>
    </div>
  );
}
