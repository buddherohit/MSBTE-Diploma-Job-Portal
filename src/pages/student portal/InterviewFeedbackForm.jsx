// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';

export default function InterviewFeedbackForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState(null);

  // Form ratings
  const [techRating, setTechRating] = useState(4);
  const [problemRating, setProblemRating] = useState(3);
  const [commRating, setCommRating] = useState(4);
  const [teamRating, setTeamRating] = useState(4);
  const [notes, setNotes] = useState('');
  const [recommendation, setRecommendation] = useState('Hire');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const session = getCurrentUser();
    // Feedback form can be completed by verified employers or administrators
    if (!session) {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('Evaluation submitted successfully!');
    setTimeout(() => {
      setSuccess('');
      if (user && user.role === 'employer') {
        navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
      } else {
        navigate('/');
      }
    }, 1500);
  };

  const renderStars = (rating, setter) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button 
        key={star}
        type="button"
        onClick={() => setter(star)}
        className="focus:outline-none hover:scale-110 transition-transform"
      >
        <span className={`material-symbols-outlined text-3xl ${star <= rating ? 'text-primary' : 'text-outline-variant'}`}>
          star
        </span>
      </button>
    ));
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 w-full flex justify-between items-center px-6 py-4 bg-white border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button 
            type="button"
            onClick={() => {
              if (user.role === 'employer') {
                navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
              } else {
                navigate('/student-portal/dashboard');
              }
            }}
            className="hover:bg-surface-container rounded-full p-2 transition-opacity flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-primary">Interview Evaluation Feedback</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 pb-32 text-left">
        {success && (
          <div className="mb-6 bg-green-50 text-green-700 border border-green-200 rounded-lg p-4 font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Candidate Summary Card */}
          <section className="bg-white border border-outline-variant rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container font-bold flex items-center justify-center text-lg">
                AA
              </div>
              <div>
                <h2 className="text-lg font-bold text-on-surface">Aditya Ahire</h2>
                <p className="text-xs text-on-surface-variant font-semibold">Applied for: Junior Production Engineer</p>
                <div className="flex items-center gap-1 text-xs text-primary font-bold mt-1">
                  <span className="material-symbols-outlined text-[14px]">business</span>
                  <span>Tata Motors Ltd.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills Rating */}
          <section className="mb-6 space-y-4">
            <h3 className="text-xs font-bold text-outline uppercase tracking-wider">Technical Capability</h3>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-on-surface">Technical Knowledge</label>
                <span className="text-xs font-extrabold text-primary">{techRating}.0</span>
              </div>
              <div className="flex gap-1">
                {renderStars(techRating, setTechRating)}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-on-surface">Problem Solving</label>
                <span className="text-xs font-extrabold text-primary">{problemRating}.0</span>
              </div>
              <div className="flex gap-1">
                {renderStars(problemRating, setProblemRating)}
              </div>
            </div>
          </section>

          {/* Soft Skills Rating */}
          <section className="mb-6 space-y-4">
            <h3 className="text-xs font-bold text-outline uppercase tracking-wider">Communication & Collaboration</h3>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-on-surface">Communication</label>
                <span className="text-xs font-extrabold text-primary">{commRating}.0</span>
              </div>
              <div className="flex gap-1">
                {renderStars(commRating, setCommRating)}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-on-surface">Teamwork</label>
                <span className="text-xs font-extrabold text-primary">{teamRating}.0</span>
              </div>
              <div className="flex gap-1">
                {renderStars(teamRating, setTeamRating)}
              </div>
            </div>
          </section>

          {/* Detailed Comments */}
          <section className="mb-6">
            <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="notes">Observation Notes</label>
            <textarea 
              className="w-full bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none text-sm font-semibold h-28" 
              id="notes" 
              placeholder="Enter detailed observations about the candidate's core technical and soft skill strengths..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </section>

          {/* Final Recommendation */}
          <section className="mb-8">
            <h3 className="text-sm font-bold text-on-surface mb-3">Recommendation</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Strong Hire', icon: 'verified' },
                { name: 'Hire', icon: 'thumb_up' },
                { name: 'Maybe', icon: 'help' },
                { name: 'Reject', icon: 'cancel' }
              ].map((rec) => {
                const isActive = recommendation === rec.name;
                return (
                  <button 
                    key={rec.name}
                    type="button"
                    onClick={() => setRecommendation(rec.name)}
                    className={`flex items-center gap-2 p-3 border rounded-xl font-bold text-xs transition-all ${
                      isActive ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant bg-white hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">{rec.icon}</span>
                    <span>{rec.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Action Buttons (Bottom Docked) */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-outline-variant flex gap-3 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <button 
              type="button"
              onClick={() => {
                if (user.role === 'employer') {
                  navigate('/employer-portal/employer-dashboard-industrial-blueprints-refined');
                } else {
                  navigate('/student-portal/dashboard');
                }
              }}
              className="flex-1 border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-surface-container active:scale-95 transition-all text-xs"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-[2] bg-primary text-white font-bold py-3 rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all text-xs"
            >
              Submit Evaluation
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
