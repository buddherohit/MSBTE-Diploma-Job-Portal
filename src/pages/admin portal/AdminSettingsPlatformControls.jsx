import React from 'react';

export default function AdminSettingsPlatformControls() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation Shell */}
<header className="bg-surface-container-highest dark:bg-surface-container-highest flex justify-between items-center px-margin-mobile md:px-gutter w-full fixed top-0 z-50 h-16 border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed cursor-pointer">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Admin Verification</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-6">
<span className="text-on-surface-variant dark:text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors cursor-pointer">Dashboard</span>
<span className="text-primary dark:text-primary-fixed font-bold font-label-md text-label-md">System Settings</span>
</div>
<img alt="Admin" className="w-10 h-10 rounded-full border-2 border-primary shadow-sm" data-alt="A professional studio portrait of a senior system administrator for a technical institution. The individual has a confident, welcoming expression, wearing business casual attire. The background is a clean, softly blurred office environment with cool blue and white tones, reflecting a corporate modern and highly organized aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zTtesHLOWvS3yHliopan0H1jEKTNLjjrgNgbXCSyoXTNznAtTNHRpuekVwI1oSE75DGllVjrAfH5NcPwlL7xx2LUo4XlEPJMmeW3HL5Bvywx0DvVVQ-Ho8c-FwM1NVq_NfWp_bTgWh7slr4kcq_R7YpLrKlBRbV1bWNRZiupwxLivSQQl8Sdn5NskH_pfOejd-soQOB7K6V3Hqn_3NbuciHpDSwePJwiCAtiMl3qlNg_qQ6Nwnw_fQVs2jCh7EwtV2_EYgbwT_s"/>
</div>
</header>
{/* Sidebar Navigation Shell */}
<nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 bg-surface dark:bg-surface h-full w-80 border-r border-outline-variant z-40 pt-20">
<div className="px-6 py-4 flex flex-col items-start">
<h2 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Moderator Panel</h2>
<p className="text-on-surface-variant font-label-md text-label-md">MSBTE Diploma Jobs</p>
</div>
<div className="mt-4 space-y-1">
<div className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all cursor-pointer">
<span className="material-symbols-outlined">pending_actions</span>
<span className="font-label-md text-label-md">Pending Requests</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all cursor-pointer">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-label-md text-label-md">Verified Entities</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all cursor-pointer">
<span className="material-symbols-outlined">report_problem</span>
<span className="font-label-md text-label-md">Flagged Profiles</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all cursor-pointer">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-label-md text-label-md">Audit Logs</span>
</div>
<div className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4 scale-95 active:scale-90 transition-transform cursor-default">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">System Settings</span>
</div>
</div>
<div className="mt-auto p-6">
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-error-container text-on-error-container rounded-xl font-label-md hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">logout</span>
                Sign Out
            </button>
</div>
</nav>
{/* Main Content Canvas */}
<main className="md:pl-80 pt-20 pb-20 md:pb-8">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<header className="mb-8">
<h3 className="font-headline-lg text-headline-lg text-primary">System Configuration</h3>
<p className="text-on-surface-variant font-body-md text-body-md mt-1">Industrial Blueprint Management Interface</p>
</header>
{/* Settings Bento Grid */}
<div className="bento-grid">
{/* Profile & Identity */}
<div className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>badge</span>
<h4 className="font-headline-md text-headline-md">Profile & Identity</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block font-label-md text-label-md text-on-surface-variant">Admin Full Name</label>
<input className="w-full bg-surface-container-low border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" value="Rajesh Deshmukh"/>
</div>
<div className="space-y-2">
<label className="block font-label-md text-label-md text-on-surface-variant">Access Level</label>
<div className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-primary font-bold">SUPER_ADMIN_V4</div>
</div>
<div className="col-span-full space-y-2">
<label className="block font-label-md text-label-md text-on-surface-variant">Official Email Address</label>
<input className="w-full bg-surface-container-low border-outline-variant rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none transition-all" type="email" value="r.deshmukh@msbte.maharashtra.gov.in"/>
</div>
</div>
</div>
{/* System Defaults (Bento Item) */}
<div className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings_suggest</span>
<h4 className="font-headline-md text-headline-md">System Defaults</h4>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-outline-variant">
<span className="font-label-md text-label-md">Default Language</span>
<span className="text-primary font-bold">English (UK)</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-outline-variant">
<span className="font-label-md text-label-md">Time Zone</span>
<span className="text-primary font-bold">IST (UTC +5:30)</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-outline-variant">
<span className="font-label-md text-label-md">Auto-Archive</span>
<span className="text-primary font-bold">90 Days</span>
</div>
</div>
</div>
{/* Security & Access */}
<div className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 shadow-sm border-l-4 border-primary">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>shield_person</span>
<h4 className="font-headline-md text-headline-md">Security & Access</h4>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-surface-container-high rounded-lg transition-colors">
<span className="font-label-md text-label-md">Multi-Factor Auth</span>
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold">ACTIVE</span>
</button>
<button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-surface-container-high rounded-lg transition-colors">
<span className="font-label-md text-label-md">Session Timeout</span>
<span className="text-on-surface-variant font-label-md">30m</span>
</button>
<button className="w-full py-2 bg-primary text-white rounded-lg font-label-md mt-2">Rotate Access Keys</button>
</div>
</div>
{/* Notification Engine */}
<div className="col-span-12 md:col-span-5 glass-card rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>notifications_active</span>
<h4 className="font-headline-md text-headline-md">Notification Engine</h4>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">Email Digests</p>
<p className="text-on-surface-variant text-[11px]">Daily summary of pending verifications</p>
</div>
<div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">Critical Alerts</p>
<p className="text-on-surface-variant text-[11px]">Instant SMS for flagged profiles</p>
</div>
<div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">System Logs</p>
<p className="text-on-surface-variant text-[11px]">Push notifications for audit events</p>
</div>
<div className="w-10 h-5 bg-surface-dim rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
{/* Maintenance Mode */}
<div className="col-span-12 md:col-span-3 glass-card rounded-xl p-6 shadow-sm bg-on-secondary-fixed text-white relative overflow-hidden group">
{/* Industrial Pattern Overlay */}
<div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)' }}></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: '\'FILL\' 1' }}>construction</span>
<h4 className="font-headline-md text-headline-md">Maintenance</h4>
</div>
<p className="text-label-sm mb-6 opacity-80">Toggle maintenance mode to restrict portal access during system updates.</p>
<button className="w-full py-3 px-4 bg-secondary-container text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
<span className="material-symbols-outlined">power_settings_new</span>
                            INITIATE MODE
                        </button>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Navigation Shell (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface px-2 border-t border-outline-variant shadow-lg">
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
<span className="material-symbols-outlined">hourglass_empty</span>
<span className="font-label-sm text-label-sm">Pending</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
<span className="material-symbols-outlined">check_circle</span>
<span className="font-label-sm text-label-sm">Verified</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</div>
</nav>
{/* Micro-interaction Script */}


    </div>
  );
}
