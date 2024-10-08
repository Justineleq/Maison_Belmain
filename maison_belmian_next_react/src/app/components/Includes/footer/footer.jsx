import "./footer.css"
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function Footer() 
{
    
    return(
            <div className="footer">
                <Link href="https://www.instagram.com/maisonbelmain/">
                    <Image src="http://127.0.0.1:8000/images/Icons/icons8-instagram-48.png" alt="Instagram logo"/>
                </Link>
                <Link href="https://www.whatsapp.com/">
                    <Image src="http://127.0.0.1:8000/images/Icons/icons8-whatsapp-48.png" alt="WhatsApp logo"/>
                </Link>
                <Link href="https://www.facebook.com/">
                    <Image src="http://127.0.0.1:8000/images/Icons/icons8-facebook-48.png" alt="Facebook logo"/>
                </Link>
            </div>     

    )
}