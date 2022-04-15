import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
`;
