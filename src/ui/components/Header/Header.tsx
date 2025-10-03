import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  const iconDesktop = "/images/icon-desktop.webp";
  const iconDesktopDpr = "/images/icon-desktop-dpr.webp";
  const iconMobile = "/images/icon-mobile.webp";
  const iconMobileDpr = "/images/icon-mobile-dpr.webp";

  return (
    <header className="header-container">
      <div className="header__icon-title">
        <picture className="header__icon">
          <source
            media="(max-width: 599px)"
            srcSet={`${iconMobile} 1x, ${iconMobileDpr} 2x`}
          />
          <source
            media="(min-width: 600px)"
            srcSet={`${iconDesktop} 1x, ${iconDesktopDpr} 2x`}
          />
          <img
            className="header__icon"
            alt="Perfil del cap i part del coll del Godzilla sobre rodona vermella"
            src={iconMobile}
            height={86}
            width={86}
          />
        </picture>
        <h1 className="header__title" aria-label="Godzilla Poblenou Fan Club">
          <div className="header__title-name">
            <span>Godzilla</span>
          </div>
          <div className="header__title-surname-first">
            <div>
              <span>Poblenou</span>
            </div>
            <div className="header__title-surname-second">
              <div>
                <span>Fan</span>
              </div>
              <div>
                <span>Club</span>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <Navigator />
    </header>
  );
};

export default Header;
