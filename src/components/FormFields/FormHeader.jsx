import React from 'react';
import { useField } from 'formik';

export default function InputField(props) {
  const { ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <h2 
      {...field}
      {...rest}
          >
          </h2>
  );
}
