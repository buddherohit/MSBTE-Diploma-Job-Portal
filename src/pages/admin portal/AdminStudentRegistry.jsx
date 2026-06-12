import React from 'react';

export default function AdminStudentRegistry() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar (JSON Mapping) */}
<header className="sticky top-0 z-50 flex justify-between items-center w-full px-gutter max-w-container-max mx-auto bg-surface border-b border-outline-variant py-4">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-high transition-colors rounded-full" data-icon="menu">menu</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Student Registry</h1>
</div>
<div className="hidden md:flex items-center gap-8">
<nav className="flex items-center gap-6">
<a className="text-on-surface-variant hover:bg-surface-container-high px-3 py-1 rounded transition-colors font-label-md text-label-md" href="#">Dashboard</a>
<a className="text-primary font-bold border-b-2 border-primary px-3 py-1 font-label-md text-label-md" href="#">Student Directory</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-3 py-1 rounded transition-colors font-label-md text-label-md" href="#">Verification Queue</a>
</nav>
<div className="flex items-center gap-3 pl-6 border-l border-outline-variant">
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">MSBTE Admin</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Registry Control</p>
</div>
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high transition-colors rounded-full" title="Registry Settings">settings</button><div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img alt="Admin" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged male administrator in a clean office setting. He is wearing a crisp white shirt and navy blue vest, reflecting authority and institutional stability. The lighting is bright and corporate, matching a modern light-mode UI aesthetic. The background is a slightly blurred office with shelves of academic records." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1-laMibRk982HYPAqXPctFPikxI86vL8lUUIv-ibnIsxBpGlfA4YXO3GKnv8lzjDybZ8dhjSjZ5NVN_oUKjog1qt18rngkAvXSrQdd-k5RQorSeiICuxIz2_JIXcUItbZWIVPb_KBRVGAfvGAy-ylx5msMrtXT6mMc5iJRulySsOROEq-glQt3kQZOdrlbypQfdpoN3e9YT5N9CjZV1uxFLM-uk8-dad9dYBFf-ntcAPdE0l4GtiKBM6gzd0Ykl5NYD2nN0p1IE" />
</div>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg pb-32 md:pb-stack-lg">
{/* Header & Search */}
<div className="flex flex-col gap-stack-md mb-stack-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Candidate Records</h2>
<p className="text-on-surface-variant font-body-md">Managing 14,208 verified diploma profiles across Maharashtra.</p>
</div>
<div className="flex gap-2">
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="person_add">person_add</span>
                        Manual Entry
                    </button>
<button className="bg-surface-container border border-outline-variant text-on-surface px-4 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="file_download">file_download</span>
                        Export
                    </button>
</div>
</div>
{/* Search & Filters Container */}
<div className="technical-border bg-surface-container-lowest p-stack-md flex flex-col gap-4">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full bg-surface border border-outline-variant pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md" placeholder="Search by Student Name, Enrollment ID, or Institute Code..." type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-outline uppercase tracking-wider pl-1">Diploma Branch</label>
<select className="bg-surface border border-outline-variant px-3 py-2 rounded-lg font-label-md text-label-md focus:ring-primary">
<option>All Branches</option>
<option>Mechanical Engineering</option>
<option>Civil Engineering</option>
<option>Computer Technology</option>
<option>Electrical Engineering</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-outline uppercase tracking-wider pl-1">Passing Year</label>
<select className="bg-surface border border-outline-variant px-3 py-2 rounded-lg font-label-md text-label-md focus:ring-primary">
<option>Any Year</option>
<option>2024 (Current)</option>
<option>2023</option>
<option>2022</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-outline uppercase tracking-wider pl-1">Verification Status</label>
<select className="bg-surface border border-outline-variant px-3 py-2 rounded-lg font-label-md text-label-md focus:ring-primary">
<option>All Statuses</option>
<option>Verified</option>
<option>Pending</option>
<option>Flagged</option>
</select>
</div>
<div className="flex items-end">
<button className="w-full bg-surface-container-high text-on-surface-variant border border-outline-variant py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-outline-variant transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                            Advanced Filters
                        </button>
</div>
</div>
</div>
</div>
{/* Student Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
{/* Student Card 1 */}
<div className="technical-border bg-surface-container-lowest p-gutter group hover:shadow-md transition-shadow">
<div className="flex gap-gutter">
<div className="relative flex-shrink-0">
<div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden border border-outline-variant">
<img alt="Student" className="w-full h-full object-cover" data-alt="A professional studio portrait of a young male engineering student with a focused and determined expression. He is wearing a formal blue shirt. The background is a neutral, light-grey gradient, maintaining a high-trust, institutional atmosphere. The image is sharp and high-resolution, suitable for a government registry profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXVmsTZ51DcJw5MqUnqJpyq0PYIGkMnM4aw7yGf7AjTbQFTsGfCQf3FGjj6Pmf0C3ADONx4Id3Ahxs5eYY04Q597wFxzTgQNSm3lyULR0Q4HqRoI8TK_2-stBBsLC2M49T2leW5Wvw08AJACgFBQrwHhzop-PJiN0xHCmx7Cvvncju_TcX-zV6AbF5AVrP3JS0b50IN1tGceRedWHkMFgdKK6mXnL8kKHIC2qg0Qje_Vmyhi5nhc3zF9gX0Pf7KleB9dgt1njHC7Q" />
</div>
<div className="absolute -bottom-2 -right-2 bg-on-tertiary-container text-tertiary-container px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 border border-on-tertiary-container">
<span className="material-symbols-outlined text-[12px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                            VERIFIED
                        </div>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[20px] text-on-surface">Rajesh Deshmukh</h3>
<span className="bg-surface-container-high text-on-surface px-2 py-1 rounded font-label-sm text-label-sm border border-outline-variant">EN: 21004509</span>
</div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Mechanical Engineering</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Class of 2023</span>
</div>
</div>
<div className="flex items-center gap-6 mt-4">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Aggregate CGPA</p>
<p className="text-headline-md text-primary font-bold">9.42 <span className="text-label-sm font-normal text-outline">/ 10</span></p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Institute</p>
<p className="text-label-md text-on-surface font-semibold">G.P. Pune (0002)</p>
</div>
</div>
</div>
</div>
<div className="mt-stack-md pt-stack-md border-t border-outline-variant flex gap-3">
<button className="flex-grow bg-primary text-on-primary py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">View Full Profile</button>
<button className="px-4 py-2.5 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined align-middle" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/* Student Card 2 (Pending) */}
<div className="technical-border bg-surface-container-lowest p-gutter group hover:shadow-md transition-shadow">
<div className="flex gap-gutter">
<div className="relative flex-shrink-0">
<div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden border border-outline-variant">
<img alt="Student" className="w-full h-full object-cover" data-alt="A portrait of a young female student with a professional and friendly demeanor, wearing a smart casual blazer. Her expression is confident. The setting is bright with soft natural light, fitting the modern corporate style of the portal. The image quality conveys reliability and academic excellence for an official database." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp1314x_eoWTgiN1bLGFvpERUX-PtBtVJHZ0KWYBHZS6ICxfamwfM5Shzdy1rMUJKV2dzCi4TO9ovTHyiTPAGAQjlcA26SqOhtZ_-MgIl0AEz13VMO3yz0SqBiOQYI30pSrcntBFaikXqB0GEJUAI_doB4PlMq8SMLWvDqtirz1ec14h0Rfri-0dibUN0BQHuFjTIrLZLbPPeXNoaAZYZKf2rjrvCGJWuev3CguZsOOSLp1W5HStEhrSqZLRAnmQ2wZzbtZKivk30" />
</div>
<div className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 border border-secondary">
<span className="material-symbols-outlined text-[12px]" data-icon="pending">pending</span>
                            PENDING
                        </div>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[20px] text-on-surface">Amruta Kulkarni</h3>
<span className="bg-surface-container-high text-on-surface px-2 py-1 rounded font-label-sm text-label-sm border border-outline-variant">EN: 21008821</span>
</div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Computer Technology</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Class of 2024</span>
</div>
</div>
<div className="flex items-center gap-6 mt-4">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Aggregate CGPA</p>
<p className="text-headline-md text-primary font-bold">8.85 <span className="text-label-sm font-normal text-outline">/ 10</span></p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Institute</p>
<p className="text-label-md text-on-surface font-semibold">V.P. Polytechnic (0024)</p>
</div>
</div>
</div>
</div>
<div className="mt-stack-md pt-stack-md border-t border-outline-variant flex gap-3">
<button className="flex-grow bg-secondary-container text-on-secondary-container py-2.5 rounded-lg font-label-md text-label-md hover:bg-secondary transition-colors font-bold">Verify Now</button>
<button className="px-6 py-2.5 bg-surface border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Details</button>
</div>
</div>
{/* Student Card 3 (Flagged) */}
<div className="technical-border bg-surface-container-lowest p-gutter group hover:shadow-md transition-shadow">
<div className="flex gap-gutter">
<div className="relative flex-shrink-0">
<div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden border border-outline-variant">
<img alt="Student" className="w-full h-full object-cover" data-alt="A clear, professional identification photo of a young man with a serious expression. He is wearing a dark polo shirt. The lighting is direct and even, highlighting facial features clearly for security and identity verification purposes. The background is a solid light blue wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWiEwYsARf1eWDvHWJ9l6C5X1pYYo6NfQWNJonXQO0tMQufvMnhRvmYQbGkauBAx0Ot7nfg8bX4D1AgdJwQpb687tI3j97Ww0zsEndKK8UgQ1krNz12wL7xkX0d_RXM9AXCS8kZPlRgbUh57HZoFvjmZUDeavTmgG1xnldwr2zRIDe2s7rSIUhMY0Dvn060p14m8hX3JcqiBswSrMawgqKKDR_OiwSpCOTScJoH9yoeVQZB1WyDZYFb_IVKHFeXNDf1Y5RX12Te0g" />
</div>
<div className="absolute -bottom-2 -right-2 bg-error-container text-on-error-container px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 border border-error">
<span className="material-symbols-outlined text-[12px]" data-icon="flag">flag</span>
                            FLAGGED
                        </div>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[20px] text-on-surface">Sameer Khan</h3>
<span className="bg-surface-container-high text-on-surface px-2 py-1 rounded font-label-sm text-label-sm border border-outline-variant">EN: 21001277</span>
</div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Electrical Engineering</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Class of 2022</span>
</div>
</div>
<div className="flex items-center gap-6 mt-4">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Aggregate CGPA</p>
<p className="text-headline-md text-error font-bold">7.20 <span className="text-label-sm font-normal text-outline">/ 10</span></p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Institute</p>
<p className="text-label-md text-on-surface font-semibold">B.V. Polytechnic (0015)</p>
</div>
</div>
</div>
</div>
<div className="mt-stack-md pt-stack-md border-t border-outline-variant flex gap-3">
<button className="flex-grow bg-error text-on-error py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Review Conflict</button>
<button className="px-6 py-2.5 bg-surface border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Details</button>
</div>
</div>
{/* Student Card 4 */}
<div className="technical-border bg-surface-container-lowest p-gutter group hover:shadow-md transition-shadow">
<div className="flex gap-gutter">
<div className="relative flex-shrink-0">
<div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden border border-outline-variant">
<img alt="Student" className="w-full h-full object-cover" data-alt="A portrait of a young female student smiling warmly, wearing a simple cotton kurta, representing a diverse student body. The background features the blurred architecture of a college campus with stone pillars and greenery under bright, natural daylight. The overall mood is optimistic and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsSoKhAh11y32-ES1tYsO_3IED4AiTX-4fpZuXVyjFBCVAhQY7SzEyYD-thoj3gIS7jwUCFk9ZTa3XMD1lBZ5nmYV-d78QzIw3s2ul8pCNkjSwpZOCWN0Ps7UdA-3lYxUUUmWgP_rgi9AAWvwYRuUsFfQeCLG1x2LCJhj6fURtXkCRblws5ebyMyeHsHSRYwjNpAqjycmzKmOHecwPP5qkOQY1gEp3e3t0MVM2Q-WWzHvBHfUm-bS6T3FoO95od3In2ROaXVqyi0g" />
</div>
<div className="absolute -bottom-2 -right-2 bg-on-tertiary-container text-tertiary-container px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 border border-on-tertiary-container">
<span className="material-symbols-outlined text-[12px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                            VERIFIED
                        </div>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-[20px] text-on-surface">Priya Sharma</h3>
<span className="bg-surface-container-high text-on-surface px-2 py-1 rounded font-label-sm text-label-sm border border-outline-variant">EN: 21005542</span>
</div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Civil Engineering</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[12px] font-semibold tracking-tight">Class of 2023</span>
</div>
</div>
<div className="flex items-center gap-6 mt-4">
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Aggregate CGPA</p>
<p className="text-headline-md text-primary font-bold">9.10 <span className="text-label-sm font-normal text-outline">/ 10</span></p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="text-[10px] text-outline uppercase font-bold tracking-widest">Institute</p>
<p className="text-label-md text-on-surface font-semibold">S.S.V.P.S. Dhule (0018)</p>
</div>
</div>
</div>
</div>
<div className="mt-stack-md pt-stack-md border-t border-outline-variant flex gap-3">
<button className="flex-grow bg-primary text-on-primary py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">View Full Profile</button>
<button className="px-4 py-2.5 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined align-middle" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
{/* Pagination */}
<div className="mt-stack-lg flex items-center justify-between">
<p className="font-label-sm text-label-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">1 - 20</span> of 14,208 candidates</p>
<div className="flex gap-1">
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-bold">2</button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-bold">3</button>
<span className="px-2 self-end pb-2">...</span>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-bold">711</button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</main>
{/* BottomNavBar (JSON Mapping - Mobile Only) */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-2 pt-2 md:hidden bg-surface border-t border-outline-variant shadow-lg rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="verified">verified</span>
<span className="font-label-sm text-label-sm">Verify</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="folder_shared" style={{ fontVariationSettings: '\'FILL\' 1' }}>folder_shared</span>
<span className="font-label-sm text-label-sm">Directory</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-all active:scale-95">
    <span className="material-symbols-outlined" data-icon="settings">settings</span>
    <span className="font-label-sm text-label-sm">Settings</span>
</div>
</nav>




    </div>
  );
}
