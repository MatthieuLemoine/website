import React from 'react';
import styled from 'styled-components';
import Header from './header';
import StoryItem from './story-item';
import StorySide from './story-side';

const Container = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  align-items     : flex-start;
  padding         : 5px 50px;
  margin-bottom   : 20px;
`;

const Content = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : flex-start;
  align-items     : stretch;
  align-self      : stretch;
`;

const List = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  align-items     : flex-start;
  flex-grow       : 1;
`;

const Story = ({ title, items, colors, icon }) =>
  <Container>
    <Header title={title.toUpperCase()} line />
    <Content>
      <StorySide icon={icon} />
      <List>
        {
          items.map(
            (item, index) =>
              <StoryItem
                key={`${item.title}-${item.subtitle}`}
                color={colors[index % colors.length]}
                {...item}
              />,
          )
        }
      </List>
    </Content>
  </Container>;

Story.propTypes = {
  title : React.PropTypes.string.isRequired,
  items : React.PropTypes.arrayOf(React.PropTypes.shape({
    subtitle    : React.PropTypes.string.isRequired,
    title       : React.PropTypes.string.isRequired,
    description : React.PropTypes.string.isRequired,
    startYear   : React.PropTypes.string.isRequired,
    endYear     : React.PropTypes.string.isRequired,
  })).isRequired,
  colors : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  icon   : React.PropTypes.string.isRequired,
};

export default Story;
