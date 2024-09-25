"use client";

import { Image } from "react-bootstrap";
import Footer from "../components/Includes/footer/footer";
import Navbar from "../components/Includes/navbar/navbar";

export default function RecipeOfTheMonth() 
{

    return(
        <>
            <main>
                <Navbar/>
            <div className="rotm-container">
                {/* change class name */}
                <div className="rotm">
                    <h2 className="title-product-page">Recipe of the month</h2>
                </div>
            </div>

            <div className="bespoke-img">
                    <Image style={{ 
                        margin: 10,
                        borderRadius: '10px'}}
                        src='/images/products/Cupcakes-red-velvet.jpg'
                        height={200}
                        width={100}
                        >
                    </Image>
            </div>
            <div>
                <p className="ROTM-paragraph">
                Welcome to our Recipe of the Month! This September, we're delighted to feature our decadent Salted Caramel Apple Cake, a perfect blend of sweet and savory that embodies the essence of autumn. Imagine layers of moist, spiced apple cake, infused with a rich caramel sauce, and topped with a sprinkle of sea salt for that irresistible contrast. Each slice is a celebration of fall flavors, with tender apple chunks and a buttery caramel drizzle that creates a melt-in-your-mouth experience. Whether you're hosting a cozy gathering or simply indulging in a quiet moment, this cake is sure to bring warmth and delight to every occasion
                </p>
            </div>

            </main>
            <Footer/>
            
        </>
    );
}