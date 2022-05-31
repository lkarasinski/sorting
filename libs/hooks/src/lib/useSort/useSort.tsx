import { checkIfSorted, sleep, startAnimation } from '@sorting/functions';
import { SortingAlgorithms, SortingAlgorithmsData, Step } from '@sorting/types';
import {
  useDebounceEffect,
  useDeepCompareEffect,
  useLatest,
  useMemoizedFn,
} from 'ahooks';
import * as React from 'react';
import { useVisualizationData } from '../useVisualizationData';

const allAlgorithms: SortingAlgorithms[] = [
  'bubble',
  'quick',
  'insertion',
  'selection',
  'heap',
  'gnome',
];

type StepData = Record<SortingAlgorithms, Step[]>;

export const useSort = (
  useSortingSteps: (visualizationData: SortingAlgorithmsData) => StepData
) => {
  const [length, setLength] = React.useState(100);
  const [delay, setDelay] = React.useState(50);
  const latestDelay = useLatest(delay);
  const [state, setState] = React.useState<'randomized' | 'sorting' | 'sorted'>(
    'randomized'
  );
  const [visualizationData, updateData, resetData] = useVisualizationData(
    length,
    setState
  );
  const steps = useSortingSteps(visualizationData);
  const [selectedAlgorithms, setSelectedAlgorithms] = React.useState<
    SortingAlgorithms[]
  >(['quick']);
  const stopAnimation = React.useRef<boolean>(false);

  // Set state to sorted when all algorithms are sorted
  useDebounceEffect(
    () => {
      if (state !== 'sorting') return;
      const sorted = selectedAlgorithms.every((sort) =>
        checkIfSorted(visualizationData[sort])
      );
      if (sorted) {
        setState('sorted');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [selectedAlgorithms, visualizationData, state === 'sorting'],
    { wait: 300 }
  );

  const availableAlgorithms = allAlgorithms.filter(
    (sort) => !selectedAlgorithms.includes(sort)
  );

  const beginAnimation = async () => {
    selectedAlgorithms.forEach(async (sort) => {
      if (steps[sort]) {
        const currentSteps = [...steps[sort]];
        await startAnimation({
          visualizationData: { ...visualizationData[sort] },
          steps: currentSteps,
          delay: latestDelay,
          setVisualizationData: () => updateData(sort, visualizationData[sort]),
          stop: stopAnimation,
          resetData,
        });
      }
    });
  };

  const addNewAlgorithm = useMemoizedFn(() => {
    if (availableAlgorithms.length > 0) {
      setSelectedAlgorithms([...selectedAlgorithms, availableAlgorithms[0]]);
      resetData();
    }
  });

  // Reset data when selected algorithms change
  useDeepCompareEffect(() => {
    resetData();
    setState('randomized');
    stopAnimation.current = false;
  }, [selectedAlgorithms]);

  const nextState = useMemoizedFn(async () => {
    switch (state) {
      // If array is randomized, begin animation and set state to sorting
      case 'randomized':
        // Wait for length debounce to finish
        await sleep(100);
        stopAnimation.current = false;
        setState('sorting');
        beginAnimation();
        break;
      // If array is sorted randomize it and set state to randomized
      case 'sorted':
        resetData();
        break;
      // If array is sorting, pause the animation and reset the array
      // Array will be reset when animating function sees stopAnimation.current === true
      case 'sorting':
        stopAnimation.current = true;
        break;
    }
  });

  return {
    state,
    nextState,
    addNewAlgorithm,
    visualizationData,
    length: {
      value: length,
      setValue: setLength,
    },
    delay: {
      value: delay,
      setValue: setDelay,
    },
    algorithms: {
      all: allAlgorithms,
      selected: { value: selectedAlgorithms, setValue: setSelectedAlgorithms },
      available: availableAlgorithms,
    },
  };
};

export default useSort;
