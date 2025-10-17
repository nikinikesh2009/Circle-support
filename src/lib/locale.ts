
export const defaultLocale = 'en';

export const locale = {
  hero: {
    title: "Welcome to Circle Support 💬",
    subtitle: "Find answers, ask AI, or get help from our team — fast and easy.",
    cta: {
      askAI: "Ask AI Now",
      browseGuides: "Browse Help Guides",
    },
  },
  search: {
    placeholder: "Search your question... 🔍",
  },
  status: {
    operational: "✅ All systems operational",
  },
  trending: {
    title: "📈 Top Trending Questions",
    description: "Here's what other users are asking about right now.",
    questions: {
        join: 'trending.questions.join',
        ai: 'trending.questions.ai',
        password: 'trending.questions.password',
        dm: 'trending.questions.dm',
        trending: 'trending.questions.trending'
    }
  },
  'trending.questions.join': 'How to join a Circle',
  'trending.questions.ai': 'How AI Recommendations work',
  'trending.questions.password': 'How to reset your password',
  'trending.questions.dm': 'How to DM someone',
  'trending.questions.trending': 'How Trending Circles are created',
  quickActions: {
    title: "🧭 Quick Action Panel",
    description: "Need to do something specific? Here are some quick links.",
    ticket: "Create a Ticket",
    contact: "Contact Support",
    academy: "Circle Academy",
    report: "Report a Problem",
  },
  videos: {
    title: "🎥 Video Tutorials",
    description: "Watch these short videos to learn how to use Circle.",
    items: {
        join: 'videos.items.join',
        rules: 'videos.items.rules',
        dm: 'videos.items.dm',
        profile: 'videos.items.profile'
    }
  },
  'videos.items.join': 'How to Join Your First Circle',
  'videos.items.rules': 'Understanding Trending Rules',
  'videos.items.dm': 'DM & Privacy Settings',
  'videos.items.profile': 'Customizing Your Profile',
  faq: {
    title: "📖 FAQ Categories",
    description: "Explore our most frequently asked questions organized by category.",
    noResults: "No questions found. Try a different search term.",
    categories: {
      account: {
        category: 'faq.categories.account.category',
        items: {
          '0': { question: 'faq.categories.account.items.0.question', answer: 'faq.categories.account.items.0.answer' },
          '1': { question: 'faq.categories.account.items.1.question', answer: 'faq.categories.account.items.1.answer' },
          '2': { question: 'faq.categories.account.items.2.question', answer: 'faq.categories.account.items.2.answer' }
        }
      },
      circles: {
        category: 'faq.categories.circles.category',
        items: {
          '0': { question: 'faq.categories.circles.items.0.question', answer: 'faq.categories.circles.items.0.answer' },
          '1': { question: 'faq.categories.circles.items.1.question', answer: 'faq.categories.circles.items.1.answer' }
        }
      }
    }
  },
  'faq.categories.account.category': 'Account & Security',
  'faq.categories.account.items.0.question': 'How do I create a Circle account?',
  'faq.categories.account.items.0.answer': 'You can create a Circle account by downloading our app from the App Store or Google Play and signing up with your email address or social media accounts. Just follow the on-screen instructions to set up your profile.',
  'faq.categories.account.items.1.question': 'How to reset your password',
  'faq.categories.account.items.1.answer': 'On the login screen, tap on "Forgot Password." Enter the email address associated with your account, and we will send you a link to reset your password. If you still have trouble, please contact our support team.',
  'faq.categories.account.items.2.question': 'How can I change my profile information?',
  'faq.categories.account.items.2.answer': 'You can edit your profile by navigating to the "Profile" tab in the app. From there, you can update your name, profile picture, bio, and other personal details.',
  'faq.categories.circles.category': 'Joining & Leaving Circles',
  'faq.categories.circles.items.0.question': 'How to join a Circle?',
  'faq.categories.circles.items.0.answer': 'You can find and join Circles in the "Explore" tab of the app. We also have pre-built common Circles you can join right away. Additionally, our AI will recommend relevant Circles to you based on your activity and interests.',
  'faq.categories.circles.items.1.question': 'How do I leave a Circle?',
  'faq.categories.circles.items.1.answer': 'To leave a Circle, go to the Circle\'s main page, tap the settings icon (usually three dots), and select "Leave Circle." Your posts and comments will remain, but you will no longer receive notifications from that Circle.',
  contact: {
      title: "Still Have Questions?",
      description: "If you couldn't find an answer, submit a ticket and our support team will get back to you.",
      form: {
        topic: {
            label: "Topic",
            placeholder: "Select a topic...",
            options: {
                login: "Login Issue",
                bug: "Bug Report",
                ai: "AI Assistant Issue",
                abuse: "Report Abuse",
                feature: "Feature Request",
                other: "Other"
            }
        },
        email: {
            label: "Your Email",
            placeholder: "you@example.com"
        },
        message: {
            label: "Message",
            placeholder: "Please describe your issue in detail..."
        },
        submit: "Submit Ticket",
        submitting: "Submitting..."
      },
      toast: {
          success: {
              title: "Ticket Submitted!",
              description: "We've received your request and will get back to you soon."
          },
          error: {
              title: "Submission Failed",
              description: "An unknown error occurred. Please try again."
          }
      }
  },
  footer: {
      copyright: "Circle Inc. All rights reserved.",
      about: "About Circle",
      terms: "Terms & Privacy",
      contact: "Contact"
  }
};

export type LocaleStrings = typeof locale;
