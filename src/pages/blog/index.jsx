import Navbar from '@/Componenets/home/Header';
import LatestNews from '@/Componenets/home/LatestNews'
import React from 'react'

const Index = () => {
  const Blogapi = [
    {
      id: 1,
      title: "Smashing: A New Content Curation App From Goodreads Co-Founder",
      description: "Image Credits: Smashing Goodreads’ co-founder Otis Chandler has launched a new AI",
      image: "/assets/images/home/blog1.png",
      columnClass: "col-xl-4 col-md-6",
      firstChildclass: "blog-box",
      imageclass: "blog-img",
      contentClass: "blog-content",
      author:"- Barry Krevoy",
      layout:true,
    },
    {
      id: 2,
      title: "Revolutionize Project Management With AI: Skyrocket ROI And Boost Productivity",
      description: "Image Credits: Smashing Goodreads’ co-founder Otis Chandler has launched a new AI",
      image: "/assets/images/home/blog2.jpg",
      columnClass: "col-xl-4 col-md-6",
      firstChildclass: "blog-box",
      imageclass: "blog-img",
      contentClass: "blog-content",
      author:"- Barry Krevoy",
      layout:true,
    },
    {
      id: 3,
      title: "Smashing: A New Content Curation App From Goodreads Co-Founder",
      description: "Image Credits: Smashing Goodreads’ co-founder Otis Chandler has launched a new AI",
      image: "/assets/images/home/blog3.png",
      columnClass: "col-xl-4 col-md-6",
      firstChildclass: "blog-box",
      imageclass: "blog-img",
      contentClass: "blog-content",
      author:"- Barry Krevoy",
      layout:true,
    }
  ];
  
  return (
    <>
  <Navbar />
 <LatestNews Blogapi={Blogapi}  />
    </>
  )
}

export default Index