import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers } from '../../utils/auth';

export default function VerificationHub() {
  const [activeTab, setActiveTab] = useState('partners');
  const [pendingEmployers, setPendingEmployers] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);

  useEffect(() => {
    loadQueues();
  }, []);

  const loadQueues = () => {
    const allUsers = getUsers();
    
    // Fetch pending employers
    const employers = allUsers.filter(u => 
      u.role === 'employer' && 
      (u.status === 'Pending Verification' || !u.verified)
    ).map(e => ({
      ...e,
      companyName: e.companyName || 'Unknown Corporation',
      sector: e.sector || 'Manufacturing',
      location: e.location || 'Maharashtra',
      status: e.status || 'Pending Verification',
      id: e.id || `MSBTE-${Math.floor(1000 + Math.random() * 9000)}`,
      logo: e.logo || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'
    }));

    // Fetch pending students
    const students = allUsers.filter(u => 
      u.role === 'student' && 
      (u.status === 'Pending' || !u.verified)
    ).map(s => ({
      ...s,
      enrollment: s.enrollment || `2100${Math.floor(1000 + Math.random() * 9000)}`,
      branch: s.branch || 'Mechanical Engineering',
      institute: s.institute || 'Government Polytechnic, Pune',
      status: s.status || 'Pending',
      avatar: s.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    }));

    setPendingEmployers(employers);
    setPendingStudents(students);
  };

  const updateStatus = (email, newStatus) => {
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
    loadQueues();
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="verification" />

      {/* Main Content Area */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Header & Tab Switcher */}
        <div className="flex flex-col gap-6 mb-8 mt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Verification Hub</h2>
              <p className="font-medium text-sm text-on-surface-variant mt-1">
                Review industrial credentials and student diploma authenticity reports.
              </p>
            </div>
            
            {/* Segmented Control / Path Switcher */}
            <div className="flex bg-surface-container-high p-1 rounded-xl w-full lg:w-auto self-start">
              <button 
                className={`flex-1 lg:flex-none px-6 py-2 rounded-lg font-bold text-xs transition-all ${
                  activeTab === 'partners' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-white/50'
                }`}
                onClick={() => setActiveTab('partners')}
              >
                Pending Partners ({pendingEmployers.length})
              </button>
              <button 
                className={`flex-1 lg:flex-none px-6 py-2 rounded-lg font-bold text-xs transition-all ${
                  activeTab === 'students' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-white/50'
                }`}
                onClick={() => setActiveTab('students')}
              >
                Pending Students ({pendingStudents.length})
              </button>
              <button 
                className={`flex-1 lg:flex-none px-6 py-2 rounded-lg font-bold text-xs transition-all ${
                  activeTab === 'docs' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-white/50'
                }`}
                onClick={() => setActiveTab('docs')}
              >
                Document Review
              </button>
            </div>
          </div>
        </div>

        {/* Content Section: Pending Partners */}
        {activeTab === 'partners' && (
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {pendingEmployers.length > 0 ? (
              pendingEmployers.map(emp => (
                <div key={emp.email} className="bg-white border border-outline-variant p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-5">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden border border-outline-variant shadow-sm">
                    <img 
                      alt="Company Logo" 
                      className="w-full h-full object-contain" 
                      src={emp.logo}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'; }}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between min-w-0">
                    <div className="mb-4">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-lg text-on-surface truncate">{emp.companyName}</h3>
                        <span className="shrink-0 bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                          Urgent
                        </span>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-bold mt-0.5">Reg ID: {emp.id}</p>
                      <div className="flex flex-wrap items-center gap-3 text-on-surface-variant mt-2 text-xs font-semibold">
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[15px]">location_on</span>
                          {emp.location}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[15px]">business_center</span>
                          {emp.sector}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => updateStatus(emp.email, 'Verified')}
                        className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-xs hover:brightness-110 transition-all shadow-sm"
                      >
                        Approve Partner
                      </button>
                      <Link 
                        to="/admin-portal/verify-employer-maharashtra-industrial-corp"
                        className="px-4 py-2.5 bg-white border border-outline-variant text-on-surface hover:bg-surface-container rounded-xl font-bold text-xs transition-all flex items-center justify-center"
                        title="View Full Credentials Audit"
                      >
                        Details
                      </Link>
                      <button 
                        onClick={() => updateStatus(emp.email, 'Flagged')}
                        className="px-3 border border-red-200 text-red-600 hover:bg-red-50 py-2.5 rounded-xl font-bold text-xs transition-colors"
                      >
                        Flag
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-on-surface-variant font-medium bg-white rounded-2xl border border-dashed border-outline-variant">
                No industrial partners currently awaiting accreditation review.
              </div>
            )}
          </section>
        )}

        {/* Content Section: Pending Students */}
        {activeTab === 'students' && (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pendingStudents.length > 0 ? (
              pendingStudents.map(student => (
                <div key={student.email} className="bg-white border border-outline-variant p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container shrink-0">
                        <img 
                          alt={student.name} 
                          className="w-full h-full object-cover" 
                          src={student.avatar}
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'; }}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-on-surface text-base truncate">{student.name}</h4>
                        <p className="text-[10px] font-bold text-outline">EN: {student.enrollment}</p>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-low p-3.5 rounded-xl mb-4 text-xs font-semibold text-on-surface-variant flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span>Branch</span>
                        <span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold">
                          {student.branch}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Institution</span>
                        <span className="text-on-surface font-bold truncate max-w-[150px]">{student.institute}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-[9px] uppercase text-outline font-bold tracking-wider mb-2">Pending Document</p>
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); alert("Opening Document Preview..."); }}
                        className="flex items-center gap-2 border border-dashed border-outline-variant p-2 rounded-lg hover:bg-surface-container transition-colors"
                      >
                        <span className="material-symbols-outlined text-primary text-base">description</span>
                        <span className="text-xs font-bold text-primary hover:underline truncate">Final_Diploma_Cert.pdf</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button 
                      onClick={() => updateStatus(student.email, 'Verified')}
                      className="flex-grow bg-primary text-white py-2 rounded-lg font-bold text-xs hover:brightness-110 transition-all shadow-sm"
                    >
                      Verify
                    </button>
                    <Link 
                      to="/admin-portal/review-student_rahul-deshmukh"
                      className="px-3 py-2 bg-white border border-outline-variant text-on-surface font-bold text-xs rounded-lg hover:bg-surface-container flex items-center justify-center"
                    >
                      Details
                    </Link>
                    <button 
                      onClick={() => updateStatus(student.email, 'Flagged')}
                      className="px-2.5 border border-red-200 text-red-600 hover:bg-red-50 py-2 rounded-lg font-bold text-xs transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-on-surface-variant font-medium bg-white rounded-2xl border border-dashed border-outline-variant">
                No student profiles currently awaiting document verification.
              </div>
            )}
          </section>
        )}

        {/* Content Section: Document Review (Bento Grid Style) */}
        {activeTab === 'docs' && (
          <section className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Statistics Card */}
              <div className="lg:col-span-1 bg-primary text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between text-left relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 1px' }}></div>
                <div className="relative z-10">
                  <h4 className="text-xs font-bold opacity-80 uppercase tracking-wider mb-2">Total Queue Size</h4>
                  <p className="text-5xl font-black">124</p>
                  <p className="text-xs font-bold bg-white/20 inline-block px-2.5 py-1 rounded-full mt-3">Avg Review Time: 4.2m</p>
                </div>
                <div className="mt-12 flex items-center gap-2 relative z-10 font-bold text-sm">
                  <span className="material-symbols-outlined">speed</span>
                  <span>Priority Protocol Active</span>
                </div>
              </div>
              
              {/* Main Review Panel */}
              <div className="lg:col-span-2 bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="bg-surface-container px-6 py-4 flex justify-between items-center border-b border-outline-variant">
                  <h4 className="text-sm font-bold text-on-surface">Queue Spotlight: Accreditation ID-998</h4>
                  <div className="flex gap-3 text-on-surface-variant">
                    <button className="hover:text-primary transition-colors text-xl font-bold flex items-center" onClick={() => alert("Zooming In...")}>
                      <span className="material-symbols-outlined text-lg">zoom_in</span>
                    </button>
                    <button className="hover:text-primary transition-colors text-xl font-bold flex items-center" onClick={() => alert("Printing Document...")}>
                      <span className="material-symbols-outlined text-lg">print</span>
                    </button>
                  </div>
                </div>
                <div className="aspect-video bg-neutral-900 flex items-center justify-center p-8 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-semibold">Viewing: Industrial_Safety_Accreditation_2024.jpg</p>
                  </div>
                  <img 
                    alt="Document Preview" 
                    className="max-h-full rounded shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-300" 
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800"
                  />
                </div>
                <div className="p-5 flex justify-end gap-3 bg-surface-container-low border-t border-outline-variant">
                  <button 
                    onClick={() => alert("Document review deferred to supervisor.")}
                    className="px-5 py-2.5 bg-white border border-outline-variant text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container transition-all"
                  >
                    Defer Review
                  </button>
                  <button 
                    onClick={() => alert("Safety certificate approved and logged!")}
                    className="px-6 py-2.5 bg-secondary text-white font-bold text-xs rounded-xl hover:brightness-110 transition-all shadow-md"
                  >
                    Approve Document
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant w-full py-4 mt-auto flex flex-col sm:flex-row justify-between items-center px-6 lg:ml-72 lg:max-w-[calc(100%-18rem)]">
        <p className="text-xs text-on-surface-variant font-medium">© 2024 MSBTE Diploma Jobs - Industrial Administration Suite</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <Link className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" to="/admin-portal/system-health-monitoring">System Status</Link>
          <a className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" href="mailto:support@dte.gov.in">Admin Support</a>
          <Link className="text-xs text-on-surface-variant hover:text-primary font-bold transition-colors" to="/admin-portal/admin-settings-platform-controls">Platform Controls</Link>
        </div>
      </footer>
    </div>
  );
}
