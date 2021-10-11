import React, { Component } from 'react';


import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './HomeStyles';


export default class Home extends Component {
  render() {
  return (
     
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Handcrafted With Love</HeroH1>
          <HeroP>From Ours To Yours</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  

  )
  }
}