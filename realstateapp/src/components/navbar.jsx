import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const cart= JSON.parse(localStorage.getItem("wishlist"))
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link className="text-link" to="/">
            {" "}
            <h1>Real State Application</h1>
          </Link>
          
          <Link className="text-link" to="/favourite">
            <h2>Favorites:-
            {
                cart?.length === 0 ? null:
                <span>{cart?.length}</span>
            } 
            </h2>
          </Link>
        </nav>
      </header>
    </div>
  );
};
