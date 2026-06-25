import "../Style/projects.css";

export default function Projects() {

const projects=[

{
id:"01",
name:"Hotel Booking",
image:
"https://images.unsplash.com/photo-1566073771259-6a8506099945",

tech:"React • CSS • Responsive"
},

{
id:"02",
name:"Food Delivery",
image:
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",

tech:"React • API • UI Design"
},

{
id:"03",
name:"Portfolio",
image:
"https://images.unsplash.com/photo-1498050108023-c5249f4df085",

tech:"React • Vite • Premium UI"
}

];

return(

<section
className="projects"
id="projects"
>

<h2>
Featured Projects
</h2>

<div className="projectGrid">

{projects.map((item)=>(

<div
className="card"
key={item.id}
>

<div className="imgBox">

<img
src={item.image}
alt=""
/>

</div>

<div className="content">

<span>
{item.id}
</span>

<h3>
{item.name}
</h3>

<p>
{item.tech}
</p>

<button>

View Project

</button>

</div>

</div>

))}

</div>

</section>

);

}