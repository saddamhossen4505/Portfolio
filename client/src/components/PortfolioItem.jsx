import { FaGithub } from "react-icons/fa";
import { ImFeed } from "react-icons/im";
import { Link } from "react-router-dom";

const PortfolioItem = ({ img, gitUrl, liveUrl }) => {
  return (
    <>
      <div className="portfolio_item">
        <img className="portfolio_img" src={img} alt="Portfolio image" />

        <div className="portfolio_hover">
          <div className="hover_content">
            <h3 className="portfolio_title">Project Source</h3>

            <div className="icon_area">
              <Link to={gitUrl} className="icon">
                <i className="fa_icons">
                  <FaGithub />
                </i>
              </Link>
              <Link to={liveUrl} className="icon">
                <i className="fa_icons">
                  <ImFeed />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
