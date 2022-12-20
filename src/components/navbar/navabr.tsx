import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <motion.ul
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.2,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        >
          <a href="/" className="nav-logo">
            F/X
          </a>
          <div className="nav-right">
            <div className="nav-items">
              <a href="/flawless-production/work" className="nav-underline">
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
        </motion.ul>
      </div>
    );
  }
}

export default Navbar;
