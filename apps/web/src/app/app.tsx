import * as React from 'react';
import { SortingContainer } from '@sorting/ui';
import { SortingAlgorithms } from '@sorting/types';
import { ControlPanel, Header } from '@sorting/ui';
import { useSort } from '@sorting/hooks';
import { useSortingSteps } from '../hooks/useSortingSteps';

export function App() {
  const {
    algorithms,
    visualizationData,
    addNewAlgorithm,
    state,
    delay,
    length,
    nextState,
  } = useSort(useSortingSteps);

  return (
    <div
      style={{
        maxWidth: 1024,
        margin: '0 auto',
      }}
    >
      <Header />
      {algorithms.selected.value.map((sort: SortingAlgorithms, index) => {
        return (
          <SortingContainer
            algorithms={algorithms}
            index={index}
            key={sort}
            animating={state === 'sorting'}
            visualizationData={visualizationData[sort]}
          />
        );
      })}
      <ControlPanel
        state={state}
        nextState={nextState}
        length={length}
        delay={delay}
        algorithms={algorithms}
        addNewAlgorithm={addNewAlgorithm}
      />
    </div>
  );
}

export default App;
