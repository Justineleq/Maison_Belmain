import "./aboutMe.css"

import { Image } from "react-bootstrap";

export default function AboutMe()
{

    return(
        <div id='about-me-div'>
            <Image style={{ borderRadius: '10px'}}
                className="about-me-image" id="about-me-image"
                src="http://127.0.0.1:8000/images/personal/Joanne.webp"
                alt="Joanne the boss lady"
                height= {103}
                width= {200} 
            />

            <p className="about-me-paragraph">
            Welcome to our bakery, where every moment is made memorable with our delicious creations. We specialize in a variety of treats, including biscuits, brownies, and beautifully decorated cupcakes, all crafted with the utmost care. For special occasions, our bespoke cakes are designed to perfectly complement your celebrations, whether it's a birthday, wedding, or any other event. Let us bring a touch of delight to your gatherings with our wide range of delectable confections.
            </p>
        
        
            <div id="black-line"></div>
        </div>
    )
}