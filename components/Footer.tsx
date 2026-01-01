import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <section className="cta-two">
  <div className="container">
    <div className="row gutter-y-30">
      <div className="col-lg-6">
        <div className="cta-two__item wow fadeInUp" data-wow-delay="300ms">
          <div className="cta-two__item__icon">
            <i className="icon-shield-2" />
          </div>
          <div className="cta-two__item__content">
            <h3 className="cta-two__item__title">Internet &amp; Cyber Security Solutions</h3>
            <Link href="#" className=" ostech-two-btn">Discover More</Link>
          </div>
          {/* <div className="cta-two__item__shape">
            <img src="assets/images/shapes/cta-shape.png" alt="ostech image" />
          </div> */}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cta-two__item wow fadeInUp" data-wow-delay="600ms">
          <div className="cta-two__item__icon">
            <i className="icon-quality-2" />
          </div>
          <div className="cta-two__item__content">
            <h3 className="cta-two__item__title">Expert IT <br /> Specialists Available</h3>
            <Link href="#" className=" ostech-two-btn">Discover More</Link>
          </div>
          <div className="cta-two__item__shape">
            <img src="/assets/images/shapes/cta-shape.png" alt="ostech image" />
          </div>
        </div>
      </div>
    </div>
  </div>{/* /.container */}
</section>

     <footer className="main-footer">
  <div className="main-footer__top">
    <div className="container">
      <div className="main-footer__top__inner">
        <div className="main-footer__top__logo">
          <Link href="/" className="footer__logo ostech-logo">
            <img src="/assets/images/logos.png" width="226px" alt="Ostech HTML Template" />
          </Link>
        </div>
        <div className="main-footer__top__social">
          <a href="https://facebook.com/"><i className="icon-facebook-f" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
          <a href="https://twitter.com/"><i className="icon-x-twitter" aria-hidden="true" /> <span className="sr-only">Twitter</span></a>
          <a href="https://pinterest.com/"><i className="icon-pinterest-p" aria-hidden="true" /><span className="sr-only">Pinterest</span></a>
          <a href="https://instagram.com/"><i className="icon-youtube" aria-hidden="true" /><span className="sr-only">Instagram</span></a>
        </div>
      </div>
    </div>
  </div>
  <div className="main-footer__middle">
    <div className="container">
      <div className="row">
        
        <div className="col-md-6 col-xl-3">
          <div className="footer-widget footer-widget--links">
            <h2 className="footer-widget__title">Page</h2>
            <ul className="list-unstyled footer-widget__links">
              <li className="footer-widget__links__item"><Link href="/">Home</Link></li>
              <li className="footer-widget__links__item"><Link href="/aboutus">Aboutus</Link></li>
              <li className="footer-widget__links__item"><Link href="/services">Services</Link></li>
              <li className="footer-widget__links__item"><Link href="/contactus">Contactus</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Contact</Link></li>
            </ul>
          </div>
              </div>
              <div className="col-md-6 col-xl-3">
          <div className="footer-widget footer-widget--links">
            <h2 className="footer-widget__title">Enterprise Services</h2>
            <ul className="list-unstyled footer-widget__links">
              <li className="footer-widget__links__item"><Link href="#">Fintact Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Ecommerce Service</Link></li>
              <li className="footer-widget__links__item"><Link href="/services">ERP Service</Link></li>
              <li className="footer-widget__links__item"><Link href="/contactus">Healthcare Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Education Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">On-Demand Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">SAAS  Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Automation  Service</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Real Estate  Service</Link></li>
            </ul>
          </div>
        </div>
              <div className="col-md-6 col-xl-3">
          <div className="footer-widget footer-widget--links">
            <h2 className="footer-widget__title">Core Services</h2>
            <ul className="list-unstyled footer-widget__links">
              <li className="footer-widget__links__item"><Link href="#">Web & App Developement</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Backend Developement</Link></li>
              <li className="footer-widget__links__item"><Link href="/services">Services</Link></li>
              <li className="footer-widget__links__item"><Link href="/contactus">Contact us</Link></li>
              <li className="footer-widget__links__item"><Link href="#">UI/UX Designing</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Digital Marketing</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Data  Analysis</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Software  Development</Link></li>
              <li className="footer-widget__links__item"><Link href="#">IT  Staff  Augmentation</Link></li>
              <li className="footer-widget__links__item"><Link href="#">Web  Development</Link></li>
            </ul>
          </div>
        </div>
        {/* <div className="col-md-6 col-xl-3">
          <div className="footer-widget footer-widget--instagram">
            <h2 className="footer-widget__title">Gallery</h2>
            <div className="footer-widget__instagram">
              <a href="/assets/images/instagram/1-1.jpg" className="img-popup">
                <img src="/assets/images/instagram/1.jpg" alt="ostech image" />
              </a>
              <a href="/assets/images/instagram/1-2.jpg" className="img-popup">
                <img src="/assets/images/instagram/2.jpg" alt="ostech image" />
              </a>
              <a href="/assets/images/instagram/1-3.jpg" className="img-popup">
                <img src="/assets/images/instagram/3.jpg" alt="ostech image" />
              </a>
              <a href="/assets/images/instagram/1-4.jpg" className="img-popup">
                <img src="/assets/images/instagram/4.jpg" alt="ostech image" />
              </a>
              <a href="/assets/images/instagram/1-5.jpg" className="img-popup">
                <img src="/assets/images/instagram/5.jpg" alt="ostech image" />
              </a>
              <a href="/assets/images/instagram/1-6.jpg" className="img-popup">
                <img src="/assets/images/instagram/6.jpg" alt="ostech image" />
              </a>
            </div>
          </div>
        </div> */}
        <div className="col-md-6 col-xl-3">
          <div className="footer-widget footer-widget--contact">
            <h2 className="footer-widget__title">contact</h2>
            <ul className="list-unstyled footer-widget__contact">
              <li className="footer-widget__contact__item">
                <div className="footer-widget__contact__icon">
                  <i className="icon-call" />
                </div>
                <div className="footer-widget__contact__inner">
                  <a href="tel:+92-3800-8060" className="footer-widget__contact__text">+92 3800 8060</a>
                  <a href="tel:+21-9555-0114" className="footer-widget__contact__text">+21 9555-0114</a>
                </div>
              </li>
              <li className="footer-widget__contact__item">
                <div className="footer-widget__contact__icon">
                  <i className="icon-Earth" />
                </div>
                <div className="footer-widget__contact__inner">
                  <a href="https://themeforest.net/user/bracket-web" className="footer-widget__contact__text">mitc@example.com</a>
                  <a href="https://themeforest.net/user/bracket-web" className="footer-widget__contact__text">www.website.com</a>
                </div>
              </li>
              <li className="footer-widget__contact__item">
                <div className="footer-widget__contact__icon">
                  <i className="icon-Pin" />
                </div>
                <div className="footer-widget__contact__inner">
                  <p className="footer-widget__contact__text">6391 Elgin st. delaware <br /> new york. usa</p>
                </div>
              </li>
            </ul>
            <div className="footer-widget__thumb">
              <img src="/assets/images/resources/footer-1-1.png" alt="ostech image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="main-footer__bottom">
    <div className="container">
      <div className="main-footer__bottom__inner">
        <p className="main-footer__copyright">  © InS Software Agency 2026 <span className="dynamic-year" /> All right reserved </p>
      </div>
    </div>
  </div>
  <div className="main-footer__shape">
    <img src="/assets/images/shapes/footer-shape.png" alt="sd" />
  </div>
  <div className="main-footer__earth">
    <img src="/assets/images/shapes/earth-footer.png" alt="sd" />
  </div>
</footer>
 
    </>
  )
}

export default Footer
