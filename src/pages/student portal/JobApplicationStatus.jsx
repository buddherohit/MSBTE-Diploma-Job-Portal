import React from 'react';

export default function JobApplicationStatus() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile md:px-gutter h-16 z-50">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary dark:text-primary-fixed hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors p-2 rounded-full">menu</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Student Dashboard</h1>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-8">
        <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1" href="/student-portal/dashboard">Dashboard</a>
<a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary px-2 py-1" href="/student-portal/job-application-status">Status</a>
<a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1" href="/student-portal/find-diploma-applied-jobs">Applications</a>
</nav>
<img alt="User profile photo" className="w-10 h-10 rounded-full border-2 border-primary object-cover" data-alt="A professional headshot of a young male student wearing a neat white shirt, set against a soft, out-of-focus academic library background. The lighting is bright and natural, reflecting a clean and modern corporate aesthetic. The overall mood is confident, approachable, and focused, aligning with a high-energy professional job seeker profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1CfKWTMcsCsqoSoUSIMF4wkT7fcu8i09zqCZ_3Pg2DcXTeftd2_pM8hrVFclQxuhDO6ky7wunTIwNkD22B5dkIlwD_-ZHOG4XHarv1XXnD7pWXTZs5BYkiKPUFT1Kpvw6hLbrwJIdTLjDF7EwjpGtn5QpjoFN3vfHEGvL7ux-nxHcMKsoiZV8De-p0WsMwLYf7vt5Td03iUkOLEVQqWSCeIGRst66QU0eynyTvrv7ToNdHo0zieiHJ-M7kUbST5_Lanc7dAM69jk"/>
</div>
</header>
<main className="pt-24 pb-24 md:pb-8 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
{/* Summary Cards (Bento Style) */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-stack-lg">
<div className="glass-card p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300">
<div>
<span className="text-on-surface-variant font-label-md uppercase tracking-wider">Active Applications</span>
<h2 id="appliedCountStat" className="font-headline-lg text-headline-lg mt-2 text-primary">12</h2>
</div>
<div className="mt-4 flex items-center text-tertiary-fixed-dim text-sm font-semibold">
<span className="material-symbols-outlined mr-1">trending_up</span>
<span>+2 since last week</span>
</div>
</div>
<div className="glass-card p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300 border-l-4 border-l-tertiary">
<div>
<span className="text-on-surface-variant font-label-md uppercase tracking-wider">Shortlisted</span>
<h2 className="font-headline-lg text-headline-lg mt-2 text-tertiary">04</h2>
</div>
<div className="mt-4 flex items-center text-on-surface-variant text-sm">
<span className="material-symbols-outlined mr-1">check_circle</span>
<span>Next interview tomorrow</span>
</div>
</div>
<div className="glass-card p-6 rounded-lg flex flex-col justify-between hover:shadow-sm transition-all duration-300">
<div>
<span className="text-on-surface-variant font-label-md uppercase tracking-wider">Rejected / Closed</span>
<h2 className="font-headline-lg text-headline-lg mt-2 text-error">03</h2>
</div>
<div className="mt-4 flex items-center text-on-surface-variant text-sm">
<span className="material-symbols-outlined mr-1">info</span>
<span>View feedback for improvements</span>
</div>
</div>
</section>
{/* Status Tracking List */}
<section className="space-y-stack-md">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-md text-headline-md">Active Tracking</h3>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm font-medium hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                    </button>
</div>
</div>
{/* Dynamic Tracking Container for LocalStorage Jobs */}
<div className="space-y-stack-md" id="dynamicTrackingContainer"></div>

{/* Application Card 1 */}
<div className="bg-surface border border-outline-variant rounded-lg p-6 hover:shadow-md transition-all">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
{/* Company Info */}
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white rounded-lg border border-outline-variant p-2 flex items-center justify-center shrink-0">
<img alt="Tata Motors" className="max-w-full" data-alt="The corporate logo of Tata Motors, a clean and professional industrial emblem, displayed on a high-quality white square background. The logo reflects institutional stability and industrial power, fitting the corporate modern aesthetic of the Maharashtra industrial sector. The lighting is even and bright." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87KJ-wMj7SYx2pBEN8tPd-VLZGcVrq_t8efQtjxLC4HOQBs4r0f87oYI7Lj3rsR9Vs2qpkFLW7_Hk3BvryQgu7aHgMujTRuph9-Xf-7T_fVtWqjaSUUS-W_O-MePtLfVi0MV_tMRfhDhE13qxO8zHz7rDg7zgYJf4Zb0lkKAqDnEGHPGtmDr1tbXGHVAYv8u28a58FG_ImI_-wTTiN_aXqQef4OfNvNcYS5Dk5up-Y1uLo_2LicwISHeIvQuh8VmBQo9iBtWQ_vw"/>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary leading-tight">Graduate Engineer Trainee</h4>
<p className="text-on-surface-variant font-medium">Tata Motors • Pune, MH</p>
<p className="text-label-sm text-outline mt-1 italic">Updated 2 days ago</p>
</div>
</div>
{/* Progress Stepper */}
<div className="flex-1 max-w-xl">
<div className="relative flex items-center justify-between w-full">
{/* Progress Line */}
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-0 w-2/3 h-[2px] bg-primary -translate-y-1/2 z-0"></div>
{/* Steps */}
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<span className="text-[10px] font-bold uppercase text-primary">Applied</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<span className="text-[10px] font-bold uppercase text-primary">Technical</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border-4 border-primary-fixed">
<span className="material-symbols-outlined text-sm">calendar_month</span>
</div>
<span className="text-[10px] font-bold uppercase text-primary">Interview</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
<div className="w-8 h-8 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-sm">military_tech</span>
</div>
<span className="text-[10px] font-bold uppercase">Selection</span>
</div>
</div>
</div>
{/* Actions & Badge */}
<div className="flex flex-col items-end gap-3 min-w-[140px]">
<span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold uppercase">Action Required</span>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-colors">Message</button>
<button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Details</button>
</div>
</div>
</div>
</div>
{/* Application Card 2 */}
<div className="bg-surface border border-outline-variant rounded-lg p-6 hover:shadow-md transition-all">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white rounded-lg border border-outline-variant p-2 flex items-center justify-center shrink-0">
<img alt="Thermax" className="max-w-full" data-alt="The corporate branding of Thermax Global, featuring industrial blue tones and sharp geometric lines. The logo is presented on a clean, minimalist white background with professional lighting, symbolizing industrial innovation and reliability in the Maharashtra energy sector. High-contrast utility style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxayWT9GMp3T7LdHtWz-_MBaXNjYusXJGQ5CYzO6lXInewRnIIZKFDS9J5WIlLi4QoXAEgW4teBx9aZTPg_-d4UHpVTdOMvStOcuAxI_eOHJfiHAtCYr_k7UXFULMzL6z9I2Q_plXJmEJPlh11amUvDadBf5kY-U7mdfpNlNHE050PUfEyqf4vY2RRLwe85Yg65xyxD_ODZc4g34Y-iqxTd4fRv7K52FoQoQKxslmFu2WGposamQ4wOThYzV8bH7o_utGO0Ptw4M"/>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary leading-tight">Project Engineer</h4>
<p className="text-on-surface-variant font-medium">Thermax • Mumbai, MH</p>
<p className="text-label-sm text-outline mt-1 italic">Updated 5 hours ago</p>
</div>
</div>
<div className="flex-1 max-w-xl">
<div className="relative flex items-center justify-between w-full">
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-primary -translate-y-1/2 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"><span className="material-symbols-outlined text-sm">check</span></div>
<span className="text-[10px] font-bold uppercase text-primary">Applied</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface border-4 border-primary-fixed flex items-center justify-center"><span className="material-symbols-outlined text-sm text-primary">history_edu</span></div>
<span className="text-[10px] font-bold uppercase text-primary">Technical</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
<div className="w-8 h-8 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center"><span className="material-symbols-outlined text-sm">forum</span></div>
<span className="text-[10px] font-bold uppercase">Interview</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
<div className="w-8 h-8 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center"><span className="material-symbols-outlined text-sm">emoji_events</span></div>
<span className="text-[10px] font-bold uppercase">Selection</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3 min-w-[140px]">
<span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase">In Progress</span>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-colors">Message</button>
<button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Details</button>
</div>
</div>
</div>
</div>
{/* Application Card 3 */}
<div className="bg-surface border border-outline-variant rounded-lg p-6 hover:shadow-md transition-all opacity-80">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white rounded-lg border border-outline-variant p-2 flex items-center justify-center shrink-0 grayscale">
<img alt="L&T" className="max-w-full" data-alt="The Larson and Toubro logo, a premier Indian industrial conglomerate, rendered in a sharp, high-contrast monochrome version for a professional status dashboard. The logo is centered in a white frame, representing institutional stability and engineering excellence. The lighting is clean and uniform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCUHeKVSPNn9GMXWjydhyxwUS2uLC1Ib46lK4SwDQsa7B4Cz-vRVD4_XfjtYF9bb0XgRRodn0d0ve-kHWtLDX97srNZG-XNdVjwNx8ge_aa92V23Wti8qoRLZBIvv-7V7zG1nLJY_moCtoNz-rmkoZyk8z7LNMcS8LWgaS0sNRALuDdFnuMFrzbrO7vPV6nvf8k_wc3Mv5Rrh4RPgr5IeTHhGNnmvRaLvQ-6Xu0RxN8Jr0dgs0gRnF3M4EF2w0wB7ljpQPYTFXf9s"/>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary leading-tight">Design Intern (Civil)</h4>
<p className="text-on-surface-variant font-medium">L&T Construction • Navi Mumbai</p>
<p className="text-label-sm text-outline mt-1 italic">Closed 1 week ago</p>
</div>
</div>
<div className="flex-1 max-w-xl">
<div className="relative flex items-center justify-between w-full">
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-error -translate-y-1/2 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-error text-white flex items-center justify-center"><span className="material-symbols-outlined text-sm">close</span></div>
<span className="text-[10px] font-bold uppercase text-error">Closed</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3 min-w-[140px]">
<span className="px-3 py-1 bg-error-container text-on-error-container rounded-full text-xs font-bold uppercase">Rejected</span>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 border border-outline-variant text-outline rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-colors">Feedback</button>
</div>
</div>
</div>
</div>
</section>
{/* Skill Assessment CTA */}
<section className="mt-stack-lg bg-primary-container p-8 rounded-xl relative overflow-hidden">
<div className="relative z-10 max-w-lg">
<h3 className="font-headline-lg text-headline-lg text-white mb-2">Boost Your Odds</h3>
<p className="text-primary-fixed mb-6 font-body-md">Complete a verified skill assessment in 'CAD Design' or 'Structural Mechanics' to jump to the front of the queue for top industrial roles.</p>
<button className="px-6 py-3 bg-secondary-container text-on-secondary-fixed rounded-lg font-bold text-label-md hover:scale-105 transition-transform">Start Assessment</button>
</div>
{/* Decorative background element */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-10 rounded-full -mr-20 -mt-20"></div>
<div className="absolute bottom-0 right-0 w-40 h-40 bg-on-tertiary-container opacity-20 rounded-full -br-10 -mb-10"></div>
</section>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface dark:bg-on-background border-t border-outline-variant dark:border-outline shadow-sm z-50">
<a href="/student-portal/dashboard" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a href="/public/find-diploma-jobs" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200">
<span className="material-symbols-outlined">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a href="/student-portal/job-application-status" className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim bg-secondary-fixed dark:bg-on-secondary-fixed-variant rounded-xl px-3 py-1 transition-all duration-200">
<span className="material-symbols-outlined">assignment_turned_in</span>
<span className="font-label-sm text-label-sm">Status</span>
</a>
<a href="/student-portal/profile" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>


    </div>
  );
}
