export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  icon: string; // Emoji icon
  items: FaqItem[];
};

export const faqData: FaqCategory[] = [
  {
    category: 'Account & Security',
    icon: '🛡️',
    items: [
      {
        question: 'How do I create a Circle account?',
        answer: 'You can create a Circle account by downloading our app from the App Store or Google Play and signing up with your email address or social media accounts. Just follow the on-screen instructions to set up your profile.'
      },
      {
        question: 'How to reset your password',
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
    icon: '🔹',
    items: [
      {
        question: 'How to join a Circle?',
        answer: 'You can find and join Circles in the "Explore" tab of the app. We also have pre-built common Circles you can join right away. Additionally, our AI will recommend relevant Circles to you based on your activity and interests.'
      },
      {
        question: 'How do I leave a Circle?',
        answer: 'To leave a Circle, go to the Circle\'s main page, tap the settings icon (usually three dots), and select "Leave Circle." Your posts and comments will remain, but you will no longer receive notifications from that Circle.'
      }
    ]
  },
  {
    category: 'Trending Rules',
    icon: '🚀',
    items: [
      {
        question: 'How are new Circles created?',
        answer: 'New Circles are automatically created when 1,000 or more unique users request the same topic. This ensures that new communities are vibrant and active from the start. You can request a new topic in the "Explore" tab.'
      },
      {
        question: 'How Trending Circles are created',
        answer: 'Trending Circles are communities that are rapidly growing in popularity. You can find them highlighted in the "Explore" tab. They are a great way to discover active and engaging conversations.'
      }
    ]
  },
  {
    category: 'Private Messages',
    icon: '✉️',
    items: [
      {
        question: 'How to DM someone',
        answer: 'Yes, you can send direct messages to other users. Simply navigate to their profile and tap the "Message" button to start a private conversation.'
      },
      {
        question: 'What is the difference between Public and Private Circles?',
        answer: 'Public Circles are open for anyone to join and view content. Private Circles are invite-only, and their content is only visible to members. This allows for more focused and private discussions among a select group of people.'
      }
    ]
  },
  {
    category: 'AI Support',
    icon: '🤖',
    items: [
      {
        question: 'How AI Recommendations work',
        answer: 'Our AI observes your behavior on the platform, such as the Circles you join, the content you engage with, and your profile interests. Based on this data, it suggests other Circles that you might find interesting, helping you discover new communities.'
      },
      {
        question: 'Is my data used for anything else?',
        answer: 'Your data is used solely to improve your experience on Circle, primarily for recommending relevant content and Circles. We are committed to your privacy. For more details, please see our Privacy Policy.'
      }
    ]
  }
];

export const trendingQuestions = [
    { icon: '🚀', text: 'How to join a Circle' },
    { icon: '🤖', text: 'How AI Recommendations work' },
    { icon: '🔐', text: 'How to reset your password' },
    { icon: '💬', text: 'How to DM someone' },
    { icon: '⚡', text: 'How Trending Circles are created' }
];

export const videoTutorials = [
    { title: 'How to Join Your First Circle', duration: '1:24', thumbnail: 'https://picsum.photos/seed/1/600/400' },
    { title: 'Understanding Trending Rules', duration: '2:05', thumbnail: 'https://picsum.photos/seed/2/600/400' },
    { title: 'DM & Privacy Settings', duration: '1:45', thumbnail: 'https://picsum.photos/seed/3/600/400' },
    { title: 'Customizing Your Profile', duration: '0:58', thumbnail: 'https://picsum.photos/seed/4/600/400' }
];
