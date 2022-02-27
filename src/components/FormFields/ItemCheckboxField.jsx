import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
    FormHelperText,
    Grid,
  Typography
} from '@material-ui/core';

export default function ItemCheckboxField(props) {
  const { label, price, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
      <FormControl {...rest}>
          <Grid container>
          <Grid item xs={10}>
        <FormControlLabel
            value={field.checked}
            checked={field.checked}
            control={<Checkbox {...field} onChange={_onChange} />}
            label={label}
            />
          </Grid>
              <Grid item xs={2}>
                  <Typography align='right'>
                  ${price}
                  </Typography>
          </Grid>
          </Grid>

      {_renderHelperText()}
    </FormControl>
  );
}
