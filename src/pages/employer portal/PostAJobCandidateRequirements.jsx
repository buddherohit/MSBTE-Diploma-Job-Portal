import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostAJobCandidateRequirements() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/employer-portal/post-a-job---employer-portal');
  }, [navigate]);
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center font-bold">
      Redirecting to job posting wizard...
    </div>
  );
}
