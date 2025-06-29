
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
// Removed: import SlinkySection from './SlinkySection';

const ProductInfo: React.FC = () => {
  return <div className="w-full px-4 bg-white">
      {/* Removed: <SlinkySection /> */}
      <div className="w-full flex justify-center mb-4">
        <img alt="LaunchPad Pro Pack Banner" className="w-full max-w-md rounded-lg" src="/lovable-uploads/b4eed02e-f9c6-44d3-abd3-b78fa368a55e.png" />
      </div>
      <h1 className="text-black mt-2 mb-2 text-2xl text-center py-[10px] my-[13px] font-extrabold">Steal My All-Inclusive, Done-For-You System to Start Making Money Online with Social Media—Even If You Don't Have Experience!</h1>
      
      {/* New images added below the heading */}
      <div className="w-full flex flex-col items-center space-y-4 mb-6 px-5">
        <img alt="Success testimonial about moving to new home" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/eb9a95f0-2ee3-4b35-b521-322495676a63.png" />
        <img alt="Beautiful modern home interior" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/462e46e6-4622-479c-84d0-f2b846a4d9c9.png" />
      </div>

      {/* Gloria's Introduction Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img alt="Meet Gloria - Your Success Guide" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/18ac57cb-8c68-48de-b143-aeaddf92c215.png" />
        <div className="rounded-lg p-6 max-w-md w-full bg-slate-50 px-[4px]">
          <h2 className="text-lg font-bold text-black mb-3">Hey, nice to meet you! My name is Gloria.</h2>
          <p className="text-sm text-gray-700 mb-3">
            I'm an Italian girl who was always taught to do the right things: go to school and get a college degree so you can find a good job.
          </p>
          <p className="text-sm text-gray-700 mb-3 font-semibold">Well, I did it.</p>
          <p className="text-sm text-gray-700 mb-3">
            I went to school and then to college and I got a degree. But then?
          </p>
          <p className="text-sm text-gray-700 mb-3">
            I had nothing. With my degree I could barely make $500/month working 8 hours/day as I had no experience and this is what they can offer you.
          </p>
          <p className="text-sm mt-3 font-semibold text-yellow-500">
            Well, they got it wrong.
          </p>
        </div>
      </div>

      {/* Discovery Story Section - Clone 1 */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img alt="Discovery Story Image 1" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/632dd5e3-a018-4d66-bbee-a79188ae7929.jpg" />
        <div className="rounded-lg p-6 max-w-md w-full bg-slate-50 px-[4px]">
          <h2 className="text-lg font-bold text-black mb-3">I discovered something that changed everything.</h2>
          <p className="text-sm text-gray-700 mb-3">One day, scrolling on Instagram I stumbled upon Digital Marketing and saw how ordinary people and graduates like me were changing their lives making money online with no experience.</p>
          <p className="text-sm text-gray-700 mb-3 font-semibold">They were making $500/day! WHAT?</p>
          <p className="text-sm text-gray-700 mb-3">They had no boss, no working hours, no rush in the traffic. I wanted that life.



So I decided to give it a try since I had nothing to lose.</p>
          <p className="text-sm text-gray-700">Oh and if you're asking, yes, I was scared. I was skeptical as well.



But I'm the kind of person who has to try it herself before giving up.</p>
          <p className="text-sm mt-3 font-semibold text-green-500">
            This was my breakthrough moment.
          </p>
        </div>
      </div>

      {/* Discovery Story Section - Clone 2 */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img alt="Discovery Story Image 2" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/7e44e579-d766-41f7-bb72-7becfb87c920.jpg" />
        <div className="rounded-lg p-6 max-w-md w-full bg-slate-50 px-[4px]">
          <h2 className="text-lg font-bold text-black mb-3">I decided to take action immediately.</h2>
          <p className="text-sm text-gray-700 mb-3">I didn't want to ask my parents so I worked 2 jobs for 8 months: I was a nanny in the morning and a secretary in a law firm in the afternoon. I saved up the money I needed to learn the skills so I could finally build my dream future. And I took the first step, I bought the course.</p>
          <p className="text-sm text-gray-700 mb-3 font-semibold">It's been a journey, it takes consistency and faith.

        </p>
          
          
          <p className="text-sm mt-3 font-semibold text-blue-500">But since that first step...</p>
        </div>
      </div>

      {/* Discovery Story Section - Clone 3 */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <img alt="Discovery Story Image 3" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/82e7cbc4-56f1-4bcd-b499-209051e3922d.jpg" />
        
      </div>

      {/* Discovery Story Section - Clone 4 */}
      

      {/* First Steps Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        
        
      </div>

      {/* Success Results Section */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <div className="rounded-lg p-6 max-w-md w-full bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 bg-yellow-50 px-[20px]">
          <h2 className="text-xl font-bold mb-4 text-center text-yellow-600">Now I Get To...</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I can travel the world without asking for permission</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I get to choose my working hours depending on how I feel every day</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I spend more time with my family</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I can wake up with no alarm clock</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I finally feel valuable, capable and proud of myself</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I live life on my own terms</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I'm creating a bright future for my boyfriend and I</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-lg">✨</span>
              <p className="text-sm text-gray-700">I help others escape their stressful jobs to gain back their own time and financial freedom thanks to digital marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - "I know what you're probably thinking..." */}
      <div className="w-full flex flex-col items-center space-y-4 mb-8">
        <div className="rounded-lg p-6 max-w-md w-full bg-slate-50 px-0">
          <h2 className="text-lg font-bold text-black mb-4">I know what you're probably thinking...</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ✗
              </div>
              <p className="text-sm text-gray-700">How can I do this? I don't even have a product to sell</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ✗
              </div>
              <p className="text-sm text-gray-700">It's not for me, I don't know much about social media</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ✗
              </div>
              <p className="text-sm text-gray-700">I'm not tech savvy at all, how can I set up an online store?</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ✗
              </div>
              <p className="text-sm text-gray-700">I have no skills, why would someone buy from me?</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ✗
              </div>
              <p className="text-sm text-gray-700">I have a 9-5 and kids, how can I find extra time to do this?</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-black mb-2">If that's you, you're exactly where you should be!</p>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-300">
            <h3 className="text-lg font-bold text-black mb-2">This Is The Reason Why The Ultimate Branding Course Is What You Need</h3>
            <p className="text-sm text-gray-700 mb-2">
              In this comprehensive course you'll learn from <span className="font-semibold">A to Z</span> how to create your successful brand selling digital products...
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Even if you never heard about it or you don't have any products to sell.</span>
            </p>
          </div>
        </div>
        
        {/* Added UBC Course showcase image */}
        <div className="w-full flex justify-center mt-4">
          <img alt="Ultimate Branding Course showcase" className="w-full max-w-md rounded-lg shadow-md" src="/lovable-uploads/c4d7d51a-b7da-4e8b-bd68-03661aee1365.png" />
        </div>
      </div>

      {/* FAQ Dropdown Section */}
      <div className="w-full max-w-md mx-auto mb-4">
        <h3 className="text-lg font-bold text-black mb-3">What's Included:</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>Earn While You Learn Program</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              Love the course? Turn it into your first income stream with our Affiliate Program. Resell a Done-For-You (DFY) $997 course and keep 85% of the profits. No product creation needed!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>No Hidden Costs Policy</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              One-time payment, lifetime value. No upsells, no surprises. Just everything you need in one place.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>Done-For-You Funnel Templates</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              Already DFY Funnel Templates to save hours of your time so you can start monetize right away.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>Multi-Language Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              Available in 5+ Languages – Access the entire course in English, Spanish, French, Portuguese, and German. Italian coming soon!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>$3,000+ in FREE Bonuses</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              <div className="space-y-2">
                <p>→ Step-by-Step Guide to Selling Digital Products</p>
                <p>→ Website Setup & Launch Blueprint</p>
                <p>→ AI Customer Acquisition Secrets</p>
                <p>→ 40M+ Premium Digital Products Access</p>
                <p>→ 1000+ Resellable High-Ticket Courses</p>
                <p>→ 200K+ Viral Reels for Content Creation</p>
                <p>→ 300K+ ChatGPT Prompt Bundle</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 font-semibold text-black hover:no-underline text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📁</span>
                <span>Ready-Made Ad Templates</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm pb-4">
              <span className="text-black">
                Bonus: Ready-Made, Tested & Proven Ad Templates <span className="text-[#f4d535]">(₹3999 Value Bonus FREE)</span>
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="text-black mb-1 text-base text-center py-[3px] font-bold">
        No Camera. No Experience Needed.
      </p>
    </div>;
};
export default ProductInfo;
