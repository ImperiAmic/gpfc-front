import "./Header.css";

const Header: React.FC = () => {
  const iconDesktop = "/images/icon-desktop.webp";
  const iconMobile = "/images/icon-mobile.webp";

  return (
    <header className="header-container">
      <img
        className="icon"
        alt="Perfil del cap i part del coll del Godzilla sobre rodona vermella"
        srcSet={`${iconMobile} 86w, ${iconDesktop} 84w`}
        sizes="(max-width: 599px) 86px, 84px"
        src={iconMobile}
        height={86}
        width={86}
      />
      <h1 aria-label="Godzilla Poblenou Fan Club">
        <div className="title-container">
          <div className="title-name">
            <span>Godzilla</span>
          </div>
          <div className="title-surname">
            <div>
              <span>Poblenou</span>
            </div>
            <div className="title-surname--desktop">
              <div>
                <span>Fan</span>
              </div>
              <div>
                <span>Club</span>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </header>
  );
};

export default Header;
