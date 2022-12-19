import React from "react";
import "./load-in.scss";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 4,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function letterify(word: string) {
  var result: any = [];
  for (var i = 0; i < word.length; i++) {
    var letters = <span className="letters">{word[i]}</span>;
    result = result.concat(letters);
  }
  return result;
}

class LoadIn extends React.Component {
  render() {
    return (
      <motion.div
        id="load-up"
        className="App-intro relative z-50 w-full bg-black Dolce text-6xl text-white"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <div className="logo">
          FLAWLESS &nbsp;
          <div className="prod">
            <span id="dolce-prod">{letterify("PRODUCTIONS")}</span>
            <span id="scribble-prod">{letterify("PRODUCTIONS")}</span>
          </div>
          <span id="reg-symbol">&reg;</span>
        </div>
      </motion.div>
    );
  }
}

export default LoadIn;
