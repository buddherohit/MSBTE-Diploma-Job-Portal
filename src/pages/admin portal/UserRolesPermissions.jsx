import React from 'react';

export default function UserRolesPermissions() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface-container-highest dark:bg-inverse-surface docked full-width top-0 z-50 border-b border-outline-variant dark:border-outline flat no shadows sticky">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" data-icon="verified_user">verified_user</span>
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">Partner Verification Hub</h1>
</div>
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md text-on-surface-variant hidden md:block">System Administrator</span>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border border-outline-variant">
<img alt="Admin Profile" data-alt="A professional close-up studio portrait of a high-ranking system administrator. The image features soft, corporate lighting against a clean, neutral architectural background. The aesthetic is modern and high-contrast, reflecting industrial reliability and digital authority with a palette of Maharashtra Blue and professional greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSpuVB9RcgRTja_PR-JVtTVrydlrWJiUxN8aPdFA5IIKTFhv25IyIKdZZ7fVW01ys1hXG4ti6BGMSuCYUL7Op1JOR-9-4L250dmjdxY6np6cIxmnuawN5V7ryRTkab3y725VUVvS2OmMi9QMsGzJRCISFpZ8PM_nDP0k9LUoglNYBShhzo3LkYXktPz6ghRDiu_JYcflTx9Y95svMbEnd7qJm7v_1hP-kr4NhPlW87RtiQK8kD7B_8H3Vp5Fs-o7ar_-EUpXq1XE"/>
</div>
</div>
</div>
</header>
<div className="flex max-w-container-max mx-auto min-h-screen">
{/* NavigationDrawer (Desktop) */}
<aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-16 bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline py-4">
<div className="px-6 mb-8 flex flex-col items-start">
<span className="text-label-md font-label-md font-black text-primary">Admin Portal</span>
<span className="font-body-md text-body-md text-on-surface-variant opacity-70">Directorate of Technical Education</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant mx-2 my-1 px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant mx-2 my-1 px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
<span className="font-body-md text-body-md">Pending Requests</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant mx-2 my-1 px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="verified">verified</span>
<span className="font-body-md text-body-md">Verified Partners</span>
</a>
<a className="flex items-center gap-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-xl mx-2 my-1 px-4 py-3 scale-95 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-64 p-margin-mobile md:p-gutter mb-20 md:mb-0">
<header className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg mb-2">User Roles & Permissions</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage technical access levels for institutional administrators.</p>
</header>
{/* Settings Layout: Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Admin User List Section (Bento Style) */}
<section className="lg:col-span-8 space-y-stack-md">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-primary">Active Administrative Staff</h3>
<button className="bg-primary text-white px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="person_add">person_add</span>
                                Add Administrator
                            </button>
</div>
<div className="divide-y divide-outline-variant">
{/* User Row 1 */}
<div className="p-6 flex flex-wrap md:flex-nowrap items-center gap-4 hover:bg-surface-bright transition-colors cursor-pointer group" onclick="selectUser('admin-1')">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold border border-outline-variant">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-headline-md text-body-lg font-bold">Dr. Rajesh Deshmukh</h4>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Super Admin</span>
</div>
<p className="font-body-md text-on-surface-variant">Directorate Office • rajesh.d@dte.gov.in</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
{/* User Row 2 */}
<div className="p-6 flex flex-wrap md:flex-nowrap items-center gap-4 hover:bg-surface-bright transition-colors cursor-pointer group active-user border-l-4 border-primary bg-surface-container-low" id="admin-user-active">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold border border-outline-variant">
<span className="material-symbols-outlined" data-icon="manage_accounts">manage_accounts</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-headline-md text-body-lg font-bold">Snehal Patil</h4>
<span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Registry Director</span>
</div>
<p className="font-body-md text-on-surface-variant">Certification Registry • s.patil@dte.gov.in</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
</div>
</div>
{/* User Row 3 */}
<div className="p-6 flex flex-wrap md:flex-nowrap items-center gap-4 hover:bg-surface-bright transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold border border-outline-variant">
<span className="material-symbols-outlined" data-icon="shield_person">shield_person</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-headline-md text-body-lg font-bold">Amit Kulkarni</h4>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Moderator</span>
</div>
<p className="font-body-md text-on-surface-variant">Regional Hub North • amit.k@dte.gov.in</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
</div>
{/* Role Definitions Detail */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
<div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant">
<span className="font-label-md text-primary mb-2 block">Super Admin</span>
<p className="text-label-sm text-on-surface-variant leading-relaxed">Full system override, database access, and user lifecycle management.</p>
</div>
<div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant">
<span className="font-label-md text-secondary mb-2 block">Registry Director</span>
<p className="text-label-sm text-on-surface-variant leading-relaxed">Authority over employer verification and official audit log generation.</p>
</div>
<div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant">
<span className="font-label-md text-outline mb-2 block">Moderator</span>
<p className="text-label-sm text-on-surface-variant leading-relaxed">Day-to-day job approval and basic support query resolution.</p>
</div>
</div>
</section>
{/* Permissions Toggle Panel */}
<aside className="lg:col-span-4">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-md sticky top-24">
<div className="p-6 border-b border-outline-variant">
<h3 className="font-headline-md text-headline-md mb-1">Permissions Matrix</h3>
<p className="text-label-sm text-on-surface-variant">Currently editing: <strong className="text-primary">Snehal Patil</strong></p>
</div>
<div className="p-6 space-y-6">
{/* Permission Item 1 */}
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-on-surface">Job Approval</span>
<span className="text-label-sm text-on-surface-variant">Can approve/reject vacancy posts</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only permission-toggle" type="checkbox"/>
<div className="toggle-bg w-11 h-6 bg-surface-variant rounded-full transition-colors duration-200">
<div className="toggle-dot absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200"></div>
</div>
</label>
</div>
{/* Permission Item 2 */}
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-on-surface">Employer Verification</span>
<span className="text-label-sm text-on-surface-variant">Validate company GST & registration</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only permission-toggle" type="checkbox"/>
<div className="toggle-bg w-11 h-6 bg-surface-variant rounded-full transition-colors duration-200">
<div className="toggle-dot absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200"></div>
</div>
</label>
</div>
{/* Permission Item 3 */}
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-on-surface">Audit Log Export</span>
<span className="text-label-sm text-on-surface-variant">Download CSV/PDF history of actions</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only permission-toggle" type="checkbox"/>
<div className="toggle-bg w-11 h-6 bg-surface-variant rounded-full transition-colors duration-200">
<div className="toggle-dot absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200"></div>
</div>
</label>
</div>
{/* Permission Item 4 */}
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-on-surface">System Config</span>
<span className="text-label-sm text-on-surface-variant">Modify global site parameters</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only permission-toggle" type="checkbox"/>
<div className="toggle-bg w-11 h-6 bg-surface-variant rounded-full transition-colors duration-200">
<div className="toggle-dot absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
<div className="p-6 bg-surface-container-low border-t border-outline-variant rounded-b-xl flex gap-3">
<button className="flex-1 bg-primary text-white py-2 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">Save Changes</button>
<button className="px-4 py-2 text-primary font-label-md hover:bg-surface-container-high rounded-lg transition-colors">Reset</button>
</div>
</div>
</aside>
</div>
</main>
</div>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline shadow-lg z-50 rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-[10px] mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant" href="#">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span className="font-label-sm text-[10px] mt-1">Upload</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant" href="#">
<span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
<span className="font-label-sm text-[10px] mt-1">Requests</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-label-sm text-[10px] mt-0.5">Profile</span>
</a>
</nav>


    </div>
  );
}
