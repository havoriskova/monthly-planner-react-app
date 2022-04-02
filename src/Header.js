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

function scrollFun (e) {
let idName = e.target.attributes[0].value;
let element = document.getElementById(idName);
element.scrollIntoView({behavior: "smooth"});
}



    return(
         <header className="Header">
            <h1>Monthly planner generator</h1>
            <nav>
              <span className={["menu-icon", activeIcon].join(" ")} onClick={respNav}></span>
              <ul className={activeNav}>
                <li><button data-id="generator" onClick={scrollFun}>Generator</button></li>
                <li><button data-id="gallery" onClick={scrollFun}>Gallery</button></li>
              </ul>
            </nav>
      </header>
    )
}