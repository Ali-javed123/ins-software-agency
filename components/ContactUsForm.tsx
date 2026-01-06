"use client"
import React from 'react'
import { useInView } from "react-intersection-observer";

const ContactUsForm = () => {
  return (
    <>
 <section className="contact-one"  style={{marginBottom:"120px"}}>
  <div className="container">
    <div className="row gutter-y-30">

      <div className="col-lg-6 text-center">
        <div className="contact-one__right">
          <div className="contact-one__top">
            <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                {/* <img src="/assets/images/shapes/sec-title-s-1.png" alt="Contact with us" className="sec-title__img" /> */}
                <h6 className="sec-title__tagline">Contact with us</h6>
              </div>
              <h3 className="sec-title__title">Feel Free to Write us Anytime</h3>
            </div>
          </div>
          <form className="contact-one__form contact-form-validated form-one background-base wow fadeInUp" data-wow-duration="1500ms" action="#">
            <div className="form-one__group">
              <div className="form-one__control">
                <input type="text" name="name" placeholder="Your Name" />
              </div>{/* /.form-one__control form-one__control__full */}
              <div className="form-one__control">
                <input type="email" name="email" placeholder="Email Address" />
              </div>{/* /.form-one__control form-one__control__full */}
              <div className="form-one__control form-one__control">
                <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" required />
              </div>{/* /.form-one__control form-one__control__full */}
              <div className="form-one__control form-one__control">
                <input type="text" name="subject" placeholder="Subject" />
              </div>{/* /.form-one__control form-one__control__full */}
              <div className="form-one__control form-one__control--full">
                <textarea name="message" placeholder="Write a Message" defaultValue={""} />
              </div>{/* /.form-one__control */}
              <div className="form-one__control form-one__control--full">
                <button type="submit" className="animated-btn">Send a Message</button>
              </div>{/* /.form-one__control */}
            </div>{/* /.form-one__group */}
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactUsForm
