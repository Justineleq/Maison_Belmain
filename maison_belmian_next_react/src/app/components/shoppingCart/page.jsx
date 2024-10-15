"use client";

import "./style.css";
import { CartContext } from "@/AppContext";
import { useContext, useState } from "react";
import { Button, Alert } from "react-bootstrap";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleOrderSubmission = () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    fetch("http://localhost:8000/api/order/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cart }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(cart);
        
        setLoading(false);
        setSuccess(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("There was an issue submitting your order.");
        setLoading(false);
      });
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <Alert variant="info">Submitting your order...</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Flavour</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={product.id}>
                  <td>{product.flavour.name}</td>
                  <td>{product.category.type}</td>
                  <td>{product.quantity.amount}</td>
                  <td>{product.finalPrice}€</td>
                  <td>
                    <Button
                      className="btn-shopping-cart"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="order-div d-flex flex-column align-items-center">
            <Button className="btn-make-order" onClick={handleOrderSubmission}>
              Send order
            </Button>
          </div>
          <p><strong>** All orders sent will be reviewed by Joanne and you will be updated on the status in due course **</strong></p>
        </>
      )}
    </>
  );
}
