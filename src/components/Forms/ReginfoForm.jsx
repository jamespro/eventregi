import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import {
  Button,
  CircularProgress
} from '@material-ui/core';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './ReginfoForm.module.css';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckboxField, SelectField, HiddenField } from '../FormFields';

const countries = require('./countries.json');
const states = require('./states.json');
const jobTypes = require('./jobtypes.json');


const ReginfoForm = (props) => {
//   const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(values) {
    props.onRegister({ values });
  }

//   const finishEnteringHandler = () => {
//     setIsEntering(false);
//   };

//   const formFocusedHandler = () => {
//     setIsEntering(true);
//   };

  return (
    <Fragment>
      {/* <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      /> */}
        <h1>Contact Information</h1>
        <Formik
            initialValues={{
                showcode: 'myst1021',
                email: '',
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipcode: '',
                country: '',
                useAddressForPaymentDetails: '',
                acceptedTerms: false, // added for our checkbox
                jobType: '', // added for our select
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
                state: Yup.string()
                    .max(20, 'Must be 20 characters or less'),
                zipcode: Yup.string()
                    .max(6, 'Must be 6 characters or less')
                    .required('Required'),
                country: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
                jobType: Yup.string()
                    .oneOf(
                    ['designer', 'development', 'product', 'other'],
                    'Invalid Job Type'
                    )
                    .required('Required'),
            })}
            // onSubmit={_handleSubmit}
          onSubmit={submitFormHandler}
        //   onFocus={formFocusedHandler}

          >{({ values, errors, isSubmitting }) => (
            <Form>
          <HiddenField name="showcode" placeholder="myst1021" fullWidth />
          <InputField name="firstName" label="First Name" placeholder="Jane" fullWidth />
          <InputField name="lastName" label="Last Name" placeholder="Doe" fullWidth />
          <InputField name="address1" label="Address 1" placeholder="address1" fullWidth />
          <InputField name="address2" label="Address 2" placeholder="address2" fullWidth />
          <InputField name="city" label="City" placeholder="City" fullWidth />
          <SelectField
            name="state"
            label="State"
            data={states}
            fullWidth
          />
          <InputField name="zipcode" label="Zip Code" placeholder="Zip Code" fullWidth />
          <SelectField
            name="country"
            label="Country"
            data={countries}
            fullWidth
          />
           <InputField name="email" label="Email Address" placeholder="jane@test.com" fullWidth />

          <SelectField
            name="jobType"
            label="Job Type"
            data={jobTypes}
            fullWidth
            />
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
                          disabled={isSubmitting}
                        //   onFocus={formFocusedHandler}

                    >
                        Continue
                    </Button>
                    <pre>{JSON.stringify(values,null,2)}</pre>
                    <pre>{JSON.stringify(errors,null,2)}</pre>
                    </Form>
                    )}
        </Formik>
    </Fragment>
  );
};

export default ReginfoForm;
