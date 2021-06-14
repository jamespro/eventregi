import { Formik, Form } from 'formik';
import classes from './Reginfo.module.css';

// import AddressForm from '../components/Forms/AddressForm';

import validationSchema from '../components/FormModel/validationSchema';
import checkoutFormModel from '../components/FormModel/checkoutFormModel';
import formInitialValues from '../components/FormModel/formInitialValues';
// import ReginfoForm from '../components/Reginfo/ReginfoForm';

const Reginfo = () => {
//TODO: I would like to put this in a common location
const protocol = window.location.protocol;
let host = window.location.host;
if (window.location.hostname == 'localhost') {
    host = 'localhost:3333';
} else {
    host = 'eventregg.herokuapp.com';
}

let API_SERVER = protocol + '//' + host;

    const currentValidationSchema = validationSchema[0];
    const { formId, formField } = checkoutFormModel;
    // const { formInitialValues } = formInitialValues;
//             <AddressForm formField={formField}
//             initialValues={formInitialValues}
//             validationSchema={currentValidationSchema}
//  />

      async function _submitForm(values, actions) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
    const response = await fetch(API_SERVER+'/api/complete', requestOptions);
    const data = await response.json();
    console.log(data);
    //TODO: Do something after you get a successful response
    //TODO: display success message, or dialog, or have another page load with instructions, or a configurable redirect URL
    actions.setSubmitting(false);

  }

      function _handleSubmit(values, actions) {
      _submitForm(values, actions);

  }

  function _handleBack() {
    
  }

    return (
        <section>
            <h1>Contact Info</h1>
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>

                <div className={classes.buttons}>
                  <div className={classes.wrapper}>
                    <button className='btn'>Continue</button>

                            </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
    )
};

export default Reginfo;
