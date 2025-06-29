
import React from 'react';
import { motion } from 'framer-motion';

const ProductFeatureGrid: React.FC = () => {
  const features = [
    {
      icon: "🎯",
      title: "Instant Setup",
      description: "Get your online business running in under 30 minutes with our step-by-step guide"
    },
    {
      icon: "💰",
      title: "Multiple Income Streams",
      description: "Digital products, affiliate marketing, and course sales all in one system"
    },
    {
      icon: "🤖",
      title: "AI-Powered Tools",
      description: "Leverage artificial intelligence to create content and automate your workflow"
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Manage your business from anywhere with mobile-friendly tools and dashboards"
    },
    {
      icon: "🔥",
      title: "Viral Content Library",
      description: "Access 200K+ proven viral reels and content templates"
    },
    {
      icon: "🎓",
      title: "Premium Courses",
      description: "1000+ high-ticket courses with full resell rights included"
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">
            Everything You Need to Start Making Money Online
          </h2>
          <p className="text-gray-600 text-sm">
            Complete system with proven strategies and tools
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-black text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureGrid;
