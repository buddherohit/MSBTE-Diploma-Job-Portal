import React from 'react';

export default function EmployerRegister() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile h-16 bg-surface shadow-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="school">school</span>
<span className="font-headline-md text-headline-md font-bold text-primary">MahaResume</span>
</div>
<div className="hidden md:flex gap-6 items-center">
<a className="text-on-surface-variant font-label-md hover:text-primary transition-colors" href="#">Portal Home</a>
<a className="text-on-surface-variant font-label-md hover:text-primary transition-colors" href="#">Verification Guide</a>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md transition-transform active:scale-95">Student Login</button>
</div>
</header>
<main className="pt-24 pb-12 px-margin-mobile flex flex-col items-center">
<div className="w-full max-w-container-max grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Context & Trust Panel */}
<div className="lg:col-span-5 space-y-8">
<div className="space-y-stack-md">
<h1 className="font-headline-lg text-headline-lg text-primary">Empower Maharashtra's Workforce</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Connect with the finest diploma talent from the state's leading polytechnic and industrial institutes. Join 5,000+ verified employers today.</p>
</div>
<div className="p-6 rounded-xl border border-outline-variant space-y-4 bg-surface-container-lowest">
<div className="flex gap-4">
<div className="bg-secondary-container/20 p-2 rounded-lg h-fit">
<span className="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
</div>
<div>
<h3 className="font-label-md text-on-surface">MIDC Verification Required</h3>
<p className="font-label-sm text-on-surface-variant mt-1 leading-relaxed">To maintain industrial standards, all industrial partners must undergo MIDC (Maharashtra Industrial Development Corporation) verification after registration.</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-xl border-l-4 border-primary">
<span className="font-headline-md text-headline-md block text-primary">120k+</span>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Candidates</span>
</div>
<div className="glass-panel p-4 rounded-xl border-l-4 border-secondary">
<span className="font-headline-md text-headline-md block text-secondary">15+</span>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Industries</span>
</div>
</div>
<div className="hidden lg:block relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
<img className="w-full h-full object-cover" data-alt="A professional high-angle view of a modern manufacturing facility in Maharashtra, with clean industrial machinery and bright, natural sunlight filtering through large windows. The scene conveys industrial excellence and state-of-the-art technology, using a color palette of Maharashtra Blue and steel greys. The atmosphere is productive, high-trust, and reflects corporate stability and modern innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxl4mH1-xYPcwjOq1d0_By0Abg3IgN7UH8FvhUJHJdDgYungz1pWKJO69L6_YyriqB_cLgyLMBBif3wtNuZuy_lPrPvxfG2xrSx2qPeirewQ115HhJAqaF5cBNm5zX0T_YehCnQwp6x4L0t78P2OyLSd7y5LtsbZXTto-HeBd8Fd-KCLzsV7bdLawKV159MEFRcLf0Vjl11XVAg7Dy2HyIxtsh7p3B3I6YDUvrQhmNEscOAKwYVcIY1gW02nWrmiL9BsBieNPZVvc" />
</div>
</div>
{/* Registration Form Panel */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm">
<div className="mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface">Employer Registration</h2>
<p className="text-on-surface-variant font-label-md">Create your corporate profile to start hiring</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6" onsubmit="event.preventDefault()">
{/* Company Name */}
<div className="md:col-span-2 space-y-2">
<label className="font-label-md text-on-surface block">Company Name</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="corporate_fare">corporate_fare</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Enter official company name" type="text" />
</div>
</div>
{/* Industry Sector */}
<div className="space-y-2">
<label className="font-label-md text-on-surface block">Industry Sector</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="factory">factory</span>
<select className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
<option value="">Select Sector</option>
<option value="manufacturing">Manufacturing</option>
<option value="it">Information Technology</option>
<option value="civil">Civil Engineering</option>
<option value="electrical">Electrical & Energy</option>
<option value="auto">Automobile</option>
</select>
</div>
</div>
{/* Contact Person */}
<div className="space-y-2">
<label className="font-label-md text-on-surface block">Contact Person</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="badge">badge</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Full Name" type="text" />
</div>
</div>
{/* Official Email */}
<div className="space-y-2">
<label className="font-label-md text-on-surface block">Official Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="mail">mail</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="hr@company.com" type="email" />
</div>
</div>
{/* Phone Number */}
<div className="space-y-2">
<label className="font-label-md text-on-surface block">Phone Number</label>
<div className="relative flex">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="call">call</span>
<span className="absolute left-10 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md">+91</span>
<input className="w-full pl-20 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="98765 43210" type="tel" />
</div>
</div>
{/* Password */}
<div className="md:col-span-2 space-y-2">
<label className="font-label-md text-on-surface block">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="lock">lock</span>
<input className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Create a strong password" type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary" type="button">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>
</div>
{/* Terms */}
<div className="md:col-span-2 flex items-start gap-3 py-2">
<input className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="terms" type="checkbox" />
<label className="font-label-sm text-on-surface-variant" htmlFor="terms">
                                I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>. I understand that MIDC verification is mandatory for industrial access.
                            </label>
</div>
{/* Register Button */}
<div className="md:col-span-2 pt-4">
<button className="w-full text-on-secondary font-label-md py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group bg-primary shadow-md">
                                Register Organization
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</form>
<div className="mt-8 pt-8 border-t border-outline-variant text-center">
<p className="font-label-md text-on-surface-variant">
                            Already have an account? <a className="text-primary font-bold hover:underline" href="#">Employer Login</a>
</p>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Navigation Mobile Only */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 px-4 bg-surface-container dark:bg-surface-container-highest rounded-t-xl shadow-lg">
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span className="font-label-sm text-label-sm">Builder</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-sm text-label-sm">Templates</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="model_training">model_training</span>
<span className="font-label-sm text-label-sm">Training</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
</nav>




    </div>
  );
}
