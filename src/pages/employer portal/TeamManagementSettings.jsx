import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutSession } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function TeamManagementSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  // Team States
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Recruiter');
  const [name, setName] = useState('');
  
  const [members, setMembers] = useState([
    {
      name: "Anjali Mehta",
      email: "anjali.m@tatacommunications.com",
      role: "Admin",
      status: "Active",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzX2wo9CCp2QC7nJjsmEKMdihWyzNs-dgEerb1bMF8th2hO4AkupU5ifgPBUrDdlp6-XwhrBBzbz5lgBFtlXJnXQaRESrfk5SREaYKITC2lS37sviQWgOIRIODWIFOlI11Hi-nkVoX-liLkP8285PWnbeE8aTWGqbKmmV1WazyodIQfq3IjGkB7-qOYM5uc9e7YKV7-SKytHQ5651aaXllIiUFFxFHfWlgvXRVClEYfc8GG8XMb9gYkC7ULFHiQ0IBabCVYu7rqSM"
    },
    {
      name: "Rahul Kulkarni",
      email: "rahul.k@tatacommunications.com",
      role: "Recruiter",
      status: "Active",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_I0Wmt1ltr0GwOrtEAM4orkCinxIf5VVw_QNflMyqQjTdcVSwGc4z-2O7SBce5iaboO1oPEKDPhOcAF09qWtIjdj7z3itgEZP74bW3FqEJ-DnkIh9J5rJmRCXI0MkCkKGPJwFjWG8XTgH-njLYsjHUCevWPz4Eu5IbAvLaSw1cZ2ZR5DBit-Kg9MnIpTaC7kuB0cUk8VP6su1NDaTh_bgWZl2MWnb6iZOBq-61QKFtDBlPwjhpyIVZO7LQQFLcbCL84QdOvtR9kU"
    },
    {
      name: "Sneha Patil",
      email: "sneha.p@tatacommunications.com",
      role: "Reviewer",
      status: "Active",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBRJ1tixphUBTNu9Trz2RG7PJeQeW7uDUN7wZIrhPKa70jAk3wKEf3tCJgBU3UAWjAojoz1Ca6x6SfaZvZHfHXE3kuKhOiGwOG-yvpimRQzsUCeXbjKygDo6YRf84Z53BlvjpH7YVGPWkTUWT7sNVBEa-1WG12CwBKpenGThol5hWBEHWzIbd_ec2hxC3ntlYMmSxQrhPwiZIXGA4-vKcLwkfIuekbGksZMxVkenVXwsZqeKv06WzdUdSX1FdNNCK4O1eXQRYPhqo"
    }
  ]);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'employer') {
      navigate('/public/student-login?tab=employer');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleLogout = () => {
    logoutSession();
    navigate('/');
  };

  const handleSendInvite = (e) => {
    if (e) e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    const newMember = {
      name: name.trim(),
      email: email.trim(),
      role,
      status: 'Invited',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    };

    setMembers([...members, newMember]);
    setName('');
    setEmail('');
    setRole('Recruiter');
    setShowInviteForm(false);
    alert(`Invitation successfully sent to ${newMember.email}!`);
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  // Calculate statistics
  const adminsCount = members.filter(m => m.role === 'Admin').length;
  const recruitersCount = members.filter(m => m.role === 'Recruiter').length;
  const reviewersCount = members.filter(m => m.role === 'Reviewer').length;

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="settings" />

      {/* Top Header Label */}
      <div className="bg-white border-b border-outline-variant py-3 sticky top-20 z-20 shadow-xs text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile flex justify-between items-center">
          <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">Team Management</span>
          <Link to="/employer-portal/employer-settings-main-menuemployer-settings-main-menu" className="text-primary font-bold text-xs hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">arrow_back</span> Back to Settings
          </Link>
        </div>
      </div>

      <div className="flex max-w-container-max mx-auto min-h-[calc(100vh-128px)] text-left">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden md:flex flex-col h-full py-6 w-80 bg-surface border-r border-outline-variant shrink-0">
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
            </div>
            <div>
              <h2 className="font-label-md text-on-surface font-bold text-sm">Settings Hub</h2>
              <p className="text-xs text-on-surface-variant font-semibold">Manage organization & account</p>
            </div>
          </div>
          <nav className="flex-grow flex flex-col gap-1 px-3">
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/employer-profile-settings"
            >
              <span className="material-symbols-outlined">account_circle</span>
              <span>Account Details</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/company-profile-settings"
            >
              <span className="material-symbols-outlined">domain</span>
              <span>Company Profile</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-bold text-sm" 
              to="/employer-portal/billing-&-subscription-settings"
            >
              <span className="material-symbols-outlined">payments</span>
              <span>Billing & Subscription</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-3 rounded-lg text-primary font-bold bg-primary-fixed/30 border-r-4 border-primary transition-all text-sm" 
              to="/employer-portal/team-management-settings"
            >
              <span className="material-symbols-outlined">group</span>
              <span>Team Management</span>
            </Link>
          </nav>
          <div className="px-6 mt-auto">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all font-bold text-sm"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 pb-32 md:pb-8 max-w-4xl mx-auto w-full">
          <div className="space-y-8">
            {/* Header & Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold mb-1">Team Management</h2>
                <p className="text-on-surface-variant text-body-md">Manage recruiters and dashboard access levels for your organization.</p>
              </div>
              <button 
                onClick={() => setShowInviteForm(!showInviteForm)}
                className="bg-primary text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-primary/95 transition-all shadow-md active:scale-98"
              >
                <span className="material-symbols-outlined">person_add</span>
                Invite New Member
              </button>
            </div>

            {/* Invite Form (Collapsible) */}
            {showInviteForm && (
              <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
                <h3 className="font-bold text-sm text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  Send Invitation
                </h3>
                <form onSubmit={handleSendInvite} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-4 flex flex-col gap-1">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                    <input 
                      required 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="e.g. John Doe" 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-4 flex flex-col gap-1">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <input 
                      required 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="colleague@tatacommunications.com" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Assigned Role</label>
                    <select 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-sm font-bold text-primary outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Recruiter</option>
                      <option>Reviewer</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex items-end gap-2">
                    <button 
                      type="submit"
                      className="flex-1 bg-primary text-white font-bold py-2 px-3 rounded-lg hover:bg-primary/95 text-xs h-10 shadow-sm"
                    >
                      Invite
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowInviteForm(false)}
                      className="px-3 py-2 border border-outline-variant text-on-surface-variant hover:bg-surface-container rounded-lg text-xs h-10"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Stats Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-outline-variant shadow-xs">
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Total Seats</p>
                <p className="text-2xl font-extrabold text-primary mt-1">{members.length} / 15</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-outline-variant shadow-xs">
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Admins</p>
                <p className="text-2xl font-extrabold text-on-background mt-1">{adminsCount}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-outline-variant shadow-xs">
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Recruiters</p>
                <p className="text-2xl font-extrabold text-on-background mt-1">{recruitersCount}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-outline-variant shadow-xs">
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Reviewers</p>
                <p className="text-2xl font-extrabold text-on-background mt-1">{reviewersCount}</p>
              </div>
            </div>

            {/* Team Table */}
            <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Member</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Access Role</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Status</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {members.map((member, i) => (
                      <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant shrink-0">
                              <img alt="Member Avatar" className="w-full h-full object-cover" src={member.avatar} />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-on-surface">{member.name}</p>
                              <p className="text-xs text-on-surface-variant font-medium">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${
                            member.role === 'Admin' 
                              ? 'bg-primary-fixed text-primary' 
                              : member.role === 'Recruiter' 
                              ? 'bg-secondary-fixed text-on-secondary-fixed' 
                              : 'bg-surface-container-highest text-on-surface-variant'
                          }`}>
                            <span className="material-symbols-outlined text-[14px]">
                              {member.role === 'Admin' ? 'verified_user' : member.role === 'Recruiter' ? 'search' : 'rate_review'}
                            </span>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center gap-1 text-[11px] font-bold ${
                            member.status === 'Active' ? 'text-green-700' : 'text-orange-700'
                          }`}>
                            <span className={`h-2 w-2 rounded-full ${
                              member.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
                            }`}></span>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to remove ${member.name}?`)) {
                                setMembers(members.filter(m => m.email !== member.email));
                              }
                            }} 
                            className="text-red-600 hover:text-red-800 font-bold text-xs"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Guidance Note */}
            <div className="bg-primary-container/10 border-l-4 border-primary p-6 rounded-r-xl shadow-xs">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">info</span>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm">Access Levels Guide</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                    <strong className="text-primary">Admins</strong> can manage billing, invite users, and delete team members. <br/>
                    <strong className="text-primary">Recruiters</strong> can post jobs and manage all candidates. <br/>
                    <strong className="text-primary">Reviewers</strong> can only view applications and leave internal scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Settings Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface-container border-t border-outline-variant z-50 rounded-t-xl shadow-md">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" to="/employer-portal/employer-dashboard-industrial-blueprints-refined">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-xs font-semibold">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" to="/employer-portal/manage-jobs-employer-portal">
          <span className="material-symbols-outlined">work</span>
          <span className="font-label-sm text-xs font-semibold">Jobs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" to="/employer-portal/employer-settings-main-menuemployer-settings-main-menu">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="font-label-sm text-xs font-bold">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
