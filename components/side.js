import styled from 'styled-components';
import IconInfo from './icon-info';
import strings from '../strings';

const Container = styled.div`
  display          : flex;
  flex-grow        : 1;
  background-color : ${props => props.theme.colors.sideBg};
  flex-direction   : column;
  justify-content  : flex-start;
  align-items      : center;
  padding          : 20px 0;
`;

const Group = styled.div`
  display        : flex;
  flex-direction : column;
  align-self     : stretch;
  align-items    : center;
  margin         : 30px 0;
`;

const Name = styled.div`
  font-size     : 30px;
  color         : ${props => props.theme.colors.name};
  font-weight   : bold;
  margin-bottom : 20px;
`;

const Position = styled.div`
  color       : white;
  font-size   : 20px;
  font-weight : bold;
`;

const Expertise = styled.div`
  border: 2px solid white;
  padding : 5px 15px;
  font-size: 15px;
  color : white;
  margin-bottom: 30px;
`;

const ExpertiseItem = styled.div`
  color     : white;
  font-size : 15px;
  margin    : 10px;
`;

const informations = [
  {
    icon   : 'envelope',
    labels : [strings.email],
  },
  {
    icon   : 'map-marker',
    labels : [strings.location],
  },
  {
    icon   : 'desktop',
    labels : strings.sites.map(site => site.label),
    links  : strings.sites.map(site => site.link),
  },
];

const Side = () =>
  <Container>
    <Group>
      <Name>
        <div>{strings.firstname.toUpperCase()}</div>
        <div>{strings.lastname.toUpperCase()}</div>
      </Name>
      <Position>{strings.position.toUpperCase()}</Position>
    </Group>
    <Group>
      {
        informations.map(info => <IconInfo key={info.icon} {...info} />)
      }
    </Group>
    <Group>
      <Expertise>{strings.expertise.title.toUpperCase()}</Expertise>
      {
        strings.expertise.items.map(
          item => <ExpertiseItem key={item}>{item.toUpperCase()}</ExpertiseItem>,
        )
      }
    </Group>
  </Container>;

Side.propTypes = {};

export default Side;
