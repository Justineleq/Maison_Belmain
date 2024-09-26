"use client"

import './style.css';
import { CartContext } from "@/AppContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";



export default function ShoppingCart() 
{
    const {cart, removeFromCart} = useContext(CartContext)
  
    return(
        <>
            {cart.length === 0 ? (
                <h3>Your cart is empty</h3>
            ) : (
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
                    {cart.map((product) => (
                        <tbody>
                            <tr key={product.id}>
                                <td>{product.flavour.name}</td>
                                <td>{product.category.type}</td>
                                <td>{product.quantity.amount}</td>
                                <td>{product.finalPrice}€</td>
                                <td>
                                <Button className="btn-shopping-cart"
                                    onClick={() => removeFromCart(product.id)}>Remove</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}

            </table>
            )}
        </>

    );
}