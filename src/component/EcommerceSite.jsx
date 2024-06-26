import React from "react";
import { useNavigate } from "react-router-dom";
import "./ParticlesBackground.css"; // Import the CSS file for styling

const Ecommerce = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    navigate("/"); // Redirect to login page
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Shoes",
      description: "This is one of the great product.",
      price: "$10.00",
      image:
        "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?cs=srgb&dl=pexels-craytive-1456706.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Dress",
      description: "This is another great product.",
      price: "$20.00",
      image:
        "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?cs=srgb&dl=pexels-anne-363161-985635.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Watch",
      description: "Yet another great product.",
      price: "$1.00",
      image:
        "https://i.pinimg.com/736x/b8/ce/85/b8ce85a3527ffdfd289f84202a66070e.jpg",
    },
  ];

  return (
    <div className="ecommerce-container">
      <header className="header">
        <h1>Welcome to the E-commerce Site</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>&copy; 2024 E-commerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Ecommerce;
