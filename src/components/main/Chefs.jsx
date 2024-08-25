import "./style/Chefs.css";
import chef from "../../assets/chef.png";

const Chefs = () => {
  return (
    <div id="chefs">
      <div className="content">
        <div className="discription">
          <strong>Title</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <img src={chef} alt="chef" />
      </div>
    </div>
  );
};

export default Chefs;
