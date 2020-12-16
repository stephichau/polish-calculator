import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const Stack = ({ values }) => {


  return (
    <List>
      {values.map(val => (
        <ListItem>{val}</ListItem>
      ))}
    </List>
  );
};
