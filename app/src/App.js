import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Calculator from './Calculator';
import { styles } from './styles';

const App = ({ classes }) => (
  <div className={classes.container}>
    <Calculator />
  </div>
);

export default withStyles(styles)(App);
