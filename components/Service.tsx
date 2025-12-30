// import React from 'react'

// const Service = () => {
//   return (
//     <>
//      {/* Service section Start */}
// <section className="service-one">
//   <div className="container">
//     <div className="row gutter-y-40">
//       <div className="col-lg-4 col-md-6">
//         <div className="service-one__item wow fadeInUp" data-wow-delay="500ms">
//           <div className="service-one__item__icon">
//             <i className="icon-infrastructure-1" />
//           </div>
//           <div className="service-one__item__thumb">
//             <img src="/assets/images/service/service-2-1.png" alt="ostech image" />
//           </div>
//           <div className="service-one__item__content">
//             <h4 className="service-one__item__title"><a href="service-d-development.html">Manage IT Service</a></h4>
//             <p className="service-one__item__text">There are many variations of passages of Lorem Ipsum</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-4 col-md-6">
//         <div className="service-one__item wow fadeInUp" data-wow-delay="700ms">
//           <div className="service-one__item__icon">
//             <i className="icon-cyber-security-1-1" />
//           </div>
//           <div className="service-one__item__thumb">
//             <img src="/assets/images/service/service-2-2.png" alt="ostech image" />
//           </div>
//           <div className="service-one__item__content">
//             <h4 className="service-one__item__title"><a href="service-d-development.html">Cyber Security</a></h4>
//             <p className="service-one__item__text">There are many variations of passages of Lorem Ipsum</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-4 col-md-6">
//         <div className="service-one__item wow fadeInUp" data-wow-delay="900ms">
//           <div className="service-one__item__icon">
//             <i className="icon-technology-1" />
//           </div>
//           <div className="service-one__item__thumb">
//             <img src="/assets/images/service/service-2-3.png" alt="ostech image" />
//           </div>
//           <div className="service-one__item__content">
//             <h4 className="service-one__item__title"><a href="service-d-marketing.html">Digital Experience</a></h4>
//             <p className="service-one__item__text">There are many variations of passages of Lorem Ipsum</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// {/* Service section End */}

//     </>
//   )
// }

// export default Service
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

interface ServiceItem {
  id: number;
  icon: string;
  image: string;
  title: string;
  link: string;
  description: string;
}

export default function Service() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true, // ✅ pagination ENABLE
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  const services: ServiceItem[] = [
    {
      id: 1,
      icon: "icon-infrastructure-1",
      image: "/assets/images/service/service-2-1.png",
      title: "Manage IT Service",
      link: "#",
      description: "There are many variations of passages of Lorem Ipsum",
    },
    {
      id: 2,
      icon: "icon-cyber-security-1-1",
      image: "/assets/images/service/service-2-2.png",
      title: "Cyber Security",
      link: "#",
      description: "There are many variations of passages of Lorem Ipsum",
    },
    {
      id: 3,
      icon: "icon-technology-1",
      image: "/assets/images/service/service-2-3.png",
      title: "Digital Experience",
      link: "#",
      description: "There are many variations of passages of Lorem Ipsum",
    },
    {
      id: 4,
      icon: "icon-infrastructure-1",
      image: "/assets/images/service/service-2-1.png",
      title: "Manage IT Service",
      link: "#",
      description: "There are many variations of passages of Lorem Ipsum",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="service-one">
      <div className="container">
        <OwlCarousel
          className="service-one__carousel owl-theme"
          {...options}
        >
          {services.map((service) => (
            <div key={service.id} className="item">
              <div className="service-one__item">
                <div className="service-one__item__icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-one__item__thumb">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-one__item__content">
                  <h4 className="service-one__item__title">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p className="service-one__item__text">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
