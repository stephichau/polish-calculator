import { rowBuilder } from '../helpers';

const buttons = [
  {
    value: 'c',
    onClick: ({ setCurrentValue }) => {
      setCurrentValue(0);
    },
  },
  {
    value: 'ac',
    onClick: ({ setStack, setCurrentValue }) => {
      setStack([]);
      setCurrentValue(0);
    },
  },
  {
    value: 'x2',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(Math.pow(currentValue, 2))
    },
  },
  {
    value: 'x3',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(Math.pow(currentValue, 3))
    },
  },
  {
    value: 'sqrt',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(Math.pow(currentValue, .5))
    },
  },
  {
    value: 'chs',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(currentValue * -1);
    },
  },
  {
    value: 'sin',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(Math.sin(currentValue));
    },
  },
  {
    value: 'cos',
    onClick: ({ currentValue, setCurrentValue }) => {
      setCurrentValue(Math.cos(currentValue));
    },
  },
  {
    value: '1/x',
    onClick: ({ currentValue, setCurrentValue }) => {
      if (currentValue) setCurrentValue(1/currentValue)
    },
  },
];

export const leftPanel = rowBuilder(buttons, 2);
