'use client';

import { useState ,useCallback,useEffect} from 'react';
// import { faqData, FAQItem } from '@/data/faqData';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { supabase } from "@/lib/supabase-client"

// data/faqData.ts
import './Faq.css'
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};







interface FAQList {
  list: FAQItem[]
}

interface DatabaseFAQ {
  id: string
  created_at: string
  title: string
  para: string
  items: FAQList[] | null
  faq_group_id: string
}

interface DatabaseFAQGroup {
  id: string
  created_at: string
  mainHeading: string
}
interface FAQ {
  id: string
  created_at: string
  title: string
  para: string
  items: FAQList[]
  faq_group_id: string
}

interface FAQGroup {
  id: string
  created_at: string
  mainHeading: string
  faqs: FAQ[]
}


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

  const [fetchError, setFetchError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [faqGroups, setFaqGroups] = useState<FAQGroup[]>([])




  const toggleFAQ = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };


  const fetchFAQGroups = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      setFetchError(null)
      
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }

      // Fetch all FAQ Groups
      const { data: faqGroupsData, error: faqGroupsError } = await supabase
        .from("faqGroup")
        .select("*")
        .order("created_at", { ascending: false })

      if (faqGroupsError) {
        console.error("Error fetching FAQ Groups:", faqGroupsError)
        setFetchError(faqGroupsError.message || 'Failed to fetch FAQ Groups')
        return
      }

      // Fetch all FAQs
      const { data: faqsData, error: faqsError } = await supabase
        .from("faqs")
        .select("*")
        .order("created_at", { ascending: true })

      if (faqsError) {
        console.error("Error fetching FAQs:", faqsError)
        setFetchError(faqsError.message || 'Failed to fetch FAQs')
        return
      }

      // Process FAQ Groups with their FAQs
      const processedFAQGroups: FAQGroup[] = (faqGroupsData || []).map((group: DatabaseFAQGroup) => {
        // Filter FAQs for this group
        const groupFAQs: FAQ[] = (faqsData || [])
          .filter((faq: DatabaseFAQ) => faq.faq_group_id === group.id)
          .map((faq: DatabaseFAQ) => ({
            id: faq.id,
            created_at: faq.created_at,
            title: faq.title || "",
            para: faq.para || "",
            items: faq.items || [{ list: [] }],
            faq_group_id: faq.faq_group_id
          }))

        return {
          id: group.id,
          created_at: group.created_at,
          mainHeading: group.mainHeading || "",
          faqs: groupFAQs
        }
      })

      setFaqGroups(processedFAQGroups)
    } catch (error) {
      console.error("Unexpected error:", error)
      setFetchError(error instanceof Error ? error.message : 'Unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFAQGroups()
  }, [fetchFAQGroups])


  console.log("faqGroups",faqGroups)
  return (
     <section className="faq-section py-5">
      {faqGroups.map(group => (
        <div key={group.id} className="container mb-5">
          <h2 className="faq-title text-center mb-5">
            {group.mainHeading}
          </h2>

          {group.faqs.map(item => {
            const isOpen = activeId === item.id;

            return (
              <div key={item.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <p >{item.para}:</p>
                    
<ul>
  {item.items?.flatMap((itemGroup, i) =>
    itemGroup.list.map((li, k) => (
      <li key={`${i}-${k}`}>{li.answer}</li>
    ))
  )}
</ul>

                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>

  );
};

export default FAQSection;
