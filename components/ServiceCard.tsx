// import React from 'react'

// const ServiceCard = () => {
//   return (
//     <>
// <section className="service-page service-page--page">
//   <div className="container">
//     <div className="row gutter-y-30">
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-d-development.html">Product <br /> Development</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-software-1" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-1.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-d-design.html">UI/UX <br /> Designing</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-layer-1" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-2.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-d-marketing.html">Digital <br /> Marketing</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-digital-marketing-1" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-3.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-d-analysis.html">Data <br /> Analysis</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-analysis-1" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-4.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-d-security.html">Cyber <br /> Security</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-cyber-security" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-5.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-4">
//         <div className="service-card  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
//           <div className="service-card__inner">
//             <div className="service-card__content">
//               <h4 className="service-card__title"><a href="service-experience.html">Digital <br /> Experience</a></h4>
//               <div className="service-card__icon">
//                 <i className="icon-cloud-computing" />
//               </div>
//             </div>
//             <div className="service-card__thumb">
//               <img src="/assets/images/service/service-1-6.png" alt="ostech image" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
 
//     </>
//   )
// }

// export default ServiceCard



// "use client";

// import dynamic from "next/dynamic";
// import Link from "next/link";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });
// export const Services = [
//   {
//     id: 1,
//     title: "Core Services",
//     data: [
//       {
//         id: 1,
//         slug: "web-and-app-development",
//         title: "Web and App Development",
//         icon: "icon-software-1",
//         image: "/assets/images/service/service-4-4.png",
//       },
//       {
//         id: 2,
//         slug: "ui-ux-designing",
//         title: "UI/UX Designing",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-1-2.png",
//       },
//       {
//         id: 3,
//         slug: "digital-marketing",
//         title: "Digital Marketing",
//         icon: "icon-digital-marketing-1",
//         image: "/assets/images/service/service-1-2.png",
//       },
//       {
//         id: 4,
//         slug: "data-analysis",
//         title: "Data Analysis",
//         icon: "icon-analysis-1",
//         image: "/assets/images/service/service-1-4.png",
//       },
//       {
//         id: 5,
//         slug: "web-development",
//         title: "Web Development",
//         icon: "icon-cyber-security",
//         image: "/assets/images/service/service-3-2.png",
//       },
//       {
//         id: 6,
//         slug: "software-development",
//         title: "Software Development",
//         icon: "icon-cloud-computing",
//         image: "/assets/images/service/service-3-2.png",
//       },
//       {
//         id: 7,
//         slug: "it-staff-augmentation",
//         title: "IT Staff Augmentation",
//         icon: "icon-cloud-computing",
//         image: "/assets/images/service/service-3-2.png",
//       },
//     ],
//   },

//   {
//     id: 2,
//     title: "Expertise Solutions",
//     data: [
//       {
//         id: 1,
//         slug: "fintech-solution",
//         title: "Fintech Solution",
//         icon: "icon-software-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 2,
//         slug: "ecommerce-solution",
//         title: "Ecommerce Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 3,
//         slug: "erp-solution",
//         title: "ERP Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 4,
//         slug: "healthcare-solution",
//         title: "Healthcare Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 5,
//         slug: "education-solution",
//         title: "Education Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 6,
//         slug: "on-demand-solution",
//         title: "On-Demand Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 7,
//         slug: "saas-solution",
//         title: "SAAS Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 8,
//         slug: "automation-solution",
//         title: "Automation Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//       {
//         id: 9,
//         slug: "real-estate-solution",
//         title: "Real Estate Solution",
//         icon: "icon-layer-1",
//         image: "/assets/images/service/service-3-3.png",
//       },
//     ],
//   },
// ];




// const services = [
//   {
//     id: 1,
//     title: "Web and App <br /> Development",
//     icon: "icon-software-1",
//     image: "/assets/images/service/service-4-4.png",
//   },
//   {
//     id: 2,
//     title: "UI/UX <br /> Designing",
//     icon: "icon-layer-1",
//     image: "/assets/images/service/service-1-2.png",
//   },
//   {
//     id: 3,
//     title: "Digital <br /> Marketing",
//     icon: "icon-digital-marketing-1",
//     image: "/assets/images/service/service-s-1-1.png",
//   },
//   {
//     id: 4,
//     title: "Data <br /> Analysis",
//     icon: "icon-analysis-1",
//     image: "/assets/images/service/service-s-1-1.png",
//   },
//   {
//     id: 5,
//     title: "Web <br /> Development",
//     icon: "icon-cyber-security",
//     image: "/assets/images/service/service-4-4.png",
//   },
//   {
//     id: 6,
//     title: "Software <br /> Development",
//     icon: "icon-cloud-computing",
//     image: "/assets/images/service/service-4-4.png",
//   },
//    {
//     id: 7,
//     title: "IT  Staff <br /> Augmentation",
//     icon: "icon-cloud-computing",
//     image: "/assets/images/service/service-2-1.png",
//   },
// ];

// export default function ServiceSlider() {
  
//   return (
//     <section className="service-three">
//       <div className="service-three__bg" style={{backgroundImage: `url(assets/images/shapes/service-shape-2-1.png)`}}></div>
//       <div className="container">
//         {Services.map((e ,i) => (
//          <div key={i}>
//             <div className="text-start section-headings my-6">
// <h2>
//  {e.title}
//   <span>{e.title}</span>
// </h2>

//             </div>
//         <OwlCarousel
//           loop
//           margin={30}
//           // autoplay
//           // autoplayTimeout={2500}
//           // smartSpeed={800}
//           dots
//           nav
//           navText={[
//             `<span class="owl-arrows left">‹</span>`,
//             `<span class="owl-arrows right">›</span>`,
//           ]}
//           responsive={{
//             0: { items: 1 },
//             576: { items: 1 },
//             768: { items: 2 },
//             992: { items: 3 },
//           }}
//         >
//               {e.data.map((item) => (
//                 <div key={item.id}>
                  
//      <Link href={`/services/${item.slug}`}>
//      <div className="service-three__item" >
//   <div className="service-three__item__inner">
//     <div className="service-three__item__icon">
//       <div className="service-three__item__icon__inner">
//         <i className="icon-software-1" />
//       </div>
//     </div>
//     <div className="service-three__item__thumb">
//       <img src={item.image} alt="ostech image" height={"300px"}/>
//     </div>
//                       <div className="service-three__item__content">
                        
//       <h4 className="service-three__item__title">{item.title}</h4>
//       <span className="service-three__item__link">
//         <span className="service-three__item__link__icon" />
//       </span>
//     </div>
//   </div>
// </div>
//                   </Link>
//        </div>

//                  ))}
//         </OwlCarousel>
//          </div>
//        ))}
//       </div>
//     </section>
//   );
// }







// "use client";

// import React, { useRef, useState, useCallback } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import './HomeService.css';


// export interface ServiceItem {
//   id: number;
//   slug: string;
//   title: string;
//   icon: string;
//   image: string;
// }

// export interface ServiceGroup {
//   id: number;
//   title: string;
//   data: ServiceItem[];
// }

// export const Services: ServiceGroup[] = [
//   {
//     id: 1,
//     title: "Core Services",
//     data: [
//       { id: 1, slug: "web-and-app-development", title: "Web and App Development", icon: "icon-software-1", image: "/assets/images/service/service-4-4.png" },
//       { id: 2, slug: "ui-ux-designing", title: "UI/UX Designing", icon: "icon-layer-1", image: "/assets/images/service/service-1-2.png" },
//       { id: 3, slug: "digital-marketing", title: "Digital Marketing", icon: "icon-digital-marketing-1", image: "/assets/images/service/service-1-2.png" },
//       { id: 4, slug: "data-analysis", title: "Data Analysis", icon: "icon-analysis-1", image: "/assets/images/service/service-1-4.png" },
//       { id: 5, slug: "web-development", title: "Web Development", icon: "icon-cyber-security", image: "/assets/images/service/service-3-2.png" },
//       { id: 6, slug: "software-development", title: "Software Development", icon: "icon-cloud-computing", image: "/assets/images/service/service-3-2.png" },
//       { id: 7, slug: "it-staff-augmentation", title: "IT Staff Augmentation", icon: "icon-cloud-computing", image: "/assets/images/service/service-3-2.png" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Expertise Solutions",
//     data: [
//       { id: 1, slug: "fintech-solution", title: "Fintech Solution", icon: "icon-software-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 2, slug: "ecommerce-solution", title: "Ecommerce Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 3, slug: "erp-solution", title: "ERP Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 4, slug: "healthcare-solution", title: "Healthcare Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 5, slug: "education-solution", title: "Education Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 6, slug: "on-demand-solution", title: "On-Demand Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 7, slug: "saas-solution", title: "SAAS Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 8, slug: "automation-solution", title: "Automation Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//       { id: 9, slug: "real-estate-solution", title: "Real Estate Solution", icon: "icon-layer-1", image: "/assets/images/service/service-3-3.png" },
//     ],
//   },
// ];

// export default function ServiceSlider() {
//   const swiperRefs = useRef<(SwiperType | null)[]>([]);
  
//   // Initialize active indices directly in useState
//   const [activeIndices, setActiveIndices] = useState<number[]>(() => {
//     // Calculate initial indices directly
//     return Services.map(() => 0);
//   });

//   const handlePrev = useCallback((index: number) => {
//     swiperRefs.current[index]?.slidePrev();
//   }, []);

//   const handleNext = useCallback((index: number) => {
//     swiperRefs.current[index]?.slideNext();
//   }, []);

//   const handleSlideChange = useCallback((swiper: SwiperType, index: number) => {
//     setActiveIndices(prev => {
//       const newIndices = [...prev];
//       newIndices[index] = swiper.realIndex;
//       return newIndices;
//     });
//   }, []);

//   const handleDotClick = useCallback((groupIndex: number, slideIndex: number) => {
//     const swiper = swiperRefs.current[groupIndex];
//     if (swiper) {
//       swiper.slideTo(slideIndex);
//       setActiveIndices(prev => {
//         const newIndices = [...prev];
//         newIndices[groupIndex] = slideIndex;
//         return newIndices;
//       });
//     }
//   }, []);

//   // Get visible dots (max 3 dots)
//   // const getVisibleDots = useCallback((groupIndex: number, totalSlides: number) => {
//   //   const currentIndex = activeIndices[groupIndex] || 0;
//   //   const dots = [];
    
//   //   // Always show exactly 3 dots
//   //   if (totalSlides <= 3) {
//   //     // If total slides are 3 or less, show all
//   //     for (let i = 0; i < totalSlides; i++) {
//   //       dots.push(i);
//   //     }
//   //   } else {
//   //     // Show 3 dots centered around current index
//   //     let start = Math.max(0, currentIndex - 1);
//   //     let end = Math.min(totalSlides - 1, currentIndex + 1);
      
//   //     // Adjust if we're near the start
//   //     if (currentIndex === 0) {
//   //       start = 0;
//   //       end = 2;
//   //     }
//   //     // Adjust if we're near the end
//   //     else if (currentIndex === totalSlides - 1) {
//   //       start = totalSlides - 3;
//   //       end = totalSlides - 1;
//   //     }
      
//   //     for (let i = start; i <= end; i++) {
//   //       dots.push(i);
//   //     }
//   //   }
    
//   //   return dots;
//   // }, [activeIndices]);
// // Simple natural pagination - always show 3 consecutive dots
// const getVisibleDots = useCallback((groupIndex: number, totalSlides: number) => {
//   const currentIndex = activeIndices[groupIndex] || 0;
//   const dots = [];
  
//   if (totalSlides <= 3) {
//     // Show all dots if 3 or less
//     for (let i = 0; i < totalSlides; i++) {
//       dots.push(i);
//     }
//   } else {
//     // Show 3 consecutive dots based on current index
//     let start = Math.floor(currentIndex / 3) * 3;
    
//     // Ensure we don't go beyond total slides
//     if (start + 2 >= totalSlides) {
//       start = totalSlides - 3;
//     }
    
//     for (let i = 0; i < 3; i++) {
//       dots.push(start + i);
//     }
//   }
  
//   return dots;
// }, [activeIndices]);
//   return (
//     <section className="service-three">
//       <div
//         className="service-three__bg"
//         style={{ backgroundImage: "url(/assets/images/shapes/service-shape-2-1.png)" }}
//       />
//       <div className="container">
//         {Services.map((group, groupIndex) => {
//           const visibleDots = getVisibleDots(groupIndex, group.data.length);
          
//           return (
//             <div key={group.id} className="mb-16">
//               {/* Section Heading with Navigation on Top */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="text-start section-headings">
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//                     {group.title} 
//                     <span className="block text-ostech-base opacity-30 text-2xl md:text-3xl font-normal">
//                       {group.title}
//                     </span>
//                   </h2>
//                 </div>
                
//                 {/* Navigation Buttons - Top Right */}
//               </div>
//                 <div className="d-flex gap-4 my-2 justify-content-end align-items-center">
//                   <button
//                     className="custom-nav-btn prev-btn"
//                     onClick={() => handlePrev(groupIndex)}
//                     aria-label="Previous slide"
//                     type="button"
//                   >
//                     <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     className="custom-nav-btn next-btn"
//                     onClick={() => handleNext(groupIndex)}
//                     aria-label="Next slide"
//                     type="button"
//                   >
//                     <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>

//               {/* Swiper Container */}
//               <div className="service-three__carousel relative">
//                 <Swiper
//                   modules={[Navigation, Autoplay]}
//                   spaceBetween={30}
//                   slidesPerView={3}
//                   loop={true}
//                   speed={800}
//                   autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                   }}
//                   onSlideChange={(swiper) => handleSlideChange(swiper, groupIndex)}
//                   onSwiper={(swiper) => {
//                     swiperRefs.current[groupIndex] = swiper;
//                   }}
//                   breakpoints={{
//                     0: { slidesPerView: 1, spaceBetween: 20 },
//                     576: { slidesPerView: 1, spaceBetween: 20 },
//                     768: { slidesPerView: 2, spaceBetween: 30 },
//                     992: { slidesPerView: 3, spaceBetween: 30 },
//                   }}
//                   className="owl-carousel"
//                 >
//                   {group.data.map((item) => (
//                     <SwiperSlide key={item.id}>
//                       <Link href={`/services/${item.slug}`} className="block h-full">
//                         <div className="service-three__item h-full">
//                           <div className="service-three__item__inner h-full flex flex-col">
//                             <div className="service-three__item__icon">
//                               <div className="service-three__item__icon__inner">
//                                 <i className={item.icon} />
//                               </div>
//                             </div>
//                             <div className="service-three__item__thumb flex-1">
//                               <img 
//                                 src={item.image} 
//                                 alt={item.title} 
//                                 className="w-full h-[300px] object-cover"
//                                 loading="lazy"
//                                 decoding="async"
//                               />
//                             </div>
//                             <div className="service-three__item__content">
//                               <h4 className="service-three__item__title">
//                                 {item.title.split('<br />').map((line, i) => (
//                                   <React.Fragment key={i}>
//                                     {line}
//                                     {i < item.title.split('<br />').length - 1 && <br />}
//                                   </React.Fragment>
//                                 ))}
//                               </h4>
//                               <span className="service-three__item__link">
//                                 <span className="service-three__item__link__icon" />
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>

//                 {/* Custom Pagination - Bottom Center (Max 3 Dots) */}
//                 <div className="custom-pagination-vertical mt-6">
//                   <div className="pagination-wrapper-vertical">
//                     {visibleDots.map((dotIndex) => (
//                       <button
//                         key={dotIndex}
//                         className={`pagination-dot-vertical ${
//                           activeIndices[groupIndex] === dotIndex ? "active" : ""
//                         }`}
//                         onClick={() => handleDotClick(groupIndex, dotIndex)}
//                         aria-label={`Go to slide ${dotIndex + 1}`}
//                         type="button"
//                         data-index={dotIndex + 1}
//                       >
//                         <span className="dot-bg-vertical"></span>
//                         <span className="dot-inner-vertical"></span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useRef, useState, useCallback, memo, lazy, Suspense } from "react";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";

// Lazy load heavy dependencies
const SwiperComponent = lazy(() => import("swiper/react").then(mod => ({ default: mod.Swiper })));
const SwiperSlideComponent = lazy(() => import("swiper/react").then(mod => ({ default: mod.SwiperSlide })));

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  icon: string;
  image: string;
  width?: number;
  height?: number;
}

export interface ServiceGroup {
  id: number;
  title: string;
  data: ServiceItem[];
}

// Optimized image data with dimensions
export const Services: ServiceGroup[] = [
  {
    id: 1,
    title: "Core Services",
    data: [
      { 
        id: 1, 
        slug: "web-and-app-development", 
        title: "Web and App Development", 
        icon: "icon-software-1", 
        image: "/assets/images/service/service-4-4.png",
        width: 400,
        height: 300
      },
      { 
        id: 2, 
        slug: "ui-ux-designing", 
        title: "UI/UX Designing", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-1-2.png",
        width: 400,
        height: 300
      },
      { 
        id: 3, 
        slug: "digital-marketing", 
        title: "Digital Marketing", 
        icon: "icon-digital-marketing-1", 
        image: "/assets/images/service/service-1-2.png",
        width: 400,
        height: 300
      },
      { 
        id: 4, 
        slug: "data-analysis", 
        title: "Data Analysis", 
        icon: "icon-analysis-1", 
        image: "/assets/images/service/service-1-4.png",
        width: 400,
        height: 300
      },
      { 
        id: 5, 
        slug: "web-development", 
        title: "Web Development", 
        icon: "icon-cyber-security", 
        image: "/assets/images/service/service-3-2.png",
        width: 400,
        height: 300
      },
      { 
        id: 6, 
        slug: "software-development", 
        title: "Software Development", 
        icon: "icon-cloud-computing", 
        image: "/assets/images/service/service-3-2.png",
        width: 400,
        height: 300
      },
      { 
        id: 7, 
        slug: "it-staff-augmentation", 
        title: "IT Staff Augmentation", 
        icon: "icon-cloud-computing", 
        image: "/assets/images/service/service-3-2.png",
        width: 400,
        height: 300
      },
    ],
  },
  {
    id: 2,
    title: "Expertise Solutions",
    data: [
      { 
        id: 1, 
        slug: "fintech-solution", 
        title: "Fintech Solution", 
        icon: "icon-software-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 2, 
        slug: "ecommerce-solution", 
        title: "Ecommerce Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 3, 
        slug: "erp-solution", 
        title: "ERP Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 4, 
        slug: "healthcare-solution", 
        title: "Healthcare Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 5, 
        slug: "education-solution", 
        title: "Education Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 6, 
        slug: "on-demand-solution", 
        title: "On-Demand Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 7, 
        slug: "saas-solution", 
        title: "SAAS Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 8, 
        slug: "automation-solution", 
        title: "Automation Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
      { 
        id: 9, 
        slug: "real-estate-solution", 
        title: "Real Estate Solution", 
        icon: "icon-layer-1", 
        image: "/assets/images/service/service-3-3.png",
        width: 400,
        height: 300
      },
    ],
  },
];

// Pre-calculated dot logic without useCallback
const getVisibleDots = (currentIndex: number, totalSlides: number): number[] => {
  if (totalSlides <= 3) {
    return Array.from({ length: totalSlides }, (_, i) => i);
  }
  
  const start = Math.floor(currentIndex / 3) * 3;
  const adjustedStart = Math.min(start, totalSlides - 3);
  
  return [0, 1, 2].map(i => adjustedStart + i).filter(i => i < totalSlides);
};

// Memoized service card component
const ServiceCard = memo(({ item }: { item: ServiceItem }) => (
  <Link 
    href={`/services/${item.slug}`} 
    className="block h-full group"
    prefetch={false}
  >
    <div className="service-three__item h-full">
      <div className="service-three__item__inner h-full flex flex-col">
        <div className="service-three__item__icon">
          <div className="service-three__item__icon__inner" aria-hidden="true">
            <i className={item.icon} />
          </div>
        </div>
        <div className="service-three__item__thumb flex-1 relative overflow-hidden rounded-lg">
          <div className="aspect-w-4 aspect-h-3 bg-gray-200">
            <img 
              src={item.image} 
              alt={item.title} 
              width={item.width || 400}
              height={item.height || 300}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="service-three__item__content">
          <h4 className="service-three__item__title">
            {item.title.split('<br />').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < item.title.split('<br />').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h4>
          <span className="service-three__item__link" aria-hidden="true">
            <span className="service-three__item__link__icon" />
          </span>
        </div>
      </div>
    </div>
  </Link>
));

ServiceCard.displayName = 'ServiceCard';

// Memoized navigation buttons
const NavigationButtons = memo(({ 
  onPrev, 
  onNext 
}: { 
  onPrev: () => void; 
  onNext: () => void;
}) => (
  <div className="flex gap-3 my-4 justify-end items-center">
    <button
      className="custom-nav-btn prev-btn"
      onClick={onPrev}
      aria-label="Previous slide"
      type="button"
      style={{ minWidth: '44px', minHeight: '44px' }}
    >
      <svg 
        className="nav-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      className="custom-nav-btn next-btn"
      onClick={onNext}
      aria-label="Next slide"
      type="button"
      style={{ minWidth: '44px', minHeight: '44px' }}
    >
      <svg 
        className="nav-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
));

NavigationButtons.displayName = 'NavigationButtons';

// Memoized pagination dots
const PaginationDots = memo(({ 
  dots, 
  activeIndex, 
  onClick 
}: { 
  dots: number[]; 
  activeIndex: number; 
  onClick: (index: number) => void;
}) => (
  <div className="custom-pagination-vertical mt-6" role="tablist" aria-label="Slide navigation">
    <div className="pagination-wrapper-vertical">
      {dots.map((dotIndex) => (
        <button
          key={dotIndex}
          className={`pagination-dot-vertical ${activeIndex === dotIndex ? "active" : ""}`}
          onClick={() => onClick(dotIndex)}
          aria-label={`Go to slide ${dotIndex + 1}`}
          aria-selected={activeIndex === dotIndex}
          role="tab"
          type="button"
          data-index={dotIndex + 1}
        >
          <span className="dot-bg-vertical" aria-hidden="true"></span>
          <span className="dot-inner-vertical" aria-hidden="true"></span>
        </button>
      ))}
    </div>
  </div>
));

PaginationDots.displayName = 'PaginationDots';

function ServiceSlider() {
  const swiperRefs = useRef<(SwiperType | null)[]>([]);
  
  // Initialize active indices
  const [activeIndices, setActiveIndices] = useState<number[]>(() => 
    Services.map(() => 0)
  );

  // Memoized handlers
  const handlePrev = useCallback((index: number) => {
    swiperRefs.current[index]?.slidePrev();
  }, []);

  const handleNext = useCallback((index: number) => {
    swiperRefs.current[index]?.slideNext();
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType, index: number) => {
    setActiveIndices(prev => {
      const newIndices = [...prev];
      newIndices[index] = swiper.realIndex;
      return newIndices;
    });
  }, []);

  const handleDotClick = useCallback((groupIndex: number, slideIndex: number) => {
    const swiper = swiperRefs.current[groupIndex];
    if (swiper) {
      swiper.slideTo(slideIndex);
      setActiveIndices(prev => {
        const newIndices = [...prev];
        newIndices[groupIndex] = slideIndex;
        return newIndices;
      });
    }
  }, []);

  return (
    <section className="service-three" role="region" aria-label="Services slider">
      <div
        className="service-three__bg"
        style={{ backgroundImage: "url(/assets/images/shapes/service-shape-2-1.png)" }}
        aria-hidden="true"
      />
      <div className="container">
        {Services.map((group, groupIndex) => {
          const currentIndex = activeIndices[groupIndex] || 0;
          const visibleDots = getVisibleDots(currentIndex, group.data.length);
          
          return (
            <div key={group.id} className="mb-16">
              {/* Section Heading with Navigation on Top */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-start section-headings">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {group.title} 
                    <span className="block text-ostech-base opacity-30 text-2xl md:text-3xl font-normal">
                      {group.title}
                    </span>
                  </h2>
                </div>
                
                {/* Navigation Buttons */}
                <NavigationButtons 
                  onPrev={() => handlePrev(groupIndex)}
                  onNext={() => handleNext(groupIndex)}
                />
              </div>

              {/* Swiper Container */}
              <div className="service-three__carousel relative">
                <Suspense fallback={
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-gray-200 rounded-lg h-[400px]"></div>
                    ))}
                  </div>
                }>
                  {/* Dynamically import Swiper only when needed */}
                  {typeof window !== 'undefined' && (
                    <SwiperComponent
                      modules={[Navigation, Autoplay].filter(Boolean) as any}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop={true}
                      speed={800}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper, groupIndex)}
                      onSwiper={(swiper: SwiperType) => {
                        swiperRefs.current[groupIndex] = swiper;
                      }}
                      breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        576: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        992: { slidesPerView: 3, spaceBetween: 30 },
                      }}
                      className="owl-carousel"
                    >
                      {group.data.map((item) => (
                        <SwiperSlideComponent key={item.id}>
                          <ServiceCard item={item} />
                        </SwiperSlideComponent>
                      ))}
                    </SwiperComponent>
                  )}
                </Suspense>

                {/* Pagination Dots */}
                <PaginationDots 
                  dots={visibleDots}
                  activeIndex={currentIndex}
                  onClick={(dotIndex) => handleDotClick(groupIndex, dotIndex)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Optimized export
export default memo(ServiceSlider);