// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';

export default function ResumePreviewExport() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 70) setZoom(zoom - 10);
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Fallback defaults for missing profile info
  const studentName = user.name || 'Rahul Sharma';
  const email = user.email || 'student@msbtejobs.in';
  const branchName = user.branch || 'Mechanical Engineering';
  const collegeName = user.institute || 'Government Polytechnic, Pune';
  const enrollmentNo = user.enrollment || '2100000001';
  const passingYear = user.passingYear || '2024';
  const aggregateGpa = user.gpa || '8.80';
  const skillsList = user.skills || ['AutoCAD', 'SolidWorks', 'PLC Programming', 'Hydraulics', 'Pneumatics'];
  
  const trainingType = user.trainingType || 'Compulsory 6-Week Summer Training';
  const trainingCompany = user.trainingCompany || 'Tata Motors Ltd.';
  const trainingDuration = user.trainingDuration || 'June 2023 - Aug 2023';
  const trainingGuide = user.trainingGuide || 'Prof. S. R. Mane';
  const trainingSupervisor = user.trainingSupervisor || 'Mr. Vijay Shinde (Plant Manager)';
  
  const projectTitle = user.projectTitle || 'Optimization of Lubrication Schedules for Hydraulic Presses';
  const projectSummary = user.projectSummary || 'Worked on the assembly line for passenger vehicles. Assisted in quality control audits and optimized the lubrication schedule for hydraulic presses, reducing downtime by 5%.';
  const projectTech = user.projectTech || ['AutoCAD', 'SolidWorks', 'Excel'];
  const projectRepo = user.projectRepo || 'https://github.com/rahulsharma/project';
  
  const linkedin = user.linkedin || 'https://linkedin.com/in/rahulsharma';
  const portfolio = user.portfolio || 'https://rahulsharma.dev';

  return (
    <div className="w-full min-h-screen bg-surface-dim/50 text-[#1a1a1a]">
      {/* Top AppBar */}
      <header className="bg-white border-b border-outline-variant w-full sticky top-0 z-40 print:hidden">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/student-portal/resume-builder-dashboard')}
              className="p-2 hover:bg-surface-container rounded-full transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">Resume Preview & Export</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 bg-surface-container rounded-full p-1 border border-outline-variant">
              <button onClick={handleZoomOut} className="p-1.5 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-sm">zoom_out</span>
              </button>
              <span className="px-2 flex items-center font-bold text-xs">{zoom}%</span>
              <button onClick={handleZoomIn} className="p-1.5 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
              </button>
            </div>
            <button 
              onClick={handlePrint}
              className="bg-primary text-white font-bold text-xs px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">picture_as_pdf</span>
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Preview Container */}
      <main className="overflow-auto py-8 flex justify-center print:p-0 print:bg-white">
        <div 
          className="transition-transform duration-300 ease-out origin-top print:transform-none" 
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {/* A4 Document Canvas */}
          <div 
            className="bg-white w-[210mm] min-h-[297mm] shadow-xl p-12 text-[#1a1a1a] relative flex flex-col gap-6 text-left border border-outline-variant print:border-none print:shadow-none print:p-0" 
            id="resumePaper"
          >
            {/* Header */}
            <section className="border-b-4 border-primary pb-4">
              <div className="flex justify-between items-end flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-primary uppercase tracking-tight leading-tight">{studentName}</h2>
                  <p className="text-secondary font-bold text-base mt-1">{branchName} Diploma Student</p>
                </div>
                <div className="text-right text-xs font-semibold text-on-surface-variant space-y-0.5">
                  <p className="flex items-center justify-end gap-1.5">
                    {email} <span className="material-symbols-outlined text-primary text-[14px]">mail</span>
                  </p>
                  <p className="flex items-center justify-end gap-1.5">
                    +91 98765 43210 <span className="material-symbols-outlined text-primary text-[14px]">call</span>
                  </p>
                  <p className="flex items-center justify-end gap-1.5">
                    Maharashtra, India <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Profile Summary */}
            <section>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">person_search</span>
                Professional Summary
              </h3>
              <p className="text-xs leading-relaxed text-on-surface-variant font-medium">
                Diligent Final Year {branchName} Diploma student at MSBTE with verified academic excellence ({aggregateGpa} Aggregate GPA). Possesses practical engineering background through hands-on industrial training modules at {trainingCompany}. Highly skilled in designing blueprints, technical operations troubleshooting, and project lifecycle coordination. Aspiring to apply core technical skills in MIDC zones.
              </p>
            </section>

            {/* Grid Layout */}
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Left Column (Academic Info & Skills) */}
              <div className="col-span-4 space-y-6">
                {/* Education */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-3">Education</h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-on-surface">Diploma in {branchName}</p>
                      <p className="text-secondary font-bold text-[11px]">{collegeName}</p>
                      <p className="text-[10px] text-outline font-semibold">Class of {passingYear}</p>
                      <p className="font-bold mt-1 text-primary">Aggregate: {aggregateGpa}</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Secondary School (SSC)</p>
                      <p className="text-secondary font-bold text-[11px]">Maharashtra State Board</p>
                      <p className="text-[10px] text-outline font-semibold">Year: 2021</p>
                      <p className="font-bold mt-1 text-primary">Percentage: 92.4%</p>
                    </div>
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsList.map((skill, index) => (
                      <span key={index} className="bg-primary-fixed text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-3">Languages</h3>
                  <ul className="text-xs space-y-1 font-semibold text-on-surface-variant">
                    <li className="flex justify-between"><span>Marathi</span> <span className="text-outline italic">Native</span></li>
                    <li className="flex justify-between"><span>English</span> <span className="text-outline italic">Fluent</span></li>
                    <li className="flex justify-between"><span>Hindi</span> <span className="text-outline italic">Fluent</span></li>
                  </ul>
                </section>
              </div>

              {/* Right Column (Training & Projects) */}
              <div className="col-span-8 space-y-6">
                {/* Industrial Training */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-3">MSBTE Industrial Training</h3>
                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <p className="font-bold text-on-surface text-[13px]">{trainingType}</p>
                        <span className="text-[10px] text-outline font-bold">{trainingDuration}</span>
                      </div>
                      <p className="text-secondary font-bold text-[11px] mb-1.5">{trainingCompany}</p>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-on-surface-variant font-medium">
                        <li>Worked as a technical trainee reporting to plant advisor {trainingSupervisor}.</li>
                        <li>Assisted senior maintenance and assembly engineers in testing workflows.</li>
                        <li>Completed internal training report monitored by {trainingGuide}.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Capstone Projects */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-3">Academic Projects</h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-on-surface text-[13px]">Capstone: {projectTitle}</p>
                      <p className="text-on-surface-variant mt-1 leading-relaxed font-medium">
                        {projectSummary}
                      </p>
                      {projectTech.length > 0 && (
                        <p className="mt-2 text-[10px] font-bold text-secondary">
                          Tech Stack: {projectTech.join(', ')}
                        </p>
                      )}
                      {projectRepo && (
                        <p className="text-[10px] text-primary mt-1 font-mono truncate">
                          Repo: {projectRepo}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
                
                {/* Links */}
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-outline-variant mb-2">Professional Links</h3>
                  <div className="text-xs space-y-1 font-semibold text-primary">
                    <p className="truncate">LinkedIn: <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">{linkedin}</a></p>
                    <p className="truncate">Portfolio: <a href={portfolio} target="_blank" rel="noreferrer" className="hover:underline">{portfolio}</a></p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 flex justify-between items-center text-outline-variant border-t border-outline-variant/30 text-[10px] font-semibold">
              <p>Generated via verified MSBTE Credentials</p>
              <p>Reference available upon request</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Controls */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/95 border-t border-outline-variant shadow-lg print:hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile py-4 flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
            <div className="text-left leading-none">
              <p className="font-bold text-xs text-on-surface">Layout: Modern Technical</p>
              <p className="text-[10px] text-on-surface-variant mt-0.5">Standard A4 Blueprint Format</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button 
              onClick={() => navigate('/student-portal/resume-builder-dashboard')}
              className="flex-1 md:flex-none border border-outline text-primary font-bold text-xs px-6 py-3 rounded-xl hover:bg-surface-container transition-all"
            >
              Back to Builder
            </button>
            <button 
              onClick={handlePrint}
              className="flex-1 md:flex-none bg-primary text-white font-bold text-xs px-10 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Export / Print PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
