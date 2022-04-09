import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: top center;
`;

export const Content = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0 8rem;

  @media (max-width: 475px) {
    padding: 7rem 0 5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    max-width: 33rem;

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    max-width: 28rem;
    margin: 1rem 0 2rem;
  }

  div {
    display: flex;
    gap: 3rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
`;

export const ButtonPlay = styled.button`
  font-size: 1rem;
  font-weight: 600;

  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 350px) {
    padding: 0.5rem 2rem;
  }

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonInfo = styled(ButtonPlay)`
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;

  &:hover {
    filter: none;
    background-color: rgba(51, 51, 51, 0.4);
  }
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.6),
    var(--background)
  );
`;
