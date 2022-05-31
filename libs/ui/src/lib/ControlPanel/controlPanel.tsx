import { SortingAlgorithms } from '@sorting/types';
import * as React from 'react';
import { Button } from '../Button';
import { NumberInput } from '../NumberInput';

type ControlPanelProps = {
  state: 'sorting' | 'sorted' | 'randomized';
  nextState: () => void;
  algorithms: { available: SortingAlgorithms[] };
  addNewAlgorithm: () => void;

  length: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
  };
  delay: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
  };
};

const getButtonText = (state: ControlPanelProps['state']) => {
  switch (state) {
    case 'sorting':
      return 'Stop and reset';
    case 'sorted':
      return 'Randomize';
    case 'randomized':
      return 'Start sorting';
  }
};

export const ControlPanel = ({
  nextState,
  length,
  delay,
  algorithms,
  addNewAlgorithm,
  state,
}: ControlPanelProps) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 200,
          margin: '0 auto',
        }}
      >
        <Button
          onClick={addNewAlgorithm}
          disabled={state === 'sorting' || algorithms.available.length === 0}
        >
          Add new
        </Button>
        <NumberInput {...length} id={'length'} disabled={state === 'sorting'} />
        <NumberInput {...delay} id={'delay'} />
        <Button onClick={nextState}>{getButtonText(state)}</Button>
      </div>
    </div>
  );
};
