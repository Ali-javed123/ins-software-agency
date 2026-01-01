import React from 'react'

const About = () => {
  return (
    <>
       {/* About section Start */}
<section className="about-one">
  <div className="container">
    <div className="row gutter-y-30 gutter-x-0" >
      <div className="col-lg-6">
        <div className="about-one__left wow fadeInLeft" data-wow-delay="500ms">
          <div className="about-one__thumb">
            <div className="about-one__thumb__item">
              <img loading='lazy'
              decoding="async" src="/assets/images/about/about-1-1.png" alt="ostech image" />
            </div>
            <div className="about-one__thumb__item about-one__thumb__item--two">
              <img loading='lazy'
              decoding="async" src="/assets/images/about/about-1-2.png" alt="ostech image" />
            </div>
          </div>
          <div className="about-one__funfact__item count-box">
            <div className="about-one__funfact__item__icon">
              <i className="icon-project-management-1" />
            </div>
            <h2 className="about-one__funfact__item__count">
              <span className="count-text" data-stop={30} data-speed={1500} />
              <span>+</span>
            </h2>
            <p className="about-one__funfact__item__text">Year experience</p>
          </div>
          <div className="about-one__shape-two">
            {/* <img src="/assets/images/shapes/about-shape-1-2.png" alt="About Shape" /> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-one__right">
          <div className="about-one__top wow fadeInUp" data-wow-delay="500ms">
            <div className="sec-title  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-start">
                <img loading='lazy'
              decoding="async" src="/assets/images/shapes/sec-title-s-1.png" alt="About Us" className="sec-title__img" />
                <h6 className="sec-title__tagline">About Us</h6>
              </div>
              <h3 className="sec-title__title">Provide the Best Easy Solution for Your IT Problem</h3>
            </div>
            <p className="about-one__top__text">There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos; t look even slightly believable.</p>
          </div>
          <div className="about-one__feature">
            <div className="about-one__feature__item wow fadeInUp" data-wow-delay="500ms">
              <div className="about-one__feature__inner">
                <div className="about-one__feature__item__icon">
                  <div className="about-one__feature__item__icon__item">
                    <i className="icon-nanotechnology-1" />
                  </div>
                </div>
                <div className="about-one__feature__item__content">
                  <h4 className="about-one__feature__item__title"><a href="about.html">Manage Tech Services</a></h4>
                  <p className="about-one__feature__item__text">There are in many passages of Lorem Ipsum available</p>
                </div>
                <div className="about-one__feature__item__thumb">
                  <img src="/assets/images/about/about-s-1-1.png" alt="ostech image" />
                </div>
              </div>
            </div>
            <div className="about-one__feature__item wow fadeInUp" data-wow-delay="500ms">
              <div className="about-one__feature__inner">
                <div className="about-one__feature__item__icon">
                  <div className="about-one__feature__item__icon__item">
                    <i className="icon-it-service-1" />
                  </div>
                </div>
                <div className="about-one__feature__item__content">
                  <h4 className="about-one__feature__item__title"><a href="about.html">It Consulting</a></h4>
                  <p className="about-one__feature__item__text">There are in many passages of Lorem Ipsum available</p>
                </div>
                <div className="about-one__feature__item__thumb">
                  <img src="/assets/images/about/about-s-1-2.png" alt="ostech image" />
                </div>
              </div>
            </div>
          </div>
          <ul className="about-one__list list-unstyled wow fadeInUp" data-wow-delay="500ms">
            <li className="about-one__list__item"><i className="fas fa-check-circle" />Many variations of passages of lorem ipsum</li>
            <li className="about-one__list__item"><i className="fas fa-check-circle" />Many variations of passages of lorem</li>
            <li className="about-one__list__item"><i className="fas fa-check-circle" />Expert many variations teacher</li>
          </ul>
          <div className="about-one__link wow fadeInUp" data-wow-delay="500ms">
            <a href="about.html" className="about-one__link__btn ostech-btn ostech-btn--secondary">Discover More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-one__shape">
    <img src="/assets/images/shapes/about-shape-1-1.png" alt="About Shape" />
  </div>
</section>
{/* About section End */}

    </>
  )
}

export default About
