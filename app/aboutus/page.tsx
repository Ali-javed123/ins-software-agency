import AboutTwo from '@/components/AboutTwo';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import { Slides } from '@/components/Slides';
import Testimonialtwo from '@/components/Testimonioltwo';
import WhyChooseTwo from '@/components/WhyChooseTwo';
import React from 'react'
import type { Metadata } from "next";
import Footer from "@/components/Footer"


const img1 = '/assets/images/aboutsus.webp';

export const metadata: Metadata = {
  title: "Ins Software Agency | Aboutus",
  description:
    "Ostech – IT Solutions & Services Company HTML template",
  icons: {
    icon: "/assets/images/favicons/favicon-32x32.png",
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
};

const AboutUsPage = () => {
  return (
      <>
           <div className="page-wrapper"> 
    <Navbar/>
              <Banner image={img1} title={"about us"} />
              <AboutTwo />
              <WhyChooseTwo />
              <Testimonialtwo />
        <Slides />
        <Footer/>
    </div>
    </>
  )
}
export default AboutUsPage;