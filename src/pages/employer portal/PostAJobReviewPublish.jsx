import React from 'react';

export default function PostAJobReviewPublish() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation */}
<nav className="bg-surface dark:bg-surface-container-low w-full top-0 sticky border-b border-outline-variant dark:border-outline flex items-center px-margin-mobile h-16 w-full z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed cursor-pointer active:opacity-70" data-icon="arrow_back">arrow_back</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Post a Job</h1>
</div>
</nav>
<main className="max-w-container-max mx-auto px-4 py-8 pb-32">
{/* Progress Indicator */}
<div className="mb-10 max-w-2xl mx-auto">
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-label-md text-primary">Final Verification</span>
<span className="font-label-md text-label-md text-primary">100% Complete</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-full transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Detailed Summary */}
<div className="lg:col-span-8 space-y-6">
{/* Job Summary Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-1">Junior Civil Engineer</h2>
<p className="text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
                                Mumbai, Maharashtra • Full-time
                            </p>
</div>
<button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:bg-surface-container-high px-3 py-2 rounded-lg transition-colors">
<span className="material-symbols-outlined text-base" data-icon="edit">edit</span>
                            Edit
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-outline-variant">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Salary Range</p>
<p className="font-label-md text-label-md text-on-surface">₹3,50,000 - ₹5,00,000 P.A.</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Experience</p>
<p className="font-label-md text-label-md text-on-surface">0 - 2 Years (Fresher)</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Application Deadline</p>
<p className="font-label-md text-label-md text-on-surface">Oct 24, 2024</p>
</div>
</div>
</section>
{/* Branch & Skills Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface">Target Audience & Skills</h3>
<button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:bg-surface-container-high px-3 py-2 rounded-lg transition-colors">
<span className="material-symbols-outlined text-base" data-icon="edit">edit</span>
                            Edit
                        </button>
</div>
<div className="space-y-6">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Target MSBTE Branches</p>
<div className="flex flex-wrap gap-2">
<span className="bg-primary-container/10 text-primary px-3 py-1.5 rounded-lg border border-primary-container/20 font-label-md text-label-md">Civil Engineering</span>
<span className="bg-primary-container/10 text-primary px-3 py-1.5 rounded-lg border border-primary-container/20 font-label-md text-label-md">Construction Technology</span>
</div>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Required Technical Skills</p>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-lg font-label-md text-label-md">AutoCAD</span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-lg font-label-md text-label-md">Site Supervision</span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-lg font-label-md text-label-md">Surveying</span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-lg font-label-md text-label-md">BIM</span>
</div>
</div>
</div>
</section>
{/* Blueprint/Description Summary */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm blueprint-pattern relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="font-label-sm text-label-sm text-outline-variant uppercase font-bold">Doc Ref: JB-2024-MUM-01</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Job Description Summary</h3>
<div className="space-y-4 max-w-2xl">
<p className="text-on-surface leading-relaxed">
                            We are seeking a motivated MSBTE Diploma graduate in Civil Engineering to join our infrastructure projects in Navi Mumbai. You will be responsible for on-site supervision, verifying technical drawings in AutoCAD, and ensuring quality control standards are met according to safety regulations.
                        </p>
<ul className="space-y-2 list-disc pl-5 text-on-surface">
<li>Oversee daily on-site construction activities and worker coordination.</li>
<li>Liaise with senior architects to interpret blueprint specifications.</li>
<li>Maintain rigorous documentation for material inventory and daily progress reports.</li>
</ul>
</div>
</section>
</div>
{/* Right Column: Company & Sticky Actions */}
<div className="lg:col-span-4 space-y-6">
{/* Company Profile Card */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm sticky top-24">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-xl border border-outline-variant flex items-center justify-center bg-white overflow-hidden p-2">
<img alt="Company Logo" className="w-full h-full object-contain" data-alt="A minimalist and corporate logo for a modern construction and infrastructure firm. The logo features clean geometric lines forming a stylized 'M' or structural bridge shape. It is presented on a crisp white background with a professional blue and slate color palette, evoking a sense of engineering stability and corporate industrial authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOPblNEqMJqwxLDSoc9BtaPKFkEyeD6zyVMoGbiMSwSEEdIqnnZOtZ-o3woRamJl_7vMZm3O_ZJsJ4zvEM0qFwc4a3dSHQ72bmM_BLiwGLtju7LKOkM_EKtUpuQeAWx5ZkNO5oLSIlt8C7vX6BjXS5rzrZnl-RVz0a-XnfhFGkRUncKYI2eIcD5ueTg6oGNpyZSsilKdOBAiqZkXJG1h77yehjwgzvj0YiB_PIjDhjuIGEok-mcmaV2WXjqdvWNl7VrYBrPKP56FU" />
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Maharashtra Infra Corp</h4>
<p className="text-label-sm text-on-surface-variant">Government Grade Contractor</p>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-label-md">
<span className="text-on-surface-variant">Industry</span>
<span className="text-on-surface">Construction</span>
</div>
<div className="flex justify-between text-label-md">
<span className="text-on-surface-variant">Company Size</span>
<span className="text-on-surface">200-500 Employees</span>
</div>
</div>
<div className="space-y-3">
<button className="w-full bg-primary text-on-primary py-3.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md">
                            Publish Job
                        </button>
<button className="w-full bg-surface-container-high text-on-surface-variant py-3.5 rounded-lg font-label-md text-label-md hover:bg-outline-variant transition-colors active:scale-95">
                            Save as Draft
                        </button>
<button className="w-full border border-outline text-on-surface-variant py-3.5 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
                            Preview as Candidate
                        </button>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant text-center">
<p className="text-label-sm text-on-surface-variant mb-2">Need help? Contact recruitment support</p>
<a className="text-primary font-label-sm text-label-sm font-bold hover:underline" href="#">support@maha-hire.gov.in</a>
</div>
</section>
</div>
</div>
</main>
{/* Mobile Bottom Navigation Shell (Predictive Match: Post Job Active) */}
<div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] bg-surface dark:bg-surface-container-lowest rounded-t-xl">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="work">work</span>
<span className="font-label-sm text-label-sm">My Jobs</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
<span className="font-label-sm text-label-sm">Post Job</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
</div>
{/* Micro-interaction Script */}


    </div>
  );
}
