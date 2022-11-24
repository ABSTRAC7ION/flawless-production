import React from "react";
import "./load-in.scss";
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
      <div>
        {/* intro */}
        <div id="load-up" className="App-intro">
          <div className="logo">
            FLAWLESS &nbsp;
            <div className="prod">
              <span id="dolce-prod">{letterify("PRODUCTIONS")}</span>
              <span id="scribble-prod">{letterify("PRODUCTIONS")}</span>
            </div>
            <span id="reg-symbol">&reg;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadIn;
