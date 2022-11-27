import { useParams, NavLink } from "react-router-dom";
import { useBook } from "../../domain/book";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();

  const { book } = useBook(isbn!);

  if (!book) return <div>Loading...</div>;
  return (
    <div>
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p>
        by {book.author}, published by {book.publisher}
      </p>
      <small>
        ISBN: {book.isbn} {book.numPages} pages
      </small>
      <div></div>

      <h4>Abstract</h4>
      <p>{book.abstract}</p>
      <strong>{book.price}</strong>

      <div>
        <NavLink to={`/books/${book.isbn}/edit`}>
          <button>Edit</button>
        </NavLink>
      </div>
    </div>
  );
};
