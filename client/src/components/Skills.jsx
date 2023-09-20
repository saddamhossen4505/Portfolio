import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      {skills.map((item, index) => {
        return (
          <div className="progress_box" key={index}>
            <div className="progress_circle">
              <CircularProgressbar
                strokeWidth={6.5}
                value={item.percentage}
                text={`${item.percentage}%`}
              />
            </div>
            <div className="skill_title">{item.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
