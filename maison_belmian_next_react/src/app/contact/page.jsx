"use client";

import './contact.css'

import { Button, Image } from "react-bootstrap";
import Navbar from "../components/Includes/navbar/navbar";
import Footer from "../components/Includes/footer/footer";

export default function ContactPage() {

    return (
        <>
            <main>
                <Navbar />
                
                <div style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    position: "relative", 
                    width: '100vw', 
                    height: '115vh' 
                }}>
                
                    <form style={{
                        backgroundColor: "white",
                        width: '70%', 
                        height: 'fit-content',
                        position: 'relative',
                        zIndex: '2',  
                        borderRadius: '10px',
                        padding: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
               
                        <div className="mb-4">
                            <label htmlFor="formGroupExampleInput" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email :</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <label htmlFor="formGroupExampleInput" className="form-label">Subject :</label>
                        <select className="form-select mb-4" aria-label="Default select example">
                            <option selected>Select your subject</option>
                            <option value="1">Biscuits</option>
                            <option value="2">Cupcakes</option>
                            <option value="3">Brownies</option>
                            <option value="4">Bespoke</option>
                            <option value="5">Other</option>
                        </select>

                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message :</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write a message'></textarea>
                        </div>

                        <div style={{ 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center",
                                    }}>
                                <Button type="submit"
                                    style={{ 
                                        backgroundColor: '#7FCCD8', 
                                        border: '#7FCCD8'}} 
                                        variant="primary">Send
                                </Button>
                        </div>
                    </form>

                    <Image
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: '1',  
                            opacity: '0.67',
                        }}
                        src="/images/products/Cupcake-vanilla.jpg"
                    />
                </div>
            </main>
                <Footer />
        </>
    );
}
