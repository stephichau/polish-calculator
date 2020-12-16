import React from 'react';
import Divider from '@material-ui/core/Divider';
import BaseButton from '../components/BaseButton';
import { headerPanel } from './headerPanel';
import { leftPanel } from './leftPanel'; 
import { rightPanel } from './rightPanel';

export const Calculator = ({ classes }) => {

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
    <div className={classes.container}>
      <div className={classes.header}>
        <div>Input</div>
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
  )
};
