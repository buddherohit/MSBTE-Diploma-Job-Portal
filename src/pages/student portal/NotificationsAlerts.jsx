import React from 'react';

export default function NotificationsAlerts() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar Shell */}
<header className="bg-surface dark:bg-on-background flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 border-b border-outline-variant dark:border-outline h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MSBTE Jobs</h1>
</div>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a young engineering graduate in a clean white shirt against a soft, blurred office background. The lighting is bright and even, reflecting a corporate modern aesthetic with high clarity and a friendly, approachable mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADaS6jDJHkMc7NRYTYS52YNZiVvc6Da17cqfND0lcLUPxao8Y_ievMYO5lSjamQV7UG6EAE6vMVmxrZ_3h3aYwZKEaYIuwO-yS2PA2LkYBngbWWbAVdInBURyM1ygtjpNMmkjvl2LzxIWaJ_MUrrmLgOBUnraoflaWxxfojUNMblgUurgTCmWE5NqZPuDAKx0d5wi6uRJrYQ-_oEpdObeHSjybCG-NRO20pnVMBrumDjhd__lb-_ezU3I7Xte0e6hkj-Og3f-SmmI" />
</div>
</div>
</header>
<main className="pb-24 max-w-lg mx-auto min-h-screen">
{/* Header Actions */}
<div className="px-4 pt-6 pb-4 flex justify-between items-end">
<div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Notifications</h2>
<p className="font-body-md text-on-surface-variant">You have 3 unread updates</p>
</div>
<button className="font-label-md text-primary flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-[18px]" data-icon="done_all">done_all</span>
                Mark all as read
            </button>
</div>
{/* Filter Tabs */}
<nav className="flex px-4 border-b border-outline-variant mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
<button className="px-6 py-3 font-label-md text-primary border-b-2 border-primary">All</button>
<button className="px-6 py-3 font-label-md text-on-surface-variant">Jobs</button>
<button className="px-6 py-3 font-label-md text-on-surface-variant">System</button>
<button className="px-6 py-3 font-label-md text-on-surface-variant">Applications</button>
</nav>
{/* Notification List */}
<div className="space-y-stack-md px-4">
{/* Interview Reminder */}
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex gap-4 transition-all duration-200 active:scale-95 shadow-sm">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: '\'FILL\' 1' }}>notifications</span>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-label-md text-on-surface font-bold">Interview Reminder</h3>
<div className="flex items-center gap-2">
<span className="font-label-sm text-on-surface-variant">2h ago</span>
<div className="unread-dot"></div>
</div>
</div>
<p className="font-body-md text-on-surface-variant leading-tight">
                        Interview with <span className="font-semibold text-on-surface">Thermax Limited</span> scheduled for tomorrow at 10:00 AM.
                    </p>
<div className="pt-2 flex gap-2">
<button className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-sm">View Details</button>
<button className="border border-outline text-primary px-4 py-1.5 rounded-full font-label-sm">Reschedule</button>
</div>
</div>
</div>
{/* Job Alert */}
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex gap-4 transition-all duration-200 active:scale-95 shadow-sm">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="work">work</span>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-label-md text-on-surface font-bold">New Job Match</h3>
<div className="flex items-center gap-2">
<span className="font-label-sm text-on-surface-variant">5h ago</span>
<div className="unread-dot"></div>
</div>
</div>
<p className="font-body-md text-on-surface-variant leading-tight">
                        New <span className="font-semibold text-on-surface">Maintenance Engineer</span> role at Tata Motors matches your profile.
                    </p>
<div className="pt-2">
<span className="inline-flex items-center px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-sm gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="bolt">bolt</span>
                            Quick Apply
                        </span>
</div>
</div>
</div>
{/* Application Update */}
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex gap-4 transition-all duration-200 active:scale-95 shadow-sm">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-label-md text-on-surface font-bold">Application Shortlisted</h3>
<div className="flex items-center gap-2">
<span className="font-label-sm text-on-surface-variant">1d ago</span>
<div className="unread-dot"></div>
</div>
</div>
<p className="font-body-md text-on-surface-variant leading-tight">
                        Your application for <span className="font-semibold text-on-surface">Production Trainee</span> has been shortlisted.
                    </p>
</div>
</div>
{/* System Notification */}
<div className="bg-surface p-4 rounded-xl border border-outline-variant opacity-80 flex gap-4 grayscale-[0.5]">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="font-label-md text-on-surface font-bold">Complete Profile</h3>
<div className="flex items-center gap-2">
<span className="font-label-sm text-on-surface-variant">3d ago</span>
</div>
</div>
<p className="font-body-md text-on-surface-variant leading-tight">
                        Verify your email to complete your professional profile.
                    </p>
</div>
</div>
{/* Promo/Industrial Insight (Bento Style Card) */}
<div className="bg-primary text-on-primary p-6 rounded-xl relative overflow-hidden mt-8">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">Career Roadmap</h3>
<p className="font-body-md mb-4 opacity-90">Unlock personalized industry blueprints for Diploma in Mechanical Engineering graduates.</p>
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label-md">Explore Now</button>
</div>
{/* Abstract blueprint decoration */}
<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[180px]" data-icon="architecture">architecture</span>
</div>
</div>
</div>
</main>
{/* BottomNavBar Shell */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl border-t border-outline-variant">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-transform duration-150">
<span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: '\'FILL\' 1' }}>notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</button>
</nav>


    </div>
  );
}
