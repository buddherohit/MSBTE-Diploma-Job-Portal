import React from 'react';

export default function ApplicationHistory() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top AppBar (JSON Driven) */}
<header className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MSBTE Jobs</h1>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a young adult with a friendly expression, set against a clean, soft-focus industrial background. The lighting is bright and airy, reflecting a modern corporate style. The image uses a clean, high-contrast palette of natural tones and subtle blues to match a professional job platform aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYnZSuxzDxTi8h9D5Ezoyjb-oiTjewoVTyM_6057AMAmbAzWeCssHIRmvuBWdC3VbJFylBikWDJ54562T2ZF6pmaEGAmVj5fDHodtfPIsrwyfY-JQpM6heH28SQlgQyVjf3MP6cesIK9t9hR1F3sXwCWkvGVCREgHltMG0MoRokuVc4ZBDvX_vBoAZix6AUgcL256d78bJvz9k862Fh64xxkoBSnV4NIzJU9wZxfmCQwEUmj3jjm5xWYGmMg66m2pOgbubxEkKCk" />
</div>
</header>
<main className="pb-24 px-margin-mobile max-w-md mx-auto">
{/* Screen Title */}
<div className="py-6">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">My Applications</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Track your industrial journey</p>
</div>
{/* Filter Chips */}
<div className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar py-2">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm whitespace-nowrap">All</button>
<button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-md text-label-md whitespace-nowrap hover:bg-surface-container transition-colors">Active</button>
<button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-md text-label-md whitespace-nowrap hover:bg-surface-container transition-colors">Completed</button>
</div>
{/* Application List */}
<div className="space-y-stack-md">
{/* Card 1: Interviewing */}
<div className="bg-white rounded-xl p-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-4 items-start mb-4">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant p-2 shrink-0">
<img className="w-full h-full object-contain" data-alt="A minimalist tech company logo featuring geometric blue lines on a clean white background. The style is modern corporate, representing high-end industrial engineering and software development services within the Maharashtra industrial corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2R5NAe21fZ-7PWQ6mCWFnra__s3D9xNP6CpPnqPxojx4j0Rq6nb0LOj48qXWlSNgIK-5RGT1tAfV16f2xQBnp_pYDrv58O-sUnZMyFIdNx1fcovmvcQqLZfT0-1ViY0oFVeRB6ZteGcHQnSZzdkB_venPtWvjXbKAQ9krY0GWLMYdm5q69zzv3gcPBmY8qtqw-yFCHJR7RajcFJIwrc7-Q-PJXNiTn9IG5nDYxOfn1rqjtFY-VG2yeUMBhc2VYdvISbEIZ6j8YL4" />
</div>
<div className="flex-1">
<h3 className="font-headline-md text-body-md font-bold text-on-surface leading-tight">Junior Electrical Engineer</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Larsen & Toubro (L&T)</p>
<p className="font-label-sm text-label-sm text-outline mt-1">Applied: Oct 24, 2023</p>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container animate-pulse"></span>
                        Interviewing
                    </span>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                        Schedule Interview
                    </button>
<button className="px-3 py-2.5 bg-white border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</div>
</div>
{/* Card 2: Shortlisted */}
<div className="bg-white rounded-xl p-4 border border-outline-variant shadow-sm">
<div className="flex gap-4 items-start mb-4">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant p-2 shrink-0">
<img className="w-full h-full object-contain" data-alt="A clean corporate logo for a heavy manufacturing company, using deep navy blue and metallic silver tones. The design suggests strength and reliability in the industrial machinery sector of Maharashtra." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasNCje441jD0pcmj-n5Y7w5kXMWtypZF-Cvp0CuEmv0vk0FqXILotEYfBVkoWITOcNSaR3RDqD8yHFRNaArG2LipMVEspANyu38zNMb4en3CfCknACeXAqY42vipzKnIRjm4YIb5Fqk_ZMXmIXACHQUpyb0HG4J3NMjIwdkn6561LJ9_bBHeJS3nHq2pwv-jpjzYisNxTUy3--_FQXumN7v1_KuSxVWTSUb0ow98sRWXJV993Gtz4_wUd-Al3Wr1bbQ5X0xT3W48" />
</div>
<div className="flex-1">
<h3 className="font-headline-md text-body-md font-bold text-on-surface leading-tight">Mechanical Site Supervisor</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Tata Motors</p>
<p className="font-label-sm text-label-sm text-outline mt-1">Applied: Oct 20, 2023</p>
</div>
<span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                        Shortlisted
                    </span>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2.5 bg-white border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
                        View Details
                    </button>
<button className="flex-1 py-2.5 bg-white border border-outline-variant text-error rounded-lg font-label-md text-label-md hover:bg-error-container transition-colors">
                        Withdraw
                    </button>
</div>
</div>
{/* Card 3: Applied */}
<div className="bg-white rounded-xl p-4 border border-outline-variant shadow-sm opacity-90">
<div className="flex gap-4 items-start">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant p-2 shrink-0">
<img className="w-full h-full object-contain" data-alt="A modern architectural and design firm logo with minimalist gray and white elements. The lighting is clean and professional, representing a stable and creative workplace for engineering diploma students." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB14GcfwTX9nQwLykqCdTGjcNV_os80kjHxEkuFFod91sj1DaELCA5OeWdAsA9yZSSZTbMuVQz0k0eLI3EU9UGwtsq4YLt1yPOUbp0OyDyRVo-xQllEMM4osxSdysqZyCHJUmh5GiDUSxUF5UDG9NhTx7xMFPJLc5vDfSMGpgI66HalxzYDDqyqFhGZ0as4dN0b9aAcACinvCpN8f6utgYQmv5EBXhIMAhEYDRaYDzWgG5QJoysSnKOSLl9_xf-1k5ogSOm2kt36X8" />
</div>
<div className="flex-1">
<h3 className="font-headline-md text-body-md font-bold text-on-surface leading-tight">Civil Draughtsman</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Godrej Properties</p>
<p className="font-label-sm text-label-sm text-outline mt-1">Applied: Oct 15, 2023</p>
</div>
<span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                        Applied
                    </span>
</div>
</div>
{/* Card 4: Not Selected */}
<div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant shadow-sm grayscale">
<div className="flex gap-4 items-start">
<div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant p-2 shrink-0 opacity-50">
<img className="w-full h-full object-contain" data-alt="A generic professional corporate icon representing a manufacturing facility, rendered in flat, neutral colors suitable for an industrial job application history list." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsTUj598Dge2MbMh7evkYI-4LSCAvz_oa_uvXOy0f-K2iGk0uEfkA8cXU4HqusdNjnslI1SrY6q3P6_pR9qT1TfzPn-dF1JQSBiFWBiOOFVGCoQN1Vb1Hh0aZENz-Aw26J_Gvl0BfYaXtap-krBcN2SBUihqNFI1Ajyap39kYLnvWJ8RLFkBjJSs7ZBjoTuUPfp0yyQ0lXcNUFyyNEp5ICMEdWBMK94vAvHt4GEb5gwA8orPGhE0ESHlHV-WYFbM0xapUQVVyRFWI" />
</div>
<div className="flex-1">
<h3 className="font-headline-md text-body-md font-bold text-on-surface-variant leading-tight">AutoCAD Designer</h3>
<p className="font-label-md text-label-md text-outline">Reliance Industries</p>
<p className="font-label-sm text-label-sm text-outline mt-1">Applied: Oct 10, 2023</p>
</div>
<span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">
                        Not Selected
                    </span>
</div>
</div>
</div>
</main>
{/* Bottom Navigation (JSON Driven) */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="work" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>


    </div>
  );
}
