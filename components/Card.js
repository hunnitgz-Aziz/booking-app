import React from "react";
import styled from "styled-components";

class Card extends React.Component {
  render() {
    return <Box />;
  }
}

export default Card;

const Box = styled.View`
  background-color: dodgerblue;
  border-radius: 5px;
  border: 3px solid pink;
  height: 300px;
  width: 300px;
`;
