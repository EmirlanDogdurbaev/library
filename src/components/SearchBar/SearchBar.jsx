import { Link } from "react-router-dom";
import cl from "./SearchBar.module.scss";
import lupa from "../../assets/icons/Outline/Search/Magnifer.png";
import user from "../../assets/icons/Outline/Search/userProf.png";

const SearchBar = () => {
  return (
    <div className={cl.SearchBar}>
      <div>
        <span>
          <input type="text" placeholder="поиск книг" />
          <button>
            <img src={lupa} alt="lupa image" />
          </button>
        </span>
        <Link to={"/"}>
          <img src={user} alt="profile button" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
