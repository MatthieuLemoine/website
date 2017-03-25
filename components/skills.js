import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Container = styled.div`
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  align-items      : flex-start;
  padding          : 15px 50px 50px 50px;
  background-color : ${props => props.theme.colors.skillsBg};
`;

const SkillsContainer = styled.div`
  display         : flex;
  flex-direction  : row;
  flex-wrap       : wrap;
  justify-content : flex-start;
  align-items     : flex-start;
  align-self      : stretch;
`;

const Skill = styled.div`
  font-size      : 18px;
  color          : ${props => props.theme.colors.text};
  font-weight    : bold;
  letter-spacing : 2px;
  margin         : 30px 0 0 0;
  width          : calc(100% * (1/3) - 1px);
`;

const Skills = ({ title, items }) =>
  <Container>
    <Header title={title.toUpperCase()} line />
    <SkillsContainer>
      {
        items.map(item => <Skill key={item}>{item.toUpperCase()}</Skill>)
      }
    </SkillsContainer>
  </Container>;

Skills.propTypes = {
  title : React.PropTypes.string,
  items : React.PropTypes.arrayOf(React.PropTypes.string),
};

export default Skills;
