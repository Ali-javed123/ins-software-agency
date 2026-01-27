"use client";

import React, { useMemo, useState, useRef,useCallback ,useEffect} from "react";
import Link from 'next/link'
import { supabase } from "@/lib/supabase-client"


const DELIMITER = '|||CHUNK|||';
const STORAGE_TYPE = "bucket";


interface AboutSection {
  id: string
  title: string
  heading: string
  para: string
  imgOne: string | null
  imgTwo: string | null
  
  coliconOne: string
  coliconTwo: string
  colHeadOne: string
  colHeadTwo: string
  colparaOne: string
  colparaTwo: string
 
  highlightTitle: string
  highlightDescription: string
  colbtn: string
  imgOneUrl?: string | null
  imgTwoUrl?: string | null
}
interface DatabaseAbout {
   id: string
  title: string
  heading: string
  para: string
  imgOne: string | null
  imgTwo: string | null
  
  coliconOne: string
  coliconTwo: string
  colHeadOne: string
  colHeadTwo: string
  colparaOne: string
  colparaTwo: string
 
  highlightTitle: string
  highlightDescription: string
  colbtn: string
  imgOneUrl?: string | null
  imgTwoUrl?: string | null
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
        para: dbSection.para || "",
        imgOne: null,
        imgTwo: null,
        coliconOne: dbSection.coliconOne || "",
        coliconTwo: dbSection.coliconTwo || "",
        colHeadOne: dbSection.colHeadOne || "",
        colHeadTwo: dbSection.colHeadTwo || "",
        colparaOne: dbSection.colparaOne || "",
        colparaTwo: dbSection.colparaTwo || "",
        highlightTitle: dbSection.highlightTitle || "",
        highlightDescription: dbSection.highlightDescription || "",
        colbtn: dbSection.colbtn || "More Details",
        imgOneUrl: dbSection.imgOne,
        imgTwoUrl: dbSection.imgTwo
      }
    } else {
      // For Base64 storage
      return {
        id: dbSection.id,
        title: dbSection.title || "",
        heading: dbSection.heading || "",
        para: dbSection.para || "",
        imgOne: reconstructFromChunks(dbSection.imgOne),
        imgTwo: reconstructFromChunks(dbSection.imgTwo),
        coliconOne: dbSection.coliconOne || "",
        coliconTwo: dbSection.coliconTwo || "",
        colHeadOne: dbSection.colHeadOne || "",
        colHeadTwo: dbSection.colHeadTwo || "",
        colparaOne: dbSection.colparaOne || "",
        colparaTwo: dbSection.colparaTwo || "",
        highlightTitle: dbSection.highlightTitle || "",
        highlightDescription: dbSection.highlightDescription || "",
        colbtn: dbSection.colbtn || "More Details"
      }
    }
  }

  

  const fetchUsers = useCallback(async () => {
      try {
        const { data, error } = await supabase
          .from("aboutSection")
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
      fetchUsers();
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
    return STORAGE_TYPE === "bucket" ? section.imgOneUrl : section.imgOne;
  } else {
    return STORAGE_TYPE === "bucket" ? section.imgTwoUrl : section.imgTwo;
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
{e.para ? e.para:"There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable."}

            </p>
          </div>
          <div className="about-two__ostech__item" style={{backgroundImage: 'url(/assets/images/about/about-bg-2-1.png)'}}>
            <div className="about-two__ostech__item__inner">
              <div className="about-two__ostech__item__icon">
                        <i className="icon-solution-1" />
                        
                        
              </div>
              <div className="about-two__ostech__item__content">
                        <h4 className="about-two__ostech__item__title"><Link href="/aboutus">
                     {e.highlightTitle ? e.highlightTitle:'Deliver Perfect Solution'}
                        
                        </Link></h4>
                        <p className="about-two__ostech__item__text">
                  {e.highlightDescription ? e.highlightDescription:'There are inmaniy variations passages of Lorem Ipsum available, but the majority'}
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
          __html: `<i class="${e.coliconOne || 'icon-nanotechnology-1'}"></i>`
        }}
        className="flex items-center justify-center w-full h-full"
      />
                </div>
                        <h4 className="about-two__feature__top__title">
                          
                     {e.colHeadOne ? e.colHeadOne:'Manage Tech <br />Services'}
                        
                        </h4>
              </div>
                      <p className="about-two__feature__item__text">
                     {e.colparaOne ? e.colparaOne:'There are many variations of passages of Lorem'}
                        
              </p>
            </div>
            <div className="about-two__feature__item">
              <div className="about-two__feature__top">
                <div className="about-two__feature__top__icon">
                          {/* <i className="icon-it-service-1" /> */}
                                                        <div 
        dangerouslySetInnerHTML={{
          __html: `<i class="${e.coliconTwo || 'icon-it-service-1'}"></i>`
        }}
        className="flex items-center justify-center w-full h-full"
      />
                </div>
                        <h4 className="about-two__feature__top__title">
                     {e.colHeadTwo ? e.colHeadTwo:'It Consulting <br />Solution'}
                        
                        </h4>
              </div>
                      <p className="about-two__feature__item__text">
                        
                     {e.colparaTwo ? e.colparaTwo:'There are many variations of passages of Lorem'}

              </p>
            </div>
          </div>
          <div className="about-two__btn">
                    <Link href="/aboutus" className="ostech-btn">
                {e.colbtn}
                    
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
