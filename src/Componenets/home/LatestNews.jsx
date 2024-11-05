import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
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
                        <h3><Link href="blog-details.html">{items.blogtitle}</Link></h3>
                        <p>{items.description}</p>
                        <div data-cursor="pointer" className="link-overflow"><Link href="">Read
                                more <FontAwesomeIcon icon={icon} /></Link>
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