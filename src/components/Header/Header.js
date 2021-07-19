import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    {/* start of div 1 */}
    <Div1> 
      <Link href="/">
      <a style={{
        display:"flex", 
        alignItems:"center", 
        color: "white", 
        marginBottom: "20px"
      }}>
      <DiReact size="3rem" />
        <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    {/* end of div 1 */}

 {/* start of div 2 */}
      <Div2>
        <li>
          <Link href="#projects">
              <NavLink>My Projects</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#skills">
              <NavLink>Skills</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#about">
              <NavLink>About Me</NavLink>
          </Link>
        </li>

      </Div2>
    {/* end of div 2 */}

    {/* start of div 3 */}
    <Div3>
      <SocialIcons href="https://github.com/Taofiqq" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      
      <SocialIcons href="https://twitter.com/Taofiq__" target="_blank">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/taofiq-aiyelabegan-6241a1139/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

    </Div3>
    {/* end of div 3 */}
  </Container>
);

export default Header;
