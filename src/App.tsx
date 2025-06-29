import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import LinkInBio from "./pages/LinkInBio";
import UnitedStates from "./pages/UnitedStates";
import Canada from "./pages/Canada";
import UnitedKingdom from "./pages/UnitedKingdom";
import Australia from "./pages/Australia";
import Germany from "./pages/Germany";
import France from "./pages/France";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default home page */}
          <Route path="/" element={<LinkInBio />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
          
          {/* Country-specific pages */}
          <Route path="/usa" element={<Index />} />
          <Route path="/united-states" element={<UnitedStates />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/united-kingdom" element={<UnitedKingdom />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/france" element={<France />} />
          
          {/* Home page */}
          <Route path="/home" element={<Home />} />
          
          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
