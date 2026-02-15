'use client'

import { FC, useState, useEffect, useCallback } from 'react'
// import { faqData, FAQItem } from '@/data/faqData';
import { FiPlus, FiMinus } from 'react-icons/fi';
// data/faqData.ts
import { supabase } from "@/lib/supabase-client"

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



// ============ TYPES ============

// Service Groups Table (Reference)
interface ServiceGroup {
  id: string
  title: string
  slug: string
  created_at: string
}

// Services Table (Reference)
interface Service {
  id: string
  title: string
  slug: string
  created_at: string
  service_group_id: string
  icon: string
  image: string | null
}
// Service Detail FAQ Group Table (Parent)
interface ServiceDetailFAQGroup {
  id: string
  created_at: string
  heading: string
  service_id: string
  service_group_id: string
  service_groups?: ServiceGroup
  services?: Service
  service_detail_faqs: ServiceDetailFAQ[]
}
interface ServiceDetailFAQ {
  id: string
  created_at: string
  heading: string
  des: string
  faq_group_id: string
  list: FAQListItem[]
}
interface FAQListItem {
  answer: string
}

interface PageProps {
  serviceId?: string;
  groupId?: string;
}
const FAQSection = ({ groupId, serviceId }: PageProps) => {
  const [activeId, setActiveId] = useState<string | null>('faq1');
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // Reference data
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
  const [services, setServices] = useState<Service[]>([])
  
  // Main data
  const [serviceDetailFAQGroups, setServiceDetailFAQGroups] = useState<ServiceDetailFAQGroup[]>([])
const [filteredGroups, setFilteredGroups] = useState<ServiceDetailFAQGroup[]>([])
  const [displayedGroups, setDisplayedGroups] = useState<ServiceDetailFAQGroup[]>([])
  


  const toggleFAQ = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };


const fetchServiceGroups = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('service_groups')
        .select('id, title, slug, created_at')
        .order('title', { ascending: true })

      if (error) throw error
      setServiceGroups(data || [])
    } catch (error) {
      console.error('Error fetching service groups:', error)
      setError('Failed to load service groups')
    }
  }, [])
    const fetchServices = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('id, title, slug, created_at, service_group_id, icon, image')
        .order('title', { ascending: true })

      if (error) throw error
      setServices(data || [])
    } catch (error) {
      console.error('Error fetching services:', error)
      setError('Failed to load services')
    }
  }, [])

 const fetchServiceDetailFAQGroups = useCallback(async () => {
  try {
    setLoading(true)

    // 🔥 Step 1: Base Query
    let query = supabase
      .from('service_detail_faq_group')
      .select('*')
      .order('created_at', { ascending: true })

    // ✅ Filter by groupId (agar diya gaya ho)
    if (groupId) {
      query = query.eq('service_group_id', groupId)
    }

    // ✅ Filter by serviceId (agar diya gaya ho)
    if (serviceId) {
      query = query.eq('service_id', serviceId)
    }

    const { data: groups, error: groupsError } = await query

    if (groupsError) throw groupsError

    if (!groups || groups.length === 0) {
      setServiceDetailFAQGroups([])
      return
    }

    // 🔥 Step 2: Sirf filtered groups ke FAQs fetch karo
    const groupIds = groups.map(g => g.id)

    const { data: faqs, error: faqError } = await supabase
      .from('service_detail_faq')
      .select('*')
      .in('faq_group_id', groupIds)
      .order('created_at', { ascending: true })

    if (faqError) throw faqError

    // 🔥 Step 3: Merge FAQs into Groups
    const groupsWithFaqs = groups.map(group => ({
      ...group,
      service_detail_faqs: faqs?.filter(f => f.faq_group_id === group.id) || []
    }))

    setServiceDetailFAQGroups(groupsWithFaqs)

  } catch (error) {
    console.error('Error fetching FAQ groups:', error)
    setError('Failed to load FAQs')
  } finally {
    setLoading(false)
  }
}, [groupId, serviceId])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        await fetchServiceGroups()
        await fetchServices()
        await fetchServiceDetailFAQGroups()
      } catch (error) {
        console.error('Error loading data:', error)
        setError('Failed to load data. Please check console for details.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [fetchServiceGroups, fetchServices, fetchServiceDetailFAQGroups])
console.log("serviceDetailFAQGroups",serviceDetailFAQGroups)
  return (
    <>
      {serviceDetailFAQGroups.length > 0 && (
        serviceDetailFAQGroups.map((e:ServiceDetailFAQGroup, i) => (
    
    <section key={i} className="faq-section py-5">
      <div className="container">
        <h2 className="faq-title text-center mb-5">
{e?.heading}

        </h2>

        {e.service_detail_faqs.map((item: ServiceDetailFAQ) => {
          const isOpen = activeId === item.id;

          return (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.heading}</span>
                {isOpen ? <FiMinus /> : <FiPlus />}
              </button>

              <div
                className={`faq-answer ${isOpen ? 'open' : ''}`}
              >
                <p>{item.des}</p>
                  
                <ul >
                {item.list.map((li:FAQListItem, index:number) => (
                    <li key={index}>{li.answer }</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  ))      
      )}
    </>
  );
};

export default FAQSection;



// 'use client'

// import { FC, useState, useEffect, useCallback } from 'react'
// import { FiPlus, FiMinus } from 'react-icons/fi';
// import { supabase } from "@/lib/supabase-client"
// import './Faq.css'

// // ============ TYPES ============

// interface ServiceGroup {
//   id: string
//   title: string
//   slug: string
//   created_at: string
// }

// interface Service {
//   id: string
//   title: string
//   slug: string
//   created_at: string
//   service_group_id: string
//   icon: string
//   image: string | null
// }

// interface ServiceDetailFAQGroup {
//   id: string
//   created_at: string
//   heading: string
//   service_id: string
//   service_group_id: string
//   service_groups?: ServiceGroup
//   services?: Service
//   service_detail_faqs: ServiceDetailFAQ[]
// }

// interface ServiceDetailFAQ {
//   id: string
//   created_at: string
//   heading: string
//   des: string
//   faq_group_id: string
//   list: FAQListItem[]
// }

// interface FAQListItem {
//   answer: string
// }

// interface PageProps {
//   serviceId?: string;
//   groupId?: string;
// }

// const FAQSection = ({ groupId, serviceId }: PageProps) => {
//   const [activeId, setActiveId] = useState<string | null>('faq1');
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
  
//   // Reference data
//   const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
//   const [services, setServices] = useState<Service[]>([])
  
//   // Main data
//   const [serviceDetailFAQGroups, setServiceDetailFAQGroups] = useState<ServiceDetailFAQGroup[]>([])
//   const [filteredGroups, setFilteredGroups] = useState<ServiceDetailFAQGroup[]>([])

//   console.log("FAQSection - GroupId:", groupId, "ServiceId:", serviceId)

//   // Filter function for FAQ groups (similar to HighValue component)
//   const filterFAQGroups = useCallback((groups: ServiceDetailFAQGroup[]) => {
//     if (!groupId && !serviceId) {
//       return groups; // Return all groups if no filters are applied
//     }

//     return groups.filter(group => {
//       let matchesGroup = true;
//       let matchesService = true;

//       // Filter by groupId if provided
//       if (groupId) {
//         matchesGroup = group.service_group_id === groupId;
//       }

//       // Filter by serviceId if provided
//       if (serviceId) {
//         matchesService = group.service_id === serviceId;
//       }

//       // Apply both filters (AND condition)
//       return matchesGroup && matchesService;
//     });
//   }, [groupId, serviceId]);

//   const toggleFAQ = (id: string) => {
//     setActiveId(prev => (prev === id ? null : id));
//   };

//   const fetchServiceGroups = useCallback(async () => {
//     try {
//       const { data, error } = await supabase
//         .from('service_groups')
//         .select('id, title, slug, created_at')
//         .order('title', { ascending: true })

//       if (error) throw error
//       setServiceGroups(data || [])
//     } catch (error) {
//       console.error('Error fetching service groups:', error)
//       setError('Failed to load service groups')
//     }
//   }, [])

//   const fetchServices = useCallback(async () => {
//     try {
//       const { data, error } = await supabase
//         .from('services')
//         .select('id, title, slug, created_at, service_group_id, icon, image')
//         .order('title', { ascending: true })

//       if (error) throw error
//       setServices(data || [])
//     } catch (error) {
//       console.error('Error fetching services:', error)
//       setError('Failed to load services')
//     }
//   }, [])

//   const fetchServiceDetailFAQGroups = useCallback(async () => {
//     try {
//       setLoading(true)

//       // Step 1: Build query with filters for parent table
//       let query = supabase
//         .from('service_detail_faq_group')
//         .select('*')
//         .order('created_at', { ascending: true })

//       // Apply filters at database level (similar to HighValue component)
//       if (groupId) {
//         query = query.eq('service_group_id', groupId)
//       }

//       if (serviceId) {
//         query = query.eq('service_id', serviceId)
//       }

//       const { data: groups, error: groupsError } = await query

//       if (groupsError) throw groupsError

//       // Set filtered groups directly from database query
//       setServiceDetailFAQGroups(groups || [])
      
//       // Apply any additional client-side filtering if needed
//       setFilteredGroups(filterFAQGroups(groups || []))

//       // Step 2: Fetch FAQs only for the filtered groups
//       if (groups && groups.length > 0) {
//         const groupIds = groups.map(g => g.id)

//         const { data: faqs, error: faqError } = await supabase
//           .from('service_detail_faq')
//           .select('*')
//           .in('faq_group_id', groupIds) // Only fetch FAQs for filtered groups
//           .order('created_at', { ascending: true })

//         if (faqError) throw faqError

//         // Step 3: Merge FAQs into Groups
//         const groupsWithFaqs = groups.map(group => ({
//           ...group,
//           service_detail_faqs: faqs?.filter(f => f.faq_group_id === group.id) || []
//         }))

//         setServiceDetailFAQGroups(groupsWithFaqs)
//         setFilteredGroups(filterFAQGroups(groupsWithFaqs))
//       } else {
//         setServiceDetailFAQGroups([])
//         setFilteredGroups([])
//       }

//     } catch (error) {
//       console.error('Error fetching FAQ groups:', error)
//       setError('Failed to load FAQs')
//     } finally {
//       setLoading(false)
//     }
//   }, [groupId, serviceId, filterFAQGroups])

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true)
//       setError(null)
//       try {
//         await fetchServiceGroups()
//         await fetchServices()
//         await fetchServiceDetailFAQGroups()
//       } catch (error) {
//         console.error('Error loading data:', error)
//         setError('Failed to load data. Please check console for details.')
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadData()
//   }, [fetchServiceGroups, fetchServices, fetchServiceDetailFAQGroups, groupId, serviceId])

//   // Additional useEffect to re-filter when dependencies change
//   useEffect(() => {
//     setFilteredGroups(filterFAQGroups(serviceDetailFAQGroups))
//   }, [serviceDetailFAQGroups, filterFAQGroups])

//   console.log("Filtered FAQ Groups:", filteredGroups)

// console.log("serviceDetailFAQGroups",serviceDetailFAQGroups)
//   return (
//     <>
//       {serviceDetailFAQGroups.length > 0 && (
//         serviceDetailFAQGroups.map((e:ServiceDetailFAQGroup, i) => (
    
//     <section key={i} className="faq-section py-5">
//       <div className="container">
//         <h2 className="faq-title text-center mb-5">
// {e?.heading}

//         </h2>

//         {e.service_detail_faqs.map((item: ServiceDetailFAQ) => {
//           const isOpen = activeId === item.id;

//           return (
//             <div key={item.id} className="faq-item">
//               <button
//                 className="faq-question"
//                 onClick={() => toggleFAQ(item.id)}
//                 aria-expanded={isOpen}
//               >
//                 <span>{item.heading}</span>
//                 {isOpen ? <FiMinus /> : <FiPlus />}
//               </button>

//               <div
//                 className={`faq-answer ${isOpen ? 'open' : ''}`}
//               >
//                 <p>{item.des}</p>
                  
//                 <ul >
//                 {item.list.map((li:FAQListItem, index:number) => (
//                     <li key={index}>{li.answer }</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   ))      
//       )}
//     </>
//   );
// };

// export default FAQSection;
