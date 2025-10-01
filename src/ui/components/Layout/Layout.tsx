import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="page-container">
        <dialog className="modal">
          <span>Properament...</span>
          <div className="modal__text">
            <span>Godzilla</span>
            <span>Poblenou Fan Club</span>
          </div>
        </dialog>
      </main>
    </div>
  );
};

export default Layout;
