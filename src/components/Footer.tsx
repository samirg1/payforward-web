import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "#" },
        { label: "Download", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "FAQs", href: "/faq" },
        { label: "Guides", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <Logo className="h-8" />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Your complete mobile app solution. Designed to make your life easier.
            </p>
          </div>
          
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AppGlance. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
