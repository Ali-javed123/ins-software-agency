import { FaPhoneFlip } from "react-icons/fa6";

const ContactUsCard=()=>{
    return (
<section className="feature-one">
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
             <i className="fa-regular fa-message"/>
            </div>
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
          <div className="feature-one__item__thumb">
            <img src="assets/images/resources/feature-1-2.png" alt="ostech image" />
          </div>
        </div>
      </div>



   
    </div>
  </div>
</section>

)
}
export default ContactUsCard;