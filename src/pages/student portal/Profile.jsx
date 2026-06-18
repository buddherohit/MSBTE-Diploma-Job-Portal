import React from 'react';

export default function Profile() {
  return (
    <div className="w-full min-h-screen">
      
{/* Top Navigation Shell */}
<header className="flex justify-between items-center px-margin-mobile w-full max-w-container-max mx-auto z-50 sticky top-0 bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline h-16">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
</button>
<h1 className="font-headline-lg text-headline-lg font-extrabold text-primary dark:text-primary-fixed">Edit Profile</h1>
</div>
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-label-md hover:brightness-110 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">save</span>
<span>Save Changes</span>
</button>
</header>
<main className="max-w-[800px] mx-auto px-4 py-8 mb-24 lg:mb-12">
<form className="flex flex-col gap-stack-lg">
{/* Section 1: Basic Info */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Basic Information</h2>
</div>
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="relative group mx-auto md:mx-0">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high bg-surface-container">
<img alt="Profile Photo" className="w-full h-full object-cover" data-alt="A professional headshot of a young engineering student in a clean white studio. He is wearing a modern navy blue polo shirt, looking confident and approachable. The lighting is soft and even, highlighting clear facial features with a bright, professional light-mode aesthetic consistent with industrial modern design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeiXd62_0_iGQdGlJkgqEV8ycLJ7Sp5g_Y7XiDqyqgt68RFo94GzC__cpWyjy-cZPGDxh5OcoRcIrt8dqbqlS-eqP_ycYjKmQYfPsm9NCFX_80y2coOhjgd6HPQ4WQV1c1KvV9wkQQcGV7Gm9v4PrDfHqsoc2-lB4xZL4S6vnpsFDuvX4W3Eu2urgEBUSSZnxmCzPmtQZl1ijhr-gzPsxRjTyU73LtE7fkY2ZJjnpGWHXD2yttZx0WE94BhYvo94FuMwK0lHh8zcY"/>
</div>
<label className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">photo_camera</span>
<input className="hidden" type="file"/>
</label>
</div>
<div className="flex-1 w-full grid grid-cols-1 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Full Name</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="text" value="Aditya Ahire"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Branch</label>
<select className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all">
<option>Mechanical Engineering</option>
<option>Electrical Engineering</option>
<option>Civil Engineering</option>
<option>Computer Technology</option>
<option>Electronics & Telecommunication</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">College Name</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" value="Government Polytechnic, Mumbai"/>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: Academic Details */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">school</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Academic Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">MSBTE Enrollment No.</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" type="text" value="2100120045"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Passing Year</label>
<select className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none">
<option>2023</option>
<option selected="">2024</option>
<option>2025</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Aggregate % / GPA</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" type="text" value="88.40%"/>
</div>
</div>
</section>
{/* Section 3: Resume Upload */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">description</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Resume</h2>
</div>
<div className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface-container-lowest">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#DBEAFE] text-primary flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-[32px]">picture_as_pdf</span>
</div>
<div>
<p className="font-label-md text-on-surface">Resume_Aditya_Ahire.pdf</p>
<p className="text-label-sm text-on-surface-variant">Uploaded on Oct 12, 2023 • 1.2 MB</p>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-primary text-primary px-4 py-2 rounded-lg font-label-sm hover:bg-primary-fixed transition-colors" type="button">View</button>
<button className="flex-1 md:flex-none bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm hover:brightness-110 transition-colors" type="button">Replace</button>
</div>
</div>
</section>
{/* Section 4: Technical Skills */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">handyman</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Technical Skills</h2>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2">
                        AutoCAD <button className="hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
</span>
<span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2">
                        PLC <button className="hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
</span>
<span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2">
                        Hydraulics <button className="hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
</span>
<span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2">
                        Pneumatics <button className="hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
</span>
<span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-label-sm flex items-center gap-2">
                        Maintenance <button className="hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Add a new skill (e.g. SolidWorks)" type="text"/>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md" type="button">Add</button>
</div>
</section>
{/* Section 5: MSBTE Industrial Internship & Training */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-3xl">badge</span>
<h2 className="font-headline-md text-headline-md text-on-surface">MSBTE Industrial Internship & Training</h2>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold font-label-sm">Compulsory Module</span>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Training Type</label>
<select className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all">
<option selected>Compulsory 6-Week Summer Training</option>
<option>Semester-long Industry Project</option>
<option>Optional Industrial Internship</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Company Name</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" type="text" value="Tata Motors Ltd."/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Duration / Period</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" type="text" value="June 2023 - Aug 2023"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">College Internal Guide</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Prof. R. A. Patil" type="text" value="Prof. S. R. Mane"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Industry Supervisor Contact</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Name or email" type="text" value="Mr. Vijay Shinde (Plant Manager)"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-on-surface-variant">Project Title & Summary</label>
<input className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none mb-2" type="text" value="Optimization of Lubrication Schedules for Hydraulic Presses"/>
<textarea className="w-full bg-[#F1F5F9] border-[#CBD5E1] rounded-lg px-4 py-2 text-body-md focus:ring-2 focus:ring-primary outline-none h-24" placeholder="Brief description of your role and projects...">Worked on the assembly line for passenger vehicles. Assisted in quality control audits and optimized the lubrication schedule for hydraulic presses, reducing downtime by 5%.</textarea>
</div>
<div className="border-2 border-dashed border-outline-variant rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-lowest">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-2xl">verified</span>
<div>
<p className="font-label-sm text-on-surface font-semibold">MSBTE Training Certificate</p>
<p className="text-xs text-on-surface-variant">Tata_Motors_Training_Certificate.pdf</p>
</div>
</div>
<button className="text-primary hover:underline text-sm font-bold" type="button">Change File</button>
</div>
</div>
</section>
{/* Section 6: Links */}
<section className="glass-card p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">link</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Links</h2>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center gap-4 bg-[#F1F5F9] rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary transition-all">
<span className="material-symbols-outlined text-[#0077B5]">language</span>
<input className="flex-1 bg-transparent border-none py-3 outline-none text-body-md" placeholder="LinkedIn URL" type="url" value="https://linkedin.com/in/adityahire"/>
</div>
<div className="flex items-center gap-4 bg-[#F1F5F9] rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary transition-all">
<span className="material-symbols-outlined text-on-surface">public</span>
<input className="flex-1 bg-transparent border-none py-3 outline-none text-body-md" placeholder="Portfolio URL" type="url" value="https://adityaportfolio.dev"/>
</div>
</div>
</section>
</form>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface dark:bg-on-background shadow-md rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">work</span>
<span className="font-label-sm text-label-sm">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Alerts</span>
</a>
</nav>


    </div>
  );
}
