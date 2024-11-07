export default function Para({paragraph, className, style, iconadd}){
    return(
        <>
         <p className={className} style={style}>
            {iconadd ? <i class="ri-subtract-line"></i>:null }
         {paragraph} </p>
        </>
    )
}