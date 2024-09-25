"use client";

import './page.css';
import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import { Button } from "react-bootstrap";

export default function BespokePage()
{

    return(
        <>
            <Navbar/>

            <div className="bespoke-page">
                <h2 className="title-product-page">Bespoke</h2>
            
                <p className="bespoke-paragraph">
                    Welcome to our bakery, where every moment is made memorable with our delicious creations. We specialize in a variety of treats, including biscuits, brownies, and beautifully decorated cupcakes, all crafted with the utmost care. For special occasions, our bespoke cakes are designed to perfectly complement your celebrations, whether it's a birthday, wedding, or any other event. Let us bring a touch of delight to your gatherings with our wide range of delectable confections.
                </p>
                <Button className="bespoke-btn">Contact us!</Button>
            </div>

                <Footer/>
        </>
    );
}