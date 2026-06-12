import React from 'react';

export default function NotificationSettings() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="flex justify-between items-center px-gutter w-full h-16 sticky top-0 z-50 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" data-icon="factory">factory</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">MAHA-INDUSTRIAL</h1>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors px-3 py-1 rounded" href="#">Dashboard</a>
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors px-3 py-1 rounded" href="#">Post Job</a>
<a className="font-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary px-3 py-1" href="#">Settings</a>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
                MI
            </div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg mb-24">
<div className="flex flex-col md:flex-row gap-gutter">
{/* Sidebar Navigation */}
<aside className="w-full md:w-64 flex-shrink-0">
<nav className="flex flex-col gap-2">
<button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-high text-primary font-bold">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-label-md">Notifications</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" data-icon="person_outline">person_outline</span>
<span className="font-label-md">Account Details</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-md">Privacy & Security</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md">Billing Info</span>
</button>
</nav>
</aside>
{/* Settings Canvas */}
<section className="flex-grow">
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Notification Settings</h2>
<p className="text-on-surface-variant font-body-md max-w-2xl">Control how and when you receive updates about applications, interviews, and platform news. Choose the channels that best fit your industrial recruitment workflow.</p>
</div>
{/* Bento-style Settings Grid */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter">
{/* Category: New Applications */}
<div className="bg-surface-container-lowest border border-outline-variant p-gutter rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="p-3 bg-primary-container/10 rounded-lg text-primary">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight">New Applications</h3>
<p className="font-label-sm text-on-surface-variant">Alerts when candidates apply to your active job listings.</p>
</div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-outline-variant">
<div className="flex items-center justify-between">
<span className="font-body-md">Push Notification</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">Email Summary</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">SMS Alert</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
</div>
{/* Category: Interview Reminders */}
<div className="bg-surface-container-lowest border border-outline-variant p-gutter rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="p-3 bg-secondary-container/10 rounded-lg text-secondary">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight">Interview Reminders</h3>
<p className="font-label-sm text-on-surface-variant">Stay on top of upcoming interviews and candidate meetings.</p>
</div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-outline-variant">
<div className="flex items-center justify-between">
<span className="font-body-md">Push Notification</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">Email Invitation</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">SMS Reminder (15 min prior)</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
</div>
{/* Category: Job Posting Status */}
<div className="bg-surface-container-lowest border border-outline-variant p-gutter rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="p-3 bg-tertiary-container/10 rounded-lg text-tertiary">
<span className="material-symbols-outlined" data-icon="assignment_turned_in">assignment_turned_in</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight">Job Posting Status</h3>
<p className="font-label-sm text-on-surface-variant">Updates on job approvals, expirations, or requirement flags.</p>
</div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-outline-variant">
<div className="flex items-center justify-between">
<span className="font-body-md">Push Notification</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">Email Report</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">SMS Urgent Alert</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
</div>
{/* Category: Platform Updates */}
<div className="bg-surface-container-lowest border border-outline-variant p-gutter rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="p-3 bg-on-primary-fixed-variant/10 rounded-lg text-on-primary-fixed-variant">
<span className="material-symbols-outlined" data-icon="update">update</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight">Platform Updates</h3>
<p className="font-label-sm text-on-surface-variant">News about new features, security updates, and maintenance.</p>
</div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-outline-variant">
<div className="flex items-center justify-between">
<span className="font-body-md">In-App Banner</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">Monthly Newsletter</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md">SMS System Status</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full toggle-slot transition-colors duration-200">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full toggle-dot transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
</div>
</div>
{/* Footer Action */}
<div className="mt-stack-lg flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant pt-8">
<button className="w-full sm:w-auto px-6 py-2 font-label-md text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors">Discard Changes</button>
<button className="w-full sm:w-auto px-8 py-2 font-label-md bg-secondary-container text-on-secondary-container rounded-lg shadow-sm hover:opacity-90 transition-opacity">Save Preferences</button>
</div>
</section>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline shadow-sm rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary transition-transform active:scale-90 cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary transition-transform active:scale-90 cursor-pointer">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="font-label-sm text-label-sm">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:text-primary transition-transform active:scale-90 cursor-pointer">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">My Jobs</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-xl px-3 py-1 transition-transform active:scale-90 cursor-pointer">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
</nav>


    </div>
  );
}
