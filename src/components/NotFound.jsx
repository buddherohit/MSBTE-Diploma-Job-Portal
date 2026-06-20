import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-extrabold text-xl text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
            <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase">Diploma Jobs Portal</span>
          </div>
        </Link>

        {/* 404 Number */}
        <div className="relative mb-6">
          <p className="text-[9rem] font-black text-primary/10 leading-none select-none">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>search_off</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-on-surface mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Go Back
          </button>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/95 px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <span className="material-symbols-outlined">home</span>
            Home Page
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <p className="text-on-surface-variant text-sm font-semibold mb-4">Or try one of these:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/public/find-diploma-jobs" className="text-primary text-sm font-bold hover:underline px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">Find Jobs</Link>
            <Link to="/public/student-login" className="text-primary text-sm font-bold hover:underline px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">Student Login</Link>
            <Link to="/public/student-login?tab=employer" className="text-primary text-sm font-bold hover:underline px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">Employer Login</Link>
            <Link to="/public/contact" className="text-primary text-sm font-bold hover:underline px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
