const baseStyles = ({
  border: 'none',
  boxShadow: 'none',
});

export const styles = theme => ({
  default: {
    ...baseStyles,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary,
    color: theme.palette.white,
  },

  basicOperand: {
    ...baseStyles,
  },

  complexOperand: {
    ...baseStyles,
  },
});
