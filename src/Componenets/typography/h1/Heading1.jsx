import React from 'react'

const Heading1 = ({title, className, headingstyle, spanstyle, spantitle, breakpoint}) => {
  return (
    <>
    <h1 className={className} style={headingstyle}> <span style={spanstyle}>
                    {spantitle}
                  </span>
                   {breakpoint && <br /> }
                  {title}</h1>
    </>
  )
}

export default Heading1