import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import StudentDashboard from "./pages/StudentDashboard";
import BonusResources from "./pages/BonusResources";
import HelpCenter from "./pages/HelpCenter";
import Blog from "./pages/Blog";
import CommunityAccess from "./pages/CommunityAccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";
import LinkInBio from "./pages/LinkInBio";
import UnitedStates from "./pages/UnitedStates";
import Canada from "./pages/Canada";
import UnitedKingdom from "./pages/UnitedKingdom";
import Australia from "./pages/Australia";
import Germany from "./pages/Germany";
import France from "./pages/France";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/usa" element={<Index />} />
          <Route path="/united-states" element={<UnitedStates />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/united-kingdom" element={<UnitedKingdom />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/france" element={<France />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
          {/* Learning & Support */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/bonus-resources" element={<BonusResources />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/community-access" element={<CommunityAccess />} />
          <Route path="/blog" element={<Blog />} />
          {/* Legal & Trust */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          {/* CUSTOM ROUTES ABOVE CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
