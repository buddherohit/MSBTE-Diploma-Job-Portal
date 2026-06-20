// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployerHeader from '../../components/EmployerHeader';
import { getCurrentUser } from '../../utils/auth';

const BRANCHES = [
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Electronics & Telecommunication',
  'Computer Technology',
  'Information Technology',
  'Automobile Engineering',
  'Chemical Engineering',
  'Instrumentation',
  'Any Branch'
];

const EXPERIENCE_OPTIONS = ['Fresher (0 Years)', '0–1 Year', '0–2 Years', '1–3 Years', '2–5 Years', '5+ Years'];

export default function PostAJobCandidateRequirements() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load draft from session storage (Step 1 saves it)
  const [draft, setDraft] = useState({});
  const [branch, setBranch] = useState('Mechanical Engineering');
  const [experience, setExperience] = useState('Fresher (0 Years)');
  const [minGpa, setMinGpa] = useState('');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [additionalReqs, setAdditionalReqs] = useState('');
  const [openings, setOpenings] = useState('1');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);

    // Load step 1 draft
    const saved = JSON.parse(sessionStorage.getItem('msbte_job_draft') || '{}');
    setDraft(saved);
    if (saved.branch) setBranch(saved.branch);
    if (saved.experience) setExperience(saved.experience);
    if (saved.minGpa) setMinGpa(saved.minGpa);
    if (saved.skills) setSkills(saved.skills);
    if (saved.additionalReqs) setAdditionalReqs(saved.additionalReqs);
    if (saved.openings) setOpenings(saved.openings);
  }, [navigate]);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (s) => setSkills(skills.filter(sk => sk !== s));

  const handleNext = (e) => {
    e.preventDefault();
    const updated = {
      ...draft,
      branch,
      experience,
      minGpa,
      skills,
      additionalReqs,
      openings,
      education: [`MSBTE Diploma (${branch})`, `${experience} Experience`]
    };
    sessionStorage.setItem('msbte_job_draft', JSON.stringify(updated));
    navigate('/employer-portal/post-a-job-review-publish');
  };

  if (!user) return null;

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <EmployerHeader activePage="post-job" />

      <main className="lg:ml-72 pt-20 px-6 pb-12">
        {/* Progress Header */}
        <div className="max-w-3xl mx-auto mt-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/employer-portal/post-a-job---employer-portal" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <p className="text-primary font-bold text-[11px] uppercase tracking-widest">Step 2 of 3</p>
              <h1 className="text-2xl font-extrabold text-on-surface">Candidate Requirements</h1>
            </div>
          </div>

          {/* Step Progress Bar */}
          <div className="flex gap-2 mt-4">
            {['Job Details', 'Requirements', 'Review & Publish'].map((label, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className={`h-1.5 rounded-full ${i <= 1 ? 'bg-primary' : 'bg-outline-variant'}`} />
                <span className={`text-[10px] font-bold ${i <= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Summary (from Step 1) */}
        {draft.title && (
          <div className="max-w-3xl mx-auto mb-6 bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">work</span>
            <div className="text-left">
              <p className="font-bold text-on-surface">{draft.title}</p>
              <p className="text-sm text-on-surface-variant">{draft.location} • {draft.type} • {draft.salary}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleNext} className="max-w-3xl mx-auto flex flex-col gap-6">

          {/* Branch & Experience */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <h2 className="font-bold text-on-surface text-lg">Education & Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Required Branch</label>
                <select
                  value={branch}
                  onChange={e => setBranch(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                >
                  {BRANCHES.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Experience Required</label>
                <select
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                >
                  {EXPERIENCE_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Minimum GPA / Percentage</label>
                <input
                  type="text"
                  value={minGpa}
                  onChange={e => setMinGpa(e.target.value)}
                  placeholder="e.g. 60% or 6.5 CGPA"
                  className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-on-surface-variant font-bold text-xs uppercase tracking-wider">Number of Openings</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={openings}
                  onChange={e => setOpenings(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">handyman</span>
              </div>
              <h2 className="font-bold text-on-surface text-lg">Required Skills</h2>
            </div>
            
            {/* Skills Chips */}
            <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
              {skills.length === 0 && (
                <p className="text-on-surface-variant text-sm italic">No skills added yet. Add at least 2 relevant skills.</p>
              )}
              {skills.map((s, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-bold flex items-center gap-2">
                  {s}
                  <button type="button" onClick={() => handleRemoveSkill(s)} className="hover:text-red-600 transition-colors">
                    <span className="material-symbols-outlined text-[15px]">close</span>
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                placeholder="Type a skill and press Enter (e.g. AutoCAD, PLC)"
                className="flex-1 bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-95 transition-opacity"
              >
                Add
              </button>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">checklist</span>
              </div>
              <h2 className="font-bold text-on-surface text-lg">Additional Requirements</h2>
            </div>
            <textarea
              value={additionalReqs}
              onChange={e => setAdditionalReqs(e.target.value)}
              rows={4}
              placeholder="List any additional requirements like certifications, physical fitness, language, shifts, travel requirements, etc."
              className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-on-surface font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pb-4">
            <Link
              to="/employer-portal/post-a-job---employer-portal"
              className="flex items-center gap-2 px-6 py-3 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Step 1
            </Link>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              Review & Publish
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
