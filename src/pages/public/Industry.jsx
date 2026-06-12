import React from 'react';

export default function Industry() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface-container-lowest dark:bg-surface-container-highest w-full top-0 sticky z-40 border-b border-outline-variant dark:border-outline shadow-sm h-16">
<div className="flex justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
<div className="flex items-center gap-2 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{ fontVariationSettings: '\'FILL\' 1' }}>architecture</span>
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MahaDiploma Jobs</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-on-surface-variant dark:text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Jobs</a>
<a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary font-label-md text-label-md" href="#">Talent</a>
<a className="text-on-surface-variant dark:text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Pricing</a>
<a className="text-on-surface-variant dark:text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Account</a>
</nav>
<button className="bg-primary-container text-on-primary text-label-md font-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm">
                Post Job
            </button>
</div>
</header>
<div className="flex flex-1 max-w-container-max mx-auto w-full relative">
{/* NavigationDrawer (Sidebar) */}
<aside className="h-full w-64 hidden md:flex flex-col border-r border-outline-variant bg-surface-container dark:bg-surface-dim fixed left-0 top-16 py-stack-lg">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">IP</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Industrial Partner</p>
<p className="text-xs text-on-surface-variant opacity-70">Enterprise Plan</p>
</div>
</div>
<nav className="flex flex-col gap-1 pr-4">
<div className="flex items-center gap-3 py-3 px-6 text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer duration-200">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</div>
<div className="flex items-center gap-3 py-3 px-6 bg-secondary-container text-on-secondary-container font-semibold rounded-r-full cursor-pointer">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>engineering</span>
<span className="font-body-md text-body-md">Talent Pool</span>
</div>
<div className="flex items-center gap-3 py-3 px-6 text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer duration-200">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-body-md text-body-md">Subscription</span>
</div>
<div className="flex items-center gap-3 py-3 px-6 text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer duration-200">
<span className="material-symbols-outlined">analytics</span>
<span className="font-body-md text-body-md">Analytics</span>
</div>
<div className="flex items-center gap-3 py-3 px-6 text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer duration-200">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</div>
</nav>
<div className="mt-auto px-6 py-4">
<div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant">
<p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">MSBTE Accredited</p>
<p className="text-[10px] text-on-surface-variant">Verified Industrial Recruitment Partner status active.</p>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-64 p-margin-mobile md:p-gutter pb-24 md:pb-gutter">
{/* Header Section */}
<section className="mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Industrial Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Connect with Maharashtra's leading engineering firms, manufacturing hubs, and tech innovators providing specialized roles for diploma graduates.</p>
</section>
{/* Search and Filter Bar */}
<section className="mb-stack-lg">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex flex-col lg:flex-row gap-4">
<div className="flex-1 relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-primary border transition-all text-body-md" placeholder="Search by company name or industry..." type="text"/>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
<button className="flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-lg font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                            Filters
                        </button>
<select className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant min-w-[140px]">
<option>All Districts</option>
<option>Mumbai</option>
<option>Pune</option>
<option>Nagpur</option>
<option>Nashik</option>
</select>
<select className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant min-w-[140px]">
<option>Industry Type</option>
<option>Mechanical</option>
<option>Electrical</option>
<option>IT/CS</option>
<option>Civil</option>
</select>
</div>
</div>
</section>
{/* Featured Categories (Bento-style chips) */}
<section className="mb-stack-lg overflow-hidden">
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4">Top Specializations</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="bg-tertiary-fixed text-on-tertiary-fixed p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">precision_manufacturing</span>
<span className="font-label-md text-label-md">Manufacturing</span>
</div>
<div className="bg-primary-fixed text-on-primary-fixed p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">bolt</span>
<span className="font-label-md text-label-md">Electrical</span>
</div>
<div className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">terminal</span>
<span className="font-label-md text-label-md">Software</span>
</div>
<div className="bg-surface-container-highest text-on-surface p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">foundation</span>
<span className="font-label-md text-label-md">Construction</span>
</div>
<div className="bg-primary-fixed-dim text-on-primary-fixed-variant p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">settings_input_component</span>
<span className="font-label-md text-label-md">Electronics</span>
</div>
<div className="bg-tertiary-fixed-dim text-on-tertiary-fixed-variant p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
<span className="material-symbols-outlined mb-2 text-3xl">directions_car</span>
<span className="font-label-md text-label-md">Automotive</span>
</div>
</div>
</section>
{/* Company Directory Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
{/* Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all group relative overflow-hidden">
<div className="absolute top-4 right-4 bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                        Verified Partner
                    </div>
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional corporate logo for a heavy machinery engineering firm, featuring a stylized gear and minimalist industrial blue lines on a clean white background. The aesthetic is high-contrast, modern, and conveys institutional stability and precision engineering expertise within the Maharashtra industrial sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUVIs-inLUeqwTJfp7ALa-6T_sR0GKAnYeYP0CbJZ5BxlHSbD6cdBHGOm6WBohKO_ryq6NXSOMcBouUQB74QPIF6VT6NHpTe-ONxSEBXbVdJ_b9gDnDXXJsrKNQFkWZhorvFzHbA2z88TYZJC38GYcDxc9ytifUa8f83Z1TooztMTJDGuyzku9WwVnPPo7S8MtbpDsQc1PLtuF1JcqMsFJpNonePuLSgUx7J-7vI_JVOkC1UFFrj3h_uYS9bXlcvW5X0A7Nem7bzk"/>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors">Tata Motors Engineering</h3>
<p className="text-secondary font-label-md text-label-md mb-3">Automotive & Manufacturing</p>
<div className="flex flex-wrap gap-4 mb-4">
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                Pune, Maharashtra
                            </div>
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">group</span>
                                10,000+ Employees
                            </div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">View Jobs</button>
<button className="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all">Company Profile</button>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all group relative overflow-hidden">
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist logo for a renewable energy and electrical systems company, featuring abstract energy bolts and a sun motif. The color palette uses deep navy blue and vibrant orange to suggest professional authority and high-energy innovation, set against a modern white gallery-style background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb6Rt3VTn2-Ay8btgNnQl1j6Ekh4L95D_HdjHyjXFieGe2DqV-Y5oIC9PJ9YBb0-w0J30oy05ltMX2Yx6-LpJPB0tVKO_vAhdz86Y559nL7tcja5qPV86Cx-bu61UJB0Gj0-Z4x0k-Camm6lJtib4OE57TElgSuczSVIcqPiocrR-SX0MPhmn3CnPNzWpUOKWE_cvLaA1ROSsk-QFCVeLhqR3l_OR9ZbMJ4VJUqnS1W9OC712Gq-QUHAvdWtLd3Z9uo0qf4DD0bAE"/>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors">Larsen & Toubro (L&T)</h3>
<p className="text-secondary font-label-md text-label-md mb-3">Construction & Heavy Engineering</p>
<div className="flex flex-wrap gap-4 mb-4">
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                Mumbai, Maharashtra
                            </div>
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">work</span>
                                42 Active Openings
                            </div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">View Jobs</button>
<button className="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all">Company Profile</button>
</div>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all group relative overflow-hidden">
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A sleek corporate logo for a software development firm focused on industrial automation, displaying binary patterns and a stylized circuit board design. High-contrast white and cobalt blue tones create a sophisticated, data-driven look that reflects institutional trust and technological excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKaIJCJg87DwJWuVTFDje03CvwvKf7bYhnAb1k10ft19ptI41Xcf778sw8pPsri86rWVM1v_QZ72V3sTpj9NOm39sBO6dljTTUf7sKL5siq_W4xY0Ggk3Scy-QJB6UIMunBUrmqhMQk1TQozZAtkT3f134BgorMfcouPtHhWOpCwXPi-0mQF0RF_E_O3cwQ0fHJgCIC1iD3OeJARcyUD8UT0P8snzsS8TIexK4bod6mPer9Vo3ldGGKLbxZIV-dhGga0GQc1i2SMU"/>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors">Persistent Systems</h3>
<p className="text-secondary font-label-md text-label-md mb-3">IT & Digital Engineering</p>
<div className="flex flex-wrap gap-4 mb-4">
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                Nagpur, Maharashtra
                            </div>
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">stars</span>
                                Top MSBTE Recruiter
                            </div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">View Jobs</button>
<button className="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all">Company Profile</button>
</div>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all group relative overflow-hidden">
<div className="absolute top-4 right-4 bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                        Verified Partner
                    </div>
<div className="w-20 h-20 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional logo for an electrical infrastructure giant, using bold geometric shapes and a lightning bolt icon integrated into a bridge shape. The color scheme is deep charcoal and industrial orange, symbolizing stable infrastructure and robust power distribution capabilities in an authoritative corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTA4O7Z4QEHjnjVPr8VFDI1ZbjvjPt_Ae_ktw8Fq5h7rkxkJ0c7OEZlnfoLEZTlB609PuvB2sCc3DUwWWilEWd7euTkVobCJRGulgHgL-l_6jsflu92kGR7bmCnlr14WG4f7d2rgwnqrDLAarCPuZWHkZn7fhLDSgpbM39vXRKsGzTTaVmz4HTwTO3D2-eCIGtSGpiz9OHRnexdA7kOoxQNtRDiiO8w8UooXqfesXvYhIvcrOWaEqFwKMS-WXJdvOu1puQ6tdInZ0"/>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors">Bajaj Electricals Ltd</h3>
<p className="text-secondary font-label-md text-label-md mb-3">Consumer Durables & EPC</p>
<div className="flex flex-wrap gap-4 mb-4">
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                Chakan, Pune
                            </div>
<div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
<span className="material-symbols-outlined text-[18px]">school</span>
                                120+ Diploma Trainees
                            </div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">View Jobs</button>
<button className="flex-1 border border-primary text-primary py-2 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all">Company Profile</button>
</div>
</div>
</div>
</div>
{/* Pagination */}
<div className="mt-stack-lg flex justify-center items-center gap-2">
<button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all text-on-surface-variant">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center shadow-md">1</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all">2</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all">3</button>
<span className="px-2">...</span>
<button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all">12</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all text-on-surface-variant">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</main>
</div>
{/* BottomNavBar (Mobile Only) */}
<nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant dark:border-outline shadow-lg flex justify-around items-center py-2 px-4">
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>group</span>
<span className="font-label-sm text-label-sm">Talent</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Pricing</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Account</span>
</div>
</nav>
{/* Footer */}
<footer className="w-full mt-auto border-t border-outline bg-inverse-surface dark:bg-surface-container-lowest">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md px-gutter py-stack-lg max-w-container-max mx-auto">
<div className="flex flex-col gap-4">
<span className="font-headline-md text-headline-md text-surface-container-lowest font-bold">MahaDiploma Jobs</span>
<p className="text-surface-variant opacity-80 font-label-md text-label-md">Connecting 300,000+ MSBTE diploma students with Maharashtra's industrial powerhouses.</p>
<p className="font-label-md text-label-md text-on-primary-fixed dark:text-on-primary-fixed-variant opacity-80">© 2024 MSBTE Diploma Recruitment Portal. Industrial Blueprint Edition.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<h4 className="text-on-primary-fixed font-bold mb-1">Company</h4>
<a className="text-surface-variant opacity-80 font-label-md text-label-md hover:opacity-100 underline transition-opacity" href="#">Privacy Policy</a>
<a className="text-surface-variant opacity-80 font-label-md text-label-md hover:opacity-100 underline transition-opacity" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-on-primary-fixed font-bold mb-1">Support</h4>
<a className="text-surface-variant opacity-80 font-label-md text-label-md hover:opacity-100 underline transition-opacity" href="#">Employer FAQ</a>
<a className="text-surface-variant opacity-80 font-label-md text-label-md hover:opacity-100 underline transition-opacity" href="#">Student Support</a>
</div>
</div>
</div>
</footer>


    </div>
  );
}
