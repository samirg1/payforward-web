
import React from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Docs = () => {
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

            <Tabs defaultValue="getting-started" className="mb-12">
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
                <Card>
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>Visual guides to help you learn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We offer a wide range of video tutorials to help you get the most out of our app.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Our tutorials cover everything from basic setup to advanced features. New tutorials are added regularly.
                    </p>
                    <div className="border rounded-md p-4 flex justify-center items-center bg-muted/50 h-48">
                      <p className="text-muted-foreground">Video tutorials will appear here</p>
                    </div>
                  </CardContent>
                </Card>
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
