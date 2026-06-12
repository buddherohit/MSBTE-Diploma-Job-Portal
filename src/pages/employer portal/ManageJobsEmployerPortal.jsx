import React from 'react';

export default function ManageJobsEmployerPortal() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar (Shared Component) */}
<header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex items-center justify-between px-gutter h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer active:opacity-80" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Employer Console</h1>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 cursor-pointer" href="#">Home</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary px-2 py-1 cursor-pointer" href="#">Jobs</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 cursor-pointer" href="#">People</a>
</nav>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center cursor-pointer overflow-hidden border border-outline-variant">
<img alt="Company Logo" className="w-full h-full object-cover" data-alt="A clean and professional company logo avatar for a high-end industrial recruitment agency. The logo features a stylized geometric gear and a compass, symbolizing precision and direction. The background is a crisp white, and the primary brand color is a deep Maharashtra industrial blue. The overall style is modern corporate, emphasizing trust and stability within the manufacturing sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3o7hxR5PnAP_mltgrs5WJfZPxyjVJn7M3J5JPd6IWu8YeMQ5JPwaU1yKdG4_X0xr20NnsKMFafkrDRomogRE_ZmKTQInxCA_TjdM770bbvzpP-qPaj2VTIAIW-tUdQG9Iq2ebSfAhvjvPlMfQ_rt_dg9X4rQbAglcgG3ycL0hwQG0Gmr6pk2qsZ2TsSJSgmlgm-7Gp8YPPbO8-C-fE2vCDJFNBrsEyZ5gUeHmd46LGT1_tZe234g7cYDfnkurgpdK2bMUyjkxkgQ"/>
</div>
</div>
</header>
{/* NavigationDrawer (Shared Component - Desktop Only) */}
<aside className="h-screen w-64 hidden md:flex flex-col fixed left-0 top-0 pt-16 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex-col p-stack-md gap-stack-sm z-40">
<div className="flex flex-col items-start p-4 mb-4 border-b border-outline-variant">
<span className="font-headline-md text-headline-md text-primary font-bold">Maharashtra Industrial</span>
<span className="font-label-md text-label-md text-on-surface-variant">Verified Recruiter</span>
</div>
<nav className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</div>
<div className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container dark:bg-secondary dark:text-on-secondary rounded-lg font-bold cursor-pointer">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-md text-label-md">Job Postings</span>
</div>
<div className="flex items-center gap-3 p-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Applicants</span>
</div>
<div className="flex items-center gap-3 p-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</div>
<div className="flex items-center gap-3 p-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-lg">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</div>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 mt-16 mb-16 md:ml-64 p-4 md:p-8 max-w-screen-xl mx-auto w-full">
{/* Header Section */}
<header className="mb-8">
<h2 className="font-headline-lg text-headline-lg text-primary mb-1">Manage Postings</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Track and manage your active industrial job listings.</p>
</header>
{/* Search & Filter Bar */}
<section className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant mb-8 shadow-sm flex flex-col md:flex-row gap-4 items-center">
<div className="relative w-full md:flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md" placeholder="Search jobs by title..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Status:</span>
<select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md focus:outline-none focus:ring-2 focus:ring-primary w-full">
<option>All Postings</option>
<option>Active</option>
<option>Paused</option>
<option>Closed</option>
</select>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors w-full md:w-auto">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                Post New Job
            </button>
</section>
{/* Job Listing Cards (Grid/Stack) */}
<section className="grid grid-cols-1 gap-4">
{/* Card 1 */}
<div className="job-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-primary" data-icon="engineering">engineering</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Maintenance Engineer</h3>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-surface-container-high px-2 py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Branch: Mechanical</span>
<span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active
                                </span>
</div>
</div>
</div>
<div className="flex md:flex-col items-start md:items-end gap-4 md:gap-1">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
<span className="font-label-md">45 Applicants</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
<span className="font-label-sm">Posted: 12 Oct 2023</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="bg-primary text-on-primary px-4 py-2 rounded font-label-md hover:bg-primary-container transition-colors">View Applicants</button>
<button className="border border-outline px-4 py-2 rounded font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors">Edit</button>
</div>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/* Card 2 */}
<div className="job-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Quality Control Inspector</h3>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-surface-container-high px-2 py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Branch: Production</span>
<span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Paused
                                </span>
</div>
</div>
</div>
<div className="flex md:flex-col items-start md:items-end gap-4 md:gap-1">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
<span className="font-label-md">12 Applicants</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
<span className="font-label-sm">Posted: 05 Oct 2023</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="bg-secondary text-on-secondary px-4 py-2 rounded font-label-md hover:bg-secondary-container transition-colors">Resume Posting</button>
<button className="border border-outline px-4 py-2 rounded font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors">Edit</button>
</div>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/* Card 3 */}
<div className="job-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-tertiary-fixed-dim flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-tertiary" data-icon="bolt">bolt</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Diploma Trainee</h3>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-surface-container-high px-2 py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Branch: Electrical</span>
<span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active
                                </span>
</div>
</div>
</div>
<div className="flex md:flex-col items-start md:items-end gap-4 md:gap-1">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
<span className="font-label-md">89 Applicants</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
<span className="font-label-sm">Posted: 28 Sep 2023</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="bg-primary text-on-primary px-4 py-2 rounded font-label-md hover:bg-primary-container transition-colors">View Applicants</button>
<button className="border border-outline px-4 py-2 rounded font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors">Edit</button>
</div>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/* Card 4 */}
<div className="job-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all duration-300 opacity-80 grayscale-[0.5]">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="architecture">architecture</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">AutoCAD Draughtsman</h3>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-surface-container-high px-2 py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Branch: Civil</span>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-outline rounded-full"></span> Closed
                                </span>
</div>
</div>
</div>
<div className="flex md:flex-col items-start md:items-end gap-4 md:gap-1">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
<span className="font-label-md">34 Applicants</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
<span className="font-label-sm">Posted: 15 Sep 2023</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="bg-primary text-on-primary px-4 py-2 rounded font-label-md hover:bg-primary-container transition-colors">Re-post Job</button>
<button className="border border-outline px-4 py-2 rounded font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors">View Report</button>
</div>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</section>
</main>
{/* BottomNavBar (Shared Component - Mobile Only) */}
<footer className="fixed bottom-0 w-full md:hidden z-50 bg-surface dark:bg-surface-dim border-t border-outline-variant dark:border-outline shadow-lg flex justify-around items-center h-16 px-margin-mobile">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:bg-surface-container-highest scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:bg-surface-container-highest scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:bg-surface-container-highest scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">People</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:bg-surface-container-highest scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
<span className="font-label-sm text-label-sm">More</span>
</div>
</footer>
{/* Simple Hover & Micro-interaction script */}

<style>{`
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to { transform: scale(4); opacity: 0; }
        }
    `}</style>

    </div>
  );
}
