import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = ({ text, type, action }) => (
  <StyledButton type={type} onClick={action}>
    {text}
  </StyledButton>
);
