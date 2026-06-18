import React from 'react';

export default function ResumeBuilderDashboard() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-inverse-surface shadow-sm docked full-width top-0 z-40 sticky">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-4">
<a className="flex items-center gap-2 cursor-pointer" href="/">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
</div>
<div className="flex flex-col leading-none text-left">
<span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
<span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
</div>
</a>
<div className="hidden md:flex gap-8 items-center">
<nav className="flex gap-6">
<a className="text-primary dark:text-inverse-primary font-bold hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors px-2 py-1 rounded" href="#">Builder</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors px-2 py-1 rounded" href="#">Templates</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors px-2 py-1 rounded" href="#">Training</a>
</nav>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">
                    Export PDF
                </button>
</div>
<button className="md:hidden material-symbols-outlined text-on-surface">menu</button>
</div>
</header>
<div className="max-w-container-max mx-auto flex">
{/* NavigationDrawer (Desktop Only) */}
<aside className="hidden md:flex flex-col h-[calc(100vh-72px)] sticky top-[72px] w-80 bg-surface dark:bg-inverse-surface border-r border-outline-variant py-6">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xl">
                    RK
                </div>
<div>
<p className="font-body-md font-bold text-on-surface">MSBTE Student</p>
<p className="text-label-sm text-on-surface-variant">Mechanical Engineering</p>
<p className="text-label-sm text-primary font-semibold">Final Year</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="bg-primary-container text-on-primary-container font-semibold rounded-full mx-2 px-4 py-3 flex items-center gap-4" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md">Dashboard</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-body-md">Academic Info</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" href="#">
<span className="material-symbols-outlined">business_center</span>
<span className="font-body-md">Work Experience</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" href="#">
<span className="material-symbols-outlined">construction</span>
<span className="font-body-md">Technical Skills</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-colors" href="#">
<span className="material-symbols-outlined">verified</span>
<span className="font-body-md">Certifications</span>
</a>
</nav>
</aside>
{/* Main Content Area */}
<main className="flex-1 p-margin-mobile md:p-gutter pb-32">
{/* Welcome Hero (Asymmetric) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
<div className="lg:col-span-8 bg-primary-container rounded-xl p-8 text-on-primary shadow-lg flex flex-col justify-between min-h-[240px]">
<div>
<h2 className="font-headline-lg text-headline-lg mb-2">Resume Progress: 65%</h2>
<p className="font-body-md opacity-90 max-w-md">You're doing great! Complete your Industrial Training and Projects section to unlock premium MSBTE-verified templates.</p>
</div>
<div className="w-full bg-white/20 h-4 rounded-full mt-6 overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[65%] rounded-full shadow-[0_0_15px_rgba(63,210,152,0.5)]"></div>
</div>
</div>
<div className="lg:col-span-4 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
<div className="relative w-full aspect-[3/4] max-w-[180px] mb-4 bg-surface-container rounded-lg shadow-sm overflow-hidden group cursor-pointer">
<img alt="Template Preview" className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A clean, professional resume template layout specifically designed for engineering students. The template features a crisp white background with Maharashtra blue accents, clearly defined headers for technical skills, industrial training, and MSBTE academic details. The lighting is bright and corporate, emphasizing a modern, structured academic and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK84o43yo7AIZyCviaNL7dBesbLKCc31KmO4usR7O27Fse-6tWfAZx86tlD0IDjOImmIDNb7ayxQA5UKC0KIfx-Kbc1cG-3sojBmFFWDKUC2C1SSkZ6u6qgB_Iy3MA1x5PlYoJn74N3g84J2nOIZFowEPiC4MvmbsjuoQBBMjcwoW_jdl_0jrHmo0azoJvri0y5j89HBoWIoJ81rQQsXRatNmstz0RW_V9T76N2RQaecjLU3FYAEQq2QO4zVJnVLQbsDzoNkx3708"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white text-primary px-4 py-2 rounded-full font-label-md shadow-md">Change Template</span>
</div>
</div>
<p className="font-label-md text-on-surface">Modern Industrial v2</p>
</div>
</div>
{/* Bento Grid of Sections */}
<h3 className="font-headline-md text-headline-md mb-gutter">Resume Sections</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Personal Info */}
<button className="flex flex-col p-6 bg-surface border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]">
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
<span className="material-symbols-outlined">person</span>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Personal Info</p>
<p className="text-label-sm text-on-surface-variant mb-4">Contact details, social links, and summary.</p>
<span className="mt-auto text-primary font-label-md flex items-center gap-1">Edit Section <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
</button>
{/* Education (MSBTE Focus) */}
<button className="flex flex-col p-6 bg-surface border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]">
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
<span className="material-symbols-outlined">school</span>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Education (MSBTE)</p>
<p className="text-label-sm text-on-surface-variant mb-4">Diploma details, semester marks, and college info.</p>
<span className="mt-auto text-primary font-label-md flex items-center gap-1">Edit Section <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
</button>
{/* Industrial Training */}
<button className="flex flex-col p-6 bg-surface border-2 border-secondary-container/30 rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98] relative overflow-hidden">
<div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-bl-lg font-label-sm">Incomplete</div>
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg text-secondary">
<span className="material-symbols-outlined">factory</span>
</div>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Industrial Training</p>
<p className="text-label-sm text-on-surface-variant mb-4">Mandatory summer internship and workshops.</p>
<span className="mt-auto text-secondary font-label-md flex items-center gap-1">Complete Now <span className="material-symbols-outlined text-sm">priority_high</span></span>
</button>
{/* Technical Skills */}
<button className="flex flex-col p-6 bg-surface border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]">
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
<span className="material-symbols-outlined">construction</span>
</div>
<span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Technical Skills</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded font-bold">AutoCAD</span>
<span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded font-bold">Python</span>
<span className="text-[10px] text-on-surface-variant">+4 more</span>
</div>
<span className="mt-auto text-primary font-label-md flex items-center gap-1">Edit Skills <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
</button>
{/* Projects */}
<button className="flex flex-col p-6 bg-surface border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]">
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
<span className="material-symbols-outlined">assignment</span>
</div>
<span className="material-symbols-outlined text-outline-variant">circle</span>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Projects</p>
<p className="text-label-sm text-on-surface-variant mb-4">Final year project and mini-projects.</p>
<span className="mt-auto text-primary font-label-md flex items-center gap-1">Add Projects <span className="material-symbols-outlined text-sm">add</span></span>
</button>
{/* Certificates */}
<button className="flex flex-col p-6 bg-surface border border-outline-variant rounded-xl hover:shadow-md transition-all text-left active:scale-[0.98]">
<div className="flex justify-between items-start w-full mb-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
<span className="material-symbols-outlined">verified</span>
</div>
<span className="material-symbols-outlined text-outline-variant">circle</span>
</div>
<p className="font-headline-md text-body-lg font-bold mb-1">Certifications</p>
<p className="text-label-sm text-on-surface-variant mb-4">Courses, competition wins, and awards.</p>
<span className="mt-auto text-primary font-label-md flex items-center gap-1">Add New <span className="material-symbols-outlined text-sm">add</span></span>
</button>
</div>
{/* Recently Edited */}
<div className="mt-stack-lg glass-card rounded-xl p-gutter">
<h4 className="font-label-md text-on-surface mb-4">Quick Tips for Maharashtra Students</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-secondary">lightbulb</span>
<p className="text-label-sm text-on-surface-variant">Highlight your "Industrial Training" specifically, as recruiters in MIDC areas value this MSBTE requirement.</p>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-secondary">lightbulb</span>
<p className="text-label-sm text-on-surface-variant">Keep your MSBTE percentage/CGPA clear and verified for government job applications.</p>
</div>
</div>
</div>
</main>
</div>
{/* Floating Action Button */}
<button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 flex items-center gap-3 bg-secondary-container text-on-secondary-container px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(253,118,26,0.3)] hover:scale-105 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>visibility</span>
<span className="font-label-md font-bold">Preview & Export</span>
</button>
{/* BottomNavBar (Mobile Only) */}
<footer className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface-container dark:bg-surface-container-highest shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">edit_note</span>
<span className="font-label-sm text-label-sm">Builder</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">style</span>
<span className="font-label-sm text-label-sm">Templates</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">factory</span>
<span className="font-label-sm text-label-sm">Training</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</footer>


    </div>
  );
}
