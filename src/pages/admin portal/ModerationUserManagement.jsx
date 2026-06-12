import React from 'react';

export default function ModerationUserManagement() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="grid_view">grid_view</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MSBTE Admin Hub</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors" data-icon="notifications">notifications</button>
<div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img alt="Admin User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a mature administrative professional with a confident expression, wearing a tailored navy blue suit. The background is a blurred high-end office environment with soft, natural lighting that emphasizes a clean and trustworthy corporate aesthetic, matching the deep blue and white color palette of the UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtpcdH1DGYnLVIPMSf8ygVRJAItd7CqtH3LMFEabMXHO0awItwCjhipv6OtkysSuU1qhloKKYAm82xoalKzuuJwYesSt23wtAUBwmzLZVzn9ybAsn6sB6IV6k2C_AYrZw7mWPuXjb2szPBY4PI-84MGbCGnxfNDH2WrwGSR3ZXBX3v_SBbAI-16I2xedXpsRXVVYS6TJaEKLRuWAtLpYPQ5pJypxGrarSrlUwiDRULFxtYOkOiUTI5Ejr1_HvVjssDEwvGrllPTM"/>
</div>
</div>
</header>
{/* NavigationDrawer */}
<aside className="h-screen w-72 fixed left-0 top-0 z-40 bg-surface-container-low shadow-sm flex flex-col gap-stack-sm pt-20 pb-4">
<div className="px-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="shield_person">shield_person</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">System Admin</p>
<p className="text-xs text-on-surface-variant">Superuser</p>
</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto sidebar-scroll">
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Overview</span>
</a>
<a className="bg-primary-container text-on-primary-container font-bold rounded-lg mx-2 px-4 py-3 flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="gavel" style={{ fontVariationSettings: '\'FILL\' 1' }}>gavel</span>
<span className="font-label-md text-label-md">Moderation</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span className="font-label-md text-label-md">Verification</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<span className="font-label-md text-label-md">Partners</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings_heart">settings_heart</span>
<span className="font-label-md text-label-md">System Health</span>
</a>
</nav>
</aside>
{/* Main Content */}
<main className="ml-72 mt-16 p-gutter min-h-[calc(100vh-64px)] flex flex-col gap-stack-lg">
{/* Dashboard Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Admin Control Panel</h2>
<p className="text-on-surface-variant">Manage platform integrity, review flagged accounts, and monitor industrial listings.</p>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-body-md" data-icon="download">download</span>
<span className="font-label-md">Export Audit Log</span>
</button>
<button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-body-md" data-icon="add">add</span>
<span className="font-label-md">Add Staff</span>
</button>
</div>
</div>
{/* Bento Grid Stats */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="material-symbols-outlined text-primary" data-icon="report">report</span>
<span className="text-xs font-bold text-error bg-error-container px-2 py-0.5 rounded-full">+12%</span>
</div>
<div>
<p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Reported Content</p>
<p className="font-display-lg text-headline-lg text-on-surface">42</p>
</div>
</div>
<div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="material-symbols-outlined text-primary" data-icon="how_to_reg">how_to_reg</span>
<span className="text-xs font-bold text-on-tertiary-container bg-tertiary-fixed-dim px-2 py-0.5 rounded-full">Active</span>
</div>
<div>
<p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Pending Verification</p>
<p className="font-display-lg text-headline-lg text-on-surface">156</p>
</div>
</div>
<div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="material-symbols-outlined text-primary" data-icon="person_cancel">person_cancel</span>
</div>
<div>
<p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Suspended Users</p>
<p className="font-display-lg text-headline-lg text-on-surface">28</p>
</div>
</div>
<div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="material-symbols-outlined text-primary" data-icon="security">security</span>
</div>
<div>
<p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Risk Score (Avg)</p>
<p className="font-display-lg text-headline-lg text-on-surface">LOW</p>
</div>
</div>
</div>
{/* Filter & Search Bar */}
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col md:flex-row items-center gap-4">
<div className="relative flex-1 w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md" placeholder="Search by name, email, or UID..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-label-md outline-none text-on-surface-variant flex-1 md:flex-none">
<option>All Roles</option>
<option>Student</option>
<option>Employer</option>
<option>Staff</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-label-md outline-none text-on-surface-variant flex-1 md:flex-none">
<option>Status: All</option>
<option>Active</option>
<option>Suspended</option>
<option>Flagged</option>
</select>
<button className="bg-surface-container-highest p-2 rounded-lg hover:bg-outline-variant transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/* Main Moderation Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
{/* User Management Table */}
<div className="lg:col-span-2 glass-card rounded-xl overflow-hidden flex flex-col">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 className="font-headline-md text-body-lg font-bold text-on-surface">User Directory</h3>
<span className="text-xs font-bold text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full uppercase tracking-widest">1,248 Users Total</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-lowest border-b border-outline-variant text-on-surface-variant">
<th className="px-6 py-4 font-label-md uppercase tracking-tighter">User Identity</th>
<th className="px-6 py-4 font-label-md uppercase tracking-tighter">Role</th>
<th className="px-6 py-4 font-label-md uppercase tracking-tighter">Status</th>
<th className="px-6 py-4 font-label-md uppercase tracking-tighter text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{/* User Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group" onclick="toggleSideSheet()">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">AK</div>
<div>
<p className="font-label-md text-on-surface">Aditya Kulkarni</p>
<p className="text-xs text-on-surface-variant">aditya.k@msbte.edu.in</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-label-sm text-primary bg-primary-fixed px-3 py-1 rounded-full">Student</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="text-sm font-medium">Active</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* User Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">TC</div>
<div>
<p className="font-label-md text-on-surface">Tata Communications</p>
<p className="text-xs text-on-surface-variant">recruitment@tata.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-label-sm text-secondary bg-secondary-fixed px-3 py-1 rounded-full">Employer</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<span className="text-sm font-medium text-error">Flagged</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* User Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold">JS</div>
<div>
<p className="font-label-md text-on-surface">Jaya Sharma</p>
<p className="text-xs text-on-surface-variant">jaya.s@vjti.ac.in</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="font-label-sm text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">Staff</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="text-sm font-medium text-on-surface-variant">Suspended</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-auto p-4 border-t border-outline-variant flex justify-between items-center bg-surface-container-lowest">
<button className="text-on-surface-variant font-label-md hover:text-primary disabled:opacity-50" disabled="">Previous</button>
<div className="flex gap-2">
<span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg font-bold">1</span>
<span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg cursor-pointer">2</span>
<span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg cursor-pointer">3</span>
</div>
<button className="text-on-surface-variant font-label-md hover:text-primary">Next</button>
</div>
</div>
{/* Reported Content Feed */}
<div className="lg:col-span-1 space-y-4">
<div className="glass-card rounded-xl p-4">
<h3 className="font-label-md text-on-surface flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-error" data-icon="campaign">campaign</span>
                        Urgent Review Queue
                    </h3>
<div className="space-y-3">
{/* Flagged Item 1 */}
<div className="p-3 bg-error-container/20 border border-error/20 rounded-lg group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-extrabold uppercase tracking-widest text-error">Job Listing Fraud</span>
<span className="text-[10px] text-on-surface-variant">2h ago</span>
</div>
<p className="font-label-md text-on-surface leading-tight mb-2">Data Entry (Work from Home) - ₹50,000/week</p>
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center text-[10px] font-bold text-error">SR</div>
<span className="text-xs text-on-surface-variant">Posted by Sky-Rise Solutions</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-error text-white py-1.5 rounded text-xs font-bold hover:bg-opacity-90">Delete</button>
<button className="flex-1 border border-outline-variant py-1.5 rounded text-xs font-bold hover:bg-surface-container-lowest">Review</button>
</div>
</div>
{/* Flagged Item 2 */}
<div className="p-3 bg-surface-container-lowest border border-outline-variant rounded-lg group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">Policy Violation</span>
<span className="text-[10px] text-on-surface-variant">5h ago</span>
</div>
<p className="font-label-md text-on-surface leading-tight mb-2">Offensive comment on "DTE Admission" thread.</p>
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">RK</div>
<span className="text-xs text-on-surface-variant">Reported by Rahul Kamble</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-on-surface text-white py-1.5 rounded text-xs font-bold">Dismiss</button>
<button className="flex-1 border border-outline-variant py-1.5 rounded text-xs font-bold">Review</button>
</div>
</div>
</div>
<button className="w-full mt-4 text-primary font-label-sm text-center py-2 hover:underline">View All Reports (14)</button>
</div>
{/* System Logs (High Density) */}
<div className="glass-card rounded-xl p-4 h-64 flex flex-col">
<h3 className="font-label-md text-on-surface mb-3 uppercase tracking-tighter opacity-70">Live Activity Log</h3>
<div className="flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed text-on-surface-variant sidebar-scroll">
<p><span className="text-on-tertiary-fixed-variant">[14:22:10]</span> AUTH_SUCCESS: User ID #9928 logged in from 192.168.1.5</p>
<p><span className="text-error">[14:21:45]</span> MOD_ACTION: Post #4412 suppressed by System_Bot (Auto-filter: Spam)</p>
<p><span className="text-on-tertiary-fixed-variant">[14:18:33]</span> API_CALL: GET /v1/students/records?batch=2024</p>
<p><span className="text-secondary">[14:15:22]</span> VERIFY_REQ: Tata Steel Ltd profile submitted for review</p>
<p><span className="text-on-tertiary-fixed-variant">[14:12:01]</span> SYS_HEALTH: All microservices operational. Latency 42ms.</p>
<p><span className="text-error">[14:10:55]</span> FLAG_EVENT: Repetitive application detected from User #1102</p>
</div>
</div>
</div>
</div>
</main>
{/* Side-Sheet Modal (Hidden by default) */}
<div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 hidden transition-opacity" id="sideSheetOverlay" onclick="toggleSideSheet()">
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl translate-x-full transition-transform duration-300 flex flex-col" id="sideSheet" onclick="event.stopPropagation()">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h2 className="font-headline-md text-on-surface">User Profile</h2>
<button className="material-symbols-outlined hover:bg-surface-container-high p-2 rounded-full transition-colors" data-icon="close" onclick="toggleSideSheet()">close</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6 sidebar-scroll">
{/* Profile Header */}
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-primary-fixed mb-4 flex items-center justify-center text-primary text-3xl font-extrabold">AK</div>
<h3 className="text-xl font-bold text-on-surface">Aditya Kulkarni</h3>
<p className="text-on-surface-variant font-medium">Mechanical Engineering Diploma (Final Year)</p>
<div className="mt-4 flex gap-2">
<span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase">Verified Student</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase">High Activity</span>
</div>
</div>
{/* Info Grid */}
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-surface-container-low rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Registration Date</p>
<p className="text-sm font-medium">12 Oct 2023</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Last Active</p>
<p className="text-sm font-medium">24 mins ago</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Applications</p>
<p className="text-sm font-medium">14 Jobs</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Reports Received</p>
<p className="text-sm font-medium">0</p>
</div>
</div>
{/* Moderation Tools */}
<div className="space-y-3">
<h4 className="font-label-md text-on-surface border-l-4 border-primary pl-2">Account Control</h4>
<button className="w-full flex items-center justify-between p-3 bg-surface-container-highest rounded-lg hover:bg-outline-variant transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="edit">edit</span>
<span className="text-sm font-medium">Edit Profile Permissions</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 bg-surface-container-highest rounded-lg hover:bg-outline-variant transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="mail">mail</span>
<span className="text-sm font-medium">Send Official Notice</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 bg-error-container/20 text-error rounded-lg hover:bg-error-container transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined" data-icon="block">block</span>
<span className="text-sm font-bold">Suspend Account</span>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100" data-icon="chevron_right">chevron_right</span>
</button>
</div>
{/* Identity Verification */}
<div className="glass-card p-4 rounded-xl">
<p className="text-xs font-bold text-on-surface-variant mb-3">ID VERIFICATION DOCUMENT</p>
<div className="aspect-video bg-surface-container rounded-lg overflow-hidden border border-outline-variant relative group cursor-pointer">
<img alt="Student ID Document" className="w-full h-full object-cover" data-alt="A macro photograph of an official university identity card resting on a clean white desk. The card features a clear portrait photo, student name, and a bold blue institutional logo. The lighting is crisp and even, emphasizing professional verification and security protocols in a high-contrast corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2GdH9BwFOcdAsE_mQbQKNzqHRI3gaqiZEPwzRdz_DYnzbKz2FGuOMed6kBvLW00AQKoalI3x3UMWnEutsNo3ZyAPr2v55xw4wM9_cQe2QBisEyc3Bk7puqIMByztuJ9zFMMyFji5TNK3J0VX7hSBTLSHcW7Hf4t905EkAXRnKt3Tqfp6sZc-XbmJLN9b28m8McKUxRDLS9Yn5gR6fzq9nbHhPkPzwHwfy3RL_VQOvSqms6kurd2LIjYqauXW_dqROLoTx9ftJk2o"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-outline-variant bg-surface-container-low flex gap-3">
<button className="flex-1 bg-primary text-white py-2.5 rounded-lg font-bold">Verify User</button>
<button className="flex-1 bg-surface-container-lowest border border-outline-variant py-2.5 rounded-lg font-bold text-on-surface">Escalate</button>
</div>
</div>
</div>
{/* Footer */}
<footer className="flex justify-between items-center px-gutter w-full ml-72 max-w-[calc(100%-18rem)] py-4 mt-auto border-t border-outline-variant bg-surface-container">
<p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 MSBTE Diploma Jobs - Industrial Administration Suite</p>
<div className="flex gap-6">
<a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors" href="#">System Status</a>
<a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors" href="#">Admin Support</a>
<a className="text-on-surface-variant font-label-sm hover:text-primary transition-colors" href="#">API Docs</a>
</div>
</footer>


    </div>
  );
}
