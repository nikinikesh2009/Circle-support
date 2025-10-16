import type { LucideIcon } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  iconName: "User" | "Circle" | "TrendingUp" | "MessageSquare" | "Cpu" | "Bell" | "Shield";
  items: FaqItem[];
};

export const faqData: FaqCategory[] = [
  {
    category: 'Account & Login',
    iconName: "User",
    items: [
      {
        question: 'How do I create a Circle account?',
        answer: 'You can create a Circle account by downloading our app from the App Store or Google Play and signing up with your email address or social media accounts. Just follow the on-screen instructions to set up your profile.'
      },
      {
        question: 'I forgot my password. What should I do?',
        answer: 'On the login screen, tap on "Forgot Password." Enter the email address associated with your account, and we will send you a link to reset your password. If you still have trouble, please contact our support team.'
      },
      {
        question: 'How can I change my profile information?',
        answer: 'You can edit your profile by navigating to the "Profile" tab in the app. From there, you can update your name, profile picture, bio, and other personal details.'
      }
    ]
  },
  {
    category: 'Joining & Leaving Circles',
    iconName: "Circle",
    items: [
      {
        question: 'What are Circles?',
        answer: 'Circles are topic-based living spaces where people with similar interests can meet, talk, and collaborate. Instead of a random feed, you join Circles dedicated to subjects you care about, like Python, Fitness, or Music.'
      },
      {
        question: 'How do I join a Circle?',
        answer: 'You can find and join Circles in the "Explore" tab of the app. We also have pre-built common Circles you can join right away. Additionally, our AI will recommend relevant Circles to you based on your activity and interests.'
      },
      {
        question: 'How do I leave a Circle?',
        answer: 'To leave a Circle, go to the Circle\'s main page, tap the settings icon (usually three dots), and select "Leave Circle." Your posts and comments will remain, but you will no longer receive notifications from that Circle.'
      }
    ]
  },
  {
    category: 'Trending Circle Rules',
    iconName: "TrendingUp",
    items: [
      {
        question: 'How are new Circles created?',
        answer: 'New Circles are automatically created when 1,000 or more unique users request the same topic. This ensures that new communities are vibrant and active from the start. You can request a new topic in the "Explore" tab.'
      },
      {
        question: 'What is a Trending Circle?',
        answer: 'Trending Circles are communities that are rapidly growing in popularity. You can find them highlighted in the "Explore" tab. They are a great way to discover active and engaging conversations.'
      }
    ]
  },
  {
    category: 'Direct Messaging & Private Circles',
    iconName: "MessageSquare",
    items: [
      {
        question: 'Can I send direct messages to other users?',
        answer: 'Yes, you can send direct messages to other users. Simply navigate to their profile and tap the "Message" button to start a private conversation.'
      },
      {
        question: 'What is the difference between Public and Private Circles?',
        answer: 'Public Circles are open for anyone to join and view content. Private Circles are invite-only, and their content is only visible to members. This allows for more focused and private discussions among a select group of people.'
      }
    ]
  },
  {
    category: 'AI Features',
    iconName: "Cpu",
    items: [
      {
        question: 'How does the AI recommend Circles?',
        answer: 'Our AI observes your behavior on the platform, such as the Circles you join, the content you engage with, and your profile interests. Based on this data, it suggests other Circles that you might find interesting, helping you discover new communities.'
      },
      {
        question: 'Is my data used for anything else?',
        answer: 'Your data is used solely to improve your experience on Circle, primarily for recommending relevant content and Circles. We are committed to your privacy. For more details, please see our Privacy Policy.'
      }
    ]
  },
  {
    category: 'Notifications',
    iconName: "Bell",
    items: [
      {
        question: 'How can I manage my notifications?',
        answer: 'You can customize your notification settings in the "Settings" menu. You have granular control over which types of notifications you receive from each Circle, including new posts, comments, and direct messages.'
      }
    ]
  },
  {
    category: 'Safety & Privacy',
    iconName: "Shield",
    items: [
      {
        question: 'How do I report a user or content?',
        answer: 'If you see a user or content that violates our community guidelines, you can report it directly from the post or user profile. Tap the three-dots menu and select "Report." Our moderation team will review the report and take appropriate action.'
      },
      {
        question: 'How is my privacy protected?',
        answer: 'We take your privacy seriously. Circle is designed for real conversations, not endless data harvesting. You have control over your profile information and who can see it. For full details, please read our Privacy Policy.'
      }
    ]
  }
];
