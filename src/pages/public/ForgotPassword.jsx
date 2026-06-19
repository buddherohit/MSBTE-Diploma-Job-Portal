// MANUAL_JSX_FILE
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="w-full min-h-screen">
      
    {/* Top Navigation */}
    <header className="fixed top-0 w-full h-16 flex items-center justify-between px-margin-mobile bg-surface shadow-sm z-50">
        <Link className="flex items-center gap-2 cursor-pointer" to="/">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
            </div>
            <div className="flex flex-col leading-none text-left">
                <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
            </div>
        </Link>
    </header>

    <main className="flex-grow flex items-center justify-center px-margin-mobile py-24 relative overflow-hidden">
        {/* Atmospheric Background Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[440px] z-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-primary mb-2">Reset Password</h1>
                <p className="text-on-surface-variant text-sm" id="page-subtitle">Enter your registered email address to receive password reset instructions.</p>
            </div>

            {/* Form Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                {/* Error Alert Box */}
                <div id="error-alert" className="hidden bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-lg">error</span>
                    <span id="error-message">Error message</span>
                </div>

                {/* STEP 1: Enter Email */}
                <form className="space-y-6" id="forgot-password-form" onsubmit="handleForgotPassword(event)">
                    <div>
                        <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="email">Official / Registered Email</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="mail">mail</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50 text-body-md" id="email" placeholder="name@domain.com" required type="email"/>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Send Reset Link
                        <span className="material-symbols-outlined" data-icon="send">send</span>
                    </button>

                    <div className="text-center mt-4">
                        <Link className="text-sm font-bold text-primary hover:underline flex items-center justify-center gap-1" to="/public/student-login">
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span> Back to Login
                        </Link>
                    </div>
                </form>

                {/* STEP 2: Link Sent / Simulation Switcher */}
                <div className="hidden space-y-6 text-center py-2" id="success-state">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-on-surface font-headline-md">Link Sent Successfully!</h2>
                        <p className="text-on-surface-variant text-sm">We've sent a password reset link to <span className="font-bold text-on-surface" id="sent-email"></span>.</p>
                    </div>
                    
                    <div className="bg-primary-fixed/40 text-on-primary-fixed border border-primary/20 rounded-xl p-4 text-xs space-y-3">
                        <p className="font-semibold text-center">🔧 Testing Simulation Mode</p>
                        <p>In production, clicking the email link opens the reset page. Click below to simulate that action and reset your password right now.</p>
                        <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:brightness-110 transition-all shadow-sm" onclick="showResetStep()">
                            Simulate Reset Link Click
                        </button>
                    </div>

                    <div className="flex justify-between items-center text-sm pt-2">
                        <button className="text-outline font-semibold hover:text-primary transition-colors" onclick="resetForm()">
                            Change Email
                        </button>
                        <Link className="text-primary font-bold hover:underline" to="/public/student-login">
                            Back to Login
                        </Link>
                    </div>
                </div>

                {/* STEP 3: Enter New Password */}
                <form className="hidden space-y-6" id="reset-password-form" onsubmit="handleResetPassword(event)">
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-on-surface" htmlFor="new-password">New Password</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50 text-body-md" id="new-password" placeholder="••••••••" required type="password"/>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-on-surface" htmlFor="confirm-password">Confirm Password</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock_reset</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50 text-body-md" id="confirm-password" placeholder="••••••••" required type="password"/>
                        </div>
                    </div>

                    <button className="w-full bg-secondary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                        Update Password
                        <span className="material-symbols-outlined" data-icon="save">save</span>
                    </button>
                </form>

                {/* STEP 4: Reset Success */}
                <div className="hidden space-y-6 text-center py-4" id="success-reset-state">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>check_circle</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-on-surface">Password Updated!</h2>
                        <p className="text-on-surface-variant text-sm">Your password has been changed successfully. Redirecting to Login page...</p>
                    </div>
                    <Link className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all block" to="/public/student-login">
                        Go to Login
                    </Link>
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
