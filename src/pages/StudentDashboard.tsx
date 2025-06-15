
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StudentDashboard = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <p className="text-gray-300 text-center mb-5">
        Welcome to your HQ! Track your course progress, manage your profile, and access all student-only perks right here.
      </p>
      <div className="w-full bg-gray-800 rounded-lg p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
        <ul className="text-gray-300 mb-2">
          <li>✔️ Enrolled: <span className="font-bold">YouTube Success Masterclass</span></li>
          <li>✔️ Units Completed: <span className="font-bold">4/10</span></li>
        </ul>
        <button className="mt-2 py-2 px-4 rounded bg-yellow-400 text-black font-bold hover:bg-yellow-300 text-sm transition">Continue Learning</button>
      </div>
      <div className="w-full bg-gray-900 rounded-lg p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
        <ul className="text-gray-300 text-sm list-disc pl-5">
          <li><a href="/bonus-resources" className="hover:underline">Bonus Resources</a></li>
          <li><a href="/help-center" className="hover:underline">Get Support</a></li>
          <li><a href="/community-access" className="hover:underline">Community Access</a></li>
        </ul>
      </div>
      <p className="text-xs text-gray-500 text-center italic">Need help or have feedback? Reach out via our <a className="underline" href="/help-center">Help Center</a>.</p>
    </div>
    <Footer />
  </div>
);

export default StudentDashboard;
