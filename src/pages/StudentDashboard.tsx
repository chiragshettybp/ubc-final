import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const StudentDashboard = () => {
  // Simple login simulation state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake login: just checks for simple non-empty fields
    if (email.trim() && password.trim()) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Please enter your email and password.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
        <p className="text-gray-300 text-center mb-5">
          Welcome to your HQ! Track your course progress, manage your profile, and access all student-only perks right here.
        </p>
        
        {/* Student Login Portal */}
        <div className="w-full bg-gray-800 rounded-lg p-5 mb-6">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold mb-2 text-center">
                Student Login
              </h2>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                autoComplete="username"
                onChange={e => setEmail(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white"
                required
              />
              <Button type="submit" className="bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
                Login
              </Button>
              {error && (
                <div className="text-red-400 text-sm text-center">{error}</div>
              )}
            </form>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-lg font-semibold mb-2 text-center">Welcome, Student!</h2>
              <p className="text-gray-300 text-center text-sm">You are now logged in. Access student features below.</p>
            </div>
          )}
        </div>

        <div className="w-full bg-gray-900 rounded-lg p-5 mb-6">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-gray-300 text-sm list-disc pl-5">
            <li>
              <a href="/bonus-resources" className="hover:underline">Bonus Resources</a>
            </li>
            <li>
              <a href="/help-center" className="hover:underline">Get Support</a>
            </li>
            <li>
              <a href="/community-access" className="hover:underline">Community Access</a>
            </li>
          </ul>
        </div>
        <p className="text-xs text-gray-500 text-center italic">
          Need help or have feedback? Reach out via our <a className="underline" href="/help-center">Help Center</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
