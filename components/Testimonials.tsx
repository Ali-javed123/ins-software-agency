"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// owl-carousel is browser-only
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// ================= MAIN SLIDER OPTIONS =================
const mainOptions = {
  items: 1,
  margin: 10,
  smartSpeed: 700,
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  URLhashListener: false,
  navText: [
    '<span class="icon-arrow-left"></span>',
    '<span class="icon-arrow-right"></span>',
  ],
};

// ================= THUMB SLIDER OPTIONS =================
const thumbOptions = {
  items: 3,
  margin: 10,
  smartSpeed: 700,
  loop: true,
  autoplay: true,
  center: true,
  dots: false,
  URLhashListener: false,
  navText: [
    '<span class="icon-arrow-left"></span>',
    '<span class="icon-arrow"></span>',
  ],
  responsive: {
    0: { items: 3 },
    500: { items: 3 },
  },
};

export default function TestimonialsOne() {
  return (
    <section className="testimonials-one">
      <div className="container">

        {/* ================= MAIN TESTIMONIAL SLIDER ================= */}
        <OwlCarousel
          className="testimonials-one__carousel ostech-owl__carousel owl-theme"
          {...mainOptions}
        >
          {/* ITEM 1 */}
          <div className="testimonials-one__item" data-hash="item1">
            <div className="testimonials-one__item__inner">
              <div
                className="testimonials-one__item__bg"
                style={{
                  backgroundImage:
                    "url(/assets/images/shapes/testimonial-1-1.png)",
                }}
              />
              <div className="testimonials-one__item__quite">
                <i className="icon-quite"></i>
              </div>

              <div className="testimonials-one__item__star">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>

              <p className="testimonials-one__item__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>

              <div className="testimonials-one__item__author">
                <h5 className="testimonials-one__item__name">
                  Theresa Webb
                </h5>
                <p className="testimonials-one__item__deg">Customer</p>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="testimonials-one__item" data-hash="item2">
            <div className="testimonials-one__item__inner">
              <div
                className="testimonials-one__item__bg"
                style={{
                  backgroundImage:
                    "url(/assets/images/shapes/testimonial-1-1.png)",
                }}
              />
              <div className="testimonials-one__item__quite">
                <i className="icon-quite"></i>
              </div>

              <div className="testimonials-one__item__star">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>

              <p className="testimonials-one__item__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>

              <div className="testimonials-one__item__author">
                <h5 className="testimonials-one__item__name">
                  Theresa Webb
                </h5>
                <p className="testimonials-one__item__deg">Customer</p>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="testimonials-one__item" data-hash="item3">
            <div className="testimonials-one__item__inner">
              <div
                className="testimonials-one__item__bg"
                style={{
                  backgroundImage:
                    "url(/assets/images/shapes/testimonial-1-1.png)",
                }}
              />
              <div className="testimonials-one__item__quite">
                <i className="icon-quite"></i>
              </div>

              <div className="testimonials-one__item__star">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>

              <p className="testimonials-one__item__text">
                There are many variations of passages of Lorem Ipsum available.
              </p>

              <div className="testimonials-one__item__author">
                <h5 className="testimonials-one__item__name">
                  Theresa Webb
                </h5>
                <p className="testimonials-one__item__deg">Customer</p>
              </div>
            </div>
          </div>
        </OwlCarousel>

        {/* ================= THUMB SLIDER ================= */}
        <div className="carousel-thumb__two">
          <OwlCarousel
            className="testimonials-one__carousel-thumb ostech-owl__carousel owl-theme"
            {...thumbOptions}
          >
            <Link href="#item1" className="item" data-hash="item1">
              <span className="testimonials-one__meta-thumb">
                <img
                  src="/assets/images/resources/testi-1-4.jpg"
                  alt="ostech"
                />
              </span>
            </Link>

            <Link href="#item2" className="item" data-hash="item2">
              <span className="testimonials-one__meta-thumb">
                <img
                  src="/assets/images/resources/testi-1-3.jpg"
                  alt="ostech"
                />
              </span>
            </Link>

            <Link href="#item3" className="item" data-hash="item3">
              <span className="testimonials-one__meta-thumb">
                <img
                  src="/assets/images/resources/testi-1-6.jpg"
                  alt="ostech"
                />
              </span>
            </Link>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
