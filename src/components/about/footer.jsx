import { Contents, FooterBox, Seperator } from "./style/footer";

const detail = [
  "법적고지",
  "이메일무단수집거부",
  "이용약관",
  "개인정보취급방침",
  "고객센터",
  "입찰공고",
];

const Footer = () => {
  return (
    <FooterBox>
      {detail.map((content, index) => (
        <>
          <Contents>{content}</Contents>
          {index < detail.length-1 && <Seperator key={index}>|</Seperator>}
        </>
      ))}
    </FooterBox>
  );
};

export default Footer;
