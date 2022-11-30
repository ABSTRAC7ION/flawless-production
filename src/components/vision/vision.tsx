import React from "react";
import "./vision.scss";
import without from "./photos/helmet.jpg";
import person from "./photos/without explosion final final.jpg";

function Vision() {
  return (
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
  );
}

export default Vision;
