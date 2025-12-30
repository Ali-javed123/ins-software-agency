import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
     <header className="main-header main-header--one sticky-header sticky-header--normal d-none d-lg-block">
  <div className="container-fluid">
    <div className="main-header__inner">
      <div className="main-header__logo logo-ostech">
              <Link href="/">
                            <img src="/assets/images/logos.png" alt="Ostech HTML" width="226px"/>

            {/* <span className='mylogo'>InS Tech Lab</span> */}
        </Link>
      </div>
      <nav className="main-header__nav main-menu">
        <ul className="main-menu__list">
          {/*  */}
          <li>
            <Link href="/">Home</Link>
                </li>


                 <li>
            <Link href="/aboutus">About us</Link>
          </li>

                
                <li>
            <Link href="/services">Services</Link>
          </li>
       
          {/* <li className="dropdown">
            <a href="#">Services</a>
            <ul className="sub-menu">
              <li><a href="services.html">Service</a></li>
              <li><a href="services-carousel.html">Services Carousel</a></li>
              <li><a href="service-d-development.html">Development</a></li>
              <li><a href="service-d-design.html">UI/UX Designing</a></li>
              <li><a href="service-d-marketing.html">Digital Marketing</a></li>
              <li><a href="service-d-analysis.html">Data Analysis</a></li>
              <li><a href="service-d-security.html">Cyber Security</a></li>
              <li><a href="service-experience.html">Digital Experience</a></li>
            </ul>
          </li> */}
          {/* <li className="dropdown">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li><a href="team.html">Team</a></li>
              <li><a href="team-carousel.html">Team Carousel</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="packages.html">Packages</a></li>
              <li><a href="packages-carousel.html">Packages Carousel</a></li>
              <li><a href="project.html">Project</a></li>
              <li><a href="project-carousel.html">Project Carousel</a></li>
              <li><a href="project-details.html">Project Details</a></li>
              <li className="dropdown"><a href="gallery.html">Gallery</a>
                <ul className="sub-menu">
                  <li><a href="gallery-grid.html">Gallery Grid</a></li>
                  <li><a href="gallery-filter.html">Gallery filter</a></li>
                  <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                </ul>
              </li>
              <li><a href="faq.html">FAQs</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="404.html">404 Error</a></li>
            </ul>
          </li> */}
          {/* <li className="dropdown">
            <a href="#">Shop</a>
            <ul className="sub-menu">
              <li className="dropdown"><a href="#">Products</a>
                <ul className="sub-menu">
                  <li><a href="products.html">No Sidebar</a></li>
                  <li><a href="products-left.html">Left Sidebar</a></li>
                  <li><a href="products-right.html">Right Sidebar</a></li>
                </ul>
              </li>
              <li><a href="products-carousel.html">Products Carousel</a></li>
              <li><a href="product-details.html">Product Details</a></li>
              <li><a href="cart.html">Cart</a></li>
              <li><a href="checkout.html">Checkout</a></li>
            </ul>
          </li> */}
          <li className="dropdown">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li className="dropdown"><a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><a href="blog-grid.html">No Sidebar</a></li>
                  <li><a href="blog-grid-left.html">Left Sidebar</a></li>
                  <li><a href="blog-grid-right.html">Right Sidebar</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#">Blog List</a>
                <ul className="sub-menu">
                  <li><a href="blog-list.html">No Sidebar</a></li>
                  <li><a href="blog-list-left.html">Left Sidebar</a></li>
                  <li><a href="blog-list-right.html">Right Sidebar</a></li>
                </ul>
              </li>
              <li><a href="blog-carousel.html">Blog Carousel</a></li>
              <li className="dropdown"><a href="#">Blog Details</a>
                <ul className="sub-menu">
                  <li><a href="blog-details.html">No Sidebar</a></li>
                  <li><a href="blog-details-left.html">Left Sidebar</a></li>
                  <li><a href="blog-details-right.html">Right Sidebar</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="main-header__right">
        <a href="tel:+92-3800-8060" className="main-header__right__call">
          <div className="main-header__right__icon">
            <i className="icon-call" />
          </div>
          <div className="main-header__right__content">
            <span className="main-header__right__text">Call to Anytime</span>
            <h6 className="main-header__right__number">+92 3800 8060</h6>
          </div>
        </a>
        <div className="main-header__right__info">
          <a href="#" className="search-toggler main-header__right__info__item"><i className="icon-search" aria-hidden="true" /><span className="sr-only">Search</span></a>
          <a href="cart.html" className="main-header__right__info__item">
            {/* <i className="icon-trolley-cart" aria-hidden="true" /> */}
            <span className="sr-only">Search</span></a>
        </div>
        <div className="mobile-nav__btn mobile-nav__toggler">
          <span /><span /><span />
        </div>
      </div>
    </div>
  </div>
</header>
<nav className="navbar navbar-expand-lg d-lg-none navbar-dark bg-dark py-3">
  <div className="container-fluid">
    <div className="d-flex justify-content-between align-items-center w-100">
      {/* Logo on left */}
      <div className="d-flex align-items-center">
        <Link className="navbar-brand" href="/">
          <img src="/assets/images/logos.png" alt="Ostech HTML" width="160px" />
        </Link>
      </div>
      
      {/* Toggler button on right */}
      <div>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>

    {/* Collapsible menu - centered */}
    <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
      <div className="navbar-nav text-center">
        <Link className="nav-link py-2" href="/">Home</Link>
        <Link className="nav-link py-2" href="/aboutus">About us</Link>
        <Link className="nav-link py-2" href="/services">Services</Link>
        <Link className="nav-link py-2" href="/contactus">Contact Us</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  </div>
</nav>
 
    </>
  )
}

export default Navbar
