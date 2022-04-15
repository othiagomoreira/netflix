import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 5%;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  div {
    position: relative;

    &:hover button {
      opacity: 1;
    }
  }
`;

export const PosterCarousel = styled.ul`
  scroll-behavior: smooth;
  display: flex;
  overflow-x: auto;
  gap: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    img {
      max-height: ${({ originalNetflixMovie }) =>
        originalNetflixMovie ? '22rem' : '16rem'};

      border-radius: 0.25rem;
      transform: scale(0.95);
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: initial;
      }

      @media (max-width: 768px) {
        max-height: ${(props) =>
          props.originalNetflixMovie ? '18rem' : '14rem'};
      }

      @media (max-width: 425px) {
        max-height: ${(props) =>
          props.originalNetflixMovie ? '15rem' : '11rem'};
      }
    }
  }
`;

export const ArrowButtonLeft = styled.button`
  position: absolute;
  height: 100%;
  padding: 0 0.5rem;
  top: 0;
  left: 0;
  z-index: 8;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 30%,
    rgba(20, 20, 20, 0.4) 70%
  );
  border: none;
  opacity: 0;
  transition: all 0.5s ease;

  svg {
    font-size: 2rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ArrowButtonRight = styled(ArrowButtonLeft)`
  left: auto;
  right: 0;
`;
