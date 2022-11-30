import React, { useState } from "react";
import "./tv.scss";

function Tv() {
  const [style, setStyle] = useState({ display: "none" });
  const [img, setImg] = useState(
    "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
  );
  const [text, setText] = useState("all projects");

  return (
    <div className="ps">
      <span className="ps1 flex flex-row items-center">
        <h1 className="text-white text-left">
          <span className="text-orange-600">“</span> we create{" "}
          <span
            className="text-orange-600"
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg(
                "https://images.e-flux-systems.com/147537_9e1ada7c247926ee00307969ebd983a2.gif,1600"
              );
              setText("Branded");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
            }}
          >
            {" "}
            branded{" "}
          </span>
          <br />
          <span
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg("https://media0.giphy.com/media/Ph0oIVQeuvh0k/giphy.gif");
              setText("digital experiences");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
            }}
          >
            digital experiences
          </span>
          <br />
          <span
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg(
                "https://64.media.tumblr.com/abe7045034374988c158bfd392e1bd53/67b3f64c04af09c5-92/s400x600/579d591b6fe85ca27ac348f25d43391bbc39834c.gif"
              );
              setText("digital strategy");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
            }}
          >
            digital strategy
          </span>{" "}
          <br />
          <span
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg(
                "https://64.media.tumblr.com/03d1098cd934e3392a52d7c0de325fe8/b9b664323f3cd382-c5/s540x810/ae3ed504a39b8af73e6e26afe034b1234fbc71a9.gifv"
              );
              setText("web development");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
            }}
          >
            web development
          </span>{" "}
          <br />
          <span
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg(
                "https://i.pinimg.com/originals/e5/57/b4/e557b46e7d5f64872f6e5ca0b9744d6c.gif"
              );
              setText("Design");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
            }}
          >
            Design
          </span>
          <span className="text-orange-600"> "</span>
        </h1>
        <a href="/">
          <div
            className="work-btn Dolce view-all rounded-full border text-white border-white text-xs hover:bg-orange-600 transition duration-500 ease-out hover:ease-in"
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
              setImg(
                "https://media1.giphy.com/media/XuBNdP9Pb7W9i/giphy.gif?cid=ecf05e47bvipvehtio5rlokiqe9wl9uzyvxhbz3tsyuu3mp8&rid=giphy.gif&ct=g"
              );
              setText("all projects");
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            view all projects
          </div>
        </a>
      </span>
      <div className="tv-fx flex justify-center items-center">
        <div
          style={style}
          className="work-tv mix-blend-difference z-10 absolute text-white"
        >
          {text}
        </div>
        <img className="static z-0" src={img} alt="static" />
      </div>
    </div>
  );
}
export default Tv;
