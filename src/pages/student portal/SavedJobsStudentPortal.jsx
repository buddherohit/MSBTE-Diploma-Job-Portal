import React from 'react';

export default function SavedJobsStudentPortal() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="w-full top-0 sticky z-40 bg-surface dark:bg-inverse-surface shadow-sm h-16 flex items-center justify-between px-gutter">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="school">school</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">MSBTE Pro</h1>
</div>
<div className="hidden md:flex items-center gap-6">
<nav className="flex gap-4">
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Home</a>
<a className="font-label-md text-label-md text-primary font-bold hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-lg" href="#">Resume</a>
</nav>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a young adult student with a warm, confident expression, set against a blurred academic background. The lighting is natural and bright, creating a clean light-mode aesthetic. The style is modern corporate, maintaining a high-contrast and professional look suitable for an industrial job portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUlFVApTqvKMuXtAPR8pT9N1OOqnfNnVqP4HIBfv72-eFQJIOVrl-g6R0c5Pe-l4qpOcRptfeNYGzzwPWcciJJkxQRb6zzEd-mwBmpv5yik8gU9m774uPepdrhvNDQzse3UvU_Q_CXqk6U3TF5n8BloSorVYuS1eEENrQLdE659bDCWbBERQVQG1eczCEI3l0t4ZqKIDtsOUHAZBnMD72QbG0mgR9DJ8ylYuHbSX5HH2T0oUyRizbwWzpM78BYIAI2vlL445tGrA"/>
</div>
</div>
<button className="md:hidden p-2 text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 pb-32">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Saved Opportunities</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Track and manage the roles you're interested in.</p>
</div>
{/* Path Switcher (Industrial Style) */}
<div className="inline-flex bg-surface-container p-1 rounded-xl border border-outline-variant">
<button className="px-4 py-2 rounded-lg font-label-md text-label-md bg-white text-primary shadow-sm">Student View</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high">Recruiter View</button>
</div>
</div>
{/* Search and Filters */}
<div className="flex flex-col md:flex-row gap-4 mb-10">
<div className="relative flex-1 group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md" placeholder="Search within saved jobs..." type="text"/>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="flex items-center gap-2 px-4 py-2.5 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">history</span> Recent
                </button>
<button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-highest active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">event</span> Deadline
                </button>
<div className="h-8 w-[1px] bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-highest active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">filter_list</span> All Filters
                </button>
</div>
</div>
{/* Job Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Job Card 1: Forbes Marshall */}
<div className="job-card bg-white p-6 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(15,23,42,0.04)] relative">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center p-2">
<img alt="Forbes Marshall Logo" className="w-full h-full object-contain" data-alt="A minimalist, geometric corporate logo for a heavy industrial engineering firm. The logo features sharp architectural lines and a professional blue and gray color scheme, set against a clean white background. The aesthetic is clean, modern, and high-trust, representing industrial stability and engineering precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzqlHrRpiLt_9I2iccBzwdDS3BvlnuH2kzlYAQIe2Z9fX556Rgs38MGlhMn8wJMpc_F33Qa3welcCuRZ9QiAwqA-75Y2w6JcTi__raDLlFl7KWr2WYZ70zTjUJRPtmnJQ-uvvd-tVJwPcmqwUaYkrYMOv_S3eMAT5PtGvdMkHEy7zdwUdzU0-Yq0due6W6EeqQGovepFAgzGicZ8HUlEdVS2A8y7R6sHnyPQV1yU3MUBeP76DbmzccMMnlCNalfmggSZpIWkFTc9U"/>
</div>
<button className="p-2 text-outline hover:text-error hover:bg-error-container/20 rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-sm uppercase tracking-wider">Urgent</span>
<h3 className="font-headline-md text-[18px] text-on-surface leading-tight">Quality Control Engineer</h3>
</div>
<p className="font-body-md text-on-surface-variant">Forbes Marshall Pvt. Ltd.</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-label-sm text-label-sm">Pune, Maharashtra</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">payments</span>
<span className="font-label-sm text-label-sm">₹3.5L - ₹5.2L Per Annum</span>
</div>
</div>
<div className="flex gap-2 mb-6">
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">Mechanical</span>
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">Six Sigma</span>
</div>
<button className="w-full py-3 bg-secondary text-white font-label-md text-label-md rounded-lg active:scale-95 transition-transform hover:opacity-90">
                    Apply Now
                </button>
</div>
{/* Job Card 2: Kirloskar */}
<div className="job-card bg-white p-6 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(15,23,42,0.04)] relative">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center p-2">
<img alt="Kirloskar Logo" className="w-full h-full object-contain" data-alt="A clean, bold corporate emblem representing a traditional manufacturing giant. The design utilizes deep blue tones and strong, symmetrical typography to evoke a sense of longevity and industrial power. The overall visual style is corporate and trustworthy, suitable for a professional engineering platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuXCkjWrjF6AEzl7-muBXszDGmhc_g-32S3HBBSE170Zqkp3_YFOpc8NKUCKg3zugtMkHhicbzbGoZsW2ekBRShA2QfCw-mGRaLRjABoRX-0ATAfNPllFgDQiyYa5HcccbZErBSzKafd9UhKa1IrA56Ok0UEeH_Gs-lCKx4arwnf_dNIk3Sfgee9gPymt2nk0VIbL8_rZViqOckTdQmvvh0QbegmEhA5kh7NYrRaB5hSg-GuLHtbHE1hrTOj75TJS7FxEn-XWN4U"/>
</div>
<button className="p-2 text-outline hover:text-error hover:bg-error-container/20 rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
<div className="mb-4">
<h3 className="font-headline-md text-[18px] text-on-surface leading-tight mb-1">Graduate Trainee Engineer</h3>
<p className="font-body-md text-on-surface-variant">Kirloskar Brothers Ltd.</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-label-sm text-label-sm">Sangli, Maharashtra</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">payments</span>
<span className="font-label-sm text-label-sm">₹2.8L - ₹4.0L Per Annum</span>
</div>
</div>
<div className="flex gap-2 mb-6">
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">Production</span>
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">CAD</span>
</div>
<button className="w-full py-3 bg-secondary text-white font-label-md text-label-md rounded-lg active:scale-95 transition-transform hover:opacity-90">
                    Apply Now
                </button>
</div>
{/* Job Card 3: Tata Motors */}
<div className="job-card bg-white p-6 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(15,23,42,0.04)] relative">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center p-2">
<img alt="Tata Motors Logo" className="w-full h-full object-contain" data-alt="A modern, sleek automotive brand logo featuring high-contrast blue and white elements. The design is clean and professional, using sharp sans-serif typography that communicates innovation and legacy. The lighting in the logo presentation is crisp and uniform, maintaining a premium light-mode corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiItun5oeHuUyyFHesxSZ9Jp_Z3XdVMkU8NhOMlAuetPELVPiWLKfCkTw7dJ0hJqV1QpMAQk4ekcbQYTpsnRsyZAfxUYAaVZZhKevMwbv69Y8j6Ku6fJliQaq5Zy0OBT9lk-kOJNErMFfsq_p2rF6i9Qukzv6bHuWSyky7qm2h5RaiN4nzkghlmv1b2J0UIqUAubu1QbmnVqCAK-rP1PvsEhSnBlLSdtjpbHBzxInTVf5L_a400X-AOWK3GDbx1KoL4tUokwF7gNA"/>
</div>
<button className="p-2 text-outline hover:text-error hover:bg-error-container/20 rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-sm uppercase tracking-wider">New</span>
<h3 className="font-headline-md text-[18px] text-on-surface leading-tight">Assembly Line Supervisor</h3>
</div>
<p className="font-body-md text-on-surface-variant">Tata Motors</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-label-sm text-label-sm">Pimpri, Pune</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">payments</span>
<span className="font-label-sm text-label-sm">₹4.2L - ₹6.0L Per Annum</span>
</div>
</div>
<div className="flex gap-2 mb-6">
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">Electrical</span>
<span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-md font-label-sm text-label-sm">Automation</span>
</div>
<button className="w-full py-3 bg-secondary text-white font-label-md text-label-md rounded-lg active:scale-95 transition-transform hover:opacity-90">
                    Apply Now
                </button>
</div>
{/* Empty State Illustration Card (Bento style) */}
<div className="lg:col-span-1 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-8 text-center bg-surface-container-low min-h-[400px]">
<div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-outline text-[48px]" data-icon="bookmark">bookmark</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">More to explore</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 px-4">Continue searching for roles that match your diploma specialization.</p>
<button className="px-6 py-3 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary-container/10 transition-colors active:scale-95">
                    Browse New Jobs
                </button>
</div>
</div>
</main>
{/* BottomNavBar */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-2 pt-1 bg-surface dark:bg-inverse-surface shadow-[0_-4px_12px_rgba(15,23,42,0.08)] rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-sm text-label-sm">Resume</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="work" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-sm text-label-sm">Status</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>


    </div>
  );
}
