import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="main-container">
      <main className="page-container">
        <dialog open className="modal">
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
