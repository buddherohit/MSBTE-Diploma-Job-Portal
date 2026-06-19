// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers, updateUserVerificationStatus } from '../../utils/auth';

export default function ReviewStudentRahulDeshmukh() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [clarificationText, setClarificationText] = useState('');

  const handleApprove = async () => {
    try {
      const allUsers = await getUsers();
      // Locate the first student (or default student 'student@msbtejobs.in') to approve
      const user = allUsers.find(u => u.role === 'student' && u.email.toLowerCase() === 'student@msbtejobs.in');
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, 'Verified', true);
      }
      alert('Student Credentials Approved Successfully in MSBTE Database!');
      navigate('/admin-portal/verification-hub');
    } catch (err) {
      console.error("Failed to approve student credentials:", err);
    }
  };

  const handleFlag = async () => {
    try {
      const allUsers = await getUsers();
      const user = allUsers.find(u => u.role === 'student' && u.email.toLowerCase() === 'student@msbtejobs.in');
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, 'Flagged', false);
      }
      alert('Student Profile Flagged for Compliance Issues!');
      navigate('/admin-portal/verification-hub');
    } catch (err) {
      console.error("Failed to flag student profile:", err);
    }
  };

  const handleClarificationSubmit = (e) => {
    e.preventDefault();
    if (!clarificationText.trim()) return;
    alert(`Clarification request sent to student:\n"${clarificationText}"`);
    setModalOpen(false);
    setClarificationText('');
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="verification" />

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 px-6 pb-36 text-left">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 mt-4 text-on-surface-variant text-xs font-bold">
          <Link to="/admin-portal/admin-dashboard-overview" className="hover:text-primary">Dashboard</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/admin-portal/verification-hub" className="hover:text-primary">Verification Queue</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Rahul Deshmukh</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-primary-container mb-4 shadow-sm">
                  <img 
                    alt="Student Headshot"
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
                  />
                </div>
                <h2 className="text-xl font-bold text-on-surface tracking-tight">Rahul Deshmukh</h2>
                <p className="text-xs font-semibold text-on-surface-variant mb-4">Mechanical Engineering Graduate</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full font-bold text-[10px] uppercase tracking-wider">Awaiting KYC</span>
                  <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-bold text-[10px] uppercase tracking-wider">Class of 2023</span>
                </div>
              </div>
              
              <hr className="my-6 border-outline-variant" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-on-surface-variant">Account Status</span>
                  <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 rounded-lg font-bold border border-yellow-200 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">pending</span>
                    Under Review
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider pl-1">Contact Information</span>
                  <div className="flex items-center gap-2 text-on-surface text-sm font-semibold p-2 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-[18px] text-outline">mail</span>
                    <span className="truncate">rahul.desh@msbte.edu.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface text-sm font-semibold p-2 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-[18px] text-outline">call</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Status Insights Card */}
            <section className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm text-left">
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4 pl-1">Verification Insights</h3>
              <div className="space-y-4 text-xs font-semibold text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined text-[20px]">history</span>
                  </div>
                  <div>
                    <p className="text-on-surface font-bold">Last Activity</p>
                    <p className="text-[10px] text-outline">2 hours ago • Updated Profile Image</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </div>
                  <div>
                    <p className="text-on-surface font-bold">Registry Matches</p>
                    <p className="text-[10px] text-outline">DTE Enrollment Match: 100% matched</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* Academic Records Section */}
            <section className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-surface-container px-6 py-4 border-b border-outline-variant flex justify-between items-center">
                <h3 className="font-bold text-base text-on-surface">Academic Registry Match</h3>
                <span className="px-2.5 py-0.5 bg-primary text-white text-[9px] rounded-lg uppercase font-bold tracking-wider">Official Sync</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-xl">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">Enrollment Number</span>
                    <p className="text-lg font-black text-primary mt-1">2001590342</p>
                  </div>
                  <div className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-xl">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">Final CGPA</span>
                    <p className="text-lg font-black text-green-700 mt-1">8.92 / 10.0</p>
                  </div>
                  <div className="sm:col-span-2 p-4 bg-surface-container-low border border-outline-variant/50 rounded-xl">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">Institute Name</span>
                    <p className="text-sm font-bold text-on-surface mt-1">Government Polytechnic, Mumbai (0002)</p>
                  </div>
                  <div className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-xl">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">Branch / Stream</span>
                    <p className="text-sm font-bold text-on-surface mt-1">Mechanical Engineering (ME)</p>
                  </div>
                  <div className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-xl">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">Year of Passing</span>
                    <p className="text-sm font-bold text-on-surface mt-1">June 2023</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Document Verification Section */}
            <section className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-surface-container px-6 py-4 border-b border-outline-variant">
                <h3 className="font-bold text-base text-on-surface">Digital Artifacts</h3>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Doc Card 1 */}
                <div className="border border-outline-variant rounded-xl p-4 hover:border-primary hover:shadow-sm transition-all bg-surface-container-low flex gap-4 text-left">
                  <div className="w-12 h-16 bg-red-100 border border-red-200 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                    <span className="material-symbols-outlined text-3xl">description</span>
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-on-surface truncate">Diploma Certificate</h4>
                      <p className="text-[10px] text-on-surface-variant font-semibold mt-0.5">PDF • 2.4 MB</p>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button 
                        onClick={() => alert('Opening Diploma Certificate PDF...')}
                        className="px-2.5 py-1 bg-primary text-white rounded-lg font-bold text-[10px] hover:brightness-110 shadow-sm"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => alert('Downloading file...')}
                        className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Doc Card 2 */}
                <div className="border border-outline-variant rounded-xl p-4 hover:border-primary hover:shadow-sm transition-all bg-surface-container-low flex gap-4 text-left">
                  <div className="w-12 h-16 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-3xl">feed</span>
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-on-surface truncate">Final Year Marksheet</h4>
                      <p className="text-[10px] text-on-surface-variant font-semibold mt-0.5">JPG • 1.1 MB</p>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button 
                        onClick={() => alert('Opening Marksheet Image...')}
                        className="px-2.5 py-1 bg-primary text-white rounded-lg font-bold text-[10px] hover:brightness-110 shadow-sm"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => alert('Downloading file...')}
                        className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Verification Panel (Sticky Footer) */}
      <div className="fixed bottom-0 right-0 left-0 lg:left-72 z-40 bg-surface-container-highest border-t-2 border-primary py-4 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] backdrop-blur-md bg-opacity-95 text-left">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface leading-none">Awaiting Final Review</p>
              <p className="text-[10px] text-on-surface-variant font-semibold mt-1">Reviewing credentials for <strong>Rahul Deshmukh</strong></p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={handleFlag}
              className="px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-700 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">report</span>
              Flag Profile
            </button>
            <button 
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-white border border-outline-variant text-on-surface hover:bg-surface-container-high rounded-xl font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
              Request More Info
            </button>
            <button 
              onClick={handleApprove}
              className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-primary/15"
            >
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Approve Credentials
            </button>
          </div>
        </div>
      </div>

      {/* Clarification Request Modal Dialog */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-outline-variant rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200 text-left">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
              <h3 className="text-base font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">chat_bubble</span>
                Request Clarification
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <form onSubmit={handleClarificationSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-on-surface-variant">Message to Student</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="State what documents are unclear or what information requires update..."
                  className="w-full border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white resize-none"
                  value={clarificationText}
                  onChange={(e) => setClarificationText(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-outline-variant">
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-outline-variant hover:bg-surface-container-high rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:brightness-110 shadow-sm"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
