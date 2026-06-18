import React from 'react';

export default function EmployerProfileSettings() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="fixed top-0 right-0 left-0 md:left-80 z-40 bg-surface-container-highest dark:bg-surface-container-highest border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile md:px-gutter w-full h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary md:hidden cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Admin Verification</h1>
</div>
<div className="flex items-center gap-4">
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 hover:shadow-md">
                Save Changes
            </button>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Admin Profile" className="w-full h-full object-cover" data-alt="A professional corporate portrait of a middle-aged male recruiter wearing a crisp white shirt and navy blue blazer. The lighting is soft and professional, set against a blurred high-tech office background. The overall aesthetic is clean, trustworthy, and institutional, aligning with a premium job platform's administrative interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCduyxlv20MgJcv3CZuAvXW0l2kmBrFM8rdSJN4RXCF09HFB6Meo26phBFuoxTwxKDvXbfirLgYQzgepX41Lp32aejilLMGKw4x95xuGP1BUYQ7cUcAszYosq60Dd7WhZLi4yyK2exaaLyS09Qri6BcEO6fvrlNWUQtq2nb_AQlRgHQ-k0JydQttn-_4AP_kFYmUZ5WjieL0cUl1lVyJ_ybOPJJdbdLMfDJ2OB2wQ8OsQZcNCtf2xo6uK5XZtHy-jo8Su9_jw38Yvk" />
</div>
</div>
</header>
{/* NavigationDrawer (Desktop Only) */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-80 bg-surface dark:bg-surface border-r border-outline-variant z-50">
<div className="p-6 border-b border-surface-container-low flex flex-col items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-4xl" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md font-bold text-primary">Moderator Panel</h2>
<p className="text-on-surface-variant font-label-sm">MSBTE Diploma Jobs</p>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 inline-block">Super Admin</span>
</div>
</div>
<div className="flex-1 py-4 space-y-1">
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary" data-icon="pending_actions">pending_actions</span>
<span className="font-label-md">Pending Requests</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary" data-icon="verified_user">verified_user</span>
<span className="font-label-md">Verified Entities</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary" data-icon="report_problem">report_problem</span>
<span className="font-label-md">Flagged Profiles</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary" data-icon="history_edu">history_edu</span>
<span className="font-label-md">Audit Logs</span>
</a>
<a className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4 font-bold" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md">System Settings</span>
</a>
</div>
</nav>
{/* Main Content Canvas */}
<main className="pt-24 px-margin-mobile md:px-gutter max-w-6xl mx-auto pb-12">
<header className="mb-8">
<h2 className="font-display-lg text-display-lg text-primary tracking-tight">Employer Profile</h2>
<p className="text-on-surface-variant max-w-2xl">Manage your organization's public identity and recruitment preferences for the MSBTE Diploma talent pool.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Section 1: Company Identity */}
<div className="lg:col-span-8 space-y-8">
<section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm transition-hover hover:shadow-md">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="business">business</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Company Identity</h3>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-shrink-0">
<div className="relative w-32 h-32 rounded-xl bg-surface-container border-2 border-dashed border-outline flex flex-col items-center justify-center cursor-pointer group hover:bg-surface-container-high transition-colors">
<img alt="Company Logo" className="w-full h-full object-contain p-2" data-alt="A minimalist logo for Thermax Limited, a prominent engineering and manufacturing firm, presented in a clean, high-resolution format. The background is a crisp white square with rounded corners, reflecting a modern corporate identity that balances industrial strength with technological precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-vqbMKEd6G0Yq40XBIpOtzW5e1JruKmqtA-XZx7muJzoMiOlGVGmpF1gcXxABVbQlNLt_4HoOD_r_J80jRIDp4CQtbQ-E5Em_87hYA70Kp7iaSufzAemZ59tFtB45i-cBne2IMFVAVBtOzcdzh4LlajjK7l0zlzPO5ePKmdO9LPFWpndPZNcT7942O4Rfh7GuSbJp0vE35tF5fegUy-WnNw4DXvmagGDpH_DVML_k0DvRCT4Dp2GplRoZKMzYxH5FKA3TrDxVn4M" />
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity">
<span className="material-symbols-outlined text-white" data-icon="edit">edit</span>
</div>
</div>
<p className="text-center text-label-sm font-label-sm mt-2 text-outline">Change Logo</p>
</div>
<div className="flex-1 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Company Name</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md" type="text" value="Thermax Limited" />
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Industry</label>
<select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md">
<option>Engineering & Manufacturing</option>
<option>Energy & Environment</option>
<option>Automotive</option>
<option>Chemical Process</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">MIDC Location (Maharashtra)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="location_on">location_on</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2.5 font-body-md" type="text" value="Pimpri-Chinchwad MIDC, Pune" />
</div>
</div>
</div>
</div>
</section>
{/* Section 2: Professional Details */}
<section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Professional Details</h3>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Company Website</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md" type="url" value="https://www.thermaxglobal.com" />
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Year Established</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md" type="number" value="1966" />
</div>
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Brief Bio</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md resize-none" rows="4">Thermax Limited is a leading conglomerate in the energy and environment space. We offer integrated innovative solutions in the areas of heating, cooling, power, water and waste management, air pollution control and chemicals.</textarea>
<p className="text-label-sm font-label-sm text-outline text-right">186 / 500 characters</p>
</div>
</div>
</section>
</div>
{/* Sidebar Column */}
<div className="lg:col-span-4 space-y-8">
{/* Section 3: Contact Information */}
<section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="contact_mail">contact_mail</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Contact</h3>
</div>
<div className="space-y-4">
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Recruiter Name</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md" type="text" value="Deepak Deshpande" />
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 font-body-md" type="tel" value="+91 20 6612 2999" />
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant">Verified Email</label>
<div className="relative">
<input className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-on-surface-variant" disabled="" type="email" value="careers@thermaxglobal.com" />
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-tertiary-container text-sm" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
</div>
</div>
</div>
</section>
{/* Section 4: Recruitment Preferences */}
<section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm border-l-4 border-l-secondary-container">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-secondary" data-icon="person_search">person_search</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Recruitment</h3>
</div>
<div className="space-y-6">
<div className="space-y-3">
<label className="font-label-md text-label-md text-on-surface-variant">Hiring Status</label>
<div className="flex items-center justify-between p-3 bg-secondary-fixed/30 rounded-lg">
<span className="font-label-md text-on-secondary-fixed">Currently Hiring</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-outline rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-container"></div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Default Categories</label>
<div className="flex flex-wrap gap-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
                                    Mechanical <span className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</span>
</span>
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
                                    Electrical <span className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</span>
</span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-label-sm border border-outline-variant cursor-pointer hover:bg-surface-container-highest">+ Add New</span>
</div>
</div>
</div>
</section>
{/* Danger Zone */}
<div className="p-4 border border-error-container bg-error-container/10 rounded-xl flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface font-bold">Deactivate Profile</p>
<p className="text-label-sm text-on-surface-variant">Temporarily hide your listing</p>
</div>
<button className="text-error font-label-md hover:underline">Deactivate</button>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface-container border-t border-outline-variant px-2 shadow-lg">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="hourglass_empty">hourglass_empty</span>
<span className="font-label-sm text-label-sm">Pending</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
<span className="font-label-sm text-label-sm">Verified</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="settings" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>


    </div>
  );
}
