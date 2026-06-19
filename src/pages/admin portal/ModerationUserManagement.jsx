// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import { getUsers, updateUserVerificationStatus } from '../../utils/auth';

const INITIAL_REPORTS = [
  { id: 1, type: 'Job Listing Fraud', title: 'Data Entry (Work from Home) - ₹50,000/week', target: 'Sky-Rise Solutions', time: '2h ago', badgeColor: 'bg-red-100 text-red-800' },
  { id: 2, type: 'Policy Violation', title: 'Offensive comment on DTE Admission thread.', target: 'Rahul Kamble', time: '5h ago', badgeColor: 'bg-yellow-100 text-yellow-800' }
];

export default function ModerationUserManagement() {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('Status: All');
  const [selectedUser, setSelectedUser] = useState(null);
  
  // Simulated logs
  const [logs, setLogs] = useState([
    '[14:22:10] AUTH_SUCCESS: User ID #9928 logged in',
    '[14:21:45] MOD_ACTION: Post #4412 suppressed by System_Bot (Auto-filter: Spam)',
    '[14:18:33] API_CALL: GET /v1/students/records?batch=2024',
    '[14:15:22] VERIFY_REQ: Tata Steel Ltd profile submitted for review',
    '[14:12:01] SYS_HEALTH: All microservices operational. Latency 42ms.',
    '[14:10:55] FLAG_EVENT: Repetitive application detected from User #1102'
  ]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const list = await getUsers();
      // Format list with initials and default statuses if missing
      const formatted = list.map(u => ({
        ...u,
        id: u.id || `UID-${Math.floor(100000 + Math.random() * 900000)}`,
        status: u.status || (u.verified ? 'Active' : 'Pending'),
        initials: u.name ? u.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'
      }));
      setUsers(formatted);
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  };

  const updateStatus = async (email, newStatus) => {
    try {
      const allUsers = await getUsers();
      const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (user && user.uid) {
        await updateUserVerificationStatus(user.uid, newStatus, newStatus === 'Active' || newStatus === 'Verified');
      }
      await loadUsers();
      
      // Log moderation action
      const timeString = new Date().toLocaleTimeString('en-US', { hour12: false });
      setLogs(prev => [
        `[${timeString}] MOD_ACTION: User ${email} status changed to ${newStatus}`,
        ...prev
      ]);

      if (selectedUser && selectedUser.email.toLowerCase() === email.toLowerCase()) {
        setSelectedUser(prev => ({ ...prev, status: newStatus }));
      }
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  // Report Actions
  const handleReportAction = (id, action) => {
    setReports(prev => prev.filter(r => r.id !== id));
    alert(`Report #${id} has been ${action === 'delete' ? 'deleted' : 'dismissed'}.`);
  };

  // Filters
  const filteredUsers = users.filter(u => {
    const matchesSearch = 
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    let matchesRole = true;
    if (roleFilter !== 'All Roles') {
      matchesRole = u.role.toLowerCase() === roleFilter.toLowerCase();
    }

    let matchesStatus = true;
    if (statusFilter !== 'Status: All') {
      const target = statusFilter.split(': ')[1] || statusFilter;
      matchesStatus = u.status.toLowerCase() === target.toLowerCase() || 
                      (target === 'Active' && u.status === 'Verified');
    }

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="moderation" />

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 mt-4">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Admin Control Panel</h2>
            <p className="text-on-surface-variant font-medium text-sm mt-1">
              Manage platform integrity, review flagged accounts, and monitor industrial listings.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => alert("Downloading CSV of moderation audits...")}
              className="bg-white border border-outline-variant px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Export Audit Log
            </button>
          </div>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 border border-outline-variant rounded-2xl flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-red-600 bg-red-50 p-2 rounded-xl border border-red-100">report</span>
              <span className="text-[10px] font-black text-red-600 bg-red-100 px-2 py-0.5 rounded-full border border-red-200">+12%</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">Reported Content</p>
              <p className="text-3xl font-black text-on-surface mt-1">{reports.length}</p>
            </div>
          </div>
          <div className="bg-white p-5 border border-outline-variant rounded-2xl flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-primary bg-primary-fixed text-on-primary-fixed-variant p-2 rounded-xl">how_to_reg</span>
              <span className="text-[10px] font-black text-green-700 bg-green-100 px-2 py-0.5 rounded-full border border-green-200">Active</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">Awaiting Verification</p>
              <p className="text-3xl font-black text-on-surface mt-1">
                {users.filter(u => u.status.toLowerCase().includes('pending')).length}
              </p>
            </div>
          </div>
          <div className="bg-white p-5 border border-outline-variant rounded-2xl flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-outline bg-surface-container p-2 rounded-xl">person_cancel</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">Suspended Users</p>
              <p className="text-3xl font-black text-on-surface mt-1">
                {users.filter(u => u.status.toLowerCase().includes('suspend')).length}
              </p>
            </div>
          </div>
          <div className="bg-white p-5 border border-outline-variant rounded-2xl flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-xl border border-green-100">security</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">Risk Score (Avg)</p>
              <p className="text-2xl font-black text-green-600 mt-1.5 uppercase">LOW</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-outline-variant rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 mb-8 shadow-sm">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-semibold" 
              placeholder="Search by name, email, or UID..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select 
              className="bg-white border border-outline-variant rounded-xl px-3 py-2.5 text-xs font-semibold outline-none cursor-pointer flex-1 md:flex-none"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option>All Roles</option>
              <option>Student</option>
              <option>Employer</option>
            </select>
            <select 
              className="bg-white border border-outline-variant rounded-xl px-3 py-2.5 text-xs font-semibold outline-none cursor-pointer flex-1 md:flex-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>Status: All</option>
              <option>Active</option>
              <option>Suspended</option>
              <option>Flagged</option>
            </select>
            <button 
              onClick={() => {
                setSearch('');
                setRoleFilter('All Roles');
                setStatusFilter('Status: All');
              }}
              className="bg-surface-container-high border border-outline-variant p-2.5 rounded-xl hover:bg-outline-variant transition-colors"
              title="Reset Filters"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            </button>
          </div>
        </div>

        {/* Main Moderation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* User Management Table */}
          <div className="lg:col-span-2 bg-white border border-outline-variant rounded-2xl overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h3 className="font-bold text-base text-on-surface">User Management Table</h3>
              <span className="text-xs font-bold text-on-surface-variant bg-white border border-outline-variant px-3 py-1 rounded-full uppercase tracking-wider">
                {filteredUsers.length} Users Listed
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant text-[10px] font-bold text-outline uppercase tracking-wider">
                    <th className="px-6 py-4">User Identity</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant font-semibold text-sm">
                  {filteredUsers.map((user) => (
                    <tr 
                      key={user.email} 
                      className="hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">
                            {user.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="text-on-surface font-bold truncate">{user.name || user.companyName}</p>
                            <p className="text-xs text-on-surface-variant font-medium truncate">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                          user.role === 'student' 
                            ? 'bg-blue-50 text-blue-800 border-blue-200' 
                            : 'bg-secondary-container/10 text-secondary border-secondary/20'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            user.status === 'Active' || user.status === 'Verified' 
                              ? 'bg-green-500' 
                              : (user.status === 'Suspended' ? 'bg-red-500' : 'bg-yellow-500')
                          }`}></span>
                          <span className="text-xs font-bold text-on-surface">{user.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end gap-1.5">
                          {user.status !== 'Suspended' ? (
                            <button 
                              onClick={() => updateStatus(user.email, 'Suspended')}
                              className="text-[10px] bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-2.5 py-1 rounded-lg font-bold"
                            >
                              Suspend
                            </button>
                          ) : (
                            <button 
                              onClick={() => updateStatus(user.email, 'Active')}
                              className="text-[10px] bg-green-50 text-green-700 border border-green-200 hover:bg-green-700 hover:text-white px-2.5 py-1 rounded-lg font-bold"
                            >
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reported Content Feed & System logs */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-bold text-on-surface flex items-center gap-2 mb-4 uppercase tracking-wider">
                <span className="material-symbols-outlined text-red-600 text-base">campaign</span>
                Urgent Review Queue
              </h3>
              
              <div className="space-y-4">
                {reports.length > 0 ? (
                  reports.map((rep) => (
                    <div key={rep.id} className="p-4 bg-surface-container-low border border-outline-variant/60 rounded-xl text-left">
                      <div className="flex justify-between items-start mb-2 text-[10px] font-bold">
                        <span className={`px-2 py-0.5 rounded-full border uppercase ${rep.badgeColor}`}>
                          {rep.type}
                        </span>
                        <span className="text-outline">{rep.time}</span>
                      </div>
                      <p className="text-xs font-bold text-on-surface leading-tight mb-2">{rep.title}</p>
                      <p className="text-[10px] text-on-surface-variant font-semibold mb-3">Target: {rep.target}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleReportAction(rep.id, 'delete')}
                          className="flex-1 bg-red-600 text-white py-1.5 rounded-lg text-[10px] font-bold hover:bg-red-700 transition-colors shadow-sm"
                        >
                          Delete
                        </button>
                        <button 
                          onClick={() => handleReportAction(rep.id, 'dismiss')}
                          className="flex-1 border border-outline-variant bg-white py-1.5 rounded-lg text-[10px] font-bold hover:bg-surface-container transition-colors"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-xs text-on-surface-variant font-medium bg-surface-container rounded-xl border border-dashed border-outline-variant">
                    All reports cleared!
                  </div>
                )}
              </div>
            </div>

            {/* System Logs */}
            <div className="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm h-64 flex flex-col">
              <h3 className="text-xs font-bold text-outline mb-3 uppercase tracking-wider">Live Activity Log</h3>
              <div className="flex-1 overflow-y-auto font-mono text-[10px] leading-relaxed text-on-surface-variant space-y-1 bg-surface-container-low p-3 rounded-xl border border-outline-variant/50">
                {logs.map((log, index) => (
                  <p key={index} className="truncate">
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Side-Sheet Modal (Slide-over panel) */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end"
          onClick={() => setSelectedUser(null)}
        >
          <div 
            className="h-full w-full max-w-md bg-white border-l border-outline-variant shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h2 className="text-lg font-bold text-on-surface">Audit Profile Detail</h2>
              <button 
                onClick={() => setSelectedUser(null)}
                className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center font-extrabold text-2xl mb-3 shadow-inner">
                  {selectedUser.initials}
                </div>
                <h3 className="text-lg font-bold text-on-surface">{selectedUser.name || selectedUser.companyName}</h3>
                <p className="text-xs font-semibold text-on-surface-variant mt-1">
                  Registered as: <span className="uppercase font-extrabold text-primary">{selectedUser.role}</span>
                </p>
                <div className="mt-3 flex gap-2 flex-wrap justify-center">
                  <span className="bg-primary-container text-on-primary-container text-[9px] font-bold px-3 py-0.5 rounded-full border border-primary-container">
                    {selectedUser.status}
                  </span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div className="p-3.5 bg-surface-container rounded-xl border border-outline-variant/40">
                  <p className="text-[9px] text-outline uppercase font-bold tracking-wider mb-1">User Role</p>
                  <p className="text-on-surface uppercase">{selectedUser.role}</p>
                </div>
                <div className="p-3.5 bg-surface-container rounded-xl border border-outline-variant/40">
                  <p className="text-[9px] text-outline uppercase font-bold tracking-wider mb-1">Enrollment / ID</p>
                  <p className="text-on-surface uppercase truncate">{selectedUser.enrollment || selectedUser.id || 'N/A'}</p>
                </div>
                <div className="p-3.5 bg-surface-container rounded-xl border border-outline-variant/40 col-span-2">
                  <p className="text-[9px] text-outline uppercase font-bold tracking-wider mb-1">Registered Email</p>
                  <p className="text-on-surface truncate">{selectedUser.email}</p>
                </div>
              </div>

              {/* Moderation Actions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-on-surface border-l-4 border-primary pl-2 uppercase tracking-wider">Account Control</h4>
                
                <button 
                  onClick={() => {
                    alert(`Direct warning mail queued for ${selectedUser.email}`);
                    setSelectedUser(null);
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl hover:bg-surface-container transition-all text-xs font-bold text-on-surface"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">mail</span>
                    <span>Send Official Warnings Notice</span>
                  </div>
                  <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
                </button>

                {selectedUser.status !== 'Suspended' ? (
                  <button 
                    onClick={() => {
                      updateStatus(selectedUser.email, 'Suspended');
                      alert(`User ${selectedUser.email} has been suspended.`);
                    }}
                    className="w-full flex items-center justify-between p-3.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all text-xs font-bold"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">block</span>
                      <span>Suspend User Access</span>
                    </div>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      updateStatus(selectedUser.email, 'Active');
                      alert(`User ${selectedUser.email} status restored to Active.`);
                    }}
                    className="w-full flex items-center justify-between p-3.5 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-all text-xs font-bold"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>Restore Normal Access</span>
                    </div>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant bg-surface-container-low flex gap-3">
              <button 
                onClick={() => {
                  updateStatus(selectedUser.email, 'Active');
                  alert('User details verified and marked active!');
                  setSelectedUser(null);
                }}
                className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-xs hover:brightness-110 shadow-sm"
              >
                Verify & Approve
              </button>
              <button 
                onClick={() => setSelectedUser(null)}
                className="flex-1 bg-white border border-outline-variant py-2.5 rounded-xl font-bold text-xs text-on-surface hover:bg-surface-container"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
