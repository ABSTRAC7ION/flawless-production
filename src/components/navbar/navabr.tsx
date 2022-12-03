import React from "react";
import "./navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          <a href="/" className="nav-logo">
            F/X
          </a>
          <div className="nav-right">
            <div className="nav-items">
              <a href="/work" className="nav-underline">
                <li>WORK</li>
              </a>
              <a href="/" className="nav-underline">
                <li>CULTURE</li>
              </a>
              <a href="/" className="nav-underline">
                <li>CAPABILITIES</li>
              </a>
              <a href="/" className="nav-underline">
                <li>CONTACT</li>
              </a>
            </div>
            <div className="nav-info">
              <li>(+20) 1127723698</li>
              <li>
                info@flawless <br /> prod.com
              </li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
