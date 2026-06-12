import React from 'react';

export default function PostAJobCandidateRequirements() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top AppBar (Shared Component) */}
<header className="bg-surface dark:bg-surface-container-low w-full top-0 sticky border-b border-outline-variant dark:border-outline z-40">
<div className="flex items-center px-margin-mobile h-16 w-full max-w-container-max mx-auto">
<div className="cursor-pointer active:opacity-70 p-2 -ml-2 hover:bg-surface-container-high transition-colors rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">arrow_back</span>
</div>
<h1 className="font-headline-md text-headline-md ml-4 text-on-surface">Post a Job</h1>
</div>
</header>
<main className="max-w-[800px] mx-auto px-margin-mobile py-stack-lg pb-32">
{/* Progress Indicator */}
<div className="mb-stack-lg">
<div className="flex justify-between items-end mb-2">
<div>
<span className="font-label-md text-primary block">Step 1 of 3</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Job Basics</h2>
</div>
<span className="font-label-sm text-on-surface-variant mb-1">33% Completed</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary step-active transition-all duration-500 ease-in-out"></div>
</div>
</div>
<form className="space-y-stack-lg">
{/* Section: Core Details */}
<div className="bg-surface-container p-stack-md md:p-stack-lg rounded-xl border border-outline-variant space-y-stack-md">
<div className="flex items-center gap-2 border-b border-outline-variant pb-4 mb-4">
<span className="material-symbols-outlined text-primary">precision_manufacturing</span>
<h3 className="font-label-md uppercase tracking-wider text-on-surface-variant">Industrial Alignment</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant">Job Title</label>
<input className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" placeholder="e.g. Production Engineer" required="" type="text" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant">Company Department</label>
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md">
<option>Operations & Maintenance</option>
<option>Quality Assurance</option>
<option>Research & Development</option>
<option>Supply Chain</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant">Employment Type</label>
<div className="flex flex-wrap gap-stack-sm">
<label className="cursor-pointer group">
<input checked="" className="hidden peer" name="job_type" type="radio" />
<div className="px-6 py-2 rounded-full border border-outline-variant bg-surface-container-lowest peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary transition-all font-label-md">Full-time</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="job_type" type="radio" />
<div className="px-6 py-2 rounded-full border border-outline-variant bg-surface-container-lowest peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary transition-all font-label-md">Internship</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="job_type" type="radio" />
<div className="px-6 py-2 rounded-full border border-outline-variant bg-surface-container-lowest peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary transition-all font-label-md">Apprenticeship (NAPS)</div>
</label>
</div>
</div>
</div>
{/* Section: Target Diploma Branches */}
<div className="bg-surface-container p-stack-md md:p-stack-lg rounded-xl border border-outline-variant">
<h3 className="font-label-md text-on-surface mb-stack-md">Target Diploma Branch</h3>
<div className="flex flex-wrap gap-2">
{/* Multi-select chips */}
<label className="cursor-pointer group">
<input checked="" className="hidden peer" type="checkbox" />
<div className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant peer-checked:bg-primary peer-checked:text-white flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span className="font-label-md">Mechanical</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" type="checkbox" />
<div className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant peer-checked:bg-primary peer-checked:text-white flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-md">Electrical</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" type="checkbox" />
<div className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant peer-checked:bg-primary peer-checked:text-white flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">foundation</span>
<span className="font-label-md">Civil</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" type="checkbox" />
<div className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant peer-checked:bg-primary peer-checked:text-white flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">memory</span>
<span className="font-label-md">Electronics</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" type="checkbox" />
<div className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant peer-checked:bg-primary peer-checked:text-white flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">terminal</span>
<span className="font-label-md">Computer/IT</span>
</div>
</label>
</div>
</div>
{/* Section: Candidate Requirements */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div className="bg-surface-container p-stack-md rounded-xl border border-outline-variant flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">school</span> Minimum CGPA
                    </label>
<input className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary outline-none transition-all font-body-md" placeholder="e.g. 6.5" step="0.1" type="number" />
<span className="text-label-sm text-on-surface-variant italic">Scale of 10.0</span>
</div>
<div className="bg-surface-container p-stack-md rounded-xl border border-outline-variant flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">psychology</span> Technical Skills
                    </label>
<input className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary outline-none transition-all font-body-md" placeholder="AutoCAD, PLC, HVAC, ISO Standards" type="text" />
<span className="text-label-sm text-on-surface-variant italic">Separate by commas</span>
</div>
</div>
{/* Section: Logistics */}
<div className="bg-surface-container p-stack-md md:p-stack-lg rounded-xl border border-outline-variant space-y-stack-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">location_on</span> Maharashtra Industrial Zone
                    </label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 appearance-none focus:border-primary outline-none transition-all font-body-md">
<option>Chakan (MIDC), Pune</option>
<option>Hinjewadi IT Park, Pune</option>
<option>Waluj Industrial Area, Aurangabad</option>
<option>Taloja MIDC, Navi Mumbai</option>
<option>Butibori MIDC, Nagpur</option>
<option>Ambad MIDC, Nashik</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant">Monthly Salary Range (₹)</label>
<div className="flex items-center gap-4">
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary outline-none transition-all font-body-md" placeholder="Min" type="number" />
<span className="text-on-surface-variant">to</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:border-primary outline-none transition-all font-body-md" placeholder="Max" type="number" />
</div>
</div>
</div>
{/* Section: Description */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-on-surface-variant">Job Description & Responsibilities</label>
<textarea className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:border-primary outline-none transition-all font-body-md resize-none" placeholder="Describe day-to-day tasks, shift patterns, and equipment to be handled..." rows="6"></textarea>
</div>
</form>
{/* Help Card */}
<div className="mt-stack-lg bg-secondary-container/10 border border-secondary/20 p-stack-md rounded-xl flex gap-stack-md items-start">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>info</span>
<div>
<p className="font-label-md text-on-secondary-fixed-variant">Tip for Employers</p>
<p className="text-label-sm text-on-secondary-fixed-variant/80">List specific machinery knowledge (e.g., CNC Milling, injection molding) to attract candidates with specialized diploma certifications.</p>
</div>
</div>
</main>
{/* Bottom Action Bar (Fixed) */}
<div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-4 z-50">
<div className="max-w-[800px] mx-auto flex items-center justify-between gap-4">
<button className="flex-1 py-3 px-6 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-container/10 transition-colors">
                Save Draft
            </button>
<button className="flex-[2] py-3 px-6 rounded-lg bg-primary text-white font-label-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md active:scale-95">
                Preview & Post
                <span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
{/* Bottom NavBar (Shared Component - Conditional Visibility: Active) */}
{/* Hidden on specific transactional screens like 'Post a Job' to focus user attention, as per shell guidelines */}
{/* Industrial Atmosphere Background Element */}
<div className="fixed top-0 right-0 -z-10 opacity-5 pointer-events-none">
<img className="w-[600px] h-[600px] object-contain rotate-12" data-alt="A highly detailed technical blueprint of a mechanical gear system, rendered in a clean architectural style. The background is a soft off-white, and the lines are a precise primary blue. The lighting is even and high-key, creating a professional engineering aesthetic that complements a modern corporate job portal for industrial students in Maharashtra." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd3YXurWhmyF-ZeB2mrGIV9Ad2VFtolVflMDcVUP0THpSGgzySWEhfdJ9MApFqwvz1jdttMzhFuHVK0qVeufT7pjrGekKXSLZDh0m5o3t3lfvMZjUH5-noFaJLWQdHKFCfajyBHShvHJ4SkBoOKUMFzMVLAZvltMcSFlOCp30PhG3Sr-RNoJq6eEf8mkZOiFHXJiNJQ7MMLcCfzeOdE8ka_u_gvDS8pBt0UECsGGhIe_MOGphlyIhwzqgI-0qDtHtOmHdjDxjRaGI" />
</div>

    </div>
  );
}
