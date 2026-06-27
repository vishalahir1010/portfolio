import { NavLink } from "react-router-dom";
import {
FaMoon,
FaSun,
FaBars,
FaTimes
}
from "react-icons/fa";

import {
useState,
useEffect
}
from "react";

import "../Style/Navbar.css";

export default function Navbar(){

const [theme,setTheme]=useState(
localStorage.getItem("theme") || "dark"
);

const [menu,setMenu]=useState(false);

useEffect(()=>{

document.body.className=theme;

localStorage.setItem(
"theme",
theme
);

},[theme]);

const toggleTheme=()=>{

setTheme(
theme==="dark"
?
"tokyo"
:
"dark"
);

};

return(

<nav className="navbar">

<div className="logo">
VISHAL.
</div>

<ul className={menu ? "showMenu" : ""}>

<li>
<NavLink to="/" onClick={()=>setMenu(false)}>
Home
</NavLink>
</li>

<li>
<NavLink to="/about" onClick={()=>setMenu(false)}>
About
</NavLink>
</li>

<li>
<NavLink to="/skills" onClick={()=>setMenu(false)}>
Skills
</NavLink>
</li>

<li>
<NavLink to="/projects" onClick={()=>setMenu(false)}>
Projects
</NavLink>
</li>

<li>
<NavLink to="/contact" onClick={()=>setMenu(false)}>
Contact
</NavLink>
</li>

</ul>

<div className="navRight">

{/* <button className="contactBtn">

<NavLink to="/contact">
Contact Me
</NavLink>

</button> */}

<div
className="themeBtn"
onClick={toggleTheme}
>

{
theme==="dark"
?
<FaMoon/>
:
<FaSun/>
}

</div>

<div
className="menuBtn"
onClick={()=>setMenu(!menu)}
>

{
menu
?
<FaTimes/>
:
<FaBars/>
}

</div>

</div>

</nav>

);

}