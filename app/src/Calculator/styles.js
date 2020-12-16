export const styles = theme => ({
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
  
  content: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > div': {
      flex: 1,
    },
  },
});
