import { primary } from './primary';
import { secondary } from './secondary';

export const createColors = () => ({
  ...primary,
  ...secondary,
  black: '#282828',
});
