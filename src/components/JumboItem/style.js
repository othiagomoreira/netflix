import styled from 'styled-components';

const smartTv = {
  position: 'absolute',
  top: '20%',
  bottom: '0',
  width: '80%',
  left: '10%',
};

const mackbook = {
  position: 'absolute',
  top: '30px',
  bottom: '0',
  width: '60%',
  left: '20%',
};

export const Border = styled.div`
  border-bottom: 8px solid #222;
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: ${(props) => props.direction};
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 470px;

  @media (min-width: 768px) {
    text-align: left;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: #eee;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 auto;

  img {
    position: relative;
    z-index: 10;
    width: 100%;
  }

  video {
    ${(props) => (props.device === 'smartTv' ? smartTv : mackbook)}
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;
