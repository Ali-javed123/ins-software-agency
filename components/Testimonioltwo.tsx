"use client";
import React, { useEffect, useState,useCallback } from 'react';
import dynamic from 'next/dynamic';
import { supabase } from "@/lib/supabase-client"

const DELIMITER = '|||CHUNK|||';
const STORAGE_TYPE = process.env.NEXT_PUBLIC_STORAGE_TYPE as 'bucket' | 'base64' || 'bucket';

import { FaStar } from "react-icons/fa";

// Database Types
interface DatabaseTestimonial {
  id: string;
  created_at: string;
  img: string | null;
  img_lable: string;
  img_paragraph: string;
  paragraph: string;
  testmonial_id: string;
}

interface DatabaseTestimonialGroup {
  id: string;
  created_at: string;
  title: string;
  heading: string;
}

interface Testimonial {
  id: string;
  created_at: string;
  img_lable: string;
  img_paragraph: string;
  paragraph: string;
  testmonial_id: string;
  profileImage: string | null; // Base64 के लिए
  profileImageUrl: string | null; // Bucket के लिए
}

interface TestimonialGroup {
  id: string;
  created_at: string;
  title: string;
  heading: string;
  testimonials?: Testimonial[];
}


// Dynamically import jQuery and OwlCarousel
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
  loading: () => <div className="text-center py-5">Loading slider...</div>,
});

// Dynamic import for jQuery
const loadJQuery = async () => {
  if (typeof window !== 'undefined') {
    // Import jQuery dynamically
    const jQuery = (await import('jquery')).default;
    window.$ = window.jQuery = jQuery;
  }
};

const Testimonialtwo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isJQueryLoaded, setIsJQueryLoaded] = useState(false);
const [testimonialGroups, setTestimonialGroups] = useState<TestimonialGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  


  // Initialize jQuery only once after component mounts
  useEffect(() => {
    // Set mounted state in the next tick to avoid cascading renders
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Load jQuery after component is mounted
  useEffect(() => {
    if (isMounted && !isJQueryLoaded) {
      const initializeJQuery = async () => {
        try {
          await loadJQuery();
          setIsJQueryLoaded(true);
        } catch (error) {
          console.error('Failed to load jQuery:', error);
        }
      };
      
      initializeJQuery();
    }
  }, [isMounted, isJQueryLoaded]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-5.jpg",
    },
    {
      id: 2,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Leslie Alexander",
      role: "Customer",
      image: "/assets/images/resources/testi-1-6.jpg",
    },
    {
      id: 3,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-1.jpg",
    },
    {
      id: 4,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-2.jpg",
    },
    {
      id: 5,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-3.jpg",
    },
  ];

  // Author images for the bottom section
  const authorImages = [
    "/assets/images/resources/testi-1-1.jpg",
    "/assets/images/resources/testi-1-2.jpg",
    "/assets/images/resources/testi-1-3.jpg",
    "/assets/images/resources/testi-1-4.jpg",
  ];

  // Owl Carousel options
  const carouselOptions = {
    items: 1,
    margin: 30,
    smartSpeed: 700,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  // Function to render stars
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <i key={index} className="icon-star"></i>
    ));
  };






    // Fetch Data - HomeSlide की तरह structured
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setFetchError(null);

      // Fetch Testimonial Groups
      const { data: testimonialGroupsData, error: testimonialGroupsError } = await supabase
        .from("testimonial_group")
        .select("*")
        .order("created_at", { ascending: false });

      if (testimonialGroupsError) throw testimonialGroupsError;

      // Fetch Testimonials
      const { data: testimonialsData, error: testimonialsError } = await supabase
        .from("testimonial")
        .select("*")
        .order("created_at", { ascending: true });

      if (testimonialsError) throw testimonialsError;

      // Process Testimonials
      const processedTestimonials: Testimonial[] = (testimonialsData || []).map(
        (dbTestimonial: DatabaseTestimonial) => convertToTestimonial(dbTestimonial)
      );

      // Process Testimonial Groups
      const processedTestimonialGroups: TestimonialGroup[] = (testimonialGroupsData || []).map(
        (group: DatabaseTestimonialGroup) => ({
          id: group.id,
          created_at: group.created_at,
          title: group.title,
          heading: group.heading,
          testimonials: processedTestimonials.filter(t => t.testmonial_id === group.id)
        })
      );

      setTestimonialGroups(processedTestimonialGroups);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchError(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
  if (!chunkedString) return null;
  
  if (!chunkedString.includes(DELIMITER)) {
    return chunkedString;
  }
  
  return chunkedString.split(DELIMITER).join('');
};


  // Convert Database Testimonial to Component Testimonial - HomeSlide की तरह
  const convertToTestimonial = (dbTestimonial: DatabaseTestimonial): Testimonial => {
    if (STORAGE_TYPE === "bucket") {
      // For bucket storage
      return {
        id: dbTestimonial.id,
        created_at: dbTestimonial.created_at,
        img_lable: dbTestimonial.img_lable,
        img_paragraph: dbTestimonial.img_paragraph,
        paragraph: dbTestimonial.paragraph,
        testmonial_id: dbTestimonial.testmonial_id,
        profileImage: null,
        profileImageUrl: dbTestimonial.img || null
      };
    } else {
      // For Base64 storage
      return {
        id: dbTestimonial.id,
        created_at: dbTestimonial.created_at,
        img_lable: dbTestimonial.img_lable,
        img_paragraph: dbTestimonial.img_paragraph,
        paragraph: dbTestimonial.paragraph,
        testmonial_id: dbTestimonial.testmonial_id,
        profileImage: reconstructFromChunks(dbTestimonial.img),
        profileImageUrl: null
      };
    }
  };
 const getImageUrl = (testimonial: Testimonial): string | null => {
    return STORAGE_TYPE === "bucket" ? testimonial.profileImageUrl : testimonial.profileImage;
  };

  console.log("testimonialGroups:",testimonialGroups)
  return (
    <section className="testimonial-two">
      {testimonialGroups.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="/assets/images/shapes/sec-title-s-1.png"
                    alt="Testimonial"
                    className="sec-title__img"
                  />
                  <h6 className="sec-title__tagline">Testimonial</h6>
                </div>
                <h3 className="sec-title__title">What Customers are <br /> Saying?</h3>
              </div>
            </div>
          </div>

          {/* Owl Carousel Slider */}
          <div className="testimonial-two__carousel ostech-owl__carousel owl-theme">
            {isMounted && isJQueryLoaded ? (
              <OwlCarousel className="owl-theme" {...carouselOptions}>
                {testimonials.map((testimonial) => (
                  <div className="item" key={testimonial.id}>
                    <div className="testimonial-two__item">
                      <div className="testimonial-two__item__star">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="testimonial-two__item__text">{testimonial.text}</p>
                      <div className="testimonial-two__item__author">
                        <div className="testimonial-two__item__author__thumb">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                          //   onError={(e) => {
                          //     e.target.src = "https://via.placeholder.com/60x60?text=User";
                          //   }}
                          />
                        </div>
                        <div className="testimonial-two__item__author__content">
                          <h5 className="testimonial-two__item__author__title">{testimonial.author}</h5>
                          <span className="testimonial-two__item__author__deg">{testimonial.role}</span>
                        </div>
                      </div>
                      <div className="testimonial-two__item__quite">
                        <i className="icon-quite"></i>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                        <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              <div className="carousel-loading">
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading carousel...</span>
                  </div>
                  <p className="mt-3">Loading testimonials...</p>
                </div>
              </div>
            )}
          </div>

          {/* Author Images Section */}
          <div className="testimonial-two__author">
            {authorImages.map((image, index) => (
              <div
                key={index}
                className={`testimonial-two__author__image testimonial-two__author__image--${['one', 'two', 'three', 'fore'][index]}`}
              >
                <img
                  src={image}
                  alt={`Customer ${index + 1}`}
                // onError={(e) => {
                //   e.target.src = "https://via.placeholder.com/60x60?text=User";
                // }}
                />
              </div>
            ))}
          </div>
        </div>
      )
        : (
testimonialGroups.map((testimonialGroup: TestimonialGroup, k: number) => (
          
              <div key={k} className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src="/assets/images/shapes/sec-title-s-1.png"
                          alt="Testimonial"
                          className="sec-title__img"
                        />
                        <h6 className="sec-title__tagline">{testimonialGroup.title}</h6>
                      </div>
                      <h3 className="sec-title__title">{testimonialGroup.heading}</h3>
                    </div>
                  </div>
                </div>

                {/* Owl Carousel Slider */}
                <div className="testimonial-two__carousel ostech-owl__carousel owl-theme">
                  {isMounted && isJQueryLoaded ? (
                    <OwlCarousel className="owl-theme" {...carouselOptions}>
                      {testimonialGroup?.testimonials?.map((testimonial) => (
                        <div className="item" key={testimonial.id}>
                          <div className="testimonial-two__item">
                            <div className="testimonial-two__item__star">
                              {[1,2,3,4,5].map((star,index)=>(

                                <i key={index} className="icon-star"></i>
                              ))

                              }

                            </div>
                            <p className="testimonial-two__item__text">{testimonial.paragraph}</p>
                            <div className="testimonial-two__item__author">
                              <div className="testimonial-two__item__author__thumb">
                                <img
                                  src={getImageUrl(testimonial)!}
                                  alt={testimonial.img_lable}
                                //   onError={(e) => {
                                //     e.target.src = "https://via.placeholder.com/60x60?text=User";
                                //   }}
                                />
                              </div>
                              <div className="testimonial-two__item__author__content">
                                <h5 className="testimonial-two__item__author__title">{testimonial.img_lable}</h5>
                                <span className="testimonial-two__item__author__deg">{testimonial.img_paragraph}</span>
                              </div>
                            </div>
                            <div className="testimonial-two__item__quite">
                              <i className="icon-quite"></i>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                              <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  ) : (
                    <div className="carousel-loading">
                      <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading carousel...</span>
                        </div>
                        <p className="mt-3">Loading testimonials...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Author Images Section */}
                <div className="testimonial-two__author">
                  {authorImages.map((image, index) => (
                    <div
                      key={index}
                      className={`testimonial-two__author__image testimonial-two__author__image--${['one', 'two', 'three', 'fore'][index]}`}
                    >
                      <img
                        src={image}
                        alt={`Customer ${index + 1}`}
                      // onError={(e) => {
                      //   e.target.src = "https://via.placeholder.com/60x60?text=User";
                      // }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              ))



        )



      
      }
    </section>
  );
};

export default Testimonialtwo;