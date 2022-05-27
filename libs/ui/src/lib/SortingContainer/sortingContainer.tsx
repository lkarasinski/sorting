import * as React from 'react';
import { BoxStateType, SortingAlgorithms } from '@sorting/types';
import { SortingBox } from '../SortingBox';
import { Container } from './sortingContainer.style';
import _ from 'lodash';

type Props = {
  visualizationData: {
    values: number[];
    states: BoxStateType[];
  };
  animating: boolean;
  selectedAlgorithm: string;
  changeSelectedAlgorithm: (value: SortingAlgorithms) => void;
  availableAlgorithms: SortingAlgorithms[];
};

export const SortingContainer = ({
  visualizationData,
  animating,
  selectedAlgorithm,
  changeSelectedAlgorithm,
  availableAlgorithms,
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
      <select
        disabled={animating}
        value={selectedAlgorithm}
        onChange={(e) =>
          changeSelectedAlgorithm(e.target.value as SortingAlgorithms)
        }
      >
        {[selectedAlgorithm, ...availableAlgorithms].map((algorithm) => (
          <option key={algorithm} value={algorithm}>
            {_.capitalize(algorithm)} Sort
          </option>
        ))}
      </select>
    </>
  );
};
