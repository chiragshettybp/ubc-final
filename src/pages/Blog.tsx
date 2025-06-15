
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Blog & Updates</h1>
      <p className="text-gray-300 text-center">
        Read the latest news, updates, and articles from our team.
      </p>
    </div>
    <Footer />
  </div>
);

export default Blog;
