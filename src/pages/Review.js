import { Link } from "react-router-dom";
import classes from './Review.module.css';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import ReviewReginfo from '../components/Review/ReviewReginfo';
//import ReviewItems from '../components/Review/ReviewItems';
// import useHttp from '../hooks/use-http';
// import { addItems } from '../lib/api';


const Review = () => {
    //I should be storing uuid into localstorage if it is in the URL. I think I already am
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
                            passing in the UUID to generate the ReviewReginfo component with Name etc. Am I not passing in the props correctly?
                            <ReviewReginfo uuid={currentUuid} />
{/* //RESUME HERE 20210915-20:40:46 */}
                            {/* <ReviewItems uuid={currentUuid} /> */}
                            <p><Link to="/attendee/payment/myst1221" className={classes.buttonPayment} >Make Payment</Link></p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
};

export default Review;