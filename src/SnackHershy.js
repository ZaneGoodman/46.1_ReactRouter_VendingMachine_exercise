import React from "react";
import { Link } from "react-router-dom";

function SnackHershy() {
  return (
    <div>
      <img src="https://www.thedailymeal.com/img/gallery/11-things-you-didnt-know-about-hersheys/INTRO-hersheys-digitalreflections-_-Shutterstock.com_copy_0.jpg" />
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default SnackHershy;
