import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-self : stretch;
  text-align : end;
  color      : ${props => props.theme.colors.text};
  margin     : 0 20px 10px 20px;
`;

const Credits = ({ technologies, label }) =>
  <Container>
    {
      technologies.reduce((text, item, index, array) =>
      `${text}${index === 0 ? '' : index === array.length - 1 ? ' &' : ','} ${item}`
      , label)
    }
  </Container>;

Credits.propTypes = {
  technologies : PropTypes.arrayOf(PropTypes.string).isRequired,
  label        : PropTypes.string.isRequired,
};

export default Credits;
