import right1 from "../../assets/right1.png";
import right2 from "../../assets/right2.png";
import { ImageContainer, TopBox } from "./style/top";
const Top = () => {
  return (
    <TopBox>
      <ImageContainer>
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
      </ImageContainer>

      <img src={right1} className="right" />
      <img src={right2} className="right" />
    </TopBox>
  );
};

export default Top;
