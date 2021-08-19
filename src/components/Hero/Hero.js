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
        I develop the user interfaces of the website and applications.
      </SectionText>
      {/* <Button>Resume</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;