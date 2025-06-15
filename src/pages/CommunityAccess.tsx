
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TELEGRAM_URL = "https://t.me/yourcommunity";
const DISCORD_URL = "https://discord.gg/yourcommunity";

const CommunityAccess = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Join the Community</h1>
      <p className="text-gray-300 text-center mb-6">
        Connect with fellow creators, join mastermind calls, share wins, and network for collaboration—all in our private groups!
      </p>
      <div className="flex flex-col items-center gap-4 w-full">
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center py-3 px-6 rounded-lg transition">Join our Telegram</a>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center py-3 px-6 rounded-lg transition">Join our Discord</a>
      </div>
      <p className="mt-6 text-sm text-gray-400 italic">We’d love to see you inside! Community is everything.</p>
    </div>
    <Footer />
  </div>
);

export default CommunityAccess;
