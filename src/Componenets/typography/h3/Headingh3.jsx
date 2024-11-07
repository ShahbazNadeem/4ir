import React from 'react'
import Image from 'next/image'
const Headingh3 = ({style, title, className, image,imageclass, showimage, imgstyle}) => {
  return (
    <h3 className={className} style={style}> 
    {showimage ? (
        <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        style={imgstyle}
        className={`img-fluid ${imageclass}`}
      />
    ): null } 
   {title}</h3>
  )
}

export default Headingh3