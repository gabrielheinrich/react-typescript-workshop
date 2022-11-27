import { useRef, FormEvent } from "react";

export const BookEditScreen = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(titleInputRef.current!.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title:</label>
      <input ref={titleInputRef} type="text" id="title" name="title"></input>

      <button type="submit">Save</button>
    </form>
  );
};
