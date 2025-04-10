
import React from "react";
import { CheckCircle, MessageCircle, Book, Settings, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Easy to Use",
      description: "Intuitive interface designed for maximum usability and efficiency."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Realtime Chat",
      description: "Connect with users instantly through our integrated messaging system."
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Detailed Docs",
      description: "Comprehensive documentation to help you get the most out of our app."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable",
      description: "Tailor the app to your specific needs with powerful customization options."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Integration",
      description: "Seamlessly connect with your favorite tools and platforms."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our mobile application stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="feature-icon mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
