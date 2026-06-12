import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/Header';

const jobsDatabase = {
  "thermax-maintenance": {
    id: "thermax-maintenance",
    title: "Maintenance Engineer",
    company: "Thermax Limited",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y",
    location: "Pune, MH",
    salary: "₹3.5 - 4.2 LPA",
    type: "Full-time",
    branch: "Mechanical Engineering",
    branchIcon: "engineering",
    urgent: true,
    description: "We are looking for a dedicated Diploma Mechanical Engineer to join our maintenance wing in Pune. You will be responsible for ensuring the operational efficiency of critical heavy machinery and thermal systems.",
    responsibilities: [
      "Execute preventive and breakdown maintenance of industrial boilers and heat exchangers.",
      "Perform troubleshooting on hydraulic and pneumatic control systems for automated production lines.",
      "Ensure 100% compliance with plant safety protocols and ISO standards."
    ],
    education: ["MSBTE Diploma (Mechanical)", "0-2 Years Experience"],
    skills: ["PLC", "Hydraulics", "Pneumatics", "AutoCAD"],
    aboutCompany: "Thermax Limited is a leading conglomerate providing sustainable solutions in energy and environment. Headquartered in Pune, we operate in 88 countries across the globe.",
    sector: "Industrial Manufacturing",
    website: "https://www.thermaxglobal.com"
  },
  "lt-production": {
    id: "lt-production",
    title: "Production Engineer",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUssuEmg1BjBZuERyN0MLhVkWR-uui1z4nLnwNoI0TSJwIpaZFNCUHxbVqgXit-idic_kklHqy11BwWPCp00EiCtJmkYTRkBUo6YzKqyovaQkwNry_uJwTYwPlDwRxhWjRfx9-2hXy0lRzdscP7vqRlrKDB7tS0ZOHkyYuhGhHUdeln0yUECcxZ3_PDSdbze1odty0CS_9KQWN6bkxaa5rN7uzJQsJlrLw06Zq9kPatoFYuq074kACBxFgvsyL9nZ02ZP5mETGzwE",
    location: "Mumbai, MH",
    salary: "₹3.5 - 5 LPA",
    type: "Full-time",
    branch: "Mechanical Engineering",
    branchIcon: "architecture",
    urgent: false,
    description: "L&T Construction is seeking a proactive Production Engineer to oversee and coordinate manufacturing processes at our heavy fabrication facility in Mumbai. The role involves managing production schedules and ensuring high-quality standards.",
    responsibilities: [
      "Supervise day-to-day shop floor operations and fabrication processes.",
      "Implement lean manufacturing techniques to reduce waste and cycle time.",
      "Coordinate with quality assurance teams to verify dimensional and material specifications."
    ],
    education: ["MSBTE Diploma (Mechanical)", "Fresher / 0-1 Year Experience"],
    skills: ["Production Planning", "Fabrication", "Lean Manufacturing", "Quality Control"],
    aboutCompany: "Larsen & Toubro is a major technology, engineering, construction, manufacturing and financial services conglomerate, with global operations.",
    sector: "Infrastructure & Construction",
    website: "https://www.larsentoubro.com"
  },
  "tata-design": {
    id: "tata-design",
    title: "Junior Design Engineer",
    company: "TATA Motors",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2nEAnVDPBuaVO_W6FP6m0kLjWVQ3_b40YxthXAtG440kNxRfcTK9C0TZNes8jnkfrq87X0SMxrE3y2amMlXkh7RnyL8WkL42Zu7T58DJfCqQB2yd188KP2P_QjKsFQowbaDkN98vdqvedrr_TnKgg2YixenUX9X10AgNz_B2g1gg1nDHfzd9JN4SMCOu85Z36LOZ68XF64JRpiSmhKiS4znMgpKvUUF6Hf8YdB6UEOHbaDUGVrH4aE804gD0zPg2fjG8Pq1bUH4",
    location: "Pune, MH",
    salary: "₹3 - 4.5 LPA",
    type: "Full-time",
    branch: "Mechanical Engineering",
    branchIcon: "engineering",
    urgent: false,
    description: "Join TATA Motors' Passenger Vehicles Design Division as a Junior Design Engineer. You will assist the senior design team in developing components for our next-generation electric and internal combustion vehicles.",
    responsibilities: [
      "Create and modify 3D CAD models and 2D engineering drafts using CATIA or SolidWorks.",
      "Perform basic finite element analysis (FEA) and structural simulations for component optimization.",
      "Prepare and release engineering change notes (ECNs) under standard guidelines."
    ],
    education: ["MSBTE Diploma (Mechanical/Auto)", "0-2 Years Experience"],
    skills: ["CATIA v5", "SolidWorks", "GD&T", "AutoCAD"],
    aboutCompany: "Tata Motors Limited is a leading global automobile manufacturer with a portfolio that includes a wide range of cars, utility vehicles, trucks and buses.",
    sector: "Automotive",
    website: "https://www.tatamotors.com"
  },
  "shapoorji-civil": {
    id: "shapoorji-civil",
    title: "Site Supervisor",
    company: "Shapoorji Pallonji",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Nagpur, MH",
    salary: "₹2.8 - 4 LPA",
    type: "Full-time",
    branch: "Civil Engineering",
    branchIcon: "home_work",
    urgent: false,
    description: "Shapoorji Pallonji is looking for a Civil Site Supervisor for our residential construction project in Nagpur. The candidate will supervise subcontractor labor, ensure alignment with architectural drawings, and track daily progress.",
    responsibilities: [
      "Supervise concrete pouring, reinforcement layout, and brickwork on-site.",
      "Verify site measurements against layout drawings and report discrepancies.",
      "Ensure high safety standards and proper PPE compliance on the active job site."
    ],
    education: ["MSBTE Diploma (Civil Engineering)", "Fresher / 0-2 Years Experience"],
    skills: ["Site Supervision", "Quantity Surveying", "Concrete Technology", "Safety Compliance"],
    aboutCompany: "Shapoorji Pallonji & Company Private Limited is a leading Indian business conglomerate with interests in construction, real estate, textiles, and shipping.",
    sector: "Infrastructure & Construction",
    website: "https://www.shapoorjipallonji.com"
  },
  "siemens-electrical": {
    id: "siemens-electrical",
    title: "Electrical Technician",
    company: "Siemens India",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWh8SDj52cM4qTR3DUFshfmGBaKKVRMIhB4B7lzZGwq0ad_BrrWi0BohvE9FH697BCWocbu-9cBf2SzNlOqrSyDSREp1zHtPQ70IdbiGtNo-0lXi5Ciw_tYzmVFgak7bEZIYq_Z_fFc3E5eeUiJp2X0q9MLF3JH1TX7_veduB_aCngK-eLfUYOtW_SNi0EJQ6OoSnOYiZI-wrOKpAcvZx8Tbwz1RDWlyKKGmi42PXt1Woh3bqWmrs66nCQp8A5mJdlcC6QuRPOzE",
    location: "Aurangabad, MH",
    salary: "₹2.5 - 3.5 LPA",
    type: "Full-time",
    branch: "Electrical Engineering",
    branchIcon: "bolt",
    urgent: false,
    description: "Siemens India is hiring an Electrical Technician to work in our industrial automation factory in Aurangabad. You will assemble, wire, and test medium and high-voltage electrical panels and switchgear.",
    responsibilities: [
      "Assemble electrical components onto panels according to wiring schematic diagrams.",
      "Perform continuity and insulation resistance tests on completed switchgears.",
      "Troubleshoot electrical wiring faults and replace defective control components."
    ],
    education: ["MSBTE Diploma (Electrical Engineering)", "Fresher Welcome"],
    skills: ["Wiring Diagrams", "Switchgear Assembly", "Electrical Testing", "Panel Wiring"],
    aboutCompany: "Siemens India is a technology company focused on industry, infrastructure, transport, and transmission, leading the digital transformation.",
    sector: "Industrial Automation",
    website: "https://www.siemens.co.in"
  },
  "tata-trainee": {
    id: "tata-trainee",
    title: "Junior Production Engineer",
    company: "Tata Motors Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM",
    location: "Pune, Chakan",
    salary: "₹18,000 - ₹25,000 /mo",
    type: "Full-time",
    branch: "Mechanical Engineering",
    branchIcon: "engineering",
    urgent: true,
    description: "Tata Motors is hiring Junior Production Engineers for our Chakan automotive plant near Pune. This role involves maintaining assembly line efficiency, supervising operators, and monitoring quality metrics.",
    responsibilities: [
      "Supervise assembly line operators and manage component assembly flow.",
      "Identify defects and report deviation from QA benchmarks in real-time.",
      "Ensure clean and organized workspace conforming to 5S safety principles."
    ],
    education: ["MSBTE Diploma (Mechanical)", "Fresher / 0-1 Year Experience"],
    skills: ["Assembly Line", "5S", "Quality Control", "Kaizen"],
    aboutCompany: "Tata Motors Limited is a leading global automobile manufacturer with a portfolio that includes a wide range of cars, utility vehicles, trucks and buses.",
    sector: "Automotive",
    website: "https://www.tatamotors.com"
  },
  "lt-civil": {
    id: "lt-civil",
    title: "Diploma Trainee - Civil",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Mumbai, BKC",
    salary: "₹22,000 - ₹28,000 /mo",
    type: "Full-time",
    branch: "Civil Engineering",
    branchIcon: "apartment",
    urgent: false,
    description: "Join L&T Construction as a Civil Diploma Trainee at our premium BKC site in Mumbai. Work closely with senior planning and project engineers to monitor structural progress and assist in quantity estimations.",
    responsibilities: [
      "Assist in recording daily work progress and updating construction logs.",
      "Conduct concrete slump tests and cube casting check-lists.",
      "Perform site level check using AutoLevel or Total Station instrument."
    ],
    education: ["MSBTE Diploma (Civil Engineering)", "Fresher (Batch of 2024 / 2025 / 2026)"],
    skills: ["AutoLevel", "Concrete Testing", "Excel Reporting", "Drawing Reading"],
    aboutCompany: "Larsen & Toubro is a major technology, engineering, construction, manufacturing and financial services conglomerate, with global operations.",
    sector: "Infrastructure & Construction",
    website: "https://www.larsentoubro.com"
  },
  "infosys-support": {
    id: "infosys-support",
    title: "Technical Support Associate",
    company: "Infosys BPM",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg",
    location: "Pune, Hinjewadi",
    salary: "₹15,000 /mo (Stipend)",
    type: "Internship",
    branch: "IT / Computer Eng.",
    branchIcon: "computer",
    urgent: false,
    description: "Infosys BPM is looking for young IT / Computer Diploma graduates for a Technical Support Internship in Pune. Undergo comprehensive training while assisting global clients with network and system operations troubleshooting.",
    responsibilities: [
      "Respond to internal and external technical tickets and troubleshoot basic software issues.",
      "Assist in IT infrastructure monitoring, network connectivity checks, and user access management.",
      "Document resolution procedures and maintain service level agreement standards."
    ],
    education: ["MSBTE Diploma (IT / Computer / E&TC)", "Fresher (Internship)"],
    skills: ["Basic Networking", "Linux/Windows OS", "Troubleshooting", "Active Directory"],
    aboutCompany: "Infosys BPM, the business process management subsidiary of Infosys, provides integrated services to worldwide companies.",
    sector: "Information Technology",
    website: "https://www.infosysbpm.com"
  }
};

export default function Jobdetails() {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('id') || "thermax-maintenance";
  const currentJob = jobsDatabase[jobId] || jobsDatabase["thermax-maintenance"];

  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  // Form inputs state
  const [fullName, setFullName] = useState('Rohit Budde');
  const [email, setEmail] = useState('rohit.budde45@gmail.com');
  const [enrollment, setEnrollment] = useState('2201230045');
  const [gpa, setGpa] = useState('8.92');

  useEffect(() => {
    // Check applied status
    const appliedJobs = JSON.parse(localStorage.getItem('applied_jobs') || '[]');
    setIsApplied(appliedJobs.includes(currentJob.id));
  }, [currentJob.id]);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleApply = () => {
    if (isApplied) return;
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to local storage
    const appliedJobs = JSON.parse(localStorage.getItem('applied_jobs') || '[]');
    if (!appliedJobs.includes(currentJob.id)) {
      appliedJobs.push(currentJob.id);
      localStorage.setItem('applied_jobs', JSON.stringify(appliedJobs));
    }

    // Save application details for status tracking
    const appliedDetails = JSON.parse(localStorage.getItem('applied_job_details') || '[]');
    if (!appliedDetails.some(j => j.id === currentJob.id)) {
      appliedDetails.push({
        id: currentJob.id,
        title: currentJob.title,
        company: currentJob.company,
        logo: currentJob.logo,
        location: currentJob.location,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'Under Review'
      });
      localStorage.setItem('applied_job_details', JSON.stringify(appliedDetails));
    }
    
    const mockRef = `APP-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefId(mockRef);
    setIsSubmitted(true);
    setIsApplied(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Wait for slide animation, then reset success states
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  // Find similar jobs matching branch
  const similarJobs = Object.values(jobsDatabase)
    .filter(job => job.branch === currentJob.branch && job.id !== currentJob.id);
  const displaySimilar = similarJobs.length > 0 
    ? similarJobs 
    : Object.values(jobsDatabase).filter(job => job.id !== currentJob.id);

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <Header activePage="jobs" />

      {/* Top Header Mock Action */}
      <div className="fixed top-0 left-0 right-0 z-40 glass-header border-b border-outline-variant h-16 md:hidden">
        <div className="flex justify-between items-center px-margin-mobile h-full">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <span className="font-bold text-primary font-headline-md text-base">Job Details</span>
          <Link to="/student-portal/profile" className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container overflow-hidden block">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrWh8SDj52cM4qTR3DUFshfmGBaKKVRMIhB4B7lzZGwq0ad_BrrWi0BohvE9FH697BCWocbu-9cBf2SzNlOqrSyDSREp1zHtPQ70IdbiGtNo-0lXi5Ciw_tYzmVFgak7bEZIYq_Z_fFc3E5eeUiJp2X0q9MLF3JH1TX7_veduB_aCngK-eLfUYOtW_SNi0EJQ6OoSnOYiZI-wrOKpAcvZx8Tbwz1RDWlyKKGmi42PXt1Woh3bqWmrs66nCQp8A5mJdlcC6QuRPOzE"/>
          </Link>
        </div>
      </div>

      <main className="pt-20 pb-24 px-margin-mobile max-w-md mx-auto">
        {/* Job Header Section */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-start mb-4">
            <div className="w-16 h-16 rounded-xl border border-outline-variant p-2 bg-surface-container-lowest flex items-center justify-center shadow-sm">
              <img alt={`${currentJob.company} Logo`} className="max-w-full max-h-full object-contain" src={currentJob.logo}/>
            </div>
            {currentJob.urgent && (
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full">Urgent</span>
            )}
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">{currentJob.title}</h2>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
            <span className="font-bold text-primary">{currentJob.company}</span>
            <span className="text-outline">•</span>
            <div className="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">location_on</span>
              <span>{currentJob.location}</span>
            </div>
          </div>
        </section>

        {/* Quick Overview Chips */}
        <section className="grid grid-cols-2 gap-3 mb-stack-lg">
          <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
            <span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Salary Range</span>
            <span className="text-on-surface font-label-md text-label-md">{currentJob.salary}</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
            <span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Type</span>
            <span className="text-on-surface font-label-md text-label-md">{currentJob.type}</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant col-span-2">
            <span className="text-on-surface-variant font-label-sm text-label-sm block mb-1">Branch Requirement</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-body-md">{currentJob.branchIcon}</span>
              <span className="text-on-surface font-label-md text-label-md">{currentJob.branch}</span>
            </div>
          </div>
        </section>

        {/* Job Description */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Job Description</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
            {currentJob.description}
          </p>
          <ul className="space-y-3">
            {currentJob.responsibilities.map((resp, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-on-tertiary-container mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Eligibility & Skills */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Eligibility &amp; Skills</h3>
          <div className="space-y-4">
            <div>
              <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2 block">Education &amp; Exp</span>
              <div className="flex flex-wrap gap-2">
                {currentJob.education.map((edu, i) => (
                  <span key={i} className="px-3 py-1 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-lg border border-primary-fixed-dim">
                    {edu}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2 block">Technical Proficiencies</span>
              <div className="flex flex-wrap gap-2">
                {currentJob.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-label-md text-label-md rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Card */}
        <section className="mb-stack-lg bg-surface-container-high p-4 rounded-xl">
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">info</span>
            About {currentJob.company.replace(' Ltd.', '').replace(' Limited', '')}
          </h3>
          <div className="flex gap-4 items-start">
            <p className="font-body-md text-body-md text-on-surface-variant flex-1">
              {currentJob.aboutCompany}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-center">
            <span className="text-on-surface-variant font-label-sm text-label-sm">{currentJob.sector}</span>
            <a target="_blank" rel="noopener noreferrer" href={currentJob.website} className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline">
              Visit Site <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </section>

        {/* Related Jobs Carousel */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Similar Opportunities</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
            {displaySimilar.slice(0, 3).map((job) => (
              <Link
                key={job.id}
                to={`/public/jobdetails?id=${job.id}`}
                className="min-w-[280px] bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant p-1 flex items-center justify-center">
                      <img alt={`${job.company} Logo`} className="w-full h-full object-contain" src={job.logo}/>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-label-md text-label-md text-on-surface truncate">{job.title}</h4>
                      <span className="text-on-surface-variant font-label-sm text-label-sm block truncate">{job.company} • {job.location.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 border-t border-outline-variant/30 pt-2">
                  <span className="text-primary font-label-sm text-label-sm font-bold">{job.salary}</span>
                  <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant px-margin-mobile py-4 z-50">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button 
            className={`w-12 h-12 flex items-center justify-center border border-primary rounded-xl transition-all active:scale-95 hover:bg-surface-container-low ${isSaved ? 'bg-primary text-white' : 'text-primary'}`} 
            onClick={toggleSave}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
          </button>
          
          <button 
            disabled={isApplied}
            onClick={handleApply} 
            className={`flex-1 h-12 font-headline-md text-headline-md rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
              isApplied 
                ? 'bg-tertiary-container text-on-tertiary-container opacity-80 cursor-not-allowed' 
                : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
            }`}
          >
            <span>{isApplied ? 'Applied' : 'Apply Now'}</span>
            <span className="material-symbols-outlined">{isApplied ? 'check' : 'bolt'}</span>
          </button>
        </div>
      </footer>

      {/* Apply Job Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4 sm:items-center sm:p-0 transition-opacity duration-300">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
          
          {/* Content */}
          <div className="bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl border border-outline-variant w-full max-w-md shadow-2xl relative z-10 overflow-hidden animate-slide-up">
            
            {!isSubmitted ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">Apply for {currentJob.title}</h3>
                  <button className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant" onClick={closeModal}>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                    />
                  </div>
                  
                  <div>
                    <label class="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">Enrollment No.</label>
                      <input 
                        type="text" 
                        required 
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-1">CGPA / %</label>
                      <input 
                        type="text" 
                        required 
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-body-md" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-2">Resume</label>
                    <div className="border border-dashed border-outline-variant rounded-xl p-4 bg-surface flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">description</span>
                        <div className="flex flex-col text-left">
                          <span className="text-on-surface font-label-md text-sm">Rohit_Resume.pdf</span>
                          <span className="text-on-surface-variant text-[11px]">MSBTE Verified Profile Resume</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded uppercase">Verified</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full h-12 mt-2 bg-primary text-white font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-primary/95">
                    Confirm & Submit Application
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl font-bold">check</span>
                </div>
                
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">Application Submitted!</h3>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Your application for <span className="font-bold text-primary">{currentJob.title}</span> at <span className="font-bold text-primary">{currentJob.company}</span> has been successfully sent to the hiring manager.
                </p>
                
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant w-full text-left mb-6 text-sm space-y-1 text-on-surface-variant">
                  <div><strong>Application Ref ID:</strong> <span className="font-mono text-on-surface">{refId}</span></div>
                  <div><strong>Status:</strong> <span className="text-tertiary font-bold uppercase text-xs">Applied (Under Review)</span></div>
                </div>
                
                <div className="flex gap-4 w-full">
                  <Link to="/student-portal/dashboard" onClick={closeModal} className="flex-1 h-12 border border-primary text-primary font-label-md text-sm rounded-xl flex items-center justify-center hover:bg-surface-container-low transition-colors">
                    Go to Dashboard
                  </Link>
                  <button onClick={closeModal} className="flex-1 h-12 bg-primary text-white font-label-md text-sm rounded-xl hover:bg-primary/95 transition-colors">
                    Close Details
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}
