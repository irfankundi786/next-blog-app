import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found </h2>
      <p>Sorry ,page you are loading is not exist !</p>
      <Link href="/"> Return to Home Page</Link>
    </div>
  );
};

export default NotFound;
