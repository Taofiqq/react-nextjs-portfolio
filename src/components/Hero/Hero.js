import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row no padding>
    <LeftSection>
      <SectionTitle main center>
        Hi There, <br />
        My Name is Taofiq and I am a Front End Developer.
      </SectionTitle>
      <SectionText>
        I develop user interfaces and single page applicatios.
      </SectionText>
      <Button onClick={() => window.location= "https://google.com"}>Scroll Down</Button>
    </LeftSection>
  </Section>
);

export default Hero;