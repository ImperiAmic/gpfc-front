import "./Navigator.css";

const Navigator: React.FC = () => {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const navigatorMobile = document.querySelector(".navigator--mobile");

    if (!navigatorMobile) {
      throw new Error("Could not find a mobile navigator element");
    }

    if (scrollY > 150) {
      navigatorMobile.classList.add("nav--scrolled");
    }

    if (scrollY <= 149) {
      navigatorMobile.classList.remove("nav--scrolled");
    }
  });

  return (
    <>
      <nav className="navigator--mobile ">
        <ul className="navigator__list--mobile">
          <li>
            <img
              src="/images/navigator/home.svg"
              alt="Icona d'una casa"
              className="navigator-icon"
            />
          </li>
          <li>
            <img
              src="/images/navigator/collection.svg"
              alt="Icona del cap d'un drac"
              className="navigator-icon"
            />
          </li>
          <li>
            <img
              src="/images/navigator/new.svg"
              alt="Icona del símbol de sumar"
              className="navigator-icon"
            />
          </li>
          <li>
            <img
              src="/images/navigator/fight.svg"
              alt="Icona de dues espases creuades"
              className="navigator-icon"
            />
          </li>
          <li>
            <img
              src="/images/navigator/manifest.svg"
              alt="Icona d'un formulari"
              className="navigator-icon"
            />
          </li>
          <li>
            <img
              src="/images/navigator/contact.svg"
              alt="Icona d'una bafarada rectangular"
              className="navigator-icon"
            />
          </li>
        </ul>
      </nav>
      <nav className="navigator--desktop">
        <ul className="navigator__list--desktop">
          <li>Inici</li>
          <li>Godzillas</li>
          <li>Nou Godzilla</li>
          <li>Let them fight!</li>
          <li>Manifest</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigator;
