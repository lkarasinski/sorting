import { VisualizationData } from '@sorting/types';
import { isEqual } from 'lodash';

export const checkIfSorted = (data: VisualizationData) => {
  const arr = data.values;
  return isEqual(
    [...arr],
    [...arr].sort((a, b) => a - b)
  );
};
