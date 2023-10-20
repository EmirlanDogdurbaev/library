import cl from "./Order.module.scss"
import img from "../../assets/images/book.png"
const Order = () => {
  return (
    <section className={cl.process}>
      <article>
        <aside>
          <div className={cl.time}>
            <p>Вернуть до:</p>
            <h3>17.06.2023</h3>
          </div>
          <div className={cl.time}>
            <p>Осталось:</p>
            <h3>8 дней</h3>
          </div>
        </aside>
        <aside className={cl.title_cont}>
          <div className={cl.title}>
            <h4>Java spring framework</h4>
            <h5>Amber Smith</h5>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div>
            <img src={img} alt="" width={110} height={165} />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Order;
