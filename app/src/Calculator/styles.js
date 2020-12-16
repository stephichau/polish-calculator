export const styles = theme => ({
  header: {
    border: '1px solid green',
  },
  
  content: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > div': {
      flex: 1,
      border: '1px solid yellow',
    },
  },
});
