"use client"
import { FC, useCallback, useEffect, useState, useRef } from 'react'

import './highValue.css'
import { IoMdAnalytics } from "react-icons/io";
import { CiWifiOff } from "react-icons/ci";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

import { supabase } from "@/lib/supabase-client"

interface ServiceGroup {
  id: string
  title: string
}

interface Service {
  id: string
  title: string
  service_group_id: string
}

interface HighValueGroup {
  id: string
  created_at: string
  heading: string
  description: string
  service_group_id: string
  service_id: string
}

interface HighValueCard {
  id: string
  created_at: string
  icon: string
    des: string          // ✅ NEW: description column

  title: string
  high_value_id: string
}

interface PageProps {
  serviceId?: string;
  groupId?: string;
}

const HighValue = ({ groupId, serviceId }: PageProps) => {
  const [highValueGroups, setHighValueGroups] = useState<HighValueGroup[]>([])
  const [filteredHighValueGroups, setFilteredHighValueGroups] = useState<HighValueGroup[]>([])
  const [highValueCards, setHighValueCards] = useState<HighValueCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
  const [services, setServices] = useState<Service[]>([])

  console.log("GroupId", groupId, "ServiceId", serviceId)

  // Filter high value groups based on groupId and serviceId
  const filterHighValueGroups = useCallback((groups: HighValueGroup[]) => {
    if (!groupId && !serviceId) {
      return groups; // Agar koi filter nahi hai to sare groups dikhao
    }

    return groups.filter(group => {
      let matchesGroup = true;
      let matchesService = true;

      // Filter by groupId agar diya gaya hai
      if (groupId) {
        matchesGroup = group.service_group_id === groupId;
      }

      // Filter by serviceId agar diya gaya hai
      if (serviceId) {
        matchesService = group.service_id === serviceId;
      }

      // Dono filters apply karo (AND condition)
      return matchesGroup && matchesService;
    });
  }, [groupId, serviceId]);

  // Fetch all data
  const fetchAllData = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      
      // Fetch service groups
      const { data: groupsData, error: groupsError } = await supabase
        .from('service_groups')
        .select('id, title')
        .order('created_at', { ascending: true })

      if (groupsError) throw groupsError
      setServiceGroups(groupsData || [])

      // Fetch services
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('id, title, service_group_id')
        .order('created_at', { ascending: true })

      if (servicesError) throw servicesError
      setServices(servicesData || [])

      // Fetch high value groups with optional filters directly from database
      let highValueGroupsQuery = supabase
        .from('high_value_group')
        .select('*')
        .order('created_at', { ascending: true })

      // Agar groupId diya gaya hai to database level pe filter karo
      if (groupId) {
        highValueGroupsQuery = highValueGroupsQuery.eq('service_group_id', groupId)
      }

      // Agar serviceId diya gaya hai to database level pe filter karo
      if (serviceId) {
        highValueGroupsQuery = highValueGroupsQuery.eq('service_id', serviceId)
      }

      const { data: highValueGroupsData, error: highValueGroupsError } = await highValueGroupsQuery

      if (highValueGroupsError) throw highValueGroupsError
      setHighValueGroups(highValueGroupsData || [])
      setFilteredHighValueGroups(highValueGroupsData || []) // Filtered data bhi set karo

      // Fetch high value cards - sirf filtered high value groups ke cards
      if (highValueGroupsData && highValueGroupsData.length > 0) {
        const highValueIds = highValueGroupsData.map(group => group.id)
        
        const { data: highValueCardsData, error: highValueCardsError } = await supabase
          .from('high_value_card')
          .select('*')
          .in('high_value_id', highValueIds) // Sirf relevant high value groups ke cards
          .order('created_at', { ascending: true })

        if (highValueCardsError) throw highValueCardsError
        setHighValueCards(highValueCardsData || [])
      } else {
        setHighValueCards([]) // Agar koi high value group nahi hai to cards bhi empty
      }

    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Failed to load data. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }, [groupId, serviceId])

  useEffect(() => {
    fetchAllData()
  }, [fetchAllData, groupId, serviceId]) // Dependencies mein groupId aur serviceId bhi add karo

  // Filter high value groups jab bhi highValueGroups change ho ya filters change hon
  useEffect(() => {
    setFilteredHighValueGroups(filterHighValueGroups(highValueGroups))
  }, [highValueGroups, filterHighValueGroups])

console.log("filteredHighValueGroups",highValueCards)
    return (
    <>
        {
            highValueGroups.length > 0 && (
                highValueGroups.map((e, i) => (
                
                    <div key={i} className='highvalue' style={{background:`url(/assets/images/service/high-value.webp)`}}>
                        <div className="px-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-12">
                                    
                            <div className="row my-2 justify-content-center align-content-center">
                                <div className="col-md-6 ">
                                    <div className='text-center'>
                                                <h2 className='highhead my-2'>{e.heading}</h2>
              
                                        <p className='highpara my-2'>{e.description}</p>
                                    </div>
                                </div>
                            </div>
                                    <div className="row gutter-x-0">
                                        {highValueCards.length > 0 &&
                                            
                                        highValueCards.map((e, k) => (
    
                                        <div key={k} className="col-md-3 my-2">
                                            <div className='highCard text-center'>
                                                <div className='mb-3 highiconwrap'>
                                                    <i className={`${e.icon} highCardicon`}/>
                                              </div >
                                              <div className='text-center'>

                                                <span className='highCardpara d-block'>{e.title}</span>
                                                 <span className='highCarddes d-block'>{e.des}</span>
                                              </div>
                                            </div>
                                        </div>
))
                                        }
                                       
                        </div>
                                </div>
                            </div>
                            
                    </div>
                    </div>
            ))
        )
          
            }
            </>
  )
}

export default HighValue;