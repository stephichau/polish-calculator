import { createMuiTheme } from '@material-ui/core/styles';
import { createColors } from './colors';
import { spacing } from './spacing';
import { createTypography } from './typography';

const newTheme = {
  palette: createColors(),
  spacing,
  typography: createTypography(),
};

export const theme = createMuiTheme(newTheme);
