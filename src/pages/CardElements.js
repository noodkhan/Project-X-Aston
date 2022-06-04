import Image from "next/image";
import React from 'react'
import Link from 'next/link'

function CardElements({ image, alt, Pdude, Hdude, link }) {
  return (
    <>
      <div className="cardContent">
        <div className="bigPhoto">
          <Image
            src={image}
            alt={alt}
            layout="intrinsic"
            width={250 * 2}
            height={205 * 2}
          />
        </div>
        <div className="bigHeading">
          <p>{Pdude}</p>
          <h2>{Hdude}</h2>
          {/* <Link href={link}> */}
            <a>
              {JSON.stringify(link)}
              {/* Read More <i className="bx bxs-cheese"></i> */}
            </a>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default CardElements;
