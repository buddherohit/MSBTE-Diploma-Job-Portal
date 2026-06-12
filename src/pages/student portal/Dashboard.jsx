import React from 'react';

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline z-50 sticky top-0 flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
<span className="font-headline-md text-headline-md font-extrabold text-primary dark:text-primary-fixed tracking-tight">MSBTE Jobs</span>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 text-primary font-bold border-b-2 border-primary">
                Dashboard
            </button>
<button className="hidden md:flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-colors duration-200">
                Jobs
            </button>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a young Indian male student with a confident smile, wearing a clean white shirt. The background is a soft, blurred corporate office setting with natural daylight filtering through large windows, creating a bright and optimistic atmosphere. The image has a modern, high-contrast look consistent with a professional career platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0_AhN0uta3x9Kdq5a91H41rF72dT_IRYfyTnLtDXrJ9tID6UIKMjyQU1hIUx1ekOPbv_7rT6B7GViPWoK3Q-8kRUkRKIj_nxVoKH_nqnU1WfRdlR-mLrlnFnnnNU7y-Xk8oYLq92PR5YVeJkQSxR-osSCRQ6UMxjv89DJED1cXrluqwa9DMw7Tx7BJiHpxKle6WOMyjcfIqcQj_VPZWdT4DEuz14cItIH2ccYgqlBCAhCs7XVZp_dSnjBGiXz-jxGIfRRiVnZMJE"/>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile py-stack-lg space-y-stack-lg">
{/* Welcome Section */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
<div>
<p className="text-on-surface-variant font-label-md uppercase tracking-wider">Student Overview</p>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2 font-extrabold">Welcome back, Rahul Sharma!</h1>
<p className="text-on-surface-variant mt-1">Check out your application status and recommended jobs for Diploma in Mechanical Engineering.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">upload_file</span>
                Update Resume
            </button>
</section>
{/* Profile & Stats Grid (Bento Style) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Profile Completion Card */}
<div className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-fixed text-primary rounded-lg">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>account_circle</span>
</div>
<span className="text-label-md font-bold text-primary">85% Complete</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Profile Strength</h3>
<p className="text-on-surface-variant text-body-md mb-6">Complete your technical certifications to reach 100% and get noticed by top recruiters.</p>
</div>
<div className="space-y-3">
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%] rounded-full transition-all duration-1000"></div>
</div>
<a className="text-primary font-bold text-label-md flex items-center gap-1 hover:underline" href="#">
                        Complete Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
{/* Quick Stats Grid */}
<div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
<span className="text-display-lg font-display-lg text-primary">12</span>
<span className="text-on-surface-variant font-label-md mt-1">Applied</span>
</div>
<div className="bg-secondary-fixed text-on-secondary-fixed border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
<span className="text-display-lg font-display-lg text-secondary">2</span>
<span className="text-on-surface-variant font-label-md mt-1">Shortlisted</span>
</div>
<div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
<span className="text-display-lg font-display-lg text-primary">5</span>
<span className="text-on-surface-variant font-label-md mt-1">Saved</span>
</div>
<div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
<span className="text-display-lg font-display-lg text-primary">45</span>
<span className="text-on-surface-variant font-label-md mt-1">Profile Views</span>
</div>
{/* CTA / Promo Card in the Stats Grid */}
<div className="col-span-2 lg:col-span-4 bg-tertiary-container text-white rounded-xl p-6 flex items-center justify-between overflow-hidden relative group">
<div className="z-10">
<h4 className="font-headline-md text-headline-md mb-2">Campus Drive 2024</h4>
<p className="text-on-tertiary-container opacity-90 max-w-md">L&T and Tata Motors are visiting MSBTE affiliated colleges next week. Register now for the pre-placement talk.</p>
<button className="mt-4 bg-on-tertiary-container text-tertiary px-5 py-2 rounded-lg font-bold hover:bg-tertiary-fixed transition-colors">Register Interest</button>
</div>
<div className="hidden lg:block absolute right-[-20px] top-[-20px] opacity-20 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[180px]">school</span>
</div>
</div>
</div>
</div>
{/* Active Applications */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md">Active Applications</h2>
<a className="text-primary font-bold hover:underline" href="#">View All</a>
</div>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant">
<tr>
<th className="px-6 py-4 font-label-md text-on-surface-variant">Job Title</th>
<th className="px-6 py-4 font-label-md text-on-surface-variant">Company</th>
<th className="px-6 py-4 font-label-md text-on-surface-variant">Date Applied</th>
<th className="px-6 py-4 font-label-md text-on-surface-variant">Status</th>
<th className="px-6 py-4 font-label-md text-on-surface-variant">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4 font-bold text-primary">Junior Design Engineer</td>
<td className="px-6 py-4">Mahindra & Mahindra</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-label-sm font-bold bg-primary-fixed text-on-primary-fixed-variant">Under Review</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4 font-bold text-primary">Production Supervisor Trainee</td>
<td className="px-6 py-4">Bajaj Auto Ltd.</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 20, 2023</td>
<td className="px-6 py-4">
<span className="px-3 py-1 rounded-full text-label-sm font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant">Interview Scheduled</span>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/* Recommended for you */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md">Recommended for you</h2>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-surface-container" onclick="document.getElementById('jobScroll').scrollBy({left: -300, behavior: 'smooth'})">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-surface-container" onclick="document.getElementById('jobScroll').scrollBy({left: 300, behavior: 'smooth'})">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="flex gap-gutter overflow-x-auto hide-scrollbar snap-x pb-4" id="jobScroll">
{/* Job Card 1 */}
<div className="min-w-[300px] md:min-w-[380px] snap-start bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-l-primary">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded bg-surface-container p-2 flex items-center justify-center">
<img alt="Company Logo" className="w-full h-full object-contain" data-alt="A minimalist logo of a modern industrial corporation featuring bold geometric lines. The logo is displayed in a clean, white-space heavy environment, emphasizing professional stability and corporate identity. The lighting is bright and architectural, reflecting a high-end corporate brand aesthetic with deep blues and metallic grays." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmsSb-mmZMluhkNDX4tYwocVsYz8GmXPPDg2RNR28k_wWSdJpjD85rIVyvxIYM80mu_-iV0N1RmuK4yUf3ARPd68qBg5A_2QVepKmT3F9i0bF3NhzK8myTAyiTcvt0Iy8h3Kyr9RhoEEvv_X9I7g24DJYdddQIzDR4ONZ41Et07dY83Y2Cmp5linnJk8QXY0PWxn0mdtaf5aZgL9k0WW03kGirN_2cp7u3HjY2pvMvPCcS5sbHE8LcXzG3snariNgQ0cErcJuoILg"/>
</div>
<span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed text-label-sm font-bold rounded">New</span>
</div>
<h4 className="font-bold text-lg mb-1">Maintenance Engineer</h4>
<p className="text-on-surface-variant text-body-md mb-4">Thermax Limited • Pune, MH</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-primary-fixed text-primary text-label-sm rounded-full">Mechanical</span>
<span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm rounded-full">Full Time</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="font-bold text-primary">₹3.5 - 4.2 LPA</span>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold hover:bg-primary-container transition-colors">Apply Now</button>
</div>
</div>
{/* Job Card 2 */}
<div className="min-w-[300px] md:min-w-[380px] snap-start bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded bg-surface-container p-2 flex items-center justify-center">
<img alt="Company Logo" className="w-full h-full object-contain" data-alt="A professional branding mark for a technology and engineering firm, shown as a subtle metallic icon on a high-texture light gray background. The scene is lit with cool-toned studio lights, creating sharp highlights and soft shadows that convey a sense of precision and innovation in the manufacturing sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzABWiTx_FIhp-lynLLREgt4fKnXlzZZoT1LroXsV9uK0c8rC5yiebMuUc1SE0NO5ChzarLwQIsWxybq8ky5YGqtdoqc7DYGmeYcjE7UfQTEUcgIkLf3W3-H0banoavRcPs3W8wF7ra5QdPX0b5kmeKYyuI2WgK-ZlIj6iHTaPcMqaSAAFyci-It3U6_2FIimlyG6Bl-Ffx_VwCgNG9V9rH4cFQ39pOPnpk_jOr9JTNnIUxctKuKlv1NkdBnZtiAkyzumz2gq4XrE"/>
</div>
<span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-bold rounded">Urgent</span>
</div>
<h4 className="font-bold text-lg mb-1">Quality Control Inspector</h4>
<p className="text-on-surface-variant text-body-md mb-4">Godrej & Boyce • Mumbai, MH</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-primary-fixed text-primary text-label-sm rounded-full">Manufacturing</span>
<span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm rounded-full">Day Shift</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="font-bold text-primary">₹3.2 - 3.8 LPA</span>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold hover:bg-primary-container transition-colors">Apply Now</button>
</div>
</div>
{/* Job Card 3 */}
<div className="min-w-[300px] md:min-w-[380px] snap-start bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded bg-surface-container p-2 flex items-center justify-center">
<img alt="Company Logo" className="w-full h-full object-contain" data-alt="A sleek corporate emblem rendered in 3D with a polished chrome finish, set against a backdrop of minimalist modern architecture. The lighting is diffuse and soft, with accents of blue that match a professional design system palette, portraying a high-authority industrial brand in the infrastructure sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHo6CTs4SY-fSk8bAucbkzP0-H2hwJkM0eJ3HDJUt8ZkJ-Vv9iPyBn-e0PDVoQDHueelkL0RKwaKjWs3D8bnOh4AEKbP9PL0Piqnp4kNeWoOgleZu8kCrPSCuUlfgh6fa4kGkGg49RWfXOfsK6zAW8OEXI0VMCHo8lDLqJSDkO5qCF1JGmqVS2LWD3YLxOllbfgsfJHUxeYYp8IvtxY5AULyfOO7Icfoagvia4-dXItZQ9gEjsN8YmLakH_wa6T8AEZrGJqmHcHUk"/>
</div>
</div>
<h4 className="font-bold text-lg mb-1">Site Supervisor (Civil)</h4>
<p className="text-on-surface-variant text-body-md mb-4">Afcons Infrastructure • Nashik, MH</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-primary-fixed text-primary text-label-sm rounded-full">Civil Eng.</span>
<span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm rounded-full">Permanent</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="font-bold text-primary">₹4.0 - 5.0 LPA</span>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold hover:bg-primary-container transition-colors">Apply Now</button>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl">
{/* Dashboard (Active) */}
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>
{/* Jobs */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-150" href="#">
<span className="material-symbols-outlined">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
{/* Profile */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-150" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
{/* Alerts */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-150" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</a>
</nav>
{/* Floating Action Button (FAB) - For Home/Dashboard */}
<button className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40">
<span className="material-symbols-outlined text-[32px]">search</span>
</button>


    </div>
  );
}
