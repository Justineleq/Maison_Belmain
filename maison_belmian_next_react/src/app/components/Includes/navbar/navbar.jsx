import Link from "next/link";

import "./navbar.css";
import { Image } from "react-bootstrap";
import NavMenu from "../navMenu/navMenu";

export default function Navbar() 
{

  return (
    <>
        <nav className="navbar navbar-expand-lg d-flex flex-column" id="top-navbar">
            <div className="d-flex justify-content-center align-items-center flex-column" id="header-top">
                    
                <div className="navbar-nav d-flex " id="header-logo">
                    <Link className="" href="/">
                        <Image className="logo bg-white" id="logo"
                            src="http://127.0.0.1:8000/images/Logos/Logo.png"
                            alt="logo"
                            height= {103}
                            width= {111}
                        ></Image>
                    </Link>
                </div> 
                    <div id="black-line-logo"></div>
                    <h1 className="main-title">MAISON BELMAIN</h1>
            </div>
        </nav>
          <NavMenu />
    </>
            
    
   
  )

}