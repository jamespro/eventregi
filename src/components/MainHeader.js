import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
      <header className={classes.header}>
          <section>
              <h1>Mystery Convention 2021</h1><p>Oct 29-31, 2021</p>
          </section>
    </header>
  );
};

export default MainHeader;