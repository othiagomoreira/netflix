import { MdKeyboardArrowRight } from 'react-icons/md';

import logoImg from '../../assets/img/logo.svg';
import bannerImg from '../../assets/img/banner-home.jpg';

import {
  Header,
  ButtonSignin,
  Banner,
  BannerContent,
  FadeBackground,
  Form,
  Jumbo,
  MainContent,
} from './style';

import { JumboItem } from '../../components/JumboItem';

export const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header>
        <nav>
          <img src={logoImg} alt="Netflix" />
          <ButtonSignin to="/login">Sign in</ButtonSignin>
        </nav>
      </Header>

      <Banner banner={bannerImg}>
        <BannerContent>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <strong>Watch anywhere. Cancel anytime.</strong>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <Form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email address" />

            <button type="submit">
              Get Started <MdKeyboardArrowRight />
            </button>
          </Form>
        </BannerContent>
        <FadeBackground />
      </Banner>

      <MainContent>
        <Jumbo>
          <JumboItem id={1} />
          <JumboItem id={2} />
          <JumboItem id={3} />
          <JumboItem id={4} />
        </Jumbo>
      </MainContent>
    </>
  );
};
