import React from 'react'
import './service-two.css'

const ServiceThree = () => {
  return (
    <section className="serviceDe-two">  {/* Added className here */}
      <div className="conatiner">  {/* Note: Typo - should be "container" */}
        <div className="row">
          <div className="col-md-6">
            <div className='detail'>
              <div className='detailImage'>
                <img src="/assets/images/service/web-deve.jpg" alt="ser" className='detailImage'/>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
                      <div className='sdf'>
                          
            <h1 className='title mb-2'>Why Choose a Healthcare App Development Company for Digital Health Solutions?</h1>
            <p className='description'>InS Tech Lab is a recognized healthcare app development company, delivering cutting-edge solutions by utilizing AI and IoMT to optimize patient care and drive medical advancements. We collaborated with healthcare practitioners and companies to address global health concerns. Our considerable experience working with doctors, patients, pharmacies, delivery systems, prescription systems, and EHR procedures enables us to design bespoke solutions quickly and accurately.</p>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceThree