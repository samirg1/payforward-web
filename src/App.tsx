import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { inject } from "@vercel/analytics";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Docs from "@/pages/Docs";
import Faq from "@/pages/FAQ";
import Index from "@/pages/Index";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import Redirect from "@/pages/Redirect";

import DownloadDialog from "@/components/DownloadDialog";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Initialize Vercel Analytics
inject();

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = (): null => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const queryClient = new QueryClient();

const ROUTES_TO_PAGES: Record<ALL_PATHS[keyof ALL_PATHS], React.ComponentType> =
    {
        "/": Index,
        "/docs/:section?/:subSection?": Docs,
        "/faq": Faq,
        "/contact": Contact,
        "/about": AboutUs,
        "/legal/:section?": Legal,
        "/redirect": Redirect,
        "*": NotFound,
    };

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <DownloadDialog />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {Object.entries(ROUTES_TO_PAGES).map(
                        ([path, Component]) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ),
                    )}
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
