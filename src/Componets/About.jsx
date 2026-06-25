    import "../Style/about.css";

    export default function About() {
    return (

    <section className="about-section" id="about">
      <div className="about-wrapper">

        <div className="about-left">
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Building Digital
            <br />
            Products With
            <span> Passion</span>
          </h2>
        </div>

        <div className="about-right">
          <p>
            I'm a Frontend Developer passionate about creating
            beautiful, responsive and interactive web experiences.
          </p>

          <p>
            I specialize in React, JavaScript, modern CSS and
            performance-focused development. My goal is to turn
            ideas into elegant digital products.
          </p>

          <div className="stats">
            <div>
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>1+</h3>
              <span>Years Learning</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Passion</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    );
    }