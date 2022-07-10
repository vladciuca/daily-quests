import styled from "styled-components";

export const AddNewQuest = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
`;

export const QuestIcon = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  font-size: 40px;
  font-weight: 900;
  background-image: linear-gradient(
    to left top,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  cursor: pointer;
`;
