export default function Para({paragraph, className, style}){
    return(
        <>
         <p className={className} style={style}>
         {paragraph} </p>
        </>
    )
}