'use client'

import { useEffect } from "react";

const ErrorComponent = ({ error, reset }: any) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-500" onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorComponent;
