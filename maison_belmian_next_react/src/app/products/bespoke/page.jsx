"use client";

import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import { Button } from "react-bootstrap";

export default function BespokePage()
{

    return(
        <>
            <Navbar/>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                <h2 className="title-product-page"
                    style={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                }}>Bespoke</h2>
            
                <p style={{ textAlign: 'center', margin: '0 15px 0px 15px'}}>
                    Welcome to our bakery, where every moment is made memorable with our delicious creations. We specialize in a variety of treats, including biscuits, brownies, and beautifully decorated cupcakes, all crafted with the utmost care. For special occasions, our bespoke cakes are designed to perfectly complement your celebrations, whether it's a birthday, wedding, or any other event. Let us bring a touch of delight to your gatherings with our wide range of delectable confections.
                </p>
                <Button style={{
                        margin: 10,
                        backgroundColor: '#7FCCD8', 
                        border: '#7FCCD8'}}>Contact us!</Button>
            </div>

                <Footer/>
        </>
    );
}