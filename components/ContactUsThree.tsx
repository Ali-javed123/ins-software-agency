const ContactUsThree = () => {

    return (
    <section className="contact-two">
  <div className="container">
    <div className="row"> 
      <div className="col-lg-4">
        <div className="contact-two__left">
          <div className="contact-two__thumb wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
            <img src="/assets/images/resources/why-choos-us-3-1.png" alt="ostech image" />
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact-two__right wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
          <div className="contact-two__top">
            <div className="contact-two__top__content">
              <div className="sec-title sec-title--three text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="d-flex align-items-center justify-content-center">
                  <img src="/assets/images/shapes/sec-title-s-2.png" alt="Contact with us" className="sec-title__img" />
                  <h6 className="sec-title__tagline">Contact with us</h6>
                </div>
                <h3 className="sec-title__title">Feel Free to Write us</h3>
              </div>
            </div>
          </div>
          <div className="contact-two__content">
            <div className="contact-two__form__inner">
              <form className="contact-two__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms" action="#">
                <div className="form-one__group">
                  <div className="form-one__control form-one__control--full">
                    <input type="text" name="name" placeholder="Your Name" />
                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                    <input type="email" name="email" placeholder="Email Address" />
                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                    <textarea name="message" placeholder="Write a Message" defaultValue={""} />
                  </div>{/* /.form-one__control */}
                  <div className="form-one__control form-one__control--full">
                    <button type="submit" className="ostech-btn">Send a Message</button>
                  </div>{/* /.form-one__control */}
                </div>{/* /.form-one__group */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-two__shape">
    <img src="/assets/images/shapes/benefit-shape-1-1.png" alt="daf" />
  </div>
</section>

    )
}
export default ContactUsThree;