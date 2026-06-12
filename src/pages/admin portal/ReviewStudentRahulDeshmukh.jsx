import React from 'react';

export default function ReviewStudentRahulDeshmukh() {
  return (
    <div className="w-full min-h-screen">
      
{/* TopAppBar */}
<header className="sticky top-0 z-50 flex justify-between items-center w-full px-gutter max-w-container-max mx-auto bg-surface dark:bg-inverse-surface border-b border-outline-variant py-4">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-high rounded-full transition-colors">arrow_back</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Student Registry</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
<a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary" href="#">Verification Queue</a>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged male administrator in a clean office setting. He is wearing a charcoal suit and a light blue shirt, projecting authority and institutional stability. The background is a soft-focus office with organized bookshelves. The lighting is bright and even, consistent with a modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5SpOk5HmlHF8HWScdY1Vtkvc6JOOXtLHSG-OeDKC7RBoHVWxV92kLgowNceK8aFFjAB85bFI-f0lztkMqiCq1LX5UQgmo6lsr3et0txDG_fjFY0QMpF-f67MazP0bqvF4er5DSRMT1UklkJf85G_O9Ee5JAcNc_0qkL-juEwQaYXGfAej-jcajAkFbzgdGn2Rt-bvaAjFrK672ozpBxiwStUqPBukLGSNWjEBvvERrA_daz16TpPeyNDJmnzeTRZaR4Oqiu5tKew"/>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-gutter py-stack-lg">
<div className="flex flex-col lg:flex-row gap-stack-lg">
{/* Profile Column */}
<div className="w-full lg:w-1/3 flex flex-col gap-stack-md">
{/* Profile Header Card */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg shadow-sm">
<div className="flex flex-col items-center text-center">
<div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-primary-container mb-4">
<img className="w-full h-full object-cover" data-alt="A high-quality portrait of a young Indian male student named Rahul Deshmukh. He is smiling confidently at the camera, wearing a casual polo shirt. The lighting is warm and natural, suggesting an outdoor campus environment. The overall mood is ambitious and approachable, aligned with a modern educational platform's visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbs4fENmyA3cZYQQMlcR-AIx0xDtsrjPIYr7fxoW9Z5DjlakI6SNndDtoowCOm22Jt4xMzC7dik1eaqTy_pTXdRlZUWr72d84azW28V_C3xGQOZye16OlfuoWnHOOa9OewDnU0voDSIaAvy-03j7VK7VXkIY2KGkKr99f5c_zuhVMerr8I8RTG1yY5wpVR_NkMdVPldqx2trLniQmqZ-iwmbB_Sldml6v_kzL9_tpxYvhiccV6CuMXntKWj6tHxZ1g3EZ9jpBVSc4"/>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Rahul Deshmukh</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Mechanical Engineering Graduate</p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm">KYC Verified</span>
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-sm text-label-sm">Class of 2023</span>
</div>
</div>
<hr className="my-stack-lg border-outline-variant"/>
<div className="space-y-stack-md">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant">Account Status</span>
<div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-lg text-primary border border-outline-variant">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-md text-label-md">Active</span>
<button className="material-symbols-outlined text-[18px] ml-2 hover:bg-surface-variant rounded">more_vert</button>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Contact Information</span>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[20px] text-outline">mail</span>
<span className="font-body-md text-body-md">rahul.desh@msbte.edu.in</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[20px] text-outline">call</span>
<span className="font-body-md text-body-md">+91 98765 43210</span>
</div>
</div>
</div>
</section>
{/* Status Insights Card */}
<section className="bg-surface-container border border-outline-variant rounded-xl p-stack-md">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-stack-md">Verification Insights</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[20px]">history</span>
</div>
<div>
<p className="font-label-md text-label-md">Last Activity</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago • Updated Profile Image</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
<div>
<p className="font-label-md text-label-md">Registry Matches</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Database match: 100% (Enrollment ID)</p>
</div>
</div>
</div>
</section>
</div>
{/* Content Column */}
<div className="w-full lg:w-2/3 flex flex-col gap-stack-lg">
{/* Academic Records Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="bg-surface-container-high px-stack-lg py-3 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Academic Records</h3>
<span className="px-2 py-1 bg-primary text-white text-[10px] rounded uppercase font-bold tracking-widest">Official Sync</span>
</div>
<div className="p-stack-lg spec-sheet-grid">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div className="p-4 bg-white/60 backdrop-blur-sm border border-outline-variant rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase">Enrollment Number</span>
<p className="font-headline-md text-headline-md text-primary mt-1">2001590342</p>
</div>
<div className="p-4 bg-white/60 backdrop-blur-sm border border-outline-variant rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase">Final CGPA</span>
<p className="font-headline-md text-headline-md text-on-secondary-container mt-1">8.92 / 10.0</p>
</div>
<div className="md:col-span-2 p-4 bg-white/60 backdrop-blur-sm border border-outline-variant rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase">Institute Name</span>
<p className="font-body-lg text-body-lg text-on-surface mt-1">Government Polytechnic, Mumbai (0002)</p>
</div>
<div className="p-4 bg-white/60 backdrop-blur-sm border border-outline-variant rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase">Branch / Stream</span>
<p className="font-body-lg text-body-lg text-on-surface mt-1">Mechanical Engineering (ME)</p>
</div>
<div className="p-4 bg-white/60 backdrop-blur-sm border border-outline-variant rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase">Year of Passing</span>
<p className="font-body-lg text-body-lg text-on-surface mt-1">June 2023</p>
</div>
</div>
</div>
</section>
{/* Document Verification Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="bg-surface-container-high px-stack-lg py-3 border-b border-outline-variant">
<h3 className="font-headline-md text-headline-md text-on-surface">Digital Artifacts</h3>
</div>
<div className="p-stack-lg grid grid-cols-1 md:grid-cols-2 gap-stack-md">
{/* Doc Card 1 */}
<div className="group border border-outline-variant rounded-xl p-4 hover:border-primary hover:shadow-md transition-all bg-surface">
<div className="flex items-start gap-4">
<div className="w-12 h-16 bg-error-container rounded-md flex items-center justify-center text-error">
<span className="material-symbols-outlined text-4xl">description</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface">Diploma Certificate</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">PDF • 2.4 MB • Uploaded May 12</p>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1.5 bg-primary text-white rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">View Document</button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
</div>
</div>
{/* Doc Card 2 */}
<div className="group border border-outline-variant rounded-xl p-4 hover:border-primary hover:shadow-md transition-all bg-surface">
<div className="flex items-start gap-4">
<div className="w-12 h-16 bg-primary-fixed rounded-md flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-4xl">feed</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface">Final Year Marksheet</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">JPG • 1.1 MB • Uploaded May 12</p>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1.5 bg-primary text-white rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">View Document</button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* Verification Panel (Sticky Footer) */}
<div className="fixed bottom-0 left-0 w-full z-[60] bg-surface-container-highest border-t-2 border-primary py-4 px-gutter shadow-2xl backdrop-blur-md bg-opacity-95">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-on-primary-container rounded-lg">
<span className="material-symbols-outlined text-primary-container">pending_actions</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Awaiting Final Review</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Reviewing as <strong>Registry Director</strong></p>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-3">
<button className="px-6 py-3 bg-error text-white rounded-lg font-label-md text-label-md hover:bg-red-700 active:scale-95 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">report</span>
                    Flag Profile
                </button>
<button className="px-6 py-3 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                    Request Clarification
                </button>
<button className="px-8 py-3 bg-primary text-white rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20" onclick="alert('Student Credentials Approved Successfully')">
<span className="material-symbols-outlined text-[20px]">verified</span>
                    Approve Credentials
                </button>
</div>
</div>
</div>
{/* BottomNavBar (Mobile Only) */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-2 pt-2 md:hidden bg-surface dark:bg-inverse-surface border-t border-outline-variant shadow-lg">
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
<span className="font-label-sm text-label-sm">Verify</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
<span className="material-symbols-outlined">folder_shared</span>
<span className="font-label-sm text-label-sm">Directory</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
<span className="material-symbols-outlined">more_horiz</span>
<span className="font-label-sm text-label-sm">More</span>
</div>
</nav>


    </div>
  );
}
