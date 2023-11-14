import React from "react";
import { Link } from "react-router-dom";

function SnackChip() {
  return (
    <div>
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/chips-2.jpg?quality=82&strip=1" />
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default SnackChip;
