import React from 'react'

const Banafits = () => {
  return (
    <>
 {/* Benefit section Start */}
<section className="benefit-one">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="benefit-one__left">
          <div className="benefit-one__thumb  wow fadeInLeft" data-wow-delay="700ms">
            <img src="/assets/images/resources/benefit-1-1.png" alt="ostech image" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="benefit-one__right">
          <div className="benefit-one__top">
            <div className="sec-title sec-title--two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                {/* <img src="assets/images/shapes/sec-title-s-1.png" alt="Our Benefits" className="sec-title__img" /> */}
                <h6 className="sec-title__tagline">Our Benefits</h6>
              </div>
              <h3 className="sec-title__title">We’re The Stand Out Expert In Tech Business</h3>
            </div>
          </div>
          <div className="benefit-one__feature">
            <div className="benefit-one__feature__item  wow fadeInUp" data-wow-delay="500ms">
              <div className="benefit-one__feature__item__bg" style={{backgroundImage: 'url(assets/images/resources/benefit-s-1-1.png)'}} />
              <div className=" benefit-one__feature__item__content">
                <div className="benefit-one__feature__icon">
                  <i className="icon-solution-1" />
                </div>
                <h4 className="benefit-one__feature__item__title"><a href="about.html">Deliver Perfect Solution</a></h4>
                <p className="benefit-one__feature__item__text">There are in many passages of Lorem Ipsum available.</p>
              </div>
            </div>
            <div className="benefit-one__feature__item  wow fadeInUp" data-wow-delay="700ms">
              <div className="benefit-one__feature__item__bg" style={{backgroundImage: 'url(assets/images/resources/benefit-s-1-2.png)'}} />
              <div className=" benefit-one__feature__item__content">
                <div className="benefit-one__feature__icon">
                  <i className="icon-interactive-1" />
                </div>
                <h4 className="benefit-one__feature__item__title"><a href="about.html">Latest AI Technology</a></h4>
                <p className="benefit-one__feature__item__text">There are in many passages of Lorem Ipsum available.</p>
              </div>
            </div>
          </div>
          <ul className="list-unstyled benefit-one__list  wow fadeInUp" data-wow-delay="500ms">
            <li className="benefit-one__list__item"><i className="fas fa-check-circle" /> Many Variations of Passages of Lorem Ipsum</li>
            <li className="benefit-one__list__item"><i className="fas fa-check-circle" /> Many Variations of Passages of Lorem</li>
            <li className="benefit-one__list__item"><i className="fas fa-check-circle" /> Expert Many Variations Teacher</li>
          </ul>
        </div>
        <div className="benefit-one__bottom  wow fadeInUp" data-wow-delay="500ms">
          <div className="benefit-one__bottom__content">
            <h3 className="benefit-one__bottom__content__text">Your Trusted IT Service Partner</h3>
            <a href="#" className="ostech-btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="benefit-one__shape">
    <img loading='lazy'
              decoding="async" src="/assets/images/shapes/benefit-shape-1-1.png" alt="benefit shape" />
  </div>
</section>
{/* Benefit section End */}

    </>
  )
}

export default Banafits
