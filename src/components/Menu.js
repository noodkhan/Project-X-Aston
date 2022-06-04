import Link from "next/link";
import * as React from "react";

let MenuLeft = (
  <>
    <div className="firstMenu">
      <ul>
        <Link href="/">
          <a>
            <span>Our</span>World
          </a>
        </Link>
        <Link href="/">
          <a>Models</a>
        </Link>
        <Link href="/">
          <a>Owners</a>
        </Link>
        <Link href="/">
          <a>
            <span>F1</span>team
          </a>
        </Link>
      </ul>
    </div>
  </>
);

let MenuRight = (
  <>
    <div className="secondMenu">
      <ul>
        <Link href="/">
          <a>
            Store<span>&</span>Lifestyle
          </a>
        </Link>
        <Link href="/">
          <a>Enquiry</a>
        </Link>
        <Link href="/">
          <a>Dealers</a>
        </Link>
      </ul>
    </div>
  </>
);

let LogoMenu = (
  <>
    <div className="astonMartin">
      <div className="svgMartin">
        <Link href="/" className="logoMartin">
          <a>
            <h2>
              Aston<span>Martin</span>
            </h2>
          </a>
        </Link>
      </div>
    </div>
  </>
);

function Menu() {
  return (
    <>
      <div className="menuSection">
        {MenuLeft}
        {LogoMenu}
        {MenuRight}
      </div>
    </>
  );
}

export default Menu;
