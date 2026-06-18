import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers, registerUser } from '../../utils/auth';

const DEFAULT_REGISTRY_STUDENTS = [
  {
    email: 'rajesh.deshmukh@msbtejobs.in',
    name: 'Rajesh Deshmukh',
    enrollment: '21004509',
    branch: 'Mechanical Engineering',
    passingYear: '2023',
    gpa: '9.42',
    institute: 'G.P. Pune (0002)',
    role: 'student',
    status: 'Verified',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVmsTZ51DcJw5MqUnqJpyq0PYIGkMnM4aw7yGf7AjTbQFTsGfCQf3FGjj6Pmf0C3ADONx4Id3Ahxs5eYY04Q597wFxzTgQNSm3lyULR0Q4HqRoI8TK_2-stBBsLC2M49T2leW5Wvw08AJACgFBQrwHhzop-PJiN0xHCmx7Cvvncju_TcX-zV6AbF5AVrP3JS0b50IN1tGceRedWHkMFgdKK6mXnL8kKHIC2qg0Qje_Vmyhi5nhc3zF9gX0Pf7KleB9dgt1njHC7Q'
  },
  {
    email: 'amruta.kulkarni@msbtejobs.in',
    name: 'Amruta Kulkarni',
    enrollment: '21008821',
    branch: 'Computer Technology',
    passingYear: '2024',
    gpa: '8.85',
    institute: 'V.P. Polytechnic (0024)',
    role: 'student',
    status: 'Pending',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp1314x_eoWTgiN1bLGFvpERUX-PtBtVJHZ0KWYBHZS6ICxfamwfM5Shzdy1rMUJKV2dzCi4TO9ovTHyiTPAGAQjlcA26SqOhtZ_-MgIl0AEz13VMO3yz0SqBiOQYI30pSrcntBFaikXqB0GEJUAI_doB4PlMq8SMLWvDqtirz1ec14h0Rfri-0dibUN0BQHuFjTIrLZLbPPeXNoaAZYZKf2rjrvCGJWuev3CguZsOOSLp1W5HStEhrSqZLRAnmQ2wZzbtZKivk30'
  },
  {
    email: 'sameer.khan@msbtejobs.in',
    name: 'Sameer Khan',
    enrollment: '21001277',
    branch: 'Electrical Engineering',
    passingYear: '2022',
    gpa: '7.20',
    institute: 'B.V. Polytechnic (0015)',
    role: 'student',
    status: 'Flagged',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWiEwYsARf1eWDvHWJ9l6C5X1pYYo6NfQWNJonXQO0tMQufvMnhRvmYQbGkauBAx0Ot7nfg8bX4D1AgdJwQpb687tI3j97Ww0zsEndKK8UgQ1krNz12wL7xkX0d_RXM9AXCS8kZPlRgbUh57HZoFvjmZUDeavTmgG1xnldwr2zRIDe2s7rSIUhMY0Dvn060p14m8hX3JcqiBswSrMawgqKKDR_OiwSpCOTScJoH9yoeVQZB1WyDZYFb_IVKHFeXNDf1Y5RX12Te0g'
  },
  {
    email: 'priya.sharma@msbtejobs.in',
    name: 'Priya Sharma',
    enrollment: '21005542',
    branch: 'Civil Engineering',
    passingYear: '2023',
    gpa: '9.10',
    institute: 'S.S.V.P.S. Dhule (0018)',
    role: 'student',
    status: 'Verified',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsSoKhAh11y32-ES1tYsO_3IED4AiTX-4fpZuXVyjFBCVAhQY7SzEyYD-thoj3gIS7jwUCFk9ZTa3XMD1lBZ5nmYV-d78QzIw3s2ul8pCNkjSwpZOCWN0Ps7UdA-3lYxUUUmWgP_rgi9AAWvwYRuUsFfQeCLG1x2LCJhj6fURtXkCRblws5ebyMyeHsHSRYwjNpAqjycmzKmOHecwPP5qkOQY1gEp3e3t0MVM2Q-WWzHvBHfUm-bS6T3FoO95od3In2ROaXVqyi0g'
  }
];

export default function AdminStudentRegistry() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [yearFilter, setYearFilter] = useState('Any Year');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  
  // Modal State for Manual Entry
  const [modalOpen, setModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    enrollment: '',
    branch: 'Mechanical Engineering',
    passingYear: '2024',
    gpa: '',
    institute: '',
    password: 'student123',
    role: 'student',
    status: 'Verified'
  });

  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    const allUsers = getUsers();
    let studentsList = allUsers.filter(u => u.role === 'student');

    // If we only have the default template student, seed the registry with realistic student records
    if (studentsList.length <= 1) {
      const seededUsers = [...allUsers];
      DEFAULT_REGISTRY_STUDENTS.forEach(student => {
        if (!seededUsers.some(u => u.email.toLowerCase() === student.email.toLowerCase())) {
          seededUsers.push(student);
        }
      });
      localStorage.setItem('msbte_users', JSON.stringify(seededUsers));
      studentsList = seededUsers.filter(u => u.role === 'student');
    }

    // Adapt fields from old model if missing
    const formatted = studentsList.map(s => ({
      ...s,
      enrollment: s.enrollment || `2100${Math.floor(1000 + Math.random() * 9000)}`,
      branch: s.branch || 'Mechanical Engineering',
      passingYear: s.passingYear || '2024',
      gpa: s.gpa || s.cgpa || '8.50',
      institute: s.institute || 'Government Polytechnic, Pune',
      status: s.status || (s.verified ? 'Verified' : 'Pending'),
      avatar: s.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    }));

    setStudents(formatted);
  };

  const updateStudentStatus = (email, newStatus) => {
    const allUsers = getUsers();
    const updated = allUsers.map(u => {
      if (u.email.toLowerCase() === email.toLowerCase()) {
        return { 
          ...u, 
          status: newStatus,
          verified: newStatus === 'Verified'
        };
      }
      return u;
    });
    localStorage.setItem('msbte_users', JSON.stringify(updated));
    loadStudents();
  };

  const handleManualEntrySubmit = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.enrollment) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      registerUser({
        ...newStudent,
        verified: newStudent.status === 'Verified',
        cgpa: newStudent.gpa
      });
      alert('Student registered successfully in DTE Registry!');
      setModalOpen(false);
      setNewStudent({
        name: '',
        email: '',
        enrollment: '',
        branch: 'Mechanical Engineering',
        passingYear: '2024',
        gpa: '',
        institute: '',
        password: 'student123',
        role: 'student',
        status: 'Verified'
      });
      loadStudents();
    } catch (err) {
      alert(err.message || 'Error registering student.');
    }
  };

  // Filter Logic
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.enrollment.toLowerCase().includes(search.toLowerCase()) ||
      student.institute.toLowerCase().includes(search.toLowerCase());

    const matchesBranch = branchFilter === 'All Branches' || student.branch === branchFilter;
    const matchesYear = yearFilter === 'Any Year' || student.passingYear === yearFilter.replace(' (Current)', '');
    const matchesStatus = statusFilter === 'All Statuses' || student.status === statusFilter;

    return matchesSearch && matchesBranch && matchesYear && matchesStatus;
  });

  const exportRegistry = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(filteredStudents, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `MSBTE_Students_Registry_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="students" />

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Header & Quick Action Buttons */}
        <div className="flex flex-col gap-6 mb-8 mt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Candidate Records</h2>
              <p className="text-on-surface-variant font-medium text-sm mt-1">
                Managing {students.length} registered diploma profiles across Maharashtra.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setModalOpen(true)}
                className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Manual Entry
              </button>
              <button 
                onClick={exportRegistry}
                className="bg-white border border-outline-variant text-on-surface px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                Export List
              </button>
            </div>
          </div>

          {/* Search & Filters Container */}
          <div className="bg-white p-5 border border-outline-variant rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                className="w-full bg-surface-container-low border border-outline-variant pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium"
                placeholder="Search by Student Name, Enrollment ID, or Institute Code..." 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-bold text-outline uppercase tracking-wider pl-1">Diploma Branch</label>
                <select 
                  className="bg-white border border-outline-variant px-3 py-2.5 rounded-xl font-semibold text-xs focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={branchFilter}
                  onChange={(e) => setBranchFilter(e.target.value)}
                >
                  <option>All Branches</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Computer Technology</option>
                  <option>Electrical Engineering</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-bold text-outline uppercase tracking-wider pl-1">Passing Year</label>
                <select 
                  className="bg-white border border-outline-variant px-3 py-2.5 rounded-xl font-semibold text-xs focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option>Any Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-bold text-outline uppercase tracking-wider pl-1">Verification Status</label>
                <select 
                  className="bg-white border border-outline-variant px-3 py-2.5 rounded-xl font-semibold text-xs focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Statuses</option>
                  <option>Verified</option>
                  <option>Pending</option>
                  <option>Flagged</option>
                </select>
              </div>
              <div className="flex items-end">
                <button 
                  onClick={() => {
                    setSearch('');
                    setBranchFilter('All Branches');
                    setYearFilter('Any Year');
                    setStatusFilter('All Statuses');
                  }}
                  className="w-full bg-surface-container-high text-on-surface-variant border border-outline-variant py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-outline-variant transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Student Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div key={student.email} className="bg-white border border-outline-variant rounded-2xl p-5 hover:shadow-md transition-shadow relative flex flex-col justify-between group">
                <div className="flex gap-5">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden border border-outline-variant shadow-sm">
                      <img 
                        alt={student.name} 
                        className="w-full h-full object-cover" 
                        src={student.avatar}
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'; }}
                      />
                    </div>
                    {student.status === 'Verified' && (
                      <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-[9px] font-extrabold flex items-center gap-0.5 border border-green-300">
                        <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                        VERIFIED
                      </div>
                    )}
                    {student.status === 'Pending' && (
                      <div className="absolute -bottom-2 -right-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[9px] font-extrabold flex items-center gap-0.5 border border-yellow-300">
                        <span className="material-symbols-outlined text-[10px]">pending</span>
                        PENDING
                      </div>
                    )}
                    {student.status === 'Flagged' && (
                      <div className="absolute -bottom-2 -right-2 bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-[9px] font-extrabold flex items-center gap-0.5 border border-red-300">
                        <span className="material-symbols-outlined text-[10px]">flag</span>
                        FLAGGED
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{student.name}</h3>
                        <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded-lg text-[10px] font-bold border border-outline-variant">
                          EN: {student.enrollment}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                          {student.branch}
                        </span>
                        <span className="bg-surface-container text-on-surface-variant px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                          Class of {student.passingYear}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 mt-4">
                      <div>
                        <p className="text-[9px] text-outline uppercase font-bold tracking-wider">Aggregate GPA</p>
                        <p className="text-lg text-primary font-black">{student.gpa} <span className="text-[10px] font-normal text-outline">/ 10</span></p>
                      </div>
                      <div className="h-6 w-px bg-outline-variant"></div>
                      <div>
                        <p className="text-[9px] text-outline uppercase font-bold tracking-wider">Institute</p>
                        <p className="text-xs text-on-surface font-bold truncate max-w-[200px]" title={student.institute}>
                          {student.institute}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-outline-variant flex gap-3">
                  <Link 
                    to="/admin-portal/review-student_rahul-deshmukh"
                    className="flex-grow text-center bg-primary text-white py-2 rounded-xl font-bold text-xs hover:brightness-110 shadow-sm transition-all"
                  >
                    View Audit Profile
                  </Link>
                  {student.status !== 'Verified' && (
                    <button 
                      onClick={() => updateStudentStatus(student.email, 'Verified')}
                      className="px-4 py-2 bg-green-500 text-white rounded-xl font-bold text-xs hover:bg-green-600 transition-colors shadow-sm"
                    >
                      Verify
                    </button>
                  )}
                  {student.status !== 'Flagged' && (
                    <button 
                      onClick={() => updateStudentStatus(student.email, 'Flagged')}
                      className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold text-xs transition-colors"
                      title="Flag Account"
                    >
                      Flag
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-on-surface-variant font-medium bg-white rounded-2xl border border-dashed border-outline-variant">
              No student records matched your active filters.
            </div>
          )}
        </div>

        {/* Pagination Info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant font-medium">
            Showing <span className="font-bold text-on-surface">{filteredStudents.length}</span> candidates
          </p>
        </div>

      </main>

      {/* Manual Entry Modal Dialog */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-outline-variant rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200 text-left">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">person_add</span>
                Manual Registry Entry
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <form onSubmit={handleManualEntrySubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Amit Patil"
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. amit@mail.com"
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Enrollment No. *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 21004561"
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    value={newStudent.enrollment}
                    onChange={(e) => setNewStudent({...newStudent, enrollment: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Aggregate CGPA/GPA</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 8.92"
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                    value={newStudent.gpa}
                    onChange={(e) => setNewStudent({...newStudent, gpa: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant">Diploma Branch</label>
                <select 
                  className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  value={newStudent.branch}
                  onChange={(e) => setNewStudent({...newStudent, branch: e.target.value})}
                >
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Computer Technology</option>
                  <option>Electrical Engineering</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Passing Year</label>
                  <select 
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    value={newStudent.passingYear}
                    onChange={(e) => setNewStudent({...newStudent, passingYear: e.target.value})}
                  >
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant">Verification Status</label>
                  <select 
                    className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    value={newStudent.status}
                    onChange={(e) => setNewStudent({...newStudent, status: e.target.value})}
                  >
                    <option>Verified</option>
                    <option>Pending</option>
                    <option>Flagged</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant">Institute Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Government Polytechnic, Pune"
                  className="border border-outline-variant bg-surface px-3 py-2 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  value={newStudent.institute}
                  onChange={(e) => setNewStudent({...newStudent, institute: e.target.value})}
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-outline-variant">
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-outline-variant hover:bg-surface-container-high rounded-xl text-sm font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:brightness-110 shadow-sm"
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
