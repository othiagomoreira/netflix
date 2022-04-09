import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: all ease 0.7s;

  background: ${(props) =>
    props.scrollActive
      ? '#111'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0))'};

  nav {
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

export const Logo = styled.img`
  width: 6rem;
  cursor: pointer;
  filter: brightness(1.3);
`;

export const Avatar = styled.img`
  width: 2.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;
