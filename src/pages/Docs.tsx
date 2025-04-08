
import React, { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { tutorialsList } from "@/data/tutorialsList";
import GettingStartedContent from "@/components/docs/GettingStartedContent";
import TutorialsContent from "@/components/docs/TutorialsContent";

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("getting-started");
  const [activeTutorial, setActiveTutorial] = useState<string | null>(null);
  
  useEffect(() => {
    const hash = location.hash.substring(1);
    
    if (hash.startsWith("tutorial-")) {
      setActiveTab("tutorials");
      setActiveTutorial(hash.replace("tutorial-", ""));
    } else if (hash) {
      setActiveTab(hash);
    }
  }, [location]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`#${value}`);
  };

  const handleTutorialSelect = (tutorialId: string) => {
    setActiveTutorial(tutorialId === activeTutorial ? null : tutorialId);
    if (tutorialId !== activeTutorial) {
      navigate(`#tutorial-${tutorialId}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about using our mobile application.
              </p>
            </div>

            <Alert className="mb-6 bg-amber-50 border-amber-200">
              <AlertDescription>
                Our app is coming soon! The download links will be available here when the app is released.
              </AlertDescription>
            </Alert>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-12">
              <TabsList className="w-full md:w-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started">
                <GettingStartedContent />
              </TabsContent>
              
              <TabsContent value="tutorials">
                <TutorialsContent 
                  tutorials={tutorialsList}
                  activeTutorial={activeTutorial}
                  onTutorialSelect={handleTutorialSelect}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
