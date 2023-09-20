import { Link } from "react-router-dom";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Home Image" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            I'm Saddam Hossen <span>MERN STACK DEVELOPER.</span>
          </h1>

          <p className="home_description">
            Hi there! I'm a web designer & front-end developer focused on
            React.js, Next.js with TypeScript, crafting clean & user-friendly
            experiences. I am passionate about building excellent software that
            improves the lives of those around me.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};

export default Home;
