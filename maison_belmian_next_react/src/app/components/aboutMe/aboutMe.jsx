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
            Joanne Todd Belmain is an extremely accomplished chef, with 24 years' experience in luxury hotels, Michelin-starred restaurants and artisan bakeries. Her impressive career includes preparing meals for Nobel Peace Prize banquets, music award ceremonies, celebrities and royalty. She honed her craft in prestigious kitchens, working alongside culinary legends such as Marcus Wareing and Gordon Ramsay in London, and Eyvind Hellstrøm in Norway. Her career also includes heading up culinary operations at Brown's Hotel, London's oldest hotel. Joanne's expertise extends to large-scale bespoke events, private functions and luxury weddings, where she has designed award-winning afternoon teas. She was head judge of the UK Afternoon Tea Awards, being part of the inaugural team in 2016, and was also a tasting judge for Cacao Barry's World Chocolate Masters. With a BTM in pastry, confectionery, ice cream and catering, as well as advanced qualifications in food safety and health and safety, Joanne ensures her creations are not only delicious but also meet the highest standards. Since 2020, she has broadened her expertise in the French pastry arts, bringing her wealth of experience to Maison Belmain, where she creates bespoke products tailored to the needs of her customers, offering unforgettable culinary experiences.

            </p>
        
        
            <div id="black-line"></div>
        </div>
    )
}