import {
Routes,
Route
}
from "react-router-dom";

import Navbar from "./components/Navbar";


import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero.jsx";
import Footer from "./pages/Footer.jsx";

function App(){

return(

<>

<Navbar/>

<Routes>

<Route
path="/"
element={<Hero/>}
/>

<Route
path="/about"
element={<About/>}
/>

<Route
path="/skills"
element={<Skills/>}
/>

<Route
path="/projects"
element={<Projects/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

</Routes>
<Footer/>

</>


)

}

export default App;