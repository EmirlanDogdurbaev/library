import Book from "../../components/OneBooksPage/Book/Book";
import OneBookPage from "../../components/OneBooksPage/OneBooksPage";
import cl from "./Profile.module.scss";
const Profile = () => {
  return (
    <div className={cl.Profile}>
      <OneBookPage />
    </div>
  );
};

export default Profile;
