import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <section className={classes.section}>
      <div className={classes.logo}>Registration</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/reginfo'>
              Contact Info
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/demo'>
              Demographics
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/items'>
              Items
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/review'>
              Review
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/payment'>
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/attendee/confirm'>
              Confirm
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainNavigation;
