import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.heading}>
      <h1 className={classes.main_headline}>Brayden O'Donnell</h1>
      <p className={classes.sub_headline}>
        Motivated, self-directed junior software engineer focused on developing
        web applications using modern technologies and techniques.
      </p>
    </div>
  );
};

export default Header;
