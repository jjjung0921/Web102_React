import styled from "styled-components";

export const TopBox = styled.div`
  width: 1000px;
  height: 500px;
  margin: auto;
  margin-top: 30px;

  .right {
    float: right;
  }
`;

export const ImageContainer = styled.div`
  width: 750px;
  height: 500px;
  background-image: url(src/assets/chef_about.png);
  background-size: cover;
  float: left;

  .content {
    width: 250px;
    height: 250px;
    background-color: green;
    overflow: hidden;
    margin-top: 250px;
  }

  p {
    margin: 20px;
    width: 210px;
    height: 210px;
  }
`;
