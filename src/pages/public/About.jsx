import React from 'react';

export default function About() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface-container-lowest dark:bg-surface-container-highest w-full top-0 sticky z-50 shadow-sm border-b border-outline-variant dark:border-outline">
<div className="flex justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
<div className="flex items-center gap-2 cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed" data-icon="architecture">architecture</span>
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MahaDiploma Jobs</span>
</div>
<nav className="hidden md:flex items-center gap-gutter">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Talent</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
<a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#">About</a>
</nav>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95">
                Post Job
            </button>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
{/* Hero Section: Mission */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center mb-24">
<div>
<span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm mb-4 inline-block">Industrial Blueprint Edition</span>
<h1 className="font-display-lg text-display-lg text-primary mb-6">Bridging the Gap Between Talent & Industry.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                    MahaDiploma Jobs is the dedicated recruitment ecosystem for Maharashtra's MSBTE students. We facilitate the direct pipeline from academic excellence to industrial prowess.
                </p>
<div className="flex gap-4">
<button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:shadow-lg transition-all">Our Mission</button>
<button className="border border-primary text-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:bg-primary-fixed transition-all">View Vacancies</button>
</div>
</div>
<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="A high-tech industrial manufacturing floor in Maharashtra with modern CNC machinery and clean, organized workspaces. The lighting is crisp and professional, highlighting a mix of mechanical engineering and digital technology. The color palette reflects industrial blues and metallic grays, creating a sense of institutional stability and ambitious technological progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb7IbS4qMDutzW3QR4yI2w1Ok8ysUcyB6wvZIxmCQD1giHSWBnHtRHxi5H17czTM0kBIadcP3X5RQ_zlzpYBBno8gAAplEacSmSm3GPdCQqgAwoZ7g3GT08TqZqqEDDlsAqLbxRdeseF5cl-bSNGxBZPOAofyzdhF01nHqAQOcSI4y-C62pVQPd1ras3XyUyZJAkhdhk5iFWlt2fHlE7cUQ_cHmet7TTpYr5StiW5R_doxfjJy3Nh1sjdS06R8Ru2gcjvDHLQzVWs"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
</div>
</section>
{/* Bento Grid: Our Philosophy */}
<section className="mb-24">
<h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Engineered for Success</h2>
<div className="bento-grid">
{/* Our Mission */}
<div className="col-span-12 md:col-span-8 bento-card flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="rocket_launch">rocket_launch</span>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            To empower every diploma student in Maharashtra with immediate access to tier-1 industrial opportunities. We believe the technical hands that build our state deserve the most efficient pathways to their careers.
                        </p>
</div>
<div className="mt-8 flex gap-2">
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Tech-Driven</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Student-Centric</span>
</div>
</div>
{/* Industrial Strength */}
<div className="col-span-12 md:col-span-4 bento-card bg-primary text-on-primary border-none">
<span className="material-symbols-outlined text-4xl mb-4" data-icon="factory">factory</span>
<h3 className="font-headline-md text-headline-md mb-4">Industrial Grade</h3>
<p className="font-body-md text-body-md opacity-90">
                        Built on the standards of MSBTE and the specific needs of Maharashtra's manufacturing hubs like Pune, Nashik, and Aurangabad.
                    </p>
</div>
{/* Strategic Alliances */}
<div className="col-span-12 md:col-span-4 bento-card">
<span className="material-symbols-outlined text-tertiary text-4xl mb-4" data-icon="handshake">handshake</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">350+ Partners</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Direct tie-ups with major industrial players ensuring verified job listings.
                    </p>
</div>
{/* Verified Talent */}
<div className="col-span-12 md:col-span-8 bento-card border-l-4 border-l-secondary">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Verified Academic Credentials</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                We integrate directly with academic records to ensure that every "Talent Pool" member is a genuine MSBTE diploma holder with verified skills.
                            </p>
</div>
<div className="flex flex-col justify-center items-center bg-surface-container-low p-4 rounded-xl min-w-[120px]">
<span className="font-display-lg text-headline-lg text-secondary">100%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Verification</span>
</div>
</div>
</div>
</div>
</section>
{/* How It Works: Interactive Stacks */}
<section className="mb-24 bg-surface-container rounded-3xl p-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">The Recruitment Pipeline</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
{/* For Students */}
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="school">school</span>
                        For Diploma Students
                    </h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Create Industrial Profile</h4>
<p className="text-sm text-on-surface-variant">Upload your MSBTE credentials and list technical skills like AutoCAD, PLC, or Site Supervision.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Explore Niche Openings</h4>
<p className="text-sm text-on-surface-variant">Filter by branch (Civil, Mechanical, EE) and location across Maharashtra's industrial zones.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">One-Click Apply</h4>
<p className="text-sm text-on-surface-variant">Send your verified profile directly to HR managers and schedule interviews.</p>
</div>
</div>
</div>
</div>
{/* For Employers */}
<div>
<h3 className="font-headline-md text-headline-md text-secondary mb-8 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="business_center">business_center</span>
                        For Industrial Partners
                    </h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Post Requirements</h4>
<p className="text-sm text-on-surface-variant">Define technical requirements and preferred MSBTE colleges or specific diploma branches.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Access Talent Pool</h4>
<p className="text-sm text-on-surface-variant">Browse a pre-screened database of fresh diploma graduates and experienced supervisors.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant">
<div className="bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Hire with Confidence</h4>
<p className="text-sm text-on-surface-variant">Our automated screening ensures only candidates matching your technical criteria reach you.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Impact Section */}
<section className="mb-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant">
<span className="font-display-lg text-display-lg text-primary block">12k+</span>
<span className="font-label-md text-label-md text-on-surface-variant">Active Students</span>
</div>
<div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant">
<span className="font-display-lg text-display-lg text-secondary block">450</span>
<span className="font-label-md text-label-md text-on-surface-variant">Industries</span>
</div>
<div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant">
<span className="font-display-lg text-display-lg text-tertiary block">8.5k</span>
<span className="font-label-md text-label-md text-on-surface-variant">Placements</span>
</div>
<div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant">
<span className="font-display-lg text-display-lg text-primary block">32</span>
<span className="font-label-md text-label-md text-on-surface-variant">Cities Covered</span>
</div>
</div>
</section>
{/* CTA Section */}
<section className="relative bg-primary text-on-primary rounded-[2rem] p-12 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-10 rounded-full -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container opacity-30 rounded-full -ml-24 -mb-24"></div>
<div className="relative z-10 text-center max-w-2xl mx-auto">
<h2 className="font-display-lg text-display-lg mb-6">Join the Platform</h2>
<p className="font-body-lg text-body-lg mb-10 opacity-90">Whether you are a student looking for your first industrial break or an employer seeking technical excellence, the future starts here.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-primary px-10 py-4 rounded-xl font-label-md text-label-md font-extrabold hover:bg-surface-container-low transition-all">I am a Student</button>
<button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-label-md text-label-md font-extrabold hover:shadow-xl transition-all">I am an Employer</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-inverse-surface dark:bg-surface-container-lowest border-t border-outline mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md px-gutter py-stack-lg max-w-container-max mx-auto">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-surface-container-lowest text-3xl" data-icon="architecture">architecture</span>
<span className="font-headline-md text-headline-md text-surface-container-lowest font-bold">MahaDiploma Jobs</span>
</div>
<p className="font-label-md text-label-md text-surface-variant opacity-80 max-w-xs">
                    The authoritative portal for Maharashtra's industrial workforce development.
                </p>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="flex gap-gutter mb-8">
<a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Privacy Policy</a>
<a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Terms of Service</a>
<a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Employer FAQ</a>
<a className="font-label-md text-label-md text-surface-variant opacity-80 hover:opacity-100 underline transition-opacity" href="#">Student Support</a>
</div>
<p className="font-label-md text-label-md text-on-primary-fixed dark:text-on-primary-fixed-variant">
                    © 2024 MSBTE Diploma Recruitment Portal. Industrial Blueprint Edition.
                </p>
</div>
</div>
</footer>
{/* BottomNavBar (Mobile Only) */}
<nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant dark:border-outline shadow-lg">
<div className="flex justify-around items-center py-2 px-4">
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">Talent</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Pricing</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Account</span>
</div>
</div>
</nav>


    </div>
  );
}
