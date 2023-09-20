import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/saddamCv.pdf";
import "./about.css";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import home from "../../assets/home.jpg";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="personal_info_title">Personal Info.</h3>

            <ul className="info_list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <img src={home} alt="Home images" />
        </div>
      </section>

      <div className="separetor"></div>

      <section className="skills">
        <h3 className="subtitle"> My Skills </h3>
        <div className="skill_container grid">
          <Skills />
        </div>
      </section>

      <div className="separetor"></div>

      <section className="resume">
        <h3 className="subtitle"> Education </h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem {...val} key={val.id} />;
              }
            })}
          </div>

          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem {...val} key={val.id} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
