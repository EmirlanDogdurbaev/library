import Book from "./Book/Book";
import cl from "./OneBooksPage.module.scss";
const OneBookPage = () => {
  return (
    <div className={cl.OneBookPage}>
      <Book />
      <div>
        <h3>Отзывы</h3>

        
      </div>
    </div>
  );
};

export default OneBookPage;
