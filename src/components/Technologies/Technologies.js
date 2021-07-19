import React from 'react';
import { DiFirebase, DiNetbeans, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br />
      <SectionTitle>My Skills</SectionTitle>
      <SectionText>
        This is a lis tof all tech stack I have worked with during my front end developer
      </SectionText>
      <List>
        {/* first list */}
        <ListItem>
          <DiNetbeans size="3rem" />
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>Experience with <br /> ReactJs</ListParagraph>
          </ListContainer>
        </ListItem>
        {/* end of first list */}

        {/* second list */}
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>Experience with <br />NodeJs and Databases</ListParagraph>
          </ListContainer>
        </ListItem>
        {/* end of second list */}
        
        {/* third list */}
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Experience with <br /> tools like Figma</ListParagraph>
          </ListContainer>
        </ListItem>
        {/* end of third list */}
      </List>
  </Section>
);

export default Technologies;
