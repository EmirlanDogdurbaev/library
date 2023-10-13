import { NavLink } from "react-router-dom";
import cl from "./Nav.module.scss";
const Nav = () => {
  return (
    <nav className={cl.Nav}>
      <div className={cl.logo}>
        <span>
          <h3>INAI</h3>
          <h5>library</h5>
        </span>
        <ul className={cl.links}>
          <li>
            <NavLink to={"/"}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Профиль</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Главная</NavLink>
          </li>
        </ul>
      </div>
      <div className={cl.btns}>
        <button>Log</button>
        <button>Reg</button>
      </div>
    </nav>
  );
};

export default Nav;
