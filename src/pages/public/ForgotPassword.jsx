import React from 'react';

export default function ForgotPassword() {
  return (
    <div className="w-full min-h-screen">
      
    <header className="fixed top-0 w-full h-16 flex items-center justify-between px-4 bg-surface shadow-sm z-50">
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

    <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-[440px]">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-primary mb-2">Reset Password</h1>
                <p className="text-on-surface-variant text-sm">Enter your registered email address to receive password reset instructions.</p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                <form className="space-y-6" id="forgot-password-form" onsubmit="handleForgotPassword(event)">
                    <div id="email-field">
                        <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="email">Official / Registered Email</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="mail">mail</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50" id="email" placeholder="name@domain.com" required type="email"/>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Send Reset Link
                        <span className="material-symbols-outlined" data-icon="send">send</span>
                    </button>

                    <div className="text-center mt-4">
                        <a className="text-sm font-bold text-primary hover:underline flex items-center justify-center gap-1" href="/public/student-login">
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span> Back to Login
                        </a>
                    </div>
                </form>

                <div className="hidden space-y-6 text-center py-4" id="success-state">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-on-surface">Link Sent Successfully!</h2>
                        <p className="text-on-surface-variant text-sm">We've sent a password reset link to <span className="font-bold text-on-surface" id="sent-email"></span>. Please check your inbox and spam folder.</p>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all" onclick="resetForm()">
                        Resend Email
                    </button>
                </div>
            </div>
        </div>
    </main>

    

    </div>
  );
}
