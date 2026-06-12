import React from 'react';

export default function BillingSubscriptionSettings() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-40 bg-surface-container-lowest border-b border-outline-variant">
<div className="flex justify-between items-center px-4 h-16 w-full max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[32px]">business_center</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MahaRecruit</h1>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">person</span>
</div>
</div>
</div>
</header>
<div className="flex max-w-container-max mx-auto min-h-[calc(100vh-64px)]">
{/* NavigationDrawer (Desktop Only) */}
<aside className="hidden md:flex flex-col h-auto w-80 py-6 bg-surface border-r border-outline-variant">
<div className="px-6 mb-8">
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-primary">domain</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Admin Settings</h3>
<p className="text-[12px] text-on-surface-variant">Manage your organization</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-label-md text-label-md">Account Details</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined">domain</span>
<span className="font-label-md text-label-md">Company Profile</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>payments</span>
<span className="font-label-md text-label-md">Billing & Subscription</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Team Management</span>
</a>
</nav>
</aside>
{/* Main Content Area */}
<main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 max-w-5xl mx-auto w-full">
<header className="mb-8">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Billing & Subscription</h2>
<p className="text-on-surface-variant">Manage your organization's subscription, usage, and payment methods.</p>
</header>
{/* Subscription Overview Bento */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
{/* Current Plan Card */}
<div className="md:col-span-2 p-6 rounded-xl bg-primary text-on-primary flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<span className="px-3 py-1 bg-white/20 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4 inline-block">Active Plan</span>
<h3 className="font-display-lg text-display-lg mb-2 leading-tight">Industrial Partner</h3>
<p className="font-headline-md text-headline-md opacity-90">Enterprise Plan</p>
</div>
<div className="mt-8 flex items-end justify-between relative z-10">
<div>
<p className="text-sm opacity-70">Next Renewal</p>
<p className="font-bold">October 24, 2024</p>
</div>
<button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform active:scale-95">
                            Upgrade Plan
                        </button>
</div>
{/* Decorative Element */}
<div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
</div>
{/* Quick Stats */}
<div className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest flex flex-col justify-center gap-4">
<div>
<p className="text-on-surface-variant text-sm mb-1">Monthly Billing</p>
<p className="text-3xl font-bold text-on-surface">₹45,000<span className="text-sm font-normal text-on-surface-variant">/mo</span></p>
</div>
<div className="pt-4 border-t border-outline-variant">
<a className="text-primary font-semibold flex items-center gap-2 hover:underline" href="#">
                            View Plan Comparison
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</div>
{/* Usage Section */}
<section className="mb-8">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6">Current Usage</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Job Posting Progress */}
<div className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">work_history</span>
<span className="font-semibold">Job Posting Limits</span>
</div>
<span className="font-bold text-primary">8 / 10 used</span>
</div>
<div className="w-full bg-surface-container rounded-full h-3 mb-2">
<div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
</div>
<p className="text-[12px] text-on-surface-variant">2 postings remaining in your current cycle.</p>
</div>
{/* Talent Export Progress */}
<div className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">person_search</span>
<span className="font-semibold">Talent Export Credits</span>
</div>
<span className="font-bold text-tertiary">420 / 500</span>
</div>
<div className="w-full bg-surface-container rounded-full h-3 mb-2">
<div className="bg-tertiary-container h-3 rounded-full transition-all duration-1000" style={{ width: '84%' }}></div>
</div>
<p className="text-[12px] text-on-surface-variant">Credits reset on the 1st of every month.</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Payment Methods */}
<section>
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface">Payment Methods</h3>
<button className="text-primary font-semibold hover:bg-primary-container/10 px-3 py-1 rounded-md transition-colors">Manage</button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 border border-outline-variant rounded-xl bg-surface-container-lowest">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-on-background rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
<div>
<p className="font-semibold">•••• •••• •••• 4242</p>
<p className="text-[12px] text-on-surface-variant">Expires 12/26 • Default</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">check_circle</span>
</div>
<button className="w-full border-2 border-dashed border-outline-variant rounded-xl p-4 text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add</span>
                            Add New Payment Method
                        </button>
</div>
</section>
{/* Upcoming Invoices */}
<section>
<h3 className="font-headline-md text-headline-md text-on-surface mb-6">Upcoming Invoices</h3>
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
<span className="text-sm font-bold text-on-surface-variant uppercase">Invoice Date</span>
<span className="text-sm font-bold text-on-surface-variant uppercase">Amount</span>
</div>
<div className="divide-y divide-outline-variant">
<div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors group">
<div>
<p className="font-semibold">Sept 24, 2024</p>
<p className="text-[12px] text-on-surface-variant">Processing • ID: #INV-0042</p>
</div>
<div className="flex items-center gap-4">
<span className="font-bold">₹45,000</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary cursor-pointer">download</span>
</div>
</div>
<div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors group">
<div>
<p className="font-semibold">Oct 24, 2024</p>
<p className="text-[12px] text-on-surface-variant">Scheduled • ID: #INV-0043</p>
</div>
<div className="flex items-center gap-4">
<span className="font-bold">₹45,000</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary cursor-pointer">schedule</span>
</div>
</div>
</div>
<button className="w-full py-3 text-primary text-sm font-bold border-t border-outline-variant hover:bg-surface-container-low transition-colors">
                            View Billing History
                        </button>
</div>
</section>
</div>
</main>
</div>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container shadow-md z-50 rounded-t-xl">
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined">person_search</span>
<span className="font-label-sm text-label-sm">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined">work_history</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform duration-150">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</button>
</nav>


    </div>
  );
}
