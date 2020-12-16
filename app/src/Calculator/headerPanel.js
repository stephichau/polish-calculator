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
      if (!(stack.length && currentValue)) return;

      const result = stack.shift() / currentValue;

      setCurrentValue(result);
    },
  },
  {
    value: '<-',
    onClick: ({ rawCurrentValue, setCurrentValue }) => {
      if (!rawCurrentValue.length) return;

      setCurrentValue(rawCurrentValue.slice(0, rawCurrentValue.length - 1))
    },
  },
  {
    value: 'enter',
    onClick: ({ stack, setStack, currentValue, setCurrentValue }) => {
      setStack([currentValue, ...stack]);
      setCurrentValue('');
    },
  },
];
