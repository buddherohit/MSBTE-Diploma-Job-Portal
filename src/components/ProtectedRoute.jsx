import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

/**
 * ProtectedRoute
 * Wraps any route to enforce authentication and role-based access.
 *
 * @param {React.ReactNode} children - The page component to render if authorized
 * @param {'student'|'employer'|'admin'} role - Required role to access this route
 */
export default function ProtectedRoute({ children, role }) {
  const [user, setUser] = useState(undefined); // undefined = loading
  const location = useLocation();

  useEffect(() => {
    const session = getCurrentUser();
    setUser(session);
  }, []);

  // While checking session, render a minimal loading state
  if (user === undefined) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-on-surface-variant font-semibold text-sm">Checking session...</p>
        </div>
      </div>
    );
  }

  // Not logged in at all
  if (!user) {
    if (role === 'employer') {
      return <Navigate to="/public/student-login?tab=employer" state={{ from: location }} replace />;
    }
    if (role === 'admin') {
      return <Navigate to="/public/student-login?tab=student" state={{ from: location }} replace />;
    }
    return <Navigate to="/public/student-login" state={{ from: location }} replace />;
  }

  // Admin can access everything
  if (user.role === 'admin') {
    return children;
  }

  // Role mismatch — redirect to appropriate portal
  if (user.role !== role) {
    if (user.role === 'student') {
      return <Navigate to="/student-portal/dashboard" replace />;
    }
    if (user.role === 'employer') {
      return <Navigate to="/employer-portal/employer-dashboard-industrial-blueprints-refined" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
}
