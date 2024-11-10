import React from 'react'
import Headingh3 from '../typography/h3/Headingh3'
import Para from '../typography/paragrapgh/paragraph'
const AiFeatureBox = ({AiFeatureBoxapi}) => {
  return (
    <>
     {AiFeatureBoxapi.map((items)=>(

<div  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000" key={items.id} className={`ai-feature-box-wrapper ${items.layout ? "ai-right-box":"ai-left-box"}`}>
  {items.layout ?(
     <div className="ai-horizontal-line-right">
     <div className="line-dot"></div>
 </div>
  ): null}
    <div className="ai-feature-box  service-box">
      <Headingh3 title={items.title} />
    
        <Para paragraph={items.para} />
        
    </div>
    {items.layout ? null:(

    <div className="ai-horizontal-line-left">
        <div className="line-dot"></div>
    </div>
    )}
</div>
))}</>
  )
}

export default AiFeatureBox