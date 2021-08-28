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
          <HeroH1>Greatest Pizza</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  

  )
  }
}