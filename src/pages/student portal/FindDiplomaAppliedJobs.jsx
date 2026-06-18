import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FindDiplomaAppliedJobs() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/public/find-diploma-jobs');
  }, [navigate]);
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center font-bold">
      Redirecting to job search...
    </div>
  );
}
