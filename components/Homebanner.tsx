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




"use client";

import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import type { Options } from "react-owl-carousel";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

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
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
  },
  { 
    id: 2, 
    bgImage: "/assets/images/backgrounds/slider-1-1.jpg", 
    subTitle: "IT Software Solution",
    title: "IT Software <br/> Tech & Solutions",
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
  },
  { 
    id: 3, 
    bgImage: "/assets/images/backgrounds/slider-1-3.jpg", 
    subTitle: "IT Software Solution",
    title: "IT Software <br/> Tech & Solutions",
    shapeImage: "/assets/images/shapes/frame-hero-2-1.png"
  },
];

const options: Options = {
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 1000,
  nav: false,
  dots: true,
  margin: 0,
};

const HomeSliderTwo: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const renderSlides = useMemo(() => {
    return SLIDES.map((slide) => (
      <div key={slide.id} className="item">
        <div className="main-slider-two__item">
          <div
            className="main-slider-two__bg"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-slider-two__content">
                  <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
                  <h2 className="main-slider-two__title" 
                 
                     
                  >
                                        <span dangerouslySetInnerHTML={{ __html: slide.title }} />

                    <span className="main-slider-two__title__overlay-group">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="main-slider-two__title__overlay" />
                      ))}
                    </span>
                  </h2>
                  <div className="main-slider-two__link">
                    <a href="services.html" className="ostech-two-btn ">Discover More</a>
                    <a href="services.html" className="ostech-btn ">Take Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-slider-two__item__shape">
            <img 
              src={slide.shapeImage} 
              alt="Shape" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    ));
  }, []);

  const carouselProps = useMemo(() => ({ 
    className: "main-slider-two__carousel ostech-owl__carousel owl-carousel", 
    ...options 
  }), []);

  if (!mounted) return null;

  return (
    <section className="main-slider-two">
      <OwlCarousel {...carouselProps}>{renderSlides}</OwlCarousel>
    </section>
  );
};

export default React.memo(HomeSliderTwo);