'use client'

import { FC, useState, useEffect, useCallback } from 'react'
import './card.css'
import { supabase } from "@/lib/supabase-client"

interface Service {
  id: string;
  title: string;
  description?: string;
  created_at: string;
  slug: string;
  service_group_id: string;
  icon: string;
  image: string | null;
}

interface ServiceGroup {
  id: string;
  title: string;
  description?: string;
  created_at: string;
  slug: string;
}

interface ServiceFiveGroup {
  id: string;
  created_at: string;
  heading: string;
  description: string;
  service_group_id: string;
  service_id: string;
  service_groups?: ServiceGroup;
  services?: Service;
  service_fives: ServiceFive[];
}

interface ServiceFive {
  id: string;
  created_at: string;
  heading: string;
  des: string;
  service_card: string;
}

interface PageProps {
  serviceId?: string;
  groupId?: string;
}

const ServiceFive = ({ groupId, serviceId }: PageProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [serviceFiveGroups, setServiceFiveGroups] = useState<ServiceFiveGroup[]>([])
  const [filteredGroups, setFilteredGroups] = useState<ServiceFiveGroup[]>([])

  console.log("Received props in ServiceFive - groupId:", groupId, "serviceId:", serviceId);

  // ============ FETCH DATA ============
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

  const fetchServiceFiveGroups = useCallback(async () => {
    try {
      setLoading(true)
      
      // Start building the query
      let query = supabase
        .from('service_five_group')
        .select('*')
        .order('created_at', { ascending: false })

      // Apply filters based on props
      if (serviceId && groupId) {
        console.log("Filtering service_five_group by both serviceId and groupId:", { serviceId, groupId });
        query = query
          .eq('service_id', serviceId)
          .eq('service_group_id', groupId);
      } 
      else if (serviceId) {
        console.log("Filtering service_five_group by serviceId only:", serviceId);
        query = query.eq('service_id', serviceId);
      } 
      else if (groupId) {
        console.log("Filtering service_five_group by groupId only:", groupId);
        query = query.eq('service_group_id', groupId);
      }

      const { data: groups, error: groupsError } = await query

      if (groupsError) throw groupsError

      console.log("Fetched service_five_group records:", groups?.length || 0);

      if (!groups || groups.length === 0) {
        setServiceFiveGroups([])
        setFilteredGroups([])
        return
      }

      // Fetch related data in parallel for better performance
      const serviceGroupIds = [...new Set(groups.map(g => g.service_group_id))];
      const serviceIds = [...new Set(groups.map(g => g.service_id))];
      const groupIds = groups.map(g => g.id);

      const [
        { data: serviceGroupsData },
        { data: servicesData },
        { data: serviceFivesData }
      ] = await Promise.all([
        supabase.from('service_groups').select('*').in('id', serviceGroupIds),
        supabase.from('services').select('*').in('id', serviceIds),
        supabase.from('service_five').select('*').in('service_card', groupIds).order('created_at', { ascending: true })
      ]);

      // Create maps for efficient lookup
      const serviceGroupsMap = new Map(serviceGroupsData?.map(sg => [sg.id, sg]));
      const servicesMap = new Map(servicesData?.map(s => [s.id, s]));
      const serviceFivesMap = new Map<string, ServiceFive[]>();
      
      // Group service_fives by their service_card (foreign key to service_five_group.id)
      serviceFivesData?.forEach(five => {
        if (!serviceFivesMap.has(five.service_card)) {
          serviceFivesMap.set(five.service_card, []);
        }
        serviceFivesMap.get(five.service_card)!.push(five);
      });

      // Combine all data
      const groupsWithDetails = groups.map(group => ({
        ...group,
        service_groups: serviceGroupsMap.get(group.service_group_id),
        services: servicesMap.get(group.service_id),
        service_fives: serviceFivesMap.get(group.id) || []
      }));

      console.log("Processed service_five groups with details:", groupsWithDetails.length);
      setServiceFiveGroups(groupsWithDetails);
      setFilteredGroups(groupsWithDetails);
      
      setError(null)
    } catch (error) {
      console.error('Error fetching service five groups:', error)
      setError('Failed to load service five groups.')
    } finally {
      setLoading(false)
    }
  }, [groupId, serviceId]) // Add dependencies

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        await fetchServiceGroups()
        await fetchServices()
        await fetchServiceFiveGroups()
      } catch (error) {
        console.error('Error loading data:', error)
        setError('Failed to load data. Please check console for details.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [fetchServiceGroups, fetchServices, fetchServiceFiveGroups])
   
  console.log("serviceFiveGroups:", filteredGroups)

    return (
        <>
            {filteredGroups.length > 0 && (
                filteredGroups.map((group, i) => (
                    
    <section key={i} className='techcard '>
          <div className="container">
              <div className="row mb-4 mt-3">
          <div className="col-md-6">
            <h2>
              {group.heading}

            </h2>
          </div>
          <div className="col-md-6">
            <p>
                            {group.description}

            </p>
          </div>
              </div>
                            <div className="row">
                            {group.service_fives?.map((item: ServiceFive, itemIndex: number) => (
                                   
                  <div key={itemIndex} className="col-md-4 my-2">
                      
                  <div className="cards1">
                      <div className="flexsv">
                                                <span className='titlenum'>{`0${item.id}`}</span>
                                                
                                         
                                               
                                             
                                                
                        
                      <span className='titles'>{item.heading}</span>
                      </div>
                      <p className='des'>{item.des}</p>
                  </div>
                  </div>
                  
                               ))}
              </div>
              
    </div>
                </section>
                ))
      )}
                </>
  )
}

export default ServiceFive