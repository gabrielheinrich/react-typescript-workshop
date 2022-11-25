# Tasks

## 1 - Initialize project using Create React App

- Create a new React + Typescript project using `create-react-app`.  
  This will create a new sub folder containing a template project.

  ```bash
  npx create-react-app react-workshop --template=typescript
  ```

- Change into the project directory

  ```bash
  cd react-workshop
  ```

- Start the project (development server with file watching)

  ```bash
  npm run start
  ```

If your browser doesn't open the website automatically, visit the url provided by the `npm run start` command.

### Bonus

- Explore the directory structure of the repository. Can you guess what each file's purpose is?
- Try to change the title of the page (the text shown in the browser tab handle next to the favicon) to 'Bookmonkey'
- Make the React Logo spin faster and counter-clock-wise

## 2 - Add an AppHeader component

- In the `src/App.tsx` file, create a new function component called `AppHeader`, which renders a simple h1 heading
- Add the `AppHeader` at the top of the `App` component. Remove the existing demo content and the existing class definitions in `App.css`

The rest of the exercise is refactoring to a more scalable directory structure:

- Create a new directory for reusable components: `src/components` and add a directory for the `AppHeader` component, with an `AppHeader.tsx` and `index.ts` file.
  ```
  src/
    components/
      AppHeader/
        - AppHeader.tsx
        - index.ts
  ```
- Move the `AppHeader` function into `AppHeader.tsx` and export it (named export).
- Re-export everything (`*`) from `AppHeader.tsx` in the `index.ts` file and import the `AppHeader` from `./components/AppHeader` in `App.tsx`

### Hints

```tsx
export const AppHeader = () => {
  return <h1>Bookmonkey</h1>;
};
```

```ts
export * from "./AppHeader";
```

```ts
import { AppHeader } from "./components/AppHeader";
```

```tsx
<div className="App">
  <AppHeader />
</div>
```

### Bonus

- Create an `AppHeader.css` file next to the `.tsx` file, import it and use it to adjust some styles. Try to make sure that the css rules only affect the `AppHeader` component.
- Use css to center the contents of the App horizontally in the page with a maximum width of 600px and a padding of 1rem.

## 3 - Display an example book

- Create a new component called `ExampleBook` and add it to the `App`. Follow the same folder and files patterns as used for the `AppHeader`.
- Create a directory for domain specific code `src/domain`
- Write a typescript interface that matches the following example book and place it in `src/domain/book/Book.ts`. Also add an `index.ts` file to `src/domain/book` that re-exports everything from `Book.ts`

  ```ts
  const book: Book = {
    id: "1001606140805",
    title: "Java Web Scraping Handbook",
    subtitle: "Learn advanced Web Scraping techniques",
    isbn: "1001606140805",
    abstract:
      "Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...",
    author: "Kevin Sahin",
    publisher: "Leanpub",
    price: "$0.00",
    numPages: 115,
    cover: "http://localhost:4730/covers/1001606140805.png",
  };
  ```

- Add this `const book ` binding to the function body of the `ExampleBook` component. Display the title, subtitle and author of the example book.

### Hints

```ts
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  author: string;
  publisher: string;
  price: string;
  numPages: number;
  cover: string;
}
```

```ts
import { Book } from "../../domain/book";
```

```tsx
return (
  <div>
    <h2>{book.title}</h2>
    <h3>{book.subtitle}</h3>
    <div>by {book.author}</div>
  </div>
);
```

### Bonus

- Display the cover of the book (contained within a 100px x 100px square)
- Display the example book 3 times
- Display the example book 100 times
