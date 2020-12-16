import { rowBuilder } from '../helpers';

const buttons = [
  {
    value: 7,
    onClick: () => {},
  },
  {
    value: 8,
    onClick: () => {},
  },
  {
    value: 9,
    onClick: () => {},
  },
  {
    value: 4,
    onClick: () => {},
  },
  {
    value: 5,
    onClick: () => {},
  },
  {
    value: 6,
    onClick: () => {},
  },
  {
    value: 1,
    onClick: () => {},
  },
  {
    value: 2,
    onClick: () => {},
  },
  {
    value: 3,
    onClick: () => {},
  },
  {
    value: '.',
    onClick: () => {},
  },
  {
    value: 0,
    onClick: () => {},
  },
];

export const rightPanel = rowBuilder(buttons, 3);
