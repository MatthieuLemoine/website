import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-self : stretch;
  text-align : end;
  color      : ${props => props.theme.colors.text};
  margin     : 0 20px 10px 0;
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
  technologies : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  label        : React.PropTypes.string.isRequired,
};

export default Credits;
