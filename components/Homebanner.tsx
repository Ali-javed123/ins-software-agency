// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import type { Options } from "react-owl-carousel";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

// interface SliderItem {
//   id: number;
//   bgImage: string;
//   title: string;
// }

// const SLIDES: SliderItem[] = [
//   { id: 1, bgImage: "/assets/images/backgrounds/slider-1-1.jpg", title: "IT Software Solution & Technology" },
//   { id: 2, bgImage: "/assets/images/backgrounds/slider-1-2.jpg", title: "IT Software Tech & Solutions" },
//   { id: 3, bgImage: "/assets/images/backgrounds/slider-1-1.jpg", title: "IT Software Solution & Technology" },
// ];

// const options: Options = {
//   loop: true,
//   animateOut: "fadeOut",
//   animateIn: "fadeIn",
//   items: 1,
//   autoplay: true,
//   autoplayTimeout: 7000,
//   smartSpeed: 1000,
//   nav: false,
//   dots: true,
//   margin: 0,
// };

// const Home1Banner: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

// // ✅ Defer setState to avoid cascading renders
// useEffect(() => {
//   const timer = setTimeout(() => setMounted(true), 0);
//   return () => clearTimeout(timer);
// }, []);

//   const renderSlides = useMemo(() => {
//     return SLIDES.map((slide) => (
//       <div key={slide.id} className="item">
//         <div className="main-slider-one__item">
//           <div
//             className="main-slider-one__bg"
//             style={{ backgroundImage: `url(${slide.bgImage})` }}
//           />
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="main-slider-one__content">
//                   <h5 className="main-slider-one__sub-title">
//                     <span>Efficient Solutions, Exceptional Results</span>
//                   </h5>
//                   <h2 className="main-slider-one__title">
//                     {slide.title}
//                     <span className="main-slider-one__title__overlay-group">
//                       {Array.from({ length: 6 }).map((_, i) => (
//                         <span key={i} className="main-slider-one__title__overlay" />
//                       ))}
//                     </span>
//                   </h2>
//                   <div className="main-slider-one__link">
//                     <a href="/services" className="main-slider-one__link__btn ostech-btn">
//                       Discover More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <div className="main-slider-one__shape main-slider-one__shape--one">
//             <img src="/assets/images/shapes/slider-shape-1-1.png" alt="Shape 1"     loading="lazy"
//     decoding="async"
// />
//           </div>
//           <div className="main-slider-one__shape main-slider-one__shape--two">
//             <img src="/assets/images/shapes/slider-shape-1-2.png" alt="Shape 2"      loading="lazy"
//     decoding="async"
// />
//           </div> */}
//         </div>
//       </div>
//     ));
//   }, []);

//   const carouselProps = useMemo(() => ({ className: "main-slider-one__carousel ostech-owl__carousel", ...options }), []);

//   if (!mounted) return null;

//   return (
//     <section className="main-slider-one">
//       <OwlCarousel {...carouselProps}>{renderSlides}</OwlCarousel>
//     </section>
//   );
// };

// export default React.memo(Home1Banner);




// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import type { Options } from "react-owl-carousel";
// import Link from 'next/link'

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

// interface SliderItem {
//   id: number;
//   bgImage: string;
//   subTitle: string;
//   title: string;
//   shapeImage: string;
// }

// const SLIDES: SliderItem[] = [
//   {
//     id: 1,
//     bgImage: "/assets/images/backgrounds/slider-1-2.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
//   },
//   {
//     id: 2,
//     bgImage: "/assets/images/backgrounds/slider-1-1.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
//   },
//   {
//     id: 3,
//     bgImage: "/assets/images/backgrounds/slider-1-3.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
//   },
// ];

// const options: Options = {
//   loop: true,
//   items: 1,
//   autoplay: true,
//   autoplayTimeout: 7000,
//   smartSpeed: 1000,
//   nav: false,
//   dots: true,
//   margin: 0,
// };

// const HomeSliderTwo: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 0);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderSlides = useMemo(() => {
//     return SLIDES.map((slide) => (
//       <div key={slide.id} className="item">
//         <div className="main-slider-two__item">
//           <div
//             className="main-slider-two__bg"
//             style={{ backgroundImage: `url(${slide.bgImage})` }}
//           />
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="main-slider-two__content">
//                   <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
//                   <h2 className="main-slider-two__title"
                 
                     
//                   >
//                                         <span dangerouslySetInnerHTML={{ __html: slide.title }} />

//                     <span className="main-slider-two__title__overlay-group">
//                       {Array.from({ length: 6 }).map((_, i) => (
//                         <span key={i} className="main-slider-two__title__overlay" />
//                       ))}
//                     </span>
//                   </h2>
//                   <div className="main-slider-two__link">
//                     <Link href="/services" className="ostech-two-btn ">Discover More</Link>
//                     <Link href="/services" className="ostech-btn ">Take Service</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="main-slider-two__item__shape">
//             <img
//               src={slide.shapeImage}
//               alt="Shape"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//         </div>
//       </div>
//     ));
//   }, []);

//   const carouselProps = useMemo(() => ({
//     className: "main-slider-two__carousel ostech-owl__carousel owl-carousel",
//     ...options
//   }), []);

//   if (!mounted) return null;

//   return (
//     <section className="main-slider-two">
//       <OwlCarousel {...carouselProps}>{renderSlides}</OwlCarousel>
//     </section>
//   );
// };

// export default React.memo(HomeSliderTwo);






// "use client";

// import React, { useMemo, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Link from "next/link";

// interface SliderItem {
//   id: number;
//   bgImage: string;
//   subTitle: string;
//   title: string;
//   shapeImage: string;
// }

// const SLIDES: SliderItem[] = [
//   {
//     id: 1,
//     bgImage: "/assets/images/backgrounds/slider-1-2.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
//   {
//     id: 2,
//     bgImage: "/assets/images/backgrounds/slider-1-1.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
//   {
//     id: 3,
//     bgImage: "/assets/images/backgrounds/slider-1-3.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
// ];

// const HomeSliderTwo: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = useMemo(
//     () =>
//       SLIDES.map((slide, index) => {
//         const isActive = index === activeIndex;
//         return (
//        <SwiperSlide key={slide.id}>
//   <div className={`main-slider-two__item ${isActive ? "active" : ""}`}>
//     <div
//       className="main-slider-two__bg"
//       style={{ backgroundImage: `url(${slide.bgImage})` }}
//     />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="main-slider-two__content">
//             <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
//             <h2 className="main-slider-two__title">
//               <span dangerouslySetInnerHTML={{ __html: slide.title }} />
//               {/* Overlay group */}
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className="main-slider-two__title__overlay"
//                 />
//               ))}
//             </h2>
//             <div className="main-slider-two__link">
//               <Link href="/services" className="ostech-two-btn">
//                 Discover More
//               </Link>
//               <Link href="/services" className="ostech-btn">
//                 Take Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="main-slider-two__item__shape">
//       <img src={slide.shapeImage} alt="Shape" loading="lazy" decoding="async" />
//     </div>
//   </div>
// </SwiperSlide>

//         );
//       }),
//     [activeIndex]
//   );

//   return (
//     <section className="main-slider-two">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         loop
//         speed={1000}
//         autoplay={{ delay: 7000, disableOnInteraction: false }}
//         pagination={{
//           el: ".owl-dots",
//           clickable: true,
//         }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="main-slider-two__carousel ostech-owl__carousel owl-carousel"
//       >
//         {slides}
//         {/* ❗ reuse same owl dots CSS */}
//         <div className="owl-dots"></div>
//       </Swiper>
//     </section>
//   );
// };

// export default React.memo(HomeSliderTwo);




// "use client";

// import React, { useMemo, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import Link from "next/link";

// interface SliderItem {
//   id: number;
//   bgImage: string;
//   subTitle: string;
//   title: string;
//   shapeImage: string;
// }

// const SLIDES: SliderItem[] = [
//   {
//     id: 1,
//     bgImage: "/assets/images/backgrounds/slider-1-2.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
//   {
//     id: 2,
//     bgImage: "/assets/images/backgrounds/slider-1-1.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
//   {
//     id: 3,
//     bgImage: "/assets/images/backgrounds/slider-1-3.jpg",
//     subTitle: "IT Software Solution",
//     title: "IT Software <br/> Tech & Solutions",
//     shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
//   },
// ];

// const HomeSliderTwo: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const handleDotClick = (index: number) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideTo(index);
//     }
//   };

//   const slides = useMemo(
//     () =>
//       SLIDES.map((slide, index) => {
//         const isActive = index === activeIndex;
//         return (
//           <SwiperSlide key={slide.id}>
//             <div className={`main-slider-two__item ${isActive ? "active" : ""}`}>
//               <div
//                 className="main-slider-two__bg"
//                 style={{ backgroundImage: `url(${slide.bgImage})` }}
//               />
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="main-slider-two__content">
//                       <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
//                       <h2 className="main-slider-two__title">
//                         <span dangerouslySetInnerHTML={{ __html: slide.title }} />
//                         {/* Overlay group */}
//                         {Array.from({ length: 6 }).map((_, i) => (
//                           <span
//                             key={i}
//                             className="main-slider-two__title__overlay"
//                           />
//                         ))}
//                       </h2>
//                       <div className="main-slider-two__link">
//                         <Link href="/services" className="ostech-two-btn">
//                           Discover More
//                         </Link>
//                         <Link href="/services" className="ostech-btn">
//                           Take Service
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="main-slider-two__item__shape">
//                 <img src={slide.shapeImage} alt="Shape" loading="lazy" decoding="async" />
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       }),
//     [activeIndex]
//   );

//   return (
//     <section className="main-slider-two">
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={1}
//         loop
//         speed={1000}
//         autoplay={{ delay: 7000, disableOnInteraction: false }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         className="main-slider-two__carousel ostech-owl__carousel owl-carousel"
//       >
//         {slides}
//       </Swiper>
      
//       {/* Custom Pagination Dots - Owl Carousel Style */}
//       <div className="owl-dots">
//         {SLIDES.map((_, index) => (
//           <button
//             key={index}
//             className={`owl-dot ${activeIndex === index ? "active" : ""}`}
//             onClick={() => handleDotClick(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <span></span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default React.memo(HomeSliderTwo);

"use client";

import React, { useMemo, useState, useRef,useCallback ,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";
import type { User as User ,DatabaseUser} from "@/types/home/homeslider";
// import "./HomeSliderTwo.css"; // Separate CSS file for custom styles
import { supabase } from "@/lib/supabase-client"

interface SliderItem {
  id: number;
  bgImage: string;
  subTitle: string;
  title: string;
  shapeImage: string;
}

const SLIDES: SliderItem[] = [
  {
    id: 1,
    bgImage: "/assets/images/backgrounds/slider-1-2.jpg",
    subTitle: "IT Software Solution",
    title: "IT Software <br> Tech & Solutions",
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
  },
  {
    id: 2,
    bgImage: "/assets/images/backgrounds/slider-1-1.jpg",
    subTitle: "IT Software Solution",
    title: "IT Software <br/> Tech & Solutions",
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
  },
  {
    id: 3,
    bgImage: "/assets/images/backgrounds/slider-1-3.jpg",
    subTitle: "IT Software Solution",
    title: "IT Software <br/> Tech & Solutions",
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png",
  },
];


const BUCKET_NAME = "home-banner";
const STORAGE_TYPE = "bucket";
const CHUNK_SIZE = 60000;
const DELIMITER = '|||CHUNK|||';
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;


const HomeSliderTwo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };



const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
    if (!chunkedString) return null;

    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString;
    }

    return chunkedString.split(DELIMITER).join('');
  };

const convertToUser = (dbUser: DatabaseUser): User => {
    if (STORAGE_TYPE === "bucket") {
      // For bucket storage
      return {
        id: dbUser.id,
        title: dbUser.title,
        heading: dbUser.heading,
        btnOne: dbUser.btnOne,
        btnTwo: dbUser.btnTwo,
        profileImage: null,
        profileImageUrl: dbUser.profileImage || null
      };
    } else {
      // For Base64 storage
      return {
        id: dbUser.id,
        title: dbUser.title,
        heading: dbUser.heading,
        btnOne: dbUser.btnOne,
        btnTwo: dbUser.btnTwo,
        profileImage: reconstructFromChunks(dbUser.profileImage),
        profileImageUrl: null
      };
    }
  };



 const fetchUsers = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("home-banner")
        .select("*")
        .order("created_at", { ascending: true });
      console.log("Fetched users:", data);

      if (error) {
        console.error("Error fetching users:", error);
        return;
      }

      // Safely convert database users to component users
      const processedUsers = (data || []).map((dbUser) => convertToUser(dbUser as DatabaseUser));

      setUsers(processedUsers);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


console.log("users:", users);
  const slides = useMemo(
    () =>
      SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <SwiperSlide key={slide.id}>
            <div className={`main-slider-two__item ${isActive ? "active" : ""}`}>
              <div
                className="main-slider-two__bg"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
                      <h2 className="main-slider-two__title">
                        <span dangerouslySetInnerHTML={{ __html: slide.title }} />
                        {Array.from({ length: 6 }).map((_, i) => (
                          <span
                            key={i}
                            className="main-slider-two__title__overlay"
                          />
                        ))}
                      </h2>
                      <div className="main-slider-two__link">
                        <Link href="/services" className="ostech-two-btn">
                          Discover More
                        </Link>
                        <Link href="/services" className="ostech-btn">
                          Take Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__item__shape">
                <img src={slide.shapeImage} alt="Shape" loading="lazy" decoding="async" />
              </div>
            </div>
          </SwiperSlide>
        );
      }),
    [activeIndex]
  );

  return (
    <section className="main-slider-two">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="main-slider-two__carousel ostech-owl__carousel owl-carousel"
      >
        {slides}
      </Swiper>
      
      {/* Horizontal Pagination Dots - Right Side */}
      <div className="custom-pagination-horizontal">
        <div className="pagination-wrapper">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="dot-bg"></span>
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeSliderTwo);