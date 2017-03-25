import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display        : flex;
  flex-direction : column;
  align-self: stretch;
  align-items    : stretch;
  margin-bottom  : 30px;
`;

const Header = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
  margin-bottom   : 10px;
`;

const Left = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : flex-start;
`;

const Subtitle = styled.div`
  font-size      : 18px;
  letter-spacing : 3px;
  color          : ${props => props.theme.colors.subtitle};
`;

const Title = styled.div`
  font-size      : 20px;
  color          : ${props => props.theme.colors.text};
  font-weight    : bold;
  letter-spacing : 3px;
  border-bottom  : 2px solid ${props => props.theme.colors.line};
`;

const DateContainer = styled.div`
  padding          : 10px;
  background-color : ${props => props.bgColor};
  color            : white;
`;

const Description = styled.div`
  font-size  : 15px;
  color      : ${props => props.theme.colors.text};
  text-align : justify;
`;

const StoryItem = ({ subtitle, title, description, startYear, endYear, color }) =>
  <Container>
    <Header>
      <Left>
        <Subtitle>{subtitle.toUpperCase()}</Subtitle>
        <Title>{title.toUpperCase()}</Title>
      </Left>
      <DateContainer bgColor={color} >{`${startYear}-${endYear}`}</DateContainer>
    </Header>
    <Description>{description}</Description>
  </Container>;

StoryItem.propTypes = {
  subtitle    : React.PropTypes.string,
  title       : React.PropTypes.string,
  description : React.PropTypes.string,
  startYear   : React.PropTypes.string,
  endYear     : React.PropTypes.string,
  color       : React.PropTypes.string,
};

export default StoryItem;
