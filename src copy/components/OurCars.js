import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartActions";
import car1Image from "../Images/mazda-mx-5-miata.webp";
import car2Image from "../Images/honda-civic-si.webp";
import car3Image from "../Images/subaru-brz.webp";
import car4Image from "../Images/subaru-wrx.webp";
import car5Image from "../Images/toyota-gr86.webp";
import car6Image from "../Images/volkswagen-jetta-gli.webp";

const OurCars = () => {
  const dispatch = useDispatch();

  const cars = [
    { id: 1, make: "Mazda", model: "MX5", year: 2020, image: car1Image },
    { id: 2, make: "Honda", model: "Civic", year: 2021, image: car2Image },
    { id: 3, make: "Subaru", model: "BRZ", year: 2019, image: car3Image },
    { id: 4, make: "Subaru", model: "WRX", year: 2022, image: car4Image },
    { id: 5, make: "Toyota", model: "GR86", year: 2023, image: car5Image },
    {
      id: 6,
      make: "Volkswagen",
      model: "Jetta GLI",
      year: 2024,
      image: car6Image,
    },
  ];

  const handleAddToCart = (car) => {
    dispatch(addToCart(car));
  };

  return (
    <div>
      <h1>Products Page</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id={`dropdownMenuButton${product.id}`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {selectedColor ? selectedColor : "Select Color"}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby={`dropdownMenuButton${product.id}`}
                  >
                    {product.colors.map((color, index) => (
                      <a
                        key={index}
                        className="dropdown-item"
                        href="#"
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </a>
                    ))}
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleBuy(product.price)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPrice > 0 && (
        <div className="total-price">
          <h2>Total price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default Products;
