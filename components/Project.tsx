import React from 'react'

 const Project = () => {
  return (
    <>
{/* Feature section Start */}
<section className="project-one">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
          <div className="d-flex align-items-center justify-content-center">
            <img src="assets/images/shapes/sec-title-s-1.png" alt="Latest Project" className="sec-title__img" />
            <h6 className="sec-title__tagline">Latest Project</h6>
          </div>
          <h3 className="sec-title__title">Our Recently Completed <br /> Latest Projects</h3>
        </div>
      </div>
    </div>
    <div className="horizontal-project">
      <div className="project-one__item choice">
        <div className="project-one__item__bg" style={{backgroundImage: 'url(assets/images/about/project-bg-1-1.png)'}} />
        <div className="project-one__item__inner">
          <div className="project-one__thumb">
            <img src="assets/images/about/project-1-1.png" alt="ostech image" />
          </div>
          <div className="project-one__content">
            <h3 className="project-one__content__title">UI/UX Development</h3>
            <p className="project-one__content__text">Technology</p>
            <a href="contact.html" className="project-one__content__btn"><i className="icon-right-arrow" /></a>
          </div>
        </div>
      </div>
      <div className="project-one__item choice expand">
        <div className="project-one__item__bg" style={{backgroundImage: 'url(assets/images/about/project-bg-1-2.png)'}} />
        <div className="project-one__item__inner">
          <div className="project-one__thumb">
            <img src="assets/images/about/project-1-2.png" alt="ostech image" />
          </div>
          <div className="project-one__content">
            <h3 className="project-one__content__title">Digital Marketing</h3>
            <p className="project-one__content__text">Marketing</p>
            <a href="contact.html" className="project-one__content__btn"><i className="icon-right-arrow" /></a>
          </div>
        </div>
      </div>
      <div className="project-one__item choice">
        <div className="project-one__item__bg" style={{backgroundImage: 'url(assets/images/about/project-bg-1-3.png)'}} />
        <div className="project-one__item__inner">
          <div className="project-one__thumb">
            <img src="assets/images/about/project-1-3.png" alt="ostech image" />
          </div>
          <div className="project-one__content">
            <h3 className="project-one__content__title">Cyber Security</h3>
            <p className="project-one__content__text">Security</p>
            <a href="contact.html" className="project-one__content__btn"><i className="icon-right-arrow" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Feature section End */}

    </>
  )
}

export default Project