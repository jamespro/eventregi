import { Link } from "react-router-dom";
import classes from './Review.module.css';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import ReviewReginfo from '../components/Review/ReviewReginfo';
import ReviewItems from '../components/Review/ReviewItems';
// import useHttp from '../hooks/use-http';
// import { addItems } from '../lib/api';


const Review = () => {
    const currentUuid = localStorage.getItem('uuid');
    // these should be components:
    // get user info
    // get user items
    return (
        <>
            <div>
                <main>
                    <section className={classes.hero}>
                        <div className={classes.headertext}>
                            <h2>Review</h2>
                            <ReviewReginfo uuid={currentUuid} />
                            <ReviewItems uuid={currentUuid} />
                            <p><Link to="/attendee/payment/myst1221" className={classes.buttonPayment} >Make Payment</Link></p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
};

export default Review;