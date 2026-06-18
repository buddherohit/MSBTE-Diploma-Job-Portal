import React from 'react';

export default function SelectResumeTemplate() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="bg-surface dark:bg-inverse-surface shadow-sm docked full-width top-0 sticky z-40 transition-shadow">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-4">
<a className="flex items-center gap-2 cursor-pointer" href="/">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
</div>
<div className="flex flex-col leading-none text-left">
<span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
<span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
</div>
</a>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md text-primary dark:text-inverse-primary font-bold hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors active:scale-95">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    Preview
                </button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all shadow-md">
                    Export PDF
                </button>
</div>
</div>
</header>
<div className="flex max-w-container-max mx-auto min-h-[calc(100vh-72px)]">
{/* NavigationDrawer (Desktop Only) */}
<aside className="hidden md:flex flex-col h-[calc(100vh-72px)] sticky top-[72px] w-80 bg-surface dark:bg-inverse-surface border-r border-outline-variant py-6">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
<img alt="Student Profile Picture" className="w-full h-full object-cover" data-alt="A professional studio headshot of a young engineering student in a smart-casual blazer. The lighting is bright and directional, emphasizing clarity and confidence against a clean, light-grey architectural background. The overall style is modern corporate, aligning with a high-end academic and professional persona." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41IQRqhCFfR73LZlUzBeeWlZfRjQlmw07JedOiGRJ_-gR0xXolI6i90a-B-Hsl-7KZyF6P2lj23vc5jumzMo2zeyXhJR7-op35y9n9wV6ee7wToryZfE2OPk4bajn1bmifgCbVnWPQnpwMdjMZJntIjOjvRUyLtFx2HPJ0UysDK2zR0oyzN_S9gRwTk1Fb_EUvZOxNLZ4YhrqMDlD2QKzjLMMmQRHNwfL2I4vMXF9MslR3RjcbJy4MilX7hzkB6-w3jnrsnbGVcw"/>
</div>
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">MSBTE Student</p>
<p className="text-sm text-on-surface-variant">Mechanical Engineering</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto space-y-1">
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="font-body-md text-body-md">Academic Info</span>
</a>
<a className="bg-primary-container text-on-primary-container font-semibold rounded-full mx-2 px-4 py-3 flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="style">style</span>
<span className="font-body-md text-body-md">Templates</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="business_center">business_center</span>
<span className="font-body-md text-body-md">Work Experience</span>
</a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high transition-colors rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
<span className="font-body-md text-body-md">Technical Skills</span>
</a>
</nav>
</aside>
{/* Main Content (Canvas) */}
<main className="flex-1 p-margin-mobile md:p-gutter overflow-x-hidden pb-24 md:pb-8">
<header className="mb-10">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Select Your Blueprint</h2>
<p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">
                    Choose a layout that best represents your career stage. Each template is industry-vetted to pass ATS filters.
                </p>
</header>
{/* Template Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Industrial Classic Template */}
<div className="group relative flex flex-col bg-surface border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" onclick="selectTemplate(this)">
<div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative">
<img alt="Industrial Classic Resume Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A high-density, professional resume layout shown from an angled perspective. The design features tight grid systems, structured sections for technical machinery experience, and precise typography in blue and black. The lighting is professional and clean, highlighting the document's crisp white surface and organized industrial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7XUG0liDabp4p5ivCUwrrJjfIEVzHdmIBG3G6Yj7KHTOkXlvANmpSMJyh_OYih4SdR8qwm3WLjFJvp7P-WqfsP3cgOv0pA2iMaWDfsLlYGtwk5hG1l3hsfD4c1OgHZK8NWhVKAE56WxcyjxAeolylm0V33SYkrDWIDWT7HtmTShdNcFAL5kflT0HQ_eNSyiQpI4pdRKfdenEzvCHuDnBvW_54H12MbMshK0aVK7xTfVeI13IeXdxnakpnJZa0vXcU_NoQmyEYcO8"/>
{/* Active Indicator */}
<div className="absolute top-4 right-4 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 transition-opacity check-mark">
<span className="material-symbols-outlined" data-icon="check" style={{ fontVariationSettings: '\'wght\' 700' }}>check</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Industrial Classic</h3>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">High Density</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Optimized for manufacturing, electrical, and civil engineering roles requiring detailed technical history.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Structured</span>
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Reliable</span>
</div>
</div>
</div>
{/* Modern Technical Template (Pre-selected) */}
<div className="group relative flex flex-col bg-surface border-2 border-primary rounded-xl overflow-hidden shadow-xl ring-4 ring-primary/10 cursor-pointer selected-template" onclick="selectTemplate(this)">
<div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative">
<img alt="Modern Technical Resume Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A modern, clean resume template featuring a distinct blue vertical sidebar for skills and contact info. The main body uses spacious typography and clear bullet points for software projects and internships. The lighting is soft and neutral, emphasizing a startup-ready, sleek technical professional look in Maharashtra blue." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZYpm-BnIsQ-GmMZXKybeZF0v-bfZaAiz573gaHCdkTzgL_GAdzsWWC7VFHV_9q6r_gbVJhRo_9gB2EyYxBH9B_XWBFyJfYquZNw2QNGbtUgHTattB6lTlozClaM1LlPlHCzJMLPiF50-lmR0Ng3Yw7e7DdWLFCuzJmS4zUcAujZosOd0nW-6ydAmZ1tBCNDrXrEaICXy7mL_14cgQqkjNfP7vYh0pUTTZpitYBEC_r3Kk9c5zAhX3sZMQKMdtmJKNJmJ_1eTzB2s"/>
{/* Active Indicator */}
<div className="absolute top-4 right-4 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-100 check-mark">
<span className="material-symbols-outlined" data-icon="check" style={{ fontVariationSettings: '\'wght\' 700' }}>check</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Modern Technical</h3>
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Recommended</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Perfect for software, IT, and design students. Features a sleek sidebar and clear skills visualization.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Clean UI</span>
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Sidebar</span>
</div>
</div>
</div>
{/* Academic Focus Template */}
<div className="group relative flex flex-col bg-surface border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" onclick="selectTemplate(this)">
<div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative">
<img alt="Academic Focus Resume Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A minimalist resume template emphasizing academic achievements and research projects. Large headers and elegant white space define the layout. The visual style is institutional and stable, with a focus on publication-like clarity and serif-influenced font pairings for an authoritative academic feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9RcFB3FcLzx-gfiD_Fxz5dHcZ2K_3PX4lEnD08NTBGEO1T2XCuhfmbLq0sC3s2dLGP6_gcqDNxcOOaENgzvt8AT4L9kjDM9vCtMj9SaQ6DUShGEtW723B7k5RLyYoKwj6cszV5arSx-byfl2WjVFdry9pQlsFGEpRZOiWMMEM8F4kRT6VwmtGlUzDGtEtbIeRkzmGn0gOjm3NgFmPaqM4JzzjOVQ7MKwACp9uHpFea9Sb5dH3dCBmF_N7Z9xRzMBeeJD4f87LEOM"/>
{/* Active Indicator */}
<div className="absolute top-4 right-4 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 transition-opacity check-mark">
<span className="material-symbols-outlined" data-icon="check" style={{ fontVariationSettings: '\'wght\' 700' }}>check</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Academic Focus</h3>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Project Rich</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Highlights project work, research, and certifications over work experience. Ideal for fresh graduates.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Education First</span>
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Balanced</span>
</div>
</div>
</div>
</div>
{/* Path Switcher */}
<div className="mt-16 bg-surface-container-low border border-outline-variant p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">Applying as a Recruiter?</h4>
<p className="text-on-surface-variant">Switch to the employer dashboard to post jobs and search for students.</p>
</div>
<div className="flex bg-surface-container-high p-1 rounded-full">
<button className="px-6 py-2 rounded-full font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm">I am a Student</button>
<button className="px-6 py-2 rounded-full font-label-md text-label-md transition-all text-on-surface-variant hover:text-primary">I am a Recruiter</button>
</div>
</div>
</main>
</div>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container dark:bg-surface-container-highest shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center px-4 py-2 pb-safe">
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span className="font-label-sm text-label-sm">Builder</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="style">style</span>
<span className="font-label-sm text-label-sm">Templates</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<span className="font-label-sm text-label-sm">Training</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:text-primary active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</button>
</nav>


    </div>
  );
}
