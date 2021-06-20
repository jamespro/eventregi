import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import MainHeader from './components/MainHeader';
import MaterialLayout from './components/Layout/MaterialLayout';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
import Layout from './components/Layout/Layout';
import Landing from './pages/Landing';
import Reginfo from './pages/Reginfo';
import Items from './pages/Items';

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <Landing />
              <Footer />
          </Route>
          <Route path="/attendee/reginfo">
            <Layout>
                <MaterialLayout>
                    <Reginfo />
                </MaterialLayout>
            </Layout>
          </Route>
          <Route path="/attendee/reginfo/:showcode">
            <Layout>
                <MaterialLayout>
                    <Reginfo />
                </MaterialLayout>
            </Layout>
          </Route>
          <Route path="/attendee/items">
            <Layout>
                <MaterialLayout>
                    <Items />
                </MaterialLayout>
            </Layout>
          </Route>
          <Route path="/attendee/items/:uuid">
            <Layout>
                <MaterialLayout>
                    <Items />
                </MaterialLayout>
            </Layout>
          </Route>
          {/* <Route path="/checkout">
            <div>
                <MaterialLayout>
                    <CheckoutPage />
                </MaterialLayout>
            </div>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App;