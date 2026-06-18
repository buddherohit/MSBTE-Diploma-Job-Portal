// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default function CompanyProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background">
      <Header activePage="companies" />

      <main className="pb-24 md:pb-8">
{/* Brand Hero Section */}
<section className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
<img alt="Industrial Manufacturing Facility" className="w-full h-full object-cover" data-alt="An expansive, high-tech industrial manufacturing facility at dawn, with golden morning light filtering through high windows. Massive steel structures, gleaming piping systems, and advanced machinery are visible in the background. The scene is shot with a cinematic wide-angle lens, emphasizing scale, precision, and the clean, blue-and-steel aesthetic of modern heavy industry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLobX-ZWTEL8Lq48MphMEvqDfO4s6z8FzmgBdpkECBuul5uqPvJCxC66hKQzP6w15idvsGdf-g-em_QOa09E3BTQcd3OXNp8Rn0TqoVtmSv5YWgCLDAJwhavEynRJ0C-ecMbzge0jT87LRCwghog-jzWuwPfBIxyGfnbJXWiEum1N-sJxlPgBkhpMFJN1qxThFyuVFO0i_kbRrpECwgWlBxb-iOAvR1lhJpwipxPeW8qQ59CUWc1eoMST0FFEi9vXMr68hRI1D_Jg"/>
<div className="absolute bottom-0 left-0 w-full z-20 p-margin-mobile md:p-gutter">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-end gap-6">
{/* Logo Container */}
<div className="relative group">
<div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border border-outline-variant overflow-hidden">
<img alt="Thermax Logo" className="w-full h-full object-contain" data-alt="A professional, minimalist company logo for a global industrial leader, presented on a clean white square background. The logo features abstract geometric shapes in Maharashtra blue and sharp action orange, symbolizing energy, sustainability, and mechanical precision. The design is bold, corporate, and modern, conveying institutional stability and innovative power." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALzA2b87tOrdglue6dxJPhf5U5M51w52ReeYwrI57TxliB5DPsKmRFx03nSWOaOeNBQxa6dFdLvRZfWtglQUEgLR3w5d15EUIAQ9E7YrB0tw8JyaExefpUMU8v99sfVmNcPm1T2nxfNcQmD6F6uxYH-GHMBKVXz1Y3ndSPxfHAh2iYcbM9Tg5YjrAx01evEYy_IwNi_FbBTPKJjJFZb8WD90xYuOAxR3lfIZHbkeL9PeOK-9Lmb3rQC96C2QJVdUpVN1B0KLudrak"/>
</div>
<div className="absolute -top-2 -right-2 bg-secondary text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
<span className="font-label-sm text-label-sm">Verified</span>
</div>
</div>
<div className="flex-grow">
<h2 className="font-headline-lg text-white mb-2 font-display-lg text-display-lg md:text-display-lg leading-tight">Thermax Limited</h2>
<div className="flex flex-wrap gap-4 text-white/90">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">factory</span>
<span className="font-body-md text-body-md">Energy & Environment Solutions</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-body-md text-body-md">Pune, Maharashtra</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">groups</span>
<span className="font-body-md text-body-md">5000+ Employees</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button 
  onClick={() => setIsFollowing(!isFollowing)}
  className={`px-6 py-3 font-bold text-label-md rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all duration-200 ${
    isFollowing 
      ? 'bg-[#003d27] text-white' 
      : 'bg-secondary-container text-on-secondary-container'
  }`}
>
  {isFollowing ? 'Following' : 'Follow Company'}
</button>
<button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-label-md text-label-md rounded-lg hover:bg-white/30 transition-all">
                            Share Profile
                        </button>
</div>
</div>
</div>
</section>
{/* Main Content Area */}
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: About & Culture */}
<div className="md:col-span-8 space-y-stack-lg">
{/* About Us Section (Bento Style) */}
<div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant shadow-sm">
<h3 className="font-headline-md text-headline-md text-primary mb-4 text-left">About the Company</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-left">
                            Thermax Limited is an Indian conglomerate involved in energy and environment. Thermax's business portfolio includes products for heating, cooling, water and waste management, and air pollution control. We provide sustainable solutions in energy and environment that help industries become more resource-efficient. Our commitment to MSBTE diploma graduates stems from our belief in the practical excellence and technical rigor of Maharashtra's technical education.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-primary font-display-lg text-headline-lg">50+</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Countries</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-secondary font-display-lg text-headline-lg">1966</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Founded</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-primary font-display-lg text-headline-lg">12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Manufacturing Sites</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-secondary font-display-lg text-headline-lg">BSE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Publicly Traded</span>
</div>
</div>
</div>
{/* Company Culture Asymmetric Layout */}
<div className="space-y-4">
<h3 className="font-headline-md text-headline-md text-primary px-2 text-left">Work Culture & Facilities</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[400px]">
<div className="col-span-1 row-span-2 rounded-xl overflow-hidden group">
<img alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A dynamic action shot of diverse industrial engineers in white hard hats and high-visibility vests collaborating over a digital blueprint in a modern, brightly lit production hall. The background shows blurred manufacturing equipment and a professional industrial atmosphere. The style is crisp and editorial, focusing on teamwork, technical expertise, and a positive, innovative workplace culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdgjYxgsLTvZSEr9453F6qvQkVimXqVME-IEWIRVanfWytw_XlOAqrD9ec5qnUNd1dJLbOg1SKxvr1z94Qa8wgYP5fqc8QiBGSpbSzmrPy_3fNG41DLwThg5BK7My6YrQlf8mWy7zSn0a62wuNkeSyoGfDBdVgilYbChpRB9eTOm3qTF6ZVEZFGExTe6Ha0CK8KM9H4HlQ3N9Skpm6bXcyARSbMnN6SHJ8LDptOeA3qtE-RXaXXVO7fQlF8FVTcZtwJiS2zng1ZD0"/>
</div>
<div className="col-span-1 rounded-xl overflow-hidden group">
<img alt="Research Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean, state-of-the-art industrial research laboratory with specialized scientific equipment and technical workstations. The room is bathed in cool blue and white tones, highlighting a high-tech, clinical environment. A technician in a lab coat is visible in the distance, emphasizing a culture of precision, research, and scientific advancement in manufacturing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQiZjNZXPv98nsBD5dqKWOZUlxVwIsOz6A5VwbkEInwvqCYVVlwrFsILYFH6-mPHnSgYz1BZGyp-6lMfFUrhi0BDjjpG-OlAPUQ5xbJNkgJ2nXyDmKE3EdRDQdEQBYeFoaOKtcbFyUQhDQH9W7jJBNNdNqmu1jjJJOwstfPRwXTzxq0XRYNy6IVUDRacNyzfFBMw9m7NKIdfBlXEAW8kbdr670rvpUw6gvekIhtx5-NCiU9AKscOuAOk5zrV4uVuXRynBROGltMw"/>
</div>
<div className="col-span-1 rounded-xl overflow-hidden group">
<img alt="Safety Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A focused workshop setting where young technical trainees are being instructed by a senior engineer on a sophisticated industrial control panel. The scene is warmly lit, suggesting a supportive and educational mentorship environment. The focus is on technical skill-building and hands-on learning, showcasing the company's commitment to developing young diploma talent." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmY413_yze6Hn9OXBJMTo-WYGMzHG_HHWHv0avGlr1LI5sgS0_VPJF8xZ3c958EtTtDfz9V-Kvz_VNL_fx8np2cKmIQhd8G1Ly5BB9FvO5E9xLCW4Z94lmP_V5MTA08XX4BiRurmF2n7GWituOcOTrd7LMECnHnGV-4-LO9c-CwM8Nu7z9WLxngxIix9H-XCTc_vk1G1ek0hVDIKLA_v7-TMzwE05bw54sRiJ5avTHZ6DxLfbStBxjnrygHT9GgfZVVGG66wO7HJA"/>
</div>
<div className="col-span-2 rounded-xl overflow-hidden group">
<img alt="Project Site" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A wide, panoramic view of a massive industrial project site under a clear blue sky, showing completed boilers and cooling towers. The structures are clean, well-maintained, and represent the monumental scale of the company's projects. The photography is professional and architectural, emphasizing sustainability and industrial achievement with high contrast and sharp details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuBm33davtV5j4BhVJ8xFqM3L-G0dVfYqIwwcp-5RQfViBFXehBPiqh0mbvJeGp89zTwLMWuQfI7J2Te7u7y0PV3cNxUNoF1VFpo_af_hzBf7J9WC5AbjAwTnUJLXtYSB9cXzOmfdsU6-0fcuaI3x-TlaSleOpqcJJf5X_NT5_hjqWVZpr5ADu2UHIBl_5Afwb_FC5yS2oncVet94jFvyrJvylzLQmTPuG6cn9o40P2fEWQ7KPeIFbrAFQCRmOBEjwiwlVuwF02Qk"/>
</div>
</div>
</div>
</div>
{/* Right Column: Job Listings & Meta */}
<div className="md:col-span-4 space-y-stack-lg">
{/* Quick Stats Card */}
<div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden text-left">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-[80px]">domain</span>
</div>
<h4 className="font-headline-md text-headline-md mb-4 relative z-10">Headquarters</h4>
<div className="space-y-4 relative z-10">
<div>
<p className="text-white/70 font-label-sm text-label-sm uppercase">Primary Location</p>
<p className="font-body-md text-body-md">Thermax House, 14 Mumbai-Pune Road, Wakdewadi, Pune 411003</p>
</div>
<button className="w-full py-2 bg-white text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">map</span>
                                View on Map
                            </button>
</div>
</div>
{/* Open Positions */}
<div className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="font-headline-md text-headline-md text-primary">Open Positions</h3>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">8 New</span>
</div>
{/* Job Card 1 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group text-left">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">
  <Link to="/public/jobdetails?id=thermax-maintenance">Maintenance Engineer</Link>
</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Energy Division • Pune</p>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase">Urgent</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Mechanical</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">2-4 Yrs Exp</span>
</div>
<Link to="/public/jobdetails?id=thermax-maintenance" className="block w-full py-2 text-center border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
</Link>
</div>
{/* Job Card 2 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group text-left">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">
  <Link to="/public/jobdetails?id=tata-trainee">Production Trainee</Link>
</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Water Div • Chinchwad</p>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-[10px] font-bold uppercase">Freshers</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Diploma</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Stipend: 18k</span>
</div>
<Link to="/public/jobdetails?id=tata-trainee" className="block w-full py-2 text-center border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
</Link>
</div>
{/* Job Card 3 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group text-left">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">
  <Link to="/public/jobdetails?id=siemens-electrical">Quality Assurance Tech</Link>
</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Solar Projects • Nagpur</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Electrical</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Site-based</span>
</div>
<Link to="/public/jobdetails?id=siemens-electrical" className="block w-full py-2 text-center border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
</Link>
</div>
<button className="w-full py-3 text-primary font-label-md text-label-md text-center hover:underline decoration-2 underline-offset-4">
                            View All 14 Openings
                        </button>
</div>
{/* Skills Endorsement */}
<div className="bg-surface-container-low p-6 rounded-xl text-left">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-4">Top Skills Recruited</h4>
<div className="flex flex-wrap gap-2">
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">AutoCAD</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Boiler Ops</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Six Sigma</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Water Treatment</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">HVAC</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Project Planning</span>
</div>
</div>
</div>
</div>
</div>
</main>

      {/* Desktop Footer Info */}
      <footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed text-left">
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
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">How It Works</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Career Tips</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
            </ul>
          </div>

          {/* For Employers Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-2 flex flex-col gap-4 text-left">
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
