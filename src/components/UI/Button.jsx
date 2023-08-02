import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      disabled={props.disabled}
      h={props.h}
      w={props.w}
      bgColor={props.bgColor}
      onClick={props.onClick}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.w || "80px"};
  height: ${(props) => props.h || "35px"};

  color: white;
  background-color: ${(props) => props.bgColor || "black"};

  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export default Button;
