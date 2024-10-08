import { useState } from "react";
import "./navMenu.css";
import { CartContext } from "@/AppContext";
import { useContext } from "react";
import Link from "next/link";

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext);

  const shoppingCartIcon = "/Icons/icons8-shopping-cart-48.png";

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar-menu">
      <div className="burger-icon">
        <label className="burger" htmlFor="burger">
          <input
            className="line"
            type="checkbox"
            id="burger"
            onChange={handleToggleMenu}
          />
        </label>

        {/* Maybe take out this div- wanted to use it to display-none the list and not have the div take up the place */}
        <div className="nav-container">
          <div id="navbar-list">
            <ul
              className={`${!menuOpen && "customVisibility"}`}
              style={{ listStyle: "none" }}
            >
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/products/bespoke">
                  Bespoke
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/products/brownie">
                  Brownies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/products/biscuit">
                  Biscuits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/products/cupcake">
                  Cupcakes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/recipeOfTheMonth">
                  Recipe of the month
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Link className="nav-link fs-6 cartIcon" href="/shoppingCart">
          {cart && cart.length > 0 && <p className="cartItemsIndicator">{cart.length}</p>}
          <img
            src={"http://localhost:8000/images/" + shoppingCartIcon}
            alt="shopping cart icon"
            height={48}
            width={48}
          />
        </Link>
      </div>

    </div>

          
      
  );
}
