import React from 'react';

export default function EmployerNotifications() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flex justify-between items-center px-gutter w-full h-16 sticky top-0 z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" data-icon="factory">factory</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">MAHA-INDUSTRIAL</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-6 mr-6">
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Home</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Search</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">My Jobs</a>
<a className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary px-1" href="#">Notifications</a>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a senior industrial executive in a crisp navy blue suit, set against a blurred modern office background with cool tones. The lighting is bright and clean, emphasizing a corporate and authoritative yet approachable personality. The overall aesthetic is high-contrast and sharp, fitting a professional recruiter dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUHSk2m8PkgwpP30xHjJs1mEL20q-aKjtQ_pd1lh6Af_uVROB8uG4VKW4HunAHPP983KlOEXnMqYZe6RYDfNpGMC7u9utkfd8yfFzWBsQ2nTZvTv-gg24DEFNWREqCzrr0_X8BubgFH_gzaT8zqsjcxat1cqF4Zsg4txSB5AGm5fHPbz-U7AFNeRK8AZEaKA7FZ5nShl9S3nk6Og5DJAMsVBY9mqxTm9d6T1nhz8tbJIe1aV4zLzDcSEw1J1VIm210wUpbyUUG1fc" />
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Notifications</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your industrial recruitment alerts and system updates.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg font-label-md text-label-md text-primary border border-primary hover:bg-primary-fixed transition-colors active:scale-95">
<span className="material-symbols-outlined text-[20px]" data-icon="done_all">done_all</span>
                Mark all as read
            </button>
</div>
{/* Notification Feed */}
<div className="space-y-stack-lg">
{/* Today Section */}
<section>
<h3 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-stack-md">Today</h3>
<div className="space-y-stack-md">
{/* Urgent Notification Card */}
<div className="group relative bg-surface-container-lowest border-l-4 border-l-secondary shadow-sm rounded-r-xl p-stack-md flex gap-4 items-start hover:shadow-md transition-all cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-[18px] leading-6 text-on-surface">New Urgent Applicant: Senior CNC Machinist</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 mins ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">A highly qualified candidate from Pune with 10+ years of experience has applied for your urgent opening.</p>
<div className="mt-3 flex gap-2">
<span className="bg-secondary-fixed-dim text-on-secondary-container px-2 py-0.5 rounded text-label-sm font-medium">Urgent</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-label-sm font-medium">Mechanical Engineering</span>
</div>
</div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
</div>
</div>
{/* Interview Scheduled Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md flex gap-4 items-start hover:shadow-sm transition-all cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="event">event</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-[18px] leading-6 text-on-surface">Interview Scheduled</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Interview with Rajesh Kumar for the 'Plant Supervisor' role is confirmed for tomorrow at 10:30 AM.</p>
<div className="mt-3">
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline">Add to Calendar</button>
</div>
</div>
</div>
</div>
</section>
{/* Yesterday Section */}
<section>
<h3 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-stack-md">Yesterday</h3>
<div className="space-y-stack-md">
{/* Job Expiring Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md flex gap-4 items-start hover:shadow-sm transition-all cursor-pointer opacity-80 hover:opacity-100">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-container/10 flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined" data-icon="timer_off">timer_off</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-[18px] leading-6 text-on-surface">Job Listing Expiring</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday, 4:15 PM</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Your listing for 'Junior Quality Auditor' will expire in 24 hours. Boost or renew now to keep receiving applications.</p>
<div className="mt-3 flex gap-4">
<button className="font-label-sm text-label-sm text-secondary font-bold hover:underline">Renew Listing</button>
<button className="font-label-sm text-label-sm text-on-surface-variant font-medium hover:underline">Dismiss</button>
</div>
</div>
</div>
{/* System Alert Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md flex gap-4 items-start hover:shadow-sm transition-all cursor-pointer opacity-80 hover:opacity-100">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-outline">
<span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-[18px] leading-6 text-on-surface">Weekly Performance Digest</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday, 9:00 AM</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Your company profile saw a 15% increase in views this week. Check out the detailed analytics in your dashboard.</p>
</div>
</div>
</div>
</section>
{/* Older Section */}
<section>
<h3 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-stack-md">Older</h3>
<div className="space-y-stack-md">
{/* Standard Notification Card */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md flex gap-4 items-start hover:shadow-sm transition-all cursor-pointer opacity-60 hover:opacity-100">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-outline">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-[18px] leading-6 text-on-surface">New Message from Candidate</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 days ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Amol Deshmukh has sent you a follow-up message regarding the 'Warehouse Manager' position.</p>
</div>
</div>
</div>
</section>
</div>
{/* Footer Visual (Optional/Contextual) */}
<div className="mt-stack-lg p-6 bg-primary-container/10 rounded-2xl border border-primary/10 flex flex-col md:flex-row items-center gap-6">
<div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
<img alt="Industrial Data" className="w-full h-full object-cover" data-alt="A close-up of a high-tech industrial control panel with glowing blue data visualizations and mechanical blueprints. The image uses a shallow depth of field to focus on the intricate digital interface, suggesting precision and advanced manufacturing technology. The color palette is dominated by professional navy blues and cool greys, perfectly aligned with the industrial blueprint design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBANxaRql_LFX7UplyYEZcln3VOODRDnCZgK50qvo9P_X1Fjf4zWAQLUJSe5vzbzTxB_-lAsUQ6jKSllmoyYBye7syo8fmmcbioVCkOvkjCSe-41QeC4CEDMeVi1ulk-c0qT6ghNWCpmDmIU2TBPEvDDXQKNgJYNnUScdvTphV-OPK8ExZ6O0Zwxq2qVM4v1pHsDTo8Ks8Xp8CM01p6DKfz4viSnsKWFTtl68EVyYtAV_VSIQXTJFtr67adrIaQE2P7kgfRdYQU3cw" />
</div>
<div>
<h4 className="font-headline-md text-[20px] text-primary">Need more candidates?</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Promote your active job listings to reach the top 5% of diploma students in the Maharashtra industrial corridor.</p>
</div>
<button className="whitespace-nowrap px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all shadow-md ml-auto">
                Promote Listings
            </button>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline shadow-sm rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="font-label-sm text-label-sm">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">My Jobs</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-xl px-3 py-1 scale-95 active:scale-90 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
</nav>


    </div>
  );
}
