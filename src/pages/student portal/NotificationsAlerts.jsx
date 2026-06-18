// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function NotificationsAlerts() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Interview Reminder",
      desc: "Interview with Thermax Limited scheduled for tomorrow at 10:00 AM.",
      time: "2h ago",
      unread: true,
      category: "Applications",
      actionLabel: "View Details",
      actionLink: "/student-portal/job-application-status"
    },
    {
      id: 2,
      title: "New Job Match",
      desc: "New Maintenance Engineer role at Tata Motors matches your profile.",
      time: "5h ago",
      unread: true,
      category: "Jobs",
      actionLabel: "Quick Apply",
      actionLink: "/public/find-diploma-jobs"
    },
    {
      id: 3,
      title: "Application Shortlisted",
      desc: "Your application for Production Trainee has been shortlisted.",
      time: "1d ago",
      unread: true,
      category: "Applications",
      actionLabel: null,
      actionLink: null
    },
    {
      id: 4,
      title: "Complete Profile",
      desc: "Verify your email to complete your professional profile.",
      time: "3d ago",
      unread: false,
      category: "System",
      actionLabel: "Edit Profile",
      actionLink: "/student-portal/profile"
    }
  ]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'All') return true;
    return n.category === activeTab;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="" />

      <main className="pb-24 max-w-lg mx-auto min-h-screen text-left px-4">
        {/* Header Actions */}
        <div className="pt-6 pb-4 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg-mobile text-2xl font-bold text-on-surface">Notifications</h2>
            <p className="font-body-md text-on-surface-variant text-sm mt-0.5">
              {unreadCount > 0 ? `You have ${unreadCount} unread updates` : "All caught up!"}
            </p>
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllRead}
              className="font-label-md text-primary flex items-center gap-1 hover:underline text-xs font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">done_all</span>
              Mark all as read
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <nav className="flex border-b border-outline-variant mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide gap-1">
          {['All', 'Jobs', 'System', 'Applications'].map((tab) => (
            <button 
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-3 font-bold text-xs border-b-2 transition-all ${
                activeTab === tab ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Notification List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((n) => (
              <div 
                key={n.id} 
                className={`bg-white p-4 rounded-xl border border-outline-variant flex gap-4 transition-all shadow-sm ${
                  n.unread ? 'border-primary/30 ring-2 ring-primary/5' : 'opacity-85'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    n.category === 'Applications' 
                      ? 'bg-blue-50 text-blue-700' 
                      : n.category === 'Jobs'
                      ? 'bg-orange-50 text-orange-700'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {n.category === 'Applications' ? 'check_circle' : n.category === 'Jobs' ? 'work' : 'notifications'}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm text-on-surface">{n.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-on-surface-variant font-semibold">{n.time}</span>
                      {n.unread && <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>}
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                    {n.desc}
                  </p>
                  {n.actionLabel && n.actionLink && (
                    <div className="pt-2">
                      <Link 
                        to={n.actionLink}
                        className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-[10px] shadow-sm hover:opacity-95"
                      >
                        {n.actionLabel}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="border border-dashed border-outline-variant rounded-xl p-8 text-center bg-surface-container-low">
              <span className="material-symbols-outlined text-4xl text-outline mb-2">notifications_off</span>
              <p className="font-bold text-on-surface text-sm">No updates in this category.</p>
            </div>
          )}

          {/* Promo roadmap */}
          <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden mt-8">
            <div className="relative z-10">
              <h3 className="font-bold text-lg text-white mb-2">Career Roadmap</h3>
              <p className="text-xs mb-4 opacity-90 leading-relaxed font-medium">Unlock personalized industry blueprints for MSBTE engineering graduates.</p>
              <Link to="/student-portal/resume-builder-dashboard" className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-[10px] shadow-sm">
                Explore Now
              </Link>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[180px]">architecture</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
