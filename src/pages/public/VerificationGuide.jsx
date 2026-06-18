// MANUAL_JSX_FILE
import React from 'react';
import { Link } from 'react-router-dom';

export default function VerificationGuide() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background blueprint-pattern">
      {/* Mobile Drawer Toggle Checkbox */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Drawer Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm hidden peer-checked:block lg:hidden">
        <label htmlFor="mobile-menu-toggle" className="absolute inset-0 cursor-default"></label>
      </div>

      {/* Mobile Drawer Content */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 translate-x-full transition-transform duration-300 peer-checked:translate-x-0 lg:hidden">
        {/* Drawer Header */}
        <div className="flex justify-between items-center pb-6 border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="font-headline-md text-[16px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
              <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
            </div>
          </div>
          {/* Close button */}
          <label htmlFor="mobile-menu-toggle" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </label>
        </div>
        
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-5 py-8 text-left">
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/">Home</Link>
          <Link className="text-body-md font-bold text-primary transition-colors duration-150" to="/public/verification-guide">Verification Guide</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs">Find Jobs</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/industry">Companies</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/find-diploma-jobs?type=internship">Internships</Link>
          <Link className="text-body-md font-semibold text-on-surface-variant hover:text-primary transition-colors duration-150" to="/public/contact">Contact</Link>
        </nav>
        
        {/* Drawer Action Buttons */}
        <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-outline-variant">
          <Link className="w-full text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-sm" to="/public/student-login">Login</Link>
          <Link className="w-full text-center bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-body-md transition-all duration-200 active:scale-95 shadow-md" to="/public/create-account">Register</Link>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-outline-variant">
        <div className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-3">
            <label htmlFor="mobile-menu-toggle" className="material-symbols-outlined text-primary cursor-pointer lg:hidden text-2xl select-none">menu</label>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-headline-md text-[20px] font-extrabold text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[9px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <Link className="text-on-surface-variant font-label-md hover:text-primary transition-colors" to="/">Portal Home</Link>
            <Link className="text-primary font-bold font-label-md transition-colors" to="/public/verification-guide">Verification Guide</Link>
            <Link className="text-on-surface-variant font-label-md hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link>
            <Link className="text-on-surface-variant font-label-md hover:text-primary transition-colors" to="/public/contact">Contact</Link>
            <Link to="/public/student-login" className="bg-primary text-white px-6 py-2 rounded-lg font-label-md transition-transform active:scale-95 hover:bg-primary/90">
              Student Login
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-16 px-margin-mobile flex flex-col items-center">
        <div className="w-full max-w-container-max space-y-12">
            
            {/* Hero Section */}
            <div className="text-center space-y-4 max-w-3xl mx-auto py-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    Industrial Authenticity
                </div>
                <h1 class="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                    Employer Verification Guide
                </h1>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                    To maintain a safe, high-trust network for polytechnic diploma students in Maharashtra, MSBTE Jobs Portal requires all corporate accounts to undergo a brief verification process before publishing jobs.
                </p>
            </div>

            {/* Verification Benefits (Why verify?) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 rounded-2xl border border-outline-variant text-left space-y-3 bg-surface-container-lowest">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                    <h3 className="font-bold text-lg text-primary">Student Data Protection</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                        Protects student profiles, portfolios, and contact information from scrapers and unauthorized third parties.
                    </p>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-outline-variant text-left space-y-3 bg-surface-container-lowest">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    </div>
                    <h3 class="font-bold text-lg text-secondary">Verified Recruiter Badge</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                        Your company gains a verified mark, increasing application rates from top-tier diploma students by up to 80%.
                    </p>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-outline-variant text-left space-y-3 bg-surface-container-lowest">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                    </div>
                    <h3 className="font-bold text-lg text-green-700">Direct Campus Link</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                        Unlocks direct coordination channels with polytechnic placement officers and coordinates walk-in drives.
                    </p>
                </div>
            </div>

            {/* Step-by-Step Verification Process */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm space-y-8 text-left">
                <div>
                    <h2 className="text-2xl font-bold text-primary font-headline-md">Corporate Verification Process</h2>
                    <p className="text-on-surface-variant text-sm mt-1">Our simple step-by-step workflow detailing how admin audits are conducted</p>
                </div>

                {/* Visual Timeline */}
                <div className="relative pl-6 md:pl-0 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 pt-4">
                    {/* Connective Line (for Desktop) */}
                    <div className="absolute top-[52px] left-8 right-8 h-[2px] bg-outline-variant hidden md:block z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 space-y-4 flex flex-col items-start md:items-center text-left md:text-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
                            1
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-on-surface text-base">Corporate Register</h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed max-w-[220px] mx-auto">
                                Submit your company name, industry, contact HR name, official email, and MIDC/registration ID.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 space-y-4 flex flex-col items-start md:items-center text-left md:text-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
                            2
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-on-surface text-base">Admin Audit</h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed max-w-[220px] mx-auto">
                                The MSBTE portal admin team reviews details and checks government databases (MIDC, MCA, MSME) for validity.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 space-y-4 flex flex-col items-start md:items-center text-left md:text-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
                            3
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-on-surface text-base">Verification Approval</h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed max-w-[220px] mx-auto">
                                If authentic, the admin approves your account, and a verification tick-mark badge is added to your profile.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative z-10 space-y-4 flex flex-col items-start md:items-center text-left md:text-center">
                        <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-white">
                            4
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-secondary text-base">Unrestricted Access</h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed max-w-[220px] mx-auto">
                                Start posting jobs, search student databases, access resume details, and coordinate campus selections.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accepted Verification Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left">
                <div class="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-primary font-headline-md">Accepted Supporting Documents</h2>
                        <p className="text-on-surface-variant text-sm mt-1">To expedite approval, please have one of these legal documents ready during verification.</p>
                    </div>
                    <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-surface-container border-b border-outline-variant font-bold text-primary">
                                <tr>
                                    <th className="p-4">Document Type</th>
                                    <th className="p-4">Authority</th>
                                    <th className="p-4">Key Verified Info</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant text-on-surface-variant">
                                <tr>
                                    <td class="p-4 font-bold text-on-surface">MIDC Lease / Allotment</td>
                                    <td className="p-4">Govt of Maharashtra</td>
                                    <td className="p-4">Plot Allotment & Company Name</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-bold text-on-surface">Certificate of Incorporation</td>
                                    <td className="p-4">Ministry of Corporate Affairs (MCA)</td>
                                    <td className="p-4">CIN Number & Company Name</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-bold text-on-surface">Udyam Registration Certificate</td>
                                    <td className="p-4">Ministry of MSME</td>
                                    <td className="p-4">Udyam ID & Industrial Sector</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-bold text-on-surface">GSTIN Certificate</td>
                                    <td className="p-4">Dept of Revenue, Govt of India</td>
                                    <td className="p-4">GST Number & Legal Name</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Admin Approval Criteria */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-primary font-headline-md">Admin Approval Criteria</h2>
                        <p className="text-on-surface-variant text-sm mt-1">What our administrative team checks during screening:</p>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-green-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            <div>
                                <span className="font-bold text-on-surface text-sm block">Company Legitimacy</span>
                                <span className="text-xs text-on-surface-variant">Active registration details checked directly on national and state corporate databases.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-green-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            <div>
                                <span className="font-bold text-on-surface text-sm block">Official HR / Corporate Email Domain</span>
                                <span className="text-xs text-on-surface-variant">Verification emails must be sent from a corporate domain (e.g., hr@company.com). Registrations via Gmail/Yahoo are subjected to additional documentation audits.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-green-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            <div>
                                <span className="font-bold text-on-surface text-sm block">Physical Workplace Presence</span>
                                <span class="text-xs text-on-surface-variant">Verification of physical industrial setups, factories, offices, or technology spaces within Maharashtra.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-6 text-left">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-primary font-headline-md">Verification Frequently Asked Questions</h2>
                    <p className="text-on-surface-variant text-sm mt-1">Common queries from industrial and corporate recruitment partners</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-2">
                        <h4 className="font-bold text-primary text-base">How long does the verification take?</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            Verification audits are typically completed by the MSBTE placement board admin team within 24 to 48 business hours after registration.
                        </p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-2">
                        <h4 class="font-bold text-primary text-base">What if my company lacks MIDC lease documents?</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            If you are not located in an MIDC zone, you can submit an MCA Certificate of Incorporation, MSME registration, or a GST certificate showing your Maharashtra address.
                        </p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-2">
                        <h4 class="font-bold text-primary text-base">Why are free email domains audited heavily?</h4>
                        <p class="text-sm text-on-surface-variant leading-relaxed">
                            To protect diploma students from fraudulent job postings, accounts registered using generic emails (Gmail, Outlook) must submit additional registration proof and face manual audits.
                        </p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant space-y-2">
                        <h4 class="font-bold text-primary text-base">Who should I contact if verification is delayed?</h4>
                        <p class="text-sm text-on-surface-variant leading-relaxed">
                            You can reach out to the MSBTE placement coordination desk via the Contact Us form, or email verification@msbtejobs.org with your company registration ID.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 text-left relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="space-y-2 relative z-10 max-w-xl">
                    <h3 className="text-2xl font-bold font-headline-md">Ready to Hire Diploma Talent?</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                        Set up your organization profile and get verified to access profiles from Maharashtra's leading diploma institutes today.
                    </p>
                </div>
                <Link className="relative z-10 bg-white text-primary hover:bg-surface-container-low px-8 py-4 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-md flex items-center gap-2" to="/public/employer-register">
                    Register Company
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </Link>
            </div>

        </div>
      </main>
    </div>
  );
}
