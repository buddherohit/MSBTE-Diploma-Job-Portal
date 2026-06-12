import React from 'react';
import Header from '../../components/Header';

export default function Jobdetails() {
  return (
    <div className="w-full min-h-screen">
      <Header activePage="jobs" />

<main className="pt-20 pb-24 px-margin-mobile max-w-md mx-auto">
{/* Job Header Section */}
<section className="mb-stack-lg">
<div className="flex justify-between items-start mb-4">
<div className="w-16 h-16 rounded-xl border border-outline-variant p-2 bg-surface-container-lowest flex items-center justify-center">
<img alt="Thermax Logo" className="max-w-full max-h-full object-contain" data-alt="A minimalist and sharp corporate logo for a heavy engineering firm, featuring bold industrial typography. The logo is displayed on a clean white background, reflecting the stable and institutional trust of the brand. The visual style is high-contrast and professional, emphasizing industrial excellence and engineering precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y"/>
</div>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full">Urgent</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Maintenance Engineer</h2>
<div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
<span className="font-bold text-primary">Thermax Limited</span>
<span className="text-outline">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
<span>Pune, MH</span>
</div>
</div>
</section>
{/* Quick Overview Chips */}
<section className="grid grid-cols-2 gap-3 mb-stack-lg">
<div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
<span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Salary Range</span>
<span className="text-on-surface font-label-md text-label-md">₹3.5 - 4.2 LPA</span>
</div>
<div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
<span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Type</span>
<span className="text-on-surface font-label-md text-label-md">Full-time</span>
</div>
<div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant col-span-2">
<span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Branch Requirement</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-body-md">engineering</span>
<span className="text-on-surface font-label-md text-label-md">Mechanical Engineering</span>
</div>
</div>
</section>
{/* Job Description */}
<section className="mb-stack-lg">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Job Description</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                We are looking for a dedicated Diploma Mechanical Engineer to join our maintenance wing in Pune. You will be responsible for ensuring the operational efficiency of critical heavy machinery and thermal systems.
            </p>
<ul className="space-y-3">
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-on-tertiary-container mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface-variant">Execute preventive and breakdown maintenance of industrial boilers and heat exchangers.</span>
</li>
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-on-tertiary-container mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface-variant">Perform troubleshooting on hydraulic and pneumatic control systems for automated production lines.</span>
</li>
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-on-tertiary-container mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface-variant">Ensure 100% compliance with plant safety protocols and ISO standards.</span>
</li>
</ul>
</section>
{/* Eligibility & Skills */}
<section className="mb-stack-lg">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Eligibility & Skills</h3>
<div className="space-y-4">
<div>
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2 block">Education & Exp</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-lg border border-primary-fixed-dim">MSBTE Diploma</span>
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-lg border border-primary-fixed-dim">0-2 Years Experience</span>
</div>
</div>
<div>
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2 block">Technical Proficiencies</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-label-md text-label-md rounded-full">PLC</span>
<span className="px-3 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-label-md text-label-md rounded-full">Hydraulics</span>
<span className="px-3 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-label-md text-label-md rounded-full">Pneumatics</span>
<span className="px-3 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-label-md text-label-md rounded-full">AutoCAD</span>
</div>
</div>
</div>
</section>
{/* Company Info Card */}
<section className="mb-stack-lg bg-surface-container-high p-4 rounded-xl">
<h3 className="font-label-md text-label-md text-on-surface-variant mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">info</span>
                About Thermax
            </h3>
<div className="flex gap-4 items-start">
<p className="font-body-md text-body-md text-on-surface-variant flex-1">
                    Thermax Limited is a leading conglomerate providing sustainable solutions in energy and environment. Headquartered in Pune, we operate in 88 countries across the globe.
                </p>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm text-label-sm">Industrial Manufacturing</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-1">
                    Visit Site <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</section>
{/* Related Jobs Carousel */}
<section className="mb-stack-lg">
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Similar Opportunities</h3>
<div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
{/* Related Job 1 */}
<div className="min-w-[280px] bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant p-1">
<img alt="Tata Logo" className="w-full h-full object-contain" data-alt="A stylized logo for a prominent automotive manufacturing company, rendered in professional dark tones. The setting is clean and high-contrast, fitting the corporate modern aesthetic. The logo conveys strength, durability, and industrial heritage, reflecting institutional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2nEAnVDPBuaVO_W6FP6m0kLjWVQ3_b40YxthXAtG440kNxRfcTK9C0TZNes8jnkfrq87X0SMxrE3y2amMlXkh7RnyL8WkL42Zu7T58DJfCqQB2yd188KP2P_QjKsFQowbaDkN98vdqvedrr_TnKgg2YixenUX9X10AgNz_B2g1gg1nDHfzd9JN4SMCOu85Z36LOZ68XF64JRpiSmhKiS4znMgpKvUUF6Hf8YdB6UEOHbaDUGVrH4aE804gD0zPg2fjG8Pq1bUH4"/>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Production Trainee</h4>
<span className="text-on-surface-variant font-label-sm text-label-sm">Tata Motors • Chakan</span>
</div>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-primary font-label-sm text-label-sm">₹3.2 - 3.8 LPA</span>
<span className="material-symbols-outlined text-primary">chevron_right</span>
</div>
</div>
{/* Related Job 2 */}
<div className="min-w-[280px] bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant p-1">
<img alt="L&T Logo" className="w-full h-full object-contain" data-alt="A modern industrial brand mark for a multinational construction and engineering firm. The logo design is robust and corporate, emphasizing architectural precision and large-scale infrastructure capabilities. Set against a clean light-mode background with professional high-contrast utility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUssuEmg1BjBZuERyN0MLhVkWR-uui1z4nLnwNoI0TSJwIpaZFNCUHxbVqgXit-idic_kklHqy11BwWPCp00EiCtJmkYTRkBUo6YzKqyovaQkwNry_uJwTYwPlDwRxhWjRfx9-2hXy0lRzdscP7vqRlrKDB7tS0ZOHkyYuhGhHUdeln0yUECcxZ3_PDSdbze1odty0CS_9KQWN6bkxaa5rN7uzJQsJlrLw06Zq9kPatoFYuq074kACBxFgvsyL9nZ02ZP5mETGzwE"/>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Quality Engineer</h4>
<span className="text-on-surface-variant font-label-sm text-label-sm">L&T • Talegaon</span>
</div>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-primary font-label-sm text-label-sm">₹3.8 - 4.5 LPA</span>
<span className="material-symbols-outlined text-primary">chevron_right</span>
</div>
</div>
</div>
</section>
</main>
{/* Sticky Action Bar */}
<footer className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant px-margin-mobile py-4 z-50">
<div className="max-w-md mx-auto flex items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center border border-primary text-primary rounded-xl transition-all active:scale-95" id="saveJobBtn" onclick="toggleSave()">
<span className="material-symbols-outlined" id="saveIcon">bookmark</span>
</button>
<button className="flex-1 h-12 bg-secondary-container text-on-secondary-container font-headline-md text-headline-md rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
                Apply Now
                <span className="material-symbols-outlined">bolt</span>
</button>
</div>
</footer>


    </div>
  );
}
