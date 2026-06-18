import React from 'react';

export default function SavedJobsStudentPortal() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-40 bg-surface dark:bg-inverse-surface shadow-sm h-16 flex items-center justify-between px-gutter">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="school">school</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">MSBTE Pro</h1>
</div>
<div className="hidden md:flex items-center gap-6">
<nav className="flex gap-4">
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Home</a>
<a className="font-label-md text-label-md text-primary font-bold hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Resume</a>
</nav>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a young adult student with a warm, confident expression, set against a blurred academic background. The lighting is natural and bright, creating a clean light-mode aesthetic. The style is modern corporate, maintaining a high-contrast and professional look suitable for an industrial job portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUlFVApTqvKMuXtAPR8pT9N1OOqnfNnVqP4HIBfv72-eFQJIOVrl-g6R0c5Pe-l4qpOcRptfeNYGzzwPWcciJJkxQRb6zzEd-mwBmpv5yik8gU9m774uPepdrhvNDQzse3UvU_Q_CXqk6U3TF5n8BloSorVYuS1eEENrQLdE659bDCWbBERQVQG1eczCEI3l0t4ZqKIDtsOUHAZBnMD72QbG0mgR9DJ8ylYuHbSX5HH2T0oUyRizbwWzpM78BYIAI2vlL445tGrA"/>
</div>
</div>
<button className="md:hidden p-2 text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-32">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Saved Opportunities</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Track and manage the roles you're interested in.</p>
</div>
{/* Path Switcher (Industrial Style) */}
<div className="inline-flex bg-surface-container p-1 rounded-xl border border-outline-variant">
<button className="px-4 py-2 rounded-lg font-label-md text-label-md bg-white text-primary shadow-sm">Student View</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high">Recruiter View</button>
</div>
</div>
{/* Search and Filters */}
<div className="flex flex-col md:flex-row gap-4 mb-10">
<div className="relative flex-1 group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input id="savedJobsSearchInput" className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md" placeholder="Search within saved jobs..." type="text"/>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="flex items-center gap-2 px-4 py-2.5 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">history</span> Recent
                </button>
<button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-highest active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">event</span> Deadline
                </button>
<div className="h-8 w-[1px] bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-highest active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">filter_list</span> All Filters
                </button>
</div>
</div>
{/* Job Cards Grid */}
<div id="savedJobsGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Rendered dynamically via JavaScript */}
</div>
</main>
{/* BottomNavBar */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-2 pt-1 bg-surface dark:bg-inverse-surface shadow-[0_-4px_12px_rgba(15,23,42,0.08)] rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-sm text-label-sm">Resume</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="work" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-sm text-label-sm">Status</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>


    </div>
  );
}
