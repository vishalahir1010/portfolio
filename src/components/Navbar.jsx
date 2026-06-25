import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

import "../style/navbar.css";

export default function Navbar(){

const [theme,setTheme]=useState(
localStorage.getItem("theme") || "dark"
);

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

<ul>

<li>
<NavLink to="/">
Home
</NavLink>
</li>

<li>
<NavLink to="/about">
About
</NavLink>
</li>

<li>
<NavLink to="/skills">
Skills
</NavLink>
</li>

<li>
<NavLink to="/projects">
Projects
</NavLink>
</li>

<li>
<NavLink to="/contact">
Contact
</NavLink>
</li>

</ul>

<div className="navRight">

<button>


<NavLink to="/contact" >
Contact Me
</NavLink>


</button>

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

</div>

</nav>

);

}