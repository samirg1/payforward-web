
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GettingStartedContent: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default GettingStartedContent;
