"use client";

import { Image } from "react-bootstrap";
import Navbar from "../components/Includes/navbar/navbar";
import Footer from "../components/Includes/footer/footer";

export default function ContactPage()
{

    return(
        <>
            <main>
                <Navbar/>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{
                        backgroundColor: "white", 
                        width: '80%', 
                        height: '80%',
                        position: 'absolute',
                        zIndex: '1',
                        borderRadius: '10px'
                        }}>

                    </div>
                    <Image style={{ 
                        opacity: '67%', 
                        position: 'relative'
                        }}
                        src="/images/products/Cupcake-vanilla.jpg"
                        width='100%'
                    />


                </div>
            </main>
                <Footer/>
        </>
    );

}