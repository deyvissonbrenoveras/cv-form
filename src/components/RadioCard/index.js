import React from 'react';
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import Card from '../Card';
import ErrorMessage from '../ErrorMessage';

import { Label } from './styles';
import RequiredAsterisk from '../RequiredAsterisk';

function RadioCard({ name, label, options }) {
  const [, meta] = useField(name);

  return (
    <Card error={meta.error}>
      {label}
      <RequiredAsterisk />
      {options.map((option) => (
        <Label htmlFor={option.value}>
          <Field
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
          />
          {option.label}
        </Label>
      ))}
      <ErrorMessage name={name} />
    </Card>
  );
}

export default RadioCard;
RadioCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.element).isRequired,
};
