
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
    category: 'faq.categories.account.category',
    icon: '🛡️',
    items: [
      {
        question: 'faq.categories.account.items.0.question',
        answer: 'faq.categories.account.items.0.answer'
      },
      {
        question: 'faq.categories.account.items.1.question',
        answer: 'faq.categories.account.items.1.answer'
      },
      {
        question: 'faq.categories.account.items.2.question',
        answer: 'faq.categories.account.items.2.answer'
      }
    ]
  },
  {
    category: 'faq.categories.circles.category',
    icon: '🔹',
    items: [
      {
        question: 'faq.categories.circles.items.0.question',
        answer: 'faq.categories.circles.items.0.answer'
      },
      {
        question: 'faq.categories.circles.items.1.question',
        answer: 'faq.categories.circles.items.1.answer'
      }
    ]
  },
];

export const trendingQuestions = [
    { icon: '🚀', text: 'trending.questions.join' },
    { icon: '🤖', text: 'trending.questions.ai' },
    { icon: '🔐', text: 'trending.questions.password' },
    { icon: '💬', text: 'trending.questions.dm' },
    { icon: '⚡', text: 'trending.questions.trending' }
];

export const videoTutorials = [
    { title: 'videos.items.join', duration: '1:24', thumbnail: 'https://picsum.photos/seed/1/600/400' },
    { title: 'videos.items.rules', duration: '2:05', thumbnail: 'https://picsum.photos/seed/2/600/400' },
    { title: 'videos.items.dm', duration: '1:45', thumbnail: 'https://picsum.photos/seed/3/600/400' },
    { title: 'videos.items.profile', duration: '0:58', thumbnail: 'https://picsum.photos/seed/4/600/400' }
];
