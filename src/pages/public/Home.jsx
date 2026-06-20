import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      
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
    <Link className="text-body-md font-bold text-primary transition-colors duration-150" to="/">Home</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/industry">Companies</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/about">About Us</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/contact">Contact</Link>
  </nav>
  
  {/* Drawer Action Buttons */}
  <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-outline-variant">
    <Link className="w-full text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
    <Link className="w-full text-center bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
  </div>
</div>

{/* TopAppBar */}
<header className="bg-surface z-30 sticky top-0 border-b border-outline-variant">
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
<Link className="text-body-md font-bold text-primary border-b-2 border-primary pb-1 transition-colors duration-150" to="/">Home</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/industry">Companies</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/about">About Us</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/contact">Contact</Link>
</nav>
<div className="hidden sm:flex items-center gap-3">
<Link className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
<Link className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
</div>
</div>
</header>
<main className="pb-24 md:pb-12">
{/* Hero Section */}
<section className="relative overflow-hidden bg-background py-16 lg:py-24 text-on-surface border-b border-outline-variant">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-fixed/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed/30 rounded-full blur-[100px] -ml-32 -mb-32"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col items-start text-left">
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg font-extrabold text-on-surface tracking-tight mb-4">
Find Diploma Jobs <br/>
<span className="text-secondary-container">Build Your Career</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
Connect with top companies hiring diploma students in Mechanical, Civil, Electrical, Computer and IT branches. Your engineering journey starts here.
</p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-start items-center">
<Link to="/public/find-diploma-jobs" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[22px]">search</span>
Find Jobs
</Link>
<Link to="/public/employer-register" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[22px]">group</span>
Hire Diploma Students
</Link>
</div>
</div>
<div className="lg:col-span-5 flex justify-center">
<div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
{/* Blue background circle */}
<div className="absolute w-[85%] h-[85%] rounded-full bg-primary overflow-hidden shadow-xl border-4 border-white">
{/* Student image */}
<img src="students_hero.png" alt="Diploma Students" className="w-full h-full object-cover object-top" />
</div>

{/* Floating Badge 1: Top Companies */}
<div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-outline-variant shadow-lg flex items-center gap-3 transition-transform hover:scale-105 duration-200">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>business_center</span>
</div>
<div className="flex flex-col text-left leading-tight">
<span className="text-xs font-bold text-on-surface">Top Companies</span>
<span className="text-[10px] font-semibold text-secondary-container">Hiring Now</span>
</div>
</div>

{/* Floating Badge 2: Verified Jobs */}
<div className="absolute top-10 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-outline-variant shadow-lg flex items-center gap-3 transition-transform hover:scale-105 duration-200">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed/40 flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
</div>
<div className="flex flex-col text-left leading-tight">
<span className="text-xs font-bold text-on-surface">Verified Jobs</span>
<span className="text-[10px] font-semibold text-on-tertiary-fixed-variant">100% Genuine</span>
</div>
</div>

{/* Floating Badge 3: Easy Apply */}
<div className="absolute bottom-12 -left-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-outline-variant shadow-lg flex items-center gap-3 transition-transform hover:scale-105 duration-200">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>edit_document</span>
</div>
<div className="flex flex-col text-left leading-tight">
<span className="text-xs font-bold text-on-surface">Easy Apply</span>
<span className="text-[10px] font-semibold text-on-surface-variant">One Click Apply</span>
</div>
</div>

{/* Floating Badge 4: Local Opportunities */}
<div className="absolute bottom-16 -right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-outline-variant shadow-lg flex items-center gap-3 transition-transform hover:scale-105 duration-200">
<div className="w-10 h-10 rounded-lg bg-secondary-container/10 flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>my_location</span>
</div>
<div className="flex flex-col text-left leading-tight">
<span className="text-xs font-bold text-on-surface">Local Opportunities</span>
<span className="text-[10px] font-semibold text-on-surface-variant">In Your District</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Stats Section */}
<section className="max-w-container-max mx-auto px-margin-mobile py-8 relative z-20">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary flex-shrink-0 animate-[pulse_3s_infinite]">
<span className="material-symbols-outlined text-[26px]">school</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-on-surface font-extrabold text-2xl">10,000+</span>
<span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mt-0.5">Students Placed</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">domain</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-on-surface font-extrabold text-2xl">500+</span>
<span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mt-0.5">Active Employers</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-on-tertiary-fixed-variant flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">work</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-on-surface font-extrabold text-2xl">2,500+</span>
<span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mt-0.5">Live Openings</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary-container flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">map</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-on-surface font-extrabold text-2xl">36</span>
<span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mt-0.5">Districts Covered</span>
</div>
</div>
</div>
</section>
{/* Latest Job Openings */}
<section className="py-16 bg-surface-container-low border-b border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-mobile">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
<div>
<h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface">Latest Job <span className="text-secondary-container">Openings</span></h3>
<p className="text-on-surface-variant mt-2">Apply to top companies and kickstart your career</p>
</div>
<Link to="/public/find-diploma-jobs" className="mt-4 md:mt-0 border-2 border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-xl font-bold text-body-md hover:scale-105 active:scale-95 transition-all shadow-sm">
View All Jobs
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Job Card 1 */}
<div className="bg-white p-6 rounded-2xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 flex-shrink-0 border border-outline-variant">
<span className="material-symbols-outlined text-primary text-2xl">architecture</span>
</div>
<div className="flex-grow text-left">
<h4 className="font-headline-md text-lg font-bold text-on-surface leading-snug">Production Engineer</h4>
<p className="text-on-surface-variant font-semibold text-sm">L&T Construction • Mumbai, MH</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="bg-primary-fixed/40 text-primary px-3 py-1 rounded-md text-xs font-bold">Mechanical</span>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-md text-xs font-bold">Full Time</span>
</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/60 pt-4 mt-2">
<span className="font-extrabold text-lg text-primary">₹3.5 - 5 LPA</span>
<Link to="/public/jobdetails?id=lt-production" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-sm">Apply Now</Link>
</div>
</div>

{/* Job Card 2 */}
<div className="bg-white p-6 rounded-2xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 flex-shrink-0 border border-outline-variant">
<span className="material-symbols-outlined text-primary text-2xl">engineering</span>
</div>
<div className="flex-grow text-left">
<h4 className="font-headline-md text-lg font-bold text-on-surface leading-snug">Junior Design Engineer</h4>
<p className="text-on-surface-variant font-semibold text-sm">TATA Motors • Pune, MH</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="bg-primary-fixed/40 text-primary px-3 py-1 rounded-md text-xs font-bold">Mechanical</span>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-md text-xs font-bold">Full Time</span>
</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/60 pt-4 mt-2">
<span className="font-extrabold text-lg text-primary">₹3 - 4.5 LPA</span>
<Link to="/public/jobdetails?id=tata-design" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-sm">Apply Now</Link>
</div>
</div>

{/* Job Card 3 */}
<div className="bg-white p-6 rounded-2xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 flex-shrink-0 border border-outline-variant">
<span className="material-symbols-outlined text-primary text-2xl">home_work</span>
</div>
<div className="flex-grow text-left">
<h4 className="font-headline-md text-lg font-bold text-on-surface leading-snug">Site Supervisor</h4>
<p className="text-on-surface-variant font-semibold text-sm">Shapoorji Pallonji • Nagpur, MH</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="bg-primary-fixed/40 text-primary px-3 py-1 rounded-md text-xs font-bold">Civil</span>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-md text-xs font-bold">Full Time</span>
</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/60 pt-4 mt-2">
<span className="font-extrabold text-lg text-primary">₹2.8 - 4 LPA</span>
<Link to="/public/jobdetails?id=shapoorji-civil" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-sm">Apply Now</Link>
</div>
</div>

{/* Job Card 4 */}
<div className="bg-white p-6 rounded-2xl border border-outline-variant hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 flex-shrink-0 border border-outline-variant">
<span className="material-symbols-outlined text-primary text-2xl">bolt</span>
</div>
<div className="flex-grow text-left">
<h4 className="font-headline-md text-lg font-bold text-on-surface leading-snug">Electrical Technician</h4>
<p className="text-on-surface-variant font-semibold text-sm">Siemens India • Aurangabad, MH</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="bg-primary-fixed/40 text-primary px-3 py-1 rounded-md text-xs font-bold">Electrical</span>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-md text-xs font-bold">Full Time</span>
</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/60 pt-4 mt-2">
<span className="font-extrabold text-lg text-primary">₹2.5 - 3.5 LPA</span>
<Link to="/public/jobdetails?id=siemens-electrical" className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-sm">Apply Now</Link>
</div>
</div>
</div>
</div>
</section>
{/* Popular Job Categories */}
<section className="py-16 bg-background border-b border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-mobile">
<div className="text-center mb-12">
<h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface">Popular Job <span className="text-secondary-container">Categories</span></h3>
<p className="text-on-surface-variant mt-2">Explore job opportunities based on your diploma branch</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
{/* Mechanical */}
<Link to="/public/find-diploma-jobs?branch=Mechanical" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="settings">settings</span>
</div>
<span className="font-bold text-on-surface text-lg">Mechanical</span>
<span className="text-on-surface-variant text-sm mt-1">520+ Jobs</span>
</Link>
{/* Civil */}
<Link to="/public/find-diploma-jobs?branch=Civil" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="apartment">apartment</span>
</div>
<span className="font-bold text-on-surface text-lg">Civil</span>
<span className="text-on-surface-variant text-sm mt-1">320+ Jobs</span>
</Link>
{/* Electrical */}
<Link to="/public/find-diploma-jobs?branch=Electrical" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="bolt">bolt</span>
</div>
<span className="font-bold text-on-surface text-lg">Electrical</span>
<span className="text-on-surface-variant text-sm mt-1">280+ Jobs</span>
</Link>
{/* Computer */}
<Link to="/public/find-diploma-jobs?branch=Computer" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="terminal">terminal</span>
</div>
<span className="font-bold text-on-surface text-lg">Computer</span>
<span className="text-on-surface-variant text-sm mt-1">680+ Jobs</span>
</Link>
{/* Electronics */}
<Link to="/public/find-diploma-jobs?branch=Electronics" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="memory">memory</span>
</div>
<span className="font-bold text-on-surface text-lg">Electronics</span>
<span className="text-on-surface-variant text-sm mt-1">260+ Jobs</span>
</Link>
{/* IT */}
<Link to="/public/find-diploma-jobs?branch=IT" className="group bg-white p-6 rounded-2xl border border-outline-variant flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="cloud">cloud</span>
</div>
<span className="font-bold text-on-surface text-lg">IT</span>
<span className="text-on-surface-variant text-sm mt-1">420+ Jobs</span>
</Link>
</div>
<div className="flex justify-center mt-10">
<Link to="/public/find-diploma-jobs" className="border-2 border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-xl font-bold text-body-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 justify-center w-fit shadow-sm">
View All Categories
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</section>
{/* Top Hiring Companies */}
<section className="py-16 bg-background border-b border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-mobile text-center">
<div className="mb-10">
<h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface">Top Hiring <span className="text-secondary-container">Companies</span></h3>
<p className="text-on-surface-variant mt-2">Leading companies trust MSBTEJobs to find skilled diploma students</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center">
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="L&T Construction" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFs7b87SClp0twyCqOcNg9ytADmF1QThGiVCfL5WonlPpGPffbnyYfU1ueHCvZ1hQEFhe1u1JrggW2JjhXAnkZMwwvCclS-9onIYygox4Kh4KVtIZ-yp53UhPZjupjamwQq0QFMaGRvhAhfszu2s85RR_6JC6iATn5Hzd2Y0FImiDYm_hIRdvB9mVUsf1tjwD46lkTzgX0PJP3xSSWjErf6rNblygHKYm7HsNi4Cg-wuStSBo1JVyUI4Priqk3f1y6mBONTaaYbg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="TATA Motors" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Siemens" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zylVWHQZ661v5PdBd0yWeDmfsnzlIpzv5RbG4lgGwq12N1pbbFBsgJ3rtdmfwmJ_D3UHtNjctmQLg0nqw5-jNPUAT1RtIJ-QY47JYksQsDLg4lBfCLIXlm8gy5Ab_UDAl09h21ugvS2ZoCthFMPNVfvn2db4Z3ioKiE53jMeD-nET5LjCGfaE4BHW1z8d1c34ImHxUW1GaWZOYq7djUjvy1FITyiq4QrOIXRzwv0jV6GHfYT3b0zXm9EJ26t6o0fGEieeGYXyU4"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Adani" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoqmpxDTQkGaGMN3vNXrkxlalYcCdGlKoU9Y5TFLDY2K8noVa7cHekMlHHhSBpQhdoDXckzRXtTYgEEtaIhy1AvbwDN6mYTNBmLXHJn1vzTceI1zSNy2U_zDeNOEzSc9qQUy31gm413Rj4rVgLEeIK_uCcxPiqHskOgRt7CXPMA6OMERC521pz8VMJGnXQAMgsR1bVdEtQrd_co3Ci_Zvjnffp8GfMIRs2QgMS5yHcgB-3Yzm9MXLnNuFygnNOdNYolyuYDaEvhKA"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Godrej" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BRoulY5Wcb7LD4ZhD5lNoEERr3KaaCBcbUyy2jsIe_4TagIol6AZCUOiohlN4CKTjPnDQdo8O4f9_-yCSPVGow8YZQTRUIZml5zGtCFPYVsC7znMqmaw88zgy97DthaNnjNsnCh-kvQCLLQXOg_9toBqP8ADHdiGLta-ZrCNW1PvDg1FvGcoB9DeJa5u0X-Hwu9znXFUlP7HsmMOe7TxK0Mt6QC9rguYpXOpeYBTRX6rNbsv6-S2QC87Km4zKLvZJ9eGOXqKYYY"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="TCS" className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Wipro" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo_2017.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Infosys" className="max-h-8 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Capgemini" className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Cognizant" className="max-h-8 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Cognizant_logo_2022.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<img alt="Accenture" className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"/>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<span className="font-extrabold text-lg text-primary tracking-tight uppercase">Mahindra</span>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<span className="font-extrabold text-lg text-outline tracking-tight uppercase">Kirloskar</span>
</div>
<div className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center justify-center h-20 transition-all hover:shadow-md cursor-pointer">
<span className="font-extrabold text-lg text-secondary tracking-tight uppercase">JSW</span>
</div>
</div>
</div>
</section>
{/* How It Works Section */}
<section className="py-20 bg-[#091E42] text-white">
<div className="max-w-container-max mx-auto px-margin-mobile">
<div className="text-center mb-16">
<h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-white">How It <span className="text-secondary-container">Works</span></h3>
<p className="text-slate-300 mt-2">Simple steps to your dream job</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
{/* For Students */}
<div>
<div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
<span className="material-symbols-outlined text-secondary-container text-3xl">school</span>
<h4 className="font-headline-md text-xl font-bold">For Students</h4>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative">
{/* Line behind (desktop only) */}
<div className="hidden sm:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-slate-600 z-0"></div>

{/* Step 1 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">1</div>
<h5 className="font-bold text-sm mb-1 text-white">Create Profile</h5>
<p className="text-slate-300 text-xs leading-normal">Build your profile and showcase your skills</p>
</div>
{/* Step 2 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">2</div>
<h5 className="font-bold text-sm mb-1 text-white">Search Jobs</h5>
<p className="text-slate-300 text-xs leading-normal">Find jobs that match your preferences</p>
</div>
{/* Step 3 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">3</div>
<h5 className="font-bold text-sm mb-1 text-white">Apply Easily</h5>
<p className="text-slate-300 text-xs leading-normal">Apply to multiple jobs with one click</p>
</div>
{/* Step 4 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">4</div>
<h5 className="font-bold text-sm mb-1 text-white">Get Hired</h5>
<p className="text-slate-300 text-xs leading-normal">Attend interviews and get your dream job</p>
</div>
</div>
</div>

{/* For Employers */}
<div>
<div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
<span className="material-symbols-outlined text-secondary-container text-3xl">business_center</span>
<h4 className="font-headline-md text-xl font-bold">For Employers</h4>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative">
{/* Line behind (desktop only) */}
<div className="hidden sm:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-slate-600 z-0"></div>

{/* Step 1 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">1</div>
<h5 className="font-bold text-sm mb-1 text-white">Post a Job</h5>
<p className="text-slate-300 text-xs leading-normal">Post jobs and add requirements</p>
</div>
{/* Step 2 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">2</div>
<h5 className="font-bold text-sm mb-1 text-white">Get Applications</h5>
<p className="text-slate-300 text-xs leading-normal">Receive applications from qualified candidates</p>
</div>
{/* Step 3 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">3</div>
<h5 className="font-bold text-sm mb-1 text-white">Review Candidates</h5>
<p className="text-slate-300 text-xs leading-normal">Shortlist and review the best candidates</p>
</div>
{/* Step 4 */}
<div className="flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full bg-white text-[#091E42] font-bold flex items-center justify-center border-4 border-slate-600 mb-4 text-lg">4</div>
<h5 className="font-bold text-sm mb-1 text-white">Hire Top Talent</h5>
<p className="text-slate-300 text-xs leading-normal">Connect with skilled diploma students</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CTA Banner */}
<section className="max-w-container-max mx-auto px-margin-mobile mb-20">
<div className="bg-surface border border-outline-variant rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
<div className="text-left max-w-2xl">
<h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-on-surface mb-2">Ready to accelerate your career?</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Join thousands of diploma students who found their dream job through MSBTEJobs.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-shrink-0">
<Link to="/public/create-account" className="bg-primary text-white hover:bg-primary/95 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-md text-center block sm:inline-block">Register as Student</Link>
<Link to="/public/employer-register" className="border-2 border-outline-variant hover:border-primary text-on-surface hover:text-primary bg-transparent px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all text-center block sm:inline-block">Register as Employer</Link>
</div>
</div>
</section>
</main>{/* Desktop Footer Info */}
<footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface">
<div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Logo and Social column */}
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
<p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
Connecting Maharashtra diploma students with high-impact career opportunities in industrial powerhouses.
</p>
<div className="flex gap-3 mt-2">
<a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
<span className="material-symbols-outlined text-lg">public</span>
</a>
<a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
<a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
<span className="material-symbols-outlined text-lg">link</span>
</a>
</div>
</div>

{/* For Students Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/about">How It Works</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Career Tips</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
</ul>
</div>

{/* For Employers Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/about">Platform Guide</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/contact">Support</Link></li>
</ul>
</div>

{/* Company Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/terms">Privacy Policy</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/terms">Terms &amp; Conditions</Link></li>
</ul>
</div>

{/* Support Column */}
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
<div className="flex items-start gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
<span className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</span>
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
