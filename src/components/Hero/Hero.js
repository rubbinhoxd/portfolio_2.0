import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noppading> 
    <LeftSection>
      <SectionTitle main center>
          Rubens Filho <br />
          Future Web Developer <br /> 
          FrontEnd Designer
      </SectionTitle>
      <SectionText>
        O objetivo desse Portfolio, é apresentar um pouco mais sobre mim. De certo modo, mostrar as tecnologias estudadas, projetos que foram feitos, entre outras coisas. Sempre estou disposto à aprender coisas novas, e no caso da programação, não é diferente.
      </SectionText>
      <Button onClick= {() => window.location = "https://rubbinhoxd.github.io/portifolio/"}>Saiba Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;