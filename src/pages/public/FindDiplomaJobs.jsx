import React from 'react';
import Header from '../../components/Header';

export default function FindDiplomaJobs() {
  return (
    <div className="w-full min-h-screen">
      <Header activePage="jobs" />

<main className="max-w-container-max mx-auto px-margin-mobile pb-32">
{/* Hero & Search Section */}
<section className="py-stack-lg">
<div className="mb-stack-lg">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Find Your First Engineering Move</h2>
<p className="text-on-surface-variant">Exclusive diploma jobs across Maharashtra's industrial hubs.</p>
</div>
{/* Search Bar */}
<div className="relative w-full max-w-2xl mb-stack-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-4 rounded-xl border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all text-body-md outline-none border" placeholder="Search jobs, roles or companies" type="text"/>
</div>
{/* Path Switcher */}
<div className="flex p-1 bg-surface-container rounded-full w-fit mb-stack-lg border border-outline-variant">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md transition-all">I am a Student</button>
<button className="px-6 py-2 rounded-full text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-all">I am a Recruiter</button>
</div>
{/* Filter Chips (Horizontal Scroll on Mobile) */}
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
<span className="text-label-sm font-label-sm text-outline uppercase tracking-wider mr-2">Branch:</span>
<button className="flex-none bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap">ME (Mechanical)</button>
<button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant hover:border-primary transition-colors">CE (Civil)</button>
<button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant hover:border-primary transition-colors">EE (Electrical)</button>
<button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant hover:border-primary transition-colors">IT/Comp</button>
</div>
<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
<span className="text-label-sm font-label-sm text-outline uppercase tracking-wider mr-2">Filters:</span>
<button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant flex items-center gap-1">
                        District <span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
<button className="flex-none bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-tertiary-container/20">Fresher</button>
<button className="flex-none bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border border-outline-variant">Internship</button>
</div>
</div>
</section>
{/* Job Cards Vertical List */}
<div className="space-y-stack-md">
{/* Job Card 1 */}
<article className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0px_4px_12px_rgba(15,23,42,0.08)] transition-all flex flex-col md:flex-row md:items-center gap-4 group">
<div className="flex-none w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
<img alt="Tata Motors" className="w-full h-full object-contain" data-alt="A minimalist and high-contrast corporate logo of a major automotive manufacturing company, Tata Motors. The logo is displayed cleanly on a white background with professional, sharp edges. The visual style is modern, industrial, and institutional, reflecting the stability and power of a leading Indian conglomerate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Junior Production Engineer</h3>
<span className="bg-error-container text-on-error-container text-label-sm font-label-sm px-2 py-0.5 rounded uppercase">Urgent</span>
</div>
<p className="text-primary font-label-md mb-2">Tata Motors Ltd.</p>
<div className="flex flex-wrap gap-4 text-on-surface-variant text-label-md">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span> Pune, Chakan
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">payments</span> ₹18,000 - ₹25,000 /mo
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">school</span> Mechanical Engineering
                        </div>
</div>
</div>
<div className="flex gap-2 mt-4 md:mt-0 md:flex-col lg:flex-row">
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md flex-grow md:flex-none hover:opacity-90 transition-opacity">Quick Apply</button>
<button className="border border-primary text-primary px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
{/* Job Card 2 */}
<article className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0px_4px_12px_rgba(15,23,42,0.08)] transition-all flex flex-col md:flex-row md:items-center gap-4 group">
<div className="flex-none w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
<img alt="L&T Construction" className="w-full h-full object-contain" data-alt="A professional and sleek architectural firm logo, Larsen and Toubro, emphasizing civil engineering excellence. The logo is rendered in high-definition on a clean surface, surrounded by soft lighting that suggests a corporate, trustworthy, and institutional environment. The color scheme is disciplined, using navy blues and greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Diploma Trainee - Civil</h3>
<span className="bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm px-2 py-0.5 rounded uppercase">New Listing</span>
</div>
<p className="text-primary font-label-md mb-2">L&T Construction</p>
<div className="flex flex-wrap gap-4 text-on-surface-variant text-label-md">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span> Mumbai, BKC
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">payments</span> ₹22,000 - ₹28,000 /mo
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">school</span> Civil Engineering
                        </div>
</div>
</div>
<div className="flex gap-2 mt-4 md:mt-0 md:flex-col lg:flex-row">
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md flex-grow md:flex-none hover:opacity-90 transition-opacity">Quick Apply</button>
<button className="border border-primary text-primary px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
{/* Job Card 3 (IT) */}
<article className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0px_4px_12px_rgba(15,23,42,0.08)] transition-all flex flex-col md:flex-row md:items-center gap-4 group">
<div className="flex-none w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
<img alt="Infosys" className="w-full h-full object-contain" data-alt="A vibrant and modern tech company logo, Infosys, presented with crisp resolution. The environment around it suggests a cutting-edge software development park in Hinjewadi, Pune, with glass buildings and green spaces reflecting in the background. The lighting is bright and optimistic, perfect for a high-energy job seeker portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">Technical Support Associate</h3>
<div className="flex gap-1">
<span className="bg-blue-100 text-blue-800 text-label-sm font-label-sm px-2 py-0.5 rounded uppercase">Internship</span>
</div>
</div>
<p className="text-primary font-label-md mb-2">Infosys BPM</p>
<div className="flex flex-wrap gap-4 text-on-surface-variant text-label-md">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span> Pune, Hinjewadi
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">payments</span> ₹15,000 /mo (Stipend)
                        </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">school</span> IT / Computer Eng.
                        </div>
</div>
</div>
<div className="flex gap-2 mt-4 md:mt-0 md:flex-col lg:flex-row">
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md flex-grow md:flex-none hover:opacity-90 transition-opacity">Quick Apply</button>
<button className="border border-primary text-primary px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
</div>
</main>
{/* Floating Action Button */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-40">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>bookmark</span>
<span className="absolute -top-1 -right-1 bg-error text-on-error text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
</button>
{/* Bottom Navigation Bar (Mobile only via md:hidden handled by design system logic) */}
<footer className="md:hidden fixed bottom-0 w-full z-50 bg-surface dark:bg-on-background shadow-md rounded-t-xl flex justify-around items-center px-4 py-2 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-sm text-label-sm mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm mt-0.5">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm mt-1">Profile</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm mt-1">Alerts</span>
</a>
</footer>
{/* Atmosphere Effects */}
<div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-fixed/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-fixed/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>


    </div>
  );
}
