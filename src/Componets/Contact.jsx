import "../Style/contact.css";

export default function Contact() {

return (

<section
className="contact"
id="contact"
>

<div className="contactBox">

<div className="contactLeft">

<p className="contactTag">
CONTACT
</p>

<h2>

Let's Build Something Amazing

</h2>

<p>

Available for frontend and
modern website projects.

</p>

</div>

<div className="contactRight">

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
placeholder="Your Message"
/>

<button>

Send Message

</button>

</div>

</div>

</section>

);

}   