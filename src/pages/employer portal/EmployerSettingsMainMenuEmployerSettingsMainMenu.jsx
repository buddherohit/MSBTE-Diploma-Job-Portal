import React from 'react';

export default function EmployerSettingsMainMenuEmployerSettingsMainMenu() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
<div className="flex justify-between items-center px-4 h-16 w-full max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="business_center">business_center</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MahaRecruit</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6 mr-6">
<span className="font-label-md text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Dashboard</span>
<span className="font-label-md text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Jobs</span>
<span className="font-label-md text-primary font-bold cursor-pointer">Settings</span>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-outline-variant">
<img alt="Employer Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate hiring manager in his 40s, wearing a tailored navy blazer and a crisp white shirt. The background is a softly blurred modern office environment with warm architectural lighting. The overall aesthetic is clean, corporate, and trustworthy, fitting a professional recruitment platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf2rOrbwsQYdljAO2TR3-H1D2piLY9hbw5J0TmUX4l430RYtTjiCkpfsNSsWby_n8HsKAFHbLgwop8KF80BI3sV_JDzuarr3QxMMaHNZR2VtJ0Uxzb2ZXhruqczGTgf8Aa6Ivce5SJRHtf9e7cZMVo32r7VxJ6k0VbPFR1__Lfqv7zTGsz7BpFYscyoRmoAxZvOZMsJboERCedaQeXlnOiylNEBrcxHXm00qzt2aYLKSJp-y-KGp4jKwJaSBdkkiEQl3XnRT6-PTE"/>
</div>
</div>
</div>
</header>
<main className="flex min-h-[calc(100vh-64px)] max-w-container-max mx-auto">
{/* NavigationDrawer (Sidebar) */}
<aside className="hidden md:flex flex-col h-full py-6 w-80 bg-surface border-r border-outline-variant">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="admin_panel_settings">admin_panel_settings</span>
</div>
<div>
<h2 className="font-label-md text-on-surface font-bold">Admin Settings</h2>
<p className="text-xs text-on-surface-variant">Manage your organization</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-label-md">Account Details</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="domain">domain</span>
<span className="font-label-md">Company Profile</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md">Billing & Subscription</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md">Team Management</span>
</a>
</nav>
<div className="px-6 mt-auto">
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-error hover:bg-error-container/10 transition-all">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md">Logout</span>
</button>
</div>
</aside>
{/* Content Canvas */}
<section className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
<header className="mb-8">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Employer Settings</h2>
<p className="text-on-surface-variant body-md">Configure your personal and corporate recruitment identity.</p>
</header>
{/* Bento Grid of Settings */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
{/* Account Details Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="account_circle">account_circle</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Account Details</h3>
<p className="text-on-surface-variant font-body-md mb-6">Manage your personal profile, secure your account with 2FA, and update your login credentials.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Personal Info</span>
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Security</span>
</div>
</div>
{/* Company Profile Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-3xl" data-icon="domain">domain</span>
</div>
<div className="flex items-center gap-2">
<span className="label-sm px-2 py-0.5 bg-green-100 text-green-700 rounded border border-green-200">Verified</span>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Company Profile</h3>
<p className="text-on-surface-variant font-body-md mb-6">Define office locations, industry specializations, and verification status to build trust with candidates.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Location</span>
<span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Industry</span>
</div>
</div>
{/* Billing & Subscription Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
<div className="flex items-center gap-2 mb-2">
<h3 className="font-headline-md text-headline-md">Billing & Subscription</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-6">Manage your active recruitment plan, download invoices, and update payment methods.</p>
<div className="flex items-center justify-between p-3 bg-secondary-container/10 rounded-lg border border-secondary/20">
<span className="font-label-sm text-on-secondary-fixed">Current Plan: Industrial Pro</span>
<button className="text-secondary font-bold text-xs">Upgrade</button>
</div>
</div>
{/* Team Management Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-on-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-3xl" data-icon="group">group</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Team Management</h3>
<p className="text-on-surface-variant font-body-md mb-6">Invite recruiters, assign hierarchical roles, and monitor team activity logs across the organization.</p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">SK</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold">+4</div>
</div>
</div>
</div>
{/* Recruiter Tip Section */}
<div className="mt-stack-lg bg-tertiary-container text-on-tertiary p-6 rounded-xl relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-14 h-14 bg-on-tertiary/20 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-3xl" data-icon="lightbulb">lightbulb</span>
</div>
<div>
<h4 className="font-headline-md text-white mb-1">Recruiter Tip</h4>
<p className="font-body-md text-tertiary-fixed opacity-90">Keeping your company profile updated with recent industrial office photos and specific technical roles increases candidate application rates by up to 45%.</p>
</div>
<button className="md:ml-auto px-6 py-3 bg-white text-tertiary font-bold rounded-lg hover:bg-tertiary-fixed transition-colors whitespace-nowrap">
                        Update Profile
                    </button>
</div>
{/* Abstract Design Element */}
<div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
</div>
{/* Mobile Logout Button */}
<div className="mt-8 md:hidden">
<button className="w-full flex items-center justify-center gap-3 py-4 bg-error/10 text-error rounded-xl font-bold">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                    Logout
                </button>
</div>
</section>
</main>
{/* BottomNavBar (Mobile only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container shadow-md z-50 rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-label-sm text-label-sm">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined" data-icon="work_history">work_history</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</div>
</nav>


    </div>
  );
}
