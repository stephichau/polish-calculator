import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import BaseButton from '../components/BaseButton';
import { Stack } from '../Stack';
import { headerPanel } from './headerPanel';
import { leftPanel } from './leftPanel'; 
import { rightPanel } from './rightPanel';

export const Calculator = ({ classes }) => {
  const [stack, setStack] = useState([]);
  const [currentValue, setCurrentValue] = useState('');

  const onClick = (callback) => {
    callback({
      stack, setStack,
      rawCurrentValue: currentValue,
      currentValue: parseFloat(currentValue, 10),
      setCurrentValue: (val) => {
        setCurrentValue(`${val}`);
      },
    });
  };

  const buildButtonPanel = (panelCols) => (
    panelCols.map(obj => <BaseButton key={obj.value} {...obj} onClick={() => onClick(obj.onClick)} />)
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
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.currentValue}>{currentValue || '0'}</div>
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
      <div>
        <p>Stack:</p>
        <Stack values={stack} />
      </div>
    </div>
  )
};
