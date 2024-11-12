import Image from "next/image"
export default function OfferBox({data}){
    return(
        <>
         <div id="offers" class="section-b-space" style={{overflowX: "hidden"}}>
        {data.map((items)=>(
             <div  data-aos={items.aos} data-aos-delay="500"data-aos-duration="1000" class="container" key={items.id}>
            <div class="offers_container">
                <div class={`offer_box left ${items.columnreverse} `} style={{flexDirection: items.row }}>
                    <div class="offer_img">
                        <Image src={items.image} alt="" priority />
                    </div>
                    <div class="offer_content">
                        <h3>{items.title} </h3>
                        <p>
                           {items.para}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
        </>
    )
}