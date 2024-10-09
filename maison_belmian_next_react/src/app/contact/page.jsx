"use client";

import './style.css'

import { Button, Image } from "react-bootstrap";
import Navbar from "../components/Includes/navbar/navbar";
import Footer from "../components/Includes/footer/footer";
import { useState } from 'react';

export default function ContactPage(props) {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false); 
    const [success, setSuccess] = useState(false); 

    console.log(props, 'props from contact');


    async function handleContactForm(event) {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);
    
        const { name, email, subject, message } = contact;

    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/contact/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });

            if(!response.ok) {
                throw new Error('Message failed to send')
            }
    
            const data = await response.json();
            setLoading(false);
            setSuccess(true);

            //clear the form
            setContact({
                name: '',
                email: '',
                subject: '',
                message: ''
            })

            setTimeout(() => setSuccess(false), 3000); 
            
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }
    
    return (
        <>
            <main>
                <Navbar />
                
                <div className="form-container">                
                    <form className="form" onSubmit={handleContactForm}>
                        <div className="mb-4">
                            <label htmlFor="formGroupExampleInput" className="form-label">Name :</label>
                            <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Sarah Smith"
                                value={contact.name} 
                                onChange={(e) => setContact({...contact, name: e.target.value})} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email :</label>
                            <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                                value={contact.email} 
                                onChange={(e) => setContact({...contact, email: e.target.value})} />
                        </div>
                        <label htmlFor="formGroupExampleInput" className="form-label">Subject :</label>
                        <select className="form-select mb-4" aria-label="Default select example"
                            value={contact.subject} 
                            onChange={(e) => setContact({ ...contact, subject: e.target.value })}>
                            <option required defaultValue>Select your subject</option>
                            <option value="1">Biscuits</option>
                            <option value="2">Cupcakes</option>
                            <option value="3">Brownies</option>
                            <option value="4">Bespoke</option>
                            <option value="5">Other</option>
                        </select>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message :</label>
                            <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write a message' 
                                value={contact.message} 
                                onChange={(e) => setContact({...contact, message: e.target.value})} ></textarea>
                        </div>
                        <div className='btn-container'>
                                <Button type="submit" className='contact-btn'>Send</Button>
                        </div>
                    </form>
                    <Image className='background-contact-img'
                        src="/images/products/Cupcake-vanilla.jpg"
                    />
                </div>
              {/* Display success or error messages */}
              {/* {loading && <p>Sending message...</p>} */}
                {success && <p class="alert alert-success" role="alert">Message sent successfully!</p>}
                {error && <p>Something went wrong. Please try again.</p>}
               
            </main>
                <Footer />
        </>
    );
}
