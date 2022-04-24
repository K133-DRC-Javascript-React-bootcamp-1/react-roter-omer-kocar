import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>
          <Link to="about">About</Link>
        </li>
        <Link to="products">Products</Link>
      </ul>
    </nav>
  );
}

export default Nav;
