"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import jQuery and OwlCarousel
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
  loading: () => <div className="text-center py-5">Loading slider...</div>,
});

// Dynamic import for jQuery
const loadJQuery = async () => {
  if (typeof window !== 'undefined') {
    // Import jQuery dynamically
    const jQuery = (await import('jquery')).default;
    window.$ = window.jQuery = jQuery;
  }
};

const Testimonialtwo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isJQueryLoaded, setIsJQueryLoaded] = useState(false);

  // Initialize jQuery only once after component mounts
  useEffect(() => {
    // Set mounted state in the next tick to avoid cascading renders
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Load jQuery after component is mounted
  useEffect(() => {
    if (isMounted && !isJQueryLoaded) {
      const initializeJQuery = async () => {
        try {
          await loadJQuery();
          setIsJQueryLoaded(true);
        } catch (error) {
          console.error('Failed to load jQuery:', error);
        }
      };
      
      initializeJQuery();
    }
  }, [isMounted, isJQueryLoaded]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-5.jpg",
    },
    {
      id: 2,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Leslie Alexander",
      role: "Customer",
      image: "/assets/images/resources/testi-1-6.jpg",
    },
    {
      id: 3,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-1.jpg",
    },
    {
      id: 4,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-2.jpg",
    },
    {
      id: 5,
      rating: 5,
      text: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
      author: "Ronald Richards",
      role: "Customer",
      image: "/assets/images/resources/testi-1-3.jpg",
    },
  ];

  // Author images for the bottom section
  const authorImages = [
    "/assets/images/resources/testi-1-1.jpg",
    "/assets/images/resources/testi-1-2.jpg",
    "/assets/images/resources/testi-1-3.jpg",
    "/assets/images/resources/testi-1-4.jpg",
  ];

  // Owl Carousel options
  const carouselOptions = {
    items: 1,
    margin: 30,
    smartSpeed: 700,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  // Function to render stars
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <i key={index} className="icon-star"></i>
    ));
  };

  return (
    <section className="testimonial-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="d-flex align-items-center justify-content-center">
                <img 
                  src="/assets/images/shapes/sec-title-s-1.png" 
                  alt="Testimonial" 
                  className="sec-title__img"
                />
                <h6 className="sec-title__tagline">Testimonial</h6>
              </div>
              <h3 className="sec-title__title">What Customers are <br /> Saying?</h3>
            </div>
          </div>
        </div>

        {/* Owl Carousel Slider */}
        <div className="testimonial-two__carousel ostech-owl__carousel owl-theme">
          {isMounted && isJQueryLoaded ? (
            <OwlCarousel className="owl-theme" {...carouselOptions}>
              {testimonials.map((testimonial) => (
                <div className="item" key={testimonial.id}>
                  <div className="testimonial-two__item">
                    <div className="testimonial-two__item__star">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-two__item__text">{testimonial.text}</p>
                    <div className="testimonial-two__item__author">
                      <div className="testimonial-two__item__author__thumb">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                        //   onError={(e) => {
                        //     e.target.src = "https://via.placeholder.com/60x60?text=User";
                        //   }}
                        />
                      </div>
                      <div className="testimonial-two__item__author__content">
                        <h5 className="testimonial-two__item__author__title">{testimonial.author}</h5>
                        <span className="testimonial-two__item__author__deg">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="testimonial-two__item__quite">
                      <i className="icon-quite"></i>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                      <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <div className="carousel-loading">
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading carousel...</span>
                </div>
                <p className="mt-3">Loading testimonials...</p>
              </div>
            </div>
          )}
        </div>

        {/* Author Images Section */}
        <div className="testimonial-two__author">
          {authorImages.map((image, index) => (
            <div 
              key={index}
              className={`testimonial-two__author__image testimonial-two__author__image--${['one', 'two', 'three', 'fore'][index]}`}
            >
              <img 
                src={image} 
                alt={`Customer ${index + 1}`}
                // onError={(e) => {
                //   e.target.src = "https://via.placeholder.com/60x60?text=User";
                // }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonialtwo;