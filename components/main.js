import React from 'react';
import styled, { withTheme } from 'styled-components';
import Profile from './profile';
import Story from './story';
import Skills from './skills';
import Credits from './credits';
import strings from '../strings';

const Container = styled.div`
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  align-items      : stretch;
  flex-grow        : 20;
  padding-top      : 50px;
  background-color : ${props => props.theme.colors.skillsBg};
`;

const Main = ({ theme }) =>
  <Container>
    <Profile {...strings.profile} />
    <Story colors={theme.colors.educationDates} {...strings.education} icon="graduation-cap" />
    <Story colors={theme.colors.experienceDates} {...strings.experience} icon="briefcase" />
    <Skills {...strings.skills} />
    <Credits {...strings.credits} />
  </Container>;

Main.propTypes = {
  theme : React.PropTypes.shape({
    colors : React.PropTypes.shape({
      text            : React.PropTypes.string.isRequired,
      sideBg          : React.PropTypes.string.isRequired,
      name            : React.PropTypes.string.isRequired,
      skillsBg        : React.PropTypes.string.isRequired,
      subtitle        : React.PropTypes.string.isRequired,
      line            : React.PropTypes.string.isRequired,
      educationDates  : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      experienceDates : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    }),
  }).isRequired,
};

export default withTheme(Main);
