import "../App.css";
import { data } from "../data";
import House from "../assests/images/home.jpg";
import { useState } from "react";

export function Home() {
  const [property, setProperty] = useState(data);
  const [search, setSearch] = useState("");

  const handleLocation = (e) => {
    if (e.target.value === "Banglore") {
      const value = data.filter((e) => {
        return e.location === "Banglore";
      });
      setProperty(value);
    }
    if (e.target.value === "Gurugram") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.location === "Gurugram";
      });
      setProperty(value);
    }
    if (e.target.value === "Hyderabad") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.location === "Hyderabad";
      });
      setProperty(value);
    }
    if (e.target.value === "Delhi") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.location === "Delhi";
      });
      setProperty(value);
    }
    if (e.target.value === "Select") {
      setProperty(data);
    }
  };

  const handleTime = (e) => {
    if (e.target.value === "After 1 week") {
      const value = data.filter((e) => {
        return e.date === "After 1 week";
      });
      setProperty(value);
    }
    if (e.target.value === "After 1 month") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.date === "After 1 month";
      });
      setProperty(value);
    }
    if (e.target.value === "After 2 month") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.date === "After 2 month";
      });
      setProperty(value);
    }
    if (e.target.value === "After 5 month") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.date === "After 5 month";
      });
      setProperty(value);
    }
    if (e.target.value === "Select") {
      setProperty(data);
    }
  };

  const handlePrice = (e) => {
    if (e.target.value === "0-2000") {
      const value = data.filter((e) => {
        return +e.price > 0 && +e.price < 2000;
      });
      setProperty(value);
    }
    if (e.target.value === "2000-4000") {
      setProperty(data);
      const value = data.filter((e) => {
        return +e.price > 2000 && +e.price < 4000;
      });
      setProperty(value);
    }
    if (e.target.value === "4000-7000") {
      setProperty(data);
      const value = data.filter((e) => {
        return +e.price > 4000 && +e.price < 7000;
      });
      setProperty(value);
    }
    if (e.target.value === "7000-10000") {
      setProperty(data);
      const value = data.filter((e) => {
        return +e.price > 7000 && +e.price < 10000;
      });
      setProperty(value);
    }
    if (e.target.value === "Select") {
      setProperty(data);
    }
  };

  const handleType = (e) => {
    if (e.target.value === "House") {
      const value = data.filter((e) => {
        return e.type === "House";
      });
      setProperty(value);
    }
    if (e.target.value === "Shops") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.type === "Shops";
      });
      setProperty(value);
    }
    if (e.target.value === "Flat") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.type === "Flat";
      });
      setProperty(value);
    }
    if (e.target.value === "Office") {
      setProperty(data);
      const value = data.filter((e) => {
        return e.type === "Office";
      });
      setProperty(value);
    }
    if (e.target.value === "Select") {
      setProperty(data);
    }
  };

  const productArr = JSON.parse(localStorage.getItem("wishlist")) || [];
  const handleFvrt = (item) => {
    // console.log(item)
    window.location.reload();
    const dupliactes = productArr.filter((cartItem) => cartItem.id === item.id);
    if (dupliactes.length === 0) {
      const productToAdd = {
        ...item,
      };
      productArr.push(productToAdd);
    }
    // console.log(productArr)
    localStorage.setItem("wishlist", JSON.stringify(productArr));
    // alert('product is successfully added to favourite list')
  };

  return (
    <div>
      <div className="filter-box">
        <div>
          <label>Location:-</label>

          <select name="cars" id="cars" onChange={handleLocation}>
            <option value="Select">Select</option>
            <option value="Banglore">Banglore</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div>
          <label>Select Move-in-Date:-</label>

          <select name="cars" id="cars" onChange={handleTime}>
            <option value="Select">Select</option>
            <option value="After 1 week">After 1 week</option>
            <option value="After 1 month">After 1 month</option>
            <option value="After 2 month">After 2 month</option>
            <option value="After 5 month">After 5 month</option>
          </select>
        </div>
        <div>
          <label>Price:-</label>

          <select name="cars" id="cars" onChange={handlePrice}>
            <option value="Select">Select</option>
            <option value="0-2000">0-2000</option>
            <option value="2000-4000">2000-4000</option>
            <option value="4000-7000">4000-7000</option>
            <option value="7000-10000">7000-10000</option>
          </select>
        </div>
        <div>
          <label>Property Type:-</label>

          <select name="cars" id="cars" onChange={handleType}>
            <option value="Select">Select</option>
            <option value="House">House</option>
            <option value="Office">Office</option>
            <option value="Shops">Shops</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="container">
        {property
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.name?.toLowerCase().includes(search?.toLowerCase()) ||
              val.price?.toLowerCase().includes(search?.toLowerCase()) ||
              val.desc?.includes(search) ||
              val.location?.toLowerCase().includes(search?.toLowerCase()) ||
              val.type?.toLowerCase().includes(search?.toLowerCase()) ||
              val.date?.toLowerCase().includes(search?.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <div key={item.id} class="card">
              <img width="300px" height="250px" src={House} />
              <h2>{item.desc}</h2>
              <p>Price:- ${item.price}</p>
              <p>Location:- {item.location}</p>

              <p>Property Type:-{item.type}</p>

              <button onClick={() => handleFvrt(item)}>
                Add to Favourites
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
