import React from 'react';

export default function ResumePreviewExport() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top AppBar (JSON Content) */}
<header className="bg-surface shadow-sm docked full-width top-0 z-40 no-print">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
<span className="font-headline-md text-headline-md font-bold text-primary">MahaResume</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-2 bg-surface-container rounded-full p-1">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-95" id="zoomOut">
<span className="material-symbols-outlined" data-icon="zoom_out">zoom_out</span>
</button>
<span className="px-2 flex items-center font-label-md text-label-md" id="zoomLevel">100%</span>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-95" id="zoomIn">
<span className="material-symbols-outlined" data-icon="zoom_in">zoom_in</span>
</button>
</div>
<button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" data-icon="picture_as_pdf">picture_as_pdf</span>
                    Export PDF
                </button>
</div>
</div>
</header>
<main className="h-[calc(100vh-64px)] overflow-auto custom-scrollbar bg-surface-dim/50 p-4 md:p-8 flex justify-center">
{/* Resume Canvas Container */}
<div className="transition-transform duration-300 ease-out origin-top" id="resumeWrapper">
{/* Professional Resume Template */}
<div className="bg-white w-[210mm] min-h-[297mm] resume-shadow p-12 text-[#1a1a1a] relative flex flex-col gap-8" id="resumePaper">
{/* Resume Header */}
<section className="border-b-4 border-primary pb-6">
<div className="flex justify-between items-end">
<div>
<h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tight">Rajesh Kumar</h1>
<p className="font-headline-md text-headline-md text-secondary font-semibold">Mechanical Engineering Student</p>
</div>
<div className="text-right space-y-1">
<p className="flex items-center justify-end gap-2 text-on-surface-variant font-label-md text-label-md">
                                rajesh.kumar.msbte@email.com <span className="material-symbols-outlined text-primary text-[18px]" data-icon="mail">mail</span>
</p>
<p className="flex items-center justify-end gap-2 text-on-surface-variant font-label-md text-label-md">
                                +91 98765 43210 <span className="material-symbols-outlined text-primary text-[18px]" data-icon="call">call</span>
</p>
<p className="flex items-center justify-end gap-2 text-on-surface-variant font-label-md text-label-md">
                                Pune, Maharashtra <span className="material-symbols-outlined text-primary text-[18px]" data-icon="location_on">location_on</span>
</p>
</div>
</div>
</section>
{/* Profile Summary */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" data-icon="person_search">person_search</span>
                        Professional Summary
                    </h2>
<p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                        Detail-oriented Final Year Mechanical Engineering Diploma student at MSBTE with a strong foundation in thermal engineering, manufacturing processes, and CAD design. Proven ability to apply theoretical knowledge to practical industrial problems through hands-on internships at major automotive hubs. Aspiring to contribute technical expertise to Maharashtra's growing industrial sector.
                    </p>
</section>
{/* Grid Content */}
<div className="grid grid-cols-12 gap-8">
{/* Left Column */}
<div className="col-span-4 space-y-8">
{/* Education */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Education</h2>
<div className="space-y-4">
<div>
<p className="font-bold text-on-surface">Diploma in Mechanical Engineering</p>
<p className="text-label-md font-label-md text-secondary">Government Polytechnic, Pune</p>
<p className="text-label-sm font-label-sm text-outline">2021 – Present</p>
<p className="text-label-md font-label-md mt-1">Current Aggregate: 88.5%</p>
</div>
<div>
<p className="font-bold text-on-surface">SSC (Secondary School Certificate)</p>
<p className="text-label-md font-label-md text-secondary">Maharashtra State Board</p>
<p className="text-label-sm font-label-sm text-outline">2021</p>
<p className="text-label-md font-label-md mt-1">Percentage: 92.4%</p>
</div>
</div>
</section>
{/* Skills */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Technical Skills</h2>
<div className="flex flex-wrap gap-2">
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">AutoCAD</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">SolidWorks</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">CNC Programming</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">Thermodynamics</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">Hydraulics</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">Pneumatics</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-label-sm font-label-sm">MS Office</span>
</div>
</section>
{/* Languages */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Languages</h2>
<ul className="space-y-1 font-body-md text-body-md">
<li className="flex justify-between"><span>Marathi</span> <span className="text-outline italic">Native</span></li>
<li className="flex justify-between"><span>English</span> <span className="text-outline italic">Fluent</span></li>
<li className="flex justify-between"><span>Hindi</span> <span className="text-outline italic">Fluent</span></li>
</ul>
</section>
</div>
{/* Right Column */}
<div className="col-span-8 space-y-8">
{/* Experience */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Internship Experience</h2>
<div className="space-y-6">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[18px] font-bold text-on-surface">Production Intern</h3>
<span className="text-label-sm font-label-sm text-outline">Jun 2023 – Aug 2023</span>
</div>
<p className="text-secondary font-semibold font-label-md text-label-md mb-2">Tata Motors Limited, Pimpri</p>
<ul className="list-disc list-outside ml-4 space-y-1 text-on-surface-variant">
<li>Assisted in the quality control department monitoring engine block manufacturing lines.</li>
<li>Participated in a Kaizen initiative that reduced assembly line downtime by 5% over two months.</li>
<li>Documented safety protocols and created visual workflow charts for new trainees.</li>
</ul>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[18px] font-bold text-on-surface">Maintenance Trainee</h3>
<span className="text-label-sm font-label-sm text-outline">Dec 2022 – Jan 2023</span>
</div>
<p className="text-secondary font-semibold font-label-md text-label-md mb-2">Bharat Forge Ltd, Mundhwa</p>
<ul className="list-disc list-outside ml-4 space-y-1 text-on-surface-variant">
<li>Observed preventative maintenance schedules for heavy-duty hydraulic presses.</li>
<li>Aided the senior engineers in diagnosing valve failures in the forging division.</li>
</ul>
</div>
</div>
</section>
{/* Projects */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Academic Projects</h2>
<div className="space-y-4">
<div>
<p className="font-bold text-on-surface">Final Year Project: Solar Powered Desalination System</p>
<p className="text-on-surface-variant text-body-md mt-1">
                                        Designed and fabricated a prototype solar still capable of producing 2 liters of potable water daily. Focus on thermal efficiency and sustainable material usage.
                                    </p>
</div>
<div>
<p className="font-bold text-on-surface">Pneumatic Jack System</p>
<p className="text-on-surface-variant text-body-md mt-1">
                                        Engineered a portable pneumatic jack for light commercial vehicles using standard MSBTE lab components to demonstrate fluid power applications.
                                    </p>
</div>
</div>
</section>
{/* Certifications */}
<section>
<h2 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant mb-4">Certifications</h2>
<ul className="space-y-2">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[18px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
<span className="text-on-surface-variant font-body-md text-body-md">MS-CIT Certified (95% Score)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[18px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
<span className="text-on-surface-variant font-body-md text-body-md">SolidWorks Professional (CSWP) - Academic Version</span>
</li>
</ul>
</section>
</div>
</div>
{/* Footer / Aesthetic Accent */}
<div className="mt-auto pt-8 flex justify-between items-center text-outline-variant border-t border-outline-variant/30">
<p className="text-label-sm font-label-sm">Generated by MahaResume</p>
<div className="flex gap-4">
<span className="text-label-sm font-label-sm">Reference available upon request</span>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Controls & Export (Enhanced FAB/Nav Hybrid) */}
<footer className="fixed bottom-0 left-0 w-full z-50 bg-surface-container/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.1)] no-print">
<div className="max-w-container-max mx-auto px-margin-mobile py-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="style">style</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-none">Template: Maharashtra Industrial</p>
<p className="text-label-sm font-label-sm text-on-surface-variant">Standard A4 Layout</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-outline text-on-surface font-label-md text-label-md px-6 py-3 rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
                    Back to Builder
                </button>
<button className="flex-1 md:flex-none bg-secondary text-white font-label-md text-label-md px-10 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group" id="exportBtn">
<span className="material-symbols-outlined group-hover:animate-bounce" data-icon="download">download</span>
                    Export as PDF
                </button>
</div>
</div>
</footer>


    </div>
  );
}
