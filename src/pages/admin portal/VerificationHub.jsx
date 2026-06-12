import React from 'react';

export default function VerificationHub() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar Component */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer active:opacity-80" data-icon="grid_view">grid_view</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MSBTE Admin Hub</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-6 items-center">
<span className="font-label-md text-label-md text-primary font-bold cursor-pointer transition-colors hover:bg-surface-container-high px-3 py-1 rounded">Verification</span>
<span className="font-label-md text-label-md text-on-surface-variant cursor-pointer transition-colors hover:bg-surface-container-high px-3 py-1 rounded">Moderation</span>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden cursor-pointer active:opacity-80">
<img alt="Admin" className="w-full h-full object-cover" data-alt="A professional headshot of a mature male system administrator in a high-tech corporate office environment. He is wearing a crisp blue dress shirt and has a focused, authoritative expression. The background features blurred glass partitions and soft, high-key office lighting consistent with a modern Industrial Administration aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj_dJ24BFeWJjPuAnL1MAa7rnoXRWGl1ZQjI_dQpDPQp59CZfky2UnCqd6EgfwvVRBdjOtqbMVxJQBM29v9sLQ0imz3QnzW5xqgtqSyX69yTFB1WGDU15Jy5wyuXD8obg3ixCoPoAWkep8eQABhIHY0cXHg9QLH1_Zoz763XxE2Q_qy262aRou9frP1ptuQ71vBvhBt5CoGx89YvrSpWFEIjsu2KU8rzNFTahxBldtj_gWq3M92AdtEFTdTSGTqGgPivmT1Lk7hto"/>
</div>
</div>
</header>
{/* NavigationDrawer Component */}
<aside className="h-screen w-72 fixed left-0 top-0 z-40 bg-surface-container-low shadow-sm hidden md:flex flex-col gap-stack-sm pt-20 pb-4">
<div className="px-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<div>
<h2 className="font-label-md text-label-md text-on-surface font-bold">System Admin</h2>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider">Superuser</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Overview</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span className="font-label-md text-label-md">Moderation</span>
</a>
<a className="bg-primary-container text-on-primary-container font-bold rounded-lg mx-2 px-4 py-3 flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="verified_user" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified_user</span>
<span className="font-label-md text-label-md">Verification</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<span className="font-label-md text-label-md">Partners</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings_heart">settings_heart</span>
<span className="font-label-md text-label-md">System Health</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="ml-0 md:ml-72 pt-20 px-gutter pb-stack-lg flex-grow">
{/* Header & Path Switcher */}
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Verification Hub</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Reviewing industrial credentials and student diplomas.</p>
</div>
{/* Segmented Control / Path Switcher */}
<div className="flex bg-surface-container-high p-1 rounded-xl w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2 rounded-lg font-label-md text-label-md transition-all bg-white shadow-sm text-primary" id="tab-partners" onclick="switchTab('partners')">Pending Partners</button>
<button className="flex-1 md:flex-none px-6 py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:bg-white/50" id="tab-students" onclick="switchTab('students')">Pending Students</button>
<button className="flex-1 md:flex-none px-6 py-2 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:bg-white/50" id="tab-docs" onclick="switchTab('docs')">Document Review</button>
</div>
</div>
{/* Content Grid: Pending Partners */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md" id="section-partners">
{/* Partner Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Company Logo" className="w-full h-full object-cover" data-alt="A minimalist logo for a heavy engineering firm displayed on a brushed metal background. The logo is clean and professional, featuring geometric industrial shapes. The image is brightly lit with a corporate blue color grade, reflecting a modern industrial aesthetic in a high-key setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpXCmogvF4OS0thd6jx5OO52fU10cXr2T5IzBEu76sWbplmCg8j_t13NmuGC9gI895YNqeXdYf3_aBwmPfvqX0ct1A0Yxk6btDBnDA4KY7ma0w-4OcAmiXFAbvy2tFMndMSqLqfWbUU6afyEbH2pFcKzVXdUqKpujHYvGwNCFts2SLGsZVnh-1A20uzrEk7C4ne_SgJRxf3gP7h-mNtqgcpr7ZqYAQhzRdki0eAnTmglH3vhD3Pu_kmHpeYUpp3l1t2WqVZnFrDE"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-md text-[20px] text-on-surface">Tata Advanced Systems</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Reg No: MH-IND-2024-8842</p>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-widest">Urgent</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
<span className="font-body-md text-body-md">Pune, MH</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="business_center">business_center</span>
<span className="font-body-md text-body-md">Aerospace & Defense</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-white py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">Approve Accreditation</button>
<button className="px-4 border border-error text-error py-3 rounded-lg font-label-md text-label-md hover:bg-error-container transition-colors">Flag</button>
</div>
</div>
</div>
{/* Partner Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Company Logo" data-alt="A modern corporate building facade reflected in high-contrast blue tones. The focus is on the structural integrity and professionalism of an industrial headquarters. The lighting is crisp morning sunlight, creating sharp shadows and highlights that emphasize the corporate stable aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBujPF3dLx90Y2jrJ7puRo6Ls0gbKqz1cSRM87POIDEcCQWQGNRaCIU0kQmUJM8kX_jMTmFpEHnWZ0j44Up6SKBsu8gOn9nRN90AOdflU79SwIqroZ48zJEyfe0oLPhMKcC6fXhPS_E7EqdSwU4jSabCWyrJlFfPPMLbk6UU54JtNZ7QanRKVilkMIDmiWTbNMxHJzHm_tw8T7iYibtVy15wm7z5E-kVnjMZLDiSnNd3QVFLWhtcDjkWVRkqGEpH86V-mYikjSjJIQ"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-md text-[20px] text-on-surface">L&T Infrastructure</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Reg No: MH-IND-2024-1109</p>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-widest">Standard</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
<span className="font-body-md text-body-md">Mumbai, MH</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="business_center">business_center</span>
<span className="font-body-md text-body-md">Civil Construction</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-white py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">Approve Accreditation</button>
<button className="px-4 border border-error text-error py-3 rounded-lg font-label-md text-label-md hover:bg-error-container transition-colors">Flag</button>
</div>
</div>
</div>
</section>
{/* Content Grid: Pending Students (Hidden by Default) */}
<section className="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md" id="section-students">
{/* Student Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Rahul Deshmukh</h4>
<p className="text-xs text-on-surface-variant">ID: STU-2023-4412</p>
</div>
</div>
<div className="bg-surface-container-low p-3 rounded-lg mb-4">
<div className="flex justify-between items-center mb-1">
<span className="text-[11px] uppercase text-on-surface-variant font-bold">Branch</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-bold">Mechanical</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[11px] uppercase text-on-surface-variant font-bold">Institution</span>
<span className="text-xs text-on-surface">G.P. Nagpur</span>
</div>
</div>
<div className="mb-6">
<p className="text-[11px] uppercase text-on-surface-variant font-bold mb-2">Pending Document</p>
<div className="flex items-center gap-2 border border-dashed border-outline-variant p-2 rounded cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
<span className="text-xs font-medium">Final_Diploma_Cert.pdf</span>
</div>
</div>
<div className="flex gap-2 mt-auto">
<button className="flex-1 bg-secondary text-white py-2 rounded font-label-sm text-label-sm hover:bg-secondary-container transition-colors">Verify</button>
<button className="px-3 border border-error text-error py-2 rounded font-label-sm text-label-sm hover:bg-error-container transition-colors">Reject</button>
</div>
</div>
{/* Student Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Anjali Patil</h4>
<p className="text-xs text-on-surface-variant">ID: STU-2023-5590</p>
</div>
</div>
<div className="bg-surface-container-low p-3 rounded-lg mb-4">
<div className="flex justify-between items-center mb-1">
<span className="text-[11px] uppercase text-on-surface-variant font-bold">Branch</span>
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold">Computer Tech</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[11px] uppercase text-on-surface-variant font-bold">Institution</span>
<span className="text-xs text-on-surface">V.J.T.I. Mumbai</span>
</div>
</div>
<div className="mb-6">
<p className="text-[11px] uppercase text-on-surface-variant font-bold mb-2">Pending Document</p>
<div className="flex items-center gap-2 border border-dashed border-outline-variant p-2 rounded cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
<span className="text-xs font-medium">Semester_6_Marksheet.pdf</span>
</div>
</div>
<div className="flex gap-2 mt-auto">
<button className="flex-1 bg-secondary text-white py-2 rounded font-label-sm text-label-sm hover:bg-secondary-container transition-colors">Verify</button>
<button className="px-3 border border-error text-error py-2 rounded font-label-sm text-label-sm hover:bg-error-container transition-colors">Reject</button>
</div>
</div>
</section>
{/* Content Section: Document Review (Bento Grid Style) */}
<section className="hidden space-y-stack-md" id="section-docs">
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
{/* Statistics Card */}
<div className="md:col-span-1 bg-primary text-white p-stack-md rounded-xl shadow-lg flex flex-col justify-between">
<div>
<h4 className="font-label-md text-label-md opacity-80 mb-2">Total Queue</h4>
<p className="text-[40px] font-bold">124</p>
<p className="text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">Avg Review: 4.2m</p>
</div>
<div className="mt-8 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="speed">speed</span>
<span className="text-sm font-semibold">Priority Protocol Active</span>
</div>
</div>
{/* Main Review Panel */}
<div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="bg-surface-container px-6 py-4 flex justify-between items-center">
<h4 className="font-label-md text-label-md text-on-surface">Queue Spotlight: Accreditation ID-998</h4>
<div className="flex gap-2">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="zoom_in">zoom_in</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="print">print</span>
</div>
</div>
<div className="aspect-video bg-inverse-surface flex items-center justify-center p-8 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-xs">Viewing: Industrial_Safety_Certification_2024.jpg</p>
</div>
<img alt="Document Preview" className="max-h-full rounded shadow-2xl transform transition-transform group-hover:scale-105" data-alt="A high-quality scan of an official industrial accreditation certificate with ornate borders and a metallic seal. The document is laid flat on a clean architectural blueprint, conveying a sense of engineering precision and official government verification. The lighting is bright and uniform, typical of a high-end corporate archive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6XOmOcIxc812HFcc0gRgVCsNH8jw69nw0cFTPIdmMWJ3-p3Ql_9F4eClfKXvywtKzoGKGWUxQE_OnsazqpI5gcr2B7VK7ca6Y1pH8bm5NrBUeFTvLC3I9SNBPOGkFbiNs8ZWle5O2MGxNdX9PC27wr2C_xkv0mZaTlgovBDouFJgAqYRiiI2y1z4mvxedFQZm6AQw2mdTJLPd6myxoIXpaNRt3a3Bt-lv10kN6j2HdNlvxbZcorauj7vBd9DN_HjXLmfJxBeHdTU"/>
</div>
<div className="p-6 flex justify-end gap-3 bg-surface-container-low">
<button className="px-6 py-2 border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-all">Defer Review</button>
<button className="px-6 py-2 bg-secondary text-white font-label-md text-label-md rounded-lg hover:bg-secondary-container transition-all">Approve Document</button>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Footer Component */}
<footer className="w-full py-4 mt-auto bg-surface-container border-t border-outline-variant flex justify-between items-center px-gutter w-full ml-0 md:ml-72 md:max-w-[calc(100%-18rem)]">
<div className="flex flex-col md:flex-row gap-4 items-center w-full justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">© 2024 MSBTE Diploma Jobs - Industrial Administration Suite</span>
<div className="flex gap-6">
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">System Status</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Admin Support</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Docs</a>
</div>
</div>
</footer>


    </div>
  );
}
