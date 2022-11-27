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

## 5 - Display a list of books

- Instead of only showing the first two example books, render the entire list using the `map` array method. Don't forget to set the key attribute on each ListItem.
- Move the list rendering logic into a new `BookList` component, which takes the `books` as a prop

### Hints

```tsx
<div>
  {books.map((book) => (
    <BookListItem book={book} key={book.id}></BookListItem>
  ))}
</div>
```

### Bonus

- Add a header to the book list that shows the number of books in the list
- Since the `BookListItem` component belongs to the `BookList` move its directory into the `BookList` directory and adjust the imports
- Display the minimum and maximum number of pages in the `BookList` header.
- Display the minimum and maximum price of the books in the `BookList` header

## 6 - Display a money bag emoji next to free books

- Display the money bag emoji `&#x1F4B0;` right after the title of books that cost `$0.00`.
- Add an `underline` text decoration aswell to all free books. You can either use `className` or a `style` binding

### Hints

```tsx
{
  isFree && <span> &#x1F4B0;</span>;
}
```

```tsx
<h2 style={{ textDecoration: isFree ? "underline" : "none" }}></h2>
```

### Bonus

- Display an emoji of your choice next to books that are particularaly long (> 500 pages)
- Display one to three dollar signs next to books depending on their price, e.g. $0 - $10, $10 - $30, $30 - $999

## 7 - Add a like counter to the BookListItem component

- Add a `<button>` element to the BookListItem component that shows a clapping hands emoji (`&#128079;`)
- Keep track how many times the button was clicked and display that number next to the emoji.
- If the button was clicked 5 or more times show a star emoji (`&#11088;`) in front of the book title.

### Hints

```tsx
const [numLikes, setNumLikes] = useState(0);
```

```tsx
<button onClick={() => setNumLikes(numLikes + 1)}>&#128079;</button>
```

### Bonus

- Extract the like counter into a separate `LikeCounter` component. Pass both the current count as well as a callback function to set the count as props.
- Add another button for dislike. Only show the star when there's a +5 positive balance towards likes
- If the num Likes is 0, don't display that number

## 8 - Display the book's abstract, but make it hideable

- Display the book's abstract in the `BookListItem` component.
- Add a button to toggle if the abstract is being shown or hidden. The button text should be `+` or `-` depending on the state
- Create a new `Hideable` component, which encapsulates this behaviour. The `Hideable` component should render the children elements passed to it and a button to show/hide them.
- Use the `Hideable` component in `BookListItem`.

### Hints

```tsx
<Hideable>{book.abstract}</Hideable>
```

```tsx
import { ReactNode } from "react";

export interface MyComponentProps {
  children: ReactNode;
}
```

```tsx
{
  shouldShowChildren && children;
}
```

Hint for fade in animation bonus task:

```css
.fade-in {
  animation: fade-in 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
```

### Bonus

- Add a prop to `Hideable` to set the initial state to either hidden or visible.
- Add an optional prop to set a maximum height for the contents of `Hideable` and make sure a scrollbar is shown when this height limit is reached.
- Add an animation that fades in the content when it's being shown.

## 9 - Fetch and display books from the Bookmonkey Api

- Start the bookmonkey-api server in a separate terminal. Visit [http://localhost:4730/books] to verify.
  ```bash
  npx bookmonkey-api
  ```
- Create a new `async` function called `fetchBooks` in `src/domain/book/api.ts` which sends a get request to [http://localhost:4730/books], parses the response body as json and returns an array of books. Don't forget to re-export `./api` from `index.ts`
- In `App.tsx`, instead of displaying the exampleBooks, start out with an empty books array and initiate fetching the books on the first render.

### Hints

```ts
async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data as MyType;
};
```

```ts
const [books, setBooks] = useState<Book[]>([]);
```

Workaround, because react prohibits the useEffect handler to be async

```ts
useEffect(() => {
  async function fetchData() {
    // Use await here...
    const data = await fetchSomething();
    // ...
  }
  fetchData(); // initiate async operation, but don't wait
});
```

### Bonus

- Show the text 'Loading...' while waiting for a response from the server. You'll probably have to artifically throttle the network speed in the browser's devtools to notice.
- Show an error message, if the server is not reachable or returns an error status code
- Make the `BOOKMONKEY_API_URL` an environment variable. [Create-React-App Documentation: Adding custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## 10 - Create a custom useBooks hook

- Create a new custom hook function called `useBooks` in `src/domain/book/hooks`
- `useBooks` should automatically initiate fetching books on first render and return the currently available books. (An empty array until the server response was loaded)
  Hint: You can copy paste almost all of this from `App.tsx`
- Replace the book fetching logic in `App.tsx` by using the `useBooks` hook.

### Hints

### Bonus

- Let `useBooks` also return a boolean `loading`, that's true while waiting for the server response.
- Also return an optional `error` object next to `loading` and the books. If there's an error, display the error message
- Add a `refresh` function in the `useBooks` hook and return it as well. Call it every 30 seconds, but make sure to stop this, when the component is being destroyed.

## 11 - Add a ThemeContext to provide a primary color

- Create a new subdirectory for the theme `src/domain/theme` with its own `index.ts` file.
- Create this interface for the Theme in `src/domain/theme/Theme.ts` and add it to the `index.ts` exports:
  ```ts
  export interface Theme {
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
  }
  ```
- In a new file `src/domain/theme/ThemeContext.ts` create a `ThemeContext` that provides a `Theme` object. For the default value, assign `primaryColor` to blue and `setPrimaryColor` to a function that does nothing (so called _noop_). Add the necessary exports.
- Use the theme context in the `AppHeader` component and set the text color of the 'Bookmonkey' heading to to the primary color

### Hints

```tsx
export const MyContext = createContext<MyType>(defaultValue);
```

```tsx
import { MyContext } from "...";

const context = useContext(MyContext);
```

### Bonus

- Set the border and text color of the `<button>` in `Hideable` and the `LikeCounter`
- Create a new custom hook `usePrimaryColor` which returns the primaryColor from the `ThemeContext`
- Extract a `BaseButton` component, which is styled using the primary theme color. Use this `BaseButton` to replace the `<button>` html tag in both the `Hideable` component and the `LikeCounter`.

## 12 - Create a ThemeEditor component

- Wrap the return of `App.tsx` in a `ThemeContext.Provider`. Create a local primaryColor state with `useState` and use both the value and the setter to construct the theme value for the `ThemeContext.Provider`. Set the default primaryColor to 'tomato' and check if the styling has changed.

  ```tsx
  const [primaryColor, setPrimaryColor] = useState("tomato");

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="App">
        <>...</>
      </div>
    </ThemeContext.Provider>
  );
  ```

- Create and display a `ThemeEditor` component, which has two buttons to set the primary color to either 'steelblue' or 'tomato'.

### Hints

```tsx
<button onClick={() => theme.setPrimaryColor("tomato")}>tomato</button>
```

### Bonus

- Use this array of color choices to generate an array of buttons in the `ThemeEditor`. Styling tip: Set the button's background color, remove any border and set both width and height to 30px.

```ts
const colorChoices = [
  "crimson",
  "tomato",
  "chocolate",
  "darkorange",
  "olivedrab",
  "teal",
  "dodgerblue",
  "steelblue",
];
```

- Try overwriting the Theme in the `BookList` component with a nested ThemeContext.Provider

## 13 - Install React Router and add a fallback error screen

- Install the `react-router-dom` npm package
  ```bash
  npm install react-router-dom
  ```
- In a new file called `src/router.tsx` use the `createBrowserRouter` function to create and export a router. Register the `App` component as the elementfor the root `/` path

  ```ts
  import { createBrowserRouter } from "react-router-dom";
  import App from "./App";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  ```

- In the `index.tsx` file replace the `<App />` with a `<RouterProvider />` and bind the router prop to the `router` you just created

  ```tsx
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  ```

  The app should now work just as before.

- Create a new directory for your screens: `src/screens`. In `src/screens/ErrorScreen` create an `ErrorScreen` component that displays a generic error message.
- In `router.tsx` add the `<ErrorScreen />` as the `errorElement` for the root `/` path. Visit [localhost:3000/some-faulty-url] to verify that it works.

### Hints

```tsx
{
  path: "/",
  element: <App />,
  errorElement: <ErrorScreen />,
}
```

### Bonus

- Use the `useRouteError` hook from `react-router-dom` in the `ErrorScreen` component to display a more specific error message.
- Tryout what happens if you throw an Error from the `BookList` component.
- Add some basic styling to the `ErrorScreen`

## 14 Add a Books and an About Screen

- Create a `BooksScreen` and an `AboutScreen` component in `src/screens`
- The `BooksScreen` should fetch books from the api and display them using the `BookList` (just like `App.tsx`). The `AboutScreen` should display a friendly message.
- In `router.tsx` add two child routes to the main '/' route:
  - A route with an empty path `""` which renders the `BooksScreen`
  - A route with the path `"about"`, which renders the `AboutScreen`
  ```tsx
  {
    path: "/",
    element: <App />
    children: [
      {
        path: ...
        element: ...
      },
      ...
    ]
  }
  ```
- Replace the `BookList` in the `App.tsx` with an `<Outlet />` element from `react-router-dom` to display the child routes below the `AppHeader`.
- Test the routes by vising [http://localhost:3000/books] and [http://localhost:3000/about]

### Hints

```tsx
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <BooksScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
    ],
  },
```

```tsx
<div className="App">
  <ThemeEditor />
  <AppHeader />
  <Outlet />
</div>
```

### Bonus

- Instead of rendering the `BooksScreen` on the `/` route, render it on `/books`, but also automatically redirect the `/` route to `/books`. For this you have to add a custom loader to invoke the `redirect` function from `react-router-dom`. [redirect in the router docs](https://reactrouter.com/en/main/fetch/redirect)

  ```tsx
  {
    path: "",
    loader: () => redirect("books"),
  }
  ```

- Try out adding a prop to the `AboutScreen` or the `BooksScreen` and providing its value in the router definition.

## 15 - Add navigation links to the Books and About Screen

- In the `AppHeader` add a `NavLink` to the Books and to the About page
- Underline only the currently active link.  
  Tip: the generated `<a>` element automatically receives an `active` class, when the link is active

### Hints

```tsx
<NavLink to="/about">About</NavLink>
```

```tsx
import "./AppHeader.css";
```

```css
a {
  text-decoration: none;
}

a.active {
  text-decoration: underline;
}
```

### Bonus

- Tip: Add `body { overflow-y: scroll; }` in `index.css` to prevent page width jumps when switching routes.
- Render the `NavLinks` from a `links` array using `.map`:

```ts
const links = [
  {path: "", text: "Books"}
  {path: "/about", text: "About"}
]
```

- Use the primary color from the ThemeContext to additionally highlight the currently active link. Tip: The `NavLink` component's style prop can be a function that receives the `isActive` state as an argument

  ```tsx
  <NavLink
    style={({ isActive }) => {
      return {};
    }}
  >
    Books
  </NavLink>
  ```

- Make the `AppHeader` sticky, so it stays visible when scrolling down the page

## 16 Add a BookDetailScreen

- Create a `BookDetailScreen` component and display it on the route `/books/:isbn`
- Go to the `BookListItem` component and add a link to the book details.
- Use the `useRouteParams` function to get access to the isbn in the `BookDetailScreen`. Test it either by rendering the isbn or a console.log.
- Create an `async fetchBook(isbn: string): Promise<Book>` function in `src/domain/book/api` and use it to fetch a single book in the `BookDetailScreen`
- Display information about the book in the component.

### Hints

```tsx
<NavLink to={`/books/${book.isbn}`}>...</NavLink>
```

```tsx
const { isbn } = useParams<{ isbn: string }>();
```

```ts
const response = await fetch("http://localhost:4730/books/" + isbn);
```

CSS code snippet to remove the default link styling

```css
a {
  text-decoration: inherit;
  color: inherit;
}
```

### Bonus

- Add a custom `useBook` hook, similar to `useBooks`.
- Show the book's cover image using an `<img>` element
- Try using a custom `loader` to fetch the books in the route definition. Then use the `useLoaderData` hook from `react-router-dom` to get the book data in the `BookDetailsScreen`. Does this alternative approach change the user experience in any way?

  ```tsx
  {
    path: "books/:isbn",
    loader: ({ params }) => {
      return fetchBook(params.isbn!);
    },
    element: <BookDetailScreen />,
  },
  ```

  `BookDetailScreen.tsx`

  ```tsx
  const book = useLoaderData() as Book;
  ```

## 17 Add a BookEditScreen with a simple uncontrolled form

- Create a new screen component `BookEditScreen` and connect it to the route `/books/:isbn/edit'. Add an 'Edit' button to the `BookDetailScreen` that links to the edit screen.
- Add a `<form>` element and a label and input field for the title, as well as a 'Save' button that triggers a submit event on the form.
- When the submit event is triggered, `console.log` the title the user inserted. Use the `useRef` hook to get access to the input element.

### Hints

```tsx
const titleInputRef = useRef<HTMLInputElement>()

<input ref={titleInputRef} id="title" />
```

```tsx
const onSubmit = (event: FormEvent) => {
  event.preventDefault();
  const inputElement: HTMLInputElement = titleInputRef.current!;
};
```

### Bonus

- Add a 'Cancel' button that brings the user back to the book detail screen.
- Use the browser html validation to set the title to be both required and at least 5 characters long.

## 18 Refactor the edit form into a controlled form and prefill it with data from the api

- Keep constant track of the text inserted into the title input, by creating a new state with `useState` and adding an `onInput` event listener. Test the behaviour by temporarily displaying the contents of your state variable next to the input. Remove the `useRef` and adjust the `onSubmit` handler accordingly.
- In the `BookEditScreen` automatically fetch the book to be edited from the api and prefill the content of the input field.

### Hints

```tsx
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)
  }
/>;
```

```tsx
useEffect(() => {
  if (book) {
    setTitle(book.title);
  }
}, [book]);
```

## 19 Add form validation

- Instead of logging the title, add an `alert(title)`, so it becomes more visible.
- Turn off any built-in html validation and display an error message, when the title is shorter than 5 characters.
- While there are any validation errors make sure the alert doesn't show.

### Hints

```tsx
const titleError =
  title.length < 5 ? "The title must be at least 5 characters long" : "";

{
  titleError && <p>{titleError}</p>;
}
```

### Bonus

- Disable the `Save` button with the `disabled` html attribute while there are validation errors.
- Add a red border around the input field if there's a validation error
- Make sure error messages are only being displayed after the user has left the input field for the first time, but then disappear immediately on the next input event that fixes the error.
- Add some CSS to make the form layout less hideous.

## 20 Save the changes to the edited book

- In `/src/domain/book/api` implement a new `updateBook` method, which sends a `PUT` request to the api. Don't forget to send the book as JSON and to set the header `Content-Type: application/json`.
- Call the `updateBook` function when the form is being submitted.

### Hints

```ts
const response = await fetch("http://localhost:4730/books/" + book.isbn, {
  method: "PUT",
  body: JSON.stringify(book),
  headers: {
    "Content-Type": "application/json",
  },
});
```

```ts
await updateBook({
  ...book,
  title,
});
```

### Bonus

- When the book is successfully saved, route the user back to the `BookDetailScreen`, using the `useNavigate` hook from `react-router-dom`.
- Add the ability to also edit the subtitle, author and numPages. Try to think of ways to structure your code so it doesn't bloat.
- Add the ability to edit the price. Make sure that the format `$99.99` is ensured
- Disable the save button, if there's nothing to be saved.
- Instead of overwriting the entire book, with a `PUT` HTTP request, use `PATCH`. Tip: You can use the typescript utility type `Partial<T>` to get a type in which all fields of `T` are optional. What are the benefits/drawbacks of using `PATCH` vs. `PUT`?
