import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import EmployerHeader from '../../components/EmployerHeader';

export default function EmployerNotifications() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [unreadCount, setUnreadCount] = useState(2);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Urgent Applicant: Senior CNC Machinist",
      desc: "A highly qualified candidate from Pune with 10+ years of experience has applied for your urgent opening.",
      time: "2 mins ago",
      type: "applicant",
      badge: "Urgent",
      branch: "Mechanical Engineering",
      unread: true
    },
    {
      id: 2,
      title: "Interview Scheduled",
      desc: "Interview with Rajesh Kumar for the 'Plant Supervisor' role is confirmed for tomorrow at 10:30 AM.",
      time: "2 hours ago",
      type: "event",
      unread: true
    },
    {
      id: 3,
      title: "Job Listing Expiring",
      desc: "Your listing for 'Junior Quality Auditor' will expire in 24 hours. Boost or renew now to keep receiving applications.",
      time: "Yesterday, 4:15 PM",
      type: "alert",
      unread: false
    },
    {
      id: 4,
      title: "Weekly Performance Digest",
      desc: "Your company profile saw a 15% increase in views this week. Check out the detailed analytics in your dashboard.",
      time: "Yesterday, 9:00 AM",
      type: "alert",
      unread: false
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

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
    setUnreadCount(0);
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <EmployerHeader activePage="" />
      
      <main className="max-w-container-max mx-auto px-margin-mobile py-8 pb-32 text-left animate-in fade-in duration-300">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold">Notifications</h2>
            <p className="font-body-md text-on-surface-variant mt-1">Manage your recruiter alerts and system updates ({unreadCount} unread).</p>
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllRead}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-primary border border-primary hover:bg-primary/5 transition-colors active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              Mark all as read
            </button>
          )}
        </div>

        {/* Notification Feed */}
        <div className="space-y-6">
          <div className="space-y-3">
            {notifications.map((n) => {
              const isUrgent = n.badge === 'Urgent';
              return (
                <div 
                  key={n.id} 
                  className={`group relative bg-white border border-outline-variant shadow-xs rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-all ${
                    n.unread ? 'border-l-4 border-l-primary' : 'opacity-85'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    n.type === 'applicant' ? 'bg-primary-fixed text-primary' : 'bg-secondary-fixed text-secondary'
                  }`}>
                    <span className="material-symbols-outlined">
                      {n.type === 'applicant' ? 'person_add' : n.type === 'event' ? 'event' : 'notifications'}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className={`font-bold text-base text-on-surface leading-tight ${n.unread ? 'font-extrabold' : ''}`}>{n.title}</h4>
                      <span className="text-[11px] text-on-surface-variant font-semibold whitespace-nowrap shrink-0">{n.time}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{n.desc}</p>
                    
                    {(n.badge || n.branch) && (
                      <div className="mt-3 flex gap-2">
                        {n.badge && (
                          <span className="bg-red-50 text-red-700 border border-red-200 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            {n.badge}
                          </span>
                        )}
                        {n.branch && (
                          <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            {n.branch}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Promote Listings CTA */}
        <div className="mt-12 p-6 bg-primary text-on-primary rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-6 text-white shadow-sm">
          <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[48px]">trending_up</span>
          </div>
          <div>
            <h4 className="font-headline-md text-white font-bold text-lg">Need more candidate applications?</h4>
            <p className="font-body-md text-white/90 text-sm mt-1">Promote your active job listings to reach the top 5% of diploma students in the Maharashtra industrial corridor.</p>
          </div>
          <button 
            onClick={() => alert("Brochure sent to corporate email.")}
            className="whitespace-nowrap px-6 py-2.5 bg-white text-primary rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md ml-auto"
          >
            Promote Listings
          </button>
          <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </main>
    </div>
  );
}
