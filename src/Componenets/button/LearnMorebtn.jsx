import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function LearnBtn({datacursor, className, link, iconClass}){
    return(
        <>
         <Link data-cursor={datacursor} className={className} href={link}>
                            <div class={iconClass}><FontAwesomeIcon icon={faArrowUp} style={{color: "black"}}/></div>Learn More
                        </Link>
        </>
    )
}