import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <div className="navigator">
      <img
        src="/images/navigator/home.svg"
        alt="Icon of a home"
        className="navigator-icon"
      />
      <img
        src="/images/navigator/collection.svg"
        alt="Icon of a dragon"
        className="navigator-icon"
      />
      <img
        src="/images/navigator/new.svg"
        alt="Icon of a plus"
        className="navigator-icon"
      />
      <img
        src="/images/navigator/fight.svg"
        alt="Icon of two swords as an X"
        className="navigator-icon"
      />
      <img
        src="/images/navigator/manifest.svg"
        alt="Icon of a form"
        className="navigator-icon"
      />
      <img
        src="/images/navigator/contact.svg"
        alt="Icon of a message"
        className="navigator-icon"
      />
    </div>
  );
};

export default Navigator;
