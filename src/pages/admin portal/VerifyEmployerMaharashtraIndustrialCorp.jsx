import React from 'react';

export default function VerifyEmployerMaharashtraIndustrialCorp() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation Bar */}
<header className="w-full top-0 sticky bg-surface z-50 border-b border-outline-variant flex justify-between items-center px-gutter h-16">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-headline-md" data-icon="admin_panel_settings">admin_panel_settings</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MSBTE Admin Panel</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img alt="Official Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a government official in a sharp navy blue suit, set against a neutral gray background. The lighting is soft and corporate, conveying trust and authority. The image has a clean, high-contrast aesthetic consistent with a modern institutional dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI3ctWk4rz450pvbQaHWTELy5KVf-4jUZNR4cg7WonlwS126LhPfBLw_Dm0mGcD8tYXGYxeK3bFhzKMjJ3c5Ble6ivfv-j5XLlWTvwKXup5qT3C0GKSaqmb4NwFlh-AH97464pnKKWiMX83R-KN_1A2l48R-71ZuWm6T7142c7VkUOacmSTA5BdbabxWUHvpZ9VeGDFkrpAiRrniflUgt1bJSGfmszyh6Rry-CYT54UdSGAEkGnSMU_dLIYXtlw3nXGZPTqR_8CpA"/>
</div>
</div>
</header>
<div className="flex min-h-screen">
{/* Desktop Side Navigation */}
<aside className="hidden md:flex flex-col h-screen w-80 sticky top-16 bg-surface-container-low border-r border-outline-variant py-6 gap-2">
<div className="px-6 mb-6">
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="shield_person" style={{ fontVariationSettings: '\'FILL\' 1' }}>shield_person</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">MSBTE Moderator</p>
<p className="text-xs text-on-surface-variant">Official ID: 88231</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="text-on-surface-variant mx-2 px-4 py-3 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="domain_verification" style={{ fontVariationSettings: '\'FILL\' 1' }}>domain_verification</span>
<span className="font-label-md text-label-md">Employer Flags</span>
</a>
<a className="text-on-surface-variant mx-2 px-4 py-3 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-label-md text-label-md">Student Flags</span>
</a>
<a className="text-on-surface-variant mx-2 px-4 py-3 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="font-label-md text-label-md">Evidence Logs</span>
</a>
<a className="text-on-surface-variant mx-2 px-4 py-3 flex items-center gap-4 hover:bg-surface-container-high rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">System Settings</span>
</a>
</nav>
</aside>
{/* Main Content Area */}
<main className="flex-1 blueprint-bg p-4 md:p-8 pb-32">
{/* Breadcrumbs */}
<div className="flex items-center gap-2 mb-6 text-on-surface-variant text-label-sm font-label-sm">
<span>Dashboard</span>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<span>Verification Queue</span>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<span className="text-primary font-bold">Maharashtra Industrial Corp</span>
</div>
{/* Company Header Card */}
<section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-6">
<div className="w-20 h-20 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center p-2">
<img alt="Maharashtra Industrial Corp Logo" className="w-full h-full object-contain mix-blend-multiply" data-alt="A professional corporate logo featuring industrial gears and stylized Indian architecture, using a palette of navy blue and metallic silver. The logo is centered on a clean white background with sharp, modern vector lines. It represents a heavy industrial conglomerate with institutional heritage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0R8S7LDNUwWDn0jYR9XwAuce72TXB5KYZarFQmX8-4QuTGt_IQWw1up3HcZhNOrslRPdZpgimAfsis4vKvmVt-9uENAiUHu0tZbkhZaiy-QHMSalsk1_WG9-Q-yed4nuhrIRHv8nEgaDJ3DLeTXhbRihXYNlSkFNQRufudrrJq2YUP0imWzB9x1NPW58EGbQfgz-GYhBeAoTt2_KANQ_506mcxcjjofgfyqLeoNnXcJyoP2oCTR-uWdwKoDO_Uq9beaqiPde1Pk8"/>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-1">Maharashtra Industrial Corp</h2>
<div className="flex items-center gap-3">
<span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="priority_high">priority_high</span>
                                URGENT REVIEW
                            </span>
<span className="text-on-surface-variant text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                                Mumbai, Maharashtra
                            </span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Submission Date</p>
<p className="font-headline-md text-headline-md text-on-surface">Oct 24, 2023</p>
</div>
</section>
{/* Verification Progress Stepper */}
<section className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm mb-8">
<h3 className="font-label-md text-label-md text-on-surface-variant mb-8 uppercase tracking-widest">Verification Progress</h3>
<div className="relative flex justify-between">
{/* Progress Line */}
<div className="absolute top-5 left-0 w-full h-1 bg-surface-container-high -z-0"></div>
<div className="absolute top-5 left-0 w-2/3 h-1 bg-primary -z-0"></div>
{/* Step 1 */}
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="check">check</span>
</div>
<span className="font-label-md text-label-md text-primary">Documents Uploaded</span>
</div>
{/* Step 2 */}
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<span className="font-label-md text-label-md text-primary">Identity Checked</span>
</div>
{/* Step 3 */}
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-white">
<span className="material-symbols-outlined" data-icon="pending">pending</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Final Approval</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Legal Credentials Section */}
<div className="lg:col-span-2 flex flex-col gap-8">
<section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="gavel">gavel</span>
                                Legal Credentials
                            </h3>
<button className="text-primary hover:bg-primary-fixed px-4 py-2 rounded-lg font-label-md text-label-md transition-colors">Refresh API Sync</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="text-label-sm text-on-surface-variant mb-1 uppercase">CIN / Registration Number</p>
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-on-surface">U74999MH2012PLC234567</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                                        OFFICIAL CHECK
                                    </span>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="text-label-sm text-on-surface-variant mb-1 uppercase">GST Number</p>
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-on-surface">27AAACH1234F1Z5</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" data-icon="verified" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                                        VALIDATED
                                    </span>
</div>
</div>
</div>
</section>
{/* Business Documents Grid */}
<section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="folder_shared">folder_shared</span>
                            Business Documents
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
{/* Document Card 1 */}
<div className="group relative bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-md">
<div className="h-32 bg-surface-dim overflow-hidden">
<img alt="PAN Card Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" data-alt="A blurred, professional digital scan of an official Indian PAN card document. The image shows watermark patterns and security features under studio lighting, emphasizing the authenticity and verification nature of the record. The composition is clean and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRY1NLuKlFF68H0Maan1IJOWB7ud4ZFK_iFu9gbuTmCbw4oHi1t32FiFohQbZ6tSFqwrKTOuoOPrfd3JqReOogp_kn-A3P0BbC2LoUgBPMnWXdipN9CJeVAmyugo8fJQkB5xgQYXtQMadehvTbrdBox8NEE-ENMGo7X0L4cRGKPtR6soUOMC4gUNC-bdKK4s93ds96BM4gxBG4Jgwtj7tpnqZ811hIlF2jAiDhYiafAlyoMYC-cdXKj4PFyyP7a8cJNCf9JYinS1c"/>
</div>
<div className="p-3">
<p className="font-label-md text-label-md text-on-surface mb-2">PAN Card</p>
<button className="w-full bg-primary text-white py-2 rounded font-label-sm text-label-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
                                        View
                                    </button>
</div>
</div>
{/* Document Card 2 */}
<div className="group relative bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-md">
<div className="h-32 bg-surface-dim overflow-hidden">
<img alt="Incorporation Certificate Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" data-alt="A detailed digital scan of a formal certificate of incorporation, featuring official government seals and signatures. The paper has a slight texture, and the lighting is even, reflecting a high-quality archival document. It sits within a professional administrative context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH9w55fDWf14Ejnl-EmNSOwP58ksvUYRyRfS588AyAsPWnRZTzoE6gfV0xnSHYGUkTKIPoijVbjs84_fGlLJaM16rKdCP55rYJQwTCeCq8YL4uW-7QCwLcsXi7wrZII2dfcuQYP8mY9H9eI_fpgSIwAhASzBO77JKqxSaunWVYPDIzUTUaw84rrFEjxG9pGvD2FwwtA7qpZZh5-Eyx6wRmcUzKUnT6D8PlfaWWONDnIkTV0QHzvnxIGBx9OzSogKy8fCdQuouq6YY"/>
</div>
<div className="p-3">
<p className="font-label-md text-label-md text-on-surface mb-2">Incorporation Cert.</p>
<button className="w-full bg-primary text-white py-2 rounded font-label-sm text-label-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
                                        View
                                    </button>
</div>
</div>
{/* Document Card 3 */}
<div className="group relative bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-md">
<div className="h-32 bg-surface-dim overflow-hidden">
<img alt="Address Proof Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" data-alt="A professional close-up of a utility bill or bank statement used as address proof, showing clear typography and official headers. The background is a clean, neutral desk surface, highlighting the document as a key piece of verification evidence in a modern digital workflow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg2WOnmJmGoKE9QB4gJrNzS0MczCtfHuUrSrt2iBNTMsAcMizofoi2-FiwMe5AgF_ELpUNzqRMrW6s4KARjPQ58OoITJ_MCdHkdmP_rnIinTeKZj7fTHhrDHiVeMypWeEfOy8sHCA-01o4Y5qTO2r0zCca7vfaCwntXz29gFJyzOCBIwSiDJTX9RvTahL_Sf4RKo1HuVciGVK8fwam4fmstVdJnMZMOYDYk7EG1fhso80YYSRf1UJTJkZ42UqdFNqtKpdwTwrP2uo"/>
</div>
<div className="p-3">
<p className="font-label-md text-label-md text-on-surface mb-2">Address Proof</p>
<button className="w-full bg-primary text-white py-2 rounded font-label-sm text-label-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
                                        View
                                    </button>
</div>
</div>
</div>
</section>
</div>
{/* Recruiter Profile Summary */}
<aside className="flex flex-col gap-6">
<section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="account_circle">account_circle</span>
                            Recruiter Profile
                        </h3>
<div className="flex flex-col items-center mb-6">
<div className="w-24 h-24 rounded-full border-4 border-surface-container-high mb-4 overflow-hidden">
<img alt="Main Admin Profile" className="w-full h-full object-cover" data-alt="A studio portrait of a confident Indian professional man in business casual attire, with a warm and approachable smile. The lighting is bright and modern, set against a blurred office background. The image represents the face of the company's administrative contact on the portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLY1UmtpUXWBX4gizcuQkCO_5xZZ85mTQi5sGqChxGzpL0lWEsUzth6TLpL_g_lV-jHw24c4JnRLeALzOkvLSkqHg40OY6tMPxwdiK88ZM9AzE_ql8ZwvZNCkfITfEEdO3EcV_dgsNG1hUGASeCbKW3FX_WmQno_iP37J78syog9SIj1pJa3uY_8ziK-etbmAok537WcbE7ppRHD7PlQLEWl7CuumJ_bENe33nHxSKdDIqYvilfqy7zEIqb0MIRDTRbLgtHTz1rPo"/>
</div>
<p className="font-headline-md text-headline-md text-on-surface">Rajesh K. Deshmukh</p>
<p className="text-on-surface-variant font-label-md text-label-md">Chief Talent Acquisition Officer</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-primary-container" data-icon="mail">mail</span>
<div className="overflow-hidden">
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Official Email</p>
<p className="text-sm text-on-surface truncate">r.deshmukh@mahaindustrial.co.in</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-primary-container" data-icon="call">call</span>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Contact Number</p>
<p className="text-sm text-on-surface">+91 22 4567 8900</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-primary-container" data-icon="badge">badge</span>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold">Portal User ID</p>
<p className="text-sm text-on-surface">EMP-8821-MOD</p>
</div>
</div>
</div>
</section>
<section className="bg-primary-container text-on-primary-container p-6 rounded-xl border border-primary shadow-lg">
<h4 className="font-label-md text-label-md uppercase tracking-widest mb-4">Admin Notes</h4>
<p className="text-sm opacity-90 italic leading-relaxed">"Company has high student placement record in Nashik and Pune regions. Prioritize for upcoming Career Fair accreditation."</p>
</section>
</aside>
</div>
</main>
</div>
{/* Sticky Bottom Action Bar */}
<footer className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant px-gutter py-4 z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-secondary" data-icon="info">info</span>
<p className="text-label-sm font-label-sm">Reviewing as <strong>Moderator-88231</strong></p>
</div>
<div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-error text-error hover:bg-error-container hover:text-on-error-container px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="flag">flag</span>
                    Flag for Review
                </button>
<button className="flex-1 md:flex-none border border-primary text-primary hover:bg-primary-fixed px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
                    Request More Info
                </button>
<button className="flex-[2] md:flex-none bg-primary text-white hover:bg-primary-container px-10 py-2.5 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
<span className="material-symbols-outlined" data-icon="verified_user" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified_user</span>
                    Approve Accreditation
                </button>
</div>
</div>
</footer>
{/* Mobile Bottom Navigation (Hidden on desktop) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around py-2 bg-surface border-t border-outline-variant shadow-md z-[110]">
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">Students</span>
</div>
<div className="flex flex-col items-center justify-center text-secondary font-bold active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="business_center" style={{ fontVariationSettings: '\'FILL\' 1' }}>business_center</span>
<span className="font-label-sm text-label-sm">Employers</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="assignment">assignment</span>
<span className="font-label-sm text-label-sm">Logs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span className="font-label-sm text-label-sm">Actions</span>
</div>
</nav>


    </div>
  );
}
