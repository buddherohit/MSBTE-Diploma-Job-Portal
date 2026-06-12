import React from 'react';

export default function AdminEmployerRegistry() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation Bar */}
<header className="bg-surface-container-highest dark:bg-surface-container-highest border-b border-outline-variant dark:border-outline docked full-width top-0 z-40">
<div className="flex justify-between items-center px-margin-mobile md:px-gutter w-full h-16">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Admin Verification</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6 mr-6">
<span className="text-primary font-bold font-label-md text-label-md">Verified Entities</span>
<span className="text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer px-2 py-1 rounded font-label-md text-label-md">Audit Logs</span>
</div>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
    <span className="material-symbols-outlined">settings</span>
</button><div className="w-10 h-10 rounded-full overflow-hidden bg-outline-variant">
<img alt="admin_profile_photo" className="w-full h-full object-cover" data-alt="Professional headshot of a corporate administrator in a modern office environment. The subject is wearing a crisp suit and smiling confidently. The lighting is bright and architectural, reflecting a professional high-key aesthetic with soft blue and white tones that match the industrial corporate brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_-l8-TeEXfFoY1AAH1pRM5LwCIH2DfUcF4HGxUKGLmCPd_3e2inDe_2d0HOPezU66HO3F1k-b55HRqOWCMF6LlRjPyJWrQQzJ7LxzYhHJ6bT3aa4nUvloBm7E8AKjOLF2MeqvIUeES-a49Nj0dPirzb5DowZtAhqa7EkiuMBJEDLvBtyn309nQHAkK6059rcE6Q-FUFW8CJI87DoTfA6eA7XRWYnx_zjWlfa55bWHsImlsCUqqHAJNo2U4OCZrlIACh2j8tStPYI" />
</div>
</div>
</div>
</header>
<div className="flex">
{/* Sidebar Navigation Drawer */}
<aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 bg-surface dark:bg-surface w-80 shadow-sm pt-20 border-r border-outline-variant z-30 overflow-y-auto">
<div className="px-6 py-4 flex flex-col items-start gap-1">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Moderator Panel</h2>
<p className="font-label-md text-label-md text-on-surface-variant">MSBTE Diploma Jobs</p>
<span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-bold mt-2">SUPER ADMIN</span>
</div>
<nav className="mt-6 flex flex-col gap-1">
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all" href="#">
<span className="material-symbols-outlined">pending_actions</span>
<span className="font-label-md text-label-md">Pending Requests</span>
</a>
<a className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified_user</span>
<span className="font-label-md text-label-md">Verified Entities</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all" href="#">
<span className="material-symbols-outlined">report_problem</span>
<span className="font-label-md text-label-md">Flagged Profiles</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span className="font-label-md text-label-md">Audit Logs</span>
</a>
<div className="h-px bg-outline-variant my-4 mx-6"></div>
<a className="text-on-surface-variant hover:bg-surface-container-highest rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">System Settings</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-80 pt-16 pb-24 md:pb-8 px-margin-mobile md:px-gutter transition-all duration-300">
{/* Summary Stat Bar */}
<section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg technical-border flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Total Partners</span>
<span className="text-display-lg font-display-lg text-primary">1,284</span>
<div className="w-full h-1 bg-surface-variant mt-2 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-primary"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg technical-border flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Pending Verification</span>
<span className="text-display-lg font-display-lg text-secondary">42</span>
<div className="flex items-center gap-2 mt-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span className="text-label-sm font-label-sm">+5 new today</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg technical-border flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Active Listings</span>
<span className="text-display-lg font-display-lg text-tertiary-container">3,902</span>
<div className="flex items-center gap-2 mt-2 text-tertiary-container">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="text-label-sm font-label-sm">High engagement</span>
</div>
</div>
</section>
{/* Search and Filter Section */}
<section className="mt-stack-lg bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex flex-col lg:flex-row gap-4 items-end">
{/* Search Bar */}
<div className="w-full lg:flex-1">
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Company Name or ID</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search industrial partners..." type="text" />
</div>
</div>
{/* Filters */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
<div className="flex-1 min-w-[140px]">
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Industry Sector</label>
<select className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-body-md appearance-none cursor-pointer">
<option>All Sectors</option>
<option>Manufacturing</option>
<option>Civil/Infra</option>
<option>IT/Tech</option>
</select>
</div>
<div className="flex-1 min-w-[140px]">
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Status</label>
<select className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-body-md appearance-none cursor-pointer">
<option>All Status</option>
<option>Pending</option>
<option>Verified</option>
<option>Flagged</option>
</select>
</div>
<div className="col-span-2 sm:col-span-1 min-w-[140px]">
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Size</label>
<select className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-body-md appearance-none cursor-pointer">
<option>Any Size</option>
<option>SME (1-50)</option>
<option>Large (50+)</option>
</select>
</div>
</div>
<button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md hover:opacity-90 transition-opacity whitespace-nowrap h-[50px]">
                        Apply Filters
                    </button>
</div>
</section>
{/* Directory List */}
<section className="mt-stack-lg flex flex-col gap-stack-md">
{/* Employer Card 1 */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6 group">
<div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 border border-outline-variant overflow-hidden shrink-0">
<img alt="company_logo" className="w-full h-full object-contain" data-alt="A clean, minimalist vector-style company logo for an engineering firm. The design features geometric shapes suggesting architectural blueprints or industrial cogwheels. The color palette is professional dark blue and slate gray on a white background, representing corporate stability and technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBhUNNo0Uq6cIeO-Zp_9_LVEX-HjRPxcHj4ciaJq4Z_v8WSYfy15mFA2-DV0NCB0o7YQUpHsbQk-eSN8ldcJzZm9-wR8P7PJ1biJ4Mz-abTk-HZLDmcmXomx8xagGo4SzfIQrBOKsKo1Lzo3hgQUQjj4Pzgc3TiEGJ8v7gE4YuMZT3yhF995oKynfGpfG6GcmOrhRlu1_ouI4-Kt9QJtLT7LNqKaw6Fm5CmoxwXpR_KvxBfOZriLxYF5g0xwLZtpeTi6FZKI4G74" />
</div>
<div className="flex-1 flex flex-col gap-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">TATA Motors Engineering</h3>
<span className="self-center md:self-auto bg-tertiary-fixed-dim text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Verified</span>
</div>
<p className="text-body-md text-on-surface-variant">Automotive Manufacturing • Pune, MH</p>
<div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">ID: MSBTE-5523</span>
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">24 Job Openings</span>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 text-primary border border-primary rounded-lg font-label-md hover:bg-primary-fixed transition-colors">View Profile</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Employer Card 2 - Pending */}
<div className="bg-white border-2 border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 border border-outline-variant overflow-hidden shrink-0">
<img alt="company_logo" className="w-full h-full object-contain" data-alt="A modern tech company logo with abstract interlocking shapes representing connectivity and innovation. The lighting in the logo design uses bright cyan and deep indigo, creating a high-contrast digital look. Professional and clean execution against a neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Lw2ZVQqB8XiX8nA67pabVLHvMBNkm41qkCPgGNoFxQeGc1MFqZtKDfjQd_cKkw7sxLfFkt8_KLFrBbogeoWPB2Aah545CKwfVMzeFSR-203mWJVKAiHooWgS72tGKzLI_ps1a6UPcd771EAy0GnzK7EYKSyuuYSDqq7lFc-nAcuiRGcBTyajaWzxle6m8yDEsNSZ0hXFo9sLtl9xnvyacuve02I0UXfhREADmfcSSJ27Uad40j9EIYonCCsiPinzXOCq95_Qj_M" />
</div>
<div className="flex-1 flex flex-col gap-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">L&T Construction Div.</h3>
<span className="self-center md:self-auto bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Pending Verification</span>
</div>
<p className="text-body-md text-on-surface-variant">Civil Infrastructure • Mumbai, MH</p>
<div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">ID: MSBTE-9011</span>
<span className="text-secondary font-bold text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 2h ago
                            </span>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2 bg-secondary text-on-secondary rounded-lg font-label-md hover:opacity-90 transition-opacity">Verify Now</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Employer Card 3 */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6 group">
<div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 border border-outline-variant overflow-hidden shrink-0">
<img alt="company_logo" className="w-full h-full object-contain" data-alt="An industrial corporate logo for a heavy machinery company. The design is bold and robust, using thick black lines and a bright yellow accent. It conveys reliability and industrial power. Simple emblem style optimized for recognition at a distance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyGMiC8X2TJmS5LjURXRfuS-Qgj4_NIuPCGKjAXE_hyeu5U5DGhJrhA3zkGbjoKLqbrtd8uVpUiOf96GvDEjNsstzTC3-pQ44G2oCp6ctK8O-J0UHFm2KixdKjQHP_srhPBHPsQWZDxR5n_hpLutYE5rprBHdXsu14-FrIMvSwGcDGagkY0KIFAskcM_PcSohhVqFx7sYmBUPyrADzf15eDuZdrPs9PAr0rxGiy8NfKd29N3rjOcPBRxkRwqB2iV4OKc15WkYBLQQ" />
</div>
<div className="flex-1 flex flex-col gap-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Bharat Electronics</h3>
<span className="self-center md:self-auto bg-tertiary-fixed-dim text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Verified</span>
</div>
<p className="text-body-md text-on-surface-variant">Electronics & Telecomm • Bengaluru/Remote</p>
<div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">ID: MSBTE-2287</span>
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">8 active posts</span>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 text-primary border border-primary rounded-lg font-label-md hover:bg-primary-fixed transition-colors">View Profile</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Employer Card 4 - Flagged */}
<div className="bg-error-container/10 border border-error/30 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6 group">
<div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 border border-outline-variant overflow-hidden shrink-0 grayscale opacity-50">
<img alt="company_logo" className="w-full h-full object-contain" data-alt="A stylized logo for a recruitment agency, currently depicted with a low-opacity gray filter to indicate an inactive or flagged status. The logo uses thin professional lines and a serif font, appearing sophisticated but muted by the error state styling of the container." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2XooeSQ0qU7fav0sofejSmksh-PjnP5iNEgw9rI0X-MVSNxCNYeU0xc3vFAWLLQRV4-QtNI0kXquHlihuL70EJnwyuQaVrGNuVDqKIsW7zvmng7uzyrE_4chZ7AgIGNP01HVPp8b6P8epd7yTAVepbRNQAPXkdmHwHeW6dLAwUqiDVyJCkJWFgvC_Kd41eyXVlTBp8e7SUEiKz7Hg7f3jLQgRDEWEBSQFNMoi-cR1-VHpwmjKfI-ObpUzH57UjdH32a1Fu2cYhAg" />
</div>
<div className="flex-1 flex flex-col gap-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Precision Placements Ltd</h3>
<span className="self-center md:self-auto bg-error text-on-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Flagged</span>
</div>
<p className="text-body-md text-error">Compliance Issue: Missing GST Certificate</p>
<div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
<span className="px-2 py-0.5 bg-surface-container rounded text-label-sm font-label-sm text-outline">ID: MSBTE-1102</span>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 text-on-surface-variant border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-high transition-colors">Review Logs</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</section>
</main>
</div>
{/* Bottom Navigation Bar (Mobile only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface px-2 border-t border-outline-variant shadow-lg">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span className="material-symbols-outlined">hourglass_empty</span>
<span className="font-label-sm text-label-sm">Pending</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
<span className="font-label-sm text-label-sm">Verified</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span className="material-symbols-outlined">flag</span>
<span className="font-label-sm text-label-sm">Flagged</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
    <span className="material-symbols-outlined">settings</span>
    <span className="font-label-sm text-label-sm">Settings</span>
</a></nav>




    </div>
  );
}
