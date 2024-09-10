"use client";

import Footer from "../components/Includes/footer/footer";
import Navbar from "../components/Includes/navbar/navbar";

export default function RecipeOfTheMonth() 
{

    return(
        <>
            <main>
                <Navbar/>

                <div style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <h2 className="title-product-page"
                        style={{
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                    }}>Recipe of the month</h2>
                </div>

            </main>
            <Footer/>
            
        </>
    );
}