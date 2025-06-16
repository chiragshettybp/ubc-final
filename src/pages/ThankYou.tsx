
import React from 'react';
import { CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-yellow-400 text-white">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-yellow-400">
            Thank You for Your Purchase!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Check Your Email</span>
            </div>
            <p className="text-gray-300">
              You will receive an email from the <strong>Alyssa Ray Team</strong> with your course access details and next steps.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-400/20">
            <h3 className="font-semibold text-yellow-400 mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-300 space-y-1 text-left">
              <li>• Check your email inbox (and spam folder)</li>
              <li>• Follow the setup instructions</li>
              <li>• Join our private community</li>
              <li>• Start building your YouTube empire!</li>
            </ul>
          </div>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black font-semibold hover:brightness-105"
          >
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
