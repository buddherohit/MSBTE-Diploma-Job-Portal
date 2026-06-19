// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formSubject, setFormSubject] = useState("Industrial Partnership Inquiry");

  const handleRaiseTicket = (e) => {
    e.preventDefault();
    setFormSubject("Technical Issue with Portal");
    setActiveAccordion(null);

    const form = document.getElementById("contactForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const messageField = document.getElementById("message");
        if (messageField) {
          messageField.focus();
          messageField.placeholder = "Please describe the technical issue you are experiencing...";
        }
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      e.target.reset();
    }, 1500);
  };

  const accordionData = [
    {
      title: "Employer Verification Guide",
      icon: "verified_user",
      content: (
        <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed text-left">
          <p className="font-semibold text-primary">Required Verification Documents:</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
            <li>GST Registration Certificate</li>
            <li>Company PAN Card</li>
            <li>Certificate of Incorporation / Registration</li>
          </ul>
          <p className="mt-2 text-xs">
            <span className="font-semibold">Verification Process:</span> Upload these documents during registration. Our admin panel audits credentials within <span className="font-semibold text-secondary">24-48 hours</span> before granting unrestricted hiring access.
          </p>
          <Link to="/public/verification-guide" className="inline-flex items-center gap-1 text-primary hover:underline font-bold mt-1 text-xs">
            View Verification Guide
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </Link>
        </div>
      )
    },
    {
      title: "Student Job Portal FAQ",
      icon: "help_center",
      content: (
        <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed text-left">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-primary text-xs">How to apply for jobs?</p>
              <p className="text-xs">Navigate to "Find Jobs", click a job listing, and hit the "Apply Now" button.</p>
            </div>
            <div>
              <p className="font-semibold text-primary text-xs">How to update profile & upload resume?</p>
              <p className="text-xs">Go to your Student Dashboard, select "Profile Settings" or "Resume Builder" to edit details and upload a PDF resume.</p>
            </div>
            <div>
              <p className="font-semibold text-primary text-xs">How to track application status?</p>
              <p className="text-xs">Your dashboard's "Applied Jobs" tab lists real-time status updates (Applied, Shortlisted, Interview Scheduled, Rejected).</p>
            </div>
            <div>
              <p className="font-semibold text-primary text-xs">How to contact support?</p>
              <p className="text-xs">Raise a ticket using the Technical Support section below or use the form on the right.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technical Support Ticket",
      icon: "support_agent",
      content: (
        <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed text-left">
          <p className="text-xs">Experiencing portal issues? We can help resolve:</p>
          <ul className="list-disc list-inside space-y-0.5 text-xs pl-1">
            <li>Login or account activation issues</li>
            <li>Employer registration anomalies</li>
            <li>Resume upload limits or file errors</li>
            <li>Application form submission errors</li>
          </ul>
          <div className="pt-2">
            <a
              href="#contactForm"
              onClick={handleRaiseTicket}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary/95 transition-all text-xs shadow-sm"
            >
              Raise Support Ticket
              <span className="material-symbols-outlined text-[16px]">send</span>
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Resume Builder Help",
      icon: "description",
      content: (
        <div className="space-y-2 text-sm text-on-surface-variant leading-relaxed text-left">
          <p className="text-xs">Our built-in Resume Builder assists in compiling professional portfolios:</p>
          <ul className="list-disc list-inside space-y-1 text-xs pl-1">
            <li>Step-by-step detail creation (Education, Projects, Experience)</li>
            <li>Instant template selection matching industrial styles</li>
            <li>One-click export as PDF for download or job applications</li>
          </ul>
        </div>
      )
    },
    {
      title: "Account Recovery",
      icon: "lock_reset",
      content: (
        <div className="space-y-2 text-sm text-on-surface-variant leading-relaxed text-left">
          <p className="font-semibold text-primary text-xs">Need access back?</p>
          <ul className="list-disc list-inside space-y-1 text-xs pl-1">
            <li><span className="font-medium">Forgot password:</span> Click "Forgot Password" on login pages to get a reset link via email.</li>
            <li><span className="font-medium">Email verification:</span> Enter the code sent to your registered email to verify.</li>
            <li><span className="font-medium">Account reactivation:</span> Contact our helpdesk if your account was deactivated.</li>
          </ul>
        </div>
      )
    }
  ];
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
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/">Home</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/industry">Companies</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
    <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/about">About Us</Link>
    <Link className="text-body-md font-bold text-primary transition-colors duration-150" to="/public/contact">Contact</Link>
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
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/">Home</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/industry">Companies</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
<Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary border-b-2 border-transparent pb-1 hover:border-primary/60 transition-colors duration-150" to="/public/about">About Us</Link>
<Link className="text-body-md font-bold text-primary border-b-2 border-primary pb-1 transition-colors duration-150" to="/public/contact">Contact</Link>
</nav>
<div className="hidden sm:flex items-center gap-3">
<Link className="border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
<Link className="bg-primary hover:bg-primary/95 text-white px-5 py-2 rounded-lg font-bold text-body-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
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
    {accordionData.map((item, index) => {
      const isOpen = activeAccordion === index;
      return (
        <div key={index} className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all duration-200">
          <button
            type="button"
            onClick={() => setActiveAccordion(isOpen ? null : index)}
            className="w-full flex items-center justify-between p-3 text-left font-semibold text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-inset"
            aria-expanded={isOpen}
          >
            <span className="font-label-md text-label-md text-on-surface font-semibold">{item.title}</span>
            <span className={`material-symbols-outlined text-primary transition-transform duration-300 select-none chevron-icon ${isOpen ? 'rotate-90' : ''}`}>
              chevron_right
            </span>
          </button>
          <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="p-4 pt-0 border-t border-outline-variant/20 bg-surface-container-lowest/50">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
</div>
{/* Right: Contact Form */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6">Send us a message</h2>
<form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
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
<select
  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
  id="subject"
  value={formSubject}
  onChange={(e) => setFormSubject(e.target.value)}
>
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
<button
  className="w-full bg-secondary-container text-on-secondary-container font-headline-md text-headline-md py-4 rounded-xl hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <span>Sending Inquiry...</span>
  ) : (
    <>
      <span>Submit Inquiry</span>
      <span className="material-symbols-outlined" data-icon="send">send</span>
    </>
  )}
</button>
</form>
</div>
</div>
</div>
{/* Real Location Map Section */}
<div className="mt-stack-lg rounded-xl overflow-hidden border border-outline-variant h-96 relative group bg-white shadow-sm">
  <iframe
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.812239634907!2d72.85077277579621!3d19.06099195279442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c919df5b1fd3%3A0xebe7f677fb6a1883!2sMaharashtra%20State%20Board%20Of%20Technical%20Education%20(MSBTE)!5e0!3m2!1sen!2sin!4v1718700000000!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="absolute bottom-6 left-6 bg-surface-container-lowest p-4 rounded-lg shadow-lg border border-outline-variant max-w-xs z-10">
    <h4 className="font-label-md text-label-md text-primary font-bold">MSBTE Office Location</h4>
    <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 text-xs leading-relaxed">
      Visit us for official verification and partnership discussions during business hours (10 AM - 5:30 PM).
    </p>
    <a
      className="mt-3 text-primary font-bold text-label-md flex items-center gap-1 hover:underline text-xs"
      href="https://maps.google.com/?q=Maharashtra+State+Board+of+Technical+Education+Mumbai"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Directions
      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
    </a>
  </div>
</div>

{/* Success Modal Popup */}
{showSuccessModal && (
  <div id="success-modal" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-outline-variant space-y-6 text-center animate-in zoom-in-95 duration-200">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-on-surface">Message Sent!</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Thank you for reaching out. Your inquiry has been sent successfully. Our industrial relations team will get back to you shortly.
        </p>
      </div>
      <button
        onClick={() => setShowSuccessModal(false)}
        className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all active:scale-[0.98]"
      >
        Close Window
      </button>
    </div>
  </div>
)}
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
<li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">How It Works</a></li>
<li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Career Tips</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
</ul>
</div>

{/* For Employers Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
<li><Link className="hover:text-primary transition-colors" to="/public/student-login">Employer Login</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
</ul>
</div>

{/* Company Column */}
<div className="md:col-span-2">
<h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
<ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
<li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
<li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
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
