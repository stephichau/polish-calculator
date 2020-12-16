export const styles = theme => ({
  wrapper: {
    marginTop: theme.spacing(7),
  },

  container: {
    padding: theme.spacing(5),
    backgroundColor: '#D3D3D3',
    borderRadius: 4,
  },

  header: {
    borderRadius: 12,
    backgroundColor: '#234fc4',
    padding: theme.spacing(5, 4),
  },

  currentValue: {
    textAlign: 'right',
    fontSize: theme.typography.fontSize * 1.5,
  },
  
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),

    '& > div': {
      flex: 1,
    },
  },
});
