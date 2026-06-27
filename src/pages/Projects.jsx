import "../Style/projects.css";

export default function Projects() {

const projects=[

{
id:"01",
name:"Hotel Booking",
image:
"https://images.unsplash.com/photo-1566073771259-6a8506099945",

tech:"React • CSS • Responsive",
live_link:"#"
},

{
id:"02",
name:"LUXE SCENT    ",
image:
" https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",

tech:"React • API • UI Design",
live_link:"https://luxesent.netlify.app/"
},

{
id:"03",
name:"Portfolio",
image:
"https://images.unsplash.com/photo-1498050108023-c5249f4df085",

tech:"React • Vite • Premium UI",
live_link:"https://vishalkandoriya.netlify.app"

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
<a href={item.live_link} target="_blank">


View Project
</a>
</button>

</div>

</div>

))}

</div>

</section>

);

}