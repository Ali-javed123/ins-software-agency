import React from 'react'

 const ServicesTwo = () => {
  return (
      <>
      {/* Service section Start */}
<section className="service-page service-page--page">
  <div className="service-page__bg" style={{background: 'url(/assets/images/shapes/service-2-1.png)'}} />
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
          <div className="d-flex align-items-center justify-content-center">
            <img src="/assets/images/shapes/sec-title-s-1.png" alt="Service" className="sec-title__img" />
            <h6 className="sec-title__tagline">Service</h6>
          </div>
          <h3 className="sec-title__title">Services We’re Providing to <br /> Our Customers</h3>
        </div>
      </div>
    </div>
    <div className="row gutter-y-30">
      <div className="col-md-6 col-lg-3">
        <div className="service-card-two  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
          <div className="service-card-two__inner">
            <div className="service-card-two__content">
              <h4 className="service-card-two__title"><a href="service-d-development.html">Product <br /> Development</a></h4>
              <div className="service-card-two__icon">
                <i className="icon-software-1" />
              </div>
            </div>
            <div className="service-card-two__thumb">
              <img src="/assets/images/service/service-1-1.png" alt="ostech image" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="service-card-two  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
          <div className="service-card-two__inner">
            <div className="service-card-two__content">
              <h4 className="service-card-two__title"><a href="service-d-design.html">UI/UX <br /> Designing</a></h4>
              <div className="service-card-two__icon">
                <i className="icon-layer-1" />
              </div>
            </div>
            <div className="service-card-two__thumb">
              <img src="/assets/images/service/service-1-2.png" alt="ostech image" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="service-card-two  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
          <div className="service-card-two__inner">
            <div className="service-card-two__content">
              <h4 className="service-card-two__title"><a href="service-d-marketing.html">Digital <br /> Marketing</a></h4>
              <div className="service-card-two__icon">
                <i className="icon-digital-marketing-1" />
              </div>
            </div>
            <div className="service-card-two__thumb">
              <img src="/assets/images/service/service-1-3.png" alt="ostech image" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="service-card-two  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1100ms">
          <div className="service-card-two__inner">
            <div className="service-card-two__content">
              <h4 className="service-card-two__title"><a href="service-d-analysis.html">Data <br /> Analysis</a></h4>
              <div className="service-card-two__icon">
                <i className="icon-analysis-1" />
              </div>
            </div>
            <div className="service-card-two__thumb">
              <img src="/assets/images/service/service-1-4.png" alt="ostech image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Service section End */}

      </>
  )
}

export default ServicesTwo;
