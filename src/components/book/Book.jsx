import { useEffect, useState } from "react";
import BookViewer from "../bookViewer/BookViewer";
import styles from "./Books.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/book.json`)
      .then((res) => res.json())
      .then(setBooks)
      .catch(console.error);
  }, []);

  return (
    <section className={styles.bookSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>📚 Books</h1>
        <p className={styles.subtitle}>
          Read the books below, but downloading and printing are restricted.
        </p>

        <div className={styles.booksGrid}>
          {books.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookContent}>
                <h3>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>
                <div className={styles.btns}>
                  <button className={styles.contcFormBtn} onClick={() => setSelected(book)}>View</button>
                  <a href={"https://t.me/@VICTOR_UZB"} target="_blank" className={styles.contcFormBtn}><MdOutlineShoppingCartCheckout size={21}/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className={styles.bookModal}>
          <div className={styles.modalInner}>
            <button className={styles.close} onClick={() => setSelected(null)}>
              ✕
            </button>
            <BookViewer book={selected} />
          </div>
        </div>
      )}
    </section>
  );
}
