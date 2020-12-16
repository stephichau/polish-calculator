export const headerPanel = [
  {
    value: '+',
    onClick: ({ stack, currentValue, setCurrentValue}) => {
      if (!stack.length) return;

      const result = stack.shift() + currentValue;

      setCurrentValue(result);
    },
  },
  {
    value: '-',
    onClick: ({ stack, currentValue, setCurrentValue}) => {
      if (!stack.length) return;

      const result = stack.shift() - currentValue;

      setCurrentValue(result);
    },
  },
  {
    value: 'x',
    onClick: ({ stack, currentValue, setCurrentValue}) => {
      if (!stack.length) return;

      const result = stack.shift() * currentValue;

      setCurrentValue(result);
    },
  },
  {
    value: '/',
    onClick: ({ stack, currentValue, setCurrentValue}) => {
      if (!stack.length) return;

      const result = stack.shift() / currentValue;

      setCurrentValue(result);
    },
  },
  {
    value: 'enter',
    onClick: ({ stack, setStack, currentValue, setCurrentValue }) => {
      setStack([...stack, currentValue]);
      setCurrentValue(0);
    },
  },
];
