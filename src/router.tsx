import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
  },
]);
