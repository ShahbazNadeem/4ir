import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LearnBtn({
  datacursor,
  className,
  link,
  iconClass,
  icon,
}) {
  return (
    <>
      <Link data-cursor={datacursor} className={className} href={link}>
        <div class={iconClass}>
          <FontAwesomeIcon icon={icon} style={{ color: "black" }} />
        </div>
        Learn More
      </Link>
    </>
  );
}
