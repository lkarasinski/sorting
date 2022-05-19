import * as React from 'react';
import { BoxStateType } from '@sorting/types';
import { SortingBox } from '../SortingBox';
import { Container } from './sortingContainer.style';

type Props = {
  visualizationData: {
    values: number[];
    states: BoxStateType[];
  };
};

export const SortingContainer = ({ visualizationData }: Props) => {
  return (
    <Container css={{ gap: 100 / visualizationData.values.length }}>
      {visualizationData.values.map((number, index) => {
        return (
          <SortingBox
            state={visualizationData.states[index]}
            key={`${number} - ${index}`}
            value={number}
          />
        );
      })}
    </Container>
  );
};
