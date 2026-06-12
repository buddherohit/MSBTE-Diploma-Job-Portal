import React from 'react';

export default function InterviewFeedbackForm() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="sticky top-0 z-40 w-full flex justify-between items-center px-gutter py-4 bg-surface-bright/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<button className="hover:bg-surface-container dark:hover:bg-surface-container-high rounded-full p-2 transition-opacity active:opacity-80">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 className="text-headline-md font-headline-md font-extrabold text-primary">Interview Feedback</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
<img alt="Admin Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a senior corporate executive in a crisp white shirt and navy blazer. The lighting is clean and bright, characteristic of a high-end office environment. The background is softly blurred with tones of blue and grey, maintaining a corporate and authoritative aesthetic consistent with the Maharashtra industrial sector's elite professional standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCWW5BobC2eF5o76BZbV_7HkMp8jQVSW3JDQHpWcLIODjwY8wlcSdVlcDsHN7UFBnYbLAWGaXoEXuSbYmMWXQZDNsZPvL3j2J-OMBAnWC5lOJgMa2K3dFSfuyITbPeq01Mp_J7L_vmmA3y2ENomXIvDxBlxUOqTsIhrkHv54mjGRvoD4Ooc8gQRRC85WpM_FQrIELkf_lmiPZzaerGkUPCmAi3dxQNP8fG57bOgTY8lKGEytBz1el90LSrmsyg3glXioHa0ZZw0kc"/>
</div>
</header>
<main className="max-w-md mx-auto px-margin-mobile py-stack-md pb-32">
{/* Candidate Summary Card */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-stack-md shadow-sm">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-lg overflow-hidden border border-outline-variant">
<img alt="Aditya Ahire" className="w-full h-full object-cover" data-alt="A close-up professional portrait of a young Indian male mechanical engineer, Aditya Ahire, wearing a light blue formal shirt. He has a confident and friendly expression, set against a modern, bright office background with subtle industrial textures. The image uses soft, natural lighting to emphasize reliability and technical competence, fitting the high-energy job seeker aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHyAwnbVtI7lxk43UmUggR9n-dUR1ddLS6om5jMpy35lxhEHQOjHi3j6q7-o-TfPHhNXvAKQturDl2d0lAVJumbbHMaHzcHXcPZWc324C9dmtd-zo9o1q4eGtKq_ediVolC7xAwy4G6SGbMz_oXHDBP4cBrRTb9tSG-bUTZ1G-HPhopdrSFCQo_tceSe79mGj0Ec0x7YHIA2Uc5lZBeJYepiITzs4ksfRC_9gVrmvts9A7XdONoHvuGHbfwvBSo5GFASQISLECIIg"/>
</div>
<div>
<h2 className="text-headline-md font-headline-md text-on-surface">Aditya Ahire</h2>
<p className="text-body-md text-on-surface-variant font-medium">Mechanical Engineer</p>
<div className="flex items-center gap-1 text-label-md text-primary mt-1">
<span className="material-symbols-outlined text-[16px]">business</span>
<span>Thermax Limited</span>
</div>
</div>
</div>
</section>
{/* Technical Skills Rating */}
<section className="mb-stack-lg">
<h3 className="text-label-md font-label-md text-outline uppercase tracking-wider mb-4">Technical Skills</h3>
<div className="space-y-6">
{/* Skill 1 */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-body-md font-semibold text-on-surface">Technical Knowledge</label>
<span className="text-label-md font-bold text-secondary" id="tech-rating-val">4.0</span>
</div>
<div className="flex gap-2">
<button className="rating-btn-tech group" onclick="setRating('tech', 1)"><span className="material-symbols-outlined star-active text-3xl">star</span></button>
<button className="rating-btn-tech group" onclick="setRating('tech', 2)"><span className="material-symbols-outlined star-active text-3xl">star</span></button>
<button className="rating-btn-tech group" onclick="setRating('tech', 3)"><span className="material-symbols-outlined star-active text-3xl">star</span></button>
<button className="rating-btn-tech group" onclick="setRating('tech', 4)"><span className="material-symbols-outlined star-active text-3xl">star</span></button>
<button className="rating-btn-tech group" onclick="setRating('tech', 5)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
</div>
</div>
{/* Skill 2 */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-body-md font-semibold text-on-surface">Problem Solving</label>
<span className="text-label-md font-bold text-secondary" id="problem-rating-val">0.0</span>
</div>
<div className="flex gap-2">
<button className="rating-btn-problem group" onclick="setRating('problem', 1)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-problem group" onclick="setRating('problem', 2)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-problem group" onclick="setRating('problem', 3)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-problem group" onclick="setRating('problem', 4)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-problem group" onclick="setRating('problem', 5)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
</div>
</div>
</div>
</section>
{/* Soft Skills Rating */}
<section className="mb-stack-lg">
<h3 className="text-label-md font-label-md text-outline uppercase tracking-wider mb-4">Soft Skills</h3>
<div className="space-y-6">
{/* Skill 3 */}
<div className="flex flex-col gap-2">
<label className="text-body-md font-semibold text-on-surface">Communication</label>
<div className="flex gap-2">
<button className="rating-btn-comm group" onclick="setRating('comm', 1)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-comm group" onclick="setRating('comm', 2)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-comm group" onclick="setRating('comm', 3)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-comm group" onclick="setRating('comm', 4)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-comm group" onclick="setRating('comm', 5)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
</div>
</div>
{/* Skill 4 */}
<div className="flex flex-col gap-2">
<label className="text-body-md font-semibold text-on-surface">Teamwork</label>
<div className="flex gap-2">
<button className="rating-btn-team group" onclick="setRating('team', 1)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-team group" onclick="setRating('team', 2)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-team group" onclick="setRating('team', 3)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-team group" onclick="setRating('team', 4)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
<button className="rating-btn-team group" onclick="setRating('team', 5)"><span className="material-symbols-outlined text-outline-variant text-3xl">star</span></button>
</div>
</div>
</div>
</section>
{/* Detailed Comments */}
<section className="mb-stack-lg">
<label className="block text-body-md font-semibold text-on-surface mb-2" htmlFor="notes">Interview Notes</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md placeholder:text-outline" id="notes" placeholder="Enter detailed observations about the candidate's performance..." rows="5"></textarea>
</section>
{/* Final Recommendation */}
<section className="mb-stack-lg">
<h3 className="text-body-md font-semibold text-on-surface mb-3">Final Recommendation</h3>
<div className="grid grid-cols-2 gap-2">
<button className="rec-btn flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl bg-surface-container-lowest transition-all hover:bg-surface-container-high group" onclick="selectRec(this)">
<span className="material-symbols-outlined text-tertiary-container mb-1 group-[.active]:font-fill">check_circle</span>
<span className="text-label-sm font-bold">Strong Hire</span>
</button>
<button className="rec-btn flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl bg-surface-container-lowest transition-all hover:bg-surface-container-high group active" onclick="selectRec(this)">
<span className="material-symbols-outlined text-primary mb-1 group-[.active]:font-fill" style={{ fontVariationSettings: '\'FILL\' 1' }}>thumb_up</span>
<span className="text-label-sm font-bold">Hire</span>
</button>
<button className="rec-btn flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl bg-surface-container-lowest transition-all hover:bg-surface-container-high group" onclick="selectRec(this)">
<span className="material-symbols-outlined text-secondary-container mb-1">help</span>
<span className="text-label-sm font-bold">Maybe</span>
</button>
<button className="rec-btn flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl bg-surface-container-lowest transition-all hover:bg-surface-container-high group" onclick="selectRec(this)">
<span className="material-symbols-outlined text-error mb-1">cancel</span>
<span className="text-label-sm font-bold">Reject</span>
</button>
</div>
</section>
</main>
{/* Action Buttons (Bottom Docked) */}
<div className="fixed bottom-0 left-0 right-0 p-4 bg-surface-container-lowest shadow-[0_-4px_12px_rgba(15,23,42,0.08)] flex gap-3 z-50">
<button className="flex-1 border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary-fixed/20 transition-all active:scale-95">
            Save Draft
        </button>
<button className="flex-[2] bg-secondary-container text-on-secondary-fixed font-bold py-3 rounded-xl shadow-md hover:opacity-90 transition-all active:scale-95">
            Submit Feedback
        </button>
</div>


    </div>
  );
}
