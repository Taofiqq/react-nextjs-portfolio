import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      
        <LinkTitle>Contact:</LinkTitle>
        <LinkItem href="+601160842028">+601160842028</LinkItem>
        <LinkItem href="+601160842028">+2348142986562</LinkItem>

        <LinkTitle>Email:</LinkTitle>
        <LinkItem href="mailto:taofiqaiyelabegan45@gmail.com">taofiqaiyelabegan45@gmail.com</LinkItem>

      </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Bulding and Desgining Interfaces</Slogan>
          <Slogan>Powered with NextJS and Styled-Components</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Taofiqq" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      
      <SocialIcons href="https://twitter.com/Taofiq__" target="_blank">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/taofiq-aiyelabegan-6241a1139/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
