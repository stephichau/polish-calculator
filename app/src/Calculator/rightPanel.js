import { rowBuilder } from '../helpers';

const buttons = [
  {
    value: 7,
    onClick: ({ setCurrentValue }) => setCurrentValue(7),
  },
  {
    value: 8,
    onClick: ({ setCurrentValue }) => setCurrentValue(8),
  },
  {
    value: 9,
    onClick: ({ setCurrentValue }) => setCurrentValue(9),
  },
  {
    value: 4,
    onClick: ({ setCurrentValue }) => setCurrentValue(4),
  },
  {
    value: 5,
    onClick: ({ setCurrentValue }) => setCurrentValue(5),
  },
  {
    value: 6,
    onClick: ({ setCurrentValue }) => setCurrentValue(6),
  },
  {
    value: 1,
    onClick: ({ setCurrentValue }) => setCurrentValue(1),
  },
  {
    value: 2,
    onClick: ({ setCurrentValue }) => setCurrentValue(2),
  },
  {
    value: 3,
    onClick: ({ setCurrentValue }) => setCurrentValue(3),
  },
  {
    value: '.',
    onClick: () => {},
  },
  {
    value: 0,
    onClick: ({ setCurrentValue }) => setCurrentValue(4),
  },
];

export const rightPanel = rowBuilder(buttons, 3);
