"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ContactUsCard = () => {
    const { ref, inView } = useInView({
      threshold: 0.2, // trigger when 20% of the element is visible
      // triggerOnce: true, // animation only triggers once
    });
  return (
      <>
      
{/* <section className="feature-one">
  <div className="container">
    <div className="row gutter-y-30">
      <div className="col-lg-4 col-md-6">
        <div className="feature-one__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <div className="feature-one__item__content">
            <div className="feature-one__item__icon">
              <i className="fa fa-phone" />
            </div>
                  <h4 className="feature-one__item__title">Phone Number</h4>
                  <div className="text-start">

            <p className="feature-one__item__text">
              <span className="slc" >UK</span>  +44 7576 5855 12

              </p>
                 <p className="feature-one__item__text">
              <span className="slc">UK</span> +44 7471 0958 53


              </p>
              <p className="feature-one__item__text">
              <span className="slc">PK</span> +92 2332 3432 76


              </p>
                  </div>
          </div>
          <div className="feature-one__item__thumb">
            <img src="assets/images/resources/feature-1-2.png" alt="ostech image" />
          </div>
        </div>
      </div>


         <div className="col-lg-4 col-md-6">
        <div className="feature-one__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <div className="feature-one__item__content">
            <div className="feature-one__item__icon">
             <i className="fa-regular fa-message"/>
            </div>
            <h4 className="feature-one__item__title">Email</h4>
            <p className="feature-one__item__text">
              <span className="slc" >01</span>  info@mail.com

              </p>
                 <p className="feature-one__item__text">
              <span className="slc">02</span> info@mail.com


              </p>
              <p className="feature-one__item__text">
              <span className="slc">03</span> info@mail.com


              </p>
          </div>
          <div className="feature-one__item__thumb">
            <img src="assets/images/resources/feature-1-2.png" alt="ostech image" />
          </div>
        </div>
      </div>

                     <div className="col-lg-4 col-md-6">
        <div className="feature-one__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <div className="feature-one__item__content">
            <div className="feature-one__item__icon">
             <i className="fa-regular fa-location-dot"/>
            </div>
                  <div className="my-2 ">
                    
            <h4 className="feature-one__item__title">Location</h4>
            <p className="feature-one__item__text">
              <span className="slc" >PK</span> Shahrah e faisal Karachi Pakistan

              </p>
             <p className="feature-one__item__text">
              <span className="slc" >PK</span> Shahrah e faisal Karachi Pakistan

              </p>
             <p className="feature-one__item__text">
              <span className="slc" >PK</span> Shahrah e faisal Karachi Pakistan

              </p>
            </div>
             
          </div>
          <div className="feature-one__item__thumb">
            <img src="assets/images/resources/feature-1-2.png" alt="ostech image" />
          </div>
        </div>
      </div>



   
    </div>
  </div>
</section> */}

        <section className="contact-feature my-3" ref={ref}>
      <div className="container">
        <div className="row g-4">

          {/* Phone */}
          <div className="col-lg-4 col-md-6">
            <div className={`contact-card ${inView ? "zoom-ins" : "zoom-outs"}`}>
              <div className="contact-card__icon">
                <FaPhoneAlt />
              </div>
                <h4 className="contact-card__title">Phone Numbers</h4>
  <div className="row">
                  <div className={` d-flex justify-content-center align-content-center ${inView ? "animate-left-to-right" : ""}`}>
                    <div className="text-start">

              <p className="contact-card__text">
                <span>UK</span> +44 7576 5855 12
              </p>
              <p className="contact-card__text">
                <span>UK</span> +44 7471 0958 53
              </p>
              <p className="contact-card__text">
                <span>PK</span> +92 2332 3432 76
              </p>
</div>
</div>
</div>


              <div className="contact-card__footer">
                Available 24/7 Support
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6">
            <div className={`contact-card ${inView ? "zoom-ins" : "zoom-outs"}`}>
              <div className="contact-card__icon">
                <FaEnvelope />
              </div>
              <h4 className="contact-card__title">Email Address</h4>
     <div className="row">
                  <div className={` d-flex justify-content-center align-content-center ${inView ? "animate-left-to-right" : ""}`}>
                    <div className="text-start">

              <p className="contact-card__text">
                <span>01</span> info@mail.com
              </p>
              <p className="contact-card__text">
                <span>02</span> support@mail.com
              </p>
              <p className="contact-card__text">
                <span>03</span> sales@mail.com
                      </p>
                      </div>
                      </div>
                      </div>

              <div className="contact-card__footer">
                Quick Response Guaranteed
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="col-lg-4 col-md-6">
            <div className={`contact-card ${inView ? "zoom-ins" : "zoom-outs"}`}>
              <div className="contact-card__icon">
                <FaMapMarkerAlt />
              </div>
                <h4 className="contact-card__title">Office Location</h4>
                <div className="row">
                  <div className={` d-flex justify-content-center align-content-center ${inView ? "animate-left-to-right" : ""}`}>
                    <div className="text-start">

              <p className="contact-card__text">
                <span>PK</span> Shahrah-e-Faisal, Karachi
              </p>
              <p className="contact-card__text">
                <span>UK</span> London Business Hub
              </p>
              <p className="contact-card__text">
                <span>UAE</span> Dubai Tech Zone
              </p>
                  
                    </div>
                  </div>
               </div>


              <div className="contact-card__footer">
                Visit Our Offices
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
      </>

)
}
export default ContactUsCard;


