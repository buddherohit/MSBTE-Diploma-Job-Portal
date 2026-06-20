import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  collection,
  getDocs
} from "firebase/firestore";
import { auth, db } from "./firebase";

const SESSION_KEY = 'msbte_session';
const USERS_KEY = 'msbte_users';
const IS_MOCK = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "mock-api-key";

export function initAuth() {
  if (IS_MOCK) {
    getMockUsers();
  }
}

const DEFAULT_USERS_TO_SEED = [
  {
    uid: "student-2100000001",
    email: 'student@msbtejobs.in',
    role: 'student',
    name: 'Rahul Sharma',
    enrollment: '2100000001',
    institute: 'Government Polytechnic, Pune',
    branch: 'Mechanical Engineering',
    status: 'Verified',
    verified: true
  },
  {
    uid: "employer-tata-comm",
    email: 'employer@msbtejobs.in',
    role: 'employer',
    name: 'Rohan Sharma',
    companyName: 'Tata Communications Ltd.',
    sector: 'manufacturing',
    contactPerson: 'Rohan Sharma',
    phone: '9876543210',
    status: 'Verified',
    verified: true
  },
  {
    uid: "admin-console",
    email: 'admin@msbtejobs.in',
    role: 'admin',
    name: 'MSBTE Admin Console'
  },
  {
    uid: "student-21004509",
    email: 'rajesh.deshmukh@msbtejobs.in',
    name: 'Rajesh Deshmukh',
    enrollment: '21004509',
    branch: 'Mechanical Engineering',
    passingYear: '2023',
    gpa: '9.42',
    institute: 'G.P. Pune (0002)',
    role: 'student',
    status: 'Verified',
    verified: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVmsTZ51DcJw5MqUnqJpyq0PYIGkMnM4aw7yGf7AjTbQFTsGfCQf3FGjj6Pmf0C3ADONx4Id3Ahxs5eYY04Q597wFxzTgQNSm3lyULR0Q4HqRoI8TK_2-stBBsLC2M49T2leW5Wvw08AJACgFBQrwHhzop-PJiN0xHCmx7Cvvncju_TcX-zV6AbF5AVrP3JS0b50IN1tGceRedWHkMFgdKK6mXnL8kKHIC2qg0Qje_Vmyhi5nhc3zF9gX0Pf7KleB9dgt1njHC7Q'
  },
  {
    uid: "student-21008821",
    email: 'amruta.kulkarni@msbtejobs.in',
    name: 'Amruta Kulkarni',
    enrollment: '21008821',
    branch: 'Computer Technology',
    passingYear: '2024',
    gpa: '8.85',
    institute: 'V.P. Polytechnic (0024)',
    role: 'student',
    status: 'Pending',
    verified: false,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp1314x_eoWTgiN1bLGFvpERUX-PtBtVJHZ0KWYBHZS6ICxfamwfM5Shzdy1rMUJKV2dzCi4TO9ovTHyiTPAGAQjlcA26SqOhtZ_-MgIl0AEz13VMO3yz0SqBiOQYI30pSrcntBFaikXqB0GEJUAI_doB4PlMq8SMLWvDqtirz1ec14h0Rfri-0dibUN0BQHuFjTIrLZLbPPeXNoaAZYZKf2rjrvCGJWuev3CguZsOOSLp1W5HStEhrSqZLRAnmQ2wZzbtZKivk30'
  },
  {
    uid: "student-21001277",
    email: 'sameer.khan@msbtejobs.in',
    name: 'Sameer Khan',
    enrollment: '21001277',
    branch: 'Electrical Engineering',
    passingYear: '2022',
    gpa: '7.20',
    institute: 'B.V. Polytechnic (0015)',
    role: 'student',
    status: 'Flagged',
    verified: false,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWiEwYsARf1eWDvHWJ9l6C5X1pYYo6NfQWNJonXQO0tMQufvMnhRvmYQbGkauBAx0Ot7nfg8bX4D1AgdJwQpb687tI3j97Ww0zsEndKK8UgQ1krNz12wL7xkX0d_RXM9AXCS8kZPlRgbUh57HZoFvjmZUDeavTmgG1xnldwr2zRIDe2s7rSIUhMY0Dvn060p14m8hX3JcqiBswSrMawgqKKDR_OiwSpCOTScJoH9yoeVQZB1WyDZYFb_IVKHFeXNDf1Y5RX12Te0g'
  },
  {
    uid: "student-21005542",
    email: 'priya.sharma@msbtejobs.in',
    name: 'Priya Sharma',
    enrollment: '21005542',
    branch: 'Civil Engineering',
    passingYear: '2023',
    gpa: '9.10',
    institute: 'S.S.V.P.S. Dhule (0018)',
    role: 'student',
    status: 'Verified',
    verified: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsSoKhAh11y32-ES1tYsO_3IED4AiTX-4fpZuXVyjFBCVAhQY7SzEyYD-thoj3gIS7jwUCFk9ZTa3XMD1lBZ5nmYV-d78QzIw3s2ul8pCNkjSwpZOCWN0Ps7UdA-3lYxUUUmWgP_rgi9AAWvwYRuUsFfQeCLG1x2LCJhj6fURtXkCRblws5ebyMyeHsHSRYwjNpAqjycmzKmOHecwPP5qkOQY1gEp3e3t0MVM2Q-WWzHvBHfUm-bS6T3FoO95od3In2ROaXVqyi0g'
  }
];

const DEFAULT_USERS_WITH_PASSWORDS = DEFAULT_USERS_TO_SEED.map(u => ({
  ...u,
  password: u.email === 'student@msbtejobs.in' ? 'student123' :
            u.email === 'employer@msbtejobs.in' ? 'employer123' :
            u.email === 'admin@msbtejobs.in' ? 'admin123' : 'student123'
}));

export function getMockUsers() {
  if (typeof window === 'undefined') return [];
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS_WITH_PASSWORDS));
  }
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export async function seedUsers() {
  if (IS_MOCK) {
    getMockUsers();
    return;
  }
  try {
    const usersCol = collection(db, "users");
    const snapshot = await getDocs(usersCol);
    if (snapshot.empty) {
      console.log("Seeding default user profiles into Cloud Firestore...");
      for (const u of DEFAULT_USERS_TO_SEED) {
        await setDoc(doc(db, "users", u.uid), u);
      }
    }
  } catch (e) {
    console.error("Failed to seed user profiles:", e);
  }
}

export async function getUsers() {
  if (IS_MOCK) {
    return getMockUsers();
  }
  await seedUsers();
  try {
    const snapshot = await getDocs(collection(db, "users"));
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() });
    });
    return users;
  } catch (e) {
    console.error("Error getting users:", e);
    return [];
  }
}

export function loginSession(user) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch (e) {
    return null;
  }
}

export function logoutSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
  signOut(auth).catch(() => {});
}

export async function registerUser(user) {
  if (IS_MOCK) {
    const users = getMockUsers();
    if (users.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
      throw new Error('Email is already registered!');
    }
    const uid = user.uid || `user-${Math.floor(100000 + Math.random() * 900000)}`;
    const { password, ...profileData } = user;
    const newUser = { uid, ...profileData, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { uid, ...profileData };
  }

  // 1. Create user in Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
  const uid = userCredential.user.uid;

  // 2. Save profile details (without password) to Firestore
  const { password, ...profileData } = user;
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, {
    uid,
    ...profileData
  });

  return { uid, ...profileData };
}

export async function loginUser(emailOrEnrollment, password, role) {
  if (IS_MOCK) {
    const users = getMockUsers();
    // Support login by email OR enrollment number (for students)
    const user = users.find(
      u =>
        (u.email.toLowerCase() === emailOrEnrollment.toLowerCase() ||
          (u.enrollment && u.enrollment === emailOrEnrollment.trim())) &&
        u.password === password
    );
    if (user) {
      if (user.role === role || user.role === 'admin') {
        const { password: _, ...safeUser } = user;
        loginSession(safeUser);
        return safeUser;
      } else {
        throw new Error(`Unauthorized access: this account does not have ${role} access.`);
      }
    } else {
      throw new Error('Invalid credentials. Please check your email/enrollment number and password.');
    }
  }

  // For Firebase: enrollment number isn't a valid Firebase Auth identifier,
  // so we look up by enrollment and get the email first
  const email = emailOrEnrollment;

  // 1. Authenticate with Firebase Auth
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  // 2. Get profile details from Firestore
  const userDocRef = doc(db, "users", uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const profile = userDoc.data();
    if (profile.role === role || profile.role === 'admin') {
      loginSession(profile);
      return profile;
    } else {
      throw new Error(`Unauthorized access: user does not have ${role} privileges.`);
    }
  } else {
    // Fail-safe for mock console access: auto-generate user profile if auth was created but doc is missing
    const profile = {
      uid,
      email,
      role: email === 'admin@msbtejobs.in' ? 'admin' : role,
      name: email === 'admin@msbtejobs.in' ? 'MSBTE Admin Console' : (role === 'student' ? 'Student Profile' : 'Employer Profile')
    };
    await setDoc(userDocRef, profile);
    loginSession(profile);
    return profile;
  }
}

export async function updateUserProfile(updatedUser) {
  if (typeof window === 'undefined') return;

  // 1. Update local storage session
  loginSession(updatedUser);

  if (IS_MOCK) {
    const users = getMockUsers();
    const index = users.findIndex(u => u.email.toLowerCase() === updatedUser.email.toLowerCase());
    if (index !== -1) {
      const oldPassword = users[index].password;
      users[index] = { ...updatedUser, password: oldPassword };
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
    return;
  }

  // 2. Persist update in Firestore
  const currentUser = auth.currentUser;
  const uid = currentUser ? currentUser.uid : updatedUser.uid;
  if (uid) {
    const userDocRef = doc(db, "users", uid);
    await updateDoc(userDocRef, updatedUser);
  }
}

export async function updateUserVerificationStatus(uid, status, verified) {
  if (IS_MOCK) {
    const users = getMockUsers();
    const index = users.findIndex(u => u.uid === uid);
    if (index !== -1) {
      users[index].status = status;
      users[index].verified = verified;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      return true;
    }
    return false;
  }

  try {
    const userDocRef = doc(db, "users", uid);
    await updateDoc(userDocRef, {
      status,
      verified
    });
    return true;
  } catch (e) {
    console.error("Error updating verification status:", e);
    return false;
  }
}
