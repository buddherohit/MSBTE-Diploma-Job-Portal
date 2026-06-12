import React from 'react';

export default function TeamManagementSettings() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
<div className="flex justify-between items-center px-4 h-16 w-full max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-2xl" data-icon="business_center">business_center</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MahaRecruit</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container-low transition-colors rounded-full text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="h-10 w-10 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant cursor-pointer active:opacity-80">
<img alt="Employer Profile Avatar" className="w-full h-full object-cover" data-alt="A professional close-up headshot of a corporate executive in a modern office environment. The lighting is bright and high-key, creating a clean light-mode aesthetic. The individual wears a sharp navy blazer, suggesting authority and institutional stability. The background is softly blurred, showing hints of a glass-walled conference room and sleek industrial design elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsJaKa3N9WnbhkGgTB0p2b6tt2M7wJ4H4TlFs4584JNiHIIWdak2norFXAgtxptcMRjneTY0t5DY8MPIDhTdVpHViO9yTEUa_gQocmNjYM4IZ6rF7O4mwQ5X3LWkDJ6eKZKJQG-0jrVcwz0mNAU_XtRU9LvVhWVeAUyOgtmu3qEvmQMTc5TZd49kjCtc_2LfSrfxAUsRsvE-BgttMt80uz5_SPUUw7GZVNap3EcyvyyOgF35pB2yDAHnRmwXU6jbfpOCSzc0I1Xg"/>
</div>
</div>
</div>
</header>
<div className="flex flex-1 w-full max-w-container-max mx-auto overflow-hidden">
{/* NavigationDrawer (Desktop) */}
<aside className="hidden md:flex flex-col h-full py-6 w-80 bg-surface border-r border-outline-variant">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
</div>
<div>
<h2 className="font-label-md text-label-md text-on-surface">Admin Settings</h2>
<p className="text-xs text-on-surface-variant">Manage your organization</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-label-md text-label-md">Account Details</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="domain">domain</span>
<span className="font-label-md text-label-md">Company Profile</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Billing & Subscription</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group" style={{ fontVariationSettings: '\'FILL\' 1' }}>group</span>
<span className="font-label-md text-label-md">Team Management</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 overflow-y-auto custom-scrollbar bg-background p-4 md:p-8 pb-32 md:pb-8">
<div className="max-w-4xl mx-auto space-y-8">
{/* Header & Action */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Team Management</h2>
<p className="text-on-surface-variant mt-1">Manage recruiters and dashboard access levels.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg flex items-center gap-2 font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-sm" onclick="toggleInviteForm()">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                        Invite New Member
                    </button>
</div>
{/* Invite Form (Collapsible) */}
<div className="hidden overflow-hidden transition-all duration-300 ease-in-out" id="invite-form">
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-md">
<h3 className="font-label-md text-label-md mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="mail">mail</span>
                            Send Invitation
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-1">
<label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="colleague@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Assigned Role</label>
<select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
<option>Recruiter</option>
<option>Reviewer</option>
<option>Admin</option>
</select>
</div>
<div className="flex items-end gap-2">
<button className="flex-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md py-2.5 rounded-lg hover:opacity-90 transition-opacity">Send Invitation</button>
<button className="px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors" onclick="toggleInviteForm()">Cancel</button>
</div>
</div>
</div>
</div>
{/* Stats Bento Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
<p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Total Seats</p>
<p className="text-2xl font-bold text-primary mt-1">12 / 15</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
<p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Admins</p>
<p className="text-2xl font-bold text-on-background mt-1">02</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
<p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Recruiters</p>
<p className="text-2xl font-bold text-on-background mt-1">08</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
<p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Reviewers</p>
<p className="text-2xl font-bold text-on-background mt-1">02</p>
</div>
</div>
{/* Team Table */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Member</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Access Role</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{/* Member Row */}
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="Member Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a recruitment manager in a minimalist studio setting. Soft, diffuse natural lighting highlights clear features. The person has a friendly, professional expression. The background is a clean, neutral grey wall, fitting a high-end corporate UI theme with a focus on trust and institutional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzX2wo9CCp2QC7nJjsmEKMdihWyzNs-dgEerb1bMF8th2hO4AkupU5ifgPBUrDdlp6-XwhrBBzbz5lgBFtlXJnXQaRESrfk5SREaYKITC2lS37sviQWgOIRIODWIFOlI11Hi-nkVoX-liLkP8285PWnbeE8aTWGqbKmmV1WazyodIQfq3IjGkB7-qOYM5uc9e7YKV7-SKytHQ5651aaXllIiUFFxFHfWlgvXRVClEYfc8GG8XMb9gYkC7ULFHiQ0IBabCVYu7rqSM"/>
</div>
<div>
<p className="font-bold text-on-background">Anjali Mehta</p>
<p className="text-xs text-on-surface-variant">anjali.m@corporation.in</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 bg-primary-container/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="verified_user">verified_user</span>
                                            Admin
                                        </span>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2 font-label-sm text-label-sm text-on-tertiary-fixed-variant">
<span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                                            Active
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Member Row */}
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="Member Avatar" className="w-full h-full object-cover" data-alt="A high-quality portrait of a technology recruiter in a bright, modern glass-walled office. Professional attire, warm smile, and soft focus background of a high-tech corporate environment. The overall mood is approachable yet authoritative, maintaining the Corporate Modern aesthetic of Maharashtra industrial powerhouses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_I0Wmt1ltr0GwOrtEAM4orkCinxIf5VVw_QNflMyqQjTdcVSwGc4z-2O7SBce5iaboO1oPEKDPhOcAF09qWtIjdj7z3itgEZP74bW3FqEJ-DnkIh9J5rJmRCXI0MkCkKGPJwFjWG8XTgH-njLYsjHUCevWPz4Eu5IbAvLaSw1cZ2ZR5DBit-Kg9MnIpTaC7kuB0cUk8VP6su1NDaTh_bgWZl2MWnb6iZOBq-61QKFtDBlPwjhpyIVZO7LQQFLcbCL84QdOvtR9kU"/>
</div>
<div>
<p className="font-bold text-on-background">Rahul Kulkarni</p>
<p className="text-xs text-on-surface-variant">rahul.k@corporation.in</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="search">search</span>
                                            Recruiter
                                        </span>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2 font-label-sm text-label-sm text-on-tertiary-fixed-variant">
<span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim"></span>
                                            Active
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Member Row */}
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="Member Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a diverse team member working in a modern industrial corporate setting. The lighting is crisp and detailed, showcasing a focused and efficient professional. The scene reflects institutional stability and the data-driven efficiency of a modern HR department in an industrial powerhouse." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBRJ1tixphUBTNu9Trz2RG7PJeQeW7uDUN7wZIrhPKa70jAk3wKEf3tCJgBU3UAWjAojoz1Ca6x6SfaZvZHfHXE3kuKhOiGwOG-yvpimRQzsUCeXbjKygDo6YRf84Z53BlvjpH7YVGPWkTUWT7sNVBEa-1WG12CwBKpenGThol5hWBEHWzIbd_ec2hxC3ntlYMmSxQrhPwiZIXGA4-vKcLwkfIuekbGksZMxVkenVXwsZqeKv06WzdUdSX1FdNNCK4O1eXQRYPhqo"/>
</div>
<div>
<p className="font-bold text-on-background">Sneha Patil</p>
<p className="text-xs text-on-surface-variant">sneha.p@corporation.in</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="rate_review">rate_review</span>
                                            Reviewer
                                        </span>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2 font-label-sm text-label-sm text-on-tertiary-fixed-variant">
<span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim"></span>
                                            Active
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Guidance Note */}
<div className="bg-primary-container/5 border-l-4 border-primary p-6 rounded-r-xl">
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary" data-icon="info">info</span>
<div>
<h4 className="font-bold text-primary mb-1">Access Levels Guide</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">
<strong className="text-primary">Admins</strong> can manage billing, invite users, and delete team members. <br/>
<strong className="text-primary">Recruiters</strong> can post jobs and manage all candidates. <br/>
<strong className="text-primary">Reviewers</strong> can only view applications and leave internal scores.
                            </p>
</div>
</div>
</div>
</div>
</main>
</div>
{/* BottomNavBar (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container shadow-md z-50 rounded-t-xl">
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-label-sm text-label-sm">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="work_history">work_history</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="settings" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</button>
</nav>


    </div>
  );
}
