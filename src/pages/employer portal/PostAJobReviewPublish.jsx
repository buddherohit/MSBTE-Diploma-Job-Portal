// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployerHeader from '../../components/EmployerHeader';
import { getCurrentUser } from '../../utils/auth';
import { addJob } from '../../utils/db';

export default function PostAJobReviewPublish() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [draft, setDraft] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [newJobId, setNewJobId] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);

    const saved = JSON.parse(sessionStorage.getItem('msbte_job_draft') || 'null');
    if (!saved || !saved.title) {
      // No draft — go back to step 1
      navigate('/employer-portal/post-a-job---employer-portal');
      return;
    }
    setDraft(saved);
  }, [navigate]);

  const handlePublish = async () => {
    if (!draft) return;
    setIsPublishing(true);
    try {
      const jobData = {
        ...draft,
        companyId: user?.uid || user?.id || user?.email,
        company: draft.company || user?.companyName || user?.name || 'Your Company',
        logo: draft.logo || user?.companyLogo || 'https://via.placeholder.com/80',
        postedAt: new Date().toISOString(),
        status: 'active',
        applicantsCount: 0,
      };

      const newJob = await addJob(jobData);
      setNewJobId(newJob.id);
      setPublished(true);

      // Clear draft
      sessionStorage.removeItem('msbte_job_draft');
    } catch (err) {
      console.error('Failed to publish job:', err);
      alert('Failed to publish job. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  if (!user || !draft) return null;

  // ── Success State ──
  if (published) {
    return (
      <div className="w-full min-h-screen bg-surface-container-lowest">
        <EmployerHeader activePage="post-job" />
        <main className="lg:ml-72 pt-20 px-6 pb-12 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-lg text-center bg-white border border-outline-variant rounded-3xl shadow-xl p-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-green-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-2xl font-extrabold text-on-surface mb-2">Job Published Successfully!</h1>
            <p className="text-on-surface-variant mb-2">
              <span className="font-bold text-primary">{draft.title}</span> is now live and visible to thousands of diploma students across Maharashtra.
            </p>
            {newJobId && (
              <p className="text-xs text-on-surface-variant font-mono bg-surface-container rounded-lg px-3 py-2 inline-block mb-6">Job ID: {newJobId}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/employer-portal/manage-jobs-employer-portal"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined">manage_search</span>
                Manage All Jobs
              </Link>
              <Link
                to="/employer-portal/post-a-job---employer-portal"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:brightness-110 shadow-md transition-all"
              >
                <span className="material-symbols-outlined">add</span>
                Post Another Job
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ── Review UI ──
  const reviewSections = [
    {
      icon: 'work',
      title: 'Job Details',
      editLink: '/employer-portal/post-a-job---employer-portal',
      fields: [
        { label: 'Job Title', value: draft.title },
        { label: 'Company', value: draft.company || user?.companyName },
        { label: 'Location', value: draft.location },
        { label: 'Job Type', value: draft.type },
        { label: 'Salary', value: draft.salary },
        { label: 'Sector', value: draft.sector },
        { label: 'Deadline', value: draft.deadline },
      ]
    },
    {
      icon: 'school',
      title: 'Candidate Requirements',
      editLink: '/employer-portal/post-a-job-candidate-requirements',
      fields: [
        { label: 'Required Branch', value: draft.branch },
        { label: 'Experience', value: draft.experience },
        { label: 'Min. GPA / %', value: draft.minGpa || 'Not specified' },
        { label: 'Openings', value: draft.openings || '1' },
        { label: 'Skills Required', value: (draft.skills || []).join(', ') || 'None specified' },
        { label: 'Additional Requirements', value: draft.additionalReqs || 'None' },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <EmployerHeader activePage="post-job" />

      <main className="lg:ml-72 pt-20 px-6 pb-12">
        {/* Progress Header */}
        <div className="max-w-3xl mx-auto mt-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/employer-portal/post-a-job-candidate-requirements" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <p className="text-primary font-bold text-[11px] uppercase tracking-widest">Step 3 of 3</p>
              <h1 className="text-2xl font-extrabold text-on-surface">Review &amp; Publish</h1>
            </div>
          </div>

          {/* Step Progress Bar */}
          <div className="flex gap-2 mt-4">
            {['Job Details', 'Requirements', 'Review & Publish'].map((label, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-primary">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Sections */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {reviewSections.map((section) => (
            <div key={section.title} className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{section.icon}</span>
                  </div>
                  <h2 className="font-bold text-on-surface text-lg">{section.title}</h2>
                </div>
                <Link
                  to={section.editLink}
                  className="flex items-center gap-1 text-primary text-sm font-bold hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Edit
                </Link>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {section.fields.filter(f => f.value).map(field => (
                  <div key={field.label} className="text-left">
                    <dt className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">{field.label}</dt>
                    <dd className="text-on-surface font-semibold text-sm mt-0.5">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {/* Job Description Preview */}
          {draft.description && (
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">description</span>
                  </div>
                  <h2 className="font-bold text-on-surface text-lg">Job Description</h2>
                </div>
                <Link to="/employer-portal/post-a-job---employer-portal" className="flex items-center gap-1 text-primary text-sm font-bold hover:underline">
                  <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                </Link>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed text-left">{draft.description}</p>
            </div>
          )}

          {/* Responsibilities Preview */}
          {draft.responsibilities && draft.responsibilities.length > 0 && (
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">checklist</span>
                </div>
                <h2 className="font-bold text-on-surface text-lg">Key Responsibilities</h2>
              </div>
              <ul className="space-y-3 text-left">
                {draft.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface-variant text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Publish Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-left">
            <span className="material-symbols-outlined text-amber-600 text-xl">info</span>
            <p className="text-amber-800 text-sm font-semibold leading-relaxed">
              By publishing, this job will be immediately visible to all students on the platform. It will be subject to admin moderation. Ensure all information is accurate before publishing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pb-6">
            <Link
              to="/employer-portal/post-a-job-candidate-requirements"
              className="flex items-center gap-2 px-6 py-3 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Requirements
            </Link>
            <button
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex items-center gap-2 px-10 py-3.5 bg-primary text-white font-extrabold rounded-xl hover:brightness-110 shadow-lg transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-base"
            >
              {isPublishing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">publish</span>
                  Publish Job Now
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
