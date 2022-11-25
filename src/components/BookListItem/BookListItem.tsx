import { Book } from "../../domain/book";

export interface BookListItemProps {
  book: Book;
}
export const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
    </div>
  );
};
