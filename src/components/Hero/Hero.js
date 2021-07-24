import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row no padding>
    <LeftSection>
      <SectionTitle main center>
        Hi!  I'm Taofiq, <br />
        a freelance Front End Developer based in Malaysia.
      </SectionTitle>
      <SectionText>
        I develop user interfaces and single-page web applications.
      </SectionText>
      <Button onClick={() => window.location= "https://google.com"}>Scroll Down</Button>
    </LeftSection>
  </Section>
);

export default Hero;