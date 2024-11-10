'use client'
import Navbar from '@/Componenets/home/Header';
import LatestNews from '@/Componenets/home/LatestNews'
import React from 'react'
import Image from 'next/image';
import LatestBlogImage from "@/images/breadcrumb-title.png"
import Testimonial from '@/Componenets/home/CalltoAction';
import Footer from '@/Componenets/home/Footer';
import CalltoAction from '@/Componenets/home/CalltoAction';
import { useState } from 'react';
import H2 from '@/Componenets/typography/h2/Heading2';
import Para from '@/Componenets/typography/paragrapgh/paragraph';
import Blogapi from "./secondblogapi.json"
const Index = () => {
  const [showModal, setShowModal] = useState(false);



  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
  <Navbar handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} showModal={showModal}  />
  <section class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="breadcrumb-content">
                        <div>
                          <H2 breakpoint={true} imgsrc={LatestBlogImage} title1="Latest Blog" />
                          <Para iconadd={true} paragraph="Discover the most recent blogs about artificial
                                intelligence here." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <LatestNews layout={false} Blogapi={Blogapi}  />
 <CalltoAction
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      /> <Footer />
    </>
  )
}

export default Index;

