import React, { useRef } from "react";
import "./work.scss";
import { ReactComponent as WorkSvg } from "../../SVG/work2.svg";
import semsemVideo from "../../videos/semsem.mp4";

function WorkComp() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };
  return (
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
              preload="none"
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
          <a href="/" className="ml-auto">
            <div className="hs-wrapper">
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
              {/* <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
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
              <span className="text-xs">photography / Graphic Design</span>
            </div>
            <h2 className="text-2xl">ASTRO</h2>
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
                web developemnt / ui/ux design / photography / Graphic Design
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
  );
}

export default WorkComp;
