import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color: "white", marginBottom: "25px"}}>
            <DiCssdeck size="2.5rem" /> 
            <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projetos">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#sobre">
          <NavLink>Sobre mim</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/rubbinhoxd">
        <AiFillGithub size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rubens-filho-martins-5ba4a51b4/">
        <AiFillLinkedin size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/rubensfelix1/">
        <AiFillInstagram size="2.5rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
