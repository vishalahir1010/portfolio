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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <h3>Connect</h3>

            <div className="social-icons">
              <a href="" target="_blank"><FaGithub /></a>
              <a href=""><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
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