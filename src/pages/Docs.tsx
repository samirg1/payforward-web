
import React, { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tutorialsList = [
  {
    id: "getting-started-app",
    title: "Getting Started with Our App",
    description: "Learn the basics of using our mobile application",
    steps: [
      {
        title: "Download and Install",
        content: "Download the app from your device's app store and follow the installation prompts.",
        image: "photo-1488590528505-98d2b5aba04b"
      },
      {
        title: "Create Your Account",
        content: "Open the app and tap 'Sign Up'. Enter your email, create a password, and verify your account through the confirmation email.",
        image: "photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "Set Up Your Profile",
        content: "Navigate to the profile tab and add your details, including a profile picture and your preferences.",
        image: "photo-1486312338219-ce68d2c6f44d"
      }
    ]
  },
  {
    id: "advanced-features",
    title: "Advanced Features Guide",
    description: "Discover the powerful features available in our app",
    steps: [
      {
        title: "Using Data Visualization",
        content: "Navigate to the Dashboard and explore the various charts and graphs available for data analysis.",
        image: "photo-1531297484001-80022131f5a1"
      },
      {
        title: "Setting Up Automations",
        content: "Go to Settings > Automations to create custom triggers and actions based on your usage patterns.",
        image: null
      },
      {
        title: "Exporting and Sharing Data",
        content: "From any data view, use the export button to download or share your data in various formats.",
        image: "photo-1461749280684-dccba630e2f6"
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Common Issues",
    description: "Solutions to frequently encountered problems",
    steps: [
      {
        title: "Connection Problems",
        content: "If you're experiencing connection issues, ensure you have a stable internet connection and try restarting the app.",
        image: null
      },
      {
        title: "Account Recovery",
        content: "If you've forgotten your password, use the 'Forgot Password' option on the login screen to reset it.",
        image: null
      },
      {
        title: "Sync Issues",
        content: "To resolve sync problems, go to Settings > Account > Sync and tap 'Force Sync' to manually synchronize your data.",
        image: null
      }
    ]
  }
];

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("getting-started");
  const [activeTutorial, setActiveTutorial] = useState<string | null>(null);
  
  // Parse the URL hash to set active tab and tutorial
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # character
    
    if (hash.startsWith("tutorial-")) {
      setActiveTab("tutorials");
      setActiveTutorial(hash.replace("tutorial-", ""));
    } else if (hash) {
      setActiveTab(hash);
    }
  }, [location]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`#${value}`);
  };

  // Handle tutorial selection
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

            <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-12">
              <TabsList className="w-full md:w-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Installation Guide</CardTitle>
                    <CardDescription>Learn how to install and set up the app</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        <strong>Download the App</strong>
                        <p className="text-muted-foreground mt-1">
                          Get the latest version from the App Store or Google Play Store.
                        </p>
                      </li>
                      <li>
                        <strong>Create an Account</strong>
                        <p className="text-muted-foreground mt-1">
                          Sign up using your email or social media accounts.
                        </p>
                      </li>
                      <li>
                        <strong>Setup Your Profile</strong>
                        <p className="text-muted-foreground mt-1">
                          Complete your profile for the best personalized experience.
                        </p>
                      </li>
                      <li>
                        <strong>Configure Settings</strong>
                        <p className="text-muted-foreground mt-1">
                          Adjust notifications and preferences to suit your needs.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Basic Usage</CardTitle>
                    <CardDescription>Getting started with the core features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our app is designed to be intuitive and user-friendly. Here's a quick overview of the main features:
                    </p>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        <strong>Dashboard</strong>
                        <p className="text-muted-foreground mt-1">
                          View all your important information at a glance.
                        </p>
                      </li>
                      <li>
                        <strong>Profile</strong>
                        <p className="text-muted-foreground mt-1">
                          Manage your personal information and preferences.
                        </p>
                      </li>
                      <li>
                        <strong>Messaging</strong>
                        <p className="text-muted-foreground mt-1">
                          Connect with other users through our secure messaging system.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="api">
                <Card>
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                    <CardDescription>Resources for developers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our app offers a comprehensive API for developers who want to integrate with our platform.
                    </p>
                    <p className="text-muted-foreground">
                      Detailed API documentation is available for authenticated developers. Please contact our support team for access.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tutorials">
                <div className="space-y-6">
                  {tutorialsList.map((tutorial) => (
                    <Collapsible 
                      key={tutorial.id} 
                      open={activeTutorial === tutorial.id}
                      onOpenChange={() => handleTutorialSelect(tutorial.id)}
                      className="border rounded-lg overflow-hidden"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-6 hover:bg-muted/50 transition-colors">
                        <div className="text-left">
                          <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                          <p className="text-muted-foreground">{tutorial.description}</p>
                        </div>
                        {activeTutorial === tutorial.id ? 
                          <ChevronDown className="h-5 w-5 flex-shrink-0" /> : 
                          <ChevronRight className="h-5 w-5 flex-shrink-0" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="px-6 pb-6 pt-2">
                          <ol className="space-y-8">
                            {tutorial.steps.map((step, index) => (
                              <li key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                                <h4 className="text-lg font-medium mb-2">
                                  Step {index + 1}: {step.title}
                                </h4>
                                <p className="text-muted-foreground mb-4">{step.content}</p>
                                {step.image && (
                                  <div className="mt-4 border rounded-md overflow-hidden bg-muted/20">
                                    <img 
                                      src={`https://source.unsplash.com/${step.image}`} 
                                      alt={`Tutorial step: ${step.title}`}
                                      className="w-full h-auto"
                                    />
                                  </div>
                                )}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
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
