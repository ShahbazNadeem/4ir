import React, { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import quoteOutline from '../../../public/assets/svg/quote.svg';
import quoteFill from '../../../public/assets/svg/quote-green.svg';
import Image from 'next/image';
import Headingh4 from '../typography/h4/H4';
import Para from '../typography/paragrapgh/paragraph';
import H2 from '../typography/h2/Heading2';

const Testimonial = ({ layout, testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="testimonial-section section-b-space" id="testimonial-section">
        <div className="container">
          {layout ? (
            <div className="service-info" style={{ position: 'relative', marginBottom: '5rem' }}>
              <div>
                <div className="title">
                  <Headingh4 heading="Real Clients, Real Success" style={{ color: '#00BDFF' }} />
                  <h2 className="text-white">What <span style={{ color: '#ffce00' }}>Our Clients</span> Are Saying</h2>
                </div>
                <Para className="service_paragraph" paragraph=" Explore How Our AI Solutions and Training Empower Businesses to Save Time, Increase Conversions, and Elevate Customer Experiences" />
              </div>
            </div>
          ) : (
            <div className="title-basic">
              <H2 className="text-white" title1="What " spanstyle={{ color: "#ffce00" }} title="Our Clients" title2="Are Saying" />
              <Para style={{ marginBottom: "6rem", color: "#fff", fontSize: "1.25rem", fontWeight: "lighter" }} paragraph="See how AI Talk Assist has helped businesses save time, boost conversions, and enhance customer experiences. Real results, real impact!" />
            </div>
          )}

          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isCenterSlide = index === (activeIndex + 1) % testimonials.length;

              return (
                <SwiperSlide
                  className={`testimonial-box ${isCenterSlide ? "center-slide" : ""}`}
                  key={index}
                >
                  <div className={`content-sec ${isCenterSlide ? "center-slide-content" : ""}`}>
                    <div className="quote-img">
                      {isCenterSlide ? (

                        <Image src={quoteFill} className="img-fluid fill-img" alt="quote fill" priority />
                      ): (
                        
                        <Image src={quoteOutline} className="img-fluid outline-img" alt="quote outline" priority />
                      )}
                    </div>
                    <p>{testimonial.content}</p>
                  </div>
                  <div className="small-circle"><span></span></div>
                  <div className="large-circle"><span></span></div>
                  <div className="avtar-img">
                    <Image src={testimonial.image} className="img-fluid" alt={testimonial.name} priority />
                  </div>
                  <h4>{testimonial.name}</h4>
                  <h5>{testimonial.position}</h5>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <style jsx>{`
        .content-sec.center-slide-content::before {
          content: "";
          position: absolute;
          left: 8px;
          top: 8px;
          background-color: rgb(0 189 255);
          border-radius: 6px;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 1;
          visibility: visible;
        }
        .content-sec::before {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </>
  );
};

export default Testimonial;
