import React from 'react';

export const Calculator = ({ classes }) => {

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div style={{ border: '1px solid blue' }}>Input</div>
        <div>divider</div>
        <div style={{ border: '1px solid red' }}>buttons</div>
      </div>

      <div className={classes.content}>
        <div>Left panel</div>
        <div>right panel</div>
      </div>
    </div>
  )
};
