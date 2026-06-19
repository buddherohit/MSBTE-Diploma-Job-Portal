// MANUAL_JSX_FILE
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers, updateUserVerificationStatus } from '../../utils/auth';

export default function VerifyEmployerMaharashtraIndustrialCorp() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [infoRequest, setInfoRequest] = useState('');

  const handleApprove = async () => {
    try {
      const allUsers = await getUsers();
      // Locate the matching employer (or default employer 'employer@msbtejobs.in') to approve
      const user = allUsers.find(u => u.role === 'employer' && u.email.toLowerCase() === 'employer@msbtejobs.in');
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, 'Verified', true);
      }
      alert('Accreditation approved for Maharashtra Industrial Corp! They can now post jobs.');
      navigate('/admin-portal/verification-hub');
    } catch (err) {
      console.error("Failed to approve accreditation:", err);
    }
  };

  const handleFlag = async () => {
    try {
      const allUsers = await getUsers();
      const user = allUsers.find(u => u.role === 'employer' && u.email.toLowerCase() === 'employer@msbtejobs.in');
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, 'Flagged', false);
      }
      alert('Employer has been flagged in the MSBTE Registry.');
      navigate('/admin-portal/verification-hub');
    } catch (err) {
      console.error("Failed to flag employer:", err);
    }
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (!infoRequest.trim()) return;
    alert(`Information request sent to employer:\n"${infoRequest}"`);
    setModalOpen(false);
    setInfoRequest('');
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="verification" />

      {/* Main Content Area */}
      <main className="lg:ml-72 pt-20 px-6 pb-36 text-left">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 mt-4 text-on-surface-variant text-xs font-bold">
          <Link to="/admin-portal/admin-dashboard-overview" className="hover:text-primary">Dashboard</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/admin-portal/verification-hub" className="hover:text-primary">Verification Queue</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Maharashtra Industrial Corp</span>
        </div>

        {/* Company Header Card */}
        <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-surface-container rounded-xl border border-outline-variant flex items-center justify-center p-2 shadow-sm shrink-0">
              <img 
                alt="Maharashtra Industrial Corp Logo" 
                className="w-full h-full object-contain mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0R8S7LDNUwWDn0jYR9XwAuce72TXB5KYZarFQmX8-4QuTGt_IQWw1up3HcZhNOrslRPdZpgimAfsis4vKvmVt-9uENAiUHu0tZbkhZaiy-QHMSalsk1_WG9-Q-yed4nuhrIRHv8nEgaDJ3DLeTXhbRihXYNlSkFNQRufudrrJq2YUP0imWzB9x1NPW58EGbQfgz-GYhBeAoTt2_KANQ_506mcxcjjofgfyqLeoNnXcJyoP2oCTR-uWdwKoDO_Uq9beaqiPde1Pk8"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=150'; }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-primary tracking-tight mb-1">Maharashtra Industrial Corp</h2>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 px-3 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">priority_high</span>
                  URGENT REVIEW
                </span>
                <span className="text-on-surface-variant text-xs font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                  Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Submission Date</p>
            <p className="text-lg font-black text-on-surface">Oct 24, 2023</p>
          </div>
        </section>

        {/* Verification Progress Stepper */}
        <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-xs font-bold text-on-surface-variant mb-6 uppercase tracking-wider pl-1">Verification Progress</h3>
          <div className="relative flex flex-col sm:flex-row justify-between gap-6">
            <div className="absolute top-5 left-0 w-full h-1 bg-surface-container-high -z-0 hidden sm:block"></div>
            <div className="absolute top-5 left-0 w-2/3 h-1 bg-primary -z-0 hidden sm:block"></div>
            
            <div className="relative z-10 flex items-center sm:flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                <span className="material-symbols-outlined text-base">check</span>
              </div>
              <span className="font-bold text-xs text-primary">Documents Uploaded</span>
            </div>
            
            <div className="relative z-10 flex items-center sm:flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white font-bold text-sm">
                <span className="material-symbols-outlined text-base">verified_user</span>
              </div>
              <span className="font-bold text-xs text-primary">Identity Checked</span>
            </div>
            
            <div className="relative z-10 flex items-center sm:flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-white font-bold text-sm">
                <span className="material-symbols-outlined text-base">pending</span>
              </div>
              <span className="font-bold text-xs text-on-surface-variant">Final Approval</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Legal Credentials Section */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  Legal Credentials
                </h3>
                <button 
                  onClick={() => alert("Re-syncing with MCA / GSTIN databases...")}
                  className="text-primary hover:bg-primary-fixed px-3 py-1.5 rounded-lg font-bold text-xs transition-colors border border-primary/20"
                >
                  Refresh API Sync
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                  <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-wider">CIN / Registration Number</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-sm text-on-surface">U74999MH2012PLC234567</span>
                    <span className="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-0.5 self-start sm:self-auto">
                      <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                      OFFICIAL MATCH
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                  <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-wider">GST Number</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-sm text-on-surface">27AAACH1234F1Z5</span>
                    <span className="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-0.5 self-start sm:self-auto">
                      <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
                      GST VALID
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Documents Grid */}
            <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">folder_shared</span>
                Business Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Document Card 1 */}
                <div className="group bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden transition-all hover:shadow-sm">
                  <div className="h-28 bg-neutral-900 overflow-hidden relative">
                    <img 
                      alt="PAN Card Thumbnail" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300" 
                      src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=150"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <p className="font-bold text-xs text-on-surface mb-2 truncate">Company PAN Card</p>
                    <button 
                      onClick={() => alert("Previewing PAN Card Scan...")}
                      className="w-full bg-primary text-white py-1.5 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      View Scan
                    </button>
                  </div>
                </div>
                {/* Document Card 2 */}
                <div className="group bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden transition-all hover:shadow-sm">
                  <div className="h-28 bg-neutral-900 overflow-hidden relative">
                    <img 
                      alt="Incorporation Certificate" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300" 
                      src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=150"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <p className="font-bold text-xs text-on-surface mb-2 truncate">Incorporation Cert.</p>
                    <button 
                      onClick={() => alert("Previewing Certificate of Incorporation...")}
                      className="w-full bg-primary text-white py-1.5 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      View Scan
                    </button>
                  </div>
                </div>
                {/* Document Card 3 */}
                <div className="group bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden transition-all hover:shadow-sm">
                  <div className="h-28 bg-neutral-900 overflow-hidden relative">
                    <img 
                      alt="Address Proof Thumbnail" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300" 
                      src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=150"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <p className="font-bold text-xs text-on-surface mb-2 truncate">Company Address Proof</p>
                    <button 
                      onClick={() => alert("Previewing Address Proof bill/statement...")}
                      className="w-full bg-primary text-white py-1.5 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      View Scan
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Recruiter Profile Summary */}
          <aside className="flex flex-col gap-6">
            <section className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm text-left">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">account_circle</span>
                Corporate Profile
              </h3>
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-surface-container-high mb-3 overflow-hidden shadow-sm">
                  <img 
                    alt="Contact Person Avatar" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  />
                </div>
                <p className="font-bold text-base text-on-surface leading-tight">Rohan Sharma</p>
                <p className="text-xs text-on-surface-variant font-semibold mt-0.5">Chief Recruiting Coordinator</p>
              </div>
              <div className="space-y-3 font-semibold text-xs text-on-surface">
                <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>mail</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] text-outline uppercase font-bold">Official Email</p>
                    <p className="truncate mt-0.5">employer@msbtejobs.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>call</span>
                  <div>
                    <p className="text-[9px] text-outline uppercase font-bold">Contact Number</p>
                    <p className="mt-0.5">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>badge</span>
                  <div>
                    <p className="text-[9px] text-outline uppercase font-bold">Portal ID</p>
                    <p className="mt-0.5">EMP-8821-MOD</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary text-white p-6 rounded-2xl shadow-lg text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-90">Moderator Notes</h4>
              <p className="text-xs italic leading-relaxed opacity-80">
                "Company matches industrial guidelines for career fair listings. Direct integration approved for Pune and Nashik industrial zones."
              </p>
            </section>
          </aside>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 lg:left-72 bg-surface border-t border-outline-variant px-6 py-4 z-40 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] backdrop-blur-md bg-opacity-95 text-left">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 text-on-surface-variant font-semibold text-xs">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>info</span>
            <p>Reviewing credentials as <strong>DTE Registry Officer</strong></p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
            <button 
              onClick={handleFlag}
              className="flex-1 md:flex-none border border-red-200 text-red-600 hover:bg-red-50 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-base">flag</span>
              Flag for Review
            </button>
            <button 
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none border border-outline-variant text-on-surface hover:bg-surface-container-high px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-base">chat_bubble</span>
              Request More Info
            </button>
            <button 
              onClick={handleApprove}
              className="flex-[2] md:flex-none bg-primary text-white hover:brightness-110 px-8 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-primary/15"
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified_user</span>
              Approve Accreditation
            </button>
          </div>
        </div>
      </footer>

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

            <form onSubmit={handleInfoSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-on-surface-variant">Message to Employer</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Detail the missing or unclear company documents..."
                  className="w-full border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white resize-none"
                  value={infoRequest}
                  onChange={(e) => setInfoRequest(e.target.value)}
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
