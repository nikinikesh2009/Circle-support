import { locale } from "./locale";

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
  // Simplified for brevity, add other categories as needed
];

export const trendingQuestions = locale.trending.questions;

export const videoTutorials = locale.videos.items;
