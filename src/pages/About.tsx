
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
          >
            <ArrowLeft size={16} />
            Back
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center">About</h1>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            We're on a mission to help everyday people break free from traditional jobs and build online income streams through the power of digital marketing.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our content is designed for beginners and action-takers who want real, sustainable results — without overwhelm.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
