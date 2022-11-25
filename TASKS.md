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

## 4 - Create a BookListItem component

- Create a new component called `BookListItem`. Follow the same folder/file pattern as before.
- Show the same data as the `ExampleBook`, but this time make the book to be displayed a prop of the component. Don't forget to add an interface for the props, call it `BookListItemProps`.
- Add a new file `domain/book/exampleBooks`, re-export its contents in `index.ts` and add this list of example books

```ts
export const exampleBooks: Book[] = [
  {
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
  },
  {
    id: "9780071494618",
    title: "Hacking Exposed Web 2.0",
    subtitle: "Web 2.0 Security Secrets and Solutions",
    isbn: "9780071494618",
    abstract:
      "Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...",
    author: "Rich Cannings, Himanshu Dwivedi, Zane Lackey",
    publisher: "McGraw-Hill",
    price: "$12.03",
    numPages: 258,
    cover: "http://localhost:4730/covers/9780071494618.png",
  },
  {
    id: "9780071740647",
    title: "Hacking Exposed Web Applications, 3rd Edition",
    subtitle: "Web Applications Security Secrets and Solutions",
    isbn: "9780071740647",
    abstract:
      "Protect your Web applications from malicious attacks by mastering the weapons and thought processes of today's hacker. Written by recognized security practitioners and thought leaders, Hacking Exposed Web Applications, Third Edition is fully updated to cover new infiltration methods and countermeasu...",
    author: "Joel Scambray, Vincent Liu, Caleb Sima",
    publisher: "McGraw-Hill",
    price: "$9.50",
    numPages: 482,
    cover: "http://localhost:4730/covers/9780071740647.png",
  },
  {
    id: "9780134655536",
    title: "Node.js, MongoDB and Angular Web Development, 2nd Edition",
    subtitle:
      "The definitive guide to using the MEAN stack to build web applications",
    isbn: "9780134655536",
    abstract:
      "Node.js is a leading server-side programming environment, MongoDB is the most popular NoSQL database, and Angular is the leading framework for MVC-based front-end development. Together, they provide an easy-to-implement, fully integrated web development stack that allows web programmers to create hi...",
    author: "Brad Dayley, Brendan Dayley, Caleb Dayley",
    publisher: "Addison-Wesley",
    price: "$33.16",
    numPages: 640,
    cover: "http://localhost:4730/covers/9780134655536.png",
  },
  {
    id: "9780596522308",
    title: "Even Faster Web Sites",
    subtitle: "Performance Best Practices for Web Developers",
    isbn: "9780596522308",
    abstract:
      "Performance is critical to the success of any web site, and yet today's web applications push browsers to their limits with increasing amounts of rich content and heavy use of Ajax. In this book, Steve Souders, web performance evangelist at Google and former Chief Performance Yahoo!, provides valuab...",
    author: "Steve Souders",
    publisher: "O'Reilly Media",
    price: "$4.65",
    numPages: 256,
    cover: "http://localhost:4730/covers/9780596522308.png",
  },
  {
    id: "9780596527525",
    title: "Learning Web Design, 3rd Edition",
    subtitle: "A Beginner's Guide to (X)HTML, StyleSheets, and Web Graphics",
    isbn: "9780596527525",
    abstract:
      "Everything you need to know to create professional web sites is right here. Learning Web Design starts from the beginning - defining how the Web and web pages work - and builds from there. By the end of the book, you'll have the skills to create multi-column CSS layouts with optimized graphic files,...",
    author: "Jennifer Niederst Robbins",
    publisher: "O'Reilly Media",
    price: "$4.13",
    numPages: 480,
    cover: "http://localhost:4730/covers/9780596527525.png",
  },
];
```

- Using the `BookListItem` component, replace the `ExampleBook` in the `App` component and display the first two books from the exampleBooks array.

### Hints

```tsx
export interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  /*...*/
};
```

### Bonus

- Add css styles in a `BookListItem.css` file to add a border, subtle shadow and padding to the BookListItem
- Remove all extra whitespace at the start end end of the book fields before rendering them.
- Replace all new line characters in the title and subtitle with a single whitespace.
