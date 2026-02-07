"use client";

import React, { useMemo, useState, useRef,useCallback ,useEffect} from "react";
import Link from 'next/link'
import { supabase } from "@/lib/supabase-client"


const DELIMITER = '|||CHUNK|||';
const STORAGE_TYPE = "bucket";
const TableName="about_section"


interface AboutSection {
  id: string
  title: string
  heading: string
  paragraph: string
  img_one: string | null
  img_two: string | null
  
  col_icon_one: string
  col_icon_two: string
  col_head_one: string
  col_head_two: string
  col_paragraph_one: string
  col_paragraph_two: string
 
  highlight_title: string
  highlight_description: string
  col_btn: string
  img_oneUrl?: string | null
  img_twoUrl?: string | null
}
interface DatabaseAbout {
  id: string
  title: string
  heading: string
  paragraph: string
  img_one: string | null
  img_two: string | null
  
  col_icon_one: string
  col_icon_two: string
  col_head_one: string
  col_head_two: string
  col_paragraph_one: string
  col_paragraph_two: string
  col_btn: string
  
  highlight_title: string
  highlight_description: string
  created_at?: string
}

const AboutTwo = () => {
  const [loading, setLoading] = useState(true);
const [SlideData, setUsers] = useState<DatabaseAbout[]>([]);


const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
    if (!chunkedString) return null;

    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString;
    }

    return chunkedString.split(DELIMITER).join('');
  };

const convertToUser = (dbSection: DatabaseAbout): AboutSection => {
     if (STORAGE_TYPE === "bucket") {
      return {
        id: dbSection.id,
        title: dbSection.title || "",
        heading: dbSection.heading || "",
        paragraph: dbSection.paragraph || "",
        img_one: null,
        img_two: null,
        col_icon_one: dbSection.col_icon_one || "",
        col_icon_two: dbSection.col_icon_two || "",
        col_head_one: dbSection.col_head_one || "",
        col_head_two: dbSection.col_head_two || "",
        col_paragraph_one: dbSection.col_paragraph_one || "",
        col_paragraph_two: dbSection.col_paragraph_two || "",
        highlight_title: dbSection.highlight_title || "",
        highlight_description: dbSection.highlight_description || "",
        col_btn: dbSection.col_btn || "More Details",
        img_oneUrl: dbSection.img_one,
        img_twoUrl: dbSection.img_two
      }
    } else {
      // For Base64 storage
      return {
        id: dbSection.id,
        title: dbSection.title || "",
        heading: dbSection.heading || "",
        paragraph: dbSection.paragraph || "",
        img_one: reconstructFromChunks(dbSection.img_one),
        img_two: reconstructFromChunks(dbSection.img_two),
        col_icon_one: dbSection.col_icon_one || "",
        col_icon_two: dbSection.col_icon_two || "",
        col_head_one: dbSection.col_head_one || "",
        col_head_two: dbSection.col_head_two || "",
        col_paragraph_one: dbSection.col_paragraph_one || "",
        col_paragraph_two: dbSection.col_paragraph_two || "",
        highlight_title: dbSection.highlight_title || "",
        highlight_description: dbSection.highlight_description || "",
        col_btn: dbSection.col_btn || "More Details"
      }
    }
  }

  

  const fetchUsers = useCallback(async () => {
      try {
        const { data, error } = await supabase
          .from(`${TableName}`)
          .select("*")
          .order("created_at", { ascending: true });
        console.log("Fetched users:", data);
  
        if (error) {
          console.error("Error fetching users:", error);
          return;
        }
  
        // Safely convert database users to component users
        const processedUsers = (data || []).map((dbUser) => convertToUser(dbUser as DatabaseAbout));
  
        setUsers(processedUsers);
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    }, []);
  console.log("SlideData:",SlideData)

  
  useEffect(() => {
    // Initial fetch
    fetchUsers();
  
    // Setup realtime subscription
    const channel = supabase
      .channel('why-choose-us-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen to all events: INSERT, UPDATE, DELETE
          schema: 'public',
          table: `${TableName}`,
        },
        (payload) => {
          console.log('Change received!', payload);
          
          // Refresh data when any change occurs
          fetchUsers();
          
          // OR handle updates more granularly:
          // handleRealtimeUpdate(payload);
        }
      )
      .subscribe();
  
    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchUsers]);
  


  const getSafeImageUrl = (
  dynamicSrc: string | null, 
  fallbackSrc: string
): string => {
  // Use dynamic source if available and valid
  if (dynamicSrc && dynamicSrc.trim() !== "") {
    return dynamicSrc;
  }
  
  // Return fallback
  return fallbackSrc || "/assets/images/about/about-1-1.png";
};


  // Get image URL helper
   const getImageUrl = (section: AboutSection, imageNumber: 1 | 2): string | null => {
  if (imageNumber === 1) {
    return STORAGE_TYPE === "bucket" ? section.img_oneUrl : section.img_one;
  } else {
    return STORAGE_TYPE === "bucket" ? section.img_twoUrl : section.img_two;
  }
};


  
  return (
    <>
{/* About section Start */}
<section className="about-two">
  <div className="container">
          {SlideData.map((e,i) => (

    <div key={i} className="row ">
      <div className="col-lg-6">
        <div className="about-two__left wow fadeInLeft" data-wow-delay="300ms">
          <div className="about-two__thumb">
            <div className="about-two__thumb__item about-two__thumb__item--one">
              <img loading='lazy'
              decoding="async" src={getSafeImageUrl(
            getImageUrl(e, 1), 
            "/assets/images/about/about-2-1.png"
          )} alt="ostech image" />
            </div>
            <div className="about-two__thumb__item about-two__thumb__item--two">
              <img loading='lazy'
              decoding="async" src={getSafeImageUrl(
            getImageUrl(e, 2), 
            "/assets/images/about/about-2-1.png"
          )} alt="ostech image" />
            </div>
            <div className="about-two__thumb__award">
                      <i className="icon-award" />
                    
            </div>
            <div className="about-two__thumb__icon">
              <div className="about-two__thumb__icon__box">
                <img loading='lazy'
              decoding="async" src="/assets/images/tech.png" width={92} alt="ostech logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
        <div className="about-two__right">
          <div className="about-two__top">
            <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                {/* <img loading='lazy'
              decoding="async" src="/assets/images/shapes/sec-title-s-1.png" alt="About Us" className="sec-title__img" /> */}
                <h6 className="sec-title__tagline">
                {e.title ? e.title:"About Us"}

                </h6>
              </div>
              <h3 className="sec-title__title">
                
                {e.heading ? e.heading:"Provide the Best Easy Solution for Your IT Problem"}
                
                </h3>
            </div>
            <p className="about-two__top__text">
{e.paragraph ? e.paragraph:"There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable."}

            </p>
          </div>
          <div className="about-two__ostech__item" style={{backgroundImage: 'url(/assets/images/about/about-bg-2-1.png)'}}>
            <div className="about-two__ostech__item__inner">
              <div className="about-two__ostech__item__icon">
                        <i className="icon-solution-1" />
                        
                        
              </div>
              <div className="about-two__ostech__item__content">
                        <h4 className="about-two__ostech__item__title"><Link href="/aboutus">
                     {e.highlight_title ? e.highlight_title:'Deliver Perfect Solution'}
                        
                        </Link></h4>
                        <p className="about-two__ostech__item__text">
                  {e.highlight_description ? e.highlight_description:'There are inmaniy variations passages of Lorem Ipsum available, but the majority'}
                        </p>
              </div>
            </div>
          </div>
          <div className="about-two__feature">
            <div className="about-two__feature__item">
              <div className="about-two__feature__top">
                <div className="about-two__feature__top__icon">
                          {/* <i className="icon-nanotechnology-1" /> */}
                                           <div 
        dangerouslySetInnerHTML={{
          __html: `<i class="${e.col_icon_one || 'icon-nanotechnology-1'}"></i>`
        }}
        className="flex items-center justify-center w-full h-full"
      />
                </div>
                        <h4 className="about-two__feature__top__title">
                          
                     {e.col_head_one ? e.col_head_one:'Manage Tech <br />Services'}
                        
                        </h4>
              </div>
                      <p className="about-two__feature__item__text">
                     {e.col_paragraph_one ? e.col_paragraph_one:'There are many variations of passages of Lorem'}
                        
              </p>
            </div>
            <div className="about-two__feature__item">
              <div className="about-two__feature__top">
                <div className="about-two__feature__top__icon">
                          {/* <i className="icon-it-service-1" /> */}
                                                        <div 
        dangerouslySetInnerHTML={{
          __html: `<i class="${e.col_icon_two || 'icon-it-service-1'}"></i>`
        }}
        className="flex items-center justify-center w-full h-full"
      />
                </div>
                        <h4 className="about-two__feature__top__title">
                     {e.col_paragraph_two ? e.col_paragraph_two:'It Consulting <br />Solution'}
                        
                        </h4>
              </div>
                      <p className="about-two__feature__item__text">
                        
                     {e.col_paragraph_two ? e.col_paragraph_two:'There are many variations of passages of Lorem'}

              </p>
            </div>
          </div>
          <div className="about-two__btn">
                    <Link href="/aboutus" className="ostech-btn">
                {e.col_btn}
                    
                    </Link>
          </div>
        </div>
      </div>
            </div>
            ))}
  </div>
</section>
{/* About section End */}
 
    </>
  )
}

export default AboutTwo
