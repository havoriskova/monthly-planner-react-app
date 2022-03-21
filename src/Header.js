import "./Header.css";
import {useState} from "react";

export default function Header() {

let [activeNav, setActiveNav] = useState(null);
let [activeIcon, setActiveIcon] = useState(null);

function respNav () {
    
    // toggle
    activeNav == null ? setActiveNav("active-nav") : setActiveNav(null);
    activeIcon == null ? setActiveIcon("active-icon") : setActiveIcon(null);


}



    return(
         <header className="Header">
            <h1><a href="#start">Monthly planner generator</a></h1>
            <nav>
              <span className={["menu-icon", activeIcon].join(" ")} onClick={respNav}></span>
              <ul className={activeNav}>
                <li><a href="#generator">Generator</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </nav>
      </header>
    )
}