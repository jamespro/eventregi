import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

//TODO: I would like to put this in a common location
const protocol = window.location.protocol;
let host = window.location.host;
if (window.location.hostname == 'localhost') {
    host = 'localhost:3333';
} else {
    host = 'eventregg.herokuapp.com';
}

let API_SERVER = protocol + '//' + host;

async function _submitForm(values, actions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
    const response = await fetch(API_SERVER+'/api/register', requestOptions);
    const data = await response.json();
    console.log(data);
    //TODO: Do something after you get a successful response
    //TODO: display success message, or dialog, or have another page load with instructions, or a configurable redirect URL
    actions.setSubmitting(false);
}

function _handleSubmit(values, actions) {
    _submitForm(values, actions);
}

const MyTextInput = ({ label, ...props }) => {
// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    );
};

const MyHiddenInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
        <input className="hidden-input" {...field} {...props} />
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
// React treats radios and checkbox inputs differently other input types, select, and textarea.
// Formik does this too! When you specify `type` to useField(), it will
// return the correct bag of props for you -- a `checked` prop will be included
// in `field` alongside `name`, `value`, `onChange`, and `onBlur`
const [field, meta] = useField({ ...props, type: 'checkbox' });
return (
    <div>
    <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
    </label>
    {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
    ) : null}
    </div>
);
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </div>
    );
};

// And now we can use these
const Reginfo = () => {
    return (
        <>
        <h1>Contact Info</h1>
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
            onSubmit={_handleSubmit}
    //   onSubmit={async (values) => {
    //     await sleep(500);
    //     alert(JSON.stringify(values, null, 2));
    //   }}
            // onSubmit={(values, { setSubmitting }) => {
            //     setTimeout(() => {
            //         alert(JSON.stringify(values, null, 2));
            //         setSubmitting(false);
            //     }, 400);
            // }}
        >
            <Form>
            <MyHiddenInput
                label="showcode"
                name="showcode"
                type="hidden"
                value="myst1021"
            />

            <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
            />

            <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
            />

            <MyTextInput
                label="Address1"
                name="address1"
                type="text"
                placeholder="address1"
            />

            <MyTextInput
                label="Address2"
                name="address2"
                type="text"
                placeholder="address2"
            />

            <MyTextInput
                label="city"
                name="city"
                type="text"
                placeholder="city"
            />

            <MyTextInput
                label="state"
                name="state"
                type="text"
                placeholder="state"
            />

            <MyTextInput
                label="zipcode"
                name="zipcode"
                type="text"
                placeholder="zipcode"
            />

            <MyTextInput
                label="country"
                name="country"
                type="text"
                placeholder="country"
            />

            <MyCheckbox name="useAddressForPaymentDetails">
                Use address for payment details
            </MyCheckbox>

            <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
            />

            <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
            </MySelect>

            <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
            </MyCheckbox>

            <button type="submit">Continue</button>
            </Form>
        </Formik>
        </>
    );
};

export default Reginfo;