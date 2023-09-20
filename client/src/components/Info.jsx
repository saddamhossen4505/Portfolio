import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map((item, index) => {
        return (
          <li className="info_item" key={index}>
            <span className="info_title">{item.title}</span>
            <span className="info_desc">{item.description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
