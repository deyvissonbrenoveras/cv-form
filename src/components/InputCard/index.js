import React from 'react';
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';
import RequiredAsterisk from '../RequiredAsterisk';

function InputCard({ name, label, ...rest }) {
  const [, meta] = useField(name);
  return (
    <>
      <Card error={meta.error}>
        <label>
          {label}
          <RequiredAsterisk />
          <Field name={name} {...rest} />
          <ErrorMessage name={name} />
        </label>
      </Card>
    </>
  );
}

InputCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default InputCard;
