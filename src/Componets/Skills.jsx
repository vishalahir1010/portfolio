import "../style/skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
    ],
  },
  {
    title: "UI Design",
    icon: <FaCss3Alt />,
    skills: [
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Animations",
      "Glassmorphism",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <FaGitAlt />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <span className="skills-subtitle">
          FRONTEND DEVELOPER
        </span>

        <h2 className="skills-title">
          Building Modern Web Experiences
        </h2>

        <p className="skills-description">
          I create responsive, interactive and visually appealing web
          applications using modern frontend technologies and clean UI
          design principles.
        </p>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="card-header">
                <div className="skill-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}