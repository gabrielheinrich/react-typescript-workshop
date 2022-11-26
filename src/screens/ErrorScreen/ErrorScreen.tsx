import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorScreen = () => {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : "An unknown error occured";

  return (
    <div>
      <h1>Oops</h1>
      <h2>Something went wrong</h2>
      <p>{errorMessage}</p>
    </div>
  );
};
