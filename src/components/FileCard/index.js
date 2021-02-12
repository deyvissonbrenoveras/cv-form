import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import Card from '../Card';
// import { Container } from './styles';

function FileCard({ name, label, ...rest }) {
  return (
    <Card>
      <label>{label}</label>
    </Card>
  );
}

FileCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default FileCard;
