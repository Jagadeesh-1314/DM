// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import SEO from "./Pages/SEO/SEO";
import SocialMediaMarketing from "./Pages/SocialMediaMarketing/SocialMediaMarketing";
import BrandDevelopment from "./Pages/BrandDevelopment/BrandDevelopment";
import WebsiteDevelopment from "./Pages/WebsiteDevelopment/WebsiteDevelopment";
import ScrollToTop from "./components/ScrollToTop";
import ContentMarketing from "./Pages/Content Marketing/ContentMarketing";
import PPCAdvertising from "./Pages/PPCAdvertising/PPCAdvertising";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

// Shared layout for consistent navbar/footer across pages
const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/services/seo", element: <SEO /> },
      { path: "/services/brand-development", element: <BrandDevelopment /> },
      { path: "/services/social-media-marketing", element: <SocialMediaMarketing /> },
      { path: "/services/web-development", element: <WebsiteDevelopment /> },
      { path: "/services/content-marketing", element: <ContentMarketing /> },
      { path: "/services/ppc-advertising", element: <PPCAdvertising /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // splash screen for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TooltipProvider>
          <Toaster />
          <Sonner /> */}
      <RouterProvider router={router} />
      {/* </TooltipProvider> */}
    </QueryClientProvider>
  );
};

export default App;
