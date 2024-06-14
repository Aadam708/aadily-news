import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './BottomNav.css'

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="bottom-container">
        <Link to="/" className="about-us">
          About Me
        </Link>
        <Link to="/" className="contact-us">
          Contact Us
        </Link>

        <Link to="/" className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link to="/" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link to="/" className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
      </div>
    </div>
  );
}
