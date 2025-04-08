
type TutorialStep = {
  title: string;
  content: string;
  image: string | null;
};

export type Tutorial = {
  id: string;
  title: string;
  description: string;
  steps: TutorialStep[];
};

export const tutorialsList: Tutorial[] = [
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
