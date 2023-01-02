import React, { useRef, useEffect, useState } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
import "./work.scss";
import { ReactComponent as WorkSvg } from "../../SVG/work2.svg";
import semsemVideo from "../../videos/semsem.mp4";
import aitch from "../../videos/aitch2.mp4";

function WorkComp() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const handleMouseEnter2 = () => {
    videoRef2.current.play();
  };

  const handleMouseLeave2 = () => {
    videoRef2.current.pause();
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    forceCheck();
    // Add a listener to re-check the media query when the viewport changes
    const onChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    // Remove the listener when the component unmounts
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="work">
          <div className="w-svg">
            <WorkSvg className="svg-trace"></WorkSvg>
          </div>
          <div className="Dolce  px-10 w-portfolio">
            <div className="work1 py-20">
              <a href="/flawless-production/work/semsem" className="hs-wrapper">
                <LazyLoad offset={100}>
                  <video
                    disablePictureInPicture
                    loop
                    muted
                    playsInline
                    autoPlay
                    src={semsemVideo}
                  ></video>
                </LazyLoad>
              </a>
              <div className="text-left float-left work-text text-wrapper">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/flawless-production/work/semsem"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    brand identity / photography / Graphic Design
                  </span>
                </div>
                <h2 className="text-2xl">semsem</h2>
              </div>
            </div>

            <div className="work1 py-20">
              <a
                href="/flawless-production/work/aitch"
                className="hs-wrapper ml-auto"
              >
                <LazyLoad offset={100}>
                  <video
                    disablePictureInPicture
                    loop
                    muted
                    playsInline
                    autoPlay
                    src={aitch}
                  ></video>
                </LazyLoad>
              </a>
              <div className="text-right float-right ml-auto work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">photography / Graphic Design</span>
                </div>
                <h2 className="text-2xl">AITCH</h2>
              </div>
            </div>
            <div className="work1 py-20">
              <a href="/">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/2z8E9DW.jpg" alt="Semsem" />
                </div>
              </a>
              <div className="text-left float-left work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    web developemnt / ui/ux design / photography / Graphic
                    Design
                  </span>
                </div>
                <h2 className="text-2xl">Egypt</h2>
              </div>
            </div>
            <div className="work1 py-20">
              <a href="/" className="ml-auto">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                </div>
              </a>
              <div className="text-right float-right ml-auto work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    Developer Slices and Designer Jams
                  </span>
                </div>
                <h2 className="text-2xl">PANTRY</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="work">
          <div className="w-svg">
            <WorkSvg className="svg-trace"></WorkSvg>
          </div>
          <div className="Dolce  px-10 w-portfolio">
            <div className="work1 py-20">
              <a
                href="/flawless-production/work/semsem"
                className="hs-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  ref={videoRef}
                  disablePictureInPicture
                  loop
                  muted
                  playsInline
                  src={semsemVideo}
                ></video>
              </a>
              <div className="text-left float-left work-text text-wrapper">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/flawless-production/work/semsem"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    brand identity / photography / Graphic Design
                  </span>
                </div>
                <h2 className="text-2xl">semsem</h2>
              </div>
            </div>

            <div className="work1 py-20">
              <a
                href="/flawless-production/work/aitch"
                className="hs-wrapper ml-auto"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <video
                  ref={videoRef2}
                  disablePictureInPicture
                  loop
                  muted
                  playsInline
                  src={aitch}
                ></video>
              </a>
              <div className="text-right float-right ml-auto work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">photography / Graphic Design</span>
                </div>
                <h2 className="text-2xl">AITCH</h2>
              </div>
            </div>
            <div className="work1 py-20">
              <a href="/">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/2z8E9DW.jpg" alt="Semsem" />
                  {/* <img src="https://i.imgur.com/obN6XWl.jpg" alt="Semsem 2" />
              <img src="https://i.imgur.com/1xrLRoe.jpg" alt="Semsem 3" />
              <img src="https://i.imgur.com/eKD4RgZ.jpg" alt="Semsem 4" />
              <img src="https://i.imgur.com/Z9WMmdc.jpg" alt="Semsem 5" />
              <img src="https://i.imgur.com/HtDqv7Y.jpg" alt="Semsem 6" />
              <img src="https://i.imgur.com/Y1qYe0d.jpg" alt="Semsem 7" /> */}
                </div>
              </a>
              <div className="text-left float-left work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    web developemnt / ui/ux design / photography / Graphic
                    Design
                  </span>
                </div>
                <h2 className="text-2xl">Egypt</h2>
              </div>
            </div>
            <div className="work1 py-20">
              <a href="/" className="ml-auto">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  {/* <img src="https://i.imgur.com/G7oYh8C.jpg" alt="Astro" />
              <img src="https://i.imgur.com/ibaKTEd.jpg" alt="Astro" />
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" /> */}
                </div>
              </a>
              <div className="text-right float-right ml-auto work-text">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
                    className="rounded-full border border-black px-6 text-xs hover:bg-orange-600 hover:text-white transition duration-500 ease-out hover:ease-in"
                  >
                    view project
                  </a>
                  <span className="text-xs">
                    Developer Slices and Designer Jams
                  </span>
                </div>
                <h2 className="text-2xl">PANTRY</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkComp;
