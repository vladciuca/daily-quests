import styled, { css, keyframes } from "styled-components";

export const NotificationWrapper = styled.div`
  z-index: 99999;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 300px;
`;

const SlideLeft = keyframes`
  0% {
    margin-left: 120%;
  }
  100% {
    margin-left: 0;
  }
`;

const SlideRight = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 120%;
  }
`;

export const NotificationContainer = styled.div`
  background: ${({ theme }) => theme.cardSecondary};
  padding: 0;
  margin-bottom: 10px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  overflow: hidden;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: ${SlideLeft} 0.4s forwards;
  animation: ${({ exit }) =>
    exit
      ? css`
          ${SlideRight} 0.4s forwards
        `
      : ""};
`;

export const MessageContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const ExitButton = styled.button`
  margin-bottom: 10px;
  border: none;
  height: 15px;
  width: 15px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  background: ${({ theme }) => theme.danger};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBar = styled.div`
  height: 7px;
  background-color: ${({ type }) =>
    type === "COMPLETED"
      ? ({ theme }) => theme.success
      : type === "CREATED"
      ? ({ theme }) => theme.primary
      : ({ theme }) => theme.danger};
  width: ${({ width }) => width}%;
`;
