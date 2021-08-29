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
          <HeroH1>Butter Boutique</HeroH1>
          <HeroP>At your doorstep</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  

  )
  }
}