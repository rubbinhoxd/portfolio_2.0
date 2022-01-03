import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contato</LinkTitle>
          <LinkItem href="Telefone: (88) 9.9663-0000">Telefone: (88) 9.9663-0000</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="E-mail: fracicorubens@yahoo.com">E-mail: fracicorubens@yahoo.com</LinkItem>
          </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Rubens Filho <br /> Future Web Developer & Front End Designer</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/rubbinhoxd">
        <AiFillGithub size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rubens-filho-martins-5ba4a51b4/">
        <AiFillLinkedin size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/rubensfelix1/">
        <AiFillInstagram size="2.5rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
