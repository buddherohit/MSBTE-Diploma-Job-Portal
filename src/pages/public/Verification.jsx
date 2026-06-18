import React from 'react';

export default function Verification() {
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

    <main className="flex-grow flex items-center justify-center px-margin-mobile py-24 relative overflow-hidden">
        {/* Atmospheric Background Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[440px] z-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-primary mb-2">Verify Your Account</h1>
                <p className="text-on-surface-variant text-sm">Enter the 6-digit verification code sent to your email to complete your registration.</p>
            </div>

            {/* Form Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                {/* Mock Code Info Banner */}
                <div className="bg-primary-fixed/40 text-on-primary-fixed-variant border border-primary/20 rounded-xl p-3 text-xs font-semibold flex items-center justify-between mb-4 shadow-sm">
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>info</span>
                        <span>Use test verification code: <strong className="text-sm font-extrabold ml-1 select-all" id="mock-code-text">123456</strong></span>
                    </span>
                </div>

                {/* Error Alert Box */}
                <div id="error-alert" className="hidden bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-lg">error</span>
                    <span id="error-message">Invalid verification code. Please try again.</span>
                </div>

                {/* OTP Input Form */}
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

                {/* Success Screen */}
                <div className="hidden space-y-6 text-center py-4" id="success-state">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto animate-bounce">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-on-surface font-headline-md">Account Verified!</h2>
                        <p className="text-on-surface-variant text-sm">Your account has been verified successfully. Redirecting you to Login in a moment...</p>
                    </div>
                    <a className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md" href="/public/student-login">
                        Go to Login
                        <span className="material-symbols-outlined">login</span>
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
