/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./Home.scss";
import Mission from "../../components/mission/mission";
import anime from "animejs/lib/anime.es.js";
import Portfolio from "../../components/portfolio/portfolio";
import { ReactComponent as WorkSvg } from "../../SVG/work2.svg";
import Tv from "../../components/tv/tv";
import Footer from "../../components/footer/footer";
import LoadIn from "../../components/load-in/load-in";

class Home extends React.Component<
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
      delay: (el, i) => 100 + 30 * i,
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
  // skate board
  skate = () => {
    anime
      .timeline({ loop: true, direction: "alternate" })
      .add({
        targets: ".view-all",
        duration: 3000,
        skewY: 10,
        easing: "easeInOutQuad",
      })
      .add({
        targets: ".view-all",
        skewY: -10,
        duration: 3000,
        easing: "easeInOutQuad",
      });
  };
  //page scroll
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

    if (this.state.scrolled >= 6400) {
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

    trace.seek((this.state.scrolledbar / 40) * trace.duration);

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

  //page loaded
  componentDidMount() {
    this.textAnime();
    this.textReplace();
    this.textReplace2();
    this.fadein();
    this.Loadup();
    this.skate();
    window.addEventListener("scroll", this.onScrollPage);
  }
  //unload
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollPage);
  }
  render() {
    return (
      <div id="App" className="App">
        {/* <LoadIn></LoadIn> */}
        <Mission></Mission>
        <div className="work">
          <div className="w-svg">
            <WorkSvg className="svg-trace"></WorkSvg>
          </div>
          <div className="Dolce  px-10 w-portfolio">
            <div className="work1 py-20">
              <a href="/">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/2z8E9DW.jpg" alt="Semsem" />
                  <img src="https://i.imgur.com/obN6XWl.jpg" alt="Semsem 2" />
                  <img src="https://i.imgur.com/1xrLRoe.jpg" alt="Semsem 3" />
                  <img src="https://i.imgur.com/eKD4RgZ.jpg" alt="Semsem 4" />
                  <img src="https://i.imgur.com/k6Mv368.jpg" alt="Semsem 5" />
                  <img src="https://i.imgur.com/R3Qo9OM.jpg" alt="Semsem 6" />
                  <img src="https://i.imgur.com/QtwXvUe.jpg" alt="Semsem 7" />
                </div>
              </a>
              <div className="text-left float-left text-black">
                <div className="flex flex-row justify-center items-center pt-2 gap-4">
                  <a
                    href="/"
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

            <div className="work2 py-20">
              <a href="/" className="ml-auto">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                </div>
              </a>
              <div className="text-right float-right ml-auto text-black">
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
                  <img src="https://i.imgur.com/obN6XWl.jpg" alt="Semsem 2" />
                  <img src="https://i.imgur.com/1xrLRoe.jpg" alt="Semsem 3" />
                  <img src="https://i.imgur.com/eKD4RgZ.jpg" alt="Semsem 4" />
                  <img src="https://i.imgur.com/k6Mv368.jpg" alt="Semsem 5" />
                  <img src="https://i.imgur.com/R3Qo9OM.jpg" alt="Semsem 6" />
                  <img src="https://i.imgur.com/QtwXvUe.jpg" alt="Semsem 7" />
                </div>
              </a>
              <div className="text-left float-left text-black">
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
            <div className="work2 py-20">
              <a href="/" className="ml-auto">
                <div className="hs-wrapper">
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/G7oYh8C.jpg" alt="Astro" />
                  <img src="https://i.imgur.com/ibaKTEd.jpg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                  <img src="https://i.imgur.com/dhoNnvs.jpeg" alt="Astro" />
                </div>
              </a>
              <div className="text-right float-right ml-auto text-black">
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

        {/* <Portfolio></Portfolio> */}

        <Tv></Tv>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
