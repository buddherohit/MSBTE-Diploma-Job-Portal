import React from 'react';

export default function EmployerLogin() {
  return (
    <div className="w-full min-h-screen">
      
    {/* Top Navigation */}
    <header className="fixed top-0 w-full h-16 flex items-center justify-between px-margin-mobile bg-surface shadow-sm z-50">
        <a className="flex items-center gap-2 cursor-pointer" href="/">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
            </div>
            <div className="flex flex-col leading-none text-left">
                <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
            </div>
        </a>
    </header>

    <main className="flex-grow flex items-center justify-center px-margin-mobile py-24">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Branding & Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-secondary mb-2">Employer Login</h1>
                <p className="text-on-surface-variant font-body-md">Connect with Maharashtra's top polytechnic technicians</p>
            </div>

            {/* Path Switcher (Redirects to Student Login if clicked) */}
            <div className="bg-surface-container p-1 rounded-xl mb-8 flex relative overflow-hidden">
                <button className="relative z-10 flex-1 py-3 text-sm font-semibold transition-colors duration-200 text-on-surface-variant" onclick="window.location.href='Student Login.html?tab=student'">
                    Student Login
                </button>
                <button className="relative z-10 flex-1 py-3 text-sm font-semibold transition-colors duration-200 bg-white rounded-lg text-secondary shadow-sm">
                    Employer Login
                </button>
            </div>

            {/* Form Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                <form className="space-y-6" onsubmit="event.preventDefault(); window.location.href='../employer portal/Employer Dashboard  Industrial Blueprints Refined.html'">
                    <div>
                        <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="company-email">Company Email / Corporate ID</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="corporate_fare">corporate_fare</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/50" id="company-email" placeholder="name@company.com" required type="email"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
                            <a className="text-xs font-bold text-secondary hover:underline" href="/public/forgot-password">Forgot Password?</a>
                        </div>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                            <input className="w-full pl-12 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/50" id="password" placeholder="••••••••" required type="password"/>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary" type="button" onclick="togglePasswordVisibility()">
                                <span className="material-symbols-outlined" id="password-visibility-icon">visibility</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary" id="remember" type="checkbox"/>
                        <label className="text-xs font-semibold text-on-surface-variant" htmlFor="remember">Remember my organization</label>
                    </div>

                    <button className="w-full bg-secondary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Sign In as Employer
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
                        <div className="relative flex justify-center text-xs"><span className="bg-surface-container-lowest px-4 text-outline uppercase tracking-widest">or</span></div>
                    </div>

                    <button className="w-full bg-surface-container-lowest border border-secondary text-secondary py-4 rounded-lg font-bold hover:bg-secondary/5 transition-colors" type="button" onclick="window.location.href='Employer Register.html'">
                        Register Your Organization
                    </button>
                </form>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center space-y-4">
                <p className="text-xs text-on-surface-variant">
                    By signing in, you agree to our 
                    <a className="text-secondary hover:underline" href="#">Terms of Service</a> & 
                    <a className="text-secondary hover:underline" href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    </main>

    {/* Side Graphics */}
    <div className="fixed bottom-12 right-12 hidden lg:block opacity-20 pointer-events-none">
        <div className="relative w-64 h-64 border-2 border-secondary border-dashed rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-secondary border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
            <span className="material-symbols-outlined text-secondary text-8xl absolute">factory</span>
        </div>
    </div>

    

    </div>
  );
}
