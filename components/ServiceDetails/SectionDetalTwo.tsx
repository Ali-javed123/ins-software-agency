"use client"
import { FC, useCallback, useEffect, useState } from 'react'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import './service-two.css'
import { supabase } from "@/lib/supabase-client"

// Types
interface ServiceGroup {
  id: string
  title: string
}

interface Service {
  id: string
  title: string
  service_group_id: string
}

interface ServiceDetailThree {
  id: string
  created_at: string
  heading: string
  description: string
  icon: string
  service_id: string
  service_group_id: string
}

interface PageProps {
  serviceId?: string;
  groupId?: string;
}

const ServiceTwo = ({ groupId, serviceId }: PageProps) => {
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [serviceDetails, setServiceDetails] = useState<ServiceDetailThree[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredDetail, setFilteredDetail] = useState<ServiceDetailThree | null>(null)

  const fetchAllData = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      
      // Fetch service groups (if needed for other functionality)
      const { data: groupsData, error: groupsError } = await supabase
        .from('service_groups')
        .select('id, title')
        .order('created_at', { ascending: true })

      if (groupsError) throw groupsError
      setServiceGroups(groupsData || [])

      // Fetch services (if needed for other functionality)
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('id, title, service_group_id')
        .order('created_at', { ascending: true })

      if (servicesError) throw servicesError
      setServices(servicesData || [])

      // Fetch service detail three - FILTER BY groupId AND serviceId
      let query = supabase
        .from('service_detail_three')
        .select('*')
        .order('created_at', { ascending: true })

      // Apply filters if groupId and serviceId are provided
      if (groupId) {
        query = query.eq('service_group_id', groupId)
      }
      
      if (serviceId) {
        query = query.eq('service_id', serviceId)
      }

      const { data: serviceDetailsData, error: serviceDetailsError } = await query

      if (serviceDetailsError) throw serviceDetailsError
      setServiceDetails(serviceDetailsData || [])
      
      // Set the first filtered detail (or null if no data)
      setFilteredDetail(serviceDetailsData && serviceDetailsData.length > 0 
        ? serviceDetailsData[0] 
        : null)

    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Failed to load data. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }, [groupId, serviceId]) // Add dependencies

  useEffect(() => {
    fetchAllData()
  }, [fetchAllData])
console.log("serviceDetailsThree",serviceDetails)
  return (
    <>
      {serviceDetails.length > 0 && (
    <section className="stats-bar">
      <div className="container">
        <div className="row text-center align-items-center">
              {serviceDetails.map((e, i) => (
                
          <div key={i} className="col-md-6 col-lg-3 stat-item">
           


             <div className="row">
              <div className="col-md-1">

            <i className={`${e.icon} stat-icon`}/>
              </div>
              <div className="col-md-10">
                
            <h3>{e.heading}</h3>
         <p>{e.description}</p>
              </div>
            </div>
          </div>
              ))
                
          }

         

        </div>
      </div>
      </section>
        
      )}
      </>
  );
}
export default ServiceTwo