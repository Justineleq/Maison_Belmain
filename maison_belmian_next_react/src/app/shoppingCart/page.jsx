"use client"

import Footer from "../components/Includes/footer/footer";
import Navbar from "../components/Includes/navbar/navbar";
import ShoppingCart from "../components/shoppingCart/page";

export default function ShoppingCartPage()
{
    
    return(
        <>
            <main>
                <Navbar/>

                <ShoppingCart />

            </main>
                <Footer/>
        </>
    );
}