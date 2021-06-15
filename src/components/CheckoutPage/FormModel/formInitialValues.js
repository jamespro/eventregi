import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expirationDate,
    cvv
  }
} = checkoutFormModel;

// eslint gave this error here: Assign array to a variable before exporting as module default  import/no-anonymous-default-export
// eslint-disable-next-line
export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expirationDate.name]: '',
  [cvv.name]: ''
};
