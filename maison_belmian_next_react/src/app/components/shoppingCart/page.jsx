"use client";

import "./style.css";
import { CartContext } from "@/AppContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(true);

  const handleOrderSubmition = () => {
    fetch("http://localhost:8000/api/order/create", {
      method: "POST",
      body: JSON.stringify({ cart: cart }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        // Si nous somme ici, c'est que le POST de la commande c'est bien déroulé, reste à informer l'utilisateur
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
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
            {cart.map((product, index) => (
              <tbody key={"shopping_cart_item_" + index}>
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
              </tbody>
            ))}
          </table>
          <div className="order-div d-flex justify-content-center">
            <Button className="btn-make-order" onClick={() => handleOrderSubmition()}>
                Send order
            </Button>
          </div>
        </>
      )}
    </>
  );
}
