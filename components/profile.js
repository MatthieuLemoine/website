import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Container = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  align-items     : flex-start;
  padding         : 5px 50px;
  margin-bottom   : 50px;
`;
const Content = styled.div`
  font-size  : 15px;
  color      : ${props => props.theme.colors.text};
  text-align : justify;
`;

const Profile = ({ title, content }) =>
  <Container>
    <Header icon="user" title={title.toUpperCase()} />
    <Content>{content}</Content>
  </Container>;

Profile.propTypes = {
  title   : React.PropTypes.string.isRequired,
  content : React.PropTypes.string.isRequired,
};

export default Profile;
