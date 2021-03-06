import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 20px;
`;

const Icon = styled.i`
  font-size: 40px;
`;

const Text = styled.div`
  font-size: 12;
  margin-top: 15px;
`;

const Link = styled.a`
  font-size: 12;
  margin-top: 15px;
  text-decoration: none;
  color: white;
`;

const IconInfo = ({ icon, labels, links }) => (
  <Container>
    <Icon className={`fa fa-${icon}`} />
    {links
      ? links.map((link, index) => (
        <Link key={link} href={link} target="_blank" rel="noopener">
          {labels[index]}
        </Link>
        ))
      : labels.map(label => <Text key={label}>{label}</Text>)}
  </Container>
);

IconInfo.defaultProps = {
  links: null,
};

IconInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
};

export default IconInfo;
