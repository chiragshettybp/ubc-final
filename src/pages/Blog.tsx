
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Blog & Updates</h1>
      <p className="text-gray-300 text-center mb-6">
        Stay up to date with our latest news, actionable YouTube tips, student highlights, and exclusive announcements!
      </p>
      <div className="w-full bg-gray-900 rounded-lg p-4 mb-5">
        <h2 className="text-lg font-semibold mb-2">🚀 How To Stay Consistent With New Videos</h2>
        <p className="text-sm mb-2 text-gray-300">
          Discover our foolproof routine for never running out of content ideas. Consistency is king—here’s how to master it.
        </p>
        <a className="text-yellow-400 underline text-xs" href="#">Read More</a>
      </div>
      <div className="w-full bg-gray-900 rounded-lg p-4 mb-5">
        <h2 className="text-lg font-semibold mb-2">💡 Student Spotlight: Maria T.</h2>
        <p className="text-sm mb-2 text-gray-300">
          Meet Maria, who grew her channel from 30 to 20,000 subs in 9 months after joining our Masterclass. Inspiring!
        </p>
        <a className="text-yellow-400 underline text-xs" href="#">Read More</a>
      </div>
      <p className="text-xs text-gray-400">Want your story featured? <a className="underline" href="/community-access">Let us know in the community!</a></p>
    </div>
    <Footer />
  </div>
);

export default Blog;
