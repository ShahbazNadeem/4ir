import React from 'react'
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import quoteOutline from '../../../public/assets/svg/quote.svg';
import quoteFill from '../../../public/assets/svg/quote-green.svg';
import Image from 'next/image';
import Headingh4 from '../typography/h4/H4';
import Para from '../typography/paragrapgh/paragraph';

const Testimonial = ({testimonials}) => {
  return (
    <>
     <section className="testimonial-section section-b-space" id="testimonial-section">
      <div className="container">
        <div className="service-info" style={{ position: 'relative', marginBottom: '5rem' }}>
          <div>
            <div className="title">
                <Headingh4 heading="Real Clients, Real Success" style={{ color: '#00BDFF' }} />
              <h2 className="text-white">What <span style={{ color: '#ffce00' }}>Our Clients</span> Are Saying</h2>
            </div>
            <Para className="service_paragraph" paragraph=" Explore How Our AI Solutions and Training Empower Businesses to Save Time, Increase Conversions, and Elevate Customer Experiences" />
          </div>
        </div>
        <Swiper
          modules={[Pagination ]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className={testimonial.class ? "wrapperswiper": null} key={index}>
              <div className="testimonial-box">
                <div className="content-sec">
                  <div className="quote-img">
                    <Image src={quoteOutline} className="img-fluid outline-img" alt="quote outline" priority />
                    <Image src={quoteFill} className="img-fluid fill-img" alt="quote fill" priority />
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default Testimonial