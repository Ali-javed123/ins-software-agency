'use client'

import { FC, useCallback, useEffect, useState, useRef } from 'react'
import './service-two.css'
import { supabase } from "@/lib/supabase-client"

const DELIMITER = '|||CHUNK|||'
const STORAGE_TYPE = "bucket" // 'bucket' or 'base64'

// ============ TYPES ============
interface ServiceGroup {
  id: string
  title: string
  created_at?: string
}

interface Service {
  id: string
  title: string
  service_group_id: string
  created_at?: string
}

interface ServiceDetailFour {
  id: string
  created_at: string
  img: string | null
  heading: string
  description: string
  service_id: string
  service_group_id: string
  imgUrl?: string | null
}

interface PageProps {
  serviceId?: string;
  groupId?: string;
}

const ServiceThree = ({ groupId, serviceId }: PageProps) => {
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [serviceDetails, setServiceDetails] = useState<ServiceDetailFour[]>([])
  const [filteredServiceDetails, setFilteredServiceDetails] = useState<ServiceDetailFour[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  console.log("ServiceThree - GroupId:", groupId, "ServiceId:", serviceId)

  // ============ FILTER FUNCTION ============
  const filterServiceDetails = useCallback((details: ServiceDetailFour[]) => {
    if (!groupId && !serviceId) {
      return details; // Agar koi filter nahi hai to sare details dikhao
    }

    return details.filter(detail => {
      let matchesGroup = true;
      let matchesService = true;

      // Filter by groupId agar diya gaya hai
      if (groupId) {
        matchesGroup = detail.service_group_id === groupId;
      }

      // Filter by serviceId agar diya gaya hai
      if (serviceId) {
        matchesService = detail.service_id === serviceId;
      }

      // Dono filters apply karo (AND condition)
      return matchesGroup && matchesService;
    });
  }, [groupId, serviceId]);

  // ============ DATA FETCHING ============
  const fetchAllData = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      
      // Fetch service groups
      const { data: groupsData, error: groupsError } = await supabase
        .from('service_groups')
        .select('id, title, created_at')
        .order('created_at', { ascending: true })

      if (groupsError) throw groupsError
      setServiceGroups(groupsData || [])

      // Fetch services
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('id, title, service_group_id, created_at')
        .order('created_at', { ascending: true })

      if (servicesError) throw servicesError
      setServices(servicesData || [])

      // Fetch service detail four - Database level filtering
      let serviceDetailsQuery = supabase
        .from('service_detail_four')
        .select('*')
        .order('created_at', { ascending: true })

      // Agar groupId diya gaya hai to database level pe filter karo
      if (groupId) {
        serviceDetailsQuery = serviceDetailsQuery.eq('service_group_id', groupId)
      }

      // Agar serviceId diya gaya hai to database level pe filter karo
      if (serviceId) {
        serviceDetailsQuery = serviceDetailsQuery.eq('service_id', serviceId)
      }

      const { data: serviceDetailsData, error: serviceDetailsError } = await serviceDetailsQuery

      if (serviceDetailsError) throw serviceDetailsError
      
      // Process images based on storage type
      const processedDetails = (serviceDetailsData || []).map(detail => convertToServiceDetail(detail))
      setServiceDetails(processedDetails)
      setFilteredServiceDetails(processedDetails) // Filtered data bhi set karo

    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Failed to load data. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }, [groupId, serviceId]) // Dependencies mein groupId aur serviceId add karo

  useEffect(() => {
    fetchAllData()
  }, [fetchAllData, groupId, serviceId]) // Dependencies mein groupId aur serviceId bhi add karo

  // Filter service details jab bhi serviceDetails change ho ya filters change hon
  // useEffect(() => {
  //   setFilteredServiceDetails(filterServiceDetails(serviceDetails))
  // }, [serviceDetails, filterServiceDetails])

  const convertToServiceDetail = (dbRecord: ServiceDetailFour): ServiceDetailFour => {
    if (STORAGE_TYPE === "bucket") {
      return {
        id: dbRecord.id,
        created_at: dbRecord.created_at,
        heading: dbRecord.heading,
        description: dbRecord.description,
        img: null,
        imgUrl: dbRecord.img || null,
        service_id: dbRecord.service_id,
        service_group_id: dbRecord.service_group_id
      }
    } else {
      return {
        id: dbRecord.id,
        created_at: dbRecord.created_at,
        heading: dbRecord.heading,
        description: dbRecord.description,
        img: reconstructFromChunks(dbRecord.img),
        imgUrl: null,
        service_id: dbRecord.service_id,
        service_group_id: dbRecord.service_group_id
      }
    }
  }

  const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
    if (!chunkedString) return null
    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString
    }
    return chunkedString.split(DELIMITER).join('')
  }
// Get image URL for display
  const getImageUrl = (detail: ServiceDetailFour): string | null => {
    if (STORAGE_TYPE === "bucket") {
      return detail.imgUrl || null
    } else {
      return detail.img || null
    }
  }

console.log("filteredDetails four",filteredServiceDetails)
  return (
    <>
      {filteredServiceDetails.length > 0 && (
    <section className="serviceDe-two">  {/* Added className here */}
          <div className="conatiner">  {/* Note: Typo - should be "container" */}
            {filteredServiceDetails.map((e, i) => {
              const imageUrl = getImageUrl(e)

              return (
                
<div key={i} className="row align-items-center justify-content-center">

          <div className="col-md-6">
                    <div className='detail'>
                    {imageUrl ? (
                      
              <div className='detailImage'>
                <img   src={imageUrl}
                        alt={e.heading} className='detailImage'/>
                        </div>
                      ) :
                        (
                           <div className='detailImage'>
                <img src="/assets/images/service/web-deve.jpg" alt="ser" className='detailImage'/>
                        </div>
                        )
                      }
            </div>
          </div>
          <div className="col-md-6 ">
                      <div className='sdf '>
                          
            <h1 className='title mb-2'>{e.heading}?</h1>
            <p className='description '>{e.description}</p>
</div>

          </div>
        </div>
              )
            })

            }
      </div>
    </section>
        
      )
        
    }
    </>
  )
}

export default ServiceThree