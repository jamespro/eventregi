import { Fragment, useRef, useState } from 'react';
// import { Prompt } from 'react-router-dom';

import {
  Button,
  CircularProgress
} from '@material-ui/core';
// import Card from '../UI/Card';
// import LoadingSpinner from '../UI/LoadingSpinner';
// import classes from './ReginfoForm.module.css';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckboxField, ItemCheckboxField, SelectField, HiddenField, FormHeader } from '../FormFields';

const ItemsForm = (props) => {
//   const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(values) {
    props.onAddItems({ values });
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
          <h1>Items</h1>
          <p>Choose your conference package and additional items!</p>
        <Formik
            initialValues={{
                uuid: '', // set this to the uuid from LocalStorage or url params
                showcode: 'myst1021', // set this to the showcode from LocalStorage or user record or url params
                itemEXPO: '', //should be a free item
                itemCONF: '',
                itemCONFPREM: '', // could auto pack other items like 1 BANQ and 1 TSHIRT
                itemONEDAYSAT: '',
                itemONEDAYSUN: '',
                itemBANQ: '', // can add select 1-5 tickets
                itemBANQTABLE: '',
                itemTOUR1: '',
                itemTOUR2: '',
                itemTSHIRT: '', // can add sizes
            }}
              validationSchema={Yup.object({
                //TODO: Does showcode need to be submitted every time?
                //TODO: needs to require uuid but uuid is a hidden field
                //TODO: needs to require one of packages: either EXPO or CONF
                //NOTE: Maybe everyone is forced to get EXPO for now and the others are additional.
                itemEXPO: Yup.boolean()
                    .required('Required')
            })}
            // onSubmit={_handleSubmit}
          onSubmit={submitFormHandler}
        //   onFocus={formFocusedHandler}

          >{({ values, errors, isSubmitting }) => (
            <Form>
          <HiddenField name="showcode" placeholder="myst1021" fullWidth />

          <FormHeader className="header-conf">CONFERENCE OPTIONS</FormHeader>
          <ItemCheckboxField
            name="itemEXPO"
            label="Expo Only"
            itemcode="itemEXPO"
            itempricekey="itemEXPO|1"
            price="0.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemCONF"
            label="Full Conference"
            itemcode="itemCONF"
            itempricekey="itemCONF|2"
            price="200.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemCONFPREMIUM"
            label="Full Conference-Premium"
            itemcode="itemCONFPREMIUM"
            itempricekey="itemCONFPREMIUM|3"
            price="250.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemONEDAYSAT"
            label="Saturday Conference Only"
            itemcode="itemONEDAYSAT"
            itempricekey="itemONEDAYSAT|4"
            price="125.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemONEDAYSUN"
            label="Sunday Conference Only"
            itemcode="itemONEDAYSUN"
            itempricekey="itemONEDAYSUN|5"
            price="125.00"
            fullWidth
            />

          <FormHeader className="header-banquet">BANQUET</FormHeader>
          <ItemCheckboxField
            name="itemBANQ"
            label="Banquet Ticket"
            itemcode="itemBANQ"
            itempricekey="itemBANQ|6"
            price="50.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemBANQTABLE"
            label="Banquet - Table of 6"
            itemcode="itemBANQTABLE"
            itempricekey="itemBANQTABLE|7"
            price="250.00"
            fullWidth
            />

          <FormHeader className="header-tours">MYSTERY TOURS</FormHeader>
          <ItemCheckboxField
            name="itemTOUR1"
            label="Tour 1 Ticket - Mystery Bookstore Tour"
            itemcode="itemTOUR1"
            itempricekey="itemTOUR1|8"
            price="65.00"
            fullWidth
            />

          <ItemCheckboxField
            name="itemTOUR2"
            label="Tour 2 Ticket - Haunted Locations"
            itemcode="itemTOUR2"
            itempricekey="itemTOUR2|9"
            price="95.00"
            fullWidth
            />

          <FormHeader className="header-tshirt">T-SHIRT</FormHeader>
          <ItemCheckboxField
            name="itemTSHIRT"
            label="MysteryCon 2021 T-shirt (one size fits all)"
            itemcode="itemTSHIRT"
            itempricekey="itemTSHIRT|10"
            price="35.00"
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
            {/* <pre>{JSON.stringify(values,null,2)}</pre>
            <pre>{JSON.stringify(errors,null,2)}</pre> */}
            </Form>
            )}
        </Formik>
    </Fragment>
  );
};

export default ItemsForm;
