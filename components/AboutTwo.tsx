import React from 'react'

const AboutTwo = () => {
  return (
    <>
{/* About section Start */}
<section className="about-two">
  <div className="container">
    <div className="row ">
      <div className="col-lg-6">
        <div className="about-two__left wow fadeInLeft" data-wow-delay="300ms">
          <div className="about-two__thumb">
            <div className="about-two__thumb__item about-two__thumb__item--one">
              <img loading='lazy'
              decoding="async" src="/assets/images/about/about-2-1.png" alt="ostech image" />
            </div>
            <div className="about-two__thumb__item about-two__thumb__item--two">
              <img loading='lazy'
              decoding="async" src="/assets/images/about/about-2-2.png" alt="ostech image" />
            </div>
            <div className="about-two__thumb__award">
              <i className="icon-award" />
            </div>
            <div className="about-two__thumb__icon">
              <div className="about-two__thumb__icon__box">
                <img loading='lazy'
              decoding="async" src="/assets/images/tech.png" width={92} alt="ostech logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
        <div className="about-two__right">
          <div className="about-two__top">
            <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                <img loading='lazy'
              decoding="async" src="/assets/images/shapes/sec-title-s-1.png" alt="About Us" className="sec-title__img" />
                <h6 className="sec-title__tagline">About Us</h6>
              </div>
              <h3 className="sec-title__title">Provide the Best Easy Solution for Your IT Problem</h3>
            </div>
            <p className="about-two__top__text">There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
          </div>
          <div className="about-two__ostech__item" style={{backgroundImage: 'url(/assets/images/about/about-bg-2-1.png)'}}>
            <div className="about-two__ostech__item__inner">
              <div className="about-two__ostech__item__icon">
                <i className="icon-solution-1" />
              </div>
              <div className="about-two__ostech__item__content">
                <h4 className="about-two__ostech__item__title"><a href="about.html">Deliver Perfect Solution</a></h4>
                <p className="about-two__ostech__item__text">There are inmaniy variations passages of Lorem Ipsum available, but the majority </p>
              </div>
            </div>
          </div>
          <div className="about-two__feature">
            <div className="about-two__feature__item">
              <div className="about-two__feature__top">
                <div className="about-two__feature__top__icon">
                  <i className="icon-nanotechnology-1" />
                </div>
                <h4 className="about-two__feature__top__title">Manage Tech<br />Services</h4>
              </div>
              <p className="about-two__feature__item__text">There are many variations of passages of Lorem</p>
            </div>
            <div className="about-two__feature__item">
              <div className="about-two__feature__top">
                <div className="about-two__feature__top__icon">
                  <i className="icon-it-service-1" />
                </div>
                <h4 className="about-two__feature__top__title">It Consulting <br />Solution</h4>
              </div>
              <p className="about-two__feature__item__text">There are many variations of passages of Lorem</p>
            </div>
          </div>
          <div className="about-two__btn">
            <a href="blog-details.html" className="ostech-btn">More Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About section End */}
 
    </>
  )
}

export default AboutTwo
