
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrackOrder from "./pages/TrackOrder";
import HowToUse from "./pages/HowToUse";
import HelpCenter from "./pages/HelpCenter";
import ShippingDelivery from "./pages/ShippingDelivery";
import ReturnRefund from "./pages/ReturnRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/return-refund" element={<ReturnRefund />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
