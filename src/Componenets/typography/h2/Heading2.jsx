import Image from "next/image"
export default function H2 ({title, secondtitle, headingstyle, spanstyle,imgsrc, className, title1, title2, breakpoint,}) {
    return(
        <>
         <h2 className={className} style={headingstyle}>
            {breakpoint ? (

         <Image src={imgsrc} class="img-fluid"
                                    alt="title-effect" priority />
            ):null}
            {title1}
         <span style={spanstyle}>{title}</span> {secondtitle}{breakpoint? <br />: null} {title2}
             </h2>
        </>
    )
}