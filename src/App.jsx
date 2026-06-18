import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import Verification from './pages/public/Verification';
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
          <Route path="/" element={<Home />} />
        <Route path="/public/about" element={<About />} />
        <Route path="/public/company-profile" element={<CompanyProfile />} />
        <Route path="/public/contact" element={<Contact />} />
        <Route path="/public/create-account" element={<CreateAccount />} />
        <Route path="/public/employer-login" element={<EmployerLogin />} />
        <Route path="/public/employer-register" element={<EmployerRegister />} />
        <Route path="/public/find-diploma-jobs" element={<FindDiplomaJobs />} />
        <Route path="/public/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/public/industry" element={<Industry />} />
        <Route path="/public/jobdetails" element={<Jobdetails />} />
        <Route path="/public/student-login" element={<StudentLogin />} />
        <Route path="/public/student-register" element={<StudentRegister />} />
        <Route path="/public/verification" element={<Verification />} />
        <Route path="/student-portal/application-confirmation" element={<ApplicationConfirmation />} />
        <Route path="/student-portal/application-history" element={<ApplicationHistory />} />
        <Route path="/student-portal/dashboard" element={<Dashboard />} />
        <Route path="/student-portal/edit-education-details" element={<EditEducationDetails />} />
        <Route path="/student-portal/find-diploma-applied-jobs" element={<FindDiplomaAppliedJobs />} />
        <Route path="/student-portal/interview-feedback-form" element={<InterviewFeedbackForm />} />
        <Route path="/student-portal/job-application-status" element={<JobApplicationStatus />} />
        <Route path="/student-portal/notifications-alerts" element={<NotificationsAlerts />} />
        <Route path="/student-portal/profile" element={<Profile />} />
        <Route path="/student-portal/resume-builder-dashboard" element={<ResumeBuilderDashboard />} />
        <Route path="/student-portal/resume-preview-export" element={<ResumePreviewExport />} />
        <Route path="/student-portal/saved-jobs-student-portal" element={<SavedJobsStudentPortal />} />
        <Route path="/student-portal/select-resume-template" element={<SelectResumeTemplate />} />
        <Route path="/student-portal/settings-student-portal" element={<SettingsStudentPortal />} />
        <Route path="/employer-portal/applicants-maintenance-engineer" element={<ApplicantsMaintenanceEngineer />} />
        <Route path="/employer-portal/billing-&-subscription-settings" element={<BillingSubscriptionSettings />} />
        <Route path="/employer-portal/company-profile-settings" element={<CompanyProfileSettings />} />
        <Route path="/employer-portal/employer-dashboard-industrial-blueprints-refined" element={<EmployerDashboardIndustrialBlueprintsRefined />} />
        <Route path="/employer-portal/employer-notifications" element={<EmployerNotifications />} />
        <Route path="/employer-portal/employer-profile-settings" element={<EmployerProfileSettings />} />
        <Route path="/employer-portal/employer-settings-main-menuemployer-settings-main-menu" element={<EmployerSettingsMainMenuEmployerSettingsMainMenu />} />
        <Route path="/employer-portal/manage-jobs-employer-portal" element={<ManageJobsEmployerPortal />} />
        <Route path="/employer-portal/notification-settings" element={<NotificationSettings />} />
        <Route path="/employer-portal/post-a-job---employer-portal" element={<PostAJobEmployerPortal />} />
        <Route path="/employer-portal/post-a-job-candidate-requirements" element={<PostAJobCandidateRequirements />} />
        <Route path="/employer-portal/post-a-job-review-&-publish" element={<PostAJobReviewPublish />} />
        <Route path="/employer-portal/review-candidateaditya-ahire" element={<ReviewCandidateAdityaAhire />} />
        <Route path="/employer-portal/team-management-settings" element={<TeamManagementSettings />} />
        <Route path="/admin-portal/admin-dashboard-overview" element={<AdminDashboardOverview />} />
        <Route path="/admin-portal/admin-employer-registry" element={<AdminEmployerRegistry />} />
        <Route path="/admin-portal/admin-settings-platform-controls" element={<AdminSettingsPlatformControls />} />
        <Route path="/admin-portal/admin-student-registry" element={<AdminStudentRegistry />} />
        <Route path="/admin-portal/employer-job-oversight-thermax-ltd" element={<EmployerJobOversightThermaxLtd />} />
        <Route path="/admin-portal/moderation-user-management" element={<ModerationUserManagement />} />
        <Route path="/admin-portal/review-student_rahul-deshmukh" element={<ReviewStudentRahulDeshmukh />} />
        <Route path="/admin-portal/system-health-monitoring" element={<SystemHealthMonitoring />} />
        <Route path="/admin-portal/user-roles-permissions" element={<UserRolesPermissions />} />
        <Route path="/admin-portal/verification-hub" element={<VerificationHub />} />
        <Route path="/admin-portal/verify-employer-maharashtra-industrial-corp" element={<VerifyEmployerMaharashtraIndustrialCorp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
