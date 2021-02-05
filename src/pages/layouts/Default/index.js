import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

function Default({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Default;

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
