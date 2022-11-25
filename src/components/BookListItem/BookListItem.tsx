import { Book } from "../../domain/book";

export interface BookListItemProps {
  book: Book;
}
export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";

  return (
    <div>
      <h2 style={{ textDecoration: isFree ? "underline" : "none" }}>
        {book.title}
        {isFree && <span> &#x1F4B0;</span>}
      </h2>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
    </div>
  );
};
