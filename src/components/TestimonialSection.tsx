
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote as QuoteIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Marcus T.",
    location: "Texas, USA",
    status: "Verified Student",
    quote:
      "Honestly didn’t think this would work for me, but wow… I followed the steps, used the tools Alyssa recommended, and boom — first video up, 3K views in 10 days. Just hit 1,000 subs and I’m getting monetized. Wild.",
  },
  {
    name: "David M.",
    location: "California, USA",
    status: "Verified Student",
    quote:
      "I’ve always wanted to start a YouTube channel but never knew where to start. This course made it stupid simple. AI does 90% of the work. I still can’t believe I’m publishing weekly and it barely takes me 2 hours a week.",
  },
  {
    name: "Mike R.",
    location: "New York, USA",
    status: "Verified Student",
    quote:
      "After surgery, I had so much downtime and wanted to try something new. This was perfect. I didn’t even need a camera. Now I’ve got videos ranking in search and even made $174 last week in affiliate sales. Grateful, seriously.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-8 bg-zinc-950">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-6">
          <motion.h2
            className="text-xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            See How Real People Are Building Passive Income with the YouTube Income Academy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xs flex items-center justify-center gap-1"
          >
            <Star size={14} className="text-yellow-400" />
            Rated 4.8/5 by 1,300+ happy creators
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="px-4 space-y-4">
          {testimonials.map((t, idx) => (
            <motion.div
              className="bg-gray-900 rounded-lg p-5 shadow-md border border-gray-700 flex flex-col"
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.18 }}
            >
              <div className="mb-2">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-gray-400 text-xs ml-2">{t.location}</span>
                <span className="ml-3 inline-flex items-center rounded-full bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300">
                  ✓ {t.status}
                </span>
              </div>
              <div className="relative mb-1">
                <QuoteIcon className="absolute top-0 left-0 w-6 h-6 text-gray-600 opacity-40 -translate-x-2 -translate-y-1" />
                <p className="text-sm text-gray-300 pl-2 italic">{t.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/reviews"
            className="text-gray-400 font-semibold text-sm flex items-center px-4 py-2 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
          >
            See all reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
