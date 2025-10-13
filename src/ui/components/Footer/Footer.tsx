import { Link } from "react-router";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentDate = new Date();

  return (
    <footer className="footer-container">
      <span>Godzilla Poblenou Fan Club</span>
      <div className="footer-information">
        <span>
          <Link
            className="footer__link"
            to={"https://creativecommons.org/licenses/by-nc-sa/4.0/"}
          >
            CC BY-NC-SA 4.0
          </Link>
        </span>
        <div className="footer-information-detail">
          <span className="bold">
            <Link
              className="footer__link"
              to={"https://www.imperiamic.com/"}
              rel="license"
            >
              Imperi Amic
            </Link>
          </span>
          <span>{currentDate.getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
