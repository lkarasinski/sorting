import * as React from 'react';
import { Box } from './sortingBox.style';

type Props = {
  value: number;
  state: 'default' | 'compared' | 'swapped' | 'highlighted';
};

export const SortingBox = (props: Props) => {
  return (
    <Box
      css={{ transform: `scaleY(${props.value / 100})` }}
      state={props.state}
    />
  );
};
