import BookCard from "../../components/BookCard/BookCard";
import Book from "../../components/OneBooksPage/Book/Book";
import cl from "./Home.module.scss";
const Home = () => {
  return (
    <div className={cl.homeWrap}>  
      <div className={cl.Home}>
        <h1>Welcome to our Web Site</h1>
      </div>

      <section className={cl.booksCard}>
        <h2>Books</h2>
        <div className={cl.cont}>
          <BookCard />
          <BookCard />
          <BookCard />          
        </div>
      </section>
    </div>
  );
};

export default Home;
