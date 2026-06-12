import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/auth';

export default function EmployerRegister() {
  const [companyName, setCompanyName] = useState('');
  const [sector, setSector] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validations
    if (!companyName.trim() || !sector || !contactPerson.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      setError('Please fill in all details.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid official email address.');
      return;
    }

    const cleanPhone = phone.trim().replace(/\s+/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and acknowledge the MIDC verification policy.');
      return;
    }

    // Prepare organization data
    const newEmployer = {
      email: email.trim(),
      password,
      role: 'employer',
      name: contactPerson.trim(),
      companyName: companyName.trim(),
      sector,
      contactPerson: contactPerson.trim(),
      phone: cleanPhone
    };

    try {
      registerUser(newEmployer);
      setSuccess('Organization registered successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/public/student-login');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile h-16 bg-surface shadow-sm">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-3xl" data-icon="school">school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary">MSBTE Jobs</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link className="text-on-surface-variant font-label-md hover:text-primary transition-colors" to="/">Portal Home</Link>
          <a className="text-on-surface-variant font-label-md hover:text-primary transition-colors" href="#">Verification Guide</a>
          <Link to="/public/student-login" className="bg-primary text-white px-6 py-2 rounded-lg font-label-md transition-transform active:scale-95 hover:bg-primary/90">
            Login
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-12 px-margin-mobile flex flex-col items-center">
        <div className="w-full max-w-container-max grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Context & Trust Panel */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-stack-md">
              <h1 className="font-headline-lg text-headline-lg text-primary font-bold">Empower Maharashtra's Workforce</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Connect with the finest diploma talent from the state's leading polytechnic and industrial institutes. Join 5,000+ verified employers today.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-outline-variant space-y-4 bg-surface-container-lowest">
              <div className="flex gap-4">
                <div className="bg-secondary-container/20 p-2 rounded-lg h-fit">
                  <span className="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
                </div>
                <div>
                  <h3 className="font-label-md text-on-surface font-bold">MIDC Verification Required</h3>
                  <p className="font-label-sm text-on-surface-variant mt-1 leading-relaxed text-sm">
                    To maintain industrial standards, all industrial partners must undergo MIDC (Maharashtra Industrial Development Corporation) verification after registration.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border-l-4 border-primary bg-surface-container-lowest border border-outline-variant">
                <span className="font-headline-md text-headline-md font-bold block text-primary">120k+</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-wider text-xs font-semibold">Candidates</span>
              </div>
              <div className="glass-panel p-4 rounded-xl border-l-4 border-secondary bg-surface-container-lowest border border-outline-variant">
                <span className="font-headline-md text-headline-md font-bold block text-secondary">15+</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-wider text-xs font-semibold">Industries</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
              <img className="w-full h-full object-cover" alt="Industrial Facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxl4mH1-xYPcwjOq1d0_By0Abg3IgN7UH8FvhUJHJdDgYungz1pWKJO69L6_YyriqB_cLgyLMBBif3wtNuZuy_lPrPvxfG2xrSx2qPeirewQ115HhJAqaF5cBNm5zX0T_YehCnQwp6x4L0t78P2OyLSd7y5LtsbZXTto-HeBd8Fd-KCLzsV7bdLawKV159MEFRcLf0Vjl11XVAg7Dy2HyIxtsh7p3B3I6YDUvrQhmNEscOAKwYVcIY1gW02nWrmiL9BsBieNPZVvc" />
            </div>
          </div>

          {/* Registration Form Panel */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm text-left">
              <div className="mb-8">
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Employer Registration</h2>
                <p className="text-on-surface-variant font-label-md">Create your corporate profile to start hiring</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleRegister}>
                {error && (
                  <div className="md:col-span-2 bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">error</span>
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="md:col-span-2 bg-green-50 text-green-600 border border-green-200 rounded-lg p-3 text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>{success}</span>
                  </div>
                )}

                {/* Company Name */}
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Company Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="corporate_fare">corporate_fare</span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" 
                      placeholder="Enter official company name" 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Industry Sector */}
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Industry Sector</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="factory">factory</span>
                    <select 
                      className="w-full pl-10 pr-10 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none text-body-md"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option value="">Select Sector</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="it">Information Technology</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="electrical">Electrical & Energy</option>
                      <option value="auto">Automobile</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Contact Person</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="badge">badge</span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" 
                      placeholder="Full Name" 
                      type="text" 
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                    />
                  </div>
                </div>

                {/* Official Email */}
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Official Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="mail">mail</span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" 
                      placeholder="hr@company.com" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Phone Number</label>
                  <div className="relative flex">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="call">call</span>
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-label-md">+91</span>
                    <input 
                      className="w-full pl-20 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" 
                      placeholder="98765 43210" 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-md text-on-surface block font-semibold">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl" data-icon="lock">lock</span>
                    <input 
                      className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" 
                      placeholder="Create a strong password" 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary focus:outline-none" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="md:col-span-2 flex items-start gap-3 py-2">
                  <input 
                    className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" 
                    id="terms" 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <label className="font-label-sm text-on-surface-variant text-sm" htmlFor="terms">
                    I agree to the <a className="text-primary font-bold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-bold hover:underline" href="#">Privacy Policy</a>. I understand that MIDC verification is mandatory for industrial access.
                  </label>
                </div>

                {/* Register Button */}
                <div className="md:col-span-2 pt-4">
                  <button className="w-full text-white font-bold py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group bg-primary shadow-md" type="submit">
                    Register Organization
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-outline-variant text-center">
                <p className="font-label-md text-on-surface-variant">
                  Already have an account? <Link className="text-primary font-bold hover:underline ml-1" to="/public/student-login">Employer Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 px-4 bg-surface-container dark:bg-surface-container-highest rounded-t-xl shadow-lg">
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
          <span className="font-label-sm text-label-sm">Builder</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="description">description</span>
          <span className="font-label-sm text-label-sm">Templates</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="model_training">model_training</span>
          <span className="font-label-sm text-label-sm">Training</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </div>
      </nav>
    </div>
  );
}
