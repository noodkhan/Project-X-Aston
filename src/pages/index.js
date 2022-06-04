import Head from "next/head";
import Image from "next/image";
import CardElements from "./CardElements";
import Link from "next/link";
import App from "../components/App";
import Script from "next/script";
import styles from "../styles/Home.module.css";

let Heading = (
  <div className="headingSection" id="heading">
    <div className="pTag">
      <p>Otherworldy Performance</p>
    </div>
    <div className="hTag">
      <h2>Aston Martin</h2>
      <h2>Valkyrie</h2>
    </div>
  </div>
);

let Selector = (
  <div className="selector">
    <ul>
      <Link href="/blank">
        <a>Coupe</a>
      </Link>
      <Link href="/blank">
        <a>Amr pro</a>
      </Link>
      <Link href="/blank">
        <a>spider</a>
      </Link>
    </ul>
  </div>
);

let SpecPhoto = (
  <div className="specPhoto">
    <Image
      src="/100.jpg"
      alt="bar"
      layout="responsive"
      width={1900}
      height={4000}
    />
  </div>
);

const BarSpec = (
  <div className="infoSection">
    {Selector}
    {/* {SpecPhoto} */}
    {/* {BarContent} */}
  </div>
);

function KhodLogic({ hook }) {
  var hook = document.getElementById("photoBackground");
  return console.log(hook);
}

// let PicOne = <ImgOne />;
// let PicTwo = <ImgTwo />;
// let PicThree = <ImgThree />;

let FlexSmall = (
  <>
    <div className="flexElement">
      <div className="contentOne">
        <div className="photoElementOne">
          <Image
            src="/9.jpg"
            alt="first"
            layout="responsive"
            width={1100}
            height={800}
          />
          <div className="headingElement">
            <Link href="/blank">
              <a> Aston Martin Valkyrie </a>
            </Link>
            <p className="text-black">Limited editions and innovations</p>
          </div>
        </div>
      </div>
      <div className="contentTwo">
        <div className="photoElementTwo">
          <Image
            src="/30.jpg"
            alt="second"
            layout="responsive"
            width={1100}
            height={800}
          />
          <div className="headingElement">
            <Link href="/blank">
              <a>Special Project</a>
            </Link>
            <p className="text-black">Limited editions and innovations</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

let flexBig = (
  <>
    <div className="flexElementTwo">
      <div className="contentThree">
        <div className="photoElementThree">
          <Image
            src="/1.jpg"
            alt="third"
            width={1400}
            height={800}
            layout="responsive"
          />
        </div>
        <div className="headingElementThree">
          <p>Timeless</p>
          <Link href="/blank">
            <a>Pre-owned by Aston Martin </a>
          </Link>
        </div>
      </div>
    </div>
  </>
);

let Card = (
  <>
    <div className="bigContact">
      <CardElements
        image="/5.jpg"
        Alt={"four"}
        Pdude={"24 Jan 2022"}
        Hdude={
          "Aston Martin teams field strongest Daytona line-up in bid for 2022 Rolex 24 Hours glory"
        }
        link={"/"}
      />

      <CardElements
        image="/92.jpg"
        Alt={"fifth"}
        Pdude={"18 Nov 2021"}
        Hdude={
          "V12 Vantage Experience the beauty of Aston Martin in the most exhilarating way possible"
        }
        link={"/"}
      />
      <CardElements
        image="/logo3.jpg"
        Alt={"six"}
        Pdude={"18 Nov 2021"}
        Hdude={
          " Adam Chamberlain appointed President of Aston Martin The Americas"
        }
        link={"/"}
      />
      <CardElements
        image="/8.jpg"
        Alt={"seven"}
        Pdude={"24 Jan 2022"}
        Hdude={
          "Aston Martin Vantage wins className in Petit Le Mans With The Heart of Racing"
        }
        link={"/"}
      />
    </div>
    {/* <div className="seeAllContent">
          <div className="buttonAll">
            <a href="blank">
              See all news <i className="bx bxs-cheese"></i>
            </a>
          </div>
        </div> */}
  </>
);

let ContactSectionOne = (
  <div className="sectionOne">
    <div className="titleFirst">
      <h2>Financial Services</h2>
      <p>
        Find a package that suits you with competitive offers from Aston Martin
        Financial Services.
      </p>
      <Link href="/blank">
        <a>
          Find out More <i className="bx bxs-cheese"></i>
        </a>
      </Link>
    </div>

    <div className="titleFirst">
      <h2>Configurator</h2>
      <p>
        Fully configure our entire range of Aston Martin models to create models
        to create a vehicle that is unique to you.
      </p>
      <Link href="/blank">
        <a>
          Model Configurator<i className="bx bxs-cheese"></i>
        </a>
      </Link>
    </div>

    <div className="titleFirst">
      <h2>Enquire</h2>
      <p>
        Contact Aston Martin and a member of our customer team will be in touch
        shortly.
      </p>
      <Link href="/blank">
        <a>
          Make an enquiry <i className="bx bxs-cheese"></i>
        </a>
      </Link>
    </div>

    <div className="titleFirst">
      <h2>Dealers</h2>
      <p>Find and contact your nearest Aston Martin dealer.</p>
      <Link href="/blank">
        <a>
          Find a dealer <i className="bx bxs-cheese"></i>
        </a>
      </Link>
    </div>
  </div>
);

let ContactSectionTwo = (
  <>
    <div className="sectionTwo">
      <ul>
        <Link href="/blank">
          <a>Corporate</a>
        </Link>
        <Link href="/blank">
          <a>Media</a>
        </Link>
        <Link href="/blank">
          <a>Contact Us</a>
        </Link>
        <Link href="/blank">
          <a>Conditions</a>
        </Link>
      </ul>

      <div className="martinRoyal">
        <Image
          src="/logo.png"
          alt="logo"
          layout="fixed"
          width={250}
          height={250}
        />
        <Link href="/blank">
          <a>Aston Martin</a>
        </Link>
      </div>

      <ul>
        <Link href="/blank">
          <a>Privacy</a>
        </Link>
        <Link href="/blank">
          <a>Cookies</a>
        </Link>
        <Link href="/blank">
          <a>Careers</a>
        </Link>
        <Link href="/blank">
          <a>International</a>
        </Link>
      </ul>
    </div>
  </>
);

let ContactSectionThree = (
  <div className="sectionThree">
    <div className="lastTitleOne">
      <p> Fuel Economy </p>
    </div>
    <div className="lastTitleTwo">
      <p>
        From 1 September 2017, new cars have been type-approved under the World
        Harmonized Light Vehicle Test Procedure (WLTP), a new, more realistic
        test method for measuring fuel consumption and CO 2 emissions. From 1
        September 2018, ditions, the fuel consumption and CO2 emission values
        measured by the WLTP are in many cases higher than those measured by the
        NEDC. which may vary depending on factors including road conditions,
        weather, vehicle load and driving style.
      </p>
    </div>
    <div className="lastTitleThree">
      <Link href="/blank">
        <a>WLTP - CONSUMPTION AND EMISSION VALUES</a>
      </Link>
      <p>
        The mpg/fuel economy figures quoted are sourced from official regulated
        test results obtained through laboratory testing. They are for
        comparability purposes only and may not reflect your real driving
        experience, which may vary depending on factors including road
        conditions, weather, vehicle load and driving style. a new,
      </p>
    </div>
  </div>
);

let ContactSectionFour = (
  <div className="sectionFour">
    <Link href="/blank">
      <a> © Aston Martin 2022 </a>
    </Link>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>ASTON MARTIN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App>
        {Heading}
        <div className="subPhoto">{SpecPhoto}</div>
        <main>
          <div className="Background">
            <Image
              src="/background.jpg"
              alt="background"
              layout="responsive"
              width={2100}
              height={1200}
            />
          </div>
        </main>
        <>
          <div className="wallpaperTwo" id="wallpaperTwo">
            <div className="test" id="test">
              <div className="section">
                {FlexSmall}
                {flexBig}
              </div>
            </div>
          </div>
        </>

        <>
          <div className="contactSection">
            <div className="headingContact">
              <p>News</p>
              <h2>The latest from Aston Martin</h2>
            </div>
            {Card}
          </div>
        </>

        <>
          <div className="wallpaperThree">
            {ContactSectionOne}
            {ContactSectionTwo}
            {ContactSectionThree}
            {ContactSectionFour}
          </div>
        </>
      </App>
    </>

    /* <SecondPage></SecondPage>
      <ThridPage></ThridPage>
      <ForthPage></ForthPage> */
  );
}



export async function getServerSideProps() {
  return { props: { isSSR: true } }
}

{
  /* <Script
          src="https://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossorigin="anonymous"
          type="text/javascript"
        >
          $(document).ready(function ()
          {$(window).scroll(function () {
            $(".photoBackground").css(
              "opacity",
              1 - $(window).scrollTop() / 900
            );
          })}
          )
        </Script> */
}
