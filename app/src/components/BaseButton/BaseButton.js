import React from 'react';
import Button from '@material-ui/core/Button';

export const BaseButton = ({
  classes,
  onClick = () => {},
  type = 'default',
  value: text = '',
}) => {


  return (
    <Button
      onClick={onClick}
    >
      {text}
    </Button>
  )
};
