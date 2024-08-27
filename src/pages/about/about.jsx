import Box from "../../components/about/box";
import Footer from "../../components/about/footer";
import { BoxAll, LeftBox, RightBox } from "../../components/about/style/box_all";
import Top from "../../components/about/top";

const About = () => {
  return (
    <>
      <Top />
      <BoxAll>
        <LeftBox>
        {[...Array(6)].map((_,index) => (
          <Box key={index} content={index < 2} />
        ))}
        </LeftBox>
        <RightBox/>
      </BoxAll>
      <Footer />
    </>
  );
};
export default About;
