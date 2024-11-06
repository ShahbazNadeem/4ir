export default function Headingh2 ({title, secondtitle, headingstyle, spanstyle, className}) {
    return(
        <>
         <h2 className={className} style={headingstyle}>
         <span style={spanstyle}>{title}</span> {secondtitle}
             </h2>
        </>
    )
}