"use client"

import { useEffect, useState } from "react";
import Footer from "../components/Includes/footer/footer";
import Navbar from "../components/Includes/navbar/navbar";
import ShoppingCart from "../components/shoppingCart/page";
// import {addProduct} from "../components/productCard"

export default function ShoppingCartPage()
{
    const [cart, setCart] = useState([]);


    console.log(cart, 'shopping cart product');
    
    return(
        <>
            <main>
                <Navbar/>

                <ShoppingCart cart={cart} />

            </main>
                <Footer/>
        </>
    );
}