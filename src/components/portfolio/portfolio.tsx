import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="flex items-center flex-col portfolio">
      <div id="grid-wrapper">
        <div id="top">
          <a href="/">
            <div id="topi" className="grid-basics">
              <img src="https://i.imgur.com/O8WReTe.jpg" alt="jewels" />
            </div>
          </a>
          <div className="text-left float-left">
            <div className="flex flex-row justify-center items-center pt-2 gap-4">
              <a
                href="/"
                className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
              >
                view project
              </a>
              <span className="text-xs">
                brand re-design / ux design / brand marketing
              </span>
            </div>
            <h2 className="text-2xl">ASTRO</h2>
          </div>
        </div>
        <div id="p1">
          <div id="pi" className="grid-basics">
            <img src="https://i.imgur.com/ibaKTEd.jpg" alt="ABSTRACTION" />
          </div>
          <div className="text-left float-left">
            <div className="flex flex-row justify-center items-center pt-2 gap-4">
              <a
                href="/"
                className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
              >
                view project
              </a>
              <span className="text-xs">photography / Graphic Design</span>
            </div>
            <h2 className="text-2xl">ABSTRAC7ION</h2>
          </div>
        </div>
        <div id="p2">
          <div className="p21h">
            <div id="p21" className="grid-basics">
              <img src="https://i.imgur.com/G7oYh8C.jpg" alt="jewels2" />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">
                  brand concept / brand marketing / photography / graphic design
                </span>
              </div>
              <h2 className="text-2xl">Basketball</h2>
            </div>
          </div>
          <div className="p22h">
            <div id="p22" className="grid-basics">
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2021/02/0215Barbour-01-e1616432662789.jpg?w=1299&h=899&crop=1"
                alt=""
              />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">photography</span>
              </div>
              <h2 className="text-2xl">STREET SMART</h2>
            </div>
          </div>
        </div>
        <div id="p3">
          <div className="p3n4h">
            <div id="p31" className="grid-basics">
              <img src="https://i.imgur.com/nz1OsX5.jpeg" alt="SemSem" />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">brand identity / Graphic design</span>
              </div>
              <h2 className="text-2xl">SEMSEM</h2>
            </div>
          </div>
          <div className="p3n4h">
            <div id="p32" className="grid-basics">
              <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="astronaut" />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">Graphic Design / photography</span>
              </div>
              <h2 className="text-2xl">ASTRO</h2>
            </div>
          </div>
        </div>
        <div id="p4">
          <div className="p3n4h">
            <div id="p41" className="grid-basics">
              <img src="https://i.imgur.com/1gGGFmU.jpeg" alt="" />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">
                  brand re-design / Graphic Design
                </span>
              </div>
              <h2 className="text-2xl">ENACTUS AUC CLUB</h2>
            </div>
          </div>
          <div className="p3n4h">
            <div id="p42" className="grid-basics">
              <img src="https://i.imgur.com/QJFGiAh.jpeg" alt="" />
            </div>
            <div className="text-left float-left">
              <div className="flex flex-row justify-center items-center pt-2 gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white px-6 text-xs hover:bg-white hover:text-black transition duration-500 ease-out hover:ease-in"
                >
                  view project
                </a>
                <span className="text-xs">brand identity / photography</span>
              </div>
              <h2 className="text-2xl">Delight Box</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
