import { useState } from "react";
import "./navMenu.css";

import Link from "next/link"

export default function NavMenu() {
    
    const shoppingCartIcon = "/Icons/icons8-shopping-cart-48.png"

        const [isOpen, setIsOpen] = useState(false);

        const dropdownMenu = () => {
            setIsOpen(!isOpen);
          };
    
        return(        
        
        <div className="nav-container" id="navbar-list">
            <div class="hamburger" onClick={dropdownMenu}>
                <input 
                    className="checkbox" 
                    type="checkbox" 
                    checked={isOpen} 
                    onChange={dropdownMenu} 
                    aria-expanded={isOpen}
                />
                <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                    <path
                    class="lineTop line"
                    stroke-linecap="round"
                    stroke-width="2"         
                    d="M6 11L44 11"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M6 24H43"
                    class="lineMid line"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M6 37H43"
                    class="lineBottom line"
                    ></path>
                </svg>
                
       
         </div>

       
             <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/product/Bespoke">Bespoke cakes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/product/Brownie">Brownies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/product/Biscuit">Biscuits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fs-5" href="/product/Cupcake">Cupcakes</Link>
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
        <div id="black-line"></div>
        </div>
    )
}