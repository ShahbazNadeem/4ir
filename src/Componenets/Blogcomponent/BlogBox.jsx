import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const BlogBox = ({Blogapi, icon}) => {
  return (
    <>
  {Blogapi.map((items) => {
  
return(

            <div style={{display:"flex"}} className={`blog_pagecss ${items.columnClass}`} key={items.id}>
              <div className={items.firstChildclass}>
                <div className={items.imageclass}>
                  {items.layout ? (
                    <>
                      <Link  href={`/blog/${items.slug}`}>
                        <Image
                          src={items.image}
                          class="img-fluid"
                          alt="blog"
                          width={500}
                          height={500}
                          style={{cursor: "pointer"}}
                          priority
                        />
                      </Link>
                      <div class="hover-content">
                        <a data-cursor="pointer" href="">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                          />
                        </a>
                        <h5>{items.author}</h5>
                      </div>
                    </>
                  ) : (
                    <Link  href={`/blog/${items.slug}`} >
                    
                    <Image
                      src={items.image}
                      alt=""
                      width={1000}
                      height={1000}
                      priority
                    />
                    </Link>
                  )}
                </div>

                <div className={items.contentClass}>
                  <h3>
                    <Link href={`/blog/${items.slug}`}>{items.blogtitle}</Link>
                  </h3>
                  {items.layout ? (
                     <ul>
                     <li>{items.date}</li>
                     <li>5 min to read</li>
                 </ul>
                  ):(

                    <p>{items.description}</p>
                  )}
                {items.layout ? null : (
                  <div data-cursor="pointer" className="link-overflow">
                    <Link href={`/blog/${items.slug}`}>
                      Read more{" "}
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ color: "rgb(109 113 122)" }}
                      />
                    </Link>
                  </div>
               )}
                </div>
              </div>
            </div>
)
  }
    
  

 
          )}
    </>
  )
}

export default BlogBox;

