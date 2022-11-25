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
