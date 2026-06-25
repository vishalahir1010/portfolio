import "../Style/contact.css";

export default function Contact(){

return(

<section
className="contact"
id="contact"
>

<div className="contactTitle">

<p>GET IN TOUCH</p>

<h2>

Let's Work Together

</h2>

</div>

<div className="contactWrap">

<div className="left">

<div className="card">

<h3>
Name
</h3>

<p>
Vishal Ahir
</p>

</div>

<div className="card">

<h3>
Address
</h3>

<p>
Your City, Gujarat, India
</p>

</div>

<div className="card">

<h3>
Email
</h3>

<p>
vishal@email.com
</p>

</div>

<div className="card">

<h3>
Phone
</h3>

<p>
+91 XXXXX XXXXX
</p>

</div>

<div className="card">

<h3>
Available
</h3>

<p>
Frontend Developer
</p>

</div>

</div>

<div className="right">

<input
type="text"
placeholder="Your Name"
/>

<input
type="email"
placeholder="Your Email"
/>

<textarea
rows="6"
placeholder="Write Message"
/>

<button>

Send Message

</button>

</div>

</div>

</section>

)

}