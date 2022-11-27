/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/navabr";
import Mission from "../../components/mission/mission";
import anime from "animejs/lib/anime.es.js";
import without from "./photos/helmet.jpg";
import person from "./photos/without explosion final final.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

import { ReactComponent as Work } from "../../SVG/work2.svg";
import LoadIn from "../../components/load-in/load-in";

class App extends React.Component<
  {},
  { scrolled: number; scrolledbar: number }
> {
  //load up animation
  Loadup = () => {
    anime.timeline({ loop: false }).add({
      targets: ".App-intro",
      translateY: -1000,
      duration: 2000,
      delay: 3000,
      autoplay: true,
      easing: "easeInOutSine",
    });
  };

  //animation of text
  textAnime = () => {
    anime.timeline({ loop: false }).add({
      targets: ".mission .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4000 + 30 * i,
    });
  };

  //text replacement effect
  textReplace = () => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".a",
        opacity: "0",
        duration: 3000,
        easing: "easeInOutExpo",
        complete: function () {
          const el = document.querySelector(".a")! as HTMLElement;
          el.style.display = "none";
        },
      })
      .add({
        targets: ".a",
        opacity: "1",
        duration: 3000,
        easing: "easeInOutExpo",
        begin: function () {
          const el = document.querySelector(".a")! as HTMLElement;
          el.style.display = "inline-block";
        },
      });
  };
  textReplace2 = () => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ace",
        opacity: "1",
        duration: 3000,
        easing: "easeInOutExpo",
        begin: function () {
          const el = document.querySelector(".ace")! as HTMLElement;
          el.style.display = "block";
        },
      })
      .add({
        targets: ".ace",
        opacity: "0",
        duration: 3000,
        easing: "easeInOutExpo",
      });
  };

  //fade in after 3000s
  fadein = () => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".fadein",
        opacity: "0",
        duration: 3000,
        delay: 5000,
        easing: "easeInOutQuad",
      })
      .add({
        targets: ".fadein",
        opacity: "1",
        easing: "easeInOutQuad",
      });
  };

  //scroll function
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
      scrolledbar: 0,
    };
    this.onScrollPage = this.onScrollPage.bind(this);
  }

  onScrollPage() {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPercentage = `${(this.state.scrolled / winHeightPx) * 100}%`;
    this.setState({
      scrolledbar: parseFloat(scrolledPercentage),
    });
    this.setState({
      scrolled: document.documentElement.scrollTop,
    });
    if (this.state.scrolled >= 1000) {
      var AppBg = document.getElementById("App");
      AppBg!.style.background = "black";
    } else {
      var AppBg = document.getElementById("App");
      AppBg!.style.background = "white";
    }
    const trace = anime({
      targets: ".st0",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      autoplay: false,
    });

    trace.seek((this.state.scrolledbar / 30) * trace.duration);

    const astro = anime({
      targets: ".expo11",
      opacity: 0,
      delay: function (el, i) {
        return i * 250;
      },
      easing: "easeInOutSine",
      autoplay: false,
    });

    astro.seek((this.state.scrolledbar / 100) * astro.duration);
  }

  componentDidMount() {
    this.textAnime();
    this.textReplace();
    this.textReplace2();
    this.fadein();
    this.Loadup();
    window.addEventListener("scroll", this.onScrollPage);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollPage);
  }
  render() {
    return (
      <div id="App" className="App">
        {/* <LoadIn></LoadIn> */}
  
        <Mission></Mission>

        <div className="work">
          <Work className="svg-trace"></Work>
        </div>

        <div id="grid-wrapper">
          <div id="top">
            <a href="/">
              <div id="topi" className="grid-basics">
                <img
                  src="https://uploads-ssl.webflow.com/6200a6140ca3daef2f447472/625ce5af6d89774c81cef56d_62582b318d1463609ad06ca1_sm%20banner%202%20(1)-p-1600.jpeg"
                  alt="jewels"
                />
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
              <img
                src="https://d17mj1ha1c2g57.cloudfront.net/v1/CjF6o9Qrkid6Cg5lUBm-ECXIbkE/700x/80/kode/production/clips/1d89c880-4101-4c97-926e-85f4c2aef798/screenshot-2022-10-21-at-14.39.30.png?v=1"
                alt="jewels"
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
                <span className="text-xs">photography / brand message</span>
              </div>
              <h2 className="text-2xl">AITCH GQ</h2>
            </div>
          </div>
          <div id="p2">
            <div className="p21h">
              <div id="p21" className="grid-basics">
                <img
                  src="https://cdn.sanity.io/images/a78u5s9r/production/c2a352368724f7131c9c997de86aa113c4949d6a-1600x2223.jpg?w=800"
                  alt="jewels2"
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
                  <span className="text-xs">
                    ux design / brand marketing / photography
                  </span>
                </div>
                <h2 className="text-2xl">Gardens</h2>
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
                <img
                  src="https://uploads-ssl.webflow.com/6200a6140ca3daef2f447472/6257201f1fd04d7db9cd2f93_pattern.jpg"
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
                  <span className="text-xs">
                    brand re-design / ux design / brand marketing
                  </span>
                </div>
                <h2 className="text-2xl">Ast8forallah</h2>
              </div>
            </div>
            <div className="p3n4h">
              <div id="p32" className="grid-basics">
                <img
                  src="https://uploads-ssl.webflow.com/6200a6140ca3daef2f447472/625ce5f06f7b1f80cd442d03_62572f5354d0284296a08587_pufspufs%20(1)-p-1600.jpeg"
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
                  <span className="text-xs">
                    ux design / brand marketing / marketing campaign
                  </span>
                </div>
                <h2 className="text-2xl">BAD B</h2>
              </div>
            </div>
          </div>
          <div id="p4">
            <div className="p3n4h">
              <div id="p41" className="grid-basics">
                <img
                  src="https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmludGFnZSUyMGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                  <span className="text-xs">
                    brand re-design / brand marketing / photography
                  </span>
                </div>
                <h2 className="text-2xl">FF CARS</h2>
              </div>
            </div>
            <div className="p3n4h">
              <div id="p42" className="grid-basics">
                <img
                  src="https://images.ctfassets.net/cce4tcns2qc3/3ODmcDLJma5ABbFcGCWOn4/ed2a45a352f862975590936808afcc74/35_best_streetwear_web_designs_2019.jpg?w=1920&h=950&q=85&f=center"
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
                  <span className="text-xs">
                    brand re-design / ux design / brand marketing
                  </span>
                </div>
                <h2 className="text-2xl">CHECK</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="Dolce">
          <h1 className="text-white text-left">
            <span className="text-orange-600">“</span> we create{" "}
            <span className="text-orange-600"> branded </span>
            <br />
            digital experiences <br />
            digital strategy <br />
            web development <br />
            design <span className="text-orange-600">"</span>
          </h1>
        </div>

        <div className="Dolce flex justify-center items-center">
          <h1 id="big-text" className="text-white w-1/2">
            FLAWLESS PRODUCTIONS
          </h1>
        </div>
        <div id="vision">
          <div className="sticky top-0 h-screen flex justify-center items-center">
            <h1 className="w-1/2 text-white text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro a
              dolorum amet aliquam exercitationem sint assumenda vel. Assumenda,
              quas consectetur dolorem eos incidunt facilis facere sed sit eius
              saepe necessitatibus.
            </h1>
            <div className="w-1/2 grid justify-center items-center" id="">
              <img className="expo11" src={without} alt="astronaut" />
              <img className="expo22" src={person} alt="astronaut" />
            </div>
          </div>
        </div>
        <div className="h-auto" id="contact">
          <h1 className="text-left text-white contact">Contact</h1>
          <h1 className="text-left text-white contact">Flawless Productions</h1>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
