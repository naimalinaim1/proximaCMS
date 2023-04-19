import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <div className="min-h-[90vh] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
          <p className="text-lg mb-4">
            We're sorry, but the page you requested could not be found.
          </p>
          <p className="text-lg mb-4">{error.statusText || error.message}</p>
          <Link to="/">
            <button className="btn btn-primary text-white font-semibold">
              Go back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
