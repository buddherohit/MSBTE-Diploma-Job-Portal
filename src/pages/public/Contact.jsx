import React from 'react';
import Header from '../../components/Header';

export default function Contact() {
  return (
    <div className="w-full min-h-screen">
      <Header activePage="contact" />

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
<form className="space-y-6" id="contactForm">
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
</main>
{/* Footer */}
<footer className="bg-inverse-surface dark:bg-surface-container-lowest border-t border-outline w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md px-gutter py-stack-lg max-w-container-max mx-auto">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-surface-container-lowest" data-icon="architecture">architecture</span>
<span className="font-headline-md text-headline-md text-surface-container-lowest">MSBTE Portal</span>
</div>
<p className="font-label-md text-label-md text-surface-variant opacity-80 max-w-sm">
                    Empowering the technical workforce of Maharashtra through direct industrial collaboration and high-quality diploma recruitment.
                </p>
<p className="font-label-md text-label-md text-on-primary-fixed dark:text-on-primary-fixed-variant">
                    © 2024 MSBTE Diploma Recruitment Portal. Industrial Blueprint Edition.
                </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-3">
<h4 className="font-label-md text-label-md text-surface-container-lowest uppercase tracking-wider">Resources</h4>
<ul className="space-y-2">
<li><a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Privacy Policy</a></li>
<li><a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="font-label-md text-label-md text-surface-container-lowest uppercase tracking-wider">Support</h4>
<ul className="space-y-2">
<li><a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Employer FAQ</a></li>
<li><a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Student Support</a></li>
</ul>
</div>
</div>
</div>
</footer>
{/* BottomNavBar (Mobile Only) */}
<nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant dark:border-outline shadow-lg flex justify-around items-center py-2 px-4">
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">Talent</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Pricing</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: '\'FILL\' 1' }}>person</span>
<span className="font-label-sm text-label-sm">Account</span>
</div>
</nav>


    </div>
  );
}
