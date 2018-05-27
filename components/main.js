import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Profile from './profile';
import Story from './story';
import Skills from './skills';
import Credits from './credits';
import strings from '../strings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 20;
  padding-top: 50px;
  background-color: ${props => props.theme.colors.skillsBg};
`;

const Main = ({ theme }) => (
  <Container>
    <Profile {...strings.profile} />
    <Story colors={theme.colors.educationDates} {...strings.education} icon="graduation-cap" />
    <Story colors={theme.colors.experienceDates} {...strings.experience} icon="briefcase" />
    <Skills {...strings.skills} />
    <Credits {...strings.credits} />
  </Container>
);

Main.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.string.isRequired,
      sideBg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      skillsBg: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      line: PropTypes.string.isRequired,
      educationDates: PropTypes.arrayOf(PropTypes.string).isRequired,
      experienceDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
};

export default withTheme(Main);
