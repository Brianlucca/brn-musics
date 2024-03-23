import "./menu.css";
import videoemalta from "./image/video-em-alta.png"
import Favorites from "../modals/favorites"
import Recommendation from "../modals/recommendation";
import About from "../modals/about";

const Menu = () => {
  return (
    <section>
      <div className="lateral-menu">
        <div className="container-logo">
          <div className="logo"><img src={videoemalta} /></div>
        </div>
        <div className="options">
          <nav>
            <ul>
              <span className="material-symbols-outlined">star</span>
              <li>
                <a><Favorites /></a>
              </li>
              <span className="material-symbols-outlined">upload</span>
              <li>
                <a href="#"><Recommendation /></a>
              </li>
              <span className="material-symbols-outlined">contact_page</span>
              <li>
                <a href="#"><About /></a>
              </li>
            </ul>
          </nav>
        </div>
        <h3 className="title-added">Atualização</h3>
        <div className="added-songs">
          <ul>
            <li>Static</li>
            <li>For the First Time</li>
            <li>Helmet</li>
            <li>Mercury</li>
            <li>Amber</li>
            <li>Chamber of Reflection</li>
            <li>PRIDE.</li>
            <li>a lot</li>
            <li>Hell N Back</li>
            <li>You Know How We Do it</li>
            <li>Love U</li>
            <li>One More Love Song</li>
            <li>Dreams from Yesterday</li>
            <li>Horse Hot Wee Water</li>
            <li>Brother</li>
            <li>Mac-Demarco</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="controller-menu"></div>
    </section>
  );
};
export default Menu;
