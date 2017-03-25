import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display        : flex;
  flex-direction : row;
  align-items    : center;
  align-self     : stretch;
  margin-bottom  : 20px;
`;

const Icon = styled.i`
  color     : ${props => props.theme.colors.text};
  font-size : 20px;
`;

const Title = styled.div`
  font-size      : 20px;
  color          : ${props => props.theme.colors.text};
  font-weight    : bold;
  margin-left    : ${props => props.withMargin ? '10px' : '0'};
  letter-spacing : 4px;
`;

const Line = styled.div `
  flex-grow        : 1; 
  height           : 2px;
  background-color : ${props => props.theme.colors.line};
  margin-left      : 40px;
`;

const Header = ({ icon, line, title }) =>
  <Container>
    { icon && <Icon className={`fa fa-${icon}`} /> }
    <Title withMargin={!!icon} >{title}</Title>
    { line && <Line /> }
  </Container>;

Header.propTypes = {
  icon  : React.PropTypes.string,
  line  : React.PropTypes.bool,
  title : React.PropTypes.string,
};

export default Header;
