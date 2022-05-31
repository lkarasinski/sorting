import * as React from 'react';
import { BoxStateType, SortingAlgorithms } from '@sorting/types';
import { SortingBox } from '../SortingBox';
import { Container } from './sortingContainer.style';
import { AlgorithmSelect } from '../AlgorithmSelect';
import { useMemoizedFn } from 'ahooks';
import { Button } from '../Button';

type Props = {
  visualizationData: {
    values: number[];
    states: BoxStateType[];
  };
  animating: boolean;
  index: number;
  algorithms: {
    selected: {
      value: SortingAlgorithms[];
      setValue: React.Dispatch<React.SetStateAction<SortingAlgorithms[]>>;
    };
    available: SortingAlgorithms[];
    all: SortingAlgorithms[];
  };
};

export const SortingContainer = ({
  visualizationData,
  animating,
  algorithms,
  index,
}: Props) => {
  const changeSelectedAlgorithm = useMemoizedFn((sort: SortingAlgorithms) => {
    const newSelectedArray = [...algorithms.selected.value];
    newSelectedArray[index] = sort;
    algorithms.selected.setValue(newSelectedArray);
  });

  const removeAlgorithm = useMemoizedFn(() => {
    const newSelectedArray = algorithms.selected.value.filter(
      (algorithm, i) => i !== index
    );
    algorithms.selected.setValue([...newSelectedArray]);
  });

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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <AlgorithmSelect
          disabled={animating}
          value={algorithms.selected.value[index]}
          setValue={changeSelectedAlgorithm}
          allAlgorithms={algorithms.all}
          availableAlgorithms={algorithms.available}
        />
        {algorithms.selected.value.length > 1 && (
          <Button
            onClick={removeAlgorithm}
            disabled={algorithms.selected.value.length <= 1 || animating}
          >
            Remove
          </Button>
        )}
      </div>
    </>
  );
};
