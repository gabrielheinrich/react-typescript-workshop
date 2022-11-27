import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../../domain/book";

export type BookEditScreenRouteParams = {
  isbn: string;
};

export const BookEditScreen = () => {
  const [title, setTitle] = useState("");

  const { isbn } = useParams<BookEditScreenRouteParams>();
  const { book } = useBook(isbn!);

  useEffect(() => {
    if (book) {
      setTitle(book.title);
    }
  }, [book]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(title);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
      ></input>

      <button type="submit">Save</button>
    </form>
  );
};
