import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import classes from './ReviewReginfo.module.css';
import useHttp from '../hooks/use-http';
import { getUser } from '../../lib/api';

function ReviewReginfo(props) {
  const { uuid } = props;
// get user info from mongoDB using uuid
  const { sendRequest, status, data } = useHttp(getUser);

  //   const { nameOnCard, cardNumber, expirationDate } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Contact Info
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>First Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Last Name</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card holder</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom></Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom></Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default ReviewReginfo;
