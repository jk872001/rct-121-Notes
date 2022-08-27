import React from "react";
import House from "../assests/images/home.jpg";
export const Favourites = () => {
  const cart = JSON.parse(localStorage.getItem("wishlist"));

  const handleDelete = (id) => {
    const value = cart.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("wishlist", JSON.stringify(value));
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        {cart.map((item) => (
          <div key={item.id} class="card">
            <img width="300px" height="250px" src={House} />
            <h2>{item.desc}</h2>
            <p>Price:- ${item.price}</p>
            <p>Location:- {item.location}</p>

            <p>Property Type:-{item.type}</p>

            <button onClick={() => handleDelete(item.id)}>Remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};
