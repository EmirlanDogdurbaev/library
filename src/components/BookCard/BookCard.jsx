import book from "../../assets/images/book.png";
import cl from "./BookCard.module.scss";
const BookCard = () => {
  return (
    <article className={cl.BookCard}>
      <aside>
        <h4>Java spring framework</h4>
        <h5>Amber Smith</h5>
        <div>
          <small>в наличии : 15</small>
          <button>Узнать</button>
        </div>
      </aside>
      <img src={book} alt="book " />
    </article>
  );
};

export default BookCard;
