import { rowBuilder } from '../helpers';

const buttons = [
  {
    value: 'c',
    onClick: () => {},
  },
  {
    value: 'ac',
    onClick: () => {},
  },
  {
    value: 'x2',
    onClick: () => {},
  },
  {
    value: 'x3',
    onClick: () => {},
  },
  {
    value: 'sqrt',
    onClick: () => {},
  },
  {
    value: 'sin',
    onClick: () => {},
  },
  {
    value: 'cos',
    onClick: () => {},
  },
  {
    value: '1/x',
    onClick: () => {},
  },
];

export const leftPanel = rowBuilder(buttons, 2);
