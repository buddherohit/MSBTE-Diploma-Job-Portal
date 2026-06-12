import React from 'react';

export default function ReviewCandidateAdityaAhire() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 h-16">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container dark:hover:bg-inverse-surface rounded-full transition-colors duration-200">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Review Application</h1>
</div>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
<img alt="Recruiter Profile" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a middle-aged recruiter in a high-end office setting. Soft, cinematic lighting highlights their professional attire and confident expression. The background features a blurred modern workspace with architectural lines and a cool-toned, professional color palette consistent with industrial corporate standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIFTWL622ukK0D1KxHRu8WVdsRHQyMVAHyu53Z12yH29x_o4bT7oj9qIXbFEABEyxS53abdI8NnlLbSaxwhcz_usEEBxdEnZnBpPEArHojkaz4AspDo9PKDdGmmpVWgBiCiIGW3suNG9TEU6Hkto70abdENSMD811z9JB9WeH-WyqE6Z4nYK_jkye2dyGut7RmXuKek6vhsCuWU_grJ-snOEkrxTC3q3rrR5o33zLPvX_Te-e9-tHCbeuWRteqkJ_x4cDBW1ohQnc" />
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile py-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: Candidate Summary Card */}
<section className="md:col-span-12 lg:col-span-4 space-y-gutter">
<div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex flex-col items-center text-center">
<div className="relative mb-4">
<img alt="Aditya Ahire" className="w-32 h-32 rounded-full border-4 border-surface-container object-cover shadow-md" data-alt="A close-up portrait of a young Indian male student with a bright, motivated expression, wearing a clean collared shirt. He stands against a subtle industrial backdrop with soft afternoon lighting. The image captures a sense of ambition and readiness for the professional world, emphasizing clear skin and high-resolution detail in a bright, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3apaU-tB7F_nFyPDBldSXLdfhQ_9Bjn6lYhM0vGulcm32TTP-tl5dmhoWdnSHs4UJb0EpontcoEcyd0AQ1vnc5hhwreOBpYWAKtI1LxfEPRza4eH6qd9C_xtDtpXyQ3tzryUfdFAH9tKjwhy6BmBUDwOYNaF0ur59JcZZFBMeDZoxmwKPjJsbVSjm6u52apTezuzW1u_hy5qEkN837_3N5CnCTn-vXiqz2IqKq2830_xxIazhexI4GhcBW8lSUQnkwUX5GJ7JmXE" />
<span className="absolute bottom-1 right-1 bg-tertiary-container text-on-tertiary-container p-1 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Aditya Ahire</h2>
<p className="text-on-surface-variant font-label-md mt-1">Mechanical Engineering</p>
<div className="mt-4 flex flex-wrap justify-center gap-2">
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm">Class of 2024</span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm">Pune Region</span>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 py-3 border border-error text-error font-label-md rounded-lg hover:bg-error-container transition-colors duration-200">
<span className="material-symbols-outlined">close</span>
                            Reject
                        </button>
<button className="flex items-center justify-center gap-2 py-3 border border-primary text-primary font-label-md rounded-lg hover:bg-surface-container transition-colors duration-200">
<span className="material-symbols-outlined">star</span>
                            Shortlist
                        </button>
</div>
</div>
{/* Quick Stats Bento Item */}
<div className="bg-primary-container text-on-primary-container rounded-xl p-6 space-y-4 shadow-md">
<h3 className="font-label-md uppercase tracking-wider text-on-primary-container/70">Candidate Metrics</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-2xl font-bold">88%</p>
<p className="text-xs opacity-80">Aggregate GPA</p>
</div>
<div>
<p className="text-2xl font-bold">180d</p>
<p className="text-xs opacity-80">Internship Exp</p>
</div>
</div>
</div>
</section>
{/* Right Column: Details & Tabs */}
<section className="md:col-span-12 lg:col-span-8 space-y-6">
{/* Navigation Tabs */}
<nav className="flex border-b border-outline-variant">
<button className="px-6 py-4 font-label-md text-primary border-b-2 border-primary transition-all duration-200" id="tab-profile">Profile</button>
<button className="px-6 py-4 font-label-md text-on-surface-variant hover:text-primary transition-all duration-200" id="tab-resume">Resume</button>
<button className="px-6 py-4 font-label-md text-on-surface-variant hover:text-primary transition-all duration-200" id="tab-contact">Contact</button>
</nav>
{/* Tab Content: Profile */}
<div className="space-y-gutter animate-in fade-in duration-500" id="content-profile">
{/* Application Note (Glassmorphism-lite) */}
<div className="bg-secondary-fixed/30 border border-secondary-fixed p-6 rounded-xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<span className="material-symbols-outlined text-8xl">format_quote</span>
</div>
<h4 className="font-label-md text-on-secondary-fixed-variant mb-2">Application Note</h4>
<p className="font-body-md text-on-secondary-container italic">"I am highly interested in the Maintenance Engineer role at Thermax as I have hands-on experience with thermal systems."</p>
</div>
{/* Education */}
<div className="bg-white border border-outline-variant p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">school</span>
<h3 className="font-headline-md text-on-surface">Education</h3>
</div>
<div className="pl-9 relative">
<div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-outline-variant"></div>
<div className="mb-2">
<h4 className="font-label-md text-on-surface">MSBTE Diploma in Mechanical Engineering</h4>
<p className="text-on-surface-variant text-body-md">Government Polytechnic, Pune</p>
<div className="flex items-center gap-4 mt-1 text-label-sm text-primary font-bold">
<span>Class of 2024</span>
<span>Aggregate: 88%</span>
</div>
</div>
</div>
</div>
{/* Experience & Internships */}
<div className="bg-white border border-outline-variant p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">work_history</span>
<h3 className="font-headline-md text-on-surface">Experience</h3>
</div>
<div className="pl-9 relative">
<div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-outline-variant"></div>
<div>
<h4 className="font-label-md text-on-surface">Graduate Engineer Trainee (Intern)</h4>
<p className="text-on-surface-variant text-body-md">Larsen & Toubro (L&T), Chakan</p>
<p className="text-label-sm text-on-surface-variant mt-1">Dec 2023 - May 2024 (6 months)</p>
<ul className="mt-3 list-disc list-inside text-body-md text-on-surface-variant space-y-1">
<li>Assisted in maintenance of heavy hydraulic machinery.</li>
<li>Worked with QC team on thermal system calibration.</li>
<li>Documented boiler operational safety protocols.</li>
</ul>
</div>
</div>
</div>
{/* Skills Chips */}
<div className="bg-white border border-outline-variant p-6 rounded-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">psychology</span>
<h3 className="font-headline-md text-on-surface">Key Skills</h3>
</div>
<div className="flex flex-wrap gap-3">
<div className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-label-md flex items-center gap-2 border border-[#1E40AF]/10">
<span className="material-symbols-outlined text-sm">architecture</span>
                                AutoCAD
                            </div>
<div className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-label-md flex items-center gap-2 border border-[#1E40AF]/10">
<span className="material-symbols-outlined text-sm">propane_tank</span>
                                Boiler Operations
                            </div>
<div className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-label-md flex items-center gap-2 border border-[#1E40AF]/10">
<span className="material-symbols-outlined text-sm">settings_input_component</span>
                                PLC
                            </div>
<div className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-label-md flex items-center gap-2 border border-[#1E40AF]/10">
<span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                                Thermal Systems
                            </div>
<div className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-lg font-label-md flex items-center gap-2 border border-[#1E40AF]/10">
<span className="material-symbols-outlined text-sm">engineering</span>
                                QC Calibration
                            </div>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Sticky Bottom Action Bar */}
<div className="sticky bottom-0 w-full bg-white border-t border-outline-variant px-margin-mobile py-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div className="max-w-container-max mx-auto flex items-center justify-between gap-4">
<div className="hidden md:flex flex-col">
<span className="text-label-sm text-on-surface-variant">Applying for</span>
<span className="font-label-md text-primary">Maintenance Engineer @ Thermax</span>
</div>
<button className="w-full md:w-auto bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-label-md px-10 py-4 rounded-xl flex items-center justify-center gap-3 transition-transform duration-150 active:scale-95 shadow-md">
<span className="material-symbols-outlined">calendar_month</span>
                Schedule Interview
            </button>
</div>
</div>
{/* Hidden Mobile Nav (using the template's BottomNavBar logic for consistency) */}
<footer className="md:hidden">
{/* Spacing for the sticky action bar above */}
<div className="h-16"></div>
</footer>


    </div>
  );
}
