"use client"
import React from 'react'
import { useInView } from "react-intersection-observer";
import Link from 'next/link'

const Banner = ({ title,image }: { title: string,image?:string }) => {

   const { ref, inView } = useInView({
    threshold: 0.2, // trigger when 20% of the element is visible
    // triggerOnce: true, // animation only triggers once
  });

  return (
    <>
            <section className="page-header" ref={ref}>
        <div 
      className={`page-header__bg ${inView ? "zoom-ins" : "zoom-outs"}`}

    style={{
    backgroundImage: image
      ? `url(${image})`
      : 'url(/assets/images/backgrounds/page-header-bg-1-1.jpg)',
  }}

        />
  <div className="container">
        <h2 className={`page-header__title ${inView ? "animate-left-to-right" : ""}`}>

            {title.toUpperCase()}</h2>
    <ul
      className={`ostech-breadcrumb list-unstyled ${
        inView ? "animate-left-to-right" : ""
      }`}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <span>{title.toUpperCase()}</span>
      </li>
    </ul>

  </div>
</section>

 
    </>
  )
}

export default Banner
