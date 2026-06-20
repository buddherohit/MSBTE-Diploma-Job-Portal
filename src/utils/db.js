import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  query, 
  where,
  deleteDoc
} from "firebase/firestore";
import { db } from "./firebase";

const DEFAULT_JOBS = [
  {
    id: "thermax-maintenance",
    title: "Maintenance Engineer",
    company: "Thermax Limited",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfyOOXVmy_C3y_bhrY1Q4DfO2k1qFjn386j0m2_5JGqn_jpQ6oo6du9mKh387gwhrvHE2294_EwXJKe_alVXHIAuw62m7zN6hhgyDS9en_n689BkHk4RhcFK_pNYW9t-HweMUbF17rrueFJg_XS9Va9QpxXcolJjRPKL7jPdh2a8RNiemYkYv7WoaXQw2t9WNUlLsxcAbFNqPhkY4T1oh8jgC-1QbLPT_q-qaBdGo5gIGPAWQNhTFLP9HJi-Vc4qHhauMeTYySq8Y",
    location: "Pune, MH",
    district: "Pune",
    salary: "₹3.5 - 4.2 LPA",
    salaryVal: 350000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "Urgent",
    badgeClass: "bg-red-50 text-red-700 border border-red-200",
    experience: "0-2 Years",
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
  {
    id: "lt-production",
    title: "Production Engineer",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUssuEmg1BjBZuERyN0MLhVkWR-uui1z4nLnwNoI0TSJwIpaZFNCUHxbVqgXit-idic_kklHqy11BwWPCp00EiCtJmkYTRkBUo6YzKqyovaQkwNry_uJwTYwPlDwRxhWjRfx9-2hXy0lRzdscP7vqRlrKDB7tS0ZOHkyYuhGhHUdeln0yUECcxZ3_PDSdbze1odty0CS_9KQWN6bkxaa5rN7uzJQsJlrLw06Zq9kPatoFYuq074kACBxFgvsyL9nZ02ZP5mETGzwE",
    location: "Mumbai, MH",
    district: "Mumbai",
    salary: "₹3.5 - 5 LPA",
    salaryVal: 350000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "architecture",
    badge: "New",
    badgeClass: "bg-green-50 text-green-700 border border-green-200",
    experience: "0-1 Years",
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
  {
    id: "tata-design",
    title: "Junior Design Engineer",
    company: "TATA Motors",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2nEAnVDPBuaVO_W6FP6m0kLjWVQ3_b40YxthXAtG440kNxRfcTK9C0TZNes8jnkfrq87X0SMxrE3y2amMlXkh7RnyL8WkL42Zu7T58DJfCqQB2yd188KP2P_QjKsFQowbaDkN98vdqvedrr_TnKgg2YixenUX9X10AgNz_B2g1gg1nDHfzd9JN4SMCOu85Z36LOZ68XF64JRpiSmhKiS4znMgpKvUUF6Hf8YdB6UEOHbaDUGVrH4aE804gD0zPg2fjG8Pq1bUH4",
    location: "Pune, MH",
    district: "Pune",
    salary: "₹3 - 4.5 LPA",
    salaryVal: 300000,
    type: "Full-time",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "",
    badgeClass: "",
    experience: "0-2 Years",
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
  {
    id: "shapoorji-civil",
    title: "Site Supervisor",
    company: "Shapoorji Pallonji",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Nagpur, MH",
    district: "Nagpur",
    salary: "₹2.8 - 4 LPA",
    salaryVal: 280000,
    type: "Full-time",
    branch: "Civil",
    branchIcon: "home_work",
    badge: "",
    badgeClass: "",
    experience: "0-2 Years",
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
  {
    id: "siemens-electrical",
    title: "Electrical Technician",
    company: "Siemens India",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWh8SDj52cM4qTR3DUFshfmGBaKKVRMIhB4B7lzZGwq0ad_BrrWi0BohvE9FH697BCWocbu-9cBf2SzNlOqrSyDSREp1zHtPQ70IdbiGtNo-0lXi5Ciw_tYzmVFgak7bEZIYq_Z_fFc3E5eeUiJp2X0q9MLF3JH1TX7_veduB_aCngK-eLfUYOtW_SNi0EJQ6OoSnOYiZI-wrOKpAcvZx8Tbwz1RDWlyKKGmi42PXt1Woh3bqWmrs66nCQp8A5mJdlcC6QuRPOzE",
    location: "Aurangabad, MH",
    district: "Aurangabad",
    salary: "₹2.5 - 3.5 LPA",
    salaryVal: 250000,
    type: "Full-time",
    branch: "Electrical",
    branchIcon: "bolt",
    badge: "",
    badgeClass: "",
    experience: "Fresher",
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
  {
    id: "tata-trainee",
    title: "Junior Production Engineer",
    company: "Tata Motors Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbskzHAfSKrl6u9OSn1ObIOn-DXLGTKnaRZvolIzK4N7vq1GeIeTKU5igHOyO18LS5P3CCdm6I0Ojj6BMvGHGfG0sUN8phGR2CVayQ7U3gbY50HUnqLfHRqjBlw-lhnS3vGqlj1qm-_Q0cQ4PBpvmuVQ1YimDx9miCg9BRYhyY3eP4mHaU9SwHnkz04xy5BCTzrWa6PbqvkwErkuzqimXyr8vathBn2OpgEYQ0cvaE6KLEaaFrozTkHEpOWhfZAMjMiKjmccCAM",
    location: "Pune, Chakan",
    district: "Pune",
    salary: "₹18,000 - ₹25,000 /mo",
    salaryVal: 216000,
    type: "Trainee",
    branch: "Mechanical",
    branchIcon: "engineering",
    badge: "Urgent",
    badgeClass: "bg-red-50 text-red-700 border border-red-200",
    experience: "0-1 Years",
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
  {
    id: "lt-civil",
    title: "Diploma Trainee - Civil",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwXPfFn650ZbsE5QvOtHamVhFqaKHYnq2mtJioTwzaZXrLiY7vNll5Dgb17R2dJBbaI7WnQ4WpB6LbLrxu1E-IXjIoo453hRhzaR65VH46cSto3EH6Biw2b0NSBTQv_jrhtK9QTe5P_MWZQoJktRK19x-PDfIALRh9TVt3BUNyOG16SLJCsWPdo5Ae9vKB89ntKBDjckrKJLlcaIM0N-ogbl2MS8UDBLWu-5EowxvXQgXbwkM_gj966iqZeFMu2t7UtScI0mupjc",
    location: "Mumbai, BKC",
    district: "Mumbai",
    salary: "₹22,000 - ₹28,000 /mo",
    salaryVal: 264000,
    type: "Trainee",
    branch: "Civil",
    branchIcon: "apartment",
    badge: "New Listing",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    experience: "Fresher",
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
  {
    id: "infosys-support",
    title: "Technical Support Associate",
    company: "Infosys BPM",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CbBD6Kt5yN3o40-c0NWMJu60bjp8I1X1mcDZnNr1s5HloNQKHsBKGLOl9I7LOsbGxMWSPVBXWcVttB7kAArXqeRz0tD_DJ_Cm0i715jgqMyfRxe-lf4zZcoPXwuW2cPJngwAQNPokeFiEE5YIyLbfUoEt5Rlv1ZxQYWshP-P6yfnlB8p2pB3vJFMVdK2Xs9wlIor6LUbNa8ymqhvHZf9bWxRtiZjDfl7d0jbXkKNl25dyPC28XGUtiLphe8NxA7fPC6goxSWWWg",
    location: "Pune, Hinjewadi",
    district: "Pune",
    salary: "₹15,000 /mo",
    salaryVal: 180000,
    type: "Internship",
    branch: "Computer",
    branchIcon: "computer",
    badge: "Internship",
    badgeClass: "bg-purple-50 text-purple-700 border border-purple-200",
    experience: "Fresher",
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
  },
  {
    id: "tata-comm-network",
    title: "Junior Network Engineer",
    company: "Tata Communications Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-jTOaq_cXJFr4qtKaKMWSMDk46z0LJRQC6c6z-JQbrF5tBSUHa1UGI0nfP_LFQFk5svl_o0RuJoJAp8iDeAm69TpQJBWzgABZuCFOo22FHO_q-wrgNZtu7KtXSVVi9rjNFtUZEQtDknKXQN-dQJDuYJ3x0zAiGLQfutRX6wHDlG1R-ZDVZaKWkje-C5FXjYHoXp9NPZCKjKtSBtlsaZnj7qaOr0nmKNfAn_U911yBpJjh0KCKqLaSS2ERF4S2Q-UrXsmzVTYK4M",
    location: "Pune, MH",
    district: "Pune",
    salary: "₹3.2 - 4.5 LPA",
    salaryVal: 320000,
    type: "Full-time",
    branch: "Computer",
    branchIcon: "terminal",
    badge: "New",
    badgeClass: "bg-green-50 text-green-700 border border-green-200",
    experience: "0-2 Years",
    description: "Tata Communications is looking for young IT / Computer Diploma graduates for a Junior Network Engineer role in Pune. You will be responsible for network setups, monitoring logs, troubleshooting routers/switches, and supporting server infrastructure.",
    responsibilities: [
      "Monitor routing infrastructure and troubleshoot connectivity bugs.",
      "Support senior engineers in configuring network firewalls and switches.",
      "Maintain active SLA documentation for client queries."
    ],
    education: ["MSBTE Diploma (Computer/IT/Electronics)", "Fresher / 0-2 Years Experience"],
    skills: ["Networking", "Cisco", "TCP/IP", "Linux"],
    aboutCompany: "Tata Communications Limited is a global digital infrastructure provider powering the digital economy.",
    sector: "Information Technology",
    website: "https://www.tatacommunications.com"
  }
];

const DEFAULT_APPLICATIONS = [
  {
    id: "APP-47201",
    jobId: "tata-design",
    jobTitle: "Junior Design Engineer",
    company: "TATA Motors",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2nEAnVDPBuaVO_W6FP6m0kLjWVQ3_b40YxthXAtG440kNxRfcTK9C0TZNes8jnkfrq87X0SMxrE3y2amMlXkh7RnyL8WkL42Zu7T58DJfCqQB2yd188KP2P_QjKsFQowbaDkN98vdqvedrr_TnKgg2YixenUX9X10AgNz_B2g1gg1nDHfzd9JN4SMCOu85Z36LOZ68XF64JRpiSmhKiS4znMgpKvUUF6Hf8YdB6UEOHbaDUGVrH4aE804gD0zPg2fjG8Pq1bUH4",
    location: "Pune, MH",
    studentEmail: "student@msbtejobs.in",
    studentName: "Rahul Sharma",
    enrollment: "2100000001",
    gpa: "8.80",
    date: "Jun 12, 2026",
    status: "Interview Scheduled",
    updatedAt: "2 days ago"
  },
  {
    id: "APP-89410",
    jobId: "lt-production",
    jobTitle: "Production Engineer",
    company: "L&T Construction",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUssuEmg1BjBZuERyN0MLhVkWR-uui1z4nLnwNoI0TSJwIpaZFNCUHxbVqgXit-idic_kklHqy11BwWPCp00EiCtJmkYTRkBUo6YzKqyovaQkwNry_uJwTYwPlDwRxhWjRfx9-2hXy0lRzdscP7vqRlrKDB7tS0ZOHkyYuhGhHUdeln0yUECcxZ3_PDSdbze1odty0CS_9KQWN6bkxaa5rN7uzJQsJlrLw06Zq9kPatoFYuq074kACBxFgvsyL9nZ02ZP5mETGzwE",
    location: "Mumbai, MH",
    studentEmail: "student@msbtejobs.in",
    studentName: "Rahul Sharma",
    enrollment: "2100000001",
    gpa: "8.80",
    date: "Jun 15, 2026",
    status: "Under Review",
    updatedAt: "5 hours ago"
  },
  {
    id: "APP-51240",
    jobId: "tata-comm-network",
    jobTitle: "Junior Network Engineer",
    company: "Tata Communications Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-jTOaq_cXJFr4qtKaKMWSMDk46z0LJRQC6c6z-JQbrF5tBSUHa1UGI0nfP_LFQFk5svl_o0RuJoJAp8iDeAm69TpQJBWzgABZuCFOo22FHO_q-wrgNZtu7KtXSVVi9rjNFtUZEQtDknKXQN-dQJDuYJ3x0zAiGLQfutRX6wHDlG1R-ZDVZaKWkje-C5FXjYHoXp9NPZCKjKtSBtlsaZnj7qaOr0nmKNfAn_U911yBpJjh0KCKqLaSS2ERF4S2Q-UrXsmzVTYK4M",
    location: "Pune, MH",
    studentEmail: "sneha.patil@msbtejobs.in",
    studentName: "Sneha Patil",
    enrollment: "2100000005",
    gpa: "9.12",
    date: "Jun 14, 2026",
    status: "Under Review",
    updatedAt: "3 days ago"
  },
  {
    id: "APP-82761",
    jobId: "tata-comm-network",
    jobTitle: "Junior Network Engineer",
    company: "Tata Communications Ltd.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-jTOaq_cXJFr4qtKaKMWSMDk46z0LJRQC6c6z-JQbrF5tBSUHa1UGI0nfP_LFQFk5svl_o0RuJoJAp8iDeAm69TpQJBWzgABZuCFOo22FHO_q-wrgNZtu7KtXSVVi9rjNFtUZEQtDknKXQN-dQJDuYJ3x0zAiGLQfutRX6wHDlG1R-ZDVZaKWkje-C5FXjYHoXp9NPZCKjKtSBtlsaZnj7qaOr0nmKNfAn_U911yBpJjh0KCKqLaSS2ERF4S2Q-UrXsmzVTYK4M",
    location: "Pune, MH",
    studentEmail: "aditya.ahire@msbtejobs.in",
    studentName: "Aditya Ahire",
    enrollment: "2100000006",
    gpa: "8.50",
    date: "Jun 16, 2026",
    status: "Shortlisted",
    updatedAt: "1 day ago"
  }
];

const IS_MOCK = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "mock-api-key";
const JOBS_KEY = 'msbte_jobs';
const APPLICATIONS_KEY = 'msbte_applications';

function getMockJobs() {
  if (typeof window === 'undefined') return [];
  if (!localStorage.getItem(JOBS_KEY)) {
    localStorage.setItem(JOBS_KEY, JSON.stringify(DEFAULT_JOBS));
  }
  try {
    return JSON.parse(localStorage.getItem(JOBS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function getMockApplications() {
  if (typeof window === 'undefined') return [];
  if (!localStorage.getItem(APPLICATIONS_KEY)) {
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(DEFAULT_APPLICATIONS));
  }
  try {
    return JSON.parse(localStorage.getItem(APPLICATIONS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export async function seedInitialData() {
  if (IS_MOCK) {
    getMockJobs();
    getMockApplications();
    return;
  }
  try {
    const jobsCol = collection(db, "jobs");
    const jobsSnapshot = await getDocs(jobsCol);
    if (jobsSnapshot.empty) {
      console.log("Seeding initial jobs into Cloud Firestore...");
      for (const job of DEFAULT_JOBS) {
        await setDoc(doc(db, "jobs", job.id), job);
      }
    }

    const appsCol = collection(db, "applications");
    const appsSnapshot = await getDocs(appsCol);
    if (appsSnapshot.empty) {
      console.log("Seeding initial applications into Cloud Firestore...");
      for (const app of DEFAULT_APPLICATIONS) {
        await setDoc(doc(db, "applications", app.id), app);
      }
    }
  } catch (e) {
    console.error("Failed to seed initial data:", e);
  }
}

export async function getJobs() {
  if (IS_MOCK) {
    return getMockJobs();
  }
  await seedInitialData();
  try {
    const jobsSnapshot = await getDocs(collection(db, "jobs"));
    const jobs = [];
    jobsSnapshot.forEach((doc) => {
      jobs.push({ id: doc.id, ...doc.data() });
    });
    return jobs;
  } catch (e) {
    console.error("Error getting jobs:", e);
    return DEFAULT_JOBS; // Fail-safe
  }
}

export async function getJobById(id) {
  if (IS_MOCK) {
    const jobs = getMockJobs();
    return jobs.find(job => job.id === id) || null;
  }
  try {
    const docSnap = await getDoc(doc(db, "jobs", id));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (e) {
    console.error("Error getting job by ID:", e);
    return null;
  }
}

export async function addJob(job) {
  if (IS_MOCK) {
    const jobs = getMockJobs();
    const jobId = job.id || `job-${Math.floor(100000 + Math.random() * 900000)}`;
    const newJob = {
      ...job,
      id: jobId,
      salaryVal: typeof job.salaryVal === 'number' ? job.salaryVal : 300000,
      logo: job.logo || "https://upload.wikimedia.org/wikipedia/commons/2/25/Cognizant_logo_2022.svg",
      badge: job.badge || "New"
    };
    jobs.unshift(newJob);
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
    return newJob;
  }
  try {
    const jobId = job.id || `job-${Math.floor(100000 + Math.random() * 900000)}`;
    const newJob = {
      ...job,
      id: jobId,
      salaryVal: typeof job.salaryVal === 'number' ? job.salaryVal : 300000,
      logo: job.logo || "https://upload.wikimedia.org/wikipedia/commons/2/25/Cognizant_logo_2022.svg",
      badge: job.badge || "New"
    };
    await setDoc(doc(db, "jobs", jobId), newJob);
    return newJob;
  } catch (e) {
    console.error("Error adding job:", e);
    throw e;
  }
}

export async function getApplications() {
  if (IS_MOCK) {
    return getMockApplications();
  }
  await seedInitialData();
  try {
    const appsSnapshot = await getDocs(collection(db, "applications"));
    const apps = [];
    appsSnapshot.forEach((doc) => {
      apps.push({ id: doc.id, ...doc.data() });
    });
    return apps;
  } catch (e) {
    console.error("Error getting applications:", e);
    return DEFAULT_APPLICATIONS; // Fail-safe
  }
}

export async function applyToJob(application) {
  if (IS_MOCK) {
    const apps = getMockApplications();
    const refId = `APP-${Math.floor(10000 + Math.random() * 90000)}`;
    const newApp = {
      id: refId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Under Review',
      updatedAt: 'Just now',
      ...application
    };
    apps.unshift(newApp);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(apps));
    return newApp;
  }
  try {
    const refId = `APP-${Math.floor(10000 + Math.random() * 90000)}`;
    const newApp = {
      id: refId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Under Review',
      updatedAt: 'Just now',
      ...application
    };
    await setDoc(doc(db, "applications", refId), newApp);
    return newApp;
  } catch (e) {
    console.error("Error applying to job:", e);
    throw e;
  }
}

export async function getApplicationsByStudent(studentEmail) {
  if (IS_MOCK) {
    const apps = getMockApplications();
    return apps.filter(app => app.studentEmail.toLowerCase() === studentEmail.toLowerCase());
  }
  try {
    const q = query(collection(db, "applications"), where("studentEmail", "==", studentEmail));
    const snapshot = await getDocs(q);
    const apps = [];
    snapshot.forEach((doc) => {
      apps.push({ id: doc.id, ...doc.data() });
    });
    return apps;
  } catch (e) {
    console.error("Error getting student applications:", e);
    return [];
  }
}

export async function getApplicationsByEmployer(companyName) {
  if (IS_MOCK) {
    const apps = getMockApplications();
    return apps.filter(app => app.company.toLowerCase() === companyName.toLowerCase());
  }
  try {
    const q = query(collection(db, "applications"), where("company", "==", companyName));
    const snapshot = await getDocs(q);
    const apps = [];
    snapshot.forEach((doc) => {
      apps.push({ id: doc.id, ...doc.data() });
    });
    return apps;
  } catch (e) {
    console.error("Error getting employer applications:", e);
    return [];
  }
}

export async function updateApplicationStatus(appId, status) {
  if (IS_MOCK) {
    const apps = getMockApplications();
    const index = apps.findIndex(app => app.id === appId);
    if (index !== -1) {
      apps[index].status = status;
      apps[index].updatedAt = 'Just now';
      localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(apps));
      return apps[index];
    }
    return null;
  }
  try {
    const appRef = doc(db, "applications", appId);
    await updateDoc(appRef, {
      status,
      updatedAt: 'Just now'
    });
    const snap = await getDoc(appRef);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (e) {
    console.error("Error updating application status:", e);
    return null;
  }
}

export async function deleteApplication(appId) {
  if (IS_MOCK) {
    const apps = getMockApplications();
    const updated = apps.filter(app => app.id !== appId);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
    return true;
  }
  try {
    const appRef = doc(db, "applications", appId);
    await deleteDoc(appRef);
    return true;
  } catch (e) {
    console.error("Error deleting application:", e);
    return false;
  }
}

export function getSavedJobIds() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('msbte_saved_jobs')) || ["thermax-maintenance"];
  } catch (e) {
    return [];
  }
}

export function toggleSaveJobId(jobId) {
  const savedIds = getSavedJobIds();
  let updated;
  if (savedIds.includes(jobId)) {
    updated = savedIds.filter(id => id !== jobId);
  } else {
    updated = [...savedIds, jobId];
  }
  localStorage.setItem('msbte_saved_jobs', JSON.stringify(updated));
  return updated;
}

export async function updateJobStatus(jobId, status) {
  if (IS_MOCK) {
    const jobs = getMockJobs();
    const index = jobs.findIndex(job => job.id === jobId);
    if (index !== -1) {
      jobs[index].status = status;
      localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
      return true;
    }
    return false;
  }
  try {
    const jobRef = doc(db, "jobs", jobId);
    await updateDoc(jobRef, {
      status
    });
    return true;
  } catch (e) {
    console.error("Error updating job status:", e);
    return false;
  }
}

/**
 * addJob — creates a new job posting in the data store.
 * Used by the employer job posting wizard (Step 3).
 * In mock mode: persists to localStorage under JOBS_KEY.
 * In Firebase mode: writes to Firestore 'jobs' collection.
 */
export async function addJob(jobData) {
  // Generate a unique ID
  const timestamp = Date.now();
  const slug = (jobData.title || 'job')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const newId = `${slug}-${timestamp}`;

  const newJob = {
    id: newId,
    ...jobData,
    status: jobData.status || 'active',
    applicantsCount: 0,
    postedAt: jobData.postedAt || new Date().toISOString(),
    branchIcon: jobData.branchIcon || 'engineering',
    badge: jobData.badge || '',
    badgeClass: jobData.badgeClass || '',
    salaryVal: jobData.salaryVal || 0,
    urgent: jobData.urgent || false,
  };

  if (IS_MOCK) {
    const jobs = getMockJobs();
    jobs.unshift(newJob); // prepend so new jobs appear first
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
    return newJob;
  }

  try {
    await setDoc(doc(db, "jobs", newId), newJob);
    return newJob;
  } catch (e) {
    console.error("Error adding job:", e);
    throw e;
  }
}

