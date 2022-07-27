import React, { useEffect } from "react";
import "./notfound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page not found";
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);
  return <div className="notFound">404 | Page not found 🙃</div>;
};

export default NotFound;
