// @flow 
import * as React from 'react';
import {Header} from './scrolls/header/Header';
import { WelcomeScroll } from './scrolls/welcomeScroll/WelcomeScroll';


type Props = {
  
};
export const App = (props: Props) => {
  return (
    <div>
      <Header/>
      <WelcomeScroll/>
    </div>
  );
};



