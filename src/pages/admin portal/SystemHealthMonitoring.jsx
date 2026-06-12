import React from 'react';

export default function SystemHealthMonitoring() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-on-surface-variant flex justify-between items-center px-gutter h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim cursor-pointer active:opacity-80">grid_view</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">MSBTE Admin Hub</h1>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 items-center">
<span className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer px-3 py-1 rounded">Metrics</span>
<span className="text-primary font-bold font-label-md text-label-md cursor-pointer px-3 py-1 rounded bg-surface-container-high">System Health</span>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container cursor-pointer">
<span className="material-symbols-outlined">person</span>
</div>
</div>
</header>
{/* NavigationDrawer */}
<aside className="h-screen w-72 fixed left-0 top-0 z-40 bg-surface-container-low dark:bg-inverse-surface shadow-sm flex flex-col gap-stack-sm pt-20 pb-4 hidden md:flex">
<div className="px-6 mb-6 flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: '\'FILL\' 1' }}>admin_panel_settings</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-primary">System Admin</p>
<p className="text-xs text-on-surface-variant">MSBTE Platform</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all scale-98" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Overview</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all scale-98" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-label-md text-label-md">Moderation</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all scale-98" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-label-md text-label-md">Verification</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all scale-98" href="#">
<span className="material-symbols-outlined">factory</span>
<span className="font-label-md text-label-md">Partners</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all scale-98" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="bg-primary-container text-on-primary-container font-bold rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings_heart</span>
<span className="font-label-md text-label-md">System Health</span>
</a>
</nav>
<div className="mt-auto px-6 py-4 border-t border-outline-variant">
<div className="bg-primary/5 rounded-lg p-3">
<p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Server Status</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></div>
<span className="text-xs font-bold text-on-surface">Operational</span>
</div>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-0 md:ml-72 pt-20 px-gutter pb-stack-lg flex-grow">
<div className="max-w-container-max mx-auto">
{/* Header Section */}
<div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">System Health & Ops</h2>
<p className="text-on-surface-variant font-body-md">Real-time infrastructure monitoring and industrial-grade configuration.</p>
</div>
<div className="flex gap-stack-sm">
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[20px]">refresh</span>
                        FORCE REFRESH
                    </button>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
<span className="material-symbols-outlined text-[20px]">bolt</span>
                        EMERGENCY STOP
                    </button>
</div>
</div>
{/* Bento Grid - Real-time Graphs */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-gutter">
{/* Server Load Graph */}
<div className="md:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-label-md text-label-md text-primary uppercase tracking-tighter">Server Load (CPU/MEM)</h3>
<p className="text-2xl font-extrabold text-on-surface">42.8% <span className="text-xs font-normal text-on-surface-variant font-body-md ml-2">Avg. Cluster Load</span></p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-surface-container rounded text-[10px] font-bold">1h</span>
<span className="px-2 py-1 bg-primary text-on-primary rounded text-[10px] font-bold">6h</span>
<span className="px-2 py-1 bg-surface-container rounded text-[10px] font-bold">24h</span>
</div>
</div>
<div className="h-48 w-full flex items-end gap-1">
{/* Simulated CSS Graph */}
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[45%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[38%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[50%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[62%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[58%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[42%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[30%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[45%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[55%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[65%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[80%] border-t-2 border-primary"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[55%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer h-[40%]"></div>
</div>
<div className="mt-4 flex justify-between text-[10px] font-bold text-outline uppercase">
<span>12:00 PM</span>
<span>01:00 PM</span>
<span>02:00 PM</span>
<span>03:00 PM</span>
<span>04:00 PM</span>
<span>05:00 PM</span>
</div>
</div>
{/* API Latency */}
<div className="md:col-span-4 glass-panel rounded-xl p-6 border-l-4 border-l-tertiary-container flex flex-col justify-between">
<div>
<h3 className="font-label-md text-label-md text-on-tertiary-fixed-variant uppercase tracking-tighter mb-4">API Latency</h3>
<div className="flex items-center justify-center p-6 bg-surface-container rounded-full w-32 h-32 mx-auto border-4 border-tertiary-fixed">
<div className="text-center">
<p className="text-2xl font-black text-on-surface">84ms</p>
<p className="text-[10px] font-bold text-tertiary-fixed-variant">NOMINAL</p>
</div>
</div>
</div>
<div className="mt-6 space-y-2">
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant">Auth Gateway</span>
<span className="font-bold text-tertiary-fixed-variant">12ms</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant">Job Match Engine</span>
<span className="font-bold text-tertiary-fixed-variant">42ms</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant">DB Read Replica</span>
<span className="font-bold text-secondary">156ms</span>
</div>
</div>
</div>
</div>
{/* Configuration & Logs Row */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Platform Maintenance & Settings */}
<div className="lg:col-span-1 space-y-gutter">
<section className="bg-inverse-surface text-on-primary rounded-xl p-6 shadow-xl border border-outline">
<h3 className="font-label-md text-label-md text-primary-fixed uppercase tracking-widest mb-6">Platform Controls</h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-sm">Maintenance Mode</p>
<p className="text-xs text-primary-fixed-dim">Suspend all user traffic</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
<div className="pt-4 border-t border-white/10">
<p className="font-bold text-sm mb-3">Backup Scheduling</p>
<div className="grid grid-cols-2 gap-2">
<button className="bg-white/10 border border-white/20 text-[10px] font-bold py-2 rounded uppercase hover:bg-white/20">Daily Sync</button>
<button className="bg-primary-container text-on-primary-container text-[10px] font-bold py-2 rounded uppercase border border-primary">Weekly Full</button>
</div>
<p className="text-[10px] text-primary-fixed-dim mt-2 italic">Next backup: Sunday, 02:00 AM</p>
</div>
</div>
</section>
<div className="bg-surface-container rounded-xl p-6 border border-outline-variant">
<h4 className="font-label-md text-label-md text-on-surface mb-4">Quick Diagnostic</h4>
<div className="flex gap-2">
<input className="flex-grow bg-surface-container-lowest border-outline-variant rounded-lg text-xs p-2 focus:ring-primary" placeholder="Trace IP / URL..." type="text"/>
<button className="p-2 bg-primary text-on-primary rounded-lg">
<span className="material-symbols-outlined text-[18px]">search</span>
</button>
</div>
</div>
</div>
{/* Logs Table */}
<div className="lg:col-span-2 glass-panel rounded-xl flex flex-col overflow-hidden">
<div className="px-6 py-4 bg-surface-container-high border-b border-outline-variant flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase">Incident Logs & Security Events</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-[10px] font-bold text-error uppercase">
<span className="w-2 h-2 rounded-full bg-error"></span> 4 Failed Jobs
                            </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low text-[10px] font-bold text-outline uppercase border-b border-outline-variant">
<tr>
<th className="px-6 py-3">Timestamp</th>
<th className="px-6 py-3">Event Type</th>
<th className="px-6 py-3">Source</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">14:22:01.04</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[16px]">error</span>
<span className="text-xs font-bold">Failed Job: Emailer_v2</span>
</span>
</td>
<td className="px-6 py-4 text-xs text-on-surface-variant">Queue::Industrial_Jobs</td>
<td className="px-6 py-4">
<span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-bold uppercase">Critical</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:underline text-[10px] font-bold uppercase">Retry</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">14:18:45.12</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">security</span>
<span className="text-xs font-bold">Failed Admin Login</span>
</span>
</td>
<td className="px-6 py-4 text-xs text-on-surface-variant">IP: 192.168.1.104</td>
<td className="px-6 py-4">
<span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded text-[10px] font-bold uppercase">Warning</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:underline text-[10px] font-bold uppercase">Ban IP</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">14:05:00.00</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">sync</span>
<span className="text-xs font-bold">Daily Snapshot</span>
</span>
</td>
<td className="px-6 py-4 text-xs text-on-surface-variant">Sys::Internal_Backup</td>
<td className="px-6 py-4">
<span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase">Success</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:underline text-[10px] font-bold uppercase">View Logs</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">13:58:22.88</td>
<td className="px-6 py-4">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[16px]">dangerous</span>
<span className="text-xs font-bold">SQL Injection Blocked</span>
</span>
</td>
<td className="px-6 py-4 text-xs text-on-surface-variant">WAF::Filter_Primary</td>
<td className="px-6 py-4">
<span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-bold uppercase">Blocked</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:underline text-[10px] font-bold uppercase">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant w-full py-4 mt-auto flex justify-between items-center px-gutter ml-0 md:ml-72 md:max-w-[calc(100%-18rem)]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>terminal</span>
<span className="font-label-md text-label-md font-bold text-on-surface">© 2024 MSBTE Diploma Jobs - Industrial Administration Suite</span>
</div>
<div className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">System Status</a>
<a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">Admin Support</a>
<a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">API Docs</a>
</div>
</footer>
{/* FAB (Only on relevant screens, but restricted for this dashboard as per protocol) */}


    </div>
  );
}
