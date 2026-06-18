// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getCurrentUser } from '../../utils/auth';
import { getJobById, applyToJob, getSavedJobIds, toggleSaveJobId, getJobs } from '../../utils/db';

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
  const currentJob = getJobById(jobId) || getJobs()[0];

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
    const user = getCurrentUser();
    if (user) {
      setFullName(user.name || '');
      setEmail(user.email || '');
      setEnrollment(user.enrollment || '');
    }
    
    if (currentJob) {
      const savedIds = getSavedJobIds();
      setIsSaved(savedIds.includes(currentJob.id));
      
      const appliedDetails = JSON.parse(localStorage.getItem('msbte_applications') || '[]');
      const userEmail = user ? user.email : email;
      const alreadyApplied = appliedDetails.some(
        app => app.jobId === currentJob.id && app.studentEmail.toLowerCase() === userEmail.toLowerCase()
      );
      setIsApplied(alreadyApplied);
    }
  }, [currentJob?.id]);

  const toggleSave = () => {
    if (!currentJob) return;
    toggleSaveJobId(currentJob.id);
    setIsSaved(!isSaved);
  };

  const handleApply = () => {
    if (isApplied) return;
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentJob) return;

    const user = getCurrentUser();
    const app = applyToJob({
      jobId: currentJob.id,
      jobTitle: currentJob.title,
      company: currentJob.company,
      logo: currentJob.logo,
      location: currentJob.location,
      studentEmail: user ? user.email : email,
      studentName: fullName,
      enrollment,
      gpa
    });

    setRefId(app.id);
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
  const similarJobs = getJobs()
    .filter(job => job.branch === (currentJob ? currentJob.branch : '') && job.id !== (currentJob ? currentJob.id : ''));
  const displaySimilar = similarJobs.length > 0 
    ? similarJobs 
    : getJobs().filter(job => job.id !== (currentJob ? currentJob.id : ''));

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <Header activePage="jobs" />

      <main className="pt-8 pb-32 px-margin-mobile max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job Details & Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Job Header Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="w-20 h-20 rounded-xl border border-outline-variant p-3 bg-white flex items-center justify-center shadow-sm">
                  <img alt={`${currentJob.company} Logo`} className="max-w-full max-h-full object-contain" src={currentJob.logo}/>
                </div>
                {currentJob.urgent && (
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-xs rounded-full">Urgent</span>
                )}
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold leading-tight">{currentJob.title}</h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-on-surface-variant font-body-md">
                <span className="font-bold text-primary text-lg">{currentJob.company}</span>
                <span className="text-outline">•</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>{currentJob.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Details Grid (Mobile and Tablet only - hides on lg) */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Salary Range</span>
                <span className="text-on-surface font-bold text-lg">{currentJob.salary}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Job Type</span>
                <span className="text-on-surface font-bold text-lg">{currentJob.type}</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant col-span-2 text-left">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider block mb-1">Branch Requirement</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-primary">{currentJob.branchIcon}</span>
                  <span className="text-on-surface font-bold">{currentJob.branch}</span>
                </div>
              </div>
            </div>

            {/* Job Description Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4 pb-2 border-b border-outline-variant/60">Job Description</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {currentJob.description}
              </p>
              <h4 className="font-bold text-on-surface mb-3 text-base">Key Responsibilities:</h4>
              <ul className="space-y-4">
                {currentJob.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-on-tertiary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface-variant leading-normal">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility & Skills Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm text-left">
              <h3 className="font-headline-md text-xl font-bold text-primary mb-4 pb-2 border-b border-outline-variant/60">Eligibility &amp; Skills</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-3 block">Education &amp; Experience</span>
                  <div className="flex flex-wrap gap-2">
                    {currentJob.education.map((edu, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed font-semibold text-sm rounded-lg border border-primary-fixed-dim shadow-sm">
                        {edu}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider mb-3 block">Technical Proficiencies</span>
                  <div className="flex flex-wrap gap-2">
                    {currentJob.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-2 bg-[#DBEAFE] text-[#1E40AF] font-bold text-sm rounded-full shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Similar Opportunities Section */}
            <div className="text-left">
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-6 px-2">Similar Opportunities</h3>
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
            </div>
          </div>

          {/* Right Column: Sticky Action & Employer Brief (Desktop only) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 hidden lg:block">
            
            {/* Apply & Save Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-md text-left flex flex-col gap-5">
              <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/60">
                <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">Estimated Package</span>
                <span className="text-3xl font-extrabold text-primary">{currentJob.salary}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Job Type</span>
                  <span className="font-bold text-on-surface">{currentJob.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Location</span>
                  <span className="font-bold text-on-surface">{currentJob.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Required Branch</span>
                  <span className="font-bold text-primary text-right flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">{currentJob.branchIcon}</span>
                    {currentJob.branch.split(' ')[0]}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/60">
                <button 
                  disabled={isApplied}
                  onClick={handleApply} 
                  className={`w-full h-12 font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
                    isApplied 
                      ? 'bg-tertiary-container text-on-tertiary-container opacity-80 cursor-not-allowed' 
                      : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
                  }`}
                >
                  <span>{isApplied ? 'Applied' : 'Apply Now'}</span>
                  <span className="material-symbols-outlined text-lg">{isApplied ? 'check' : 'bolt'}</span>
                </button>

                <button 
                  className={`w-full h-12 flex items-center justify-center border border-primary rounded-xl font-bold gap-2 transition-all active:scale-95 hover:bg-surface-container-low ${isSaved ? 'bg-primary text-white' : 'text-primary'}`} 
                  onClick={toggleSave}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                  <span>{isSaved ? 'Opportunity Saved' : 'Save Opportunity'}</span>
                </button>
              </div>
            </div>

            {/* Quick Employer Brief */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm text-left flex flex-col gap-4">
              <h4 className="font-bold text-on-surface flex items-center gap-2 text-base">
                <span className="material-symbols-outlined text-primary">domain</span>
                <span>Employer Brief</span>
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {currentJob.aboutCompany}
              </p>
              <div className="flex justify-between items-center pt-3 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
                <span>{currentJob.sector}</span>
                <a target="_blank" rel="noopener noreferrer" href={currentJob.website} className="text-primary hover:underline flex items-center gap-1 font-bold">
                  Visit Site <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Sticky Action Bar (Mobile/Tablet Only) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-outline-variant px-margin-mobile py-4 z-40 lg:hidden shadow-lg">
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
            className={`flex-1 h-12 font-headline-md text-base rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
              isApplied 
                ? 'bg-tertiary-container text-on-tertiary-container opacity-80 cursor-not-allowed' 
                : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
            }`}
          >
            <span>{isApplied ? 'Applied' : 'Apply Now'}</span>
            <span className="material-symbols-outlined text-lg">{isApplied ? 'check' : 'bolt'}</span>
          </button>
        </div>
      </footer>

      {/* Desktop Footer Info */}
      <footer className="hidden md:block py-16 border-t border-outline-variant bg-white text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-bold text-lg text-primary tracking-tight">MSBTE<span className="text-secondary-container">Jobs</span></span>
                <span className="text-[8px] font-bold text-on-surface-variant tracking-wider uppercase mt-0.5">Diploma Jobs Portal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed text-left">
              Connecting Maharashtra diploma students with high-impact career opportunities in industrial powerhouses.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined text-lg">link</span>
              </a>
            </div>
          </div>

          {/* For Students Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Students</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/find-diploma-jobs">Find Jobs</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">How It Works</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/student-portal/dashboard">Career Tips</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login">Student Login</Link></li>
            </ul>
          </div>

          {/* For Employers Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">For Employers</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/employer-register">Post a Job</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/student-login?tab=employer">Employer Login</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-6">Company</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant font-semibold">
              <li><Link className="hover:text-primary transition-colors" to="/public/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/public/contact">Contact Us</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-2 flex flex-col gap-4 text-left">
            <h5 className="font-extrabold text-sm uppercase tracking-wider text-on-surface mb-2">Support</h5>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">call</span>
              <span className="font-semibold">+91 12345 67890</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">mail</span>
              <span className="font-semibold break-all">support@msbtejobs.in</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
              <span className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-outline-variant/60 text-xs text-on-surface-variant font-semibold">
          © 2024 MSBTEJobs Diploma Jobs Portal. Built for the future of Maharashtra's Industry.
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
