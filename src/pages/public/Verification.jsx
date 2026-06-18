import React from 'react';

export default function Verification() {
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
                <h1 className="text-3xl font-extrabold text-primary mb-2">Verify Your Account</h1>
                <p className="text-on-surface-variant text-sm">We've sent a 6-digit verification code to your email. Enter the code below to complete registration.</p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                <form className="space-y-6" id="verification-form" onsubmit="handleVerification(event)">
                    {/* OTP Box Container */}
                    <div className="flex justify-between gap-2" id="otp-container">
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                        <input className="otp-input w-12 h-14 text-center text-xl font-bold border border-outline-variant bg-surface-container-low rounded-lg outline-none transition-all" maxlength="1" required type="text" pattern="[0-9]" inputmode="numeric"/>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Verify Account
                        <span className="material-symbols-outlined" data-icon="verified">verified</span>
                    </button>

                    <div className="text-center mt-4 text-sm">
                        <p className="text-on-surface-variant">
                            Didn't receive the code? 
                            <button className="text-primary font-bold hover:underline disabled:opacity-50 disabled:no-underline" disabled id="resend-btn" onclick="resendCode()" type="button">
                                Resend in <span id="timer">59</span>s
                            </button>
                        </p>
                    </div>

                    <div className="text-center mt-2">
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
                        <h2 className="text-xl font-bold text-on-surface">Account Verified!</h2>
                        <p className="text-on-surface-variant text-sm">Your account has been verified successfully. You can now access all portal features.</p>
                    </div>
                    <a className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2" href="/public/student-login">
                        Go to Login
                        <span className="material-symbols-outlined">login</span>
                    </a>
                </div>
            </div>
        </div>
    </main>

    

    </div>
  );
}
