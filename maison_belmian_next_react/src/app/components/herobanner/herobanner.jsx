import { Image } from "react-bootstrap";
import "./herobanner.css"

export default function HeroBanner() {

    const imageForHerobanner = "Herobanner/chocolate-banner.jpg";

    return(
        <div className="herobanner-container">
            <Image
                className="herobanner-image"
                src={"http://localhost:8000/images/" + imageForHerobanner}
                >
            </Image>
            <div className="herobanner-text">A party without cake is just a get-together.</div>
        </div>
    )
}