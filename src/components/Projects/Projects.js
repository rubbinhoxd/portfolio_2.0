import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section noppading id="projetos">
   <SectionDivider/>
   <SectionTitle main>Projetos</SectionTitle>
   <GridContainer>
     {projects.map(( {id, title, description, image, tags, site, repositorio}) => (
      <BlogCard key={id}>
        <Img src={image}></Img>
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TagList>
            {tags.map((tag, i) =>(
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={repositorio}>Repositório</ExternalLinks>
          <ExternalLinks href={site}>Página</ExternalLinks>
        </UtilityList>
      </BlogCard>
     ))}
   </GridContainer>
 </Section>
);

export default Projects;