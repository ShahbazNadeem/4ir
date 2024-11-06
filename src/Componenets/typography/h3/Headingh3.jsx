import React from 'react'
import Image from 'next/image'
const Headingh3 = ({style, title, className, image, showimage}) => {
  return (
    <h3 className={className} style={style}> 
    {showimage ? (
        <Image
        src={image}
        alt={title}
        className="img-fluid"
      />
    ): null } 
   {title}</h3>
  )
}

export default Headingh3