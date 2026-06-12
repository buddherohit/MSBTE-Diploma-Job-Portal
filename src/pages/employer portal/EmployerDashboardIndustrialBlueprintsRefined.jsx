import React from 'react';

export default function EmployerDashboardIndustrialBlueprintsRefined() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface sticky top-0 z-50 border-b border-outline-variant h-16 flex items-center justify-between px-margin-mobile max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MSBTE Jobs</h1>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCctXmdFXP90oGIHR_ZinwH-JNAf-1cxUWsTsGt52ys8XH9DaZKvKniSjf18LB2sRC0iAF4RenFn8qGOXQTpQ8s3TJ8esDyhDOlFjjm7HjSGO5mCgmtiV71NeSaZeEkZlJ8zigxCU0zIQ_8ZPnQTEOAy-B5zIcE2SJk8DfIyU_MhVCvteuCBE_W0MLX2LSGJqDrhsAWWnbbRtG90j4LCvtv6a25xniqcwP8gfIZu1agEQEq3X9izU50DsG5bYCq5dwhYVBNPrE6NN0" />
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile pt-stack-lg pb-32">
{/* Welcome Section */}
<section className="mb-stack-lg space-y-stack-sm">
<h2 className="font-headline-md text-headline-md text-on-surface">Welcome back, Rohan Sharma</h2>
<div className="flex flex-col gap-2">
<p className="font-body-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl filled-icon">business</span>
                    Tata Communications Ltd.
                </p>
<div>
<span className="inline-flex px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-label-sm">Verified Recruiter</span>
</div>
</div>
</section>
{/* Metrics Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
<div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">work</span>
<span className="text-on-tertiary-fixed-variant font-label-sm">+2 this week</span>
</div>
<p className="font-label-md text-on-surface-variant">Active Jobs</p>
<h3 className="font-headline-lg text-headline-lg">4</h3>
</div>
<div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">groups</span>
<span className="text-on-tertiary-fixed-variant font-label-sm">+42 new</span>
</div>
<p className="font-label-md text-on-surface-variant">Total Applicants</p>
<h3 className="font-headline-lg text-headline-lg">128</h3>
</div>
<div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">verified</span>
</div>
<p className="font-label-md text-on-surface-variant">Shortlisted</p>
<h3 className="font-headline-lg text-headline-lg">12</h3>
</div>
<div className="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">event_upcoming</span>
</div>
<p className="font-label-md text-on-surface-variant">Interviews</p>
<h3 className="font-headline-lg text-headline-lg">3</h3>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Manage Recent Jobs */}
<section className="lg:col-span-2 space-y-stack-md">
<div className="flex justify-between items-center">
<h4 className="font-headline-md text-headline-md">Manage Recent Jobs</h4>
<button className="text-primary font-label-md flex items-center gap-1 hover:underline">
                        View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="space-y-4">
{/* Job Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl flex items-center justify-between shadow-sm group hover:border-primary transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center p-2">
<img alt="Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-jTOaq_cXJFr4qtKaKMWSMDk46z0LJRQC6c6z-JQbrF5tBSUHa1UGI0nfP_LFQFk5svl_o0RuJoJAp8iDeAm69TpQJBWzgABZuCFOo22FHO_q-wrgNZtu7KtXSVVi9rjNFtUZEQtDknKXQN-dQJDuYJ3x0zAiGLQfutRX6wHDlG1R-ZDVZaKWkje-C5FXjYHoXp9NPZCKjKtSBtlsaZnj7qaOr0nmKNfAn_U911yBpJjh0KCKqLaSS2ERF4S2Q-UrXsmzVTYK4M" />
</div>
<div>
<h5 className="font-label-md text-lg">Junior Network Engineer</h5>
<p className="font-body-md text-sm text-on-surface-variant">Pune • Posted 2 days ago</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:block text-center">
<p className="font-label-sm text-on-surface-variant">Applicants</p>
<p className="font-headline-md text-primary">54</p>
</div>
<button className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-md hover:bg-primary-container transition-colors shadow-sm">
                                View Applicants
                            </button>
</div>
</div>
{/* Job Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl flex items-center justify-between shadow-sm group hover:border-primary transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center p-2">
<img alt="Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3p7wu_P2phSh8_8ySoAenl-E8jx38P2SzvHCWgB1dOwrgME4iVtXbU-1bnBuesWeHed53K4RtL_p2NPKO3mNPWQjK5RNz7RyYE1ZKAng_ZFCI2-Cp9SX63tY3cVLPBQXBLEUE9H4RCMELHWaOJeOK2u1o3Fq9y9I-bvswqVbtoI03ij2gEnXO9j03imcFz3Fo03fhT2q1grsqFf6jKT6WzI6JYpjYBFA7Agzhu_8jxxanQSx-MD9X3rARI2vnh4wyUhzcy0SHWs" />
</div>
<div>
<h5 className="font-label-md text-lg">Electrical Maintenance Intern</h5>
<p className="font-body-md text-sm text-on-surface-variant">Mumbai • Posted 5 days ago</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:block text-center">
<p className="font-label-sm text-on-surface-variant">Applicants</p>
<p className="font-headline-md text-primary">74</p>
</div>
<button className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-md hover:bg-primary-container transition-colors shadow-sm">
                                View Applicants
                            </button>
</div>
</div>
</div>
</section>
{/* Recent Applicants */}
<section className="space-y-stack-md">
<h4 className="font-headline-md text-headline-md">Recent Applicants</h4>
<div className="space-y-3">
{/* Applicant Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex-shrink-0">
<img alt="Applicant" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGAm-DxaE_UZ_4VgUb7wNFQxn-JUCmBI5y58Sj1M1ENaZc3wjqAWhlZ2fSkEzlwq4io3C05JKP6lAVPFxBT4z_BlX9EmoNzIduoEc6Qxtwa87csGN7Oesg-AsQp46sDFCSdQ5BzHCRymLQx6_1lK4J5SFHqbwSFD1Y_5U4UNqqAEu0JHUSHDK6ONG2ZjtPbPucEtMJ2pIOatSLlcgHfEsH7vklKeLtOvd-U7jtIo9hS4rCNzu9aY8l5VlNFS8QQEe_pXfLgEzbgeg" />
</div>
<div className="flex-grow">
<h6 className="font-label-md">Aditya Ahire</h6>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Mechanical Eng • 2024</p>
</div>
<button className="text-primary border border-primary px-4 py-1 rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Review
                        </button>
</div>
{/* Applicant Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex-shrink-0">
<img alt="Applicant" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0I_b7LFZ7EMye6XeEdXhLzCAO41gFXheYbk69f1mb74g-2PTlTYdmuctc7cPxK0SD7wYES0p12uusWxjfch1C8ssP9O4IsvQ-lSgE_eahCE-RcPO5Erx7LAbQFGUgYelayf27YIlbZ14Xb2jt1XxLjvVJfXXT2uo1xdhj0vfdqcbMI7dObV3sdKoDn6shg9d_OErpKG6eHr1On5wOuZULui6KKE2GoKpRVN31dHSdkL0_60gTl_0hwH2U4CbMkrK6o-9ZHfObbQU" />
</div>
<div className="flex-grow">
<h6 className="font-label-md">Sneha Patil</h6>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Computer Tech • 2023</p>
</div>
<button className="text-primary border border-primary px-4 py-1 rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Review
                        </button>
</div>
{/* Applicant Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex-shrink-0">
<img alt="Applicant" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW0MWVIO-VimhmclbAP2w_zquXWlD-4sR1GFOuUZ4EJKKDYHhFkhDKAx_QFAIuOl661P6EiYCcg9D5GMXIo8g1kfjw6i3fsm5mrnmrX58s4w3JqkZp4BJqn_1kp6R78U2LrS3Yc4odot1sLEWEbnswbdVtYAVopORpHUtYCmjDq-_ty5ecP6DLQTqrZT0CYWWNpnASsGOBaMnV_bpzssYYvCmDHSkgSmZj8oRQUYh7yJGzwgGwaG-XbioiHLP9bT9yp5Vy40UKqLE" />
</div>
<div className="flex-grow">
<h6 className="font-label-md">Rahul Kulkarni</h6>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Civil Eng • 2024</p>
</div>
<button className="text-primary border border-primary px-4 py-1 rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Review
                        </button>
</div>
</div>
</section>
</div>
</main>
{/* FAB for Mobile */}
<button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center z-50 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-3xl">add</span>
</button>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center px-4 py-3 pb-safe-area-inset-bottom">
<a className="flex flex-col items-center gap-1 text-primary" href="#">
<span className="material-symbols-outlined filled-icon">dashboard</span>
<span className="font-label-sm">Dashboard</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">post_add</span>
<span className="font-label-sm">Post Job</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-label-sm">Applicants</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm">Settings</span>
</a>
</nav>

    </div>
  );
}
