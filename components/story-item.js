import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: stretch;
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Subtitle = styled.div`
  font-size: 18px;
  letter-spacing: 3px;
  color: ${props => props.theme.colors.subtitle};
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  letter-spacing: 3px;
  border-bottom: 2px solid ${props => props.theme.colors.line};
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const DateContainer = styled.div`
  padding: 10px;
  background-color: ${props => props.bgColor};
  color: white;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  text-align: justify;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const StoryItem = ({
  subtitle, title, description, startYear, endYear, color,
}) => (
  <Container>
    <Header>
      <Left>
        <Subtitle>{subtitle.toUpperCase()}</Subtitle>
        <Title>{title.toUpperCase()}</Title>
      </Left>
      <DateContainer bgColor={color}>
        {endYear ? `${startYear}-${endYear}` : `Since ${startYear}`}
      </DateContainer>
    </Header>
    <Description>{description}</Description>
  </Container>
);

StoryItem.defaultProps = {
  endYear: null,
};

StoryItem.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default StoryItem;
