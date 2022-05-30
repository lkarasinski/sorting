import * as React from 'react';
import { BoxStateType, SortingAlgorithms } from '@sorting/types';
import { SortingBox } from '../SortingBox';
import { Container } from './sortingContainer.style';
import { AlgorithmSelect } from '../AlgorithmSelect';

type Props = {
  visualizationData: {
    values: number[];
    states: BoxStateType[];
  };
  animating: boolean;
  selectedAlgorithm: SortingAlgorithms;
  changeSelectedAlgorithm: (value: SortingAlgorithms) => void;
  availableAlgorithms: SortingAlgorithms[];
  allAlgorithms: SortingAlgorithms[];
};

export const SortingContainer = ({
  visualizationData,
  animating,
  selectedAlgorithm,
  changeSelectedAlgorithm,
  availableAlgorithms,
  allAlgorithms,
}: Props) => {
  return (
    <>
      <Container
        css={{ gap: Math.floor(100 / visualizationData.values.length) }}
      >
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
      <AlgorithmSelect
        disabled={animating}
        value={selectedAlgorithm}
        setValue={changeSelectedAlgorithm}
        allAlgorithms={allAlgorithms}
        availableAlgorithms={availableAlgorithms}
      />
    </>
  );
};
