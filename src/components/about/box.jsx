const Box = ({ content }) => {
  if (content) {
    return (
      <p>
        <strong>Title</strong>
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    );
  } else {
    return <p></p>;
  }
};

export default Box;
