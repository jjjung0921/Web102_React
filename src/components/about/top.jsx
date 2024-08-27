import chef from "../../assets/chef_about.png";
import right1 from "../../assets/right1.png";
import right2 from "../../assets/right2.png";
import "./style/top.css";
const Top = () => {
  return (
    <div id="top">
      <div id="image_container">
        <div className="content">
          <p>
            <strong>
              GLOBAL
              <br />
              BUSINESS
              <br />
              <br />
            </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <img src={right1} className="right" />
      <img src={right2} className="right" />
    </div>
  );
};

export default Top;
