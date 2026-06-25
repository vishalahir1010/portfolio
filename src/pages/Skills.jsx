import "../Style/skills.css";

const skills = [

{
title:"Frontend",
icon:"✦",
desc:"Building modern interfaces with clean experience.",
stack:[
"React",
"JavaScript",
"HTML",
"CSS"
]
},

{
title:"UI Design",
icon:"◉",
desc:"Premium responsive layouts with smooth interaction.",
stack:[
"Figma",
"Animation",
"Responsive"
]
},

{
title:"Performance",
icon:"⚡",
desc:"Fast loading and optimized web experience.",
stack:[
"Vite",
"SEO",
"UX"
]
},

{
title:"Creative",
icon:"◆",
desc:"Modern premium visuals and interaction.",
stack:[
"Glass",
"Gradient",
"Motion"
]
}

];

export default function Skills(){

return(

<section
className="skills"
id="skills"
>

<p className="top">

MY SKILLS

</p>

<h1>

Building
Premium
Experiences

</h1>

<div className="skillWrap">

{

skills.map((item,index)=>(

<div
className="skillCard"
key={index}
>

<div className="glow"></div>

<div className="icon">

{item.icon}

</div>

<h2>

{item.title}

</h2>

<p>

{item.desc}

</p>

<div className="badges">

{

item.stack.map((tag)=>(

<span
key={tag}
>

{tag}

</span>

))

}

</div>

</div>

))

}

</div>

</section>

)

}