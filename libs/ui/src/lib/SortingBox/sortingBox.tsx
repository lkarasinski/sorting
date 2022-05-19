import { BoxStateType } from '@sorting/types';
import * as React from 'react';
import { Box } from './sortingBox.style';

type Props = {
  value: number;
  state: BoxStateType;
};

export const SortingBox = (props: Props) => {
  return (
    <Box
      css={{ transform: `scaleY(${props.value / 100})` }}
      state={props.state}
    />
  );
};
