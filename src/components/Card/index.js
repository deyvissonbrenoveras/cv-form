import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Card({ children, error }) {
  return <Container error={error}>{children}</Container>;
}

export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
};

Card.defaultProps = {
  error: false,
};
