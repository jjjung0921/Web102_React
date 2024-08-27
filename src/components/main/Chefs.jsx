import { ChefsContainer, Content, Discription, Title } from "./style/Chefs";
import chef from "../../assets/chef.png";

const Chefs = () => {
  return (
    <ChefsContainer>
      <Content>
        <Discription>
          <Title>Title</Title>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Discription>
        <img src={chef} alt="chef" style={{float:"right"}}/>
      </Content>
    </ChefsContainer>
  );
};

export default Chefs;
