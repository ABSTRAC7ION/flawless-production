import React from "react";
import "./mission.scss";
import { ReactComponent as Ace } from "../../SVG/Ace.svg";

function Mission() {
  return (
    <div className="home">
      <div className="mission">
        <span className="letter" id="b0">
          b
        </span>
        <span className="letter" id="r1">
          r
        </span>
        <span className="letter" id="i2">
          i
        </span>
        <span className="letter" id="n3">
          n
        </span>
        <span className="letter" id="g4">
          g
        </span>
        <br />
        <span className="letter" id="y0">
          y
        </span>
        <span className="letter" id="o1">
          o
        </span>
        <span className="letter" id="u2">
          u
        </span>
        <span className="letter" id="r3">
          r
        </span>
        &nbsp;
        <span className="letter" id="b0">
          b
        </span>
        <span className="letter" id="r1">
          r
        </span>
        <span className="letter ar" id="a2">
          <span className="a">a</span>
          <Ace className="ace"></Ace>
        </span>
        <span className="letter" id="n3">
          n
        </span>
        <span className="letter" id="d4">
          d
        </span>
        <br />
        <span className="letter" id="v0">
          v
        </span>
        <span className="letter" id="i1">
          i
        </span>
        <span className="letter" id="s2">
          s
        </span>
        <span className="letter" id="i3">
          i
        </span>
        <span className="letter" id="o4">
          o
        </span>
        <span className="letter" id="n5">
          n
        </span>
        &nbsp;
        <span className="letter" id="t0">
          t
        </span>
        <span className="letter" id="o1">
          o
        </span>
        &nbsp;
        <span className="letter" id="l0">
          l
        </span>
        <span className="letter" id="i1">
          i
        </span>
        <span className="letter" id="f2">
          f
        </span>
        <span className="letter" id="e3">
          e
        </span>
        &nbsp;
        <span className="letter" id="w0">
          w
        </span>
        <span className="letter" id="i1">
          i
        </span>
        <span className="letter" id="t2">
          t
        </span>
        <span className="letter" id="h3">
          h
        </span>
        &nbsp;
        <br />
        <span className="dirtyline">
          {" "}
          <span className="letter" id="F0">
            F
          </span>
          <span className="letter" id="L1">
            L
          </span>
          <span className="letter" id="1">
            A
          </span>
          <span className="letter" id="W3">
            W
          </span>
          <span className="letter" id="L4">
            L
          </span>
          <span className="letter" id="E5">
            E
          </span>
          <span className="letter" id="S6">
            S
          </span>
          <span className="letter" id="S7">
            S
          </span>
        </span>
        &nbsp;
        <span className="letter" id="p0">
          p
        </span>
        <span className="letter" id="r1">
          r
        </span>
        <span className="letter ar" id="o2">
          o
        </span>
        <span className="letter" id="d3">
          d
        </span>
        <span className="letter" id="u4">
          u
        </span>
        <span className="letter" id="c5">
          c
        </span>
        <span className="letter" id="t6">
          t
        </span>
        <span className="letter" id="i7">
          i
        </span>
        <span className="letter" id="o8">
          o
        </span>
        <span className="letter" id="n9">
          n
        </span>
        <span className="letter" id="s10">
          s
        </span>
        <span className="letter fadein">*</span>
      </div>
      <div className="astronaut">
        <img src="https://i.imgur.com/3lHKv8C.jpg" alt="astronaut helmet" />
        <img src="https://i.imgur.com/OOgU3R6.jpg" alt="astronaut" />
      </div>
      {/* <div className="astro1">
        <img className="expo1" src={without} alt="astronaut" />
      </div>
      <div className="astro2">
        <img className="expo2" src={person} alt="astronaut" />
      </div> */}
    </div>
  );
}

export default Mission;
