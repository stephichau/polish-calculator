import { rowBuilder } from '../helpers';

const startsWithZero = (currentValue) => (currentValue.startsWith('0') && !currentValue.includes('.'));

const buttons = [
  {
    value: 7,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}7`);
    },
  },
  {
    value: 8,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}8`);
    },
  },
  {
    value: 9,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}9`);
    },
  },
  {
    value: 4,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}4`);
    },
  },
  {
    value: 5,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}5`);
    },
  },
  {
    value: 6,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}6`);
    },
  },
  {
    value: 1,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}1`);
    },
  },
  {
    value: 2,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}2`);
    },
  },
  {
    value: 3,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}3`);
    },
  },
  {
    value: '.',
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (rawCurrentValue.includes('.')) return;

      setCurrentValue(`${rawCurrentValue}.`)
    },
  },
  {
    value: 0,
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (startsWithZero(rawCurrentValue)) return;

      setCurrentValue(`${rawCurrentValue}0`);
    },
  },
];

export const rightPanel = rowBuilder(buttons, 3);
