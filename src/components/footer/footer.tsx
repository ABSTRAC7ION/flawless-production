import "./footer.scss";

function Footer() {
  return (
    <div
      className=" text-white text-left flex flex-col mix-blend-difference"
      id="footer"
    >
      <div id="infinite">
        <div id="infinite-fx" className="ticker-wrap text-white">
          <span>FLAWLESS PRODUCTIONS</span>
          <span>FLAWLESS PRODUCTIONS</span>
        </div>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
          <li>
            <a href="/">Spotify</a>
          </li>
          <li className="invisible">nothing to see here &#128511;</li>
          <li className=" copyright">
            <span className="text-xs">@ 2023 FLawless productions</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/flawless-production/work"> WORK </a>
          </li>
          <li>
            <a href="/">CULTURE</a>
          </li>
          <li>
            <a href="/">CAPABILITIES</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
          <li className=" copyright">
            <span className="text-xs">Cookies Policy</span>
          </li>
        </ul>
        <ul>
          <li className="text-xs">Let's collaborate</li>
          <li className="text-xs">
            <a href="/">info@FLawlessprod.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
