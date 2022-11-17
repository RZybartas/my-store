import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl m-2">Oops!</h1>
          <p>Sorry, page not found.</p>
          <p>
            <i>{error.statusText}</i>
          </p>
        </div>
      );
    }
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-4xl">
      Something went wrong
    </div>
  );
};
