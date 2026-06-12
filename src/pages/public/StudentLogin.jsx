import React from 'react';

export default function StudentLogin() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation (Shell suppressed for focused login journey per rules) */}
<header className="fixed top-0 w-full h-16 flex items-center justify-between px-margin-mobile bg-surface shadow-sm z-50">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
<span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MahaResume</span>
</div>
</header>
<main className="flex-grow flex items-center justify-center px-margin-mobile py-24">
<div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
{/* Branding & Title */}
<div className="text-center mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Welcome Back</h1>
<p className="text-on-surface-variant font-body-md">Empowering Maharashtra's Diploma Talent</p>
</div>
{/* Path Switcher (Student vs Employer) */}
<div className="bg-surface-container p-1 rounded-xl mb-stack-lg flex relative overflow-hidden">
<div className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary-container rounded-lg transition-all duration-300 ease-out left-1 top-1" id="toggle-highlight"></div>
<button className="relative z-10 flex-1 py-3 text-label-md font-label-md transition-colors duration-200 text-on-primary" id="btn-student" onclick="switchTab('student')">
                    Student Login
                </button>
<button className="relative z-10 flex-1 py-3 text-label-md font-label-md transition-colors duration-200 text-on-surface-variant" id="btn-employer" onclick="switchTab('employer')">
                    Employer Login
                </button>
</div>
{/* Form Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
<form className="space-y-stack-md" onsubmit="event.preventDefault();">
{/* Dynamic Label */}
<div id="id-label-container">
<label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="user-id">Enrollment Number / Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="person">person</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" id="user-id" placeholder="Enter your ID" type="text"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="block text-label-md font-label-md text-on-surface" htmlFor="password">Password</label>
<a className="text-label-sm font-label-sm text-primary hover:underline" href="#">Forgot Password?</a>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary" type="button">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox"/>
<label className="text-label-sm font-label-sm text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
</div>
<button className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-label-md text-label-md shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Sign In
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<div className="relative py-4">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
<div className="relative flex justify-center text-label-sm"><span className="bg-surface-container-lowest px-4 text-outline uppercase tracking-widest">or</span></div>
</div>
<button className="w-full bg-surface-container-lowest border border-primary text-primary py-4 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-colors" type="button">
                        Create an Account
                    </button>
</form>
</div>
{/* Footer Links */}
<div className="mt-stack-lg text-center space-y-4">
<p className="text-label-sm font-label-sm text-on-surface-variant">
                    By signing in, you agree to our 
                    <a className="text-primary hover:underline" href="#">Terms of Service</a> & 
                    <a className="text-primary hover:underline" href="#">Privacy Policy</a>
</p>
<div className="flex justify-center gap-6 text-outline">
<a className="hover:text-primary transition-colors flex items-center gap-1 text-label-sm font-label-sm" href="#">
<span className="material-symbols-outlined text-sm" data-icon="help">help</span> Help Center
                    </a>
<a className="hover:text-primary transition-colors flex items-center gap-1 text-label-sm font-label-sm" href="#">
<span className="material-symbols-outlined text-sm" data-icon="language">language</span> English (IN)
                    </a>
</div>
</div>
</div>
</main>
{/* Side Graphics for Industrial Blueprint Aesthetic */}
<div className="fixed bottom-12 right-12 hidden lg:block opacity-20 pointer-events-none">
<div className="relative w-64 h-64 border-2 border-primary border-dashed rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-primary border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
<span className="material-symbols-outlined text-primary text-8xl absolute" data-icon="engineering">engineering</span>
</div>
</div>


    </div>
  );
}
