import React from 'react';

export default function EditEducationDetails() {
  return (
    <div className="w-full min-h-screen">
      
{/* Desktop Navigation Drawer */}
<aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 border-r border-outline-variant bg-surface w-80 z-40">
<div className="p-6 flex items-center gap-3">
<a className="flex items-center gap-2 cursor-pointer" href="/">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
</div>
<div className="flex flex-col leading-none text-left">
<span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
<span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
</div>
</a>
</div>
<div className="px-4 py-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">MSBTE Student</p>
<p className="text-xs text-on-surface-variant">Mechanical Engineering</p>
<span className="text-[10px] uppercase tracking-wider font-bold text-secondary">Final Year</span>
</div>
</div>
<nav className="flex-1 mt-4">
<div className="space-y-1">
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="bg-primary-container text-on-primary-container font-semibold rounded-full mx-2 px-4 py-3 flex items-center gap-3 shadow-sm" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-body-md text-body-md">Academic Info</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">business_center</span>
<span className="font-body-md text-body-md">Work Experience</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">construction</span>
<span className="font-body-md text-body-md">Technical Skills</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">verified</span>
<span className="font-body-md text-body-md">Certifications</span>
</a>
</div>
</nav>
</aside>
{/* Top App Bar (Mobile Only) */}
<header className="md:hidden sticky top-0 z-50 bg-surface shadow-sm px-margin-mobile py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<a className="flex items-center gap-2 cursor-pointer" href="/">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
</div>
<div className="flex flex-col leading-none text-left">
<span className="font-headline-md text-[16px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
<span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
</div>
</a>
</div>
<button className="p-2 rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">menu</span>
</button>
</header>
{/* Main Content Canvas */}
<main className="max-w-4xl mx-auto px-margin-mobile md:px-gutter py-8 md:py-12">
{/* Header Section */}
<header className="mb-10">
<div className="flex items-center gap-2 text-secondary mb-2">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>terminal</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">Educational Blueprint</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Academic Profile</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Complete your technical background details according to MSBTE standards. This information will be used to generate your industry-ready resume.</p>
</header>
{/* Form Section */}
<form className="space-y-8">
{/* Academic Background Card */}
<section className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_balance</span>
                    Diploma Details
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Branch Selection */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Diploma Branch</label>
<select className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer">
<option value="">Select your branch</option>
<option value="me">Mechanical Engineering</option>
<option value="ce">Civil Engineering</option>
<option value="ee">Electrical Engineering</option>
<option value="co">Computer Technology</option>
<option value="if">Information Technology</option>
<option value="ej">Electronics & Telecommunication</option>
</select>
</div>
{/* Year of Study */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Current Year of Study</label>
<div className="flex gap-2">
<label className="flex-1 relative cursor-pointer group">
<input checked="" className="sr-only peer" name="year" type="radio"/>
<div className="p-3 text-center border border-outline-variant rounded-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary group-hover:bg-surface-container transition-all">
                                    1st Year
                                </div>
</label>
<label className="flex-1 relative cursor-pointer group">
<input className="sr-only peer" name="year" type="radio"/>
<div className="p-3 text-center border border-outline-variant rounded-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary group-hover:bg-surface-container transition-all">
                                    2nd Year
                                </div>
</label>
<label className="flex-1 relative cursor-pointer group">
<input className="sr-only peer" name="year" type="radio"/>
<div className="p-3 text-center border border-outline-variant rounded-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary group-hover:bg-surface-container transition-all">
                                    3rd Year
                                </div>
</label>
</div>
</div>
</div>
</section>
{/* Performance Grid */}
<section className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                        Semester Performance
                    </h2>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">MSBTE Pattern</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{/* Semester Card Generator */}
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 1</span>
<div className="relative">
<input className="w-full bg-white border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none" placeholder="Percentage / CGPA" step="0.01" type="number"/>
<span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
</div>
</div>
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 2</span>
<div className="relative">
<input className="w-full bg-white border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none" placeholder="Percentage / CGPA" step="0.01" type="number"/>
<span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
</div>
</div>
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 3</span>
<div className="relative">
<input className="w-full bg-white border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none" placeholder="Percentage / CGPA" step="0.01" type="number"/>
<span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
</div>
</div>
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 4</span>
<div className="relative">
<input className="w-full bg-white border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none" placeholder="Percentage / CGPA" step="0.01" type="number"/>
<span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
</div>
</div>
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 5</span>
<div className="relative">
<input className="w-full bg-white border-[#CBD5E1] rounded-md py-2 px-3 focus:ring-primary focus:border-primary outline-none" placeholder="Percentage / CGPA" step="0.01" type="number"/>
<span className="absolute right-3 top-2 text-xs text-outline font-bold">%</span>
</div>
</div>
<div className="p-4 border border-outline-variant bg-surface-container-low rounded-lg space-y-3 opacity-60">
<span className="font-label-sm text-label-sm text-primary uppercase">Semester 6</span>
<div className="relative">
<input className="w-full bg-surface-container border-[#CBD5E1] rounded-md py-2 px-3 outline-none cursor-not-allowed" disabled="" placeholder="In Progress" type="number"/>
</div>
</div>
</div>
</section>
{/* Final Year Project (Critical Section) */}
<section className="bg-surface-container-lowest border-2 border-secondary-container p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-secondary-container text-6xl opacity-10">rocket_launch</span>
</div>
<h2 className="font-headline-md text-headline-md text-secondary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined">lightbulb</span>
                    Final Year Project (Capstone)
                </h2>
<div className="space-y-6 relative z-10">
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Project Title</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="e.g., Automated Smart Irrigation System using IOT" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Project Description & Industry Impact</label>
<textarea className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg py-3 px-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none resize-none" placeholder="Briefly describe the problem solved, technologies used, and your role in the team..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Key Technologies</label>
<div className="flex flex-wrap gap-2 mb-2" id="tech-chip-container">
<span className="bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                    AutoCAD
                                    <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
</span>
<span className="bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                    PLC Scada
                                    <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
</span>
</div>
<input className="w-full bg-white border-[#CBD5E1] border-dashed border-2 rounded-lg py-2 px-4 text-sm focus:border-primary outline-none" placeholder="Add tech and press enter" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">Project Link / Repo (Optional)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline-variant">link</span>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="https://github.com/..." type="url"/>
</div>
</div>
</div>
</div>
</section>
{/* Action Buttons */}
<footer className="flex flex-col md:flex-row justify-end gap-4 pt-6">
<button className="px-8 py-3 rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-all active:scale-95" type="button">
                    Save Draft
                </button>
<button className="px-10 py-3 rounded-lg bg-secondary text-white font-label-md text-label-md shadow-md hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined text-sm">verified_user</span>
                    Commit to Resume
                </button>
</footer>
</form>
{/* Decorative Info Card (Asymmetric Layout element) */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
<div className="md:col-span-1">
<div className="bg-primary p-8 rounded-2xl text-on-primary relative overflow-hidden group">
<div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
<span className="material-symbols-outlined text-4xl mb-4">info</span>
<h3 className="font-headline-md text-headline-md mb-2">Why Final Year Project?</h3>
<p className="text-sm opacity-90 leading-relaxed">MSBTE curriculum places 100 marks on your capstone project. Employers in Maharashtra look at this as your primary hands-on experience during diploma studies.</p>
</div>
</div>
<div className="md:col-span-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex gap-4 p-4 items-start">
<div className="w-10 h-10 rounded bg-tertiary-fixed flex-shrink-0 flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Verified Results</h4>
<p className="text-xs text-on-surface-variant">Data synced with MSBTE portal for authenticity.</p>
</div>
</div>
<div className="flex gap-4 p-4 items-start">
<div className="w-10 h-10 rounded bg-primary-fixed flex-shrink-0 flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined">work_history</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Career Pathing</h4>
<p className="text-xs text-on-surface-variant">Recommended jobs based on your branch and marks.</p>
</div>
</div>
<div className="flex gap-4 p-4 items-start">
<div className="w-10 h-10 rounded bg-secondary-fixed flex-shrink-0 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined">description</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Auto-Formatting</h4>
<p className="text-xs text-on-surface-variant">Results automatically formatted into tables on export.</p>
</div>
</div>
<div className="flex gap-4 p-4 items-start">
<div className="w-10 h-10 rounded bg-on-tertiary-container/20 flex-shrink-0 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined">lock</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Encrypted Storage</h4>
<p className="text-xs text-on-surface-variant">Your marks are secure and accessible only to you.</p>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container flex justify-around items-center px-4 py-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined">edit_note</span>
<span className="text-[10px] font-medium mt-1">Builder</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined">style</span>
<span className="text-[10px] font-medium mt-1">Templates</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined">factory</span>
<span className="text-[10px] font-medium mt-1">Training</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-medium mt-1">Profile</span>
</button>
</nav>


    </div>
  );
}
