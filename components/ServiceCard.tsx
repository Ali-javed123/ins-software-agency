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
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export const Services = [
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
      },
      {
        id: 2,
        slug: "ui-ux-designing",
        title: "UI/UX Designing",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-1-2.png",
      },
      {
        id: 3,
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: "icon-digital-marketing-1",
        image: "/assets/images/service/service-1-2.png",
      },
      {
        id: 4,
        slug: "data-analysis",
        title: "Data Analysis",
        icon: "icon-analysis-1",
        image: "/assets/images/service/service-1-4.png",
      },
      {
        id: 5,
        slug: "web-development",
        title: "Web Development",
        icon: "icon-cyber-security",
        image: "/assets/images/service/service-3-2.png",
      },
      {
        id: 6,
        slug: "software-development",
        title: "Software Development",
        icon: "icon-cloud-computing",
        image: "/assets/images/service/service-3-2.png",
      },
      {
        id: 7,
        slug: "it-staff-augmentation",
        title: "IT Staff Augmentation",
        icon: "icon-cloud-computing",
        image: "/assets/images/service/service-3-2.png",
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
      },
      {
        id: 2,
        slug: "ecommerce-solution",
        title: "Ecommerce Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 3,
        slug: "erp-solution",
        title: "ERP Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 4,
        slug: "healthcare-solution",
        title: "Healthcare Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 5,
        slug: "education-solution",
        title: "Education Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 6,
        slug: "on-demand-solution",
        title: "On-Demand Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 7,
        slug: "saas-solution",
        title: "SAAS Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 8,
        slug: "automation-solution",
        title: "Automation Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 9,
        slug: "real-estate-solution",
        title: "Real Estate Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
    ],
  },
];




const services = [
  {
    id: 1,
    title: "Web and App <br /> Development",
    icon: "icon-software-1",
    image: "/assets/images/service/service-4-4.png",
  },
  {
    id: 2,
    title: "UI/UX <br /> Designing",
    icon: "icon-layer-1",
    image: "/assets/images/service/service-1-2.png",
  },
  {
    id: 3,
    title: "Digital <br /> Marketing",
    icon: "icon-digital-marketing-1",
    image: "/assets/images/service/service-s-1-1.png",
  },
  {
    id: 4,
    title: "Data <br /> Analysis",
    icon: "icon-analysis-1",
    image: "/assets/images/service/service-s-1-1.png",
  },
  {
    id: 5,
    title: "Web <br /> Development",
    icon: "icon-cyber-security",
    image: "/assets/images/service/service-4-4.png",
  },
  {
    id: 6,
    title: "Software <br /> Development",
    icon: "icon-cloud-computing",
    image: "/assets/images/service/service-4-4.png",
  },
   {
    id: 7,
    title: "IT  Staff <br /> Augmentation",
    icon: "icon-cloud-computing",
    image: "/assets/images/service/service-2-1.png",
  },
];

export default function ServiceSlider() {
  
  return (
    <section className="service-page service-page--page">
      <div className="container">
        {Services.map((e ,i) => (
         <div key={i}>
            <div className="text-start section-headings my-6">
<h2>
 {e.title}
  <span>{e.title}</span>
</h2>

            </div>      
        <OwlCarousel
          loop
          margin={30}
          // autoplay
          // autoplayTimeout={2500}
          // smartSpeed={800}
          dots
          nav
          navText={[
            `<span class="owl-arrows left">‹</span>`,
            `<span class="owl-arrows right">›</span>`,
          ]}
          responsive={{
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          }}
        >
              {e.data.map((item) => (
            
            <div key={item.id} className="service-card ">
              <div className="service-card__inner" >
                    <div className="service-card__content">
                      <Link             key={item.id}          href={`/services/${item.slug}`}

>
                  <h4
                    className="service-card__title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                      </Link>
                  <div className="service-card__icon">
                    <i className={item.icon} />
                  </div>
                </div>

                <div className="service-card__thumb">
                  <img src={item.image} alt="service" width={"100%"} height={"422px"} />
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
         </div>
       ))} 
      </div>
    </section>
  );
}

