import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

// Public Pages
import About from './pages/public/About';
import CompanyProfile from './pages/public/CompanyProfile';
import Contact from './pages/public/Contact';
import CreateAccount from './pages/public/CreateAccount';
import EmployerLogin from './pages/public/EmployerLogin';
import EmployerRegister from './pages/public/EmployerRegister';
import FindDiplomaJobs from './pages/public/FindDiplomaJobs';
import ForgotPassword from './pages/public/ForgotPassword';
import Home from './pages/public/Home';
import Industry from './pages/public/Industry';
import Jobdetails from './pages/public/Jobdetails';
import StudentLogin from './pages/public/StudentLogin';
import StudentRegister from './pages/public/StudentRegister';
import TermsPrivacy from './pages/public/TermsPrivacy';
import Verification from './pages/public/Verification';
import VerificationGuide from './pages/public/VerificationGuide';

// Student Portal Pages
import ApplicationConfirmation from './pages/student portal/ApplicationConfirmation';
import ApplicationHistory from './pages/student portal/ApplicationHistory';
import Dashboard from './pages/student portal/Dashboard';
import EditEducationDetails from './pages/student portal/EditEducationDetails';
import FindDiplomaAppliedJobs from './pages/student portal/FindDiplomaAppliedJobs';
import InterviewFeedbackForm from './pages/student portal/InterviewFeedbackForm';
import JobApplicationStatus from './pages/student portal/JobApplicationStatus';
import NotificationsAlerts from './pages/student portal/NotificationsAlerts';
import Profile from './pages/student portal/Profile';
import ResumeBuilderDashboard from './pages/student portal/ResumeBuilderDashboard';
import ResumePreviewExport from './pages/student portal/ResumePreviewExport';
import SavedJobsStudentPortal from './pages/student portal/SavedJobsStudentPortal';
import SelectResumeTemplate from './pages/student portal/SelectResumeTemplate';
import SettingsStudentPortal from './pages/student portal/SettingsStudentPortal';

// Employer Portal Pages
import ApplicantsMaintenanceEngineer from './pages/employer portal/ApplicantsMaintenanceEngineer';
import BillingSubscriptionSettings from './pages/employer portal/BillingSubscriptionSettings';
import CompanyProfileSettings from './pages/employer portal/CompanyProfileSettings';
import EmployerDashboardIndustrialBlueprintsRefined from './pages/employer portal/EmployerDashboardIndustrialBlueprintsRefined';
import EmployerNotifications from './pages/employer portal/EmployerNotifications';
import EmployerProfileSettings from './pages/employer portal/EmployerProfileSettings';
import EmployerSettingsMainMenuEmployerSettingsMainMenu from './pages/employer portal/EmployerSettingsMainMenuEmployerSettingsMainMenu';
import ManageJobsEmployerPortal from './pages/employer portal/ManageJobsEmployerPortal';
import NotificationSettings from './pages/employer portal/NotificationSettings';
import PostAJobEmployerPortal from './pages/employer portal/PostAJobEmployerPortal';
import PostAJobCandidateRequirements from './pages/employer portal/PostAJobCandidateRequirements';
import PostAJobReviewPublish from './pages/employer portal/PostAJobReviewPublish';
import ReviewCandidateAdityaAhire from './pages/employer portal/ReviewCandidateAdityaAhire';
import TeamManagementSettings from './pages/employer portal/TeamManagementSettings';

// Admin Portal Pages
import AdminDashboardOverview from './pages/admin portal/AdminDashboardOverview';
import AdminEmployerRegistry from './pages/admin portal/AdminEmployerRegistry';
import AdminSettingsPlatformControls from './pages/admin portal/AdminSettingsPlatformControls';
import AdminStudentRegistry from './pages/admin portal/AdminStudentRegistry';
import EmployerJobOversightThermaxLtd from './pages/admin portal/EmployerJobOversightThermaxLtd';
import ModerationUserManagement from './pages/admin portal/ModerationUserManagement';
import ReviewStudentRahulDeshmukh from './pages/admin portal/ReviewStudentRahulDeshmukh';
import SystemHealthMonitoring from './pages/admin portal/SystemHealthMonitoring';
import UserRolesPermissions from './pages/admin portal/UserRolesPermissions';
import VerificationHub from './pages/admin portal/VerificationHub';
import VerifyEmployerMaharashtraIndustrialCorp from './pages/admin portal/VerifyEmployerMaharashtraIndustrialCorp';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ─── Public Routes ───────────────────────────────────────────── */}
          <Route path="/" element={<Home />} />
          <Route path="/public/about" element={<About />} />
          <Route path="/public/company-profile" element={<CompanyProfile />} />
          <Route path="/public/contact" element={<Contact />} />
          <Route path="/public/create-account" element={<CreateAccount />} />
          <Route path="/public/employer-login" element={<EmployerLogin />} />
          <Route path="/public/employer-register" element={<EmployerRegister />} />
          <Route path="/public/find-diploma-jobs" element={<FindDiplomaJobs />} />
          <Route path="/public/forgot-password" element={<ForgotPassword />} />
          <Route path="/public/industry" element={<Industry />} />
          <Route path="/public/jobdetails" element={<Jobdetails />} />
          <Route path="/public/student-login" element={<StudentLogin />} />
          <Route path="/public/student-register" element={<StudentRegister />} />
          <Route path="/public/terms" element={<TermsPrivacy />} />
          <Route path="/public/verification" element={<Verification />} />
          <Route path="/public/verification-guide" element={<VerificationGuide />} />

          {/* ─── Student Portal Routes (Protected: role=student) ─────────── */}
          <Route path="/student-portal/application-confirmation" element={<ProtectedRoute role="student"><ApplicationConfirmation /></ProtectedRoute>} />
          <Route path="/student-portal/application-history" element={<ProtectedRoute role="student"><ApplicationHistory /></ProtectedRoute>} />
          <Route path="/student-portal/dashboard" element={<ProtectedRoute role="student"><Dashboard /></ProtectedRoute>} />
          <Route path="/student-portal/edit-education-details" element={<ProtectedRoute role="student"><EditEducationDetails /></ProtectedRoute>} />
          <Route path="/student-portal/find-diploma-applied-jobs" element={<ProtectedRoute role="student"><FindDiplomaAppliedJobs /></ProtectedRoute>} />
          <Route path="/student-portal/interview-feedback-form" element={<ProtectedRoute role="student"><InterviewFeedbackForm /></ProtectedRoute>} />
          <Route path="/student-portal/job-application-status" element={<ProtectedRoute role="student"><JobApplicationStatus /></ProtectedRoute>} />
          <Route path="/student-portal/notifications-alerts" element={<ProtectedRoute role="student"><NotificationsAlerts /></ProtectedRoute>} />
          <Route path="/student-portal/profile" element={<ProtectedRoute role="student"><Profile /></ProtectedRoute>} />
          <Route path="/student-portal/resume-builder-dashboard" element={<ProtectedRoute role="student"><ResumeBuilderDashboard /></ProtectedRoute>} />
          <Route path="/student-portal/resume-preview-export" element={<ProtectedRoute role="student"><ResumePreviewExport /></ProtectedRoute>} />
          <Route path="/student-portal/saved-jobs-student-portal" element={<ProtectedRoute role="student"><SavedJobsStudentPortal /></ProtectedRoute>} />
          <Route path="/student-portal/select-resume-template" element={<ProtectedRoute role="student"><SelectResumeTemplate /></ProtectedRoute>} />
          <Route path="/student-portal/settings-student-portal" element={<ProtectedRoute role="student"><SettingsStudentPortal /></ProtectedRoute>} />

          {/* ─── Employer Portal Routes (Protected: role=employer) ────────── */}
          <Route path="/employer-portal/applicants-maintenance-engineer" element={<ProtectedRoute role="employer"><ApplicantsMaintenanceEngineer /></ProtectedRoute>} />
          <Route path="/employer-portal/billing-subscription-settings" element={<ProtectedRoute role="employer"><BillingSubscriptionSettings /></ProtectedRoute>} />
          {/* Legacy URL redirect support */}
          <Route path="/employer-portal/billing-&-subscription-settings" element={<ProtectedRoute role="employer"><BillingSubscriptionSettings /></ProtectedRoute>} />
          <Route path="/employer-portal/company-profile-settings" element={<ProtectedRoute role="employer"><CompanyProfileSettings /></ProtectedRoute>} />
          <Route path="/employer-portal/employer-dashboard-industrial-blueprints-refined" element={<ProtectedRoute role="employer"><EmployerDashboardIndustrialBlueprintsRefined /></ProtectedRoute>} />
          <Route path="/employer-portal/employer-notifications" element={<ProtectedRoute role="employer"><EmployerNotifications /></ProtectedRoute>} />
          <Route path="/employer-portal/employer-profile-settings" element={<ProtectedRoute role="employer"><EmployerProfileSettings /></ProtectedRoute>} />
          <Route path="/employer-portal/employer-settings-main-menuemployer-settings-main-menu" element={<ProtectedRoute role="employer"><EmployerSettingsMainMenuEmployerSettingsMainMenu /></ProtectedRoute>} />
          <Route path="/employer-portal/manage-jobs-employer-portal" element={<ProtectedRoute role="employer"><ManageJobsEmployerPortal /></ProtectedRoute>} />
          <Route path="/employer-portal/notification-settings" element={<ProtectedRoute role="employer"><NotificationSettings /></ProtectedRoute>} />
          <Route path="/employer-portal/post-a-job---employer-portal" element={<ProtectedRoute role="employer"><PostAJobEmployerPortal /></ProtectedRoute>} />
          <Route path="/employer-portal/post-a-job-candidate-requirements" element={<ProtectedRoute role="employer"><PostAJobCandidateRequirements /></ProtectedRoute>} />
          <Route path="/employer-portal/post-a-job-review-publish" element={<ProtectedRoute role="employer"><PostAJobReviewPublish /></ProtectedRoute>} />
          {/* Legacy route compatibility */}
          <Route path="/employer-portal/post-a-job-review-&-publish" element={<ProtectedRoute role="employer"><PostAJobReviewPublish /></ProtectedRoute>} />
          <Route path="/employer-portal/review-candidateaditya-ahire" element={<ProtectedRoute role="employer"><ReviewCandidateAdityaAhire /></ProtectedRoute>} />
          <Route path="/employer-portal/team-management-settings" element={<ProtectedRoute role="employer"><TeamManagementSettings /></ProtectedRoute>} />

          {/* ─── Admin Portal Routes (Protected: role=admin) ─────────────── */}
          <Route path="/admin-portal/admin-dashboard-overview" element={<ProtectedRoute role="admin"><AdminDashboardOverview /></ProtectedRoute>} />
          <Route path="/admin-portal/admin-employer-registry" element={<ProtectedRoute role="admin"><AdminEmployerRegistry /></ProtectedRoute>} />
          <Route path="/admin-portal/admin-settings-platform-controls" element={<ProtectedRoute role="admin"><AdminSettingsPlatformControls /></ProtectedRoute>} />
          <Route path="/admin-portal/admin-student-registry" element={<ProtectedRoute role="admin"><AdminStudentRegistry /></ProtectedRoute>} />
          <Route path="/admin-portal/employer-job-oversight-thermax-ltd" element={<ProtectedRoute role="admin"><EmployerJobOversightThermaxLtd /></ProtectedRoute>} />
          <Route path="/admin-portal/moderation-user-management" element={<ProtectedRoute role="admin"><ModerationUserManagement /></ProtectedRoute>} />
          <Route path="/admin-portal/review-student_rahul-deshmukh" element={<ProtectedRoute role="admin"><ReviewStudentRahulDeshmukh /></ProtectedRoute>} />
          <Route path="/admin-portal/system-health-monitoring" element={<ProtectedRoute role="admin"><SystemHealthMonitoring /></ProtectedRoute>} />
          <Route path="/admin-portal/user-roles-permissions" element={<ProtectedRoute role="admin"><UserRolesPermissions /></ProtectedRoute>} />
          <Route path="/admin-portal/verification-hub" element={<ProtectedRoute role="admin"><VerificationHub /></ProtectedRoute>} />
          <Route path="/admin-portal/verify-employer-maharashtra-industrial-corp" element={<ProtectedRoute role="admin"><VerifyEmployerMaharashtraIndustrialCorp /></ProtectedRoute>} />

          {/* ─── 404 Catch-All ───────────────────────────────────────────── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
