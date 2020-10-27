import { getCellWallWidth } from './get-cell-wall-width';

export const getViewPortSize = () => {
  return {
    width: getCellWallWidth(),
    height: document.documentElement.clientHeight,
  };
};
