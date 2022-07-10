import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 5px 20px;
`;

export const InputContainer = styled.div`
  width: 56%;
  margin: 0 3px;
  input {
    padding: 0 10px;
    border-radius: 16px;
    border: none;
    width: 100%;
    height: 22px;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.textDark};
  }
`;

export const ActionContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
