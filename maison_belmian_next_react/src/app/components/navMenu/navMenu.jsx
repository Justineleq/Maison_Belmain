import { useState } from "react";
import "./navMenu.css";

import Link from "next/link"

export default function NavMenu() {

    const [menuOpen, setMenuOpen] = useState(false); 

    const shoppingCartIcon = "/Icons/icons8-shopping-cart-48.png";

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="burger-icon">
            <label className="burger" htmlFor="burger">
                <input
                    className="line"
                    type="checkbox"
                    id="burger"
                    onChange={handleToggleMenu}
                />
            </label>

        <div className="nav-container" id="navbar-list"  style={{ display: menuOpen ? 'block' : 'none'}}>
       
            <ul className="navbar-nav d-flex justify-content-evenly align-items-center">
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/products/bespoke">Bespoke cakes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/products/brownie">Brownies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/products/biscuit">Biscuits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/products/cupcake">Cupcakes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/">Recipe of the month</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/">Contact</Link>
                </li>
                <li className="nav-item" id="shopping-cart">
                    <Link className="nav-link fs-5" href="/">
                        <img 
                            src={"http://localhost:8000/images/" + shoppingCartIcon} 
                            alt="shopping cart icon"
                            height={48}
                            width={48}
                            />
                    </Link>
                </li>
            </ul>
        
        </div>
        </div>
    )
}