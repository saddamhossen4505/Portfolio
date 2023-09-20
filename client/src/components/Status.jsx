import { status } from "../data";
import parse from "html-react-parser";

const Status = () => {
  return (
    <>
      {status.map((item, index) => {
        return (
          <div className="status_box" key={index}>
            <h3 className="status_no">{item.no}</h3>
            <p className="status_title">{parse(item.title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Status;
