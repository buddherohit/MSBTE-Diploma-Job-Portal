import React from 'react';

export default function SettingsStudentPortal() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-40 bg-surface shadow-sm h-16 flex items-center justify-between px-gutter">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-2xl">school</span>
<h1 className="font-bold text-2xl tracking-tight text-primary">MSBTE Pro</h1>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined">search</span>
</button>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a young engineering student with a confident smile, set against a blurred academic background. The lighting is bright and natural, reflecting a clean and modern educational environment. The overall aesthetic is high-contrast and professional, with sharp focus and a neutral color palette that complements the corporate modern UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp3sLTbSbrOyPgrhBwu83axSgBwoXGZ7ngIUo3Ibtq_NHOfmdk--BaDgzz_ZhtWlJSPpasSHzpgqDCfb3_poFb_4e7AFu7bcgYbIaL9XORi6qM4TpCTf7ngWwO_zswuQwPJkwFhERxxU-rrjb6d1awEVUX87Ncm63_E8cIc3C8G-U2jY4aOjoZBqEDlUw2aM6viZJy8l2lIe5OQ41qz5iRtjssvy3pxSfTqtBD2MkuNxRfMTq-3StWf1ZX6wn5dt-dhfNdMhxPDiQ"/>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-4 md:px-gutter py-8">
{/* Hero Section / Header */}
<div className="mb-10">
<h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-2">Settings</h2>
<p className="text-on-surface-variant font-body-md">Manage your account preferences and security settings.</p>
</div>
{/* Settings Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* User Profile Card */}
<aside className="lg:col-span-4 space-y-6">
<div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex flex-col items-center text-center">
<div className="relative mb-4">
<div className="w-24 h-24 rounded-full border-4 border-primary-fixed overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A detailed portrait of a professional young man in a light blue oxford shirt, representing a dedicated diploma student. He is positioned in a bright, modern office space with subtle industrial blueprints visible on the wall behind him. The lighting is soft but high-energy, following a professional corporate photography style with a clean, high-contrast finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN-JxoFn6ihtLEXD_xx3jlKvWyQUfxp_qIqDnjA6n_eKHb_9i_fWGUcKgGEV6x5n8nDFd6PMrU_NY6-tZWV3I7Ctgr9qB5Dsa9WtLy-_Rbw3G61aAWnD6p5QxWGE6ZtGw0OloGRt4a_x_Srhk6asmHhH3_byzQD0hVKG4DIaVrW5MucfUvxZfQsRaR-GSVzf1b6-D_fSqHtkd3OeAfDWAzudlrpzqQe7SeG82NB3jMN3OLer2EDAXwsMe256aArmHPblj0jux-Tu0"/>
</div>
<button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
<h3 className="font-bold text-xl text-on-surface">Rahul Deshmukh</h3>
<p className="text-on-surface-variant text-sm mb-4">Civil Engineering • 3rd Year</p>
<div className="w-full py-3 bg-surface-container-low rounded-lg text-primary font-semibold text-sm">
              Student ID: MSBTE-2023-8892
            </div>
</div>
</div>
{/* System Status Quick Look */}
<div className="bg-primary-container text-white rounded-xl p-6 shadow-md overflow-hidden relative">
<div className="relative z-10">
<h4 className="font-bold text-lg mb-2">Pro Status</h4>
<p className="text-white/80 text-sm mb-4">Your industrial internship profile is currently at 85% completion.</p>
<button className="bg-secondary-container text-on-secondary-container font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
              Complete Profile
            </button>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl">verified_user</span>
</div>
</aside>
{/* Settings Categories */}
<section className="lg:col-span-8 space-y-6">
{/* Account Settings */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
<h3 className="font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined">person</span>
              Account Settings
            </h3>
</div>
<div className="divide-y divide-outline-variant">
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Email Address</span>
<span className="text-sm text-on-surface-variant">rahul.deshmukh@msbte.edu.in</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Phone Number</span>
<span className="text-sm text-on-surface-variant">+91 98765 43210</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Change Password</span>
<span className="text-sm text-on-surface-variant">Last changed 3 months ago</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
{/* Privacy */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
<h3 className="font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined">security</span>
              Privacy
            </h3>
</div>
<div className="divide-y divide-outline-variant">
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Profile Visibility</span>
<span className="text-sm text-on-surface-variant">Allow recruiters to see your resume</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Data Sharing</span>
<span className="text-sm text-on-surface-variant">Manage how your academic data is shared</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
{/* Notifications */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
<h3 className="font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined">notifications</span>
              Notifications
            </h3>
</div>
<div className="divide-y divide-outline-variant">
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Email Alerts</span>
<span className="text-sm text-on-surface-variant">Important updates about job matches</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex flex-col items-start">
<span className="font-semibold text-on-surface">Push Notifications</span>
<span className="text-sm text-on-surface-variant">Real-time alerts for application status</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
{/* Support & Legal */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
<h3 className="font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined">info</span>
              Support & Legal
            </h3>
</div>
<div className="divide-y divide-outline-variant">
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<span className="font-semibold text-on-surface">Help Center</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">launch</span>
</button>
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-lowest transition-colors group">
<span className="font-semibold text-on-surface">Terms of Service</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full px-6 py-4 flex items-center justify-between hover:bg-error/5 transition-colors group">
<span className="font-semibold text-error">Logout</span>
<span className="material-symbols-outlined text-error group-hover:translate-x-1 transition-transform">logout</span>
</button>
</div>
</div>
{/* Danger Zone */}
<div className="p-4 border border-error/30 bg-error/5 rounded-xl">
<h4 className="text-error font-bold text-sm mb-1">Danger Zone</h4>
<p className="text-xs text-on-surface-variant mb-3">Once you delete your account, there is no going back. Please be certain.</p>
<button className="text-error border border-error px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-error hover:text-white transition-colors active:scale-95 duration-100">
            Deactivate Account
          </button>
</div>
</section>
</div>
</main>
{/* BottomNavBar (Visible on mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface flex justify-around items-center px-2 pb-2 pt-1 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-xs font-medium">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">description</span>
<span className="text-xs font-medium">Resume</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">work</span>
<span className="text-xs font-medium">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="text-xs font-medium">Status</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>settings</span>
<span className="text-xs font-bold">Settings</span>
</a>
</nav>


    </div>
  );
}
