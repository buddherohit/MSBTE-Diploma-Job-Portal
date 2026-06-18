// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutSession } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function SettingsStudentPortal() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Settings states
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [dataSharing, setDataSharing] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleLogout = () => {
    logoutSession();
    navigate('/');
  };

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'S';
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="" />

      <main className="max-w-container-max mx-auto px-4 md:px-6 py-8 text-left">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-2">Account Settings</h2>
          <p className="text-on-surface-variant font-body-md">Manage your account preferences, privacy, and notifications.</p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* User Profile Card */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary text-white font-bold text-3xl flex items-center justify-center shadow-md">
                    {getInitials(user.name)}
                  </div>
                  <button 
                    onClick={() => navigate('/student-portal/profile')}
                    className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform"
                  >
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h3 className="font-bold text-xl text-on-surface">{user.name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{user.branch || 'Mechanical Engineering'}</p>
                <div className="w-full py-3 bg-surface-container-low rounded-lg text-primary font-bold text-sm">
                  Enrollment: {user.enrollment || 'N/A'}
                </div>
              </div>
            </div>

            {/* Pro Status Bento Card */}
            <div className="bg-primary text-white rounded-xl p-6 shadow-md overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Profile Status</h4>
                <p className="text-white/80 text-sm mb-4">Your industrial training profile is ready to export to verified partners.</p>
                <button 
                  onClick={() => navigate('/student-portal/profile')}
                  className="bg-white text-primary font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Edit Profile Details
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl">verified_user</span>
            </div>
          </aside>

          {/* Settings Categories */}
          <section className="lg:col-span-8 space-y-6">
            {/* Account Info */}
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">person</span>
                  Account Info
                </h3>
              </div>
              <div className="divide-y divide-outline-variant">
                <div className="px-6 py-4 flex flex-col items-start">
                  <span className="font-semibold text-on-surface">Email Address</span>
                  <span className="text-sm text-on-surface-variant">{user.email}</span>
                </div>
                <div className="px-6 py-4 flex flex-col items-start">
                  <span className="font-semibold text-on-surface">Institute</span>
                  <span className="text-sm text-on-surface-variant">{user.institute || 'Government Polytechnic'}</span>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">security</span>
                  Privacy Controls
                </h3>
              </div>
              <div className="divide-y divide-outline-variant">
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-on-surface">Profile Visibility</span>
                    <span className="text-sm text-on-surface-variant">Allow verified industrial recruiters to view your resume profile</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={profileVisibility} 
                      onChange={(e) => setProfileVisibility(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-on-surface">Data Sharing</span>
                    <span className="text-sm text-on-surface-variant">Share academic credentials automatically during job applications</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={dataSharing} 
                      onChange={(e) => setDataSharing(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">notifications</span>
                  Notification Preferences
                </h3>
              </div>
              <div className="divide-y divide-outline-variant">
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-on-surface">Email Alerts</span>
                    <span className="text-sm text-on-surface-variant">Send job recommendations matching my engineering branch</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={emailAlerts} 
                      onChange={(e) => setEmailAlerts(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-on-surface">Push Alerts</span>
                    <span className="text-sm text-on-surface-variant">Notify immediately when application status changes</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={pushNotifications} 
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Logout Control */}
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 divide-y divide-outline-variant">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between py-2 hover:text-red-700 transition-colors group"
                >
                  <span className="font-bold text-red-600">Log Out of Profile</span>
                  <span className="material-symbols-outlined text-red-600 group-hover:translate-x-1 transition-transform">logout</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
