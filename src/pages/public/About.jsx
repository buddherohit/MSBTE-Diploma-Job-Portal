// MANUAL_JSX_FILE
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-background text-on-surface">
      {/* Mobile Drawer Toggle Checkbox */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Drawer Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm hidden peer-checked:block lg:hidden">
        <label htmlFor="mobile-menu-toggle" className="absolute inset-0 cursor-default"></label>
      </div>

      {/* Mobile Drawer Content */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 translate-x-full transition-transform duration-300 peer-checked:translate-x-0 lg:hidden">
        {/* Drawer Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="font-headline-md text-[16px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
              <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
            </div>
          </div>
          {/* Close button */}
          <label htmlFor="mobile-menu-toggle" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </label>
        </div>
        
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-5 py-8 text-left">
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/">Home</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/industry">Companies</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
          <Link className="text-body-md font-bold text-primary transition-colors duration-150" to="/public/about">About Us</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/contact">Contact</Link>
        </nav>
        
        {/* Drawer Action Buttons */}
        <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-outline-variant">
          <Link className="w-full text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
          <Link className="w-full text-center bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="bg-white z-30 sticky top-0 border-b border-outline-variant">
        <div className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-3">
            <label htmlFor="mobile-menu-toggle" className="material-symbols-outlined text-primary cursor-pointer lg:hidden text-2xl select-none" data-icon="menu">menu</label>
            <Link className="flex items-center gap-2 cursor-pointer" to="/">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/">Home</Link>
            <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
            <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/industry">Companies</Link>
            <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
            <Link className="text-body-md font-bold text-primary border-b-2 border-primary pb-1 transition-colors duration-150" to="/public/about">About Us</Link>
            <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/contact">Contact</Link>
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <Link className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
            <Link className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
        {/* Hero Section: Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center mb-24 text-left">
          <div>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm mb-4 inline-block">Industrial Blueprint Edition</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Bridging the Gap Between Talent & Industry.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              MahaDiploma Jobs is the dedicated recruitment ecosystem for Maharashtra's MSBTE students. We facilitate the direct pipeline from academic excellence to industrial prowess.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('our-philosophy').scrollIntoView({ behavior: 'smooth' })} 
                className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:shadow-lg transition-all"
              >
                Our Mission
              </button>
              <button 
                onClick={() => navigate('/public/find-diploma-jobs')} 
                className="border border-primary text-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:bg-primary-fixed transition-all"
              >
                View Vacancies
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" data-alt="A high-tech industrial manufacturing floor in Maharashtra with modern CNC machinery and clean, organized workspaces. The lighting is crisp and professional, highlighting a mix of mechanical engineering and digital technology. The color palette reflects industrial blues and metallic grays, creating a sense of institutional stability and ambitious technological progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb7IbS4qMDutzW3QR4yI2w1Ok8ysUcyB6wvZIxmCQD1giHSWBnHtRHxi5H17czTM0kBIadcP3X5RQ_zlzpYBBno8gAAplEacSmSm3GPdCQqgAwoZ7g3GT08TqZqqEDDlsAqLbxRdeseF5cl-bSNGxBZPOAofyzdhF01nHqAQOcSI4y-C62pVQPd1ras3XyUyZJAkhdhk5iFWlt2fHlE7cUQ_cHmet7TTpYr5StiW5R_doxfjJy3Nh1sjdS06R8Ru2gcjvDHLQzVWs"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </section>

        {/* Bento Grid: Our Philosophy */}
        <section id="our-philosophy" className="mb-24">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Engineered for Success</h2>
          <div className="grid grid-cols-12 gap-6">
            {/* Our Mission */}
            <div className="col-span-12 md:col-span-8 bg-white border border-outline-variant p-6 rounded-2xl flex flex-col justify-between text-left">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="rocket_launch">rocket_launch</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  To empower every diploma student in Maharashtra with immediate access to tier-1 industrial opportunities. We believe the technical hands that build our state deserve the most efficient pathways to their careers.
                </p>
              </div>
              <div className="mt-8 flex gap-2">
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Tech-Driven</span>
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Student-Centric</span>
              </div>
            </div>
            {/* Industrial Strength */}
            <div className="col-span-12 md:col-span-4 bg-primary text-white border-none p-6 rounded-2xl text-left">
              <span className="material-symbols-outlined text-4xl mb-4" data-icon="factory">factory</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Industrial Grade</h3>
              <p className="font-body-md text-body-md opacity-90">
                Built on the standards of MSBTE and the specific needs of Maharashtra's manufacturing hubs like Pune, Nashik, and Aurangabad.
              </p>
            </div>
            {/* Strategic Alliances */}
            <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-6 rounded-2xl text-left">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4" data-icon="handshake">handshake</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">350+ Partners</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                Direct tie-ups with major industrial players ensuring verified job listings.
              </p>
            </div>
            {/* Verified Talent */}
            <div className="col-span-12 md:col-span-8 bg-white border border-outline-variant p-6 rounded-2xl border-l-4 border-l-secondary text-left">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Verified Academic Credentials</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                    We integrate directly with academic records to ensure that every "Talent Pool" member is a genuine MSBTE diploma holder with verified skills.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center bg-surface-container-low p-4 rounded-xl min-w-[120px]">
                  <span className="font-display-lg text-3xl font-bold text-secondary">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Verification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-24 bg-surface-container rounded-3xl p-8 md:p-12 text-left">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">The Recruitment Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Students */}
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined">school</span>
                For Diploma Students
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Create Industrial Profile</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Upload your MSBTE credentials and list technical skills like AutoCAD, PLC, or Site Supervision.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Explore Niche Openings</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Filter by branch (Civil, Mechanical, EE) and location across Maharashtra's industrial zones.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">One-Click Apply</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Send your verified profile directly to HR managers and schedule interviews.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* For Employers */}
            <div>
              <h3 className="font-headline-md text-headline-md text-secondary mb-8 flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined">business_center</span>
                For Industrial Partners
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Post Requirements</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Define technical requirements and preferred MSBTE colleges or specific diploma branches.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Access Talent Pool</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Browse a pre-screened database of fresh diploma graduates and experienced supervisors.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Hire with Confidence</h4>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Our automated screening ensures only candidates matching your technical criteria reach you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border border-outline-variant shadow-sm">
              <span className="font-display-lg text-4xl font-extrabold text-primary block">12k+</span>
              <span className="font-label-md text-label-md text-on-surface-variant font-bold mt-2 block">Active Students</span>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border border-outline-variant shadow-sm">
              <span className="font-display-lg text-4xl font-extrabold text-secondary block">450</span>
              <span className="font-label-md text-label-md text-on-surface-variant font-bold mt-2 block">Industries</span>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border border-outline-variant shadow-sm">
              <span className="font-display-lg text-4xl font-extrabold text-tertiary block">8.5k</span>
              <span className="font-label-md text-label-md text-on-surface-variant font-bold mt-2 block">Placements</span>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border border-outline-variant shadow-sm">
              <span className="font-display-lg text-4xl font-extrabold text-primary block">32</span>
              <span className="font-label-md text-label-md text-on-surface-variant font-bold mt-2 block">Cities Covered</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary text-white rounded-[2rem] p-12 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container opacity-30 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display-lg text-3xl font-extrabold mb-6">Join the Platform</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-90">Whether you are a student looking for your first industrial break or an employer seeking technical excellence, the future starts here.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/public/student-login?tab=student')} 
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all active:scale-[0.98]"
              >
                I am a Student
              </button>
              <button 
                onClick={() => navigate('/public/student-login?tab=employer')} 
                className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all active:scale-[0.98]"
              >
                I am an Employer
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Info */}
      <footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed font-semibold">
              Connecting Maharashtra diploma students with high-impact career opportunities in industrial powerhouses.
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Post a Job</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/terms">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-2">Support</h5>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">call</span>
              <span className="font-semibold">+91 12345 67890</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">mail</span>
              <span className="font-semibold break-all">support@msbtejobs.in</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
          © 2024 MSBTEJobs Diploma Jobs Portal. Built for the future of Maharashtra's Industry.
        </div>
      </footer>
    </div>
  );
}
