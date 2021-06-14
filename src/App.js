import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import MainHeader from './components/MainHeader';
import MaterialLayout from './components/layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';
import Layout from './components/layout/Layout';
import Reginfo from './pages/Reginfo';

function App() {
  return (
    <Router>
      <div className="App">
              <MainHeader />
              <Layout>
         <Switch>
        <Route path="/" exact>
            <div>
            <p>Welcome to Mystery Convention 2021!</p>
            <p><Link to="/attendee/reginfo/myst1221">Begin Attendee Registration</Link></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            {/* <Link to='/checkout'>Link to checkout</Link> */}
          </Route>
          {/* <Route path="/checkout">
            <div>
                <MaterialLayout>
                    <CheckoutPage />
                </MaterialLayout>
            </div>
          </Route> */}
            <Route path="/attendee/reginfo/:showcode">
               <Reginfo />
          </Route>

        </Switch>
        </Layout>
      </div>
    </Router>
  );
}
export default App;