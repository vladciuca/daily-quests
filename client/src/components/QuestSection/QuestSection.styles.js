import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.cardPrimary};
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  height: 33vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const FadeOnScroll = styled.div`
  overflow: scroll;
  padding: 10px 20px;
  max-height: 23vh;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 48px,
    black calc(100% - 48px),
    transparent 100%
  );
`;
