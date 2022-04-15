import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 1rem;
  width: 100%;
  z-index: 10;

  nav {
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    img {
      width: 8rem;
      cursor: pointer;
      filter: brightness(1.3);

      @media (max-width: 550px) {
        width: 7rem;
      }

      @media (max-width: 350px) {
        width: 6rem;
      }
    }
  }
`;

export const ButtonSignin = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #e63a32;
  border-radius: 0.25rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  transition: filter ease 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Banner = styled.div`
  position: relative;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  border-bottom: 8px solid #222;
`;

export const BannerContent = styled.section`
  max-width: 600px;
  width: 90%;
  padding: 15rem 0 10rem;

  text-align: center;
  z-index: 10;

  h1 {
    font-size: 3rem;
    line-height: 1.2;

    @media (max-width: 550px) {
      font-size: 2rem;
    }

    @media (max-width: 350px) {
      font-size: 1.75rem;
    }
  }

  strong {
    display: inline-block;
    font-size: 1.25rem;
    margin: 1rem 0 2rem;

    @media (max-width: 350px) {
      font-size: 1rem;
    }
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }
`;

export const FadeBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0,
    rgba(0, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 0.25rem;
  overflow: hidden;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  input {
    width: 70%;
    padding: 1rem;
    color: #111;

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  button {
    width: 30%;
    padding: 0.5rem;
    background-color: #e63a32;
    border: none;
    font-size: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter ease 0.3s;

    @media (max-width: 550px) {
      width: 170px;
      border-radius: 0.25rem;
    }

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;
export const MainContent = styled.main`
  background-color: #000;
`;

export const Jumbo = styled.section``;
