import { NavLink } from "react-router-dom";
import "../Style/Hero.css";

export default function Hero(){

return(

<section className="hero">

<div className="heroLeft">

<p className="topText">
FRONTEND DEVELOPER
</p>

<h1>

Build Future
<br/>

<span>
With Premium
</span>

<br/>

Web Design

</h1>

<p className="heroDesc">

Creating modern responsive
web experiences with React
and beautiful UI design.

</p>

<div className="buttons">

<button className="primary">

<NavLink to="Projects">View Work</NavLink>

</button>

<button className="secondary">

<NavLink to="/contact" >
Contact Me
</NavLink>

</button>

</div>

<div className="heroInfo">

<div className="info">

<h2>
10+
</h2>

<p>
Projects
</p>

</div>

<div className="info">

<h2>
1+
</h2>

<p>
Years Learning
</p>

</div>

<div className="info">

<h2>
100%
</h2>

<p>
Responsive
</p>

</div>

</div>

</div>

<div className="heroRight">

<img
src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
alt="Developer"
/>

</div>

</section>

)

}