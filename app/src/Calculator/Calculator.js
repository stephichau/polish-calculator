import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import BaseButton from '../components/BaseButton';
import { Stack } from '../Stack';
import { headerPanel } from './headerPanel';
import { leftPanel } from './leftPanel'; 
import { rightPanel } from './rightPanel';

export const Calculator = ({ classes }) => {
  const [stack, setStack] = useState([0, 0]);
  const [currentValue, setCurrentValue] = useState(0);

  const buildButtonPanel = (panelCols) => (
    panelCols.map(obj => <BaseButton key={obj.value} {...obj} />)
  );

  const buildButtonPanelRows = (panelRows) => (
    panelRows.map(
      row => (
        <div>
          {buildButtonPanel(row)}
        </div>
      )
    )
  );

  return (
    <div className={classes.wrapper}>
      <Stack values={stack} />
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.currentValue}>0</div>
          <Divider />
          <div>
            {buildButtonPanel(headerPanel)}
          </div>
        </div>

        <div className={classes.content}>
          <div>{buildButtonPanelRows(leftPanel)}</div>
          <div>{buildButtonPanelRows(rightPanel)}</div>
        </div>
      </div>
    </div>
  )
};
