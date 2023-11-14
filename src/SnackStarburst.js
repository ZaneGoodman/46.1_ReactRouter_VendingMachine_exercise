import React from "react";
import { Link } from "react-router-dom";
function SnackStarburst() {
  return (
    <div>
      <img src="https://images.freshop.com/00040000000518/b8335ff4e8ce785a3811fa54585d706f_large.png" />
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default SnackStarburst;
