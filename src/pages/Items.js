import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckboxField, SelectField, HiddenField } from '../components/FormFields';
import { register } from '../lib/api';

function _handleSubmit(values, actions) {
    register(values, actions);
}

const Items = () => {
    return (
        <>
        <h1>Items</h1>
        <Formik
            initialValues={{
                showcode: 'myst1021',
                email: '',
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                zipcode: '',
                useAddressForPaymentDetails: '',
                acceptedTerms: false, // added for our checkbox
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                address1: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                address2: Yup.string()
                    .max(50, 'Must be 50 characters or less'),
                city: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                zipcode: Yup.string()
                    .max(6, 'Must be 6 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
            })}
            onSubmit={_handleSubmit}
        >
            <Form>
          <HiddenField name="showcode" placeholder="myst1021" fullWidth />
          <InputField name="firstName" label="First Name" placeholder="Jane" fullWidth />
          <InputField name="lastName" label="Last Name" placeholder="Doe" fullWidth />
          <InputField name="address1" label="Address 1" placeholder="address1" fullWidth />
          <InputField name="address2" label="Address 2" placeholder="address2" fullWidth />
          <InputField name="city" label="City" placeholder="City" fullWidth />
          <InputField name="zipcode" label="Zip Code" placeholder="Zip Code" fullWidth />
           <InputField name="email" label="Email Address" placeholder="jane@test.com" fullWidth />

          <CheckboxField
            name="useAddressForPaymentDetails"
            label="Use address for payment details"
            fullWidth
            />
          <CheckboxField
            name="acceptedTerms"
            label="I accept the terms and conditions"
            fullWidth
            />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className=""
                    >
                      Continue
                    </Button>
            </Form>
        </Formik>
        </>
    );
};

export default Items;