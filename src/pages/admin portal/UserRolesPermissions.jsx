import React, { useState, useEffect } from 'react';
import AdminHeader from '../../components/AdminHeader';

const INITIAL_STAFF = [
  {
    id: 'staff-1',
    name: 'Dr. Rajesh Deshmukh',
    role: 'Super Admin',
    department: 'Directorate Office',
    email: 'rajesh.d@dte.gov.in',
    permissions: {
      jobApproval: true,
      employerVerification: true,
      auditExport: true,
      systemConfig: true
    }
  },
  {
    id: 'staff-2',
    name: 'Snehal Patil',
    role: 'Registry Director',
    department: 'Certification Registry',
    email: 's.patil@dte.gov.in',
    permissions: {
      jobApproval: true,
      employerVerification: true,
      auditExport: false,
      systemConfig: false
    }
  },
  {
    id: 'staff-3',
    name: 'Amit Kulkarni',
    role: 'Moderator',
    department: 'Regional Hub North',
    email: 'amit.k@dte.gov.in',
    permissions: {
      jobApproval: true,
      employerVerification: false,
      auditExport: false,
      systemConfig: false
    }
  }
];

export default function UserRolesPermissions() {
  const [staffList, setStaffList] = useState(INITIAL_STAFF);
  const [selectedStaffId, setSelectedStaffId] = useState('staff-2');
  const [modalOpen, setModalOpen] = useState(false);
  
  // Form state for adding staff
  const [newStaff, setNewStaff] = useState({
    name: '',
    role: 'Moderator',
    department: '',
    email: ''
  });

  const selectedStaff = staffList.find(s => s.id === selectedStaffId) || staffList[0];

  const handlePermissionToggle = (key) => {
    setStaffList(prev => prev.map(staff => {
      if (staff.id === selectedStaffId) {
        return {
          ...staff,
          permissions: {
            ...staff.permissions,
            [key]: !staff.permissions[key]
          }
        };
      }
      return staff;
    }));
  };

  const handleSaveChanges = () => {
    alert(`Permissions updated successfully for ${selectedStaff.name}!`);
    // In a real database we would persist this, here we hold in local state
  };

  const handleReset = () => {
    const defaultPermissionMap = {
      'Super Admin': { jobApproval: true, employerVerification: true, auditExport: true, systemConfig: true },
      'Registry Director': { jobApproval: true, employerVerification: true, auditExport: false, systemConfig: false },
      'Moderator': { jobApproval: true, employerVerification: false, auditExport: false, systemConfig: false }
    };
    
    setStaffList(prev => prev.map(staff => {
      if (staff.id === selectedStaffId) {
        return {
          ...staff,
          permissions: defaultPermissionMap[staff.role] || defaultPermissionMap['Moderator']
        };
      }
      return staff;
    }));
    alert('Permissions reset to role defaults.');
  };

  const handleAddStaffSubmit = (e) => {
    e.preventDefault();
    if (!newStaff.name || !newStaff.email) {
      alert('Please fill out all required fields.');
      return;
    }
    
    const newMember = {
      id: `staff-${Date.now()}`,
      name: newStaff.name,
      role: newStaff.role,
      department: newStaff.department || 'Administration',
      email: newStaff.email,
      permissions: {
        jobApproval: true,
        employerVerification: newStaff.role !== 'Moderator',
        auditExport: newStaff.role === 'Super Admin',
        systemConfig: newStaff.role === 'Super Admin'
      }
    };

    setStaffList(prev => [...prev, newMember]);
    setSelectedStaffId(newMember.id);
    setModalOpen(false);
    setNewStaff({
      name: '',
      role: 'Moderator',
      department: '',
      email: ''
    });
    alert(`${newMember.name} has been added as a registry administrator.`);
  };

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest">
      <AdminHeader activePage="permissions" />

      {/* Main Content Area */}
      <main className="lg:ml-72 pt-20 px-6 pb-24 text-left">
        
        {/* Page Header */}
        <div className="mb-8 mt-4">
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">User Roles & Permissions</h2>
          <p className="text-on-surface-variant font-medium text-sm mt-1">
            Manage administrative staff access levels and technical capability overrides.
          </p>
        </div>

        {/* Permissions Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Admin User List Section */}
          <section className="xl:col-span-8 space-y-6">
            <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                <h3 className="font-bold text-base text-primary">Active Administrative Staff</h3>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="bg-primary text-white px-4 py-2 rounded-xl font-bold text-xs hover:brightness-110 shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">person_add</span>
                  Add Administrator
                </button>
              </div>

              <div className="divide-y divide-outline-variant">
                {staffList.map((staff) => (
                  <div 
                    key={staff.id} 
                    className={`p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-surface-container-low/30 cursor-pointer transition-colors ${
                      selectedStaffId === staff.id ? 'border-l-4 border-primary bg-surface-container-low/50' : ''
                    }`}
                    onClick={() => setSelectedStaffId(staff.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border ${
                        selectedStaffId === staff.id 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-surface-container text-on-surface-variant border-outline-variant'
                      }`}>
                        {staff.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-sm text-on-surface">{staff.name}</h4>
                          <span className="bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                            {staff.role}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant font-medium mt-0.5">{staff.department} • {staff.email}</p>
                      </div>
                    </div>
                    {selectedStaffId === staff.id && (
                      <span className="material-symbols-outlined text-primary text-xl hidden sm:block">check_circle</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Role Definitions Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white border border-outline-variant rounded-2xl shadow-sm">
                <span className="font-bold text-sm text-primary mb-1.5 block">Super Admin</span>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Full system overrides, data schema backups, and portal configuration management.
                </p>
              </div>
              <div className="p-4 bg-white border border-outline-variant rounded-2xl shadow-sm">
                <span className="font-bold text-sm text-secondary mb-1.5 block">Registry Director</span>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Audits incoming employer accreditations, reviews conflicts, and manages student archives.
                </p>
              </div>
              <div className="p-4 bg-white border border-outline-variant rounded-2xl shadow-sm">
                <span className="font-bold text-sm text-outline mb-1.5 block">Moderator</span>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Performs daily screening of job descriptions and responds to user support logs.
                </p>
              </div>
            </div>
          </section>

          {/* Permissions Toggle Panel */}
          <aside className="xl:col-span-4">
            <div className="bg-white border border-outline-variant rounded-2xl shadow-sm sticky top-24">
              <div className="p-5 border-b border-outline-variant">
                <h3 className="font-bold text-base text-on-surface mb-1">Capability Matrix</h3>
                <p className="text-xs text-on-surface-variant font-medium">
                  Editing: <strong className="text-primary font-bold">{selectedStaff.name}</strong>
                </p>
              </div>
              
              <div className="p-5 space-y-6">
                {/* Permission Toggle Item 1 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-on-surface">Job Posting Approvals</span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Allows approving/blocking vacancy drafts</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="sr-only peer"
                      checked={selectedStaff.permissions.jobApproval}
                      onChange={() => handlePermissionToggle('jobApproval')}
                    />
                    <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Permission Toggle Item 2 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-on-surface">Employer Verifications</span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Verify GST and business credentials</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="sr-only peer"
                      checked={selectedStaff.permissions.employerVerification}
                      onChange={() => handlePermissionToggle('employerVerification')}
                    />
                    <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Permission Toggle Item 3 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-on-surface">Audit Log Exports</span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Download compliance activity registers</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="sr-only peer"
                      checked={selectedStaff.permissions.auditExport}
                      onChange={() => handlePermissionToggle('auditExport')}
                    />
                    <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Permission Toggle Item 4 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-on-surface">System Configurations</span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Modify platform limits and parameter switches</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="sr-only peer"
                      checked={selectedStaff.permissions.systemConfig}
                      onChange={() => handlePermissionToggle('systemConfig')}
                    />
                    <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="p-4 bg-surface-container border-t border-outline-variant rounded-b-2xl flex gap-3">
                <button 
                  onClick={handleSaveChanges}
                  className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-xs hover:brightness-110 shadow-sm transition-all"
                >
                  Save Matrix
                </button>
                <button 
                  onClick={handleReset}
                  className="px-4 py-2.5 border border-outline-variant bg-white hover:bg-surface-container text-on-surface rounded-xl font-bold text-xs transition-colors"
                >
                  Reset Defaults
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Add Administrator Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-outline-variant rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-200 text-left">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
              <h3 className="text-base font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">person_add</span>
                Add Staff Member
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <form onSubmit={handleAddStaffSubmit} className="flex flex-col gap-4 text-xs font-semibold">
              <div className="flex flex-col gap-1">
                <label className="text-on-surface-variant font-bold">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Dr. Satish Patil"
                  className="border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  value={newStaff.name}
                  onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-on-surface-variant font-bold">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. s.patil@dte.gov.in"
                  className="border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  value={newStaff.email}
                  onChange={(e) => setNewStaff({...newStaff, email: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-on-surface-variant font-bold">Department / Office</label>
                <input 
                  type="text" 
                  placeholder="e.g. Information Desk"
                  className="border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary focus:bg-white"
                  value={newStaff.department}
                  onChange={(e) => setNewStaff({...newStaff, department: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-on-surface-variant font-bold">Access Role</label>
                <select 
                  className="border border-outline-variant bg-surface px-3 py-2.5 rounded-xl text-xs font-semibold outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  value={newStaff.role}
                  onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}
                >
                  <option>Moderator</option>
                  <option>Registry Director</option>
                  <option>Super Admin</option>
                </select>
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
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
