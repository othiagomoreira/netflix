import React from 'react';
import logoImg from '../../assets/img/logo.svg';
import bannerImg from '../../assets/img/banner-home.jpg';

import { Banner, Content, FadeBackground, Form, Header, Logo } from './style';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <Header>
        <nav>
          <Logo to="/">
            <img src={logoImg} alt="Netflix" />
          </Logo>
        </nav>
      </Header>

      <Banner banner={bannerImg}>
        <Content>
          <h1>Sign In</h1>

          <Form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit">Sign in</button>
          </Form>

          <p>
            New to Netflix? <Link to="/">Sign up now.</Link>
          </p>
        </Content>
        <FadeBackground />
      </Banner>
    </>
  );
};
