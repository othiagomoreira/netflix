import {
  Border,
  Container,
  Content,
  ImageContainer,
  VideoContainer,
} from './style';

import JumboData from '../../services/jumbo.json';

export const JumboItem = ({ id }) => {
  const data = JumboData.find((item) => item.id === id);

  if (data.video)
    return (
      <Border>
        <Container direction={data.direction}>
          <Content>
            <h2>{data.title}</h2>
            <p>{data.subTitle}</p>
          </Content>

          <VideoContainer device={data.device}>
            <img src={data.image} alt={data.title} />
            <video controls="" loop muted autoPlay src={data.video}></video>
          </VideoContainer>
        </Container>
      </Border>
    );

  return (
    <Border>
      <Container direction={data.direction}>
        <Content>
          <h2>{data.title}</h2>
          <p>{data.subTitle}</p>
        </Content>
        <ImageContainer>
          <img src={data.image} alt={data.title} />
        </ImageContainer>
      </Container>
    </Border>
  );
};
