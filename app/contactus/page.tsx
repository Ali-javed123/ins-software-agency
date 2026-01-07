import React from 'react'
import Banner from '@/components/Banner'
import ContactUsForm from '@/components/ContactUsForm'
import Map from '@/components/Map'
import Header from '@/components/Navbar'
import Footer from "@/components/Footer"
import ContatUsCard from '@/components/ContactUSCard'
const img1 = '/assets/images/contact-us.jpg';
import ContactUstwo from '@/components/ContactUsThree'
const page = () => {
  console.log("img1",img1)
  return (
      <>
          <div className="page-wrapper"> 
          
          <Header />
          
        <Banner image={img1} title={"Contact Us"} />
        <ContatUsCard/>
        <ContactUstwo />
        {/* <Map /> */}
                <Footer/>
        
              </div>
      
    </>
  )
}

export default page
