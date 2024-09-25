"use client"

import { useState } from "react";

// import { addProductToCart } from '../productCard';

export default function ShoppingCart(product) 
{
  
console.log(product, 'shopping cart');


    return(
      
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Flavour</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                    <td>flavour</td>
                    <td>amount</td>
                    <td>price</td>
                    </tr>
            </tbody>
        </table>

    );
}