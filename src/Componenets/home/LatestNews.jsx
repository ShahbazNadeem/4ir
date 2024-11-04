import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
export default function LatestNews ({heading, title1, title2, Blogapi, icon}){
    return(
        <>
          <section className="news-section section-b-space">
        <div className="container">
            <h3 className="text-white text-center">{heading} </h3>
        </div>
        <h1 className="title-basic" style={{color: "#fff"}}>{title1} <span style={{color: "#ffce00"}}>{title2}</span></h1>
        <div className="row news_container">
            {Blogapi.map((items)=>(

            <div className="col-lg-4 col-md-6" key={items.id}>
                <div className="news_box">
                    <div className="news_img">
                        <Image src={items.image} alt="" width={1000} height={1000} />
                    </div>
                    <div className="news_content">
                        <h3><a href="blog-details.html">{items.blogtitle}</a></h3>
                        <p>{items.description}</p>
                        <div data-cursor="pointer" className="link-overflow"><a href="/html/blog-details.html?index=0">Read
                                more <FontAwesomeIcon icon={icon} /></a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
        </>
    )
}