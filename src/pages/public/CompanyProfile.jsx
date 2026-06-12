import React from 'react';

export default function CompanyProfile() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar Shell */}
<header className="bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50">
<div className="flex justify-between items-center px-4 w-full max-w-container-max mx-auto h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed cursor-pointer">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MSBTE Jobs</h1>
</div>
<nav className="hidden md:flex items-center gap-8 h-full">
<a className="h-full flex items-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-colors duration-200 px-2" href="#">Dashboard</a>
<a className="h-full flex items-center text-primary dark:text-primary-fixed font-bold border-b-2 border-primary hover:bg-surface-container dark:hover:bg-inverse-surface transition-colors duration-200 px-2" href="#">Jobs</a>
<a className="h-full flex items-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-colors duration-200 px-2" href="#">Profile</a>
<a className="h-full flex items-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-colors duration-200 px-2" href="#">Alerts</a>
</nav>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional close-up portrait of a young Indian engineer wearing a subtle smile and business casual attire. The lighting is soft and natural, suggesting a bright office environment. The style is clean and corporate, utilizing a high-key aesthetic with soft shadows and a focused, trustworthy expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABaCccqTbb6plE7SkJ7qItWn-M90SqlK1yc7zJM23aJLLQtllzazVE_4qBTdg0T_ZbeYzXxnXcP57iFNKQFFDn4PQfqrOfHTsEUC7Xnjph2BCNleV1qwwgc4-u3rwf9g3cLog9WXaLlR23WNWlamim3GNF3kWL5ol9VPzKJxESLtB5Yhwe7eRCMnjVD38-UVWFd1jOdBQjAFXYnRIuVFzCKTwbZGQUSczNUqITxzaalhOxijT4mBdpiiwGng662D24QMtctVwEP8I"/>
</div>
</div>
</div>
</header>
<main className="pt-16 pb-24 md:pb-8">
{/* Brand Hero Section */}
<section className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
<img alt="Industrial Manufacturing Facility" className="w-full h-full object-cover" data-alt="An expansive, high-tech industrial manufacturing facility at dawn, with golden morning light filtering through high windows. Massive steel structures, gleaming piping systems, and advanced machinery are visible in the background. The scene is shot with a cinematic wide-angle lens, emphasizing scale, precision, and the clean, blue-and-steel aesthetic of modern heavy industry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLobX-ZWTEL8Lq48MphMEvqDfO4s6z8FzmgBdpkECBuul5uqPvJCxC66hKQzP6w15idvsGdf-g-em_QOa09E3BTQcd3OXNp8Rn0TqoVtmSv5YWgCLDAJwhavEynRJ0C-ecMbzge0jT87LRCwghog-jzWuwPfBIxyGfnbJXWiEum1N-sJxlPgBkhpMFJN1qxThFyuVFO0i_kbRrpECwgWlBxb-iOAvR1lhJpwipxPeW8qQ59CUWc1eoMST0FFEi9vXMr68hRI1D_Jg"/>
<div className="absolute bottom-0 left-0 w-full z-20 p-margin-mobile md:p-gutter">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-end gap-6">
{/* Logo Container */}
<div className="relative group">
<div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border border-outline-variant overflow-hidden">
<img alt="Thermax Logo" className="w-full h-full object-contain" data-alt="A professional, minimalist company logo for a global industrial leader, presented on a clean white square background. The logo features abstract geometric shapes in deep Maharashtra blue and sharp action orange, symbolizing energy, sustainability, and mechanical precision. The design is bold, corporate, and modern, conveying institutional stability and innovative power." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALzA2b87tOrdglue6dxJPhf5U5M51w52ReeYwrI57TxliB5DPsKmRFx03nSWOaOeNBQxa6dFdLvRZfWtglQUEgLR3w5d15EUIAQ9E7YrB0tw8JyaExefpUMU8v99sfVmNcPm1T2nxfNcQmD6F6uxYH-GHMBKVXz1Y3ndSPxfHAh2iYcbM9Tg5YjrAx01evEYy_IwNi_FbBTPKJjJFZb8WD90xYuOAxR3lfIZHbkeL9PeOK-9Lmb3rQC96C2QJVdUpVN1B0KLudrak"/>
</div>
<div className="absolute -top-2 -right-2 bg-secondary text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
<span className="font-label-sm text-label-sm">Verified</span>
</div>
</div>
<div className="flex-grow">
<h2 className="font-headline-lg text-white mb-2 font-display-lg text-display-lg md:text-display-lg leading-tight">Thermax Limited</h2>
<div className="flex flex-wrap gap-4 text-white/90">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">factory</span>
<span className="font-body-md text-body-md">Energy & Environment Solutions</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-body-md text-body-md">Pune, Maharashtra</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">groups</span>
<span className="font-body-md text-body-md">5000+ Employees</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg shadow-md hover:scale-105 transition-transform">
                            Follow Company
                        </button>
<button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-label-md text-label-md rounded-lg hover:bg-white/30 transition-all">
                            Share Profile
                        </button>
</div>
</div>
</div>
</section>
{/* Main Content Area */}
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: About & Culture */}
<div className="md:col-span-8 space-y-stack-lg">
{/* About Us Section (Bento Style) */}
<div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant shadow-sm">
<h3 className="font-headline-md text-headline-md text-primary mb-4">About the Company</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            Thermax Limited is an Indian conglomerate involved in energy and environment. Thermax's business portfolio includes products for heating, cooling, water and waste management, and air pollution control. We provide sustainable solutions in energy and environment that help industries become more resource-efficient. Our commitment to MSBTE diploma graduates stems from our belief in the practical excellence and technical rigor of Maharashtra's technical education.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-primary font-display-lg text-headline-lg">50+</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Countries</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-secondary font-display-lg text-headline-lg">1966</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Founded</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-primary font-display-lg text-headline-lg">12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Manufacturing Sites</span>
</div>
<div className="p-4 bg-surface-container-low rounded-lg text-center">
<span className="block text-secondary font-display-lg text-headline-lg">BSE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Publicly Traded</span>
</div>
</div>
</div>
{/* Company Culture Asymmetric Layout */}
<div className="space-y-4">
<h3 className="font-headline-md text-headline-md text-primary px-2">Work Culture & Facilities</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[400px]">
<div className="col-span-1 row-span-2 rounded-xl overflow-hidden group">
<img alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A dynamic action shot of diverse industrial engineers in white hard hats and high-visibility vests collaborating over a digital blueprint in a modern, brightly lit production hall. The background shows blurred manufacturing equipment and a professional industrial atmosphere. The style is crisp and editorial, focusing on teamwork, technical expertise, and a positive, innovative workplace culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdgjYxgsLTvZSEr9453F6qvQkVimXqVME-IEWIRVanfWytw_XlOAqrD9ec5qnUNd1dJLbOg1SKxvr1z94Qa8wgYP5fqc8QiBGSpbSzmrPy_3fNG41DLwThg5BK7My6YrQlf8mWy7zSn0a62wuNkeSyoGfDBdVgilYbChpRB9eTOm3qTF6ZVEZFGExTe6Ha0CK8KM9H4HlQ3N9Skpm6bXcyARSbMnN6SHJ8LDptOeA3qtE-RXaXXVO7fQlF8FVTcZtwJiS2zng1ZD0"/>
</div>
<div className="col-span-1 rounded-xl overflow-hidden group">
<img alt="Research Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean, state-of-the-art industrial research laboratory with specialized scientific equipment and technical workstations. The room is bathed in cool blue and white tones, highlighting a high-tech, clinical environment. A technician in a lab coat is visible in the distance, emphasizing a culture of precision, research, and scientific advancement in manufacturing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQiZjNZXPv98nsBD5dqKWOZUlxVwIsOz6A5VwbkEInwvqCYVVlwrFsILYFH6-mPHnSgYz1BZGyp-6lMfFUrhi0BDjjpG-OlAPUQ5xbJNkgJ2nXyDmKE3EdRDQdEQBYeFoaOKtcbFyUQhDQH9W7jJBNNdNqmu1jjJJOwstfPRwXTzxq0XRYNy6IVUDRacNyzfFBMw9m7NKIdfBlXEAW8kbdr670rvpUw6gvekIhtx5-NCiU9AKscOuAOk5zrV4uVuXRynBROGltMw"/>
</div>
<div className="col-span-1 rounded-xl overflow-hidden group">
<img alt="Safety Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A focused workshop setting where young technical trainees are being instructed by a senior engineer on a sophisticated industrial control panel. The scene is warmly lit, suggesting a supportive and educational mentorship environment. The focus is on technical skill-building and hands-on learning, showcasing the company's commitment to developing young diploma talent." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmY413_yze6Hn9OXBJMTo-WYGMzHG_HHWHv0avGlr1LI5sgS0_VPJF8xZ3c958EtTtDfz9V-Kvz_VNL_fx8np2cKmIQhd8G1Ly5BB9FvO5E9xLCW4Z94lmP_V5MTA08XX4BiRurmF2n7GWituOcOTrd7LMECnHnGV-4-LO9c-CwM8Nu7z9WLxngxIix9H-XCTc_vk1G1ek0hVDIKLA_v7-TMzwE05bw54sRiJ5avTHZ6DxLfbStBxjnrygHT9GgfZVVGG66wO7HJA"/>
</div>
<div className="col-span-2 rounded-xl overflow-hidden group">
<img alt="Project Site" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A wide, panoramic view of a massive industrial project site under a clear blue sky, showing completed boilers and cooling towers. The structures are clean, well-maintained, and represent the monumental scale of the company's projects. The photography is professional and architectural, emphasizing sustainability and industrial achievement with high contrast and sharp details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuBm33davtV5j4BhVJ8xFqM3L-G0dVfYqIwwcp-5RQfViBFXehBPiqh0mbvJeGp89zTwLMWuQfI7J2Te7u7y0PV3cNxUNoF1VFpo_af_hzBf7J9WC5AbjAwTnUJLXtYSB9cXzOmfdsU6-0fcuaI3x-TlaSleOpqcJJf5X_NT5_hjqWVZpr5ADu2UHIBl_5Afwb_FC5yS2oncVet94jFvyrJvylzLQmTPuG6cn9o40P2fEWQ7KPeIFbrAFQCRmOBEjwiwlVuwF02Qk"/>
</div>
</div>
</div>
</div>
{/* Right Column: Job Listings & Meta */}
<div className="md:col-span-4 space-y-stack-lg">
{/* Quick Stats Card */}
<div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-[80px]">domain</span>
</div>
<h4 className="font-headline-md text-headline-md mb-4 relative z-10">Headquarters</h4>
<div className="space-y-4 relative z-10">
<div>
<p className="text-white/70 font-label-sm text-label-sm uppercase">Primary Location</p>
<p className="font-body-md text-body-md">Thermax House, 14 Mumbai-Pune Road, Wakdewadi, Pune 411003</p>
</div>
<button className="w-full py-2 bg-white text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">map</span>
                                View on Map
                            </button>
</div>
</div>
{/* Open Positions */}
<div className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="font-headline-md text-headline-md text-primary">Open Positions</h3>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">8 New</span>
</div>
{/* Job Card 1 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">Maintenance Engineer</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Energy Division • Pune</p>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase">Urgent</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Mechanical</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">2-4 Yrs Exp</span>
</div>
<button className="w-full py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
                            </button>
</div>
{/* Job Card 2 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">Production Trainee</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Water Div • Chinchwad</p>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-[10px] font-bold uppercase">Freshers</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Diploma</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Stipend: 18k</span>
</div>
<button className="w-full py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
                            </button>
</div>
{/* Job Card 3 */}
<div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg font-bold text-primary group-hover:text-secondary transition-colors">Quality Assurance Tech</h5>
<p className="text-on-surface-variant font-body-md text-body-md">Solar Projects • Nagpur</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Electrical</span>
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-label-sm">Site-based</span>
</div>
<button className="w-full py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors font-label-md text-label-md">
                                Apply Now
                            </button>
</div>
<button className="w-full py-3 text-primary font-label-md text-label-md text-center hover:underline decoration-2 underline-offset-4">
                            View All 14 Openings
                        </button>
</div>
{/* Skills Endorsement */}
<div className="bg-surface-container-low p-6 rounded-xl">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-4">Top Skills Recruited</h4>
<div className="flex flex-wrap gap-2">
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">AutoCAD</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Boiler Ops</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Six Sigma</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Water Treatment</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">HVAC</span>
<span className="bg-white border border-outline-variant px-3 py-1 rounded-full text-body-md">Project Planning</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar Shell (Mobile Only) */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl md:hidden">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1">
<span className="material-symbols-outlined">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-transform duration-150 scale-95">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</div>
</nav>


    </div>
  );
}
