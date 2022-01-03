import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Projetos upados no GitHub'},
  { number: 10, text: 'Novas Tecnologias estudadas', },
  { number: 2, text: 'Ano com experiência nos Pacotes Office', },
  { number: 3, text: 'Anos com programação', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Realizações Pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
