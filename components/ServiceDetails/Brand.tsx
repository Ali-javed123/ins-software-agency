'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef } from 'react';

const Brand = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const images = Array(10).fill('/assets/images/resources/brand-2-1.png');

  return (
    <section className="client-carousel client-carousel-one">
      <div className="container position-relative">

        {/* Custom Navigation */}
        <button ref={prevRef} className="owl-arrows left">
          <span className="fa fa-angle-left" />
        </button>

        <button ref={nextRef} className="owl-arrows right">
          <span className="fa fa-angle-right" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          // autoplay={{ delay: 6000, disableOnInteraction: false }}
          // speed={700}
          spaceBetween={25}
          slidesPerView={5}
          onBeforeInit={(swiper) => {
            // Set navigation elements dynamically
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={true} // enable navigation module
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            360: { slidesPerView: 2, spaceBetween: 0 },
            575: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            992: { slidesPerView: 4, spaceBetween: 40 },
            1200: { slidesPerView: 5, spaceBetween: 55 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className='BrandCard'>
              <div className="client-carousel__one__item ">
                <Image src={src} alt="brand" width={180} height={80} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brand;
