import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio, DiSwift } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Tecnologias</SectionTitle> 
    <SectionText>
      Tenho um certo nível de experiência em certas linguagens, sobretudo na parte da WEB.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br /> 
            HTML, CSS, JavaScript, Typescript e react.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSwift size="4rem"/>
        <ListTitle>UI/UX Designer</ListTitle>
        <ListParagraph>
          Experiência com o <br />  
          app Figma
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="4rem"/>
        <ListTitle>Outras Tecnologias</ListTitle>
        <ListParagraph>
          Experiência com <br />
          C, C++, Java, github e Git
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
