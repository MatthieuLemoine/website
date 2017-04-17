import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display             : flex;
  position            : relative;
  flex-direction      : row;
  align-items         : center;
  justify-content     : center;
  border-style        : solid;
  border-color        : ${props => props.theme.colors.line};
  border-top-width    : 2px;
  border-left-width   : 2px;
  border-bottom-width : 2px;
  border-right-width  : 0;
  width               : 50px;
  margin-right        : 20px;
  @media (max-width: 500px) {
    width        : 40px;
    margin-right : 10px;
  }
`;

const Circle = styled.div`
  position         : relative;
  display          : flex;
  left             : -25px;
  width            : 50px;
  height           : 50px;
  border-radius    : 25px;
  border-width     : 2px;
  border-style     : solid;
  border-color     : ${props => props.theme.colors.line};
  align-items      : center;
  justify-content  : center;
  background-color : ${props => props.theme.colors.skillsBg};
  @media (max-width: 500px) {
    left          : -20px;
    width         : 40px;
    height        : 40px;
    border-radius : 20px;
  }
`;

const Icon = styled.i`
  font-size : 30px;
  color     : ${props => props.theme.colors.skillIcon};
  @media (max-width: 500px) {
    font-size : 18px;
  }
`;

const StorySide = ({ icon }) =>
  <Container>
    <Circle>
      <Icon className={`fa fa-${icon}`} />
    </Circle>
  </Container>;

StorySide.propTypes = {
  icon : PropTypes.string.isRequired,
};

export default StorySide;
