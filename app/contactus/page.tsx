import React from 'react'
import Banner from '@/components/Banner'
import ContactUsForm from '@/components/ContactUsForm'
import Map from '@/components/Map'
import Header from '@/components/Navbar'
import Footer from "@/components/Footer"

const page = () => {
  return (
      <>
          <div className="page-wrapper"> 
          
          <Header />
          
          <Banner title={ "Contact Us"} />
        <ContactUsForm />
        <Map />
                <Footer/>
        
              </div>
      
    </>
  )
}

export default page
