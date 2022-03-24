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
            <h1><a>Monthly planner generator</a></h1>
            <nav>
              <span className={["menu-icon", activeIcon].join(" ")} onClick={respNav}></span>
              <ul className={activeNav}>
                <li><a data-id="generator" onClick={scrollFun}>Generator</a></li>
                <li><a data-id="gallery" onClick={scrollFun}>Gallery</a></li>
              </ul>
            </nav>
      </header>
    )
}