import { NavLink } from "react-router-dom";
import "../style/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>VISHAL.</h2>

            <p>
              Frontend Developer passionate about building modern,
              responsive and visually stunning web experiences.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li><NavLink to="/">Home</NavLink></li>
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
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <h3>Connect</h3>

            <div className="social-icons">
              <a href="https://github.com/vishalahir1010" target="_blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/kandoriya-vishal-7186803b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><FaLinkedin /></a>
              {/* <a href="#"><FaInstagram /></a> */}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
            {/* <div className="footer-bottom">

            <p>© 2025 Vishal. All Rights Reserved.</p>

            <a href="#home" className="back-top ">
                <FaArrowUp />
            </a>

            </div> */}

      </div>
    </footer>
  );
}