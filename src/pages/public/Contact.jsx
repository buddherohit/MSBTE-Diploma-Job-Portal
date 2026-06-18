import React from 'react';

export default function Contact() {
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
    <a className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" href="/">Home</a>
    <a className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" href="/public/find-diploma-jobs">Find Jobs</a>
    <a className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" href="/public/industry">Companies</a>
    <a className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" href="/public/find-diploma-jobs?type=internship">Internships</a>
    <a className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" href="/public/about">About Us</a>
    <a className="text-body-md font-bold text-primary transition-colors duration-150" href="/public/contact">Contact</a>
  </nav>
  
  {/* Drawer Action Buttons */}
  <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-outline-variant">
    <a className="w-full text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" href="/public/student-login">Login</a>
    <a className="w-full text-center bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-md" href="/public/create-account">Register</a>
  </div>
</div>

{/* TopAppBar */}
<header className="bg-surface z-30 sticky top-0 border-b border-outline-variant">
<div className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-20">
<div className="flex items-center gap-3">
<label htmlFor="mobile-menu-toggle" className="material-symbols-outlined text-primary cursor-pointer lg:hidden text-2xl select-none" data-icon="menu">menu</label>
<a className="flex items-center gap-2 cursor-pointer" href="/">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
<span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
</div>
</a>
</div>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" href="/">Home</a>
<a className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" href="/public/find-diploma-jobs">Find Jobs</a>
<a className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" href="/public/industry">Companies</a>
<a className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" href="/public/find-diploma-jobs?type=internship">Internships</a>
<a className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" href="/public/about">About Us</a>
<a className="text-body-md font-bold text-primary border-b-2 border-primary pb-1 transition-colors duration-150" href="/public/contact">Contact</a>
</nav>
<div className="hidden sm:flex items-center gap-3">
<a className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" href="/public/student-login">Login</a>
<a className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-md" href="/public/create-account">Register</a>
</div>
</div>
</header>
<main className="flex-grow">
{/* Hero Section */}
<section className="bg-surface-container-low py-stack-lg">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Contact Our Industrial Relations Team</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Connecting MSBTE diploma talent with Maharashtra's leading industries. We are here to support your recruitment and career journey.</p>
</div>
</section>
{/* Contact Content */}
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
{/* Left: Information Cards (Bento Style) */}
<div className="lg:col-span-5 grid grid-cols-1 gap-stack-md">
{/* Official Address Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-primary-container p-3 rounded-lg">
<span className="material-symbols-outlined text-on-primary" data-icon="location_on">location_on</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Main Headquarters</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                    Maharashtra State Board of Technical Education (MSBTE)<br/>
                                    49, Kherwadi, Bandra (E), Mumbai - 400 051
                                </p>
</div>
</div>
</div>
{/* Direct Support Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-tertiary-container p-3 rounded-lg">
<span className="material-symbols-outlined text-on-tertiary" data-icon="contact_support">contact_support</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Helpdesk & Support</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-1">Email: <a className="text-primary font-semibold" href="mailto:support@msbte-jobs.gov.in">support@msbte-jobs.gov.in</a></p>
<p className="font-body-md text-body-md text-on-surface-variant">Phone: +91 22 2647 1255 / 2647 7208</p>
</div>
</div>
</div>
{/* FAQ Quick Links */}
<div className="bg-secondary-container bg-opacity-10 border border-secondary-container rounded-xl p-6">
<h3 className="font-headline-md text-headline-md text-on-secondary-container mb-4">Quick Support</h3>
<div className="space-y-3">
<a className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg hover:shadow-md transition-shadow group" href="#">
<span className="font-label-md text-label-md text-on-surface">Employer Verification Guide</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
<a className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg hover:shadow-md transition-shadow group" href="#">
<span className="font-label-md text-label-md text-on-surface">Student Job Portal FAQ</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
<a className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg hover:shadow-md transition-shadow group" href="#">
<span className="font-label-md text-label-md text-on-surface">Technical Support Ticket</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</div>
{/* Right: Contact Form */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6">Send us a message</h2>
<form className="space-y-6" id="contactForm" onsubmit="event.preventDefault(); const btn = this.querySelector('button[type=submit]'); btn.disabled = true; btn.innerHTML = '<span>Sending Inquiry...</span>'; setTimeout(() => { btn.innerHTML = '<span className=\'material-symbols-outlined\'>check_circle</span> Inquiry Received'; btn.classList.replace('bg-secondary-container', 'bg-tertiary-container'); btn.classList.replace('text-on-secondary-container', 'text-on-tertiary'); this.reset(); }, 1500);">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="name" placeholder="Enter your full name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Work Email</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="email" placeholder="name@organization.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject">Subject</label>
<select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="subject">
<option>Industrial Partnership Inquiry</option>
<option>Technical Issue with Portal</option>
<option>Job Verification Request</option>
<option>Candidate Shortlisting Support</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Message</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="message" placeholder="How can our industrial relations team assist you?" required="" rows="5"></textarea>
</div>
<button className="w-full bg-secondary-container text-on-secondary-container font-headline-md text-headline-md py-4 rounded-xl hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-2" type="submit">
<span>Submit Inquiry</span>
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</form>
</div>
</div>
</div>
{/* Map Placeholder Section */}
<div className="mt-stack-lg rounded-xl overflow-hidden border border-outline-variant h-96 relative group">
<div className="absolute inset-0 bg-surface-container-highest animate-pulse" id="map-loading"></div>
<img className="w-full h-full object-cover" data-alt="A clean, professional 3D satellite map visualization of Mumbai, Maharashtra. The image shows the Bandra Kherwadi area with subtle industrial blue and white accents, maintaining a high-contrast corporate aesthetic. The lighting is bright and modern, emphasizing the strategic urban location of the headquarters. The mood is authoritative and structured, reflecting the official nature of the MSBTE institution." data-location="Mumbai, India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdN39QX_hxa_1e1_qtq-NxaCYzjpZn_JTSgFWlHQiQlGqATZoAXomHKxLf7fDzugMSTvO9mUUqR3_O-s6YQx7lgLwBMEf15ZSl2jvKrN5iOeW1K4YAmKqEOaT2NX0w_VomZYt74-4ph2wVC9svMVIdXJfHFcLr29l9knbSUI4rm9EU5BIDjd7cLB4FxWh8s8XCO68iJ-8erYn2EKmkaaLJMMe3R5GMEGX1OiGCZpQLlbCcecsrNcYamVeFd-eFhHFNSq0WtQyfXD0"/>
<div className="absolute bottom-6 left-6 bg-surface-container-lowest p-4 rounded-lg shadow-lg border border-outline-variant max-w-xs">
<h4 className="font-label-md text-label-md text-primary font-bold">MSBTE Office Location</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Visit us for official verification and partnership discussions during business hours (10 AM - 5:30 PM).</p>
<button className="mt-3 text-primary font-bold text-label-md flex items-center gap-1 hover:underline">
                        Get Directions
                        <span className="material-symbols-outlined text-[18px]" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
</div>
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
<li><a className="hover:text-primary transition-colors" href="/public/find-diploma-jobs">Find Jobs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-primary transition-colors" href="/student-portal/dashboard">Career Tips</a></li>
<li><a className="hover:text-primary transition-colors" href="/public/student-login">Student Login</a></li>
</ul>
</div>

{/* For Employers Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><a className="hover:text-primary transition-colors" href="/public/employer-register">Post a Job</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
<li><a className="hover:text-primary transition-colors" href="/public/student-login">Employer Login</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
</ul>
</div>

{/* Company Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><a className="hover:text-primary transition-colors" href="/public/about">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="/public/contact">Contact Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Terms & Conditions</a></li>
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
