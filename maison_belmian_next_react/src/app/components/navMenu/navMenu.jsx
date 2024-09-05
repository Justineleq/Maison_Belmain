import "./navMenu.css";

import Link from "next/link"

export default function NavMenu() {
    
    const shoppingCartIcon = "/Icons/icons8-shopping-cart-48.png"

    return(
        <div class="burger-icon">
            <label class="burger" for="burger">
             <input class="line" type="checkbox" id="burger" />
            </label>

        <div className="nav-container" id="navbar-list" >
       
            <ul className="navbar-nav d-flex justify-content-evenly align-items-center">
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
        
        </div>
        </div>
    )
}