"use client";
import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

import Image, { StaticImageData } from 'next/image'
import img1 from "@/public/assets/images/backgrounds/slider-1-1.jpg";

import { supabase } from "@/lib/supabase-client"

const STORAGE_TYPE = "bucket";
const DELIMITER = '|||CHUNK|||';
const TableName="why_choose_us"

interface Feature {
  icon: string
  title: string
  paragraph: string
}


interface WhyChooseUs {
  id: string
  title: string
  paragraph: string
  sub_heading: string // NEW FIELD ADDED
  images: string | null
  heading: string
  banner_buttun: string
  features: Feature[]
  imageUrl: string | null
}

const WhyChooseTwo = () => {
  const [sections, setSections] = useState<WhyChooseUs[]>([])

  const [loading, setLoading] = useState<boolean>(true)


const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
    if (!chunkedString) return null;

    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString;
    }

    return chunkedString.split(DELIMITER).join('');
  };

const convertToWhyChooseUs = (dbSection: WhyChooseUs) => {
    if (STORAGE_TYPE === "bucket") {
      return {
        id: dbSection.id,
        title: dbSection.title || "",
        paragraph: dbSection.paragraph || "",
        sub_heading: dbSection.sub_heading || "", // NEW FIELD ADDED
        images: null,
        heading: dbSection.heading || "",
        banner_buttun: dbSection.banner_buttun || "",
        features: dbSection.features || [],
        imageUrl: dbSection.images
      }
    } else {
      return {
        id: dbSection.id,
        title: dbSection.title || "",
        paragraph: dbSection.paragraph || "",
        sub_heading: dbSection.sub_heading || "", // NEW FIELD ADDED
        images: reconstructFromChunks(dbSection.images),
        heading: dbSection.heading || "",
        banner_buttun: dbSection.banner_buttun || "",
        features: dbSection.features || [],
        imageUrl: null
      }
    }
  }



 const fetchUsers = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("why_choose_us")
        .select("*")
        .order("created_at", { ascending: true });
      console.log("Fetched users:", data);

      if (error) {
        console.error("Error fetching users:", error);
        return;
      }

      // Safely convert database users to component users
      const processedUsers = (data || []).map((dbUser:WhyChooseUs) => convertToWhyChooseUs(dbUser as WhyChooseUs));

      setSections(processedUsers);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

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
        table: 'why_choose_us',
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


const getSafeImageSrc = (
  dynamicSrc: string | null, 
  fallbackSrc: string | StaticImageData | undefined
): string => {
  // Use dynamic source if available
  if (dynamicSrc) return dynamicSrc;
  
  // Handle fallback source
  if (!fallbackSrc) return `${img1}`;
  
  if (typeof fallbackSrc === 'string') {
    return fallbackSrc;
  }
  
  // Handle StaticImageData
  if (fallbackSrc && typeof fallbackSrc === 'object' && 'src' in fallbackSrc) {
    return fallbackSrc.src;
  }
  
  return `${img1}`;
};
    const getImageUrl = (section: WhyChooseUs): string | null => {
    return STORAGE_TYPE === "bucket" ? section.imageUrl : section.images
  }

    const getSafeImageUrl = (
    dynamicSrc: string | null, 
    fallbackSrc: string
  ): string => {
    if (dynamicSrc && dynamicSrc.trim() !== "") {
      return dynamicSrc
    }
    
    return fallbackSrc
  }


console.log("sections",sections)
  return (
    <>
      {/* why-choose-two section Start */}
      {sections?.map((e, i) => (
     
<section key={i}  className="why-choose-two">
  <div className="why-choose-two__bg jarallax" data-jarallax data-speed="0.3" data-imgposition="50% -100%" style={{backgroundImage: `url({assets/images/backgrounds/why-choose-bg-1-1.png})`}} />
  <div className="container">
    {/* <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="300ms">
          <div className="why-choose-two__funfact__item__icon">
            <i className="icon-expertise-1" />
          </div>
          <h2 className="why-choose-two__funfact__item__count">
            <span className="count-text" data-stop={120} data-speed={1500} >120</span>
            <span>K</span>
          </h2>
          <p className="why-choose-two__funfact__item__text">Satisfied <br /> Clients</p>
          <div className="why-choose-two__funfact__item__shape">
            <img src="assets/images/shapes/funfact-1-1.png" alt="choose" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="600ms">
          <div className="why-choose-two__funfact__item__icon">
            <i className="icon-verified-2" />
          </div>
          <h2 className="why-choose-two__funfact__item__count">
            <span className="count-text" data-stop={30} data-speed={1500} >1500</span>
            <span>K</span>
          </h2>
          <p className="why-choose-two__funfact__item__text">Projects <br /> completed</p>
          <div className="why-choose-two__funfact__item__shape">
            <img src="assets/images/shapes/funfact-1-1.png" alt="choose" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="900ms">
          <div className="why-choose-two__funfact__item__icon">
            <i className="icon-rating-2" />
          </div>
          <h2 className="why-choose-two__funfact__item__count">
            <span className="count-text" data-stop={500} data-speed={1500} >1500</span>
            <span>K</span>
          </h2>
          <p className="why-choose-two__funfact__item__text">Five Star <br /> Review</p>
          <div className="why-choose-two__funfact__item__shape">
            <img src="assets/images/shapes/funfact-1-1.png" alt="choose" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="1100ms">
          <div className="why-choose-two__funfact__item__icon">
            <i className="icon-team-2" />
          </div>
          <h2 className="why-choose-two__funfact__item__count">
            <span className="count-text" data-stop={90} data-speed={1500} >1500</span>
            <span>+</span>
          </h2>
          <p className="why-choose-two__funfact__item__text">Pro Team<br /> Member</p>
          <div className="why-choose-two__funfact__item__shape">
            <img src="assets/images/shapes/funfact-1-1.png" alt="choose" />
          </div>
        </div>
      </div>
    </div> */}
    <div className="why-choose-two__inner">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="why-choose-two__top__left">
            <div className="sec-title sec-title--two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                {/* <img src="assets/images/shapes/sec-title-s-1.png" alt="Why Choose Us" className="sec-title__img" /> */}
                <h6 className="sec-title__tagline">{e?.title ? e?.title:"Why Choose Us"}</h6>
              </div>
                      <h3 className="sec-title__title">
                        {e?.heading? e?.heading:"Why Our Technology Solutions Company Stands Out?"}
                        </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="why-choose-two__top__right wow fadeInUp" data-wow-delay="900ms">
                    <p className="about-two__top__text"> 
                       {e?.paragraph? e?.paragraph:"There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered choose eration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable."}

            </p>
          </div>
        </div>
              </div>
              
      <div className="row">
                <div className="col-lg-6">
                  {e.features.map((item, i) => (
                    
          <div key={i} className="why-choose-two__inner__left ">
            <div className="why-choose-two__inner__item wow fadeInUp" data-wow-delay="300ms ">
              <div className="why-choose-two__inner__item__content">
                <div className="why-choose-two__inner__item__icon">
                  <i className={item.icon} />
                          </div>
                          <div className='my-2'>
                {/* <h2 className="fw-bold why-choose-two__inner__item__text">{item.title}</h2>
                             */}
                <h4 className="why-choose-two__inner__item__text">{item.paragraph}</h4>
                          </div>
              </div>
             
            </div>

          </div>
                  ))}
        </div>
        <div className="col-lg-6">
          <div className="why-choose-two__inner__right wow fadeInRight" data-wow-delay="900ms">
            <div className="why-choose-two__inner__thumb ostech-stretch-element-inside-column">
              <img src={getSafeImageUrl(
                              getImageUrl(e), 
                              "/assets/images/placeholder.jpg"
                            )} alt="ostech image"  height={'600px'}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="why-choose-two__cta wow fadeInUp" data-wow-delay="900ms">
            <div className="why-choose-two__cta__bg" style={{backgroundImage: `url( assets/images/shapes/cta-2-1.png)`}} />
            <h3 className="why-choose-two__cta__title">{e.heading}</h3>
            <div className="why-choose-two__cta__link">
                      <a href="#" className="why-choose-two__cta__link__btn ostech-two-btn ">{e.banner_buttun}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   ))}     
{/* why-choose-two section End */}

    </>
  )
}

export default WhyChooseTwo
