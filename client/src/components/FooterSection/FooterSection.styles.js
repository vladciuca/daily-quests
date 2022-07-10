import styled from "styled-components";

export const FooterContainer = styled.div`
  z-index: -999;
  background: ${({ theme }) => theme.cardPrimary};
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  height: 16vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
