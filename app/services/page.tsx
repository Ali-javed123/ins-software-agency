import Banafits from '@/components/Banafits'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import type { Metadata } from "next";
import Footer from "@/components/Footer"
const img1 = '/assets/images/aboutsus.webp';

export const metadata: Metadata = {
  title: "Ins Software Agency | Services",
  description:
    "Ostech – IT Solutions & Services Company HTML template",
  icons: {
    icon: "/assets/images/favicons/favicon-32x32.png",
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
};

const ServicesPage = () => {
  return (
    <>
          <div className="page-wrapper"> 
              <Navbar/>
              <Banner image={img1} title={'Services'}/>
              <ServiceCard/>
        <Banafits />
        <Footer/>
        
         </div> 
    </>
  )
}

export default ServicesPage;
