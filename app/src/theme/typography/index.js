import {
  fontFamily,
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,
  fontSize
} from './constants';

export const createTypography = () => ({
  useNextVariants: true,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,
  button: {
    textTransform: 'uppercase',
    fontWeightRegular,
  },
});
