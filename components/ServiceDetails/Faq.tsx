'use client';

import { useState } from 'react';
// import { faqData, FAQItem } from '@/data/faqData';
import { FiPlus, FiMinus } from 'react-icons/fi';
// data/faqData.ts
import './Faq.css'
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How much does it cost to develop a mobile app?',
    answer:
      'The cost of mobile app development depends on complexity, platform choice, and features. Basic apps range from $10,000 to $50,000, while advanced apps can go up to $500,000.',
  },
  {
    id: 'faq2',
    question: 'How much time does it take to develop a mobile app?',
    answer:
      'A simple app may take 2–3 months, while complex applications can take 6 months or more depending on requirements.',
  },
  {
    id: 'faq3',
    question: 'What are the current trends in mobile app development?',
    answer:
      'AI integration, cross-platform development, IoT, and enhanced app security are key trends.',
    },
  {
    id: 'faq4',
    question: 'How much does it cost to develop a mobile app?',
    answer:
      'The cost of mobile app development depends on complexity, platform choice, and features. Basic apps range from $10,000 to $50,000, while advanced apps can go up to $500,000.',
  },
  {
    id: 'faq5',
    question: 'How much time does it take to develop a mobile app?',
    answer:
      'A simple app may take 2–3 months, while complex applications can take 6 months or more depending on requirements.',
  },
  {
    id: 'faq6',
    question: 'What are the current trends in mobile app development?',
    answer:
      'AI integration, cross-platform development, IoT, and enhanced app security are key trends.',
  },
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="faq-title text-center mb-5">
          Mobile App Development FAQs
        </h2>

        {faqData.map((item: FAQItem) => {
          const isOpen = activeId === item.id;

          return (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                {isOpen ? <FiMinus /> : <FiPlus />}
              </button>

              <div
                className={`faq-answer ${isOpen ? 'open' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
