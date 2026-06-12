import React from 'react';

export default function CompanyProfileSettings() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation */}
<header className="w-full top-0 sticky z-40 bg-surface-container-lowest border-b border-outline-variant">
<div className="flex justify-between items-center px-4 h-16 w-full max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-headline-md" data-icon="business_center">business_center</span>
<span className="font-headline-md text-headline-md font-bold text-primary">MahaRecruit</span>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full transition-colors" data-icon="notifications">notifications</button>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border-2 border-primary">
<img alt="Employer Profile Avatar" className="w-full h-full object-cover" data-alt="A professional close-up portrait of a corporate executive in a modern office environment. The lighting is soft and professional, using high-key tones to match a clean light-mode UI. The background shows a blurred high-end architectural space with hints of glass and steel, reinforcing a Corporate Modern aesthetic. The subject wears a sharp navy suit, suggesting institutional stability and authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkcGQKF_FXkM4mcCpyuwR0lVzSkizJN_gzFgFZ9cDHlNoCkN-FMEDiHn9HiggnqvuS-6UotQn0GaEn7qUhlTWl_qKJiXBspbytrBNS5wI1Y9mUl4OC2uSE7JTpq8pQNwugXzv61jIptQBmOzPBXPzUUSapcSNABBcFoHJCv8jDdWN12vT5TqAdNNgzRAzl70ZPCW-LJeQt9R-SouJusGXOS0nUkh6NZQ2DNk8nScC3IIEZjpWQkPaCh8NB2mPyDNzqrvvFdJIV1lI"/>
</div>
</div>
</div>
</header>
<div className="max-w-container-max mx-auto flex">
{/* Navigation Drawer (Desktop) */}
<aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-80 py-6 sticky top-16 bg-surface border-r border-outline-variant">
<div className="px-6 mb-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="admin_panel_settings">admin_panel_settings</span>
</div>
<div>
<p className="font-label-md text-on-surface">Admin Settings</p>
<p className="text-label-sm text-on-surface-variant">Manage your organization</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-label-md text-label-md">Account Details</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="domain">domain</span>
<span className="font-label-md text-label-md">Company Profile</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Billing & Subscription</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Team Management</span>
</a>
</nav>
</aside>
{/* Main Content Area */}
<main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 max-w-4xl mx-auto">
<div className="flex flex-col gap-stack-md">
{/* Header & Progress */}
<div className="space-y-4">
<h1 className="font-headline-lg text-headline-lg text-on-background">Company Profile</h1>
<p className="text-body-md text-on-surface-variant">Complete your organization's identity to build trust with high-potential diploma candidates.</p>
<div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-label-md text-on-surface">Profile Completeness</span>
<span className="font-label-md text-label-md text-primary">85%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%] transition-all duration-1000 ease-out"></div>
</div>
</div>
</div>
{/* Form Section */}
<form className="flex flex-col gap-stack-lg mt-4">
{/* Logo Upload Section */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="image">image</span>
                            Brand Identity
                        </h2>
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="relative group">
<div className="w-32 h-32 rounded-xl bg-surface-container-high border-2 border-dashed border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="Company Logo" className="w-full h-full object-contain p-4" data-alt="A minimalist and geometric corporate logo featuring bold, structural lines that evoke a sense of infrastructure and industrial strength. The logo uses Maharashtra Blue and Action Orange accents against a crisp white background. The visual style is clean and professional, representing a modern industrial powerhouse with institutional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWXFHSowe2VKamJi5AdMMDQeyGWA1Lwz0cxJq81mkgI2Xjnw3xC_7x7fYW2FUr0ZI6qgqo-m3goNDKKYJENzESsWk73Uy_912zbVYZykDxxocbqiBFmCB_NT0HXUJFrokC7ElCQYYau1RKbTLUZzRqZgrolSSk816dv7oTMAjtXLde50bfhA4m28vXwRATpm15UQJug1DCxTpz8uvLQGYz013vgHuKKgltmJgI46FGOFzfD6OoTei4Q7zk5FvRoLcMgztD0geB0s"/>
</div>
<button className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container p-2 rounded-full shadow-lg hover:scale-105 transition-transform" type="button">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
<div className="flex-1 space-y-2">
<p className="font-label-md text-label-md">Company Logo</p>
<p className="text-label-sm text-on-surface-variant">SVG, PNG, or JPG (max. 800x800px). Your logo will be visible to all job seekers.</p>
<div className="flex gap-2">
<button className="px-4 py-2 bg-primary text-white rounded-lg font-label-md hover:bg-primary/90 transition-colors" type="button">Upload New</button>
<button className="px-4 py-2 border border-outline-variant text-on-surface rounded-lg font-label-md hover:bg-surface-container-low transition-colors" type="button">Remove</button>
</div>
</div>
</div>
</section>
{/* Industrial Details Grid */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="info">info</span>
                            Organization Details
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
{/* Company Name */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Company Name</label>
<input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" value="Maharashtra Industrial Corp"/>
</div>
{/* Registration Number */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Registration Number</label>
<div className="relative">
<input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all pr-24" type="text" value="U67120MH2023PLC001"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                                        Verified
                                    </span>
</div>
</div>
{/* Industry Sector */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Industry Sector</label>
<select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all">
<option>Infrastructure & Civil</option>
<option selected="">Manufacturing</option>
<option>Automotive</option>
<option>Chemical Engineering</option>
</select>
</div>
{/* Company Size */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Company Size</label>
<select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all">
<option>1-50 Employees</option>
<option>51-200 Employees</option>
<option selected="">201-500 Employees</option>
<option>500+ Employees</option>
</select>
</div>
{/* Headquarters */}
<div className="space-y-2 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface-variant">Headquarters Location</label>
<div className="flex gap-2">
<input className="flex-1 px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" value="Pimpri-Chinchwad, Pune, Maharashtra"/>
<button className="px-4 bg-surface-container-high border border-outline-variant rounded-lg hover:bg-surface-container-highest transition-colors" type="button">
<span className="material-symbols-outlined" data-icon="map">map</span>
</button>
</div>
</div>
</div>
</section>
{/* About Section */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="description">description</span>
                            About the Company
                        </h2>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant">Executive Summary</label>
<textarea className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="Describe your company's mission, industrial expertise, and why students should join your team..." rows="6">Established in 1998, we are a leading automotive component manufacturer specializing in precision engineering and sustainable manufacturing practices for global OEM partners.</textarea>
<div className="flex justify-between items-center mt-2">
<span className="text-label-sm text-on-surface-variant">Character count: 184 / 2000</span>
<span className="text-label-sm text-primary">Rich text editor available</span>
</div>
</div>
</section>
{/* Form Actions */}
<div className="flex flex-col md:flex-row justify-end gap-4 pt-4 mb-10">
<button className="px-8 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary-container/10 transition-all" type="button">Discard Changes</button>
<button className="px-8 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold shadow-md hover:shadow-lg active:scale-95 transition-all" type="submit">Save Profile Changes</button>
</div>
</form>
</div>
</main>
</div>
{/* Bottom Navigation (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container border-t border-outline-variant z-50 rounded-t-xl shadow-md">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-label-sm text-label-sm">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span className="material-symbols-outlined" data-icon="work_history">work_history</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
<span className="material-symbols-outlined" data-icon="settings" data-weight="fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>


    </div>
  );
}
