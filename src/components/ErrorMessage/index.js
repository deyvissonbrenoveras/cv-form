import React from 'react';
import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

function ErrorMessage({ name }) {
  return (
    <Container>
      {/* <Error name={name} /> */}
      <Error component="div" name={name}>
        {(msg) => (
          <>
            <FiAlertCircle size={24} />
            <span>{msg}</span>
          </>
        )}
      </Error>
    </Container>
  );
}

export default ErrorMessage;
ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};
