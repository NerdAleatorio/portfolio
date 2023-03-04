import React, { Fragment } from 'react';
import './App.css';

import Header from '../components/template/Header';
import Centerzone from '../components/template/Centerzone';
import Leftzone from '../components/template/Leftzone';
import Rightzone from '../components/template/Rightzone';
import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';
import Name from '../components/template/Name';
import SocialMedia from '../components/template/SocialMedia';

export default props =>
  <Fragment>
      <div className='App grid-template'>
        <Logo />
        <Name />
        <Header/>
        <Centerzone />
        <Leftzone />
        <Rightzone />
        <SocialMedia />
        <Footer />
      </div>
  </Fragment>