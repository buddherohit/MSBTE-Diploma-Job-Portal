const USERS_KEY = 'msbte_users';
const SESSION_KEY = 'msbte_session';

const DEFAULT_USERS = [
  {
    email: 'student@msbtejobs.in',
    password: 'student123',
    role: 'student',
    name: 'Rahul Sharma',
    enrollment: '2100000001',
    institute: 'Government Polytechnic, Pune',
    branch: 'Mechanical Engineering'
  },
  {
    email: 'employer@msbtejobs.in',
    password: 'employer123',
    role: 'employer',
    name: 'Rohan Sharma',
    companyName: 'Tata Communications Ltd.',
    sector: 'manufacturing',
    contactPerson: 'Rohan Sharma',
    phone: '9876543210'
  },
  {
    email: 'admin@msbtejobs.in',
    password: 'admin123',
    role: 'admin',
    name: 'MSBTE Admin Console'
  }
];

export function initAuth() {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
  }
}

export function getUsers() {
  initAuth();
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export function registerUser(user) {
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
    throw new Error('Email is already registered!');
  }
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return user;
}

export function loginUser(email, password, role) {
  const users = getUsers();
  const user = users.find(
    u =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
  );
  if (user && (user.role === role || user.role === 'admin')) {
    // Return a copy of the user without password for safety
    const { password: _, ...safeUser } = user;
    loginSession(safeUser);
    return safeUser;
  }
  return null;
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch (e) {
    return null;
  }
}

export function loginSession(user) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function logoutSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
}

export function updateUserProfile(updatedUser) {
  if (typeof window === 'undefined') return;
  
  // Save updated details to current session
  localStorage.setItem(SESSION_KEY, JSON.stringify(updatedUser));
  
  // Save updated details in the master users array
  const users = getUsers();
  const index = users.findIndex(u => u.email.toLowerCase() === updatedUser.email.toLowerCase());
  if (index !== -1) {
    // Keep password from old record
    updatedUser.password = users[index].password;
    users[index] = updatedUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}

