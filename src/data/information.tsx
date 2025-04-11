interface InformationSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: InformationSection[] = [];
//     {
//         id: "overview",
//         title: "Overview",
//         content: (
//             <div>
//                 <p className="mb-4">
//                     Our mobile application is designed to provide a seamless
//                     experience across all your devices. With a focus on
//                     performance, security, and ease of use, we've built a
//                     platform that empowers users to accomplish more in less
//                     time.
//                 </p>
//                 <p>
//                     The application supports both iOS and Android platforms,
//                     ensuring that you can stay connected regardless of your
//                     device preference.
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: "features",
//         title: "Key Features",
//         content: (
//             <div>
//                 <ul className="list-disc pl-5 space-y-2">
//                     <li>Cross-platform support for iOS and Android</li>
//                     <li>Real-time synchronization across multiple devices</li>
//                     <li>End-to-end encryption for all user data</li>
//                     <li>Intuitive user interface with customizable themes</li>
//                     <li>Offline functionality with automatic syncing</li>
//                     <li>Regular updates with new features and improvements</li>
//                 </ul>
//             </div>
//         ),
//     },
//     {
//         id: "requirements",
//         title: "System Requirements",
//         content: (
//             <div>
//                 <p className="mb-2 font-medium">iOS:</p>
//                 <ul className="list-disc pl-5 mb-4">
//                     <li>iOS 14.0 or later</li>
//                     <li>Compatible with iPhone, iPad, and iPod touch</li>
//                     <li>Requires at least 200MB of free storage space</li>
//                 </ul>

//                 <p className="mb-2 font-medium">Android:</p>
//                 <ul className="list-disc pl-5">
//                     <li>Android 8.0 (Oreo) or later</li>
//                     <li>Minimum 2GB RAM recommended</li>
//                     <li>Requires at least 150MB of free storage space</li>
//                 </ul>
//             </div>
//         ),
//     },
//     {
//         id: "privacy",
//         title: "Privacy & Security",
//         content: (
//             <div>
//                 <p className="mb-4">
//                     We take privacy and security seriously. Our application
//                     implements several measures to ensure your data remains
//                     safe:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-1">
//                     <li>End-to-end encryption for all communications</li>
//                     <li>
//                         Secure authentication options including biometric login
//                     </li>
//                     <li>
//                         No third-party tracking or analytics without explicit
//                         consent
//                     </li>
//                     <li>
//                         Option to completely delete your account and associated
//                         data
//                     </li>
//                     <li>Regular security audits and penetration testing</li>
//                 </ul>
//             </div>
//         ),
//     },
// ];

export default sections;
