import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsPrivacy() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background text-on-background">
      
      {/* Top Navigation */}
      <header className="sticky top-0 w-full h-20 flex items-center justify-between px-margin-mobile bg-surface shadow-sm border-b border-outline-variant z-50">
        <Link className="flex items-center gap-2 cursor-pointer" to="/">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
            <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-sm" to="/public/student-login">Login</Link>
          <Link className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md" to="/public/create-account">Register</Link>
        </div>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto px-margin-mobile py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Terms of Service & Privacy Policy</h1>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm md:text-base">Official regulations and data management policy statements for MahaDiploma Jobs Recruitment Portal.</p>
        </div>

        {/* Quick Navigation tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <a href="#terms" className="bg-primary/10 text-primary font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-primary/20 transition-colors">Terms of Service</a>
          <a href="#privacy" className="bg-secondary-container bg-opacity-10 text-secondary border border-secondary-container/20 font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-secondary/10 transition-colors">Privacy Policy</a>
        </div>

        <div className="space-y-12">
          {/* Terms of Service Card */}
          <section id="terms" className="bg-white rounded-2xl border border-outline-variant p-6 md:p-8 shadow-sm scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">gavel</span>
              Terms of Service
            </h2>
            <div className="space-y-6 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
              <div>
                <h3 className="font-bold text-on-surface mb-2">1. Acceptance of Terms</h3>
                <p>By registering, accessing, or using the MahaDiploma Jobs Recruitment Portal, you represent that you are a genuine MSBTE diploma student or a legally registered corporate entity/employer. You agree to be bound by these official terms.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">2. Account Creation & Security</h3>
                <p>Users must provide accurate, verified information during sign-up. Students permit the platform to cross-verify academic details with the MSBTE official archives. Employers must authorize verification documents including GSTIN, Corporate PAN, or Registration Certificates.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">3. Placement & Hiring Rules</h3>
                <p>This portal acts as an industrial bridge. While MSBTE facilitates direct candidate-employer interactions, it does not guarantee placement. Employers are prohibited from requesting any form of application fee or deposit from technical graduates.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">4. Profile Integrity</h3>
                <p>Profiles found conveying false credentials, duplicate accounts, or fraudulent employment schemes will be suspended immediately without technical help desk notice.</p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Card */}
          <section id="privacy" className="bg-white rounded-2xl border border-outline-variant p-6 md:p-8 shadow-sm scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
              Privacy Policy
            </h2>
            <div className="space-y-6 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
              <div>
                <h3 className="font-bold text-on-surface mb-2">1. Data Collection</h3>
                <p>We collect essential academic, technical, and corporate metadata to provide secure recruitment pipelines. This includes candidate profiles, branch specializations, resumes, corporate contact IDs, and government-issued registration records.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">2. Sharing with Industrial Partners</h3>
                <p>Student profile details and uploaded resumes are securely shared with audited, legally-approved employers inside Maharashtra's industrial zones (MIDC hubs) for recruitment purposes only.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">3. Cookie & Analytical Storage</h3>
                <p>We use session cookies to secure user dashboards and track recruitment portal usage performance to optimize speeds and platform reliability.</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">4. Data Deletion Requests</h3>
                <p>Students and employers can request absolute profile inactivation and database record removal by raising a technical support inquiry in the Help Center.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-outline-variant bg-white text-on-surface mt-12 text-center">
        <div className="text-xs text-on-surface-variant font-semibold">
          © 2024 MSBTEJobs Diploma Jobs Portal. Built for the future of Maharashtra's Industry.
        </div>
      </footer>
    </div>
  );
}
