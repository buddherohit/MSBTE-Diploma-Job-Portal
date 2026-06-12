import React from 'react';

export default function ApplicationConfirmation() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation Anchor (Shared Component) */}
<header className="bg-surface dark:bg-on-background flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 border-b border-outline-variant dark:border-outline h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer">menu</span>
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MSBTE Jobs</span>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-8">
<a className="text-on-surface-variant dark:text-on-surface-variant font-label-md transition-colors duration-200 ease-in-out hover:bg-surface-container dark:hover:bg-inverse-surface px-2 py-1 rounded" href="#">Dashboard</a>
<a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary font-label-md px-2 py-1" href="#">Jobs</a>
<a className="text-on-surface-variant dark:text-on-surface-variant font-label-md transition-colors duration-200 ease-in-out hover:bg-surface-container dark:hover:bg-inverse-surface px-2 py-1 rounded" href="#">Profile</a>
</nav>
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUDyWCmHvBhTgnYkd9UBO1HsCMWjERyi5IjXQXZgsWqXTYXOdBwnwAYGUWJdzVZddqorNn6mpDTbeHCtacIDRuM41CMvv2paDIQFf670vILS9JV19BKszB8-ZlpnvsIklHH9ZzlqhNB1A1AvT2PYYoIuRgXeGPPG9pfRzFaY81LnS9f62Yjcq_8Nl2n5eJSVCenyotcKijU6m88d8oG2-Ky8luLD45ViBzKrA67Vid66Xgu6_WqoCs_yWD5Nfr5_7xQUQbLDCbHy8" />
</div>
</div>
</header>
{/* Main Content Area */}
<main className="flex-grow flex items-center justify-center py-stack-lg px-margin-mobile relative overflow-hidden">
{/* Background Pattern Decor */}
<div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full filter blur-[80px]"></div>
</div>
<div className="w-full max-w-2xl z-10">
{/* Success Animation Container */}
<div className="flex flex-col items-center text-center mb-stack-lg">
<div className="success-checkmark w-24 h-24 md:w-32 md:h-32 bg-tertiary-fixed rounded-full flex items-center justify-center mb-stack-md shadow-lg">
<span className="material-symbols-outlined text-6xl md:text-8xl text-on-tertiary-fixed" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
</div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Application Submitted!</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Your application for <span className="font-bold text-on-surface">Maintenance Engineer</span> at <span className="font-bold text-on-surface">Thermax Limited</span> has been successfully sent.
                </p>
</div>
{/* Summary Card: Tonal Layer (Level 1) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm mb-stack-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant p-2 overflow-hidden">
<img className="w-full h-full object-contain" data-alt="A clean, minimalist industrial logo for a global engineering firm named Thermax Limited, featuring professional blue and white color schemes with a modern technical aesthetic. The lighting is crisp and corporate, conveying trust, precision, and architectural stability in a modern high-contrast digital environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5mbSqc8dyRFbPNu1Ii26NU_U8PxRviEONWAC-D3b5mxK1QX5eUKgG6h_N3kE48XgKnL_D3EAXnkOCBjP4Ny2lIB3r608Rsw5ApsC2A5XT4FwYI3NhizEHD5UmPWLIO7K9MHHT7ClkIEsgwU39Boz7WgCGT4SypgeCOwgHgeaMzUfDHNq7sdrijgp0vKSUXfx4OkTXXmhKRU5690rtde8Xp7bdt4dnHDeAs7g6bWq5h9ZObUSxxke69njgtSx0Ci5IhU_10yoU4TU" />
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary-container bg-secondary-fixed px-2 py-0.5 rounded-full inline-block mb-1">Applied Successfully</p>
<h3 className="font-headline-md text-headline-md text-on-surface">Maintenance Engineer</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Thermax Limited • Pune, MH</p>
</div>
</div>
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-on-surface-variant">Applied Date</span>
<span className="font-body-md text-body-md font-bold text-on-surface" id="current-date">Oct 24, 2023</span>
</div>
</div>
</div>
{/* Next Steps Section */}
<div className="bg-primary-fixed/30 rounded-xl p-6 mb-stack-lg border border-primary-fixed">
<h4 className="font-label-md text-label-md text-primary mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">info</span>
                    NEXT STEPS
                </h4>
<ul className="space-y-4">
<li className="flex gap-3">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm flex-shrink-0">1</span>
<p className="font-body-md text-body-md text-on-surface-variant">The HR team at Thermax Limited will review your profile and experience against their requirements.</p>
</li>
<li className="flex gap-3">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm flex-shrink-0">2</span>
<p className="font-body-md text-body-md text-on-surface-variant">You will be notified via email and SMS if your application is shortlisted for an interview.</p>
</li>
<li className="flex gap-3">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm flex-shrink-0">3</span>
<p className="font-body-md text-body-md text-on-surface-variant">Track your application progress in real-time from your dashboard.</p>
</li>
</ul>
</div>
{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-gutter">
<button className="flex-1 bg-primary text-on-primary py-4 px-6 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md">
                    View Application Status
                    <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="flex-1 bg-transparent border border-primary text-primary py-4 px-6 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">search</span>
                    Back to Jobs
                </button>
</div>
</div>
</main>
{/* Bottom Navigation (Mobile View) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="work" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</div>
</nav>


    </div>
  );
}
