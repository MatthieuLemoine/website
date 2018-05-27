import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 20px;
`;

const Icon = styled.i`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  margin-left: ${props => (props.withMargin ? '10px' : '0')};
  letter-spacing: 4px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${props => props.theme.colors.line};
  margin-left: 40px;
  @media (max-width: 500px) {
    margin-left: 10px;
  }
`;

const Header = ({ icon, line, title }) => (
  <Container>
    {icon && <Icon className={`fa fa-${icon}`} />}
    <Title withMargin={!!icon}>{title}</Title>
    {line && <Line />}
  </Container>
);

Header.defaultProps = {
  icon: null,
  line: false,
  title: 'Matthieu Lemoine',
};

Header.propTypes = {
  icon: PropTypes.string,
  line: PropTypes.bool,
  title: PropTypes.string,
};

export default Header;
