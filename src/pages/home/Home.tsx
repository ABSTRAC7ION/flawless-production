/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import Mission from "../../components/mission/mission";
import anime from "animejs/lib/anime.es.js";
import Tv from "../../components/tv/tv";
import Footer from "../../components/footer/footer";
import LoadIn from "../../components/load-in/load-in";
import WorkComp from "../../components/work/work";

const blackBox = {
  initial: {
    height: "100vh",
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    height: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

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
      delay: (el, i) => 1500 + 30 * i,
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

    if (this.state.scrolled >= 6500) {
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
      <motion.div id="App" className="App">
        <motion.div
          className="absolute z-50 w-full h-full bg-orange-600 Dolce text-6xl text-white"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={blackBox}
        ></motion.div>
        <Mission></Mission>
        <WorkComp></WorkComp>
        <Tv></Tv>
        <Footer></Footer>
      </motion.div>
    );
  }
}

export default Home;
