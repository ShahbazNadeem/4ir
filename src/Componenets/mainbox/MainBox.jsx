import React from "react";
import Para from "../typography/paragrapgh/paragraph";
import Image from "next/image";
import Headingh3 from "../typography/h3/Headingh3";
import Headingh4 from "../typography/h4/H4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const MainBox = ({ ServiceBox }) => {

  return (
    <>
      {ServiceBox.map((items) => (
        <div className={items.columnclass} key={items.id}>
          <div className={items.firstChildClass}>
            {items.layout ? <Image src={items.personimg} alt="" width={100} height={100} priority /> : null}
            <div className={items.secondChildClass}>
              {items.layout ? (
                <Headingh3 title={items.name} />
              ) : (
                <>
                  <Image
                    src={items.image1}
                    className={items.firstimageclass}
                    alt=""
                    priority
                  />
                  <Image
                    src={items.image2}
                    className={items.secondimageClass}
                    alt=""
                    priority
                  />
                </>
              )}
            </div>
            {items.layout ? (
              <Headingh4
                style={{
                  textAlign: "start",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                }}
                heading={items.description}
              />
            ) : null}
            <div className={items.contentclass}>
              {items.layout ? (
                <Link href={items.link === "https://www.linkedin.com/in/shane-krevoy-48a5b3b5" ? "https://www.linkedin.com/in/shane-krevoy-48a5b3b5" : `/team/${items.id}`}>
                  Read more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "grey", paddingTop: "4px" }}
                  />
                </Link>
              ) : (
                <>
                  <Headingh3
                  className="text-white"
                    showimage={true}
                    title={items.title}
                    image={items.image3}
                  />
                  <Para paragraph={items.para} />
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainBox;
