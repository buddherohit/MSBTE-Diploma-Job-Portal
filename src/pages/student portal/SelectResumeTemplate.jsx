// MANUAL_JSX_FILE
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import StudentHeader from '../../components/StudentHeader';

export default function SelectResumeTemplate() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('Modern Technical');

  useEffect(() => {
    const session = getCurrentUser();
    if (!session || session.role !== 'student') {
      navigate('/public/student-login?tab=student');
      return;
    }
    setUser(session);
  }, [navigate]);

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'S';
  };

  if (!user) {
    return <div className="min-h-screen bg-surface flex items-center justify-center font-bold">Loading session...</div>;
  }

  const templates = [
    {
      name: "Industrial Classic",
      desc: "Optimized for manufacturing, electrical, and civil engineering roles requiring detailed technical history.",
      badge: "High Density",
      tags: ["Structured", "Reliable"],
      preview: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7XUG0liDabp4p5ivCUwrrJjfIEVzHdmIBG3G6Yj7KHTOkXlvANmpSMJyh_OYih4SdR8qwm3WLjFJvp7P-WqfsP3cgOv0pA2iMaWDfsLlYGtwk5hG1l3hsfD4c1OgHZK8NWhVKAE56WxcyjxAeolylm0V33SYkrDWIDWT7HtmTShdNcFAL5kflT0HQ_eNSyiQpI4pdRKfdenEzvCHuDnBvW_54H12MbMshK0aVK7xTfVeI13IeXdxnakpnJZa0vXcU_NoQmyEYcO8"
    },
    {
      name: "Modern Technical",
      desc: "Perfect for software, IT, and design students. Features a sleek sidebar and clear skills visualization.",
      badge: "Recommended",
      tags: ["Clean UI", "Sidebar"],
      preview: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZYpm-BnIsQ-GmMZXKybeZF0v-bfZaAiz573gaHCdkTzgL_GAdzsWWC7VFHV_9q6r_gbVJhRo_9gB2EyYxBH9B_XWBFyJfYquZNw2QNGbtUgHTattB6lTlozClaM1LlPlHCzJMLPiF50-lmR0Ng3Yw7e7DdWLFCuzJmS4zUcAujZosOd0nW-6ydAmZ1tBCNDrXrEaICXy7mL_14cgQqkjNfP7vYh0pUTTZpitYBEC_r3Kk9c5zAhX3sZMQKMdtmJKNJmJ_1eTzB2s"
    },
    {
      name: "Academic Focus",
      desc: "Highlights project work, research, and certifications over work experience. Ideal for fresh graduates.",
      badge: "Project Rich",
      tags: ["Education First", "Balanced"],
      preview: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9RcFB3FcLzx-gfiD_Fxz5dHcZ2K_3PX4lEnD08NTBGEO1T2XCuhfmbLq0sC3s2dLGP6_gcqDNxcOOaENgzvt8AT4L9kjDM9vCtMj9SaQ6DUShGEtW723B7k5RLyYoKwj6cszV5arSx-byfl2WjVFdry9pQlsFGEpRZOiWMMEM8F4kRT6VwmtGlUzDGtEtbIeRkzmGn0gOjm3NgFmPaqM4JzzjOVQ7MKwACp9uHpFea9Sb5dH3dCBmF_N7Z9xRzMBeeJD4f87LEOM"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface">
      <StudentHeader activePage="resumes" />

      <div className="flex max-w-container-max mx-auto min-h-[calc(100vh-72px)]">
        {/* NavigationDrawer (Desktop Only) */}
        <aside className="hidden md:flex flex-col h-[calc(100vh-72px)] sticky top-[72px] w-80 bg-white border-r border-outline-variant py-6 text-left">
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
              {getInitials(user.name)}
            </div>
            <div>
              <p className="font-label-md text-label-md font-bold text-on-surface">{user.name}</p>
              <p className="text-sm text-on-surface-variant font-medium">{user.branch}</p>
            </div>
          </div>
          <nav className="flex-grow space-y-1">
            <Link className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-colors font-bold" to="/student-portal/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-body-md">Dashboard</span>
            </Link>
            <Link className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-colors font-bold" to="/student-portal/resume-builder-dashboard">
              <span className="material-symbols-outlined">history_edu</span>
              <span className="font-body-md">Resume Builder</span>
            </Link>
            <Link className="bg-primary-container text-on-primary-container font-bold rounded-full mx-2 px-4 py-3 flex items-center gap-3" to="/student-portal/select-resume-template">
              <span className="material-symbols-outlined">style</span>
              <span className="font-body-md">Select Template</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content (Canvas) */}
        <main className="flex-grow p-6 text-left">
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-3xl font-extrabold text-primary mb-2">Select Your Blueprint</h2>
              <p className="text-on-surface-variant max-w-2xl font-body-md font-semibold">
                Choose a layout that best represents your career stage. Each template is industry-vetted to pass ATS filters.
              </p>
            </div>
            <div className="flex gap-2">
              <Link 
                to="/student-portal/resume-preview-export"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
                Preview & Export
              </Link>
            </div>
          </header>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((tpl) => {
              const isSelected = selectedTemplate === tpl.name;
              return (
                <div 
                  key={tpl.name}
                  onClick={() => setSelectedTemplate(tpl.name)}
                  className={`group relative flex flex-col bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    isSelected ? 'border-primary ring-4 ring-primary/10 shadow-lg' : 'border-outline-variant hover:-translate-y-1'
                  }`}
                >
                  <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative">
                    <img alt={`${tpl.name} Preview`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={tpl.preview} />
                    {/* Active Indicator */}
                    <div className={`absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className="material-symbols-outlined text-white text-xl">check</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-lg text-on-surface truncate">{tpl.name}</h3>
                      <span className="bg-surface-container-highest text-on-surface-variant px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shrink-0">
                        {tpl.badge}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-xs mb-4 font-semibold leading-relaxed">{tpl.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tpl.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
