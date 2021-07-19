import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


// const projectsList = [{
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 
// {
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 
// {
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 
// {
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 
// {
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 
// {
//   title: "This is a search movie and actor app", 
//   description:" This is a long description"
// }, 


// ]
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>My Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, tags, description, source, visit }) => (
         <BlogCard key="project.id">
           <Img src={image} />
           <TitleContent>
             <HeaderThree title>{title}</HeaderThree>
             <Hr/>
           </TitleContent>
           <CardInfo>{description}</CardInfo>
           <div>
             <TitleContent>Stacks</TitleContent>
             <TagList>
               {tags.map((tag, i) => (
                 <Tag key={i}>{tag}</Tag>
               ))}
             </TagList>
           </div>

           <UtilityList>
             <ExternalLinks href={visit}>Code</ExternalLinks>
             <ExternalLinks href={source}>Source</ExternalLinks>
           </UtilityList>
         </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;