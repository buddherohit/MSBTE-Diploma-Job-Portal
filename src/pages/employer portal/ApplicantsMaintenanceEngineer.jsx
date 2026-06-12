import React from 'react';

export default function ApplicantsMaintenanceEngineer() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-40 w-full">
<div className="flex justify-between items-center px-4 h-16 w-full max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary dark:text-inverse-primary" style={{ fontSize: '28px' }}>precision_manufacturing</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight">Employer Console</h1>
</div>
{/* Desktop Nav Items */}
<nav className="hidden md:flex items-center gap-8 h-full">
<a className="h-full flex items-center px-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" href="#">Home</a>
<a className="h-full flex items-center px-2 text-primary dark:text-inverse-primary font-bold border-b-2 border-primary hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" href="#">Jobs</a>
<a className="h-full flex items-center px-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" href="#">People</a>
<a className="h-full flex items-center px-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" href="#">More</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:block text-right">
<p className="font-label-md text-label-md text-on-surface">Tata Motors Ltd.</p>
<p className="text-xs text-on-surface-variant">Admin Panel</p>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a senior manufacturing executive in a light-filled corporate office. The lighting is crisp and modern, reflecting a corporate high-contrast aesthetic with soft ambient shadows. The individual is wearing a sharp charcoal suit and white shirt, conveying institutional stability and authority. The overall mood is sophisticated and confident, aligning with a premium industrial design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7g-i4A9n0GxuPCJpnTLMpNFW7aeCD0TkdvkFrZti8hq9c3vH3fyEdQ46VPqi4r4p6BdZiQyzlhd016bWSlCjdz1q01XN-fSH_4ActehYF8Zhid-y1qqAQPQGPw5AwgY78SqeVoD2qLx0Ix7Nu9e__gC8aMXXAy5jKEBnnPLuh5UgDNer_i3J6cebOw7Mm3xUhY3cDA6ZeNdjIzvhVdojlpINhWAmXEZ-UgEfqUJAELOLG6eqFaDHwh5u62kjt7RinPzu4G2CfunQ" />
</div>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-4 md:px-gutter py-stack-lg">
{/* Page Title & Stats */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg">
<div>
<nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
<span className="cursor-pointer hover:text-primary">Jobs</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-primary font-medium">Maintenance Engineer</span>
</nav>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Applicants: Maintenance Engineer <span className="text-outline">(45)</span></h2>
</div>
<div className="flex gap-2">
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm hover:opacity-90 transition-all active:scale-95">
<span className="material-symbols-outlined">edit</span> Edit Job
                </button>
<button className="border border-outline text-primary px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container transition-all">
<span className="material-symbols-outlined">share</span> Share
                </button>
</div>
</div>
{/* Filters & Search Bar */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 md:p-6 mb-stack-lg">
<div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
{/* Search */}
<div className="relative w-full lg:max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search by name, branch, or skill..." type="text" />
</div>
{/* Status Tabs */}
<div className="flex p-1 bg-surface-container-high rounded-xl w-full lg:w-auto overflow-x-auto">
<button className="px-6 py-2 rounded-lg text-label-md font-label-md whitespace-nowrap bg-surface-container-lowest shadow-sm text-primary">All (45)</button>
<button className="px-6 py-2 rounded-lg text-label-md font-label-md whitespace-nowrap text-on-surface-variant hover:text-on-surface">New (12)</button>
<button className="px-6 py-2 rounded-lg text-label-md font-label-md whitespace-nowrap text-on-surface-variant hover:text-on-surface">Shortlisted (8)</button>
<button className="px-6 py-2 rounded-lg text-label-md font-label-md whitespace-nowrap text-on-surface-variant hover:text-on-surface">Interviewed (5)</button>
<button className="px-6 py-2 rounded-lg text-label-md font-label-md whitespace-nowrap text-on-surface-variant hover:text-on-surface">Rejected (20)</button>
</div>
</div>
</div>
{/* Applicants Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
{/* Candidate Card 1 */}
<div className="candidate-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-headline-md border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of a young Indian male professional with a warm, confident expression. He is wearing a minimalist navy blue polo shirt. The background is a clean, neutral-toned industrial training facility with soft, professional lighting. The image captures a sense of ambition and modern engineering expertise, utilizing a high-contrast corporate style with sharp details and professional depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCZ2mVyv9yn0bXYXtF-1bLxeDVQswx2ivRT0QK3Sbp7R2URayvIAZD3peV1-jU3GO5Q_qJ2Y9LON6wAP6hPicGU6DpTRuxTXZvqfdHY8BpvC5qfJKjYtsWVm82LjmusP9S3ez1AJdK72crR4mvoUUbKfdVmb7OzGwurB-VZTMctwdqob9hxEkpPlGn6iiFW80GxZUfQ6pYpeHye3R20deg4dSKv_WVbu2nrz2Akade498HWwP917a-zaMcQK4BMsW3ztFtnI_40M" />
</div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">New</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Aditya Kulkarni</h3>
<p className="text-on-surface-variant font-medium mb-3">Mechanical Engineering • MSBTE</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">CGPA</span>
<span className="font-headline-md text-primary">8.92</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">Location</span>
<span className="text-on-surface font-medium">Pune, MH</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">AutoCAD</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Hydraulics</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">PLC</span>
</div>
</div>
<div className="flex flex-col gap-2 pt-4 border-t border-outline-variant">
<div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
<span>Applied 2 days ago</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">description</span> Resume.pdf</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors">View Profile</button>
<button className="border border-outline-variant text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Shortlist</button>
</div>
</div>
</div>
{/* Candidate Card 2 */}
<div className="candidate-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-headline-md border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A portrait of a focused female diploma student in an electrical lab environment. She is wearing a modern light-blue utility work shirt. The setting is bright and clinical with blurred industrial equipment in the background. The lighting is high-key and clean, embodying a sense of modern technical skill and corporate professionalism. The image uses a disciplined blue and white color palette consistent with institutional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrpJwxY7ALDvUGDsya9bxs8FdUcfGl00rhW29e8j6YBvEnPdKAI28yS-FR7CEt2AyEnkDNwwNoQGaojUGFKZobFMYWrwQHZygajaVOE-olTamW3a3FQ7ltBOaptP881tLydFJzL8AWzVWixBmsYKJ03xWRqddjVkI55jgHQb-K-rBt1-DfUgpUNEEQGmN7ZCKU28oZHXGGmXBBb8yxWEMnSemV9A56hXnXd_tMfFoIkekP8uq0sR83ngpqmmWvDWhKMkJX493H2c" />
</div>
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm font-label-sm">Interviewed</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Snehal Deshmukh</h3>
<p className="text-on-surface-variant font-medium mb-3">Electrical Engineering • MSBTE</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">CGPA</span>
<span className="font-headline-md text-primary">9.45</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">Location</span>
<span className="text-on-surface font-medium">Nashik, MH</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Grid Mgmt</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Safety</span>
</div>
</div>
<div className="flex flex-col gap-2 pt-4 border-t border-outline-variant">
<div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
<span>Applied 1 week ago</span>
<span className="flex items-center gap-1 font-semibold text-secondary">Today @ 4:00 PM</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors">View Profile</button>
<button className="bg-secondary text-on-secondary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-colors">Start Interview</button>
</div>
</div>
</div>
{/* Candidate Card 3 */}
<div className="candidate-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-full bg-outline-variant flex items-center justify-center text-on-surface font-bold text-headline-md border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A portrait of a young male engineering student with a determined look, set against a blurred modern architectural background. He wears a smart casual grey shirt. The lighting is natural but professionally enhanced for high contrast and structural clarity. The aesthetic reflects a 'Startup-grade' agility combined with academic trust, using sharp focus and a clean, spacious composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfLyrzaJToTUnEa2-3BgaEeWKzgi7aydkmziodldDkE1GF1Dzkyv0KFDCfu7cIvPt72eQ8colLD-DsxJCbLJ0Hz1aSKqe4rPUMpFrOfsR5stPCBpYbbU6Slu6m482wbMD_Y1-qilXWMr_NhrwfuTQrljq0wPSvzY2JrJPEO0eRwKpG3zQNmjM90tnNOaASDHVDBMf6aAUNw9EDLVE6dQ4l659kdQK_v8P_ikynqCG3_5MsVnwNWH6Ly45K3IMdz0n4kTkhQ_XloQ" />
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-label-sm">Shortlisted</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Rahul More</h3>
<p className="text-on-surface-variant font-medium mb-3">Mechanical Engineering • MSBTE</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">CGPA</span>
<span className="font-headline-md text-primary">8.10</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">Location</span>
<span className="text-on-surface font-medium">Nagpur, MH</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Lathe Operation</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">SolidWorks</span>
</div>
</div>
<div className="flex flex-col gap-2 pt-4 border-t border-outline-variant">
<div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
<span>Applied 5 days ago</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> Top 10%</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors">View Profile</button>
<button className="border border-outline-variant text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Schedule</button>
</div>
</div>
</div>
{/* Candidate Card 4 */}
<div className="candidate-card-hover bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed font-bold text-headline-md border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A portrait of a smiling male mechanical engineering candidate in a vibrant workshop setting. Warm, natural lighting highlights his friendly and accessible personality. The background features tools and equipment in a clean, organized manner, emphasizing efficiency and practical expertise. The visual style is Corporate Modern, prioritizing clarity and trust with a palette of deep blues and industrial greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYVyQBPIQE_2QlklaOGQ5Jm0l_2wd4-GSqlGt-y_X5MEhHnsFs98UXakbB69tRFH38eXra4BeYz-8HcX93zpmcfp5wJXip0WnPFRBDQFpgEhcAesGSZcgeAY2vrHHPDn9kM2-ytFV8lxPr9L8UbSnASfLcZ2v-YuZ9tuPwaSLo6PxrPTxzlNi2B51DrFJErIMVCz6gP8yeN0Kpqo1M8Hkh6cvbwd2gGFPFRclvtJyHkJGWiKOrqkO5SlR43A8J8OqOTTpQzdcUB8" />
</div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">New</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Vikram Patil</h3>
<p className="text-on-surface-variant font-medium mb-3">Civil Engineering • MSBTE</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">CGPA</span>
<span className="font-headline-md text-primary">7.85</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-outline uppercase tracking-wider font-bold">Location</span>
<span className="text-on-surface font-medium">Aurangabad, MH</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Site Mgmt</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase">Estimating</span>
</div>
</div>
<div className="flex flex-col gap-2 pt-4 border-t border-outline-variant">
<div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
<span>Applied 3 hours ago</span>
<span className="flex items-center gap-1 text-error"><span className="material-symbols-outlined text-[14px]">warning</span> Missing Cert</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors">View Profile</button>
<button className="border border-outline-variant text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Reject</button>
</div>
</div>
</div>
{/* Empty Placeholder Card */}
<div className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-60">
<span className="material-symbols-outlined text-4xl mb-4">group_add</span>
<p className="font-label-md text-label-md mb-2">Waitlisted Candidates</p>
<p className="text-xs text-on-surface-variant">There are 15 more candidates in the waitlist for this position.</p>
<button className="mt-4 text-primary font-bold text-sm hover:underline">View All</button>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline shadow-sm flex justify-around items-center px-margin-mobile py-2 rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-xl px-3 py-1 transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">group</span>
<span className="font-label-sm text-label-sm">People</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">menu</span>
<span className="font-label-sm text-label-sm">More</span>
</div>
</nav>


    </div>
  );
}
