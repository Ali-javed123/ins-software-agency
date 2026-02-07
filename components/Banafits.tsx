
"use client"
import React, { useState, useCallback, useEffect } from 'react'

import { supabase } from "@/lib/supabase-client"

interface FeatureList {
  title: string
  icon: string
}
interface DatabaseFeature {
  title: string
  para: string
  image: string | null
  icon: string
}
interface DatabaseOurBenefits {
  id: string
  title: string
  heading: string
  sub_heading: string  // New field
  btn_text: string     // New field
  image: string | null
  features: DatabaseFeature[] | null
  feature_list: FeatureList[] | null
  created_at?: string
}


interface Feature {
  title: string
  para: string
  image: File | null | string
  icon: string
}

interface OurBenefits {
  id: string
  title: string
  heading: string
  image: string | null 
  features: Feature[]
  sub_heading: string
  // New field
  btn_text: string 
  feature_list: FeatureList[]
  mainImageUrl: string | null
}
const MAIN_BUCKET_NAME = process.env.NEXT_PUBLIC_OUR_BENEFITS_BUCKET || "ourBenefits"
const FEATURE_BUCKET_NAME = process.env.NEXT_PUBLIC_OUR_BENEFITS_FEATURE_BUCKET || "banefitlist"
const STORAGE_TYPE: 'bucket' | 'base64' = "bucket"
const CHUNK_SIZE = 60000
const DELIMITER = '|||CHUNK|||'
const MAX_IMAGE_SIZE = 5 * 1024 * 1024

const Banafits = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [benefits, setBenefits] = useState<OurBenefits[]>([])

  const [fetchError, setFetchError] = useState<string | null>(null)

  const fetchBenefits = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      setFetchError(null)
      
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }

      const { data, error } = await supabase
        .from("our_benefits")
        .select("*")
        .order("created_at", { ascending: true })

      if (error) {
        console.error("Error fetching benefits:", error)
        setFetchError(error.message || 'Failed to fetch data')
        return
      }

      const processedBenefits: OurBenefits[] = (data || []).map(convertToOurBenefits)
      setBenefits(processedBenefits)
    } catch (error) {
      console.error("Unexpected error:", error)
      setFetchError(error instanceof Error ? error.message : 'Unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBenefits()
  }, [fetchBenefits])
    const reconstructFromChunks = (chunkedString: string | null): string | null => {
    if (!chunkedString) return null
    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString
    }
    return chunkedString.split(DELIMITER).join('')
  }

const convertToOurBenefits = (dbSection: DatabaseOurBenefits): OurBenefits => {
    const processedFeatures: Feature[] = (dbSection.features || []).map((feature: DatabaseFeature): Feature => {
      let imageValue: File | null | string = null;
      
      if (STORAGE_TYPE === "bucket") {
        imageValue = typeof feature.image === 'string' ? feature.image : null;
      } else {
        imageValue = feature.image ? reconstructFromChunks(feature.image) : null;
      }
      
      return {
        title: feature.title,
        para: feature.para,
        icon: feature.icon,
        image: imageValue
      };
    });

    return {
      id: dbSection.id,
      title: dbSection.title || "",
      heading: dbSection.heading || "",
      sub_heading: dbSection.sub_heading || "",  // New field
      btn_text: dbSection.btn_text || "",       // New field
      image: null,
      features: processedFeatures,
      feature_list: dbSection.feature_list || [],
      mainImageUrl: STORAGE_TYPE === "bucket" ? dbSection.image : null
    };
  }

    const getMainImageUrl = (benefit: OurBenefits): string | null => {
    return STORAGE_TYPE === "bucket" ? benefit.mainImageUrl : benefit.image
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

console.log("benefits",benefits)
  return (
    <>
      {/* Benefit section Start */}
      {benefits.map((benefit, index) => (
        <section key={index} className="benefit-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="benefit-one__left">
                  <div className="benefit-one__thumb  wow fadeInLeft" data-wow-delay="700ms">
                                  <div className="image-wrapper">

                    <img src={getSafeImageUrl(
                              getMainImageUrl(benefit), 
                              "/assets/images/placeholder.jpg"
                      )} alt="ostech image"
                                        className="responsive-img"

                      />
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="benefit-one__right">
                  <div className="benefit-one__top">
                    <div className="sec-title sec-title--two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                      <div className="d-flex align-items-center justify-content-start">
                        {/* <img src="assets/images/shapes/sec-title-s-1.png" alt="Our Benefits" className="sec-title__img" /> */}
                        <h6 className="sec-title__tagline">{benefit?.title}</h6>
                      </div>
                      <h3 className="sec-title__title">{benefit?.heading}</h3>
                    </div>
                  </div>
                  <div className="benefit-one__feature">
                    {benefit.features.map((item, i) => (
                    
                    <div key={i} className="benefit-one__feature__item  wow fadeInUp" data-wow-delay="500ms">
                      <div className="benefit-one__feature__item__bg" style={{ backgroundImage: 'url(assets/images/resources/benefit-s-1-1.png)' }} />
                      <div className=" benefit-one__feature__item__content">
                        <div className="benefit-one__feature__icon">
                          <i className={item.icon? item.icon : "icon-solution-1"} />
                        </div>
                        <h4 className="benefit-one__feature__item__title"><a href="about.html">{item.title}</a></h4>
                        <p className="benefit-one__feature__item__text">
                          {item.para}</p>
                      </div>
                    </div>
                  ))
                  
                  }
                    
                  </div>
                  <ul className="list-unstyled benefit-one__list  wow fadeInUp" data-wow-delay="500ms">
                    {benefit.feature_list.map((list, k) => (
                      
                      <li key={k} className="benefit-one__list__item"><i className={list.icon?list.icon:"fas fa-check-circle"} /> {list.title}</li>
                    ))}

                  </ul>
                </div>
                <div className="benefit-one__bottom  wow fadeInUp" data-wow-delay="500ms">
                  <div className="benefit-one__bottom__content">
                    <h3 className="benefit-one__bottom__content__text">{benefit.sub_heading}</h3>
                    <a href="#" className="ostech-btn">{benefit.btn_text}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-one__shape">
            <img loading='lazy'
              decoding="async" src="/assets/images/shapes/benefit-shape-1-1.png" alt="benefit shape" />
          </div>
        </section>
))}
{/* Benefit section End */}

    </>
  )
}

export default Banafits
