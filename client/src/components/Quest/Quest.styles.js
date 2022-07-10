import styled from "styled-components";

export const QuestContainer = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.5rem;
  padding: 10px;
  margin: 15px 0px;
  background: ${({ theme }) => theme.bgSecondary};
`;

export const RoundCheckbox = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 999px;
  background: ${({ complete }) =>
    complete ? ({ theme }) => theme.success : ({ theme }) => theme.primary};
`;

export const QuestDescription = styled.div`
  display: flex;
  align-items: center;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
  div {
    cursor: pointer;
    margin-left: 10px;
  }
`;
