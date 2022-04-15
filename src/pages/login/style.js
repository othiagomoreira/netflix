import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  top: 1rem;
  width: 100%;
  z-index: 10;

  nav {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Logo = styled(Link)`
  img {
    width: 9rem;
    filter: brightness(1.3);
  }
`;

export const Banner = styled.main`
  min-height: 100vh;
  position: relative;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  background-position: left center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FadeBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0.25rem;
  padding: 3rem;
  z-index: 10;

  width: 90%;
  max-width: 430px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem;
    color: #737373;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    background-color: #e8f0fe;
    color: #000;
    border: none;
    border-radius: 0.25rem;

    &::placeholder {
      color: #737373;
      font-size: 0.75rem;
    }
  }

  button {
    background-color: #e63a32;
    border: none;
    border-radius: 0.25rem;
    padding: 0.75rem;
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all ease 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
