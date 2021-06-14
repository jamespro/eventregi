import React from 'react';
// import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';
const countries = require('./countries.json');
const states = require('./states.json');
// const states = [
//   {
//     value: undefined,
//     label: 'None'
//   },
//   {
//     value: '11',
//     label: 'Florida'
//   },
//   {
//     value: '22',
//     label: 'Michigan'
//   },
//   {
//     value: '33',
//     label: 'Texas'
//   }
// ];

// const countries = [
//   {
//     value: null,
//     label: 'None'
//   },
//   {
//     value: '111',
//     label: 'United States'
//   },
//   {
//     value: '222',
//     label: 'Italy'
//   },
//   {
//     value: '333',
//     label: 'Vietnam'
//   }
// ];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails
    }
  } = props;
  return (
    <React.Fragment>
        <h6>Billing Address</h6>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
          <InputField name={lastName.name} label={lastName.label} fullWidth />
          <InputField name={address1.name} label={address1.label} fullWidth />
          <InputField name={address2.name} label={address2.label} fullWidth />
          <InputField
            name={city.name}
            label={city.label}
            fullWidth
          />
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
    </React.Fragment>
  );
}
