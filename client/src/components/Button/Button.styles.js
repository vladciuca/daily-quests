import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ type }) =>
    type === "primary"
      ? ({ theme }) => theme.primary
      : type === "secondary"
      ? ({ theme }) => theme.secondary
      : ({ theme }) => theme.danger};
  color: ${({ theme }) => theme.text};
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0 3px;
  cursor: pointer;
  border-radius: 1.5rem;
  border: none;
`;
