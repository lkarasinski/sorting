import { generateNewArray } from '@sorting/functions';
import {
  SortingAlgorithms,
  SortingAlgorithmsData,
  VisualizationData,
} from '@sorting/types';
import { useDebounce, useMemoizedFn } from 'ahooks';
import * as React from 'react';

type UpdateData = (sort: SortingAlgorithms, data: VisualizationData) => void;
type ResetData = () => void;

export type UseVisualizationData = (
  arrayLenght: number,
  setState: React.Dispatch<
    React.SetStateAction<'randomized' | 'sorting' | 'sorted'>
  >
) => [SortingAlgorithmsData, UpdateData, ResetData];

export const useVisualizationData: UseVisualizationData = (
  arrayLength,
  setState
) => {
  const debouncedLength = useDebounce(arrayLength, { wait: 100 });

  const [visualizationData, setVisualizationData] =
    React.useState<SortingAlgorithmsData>(() => {
      const newData = generateNewArray(debouncedLength);
      return {
        quick: JSON.parse(JSON.stringify(newData)),
        bubble: JSON.parse(JSON.stringify(newData)),
        insertion: JSON.parse(JSON.stringify(newData)),
        selection: JSON.parse(JSON.stringify(newData)),
        heap: JSON.parse(JSON.stringify(newData)),
        gnome: JSON.parse(JSON.stringify(newData)),
      };
    });

  const resetData: ResetData = useMemoizedFn(() => {
    const newData = generateNewArray(debouncedLength);
    setVisualizationData({
      quick: JSON.parse(JSON.stringify(newData)),
      bubble: JSON.parse(JSON.stringify(newData)),
      insertion: JSON.parse(JSON.stringify(newData)),
      selection: JSON.parse(JSON.stringify(newData)),
      heap: JSON.parse(JSON.stringify(newData)),
      gnome: JSON.parse(JSON.stringify(newData)),
    });
    setState('randomized');
  });

  React.useEffect(() => {
    resetData();
    setState('randomized');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedLength]);

  const updateData: UpdateData = useMemoizedFn(
    (sort: SortingAlgorithms, data: VisualizationData) => {
      setVisualizationData({
        ...visualizationData,
        [sort]: data,
      });
    }
  );

  return [visualizationData, updateData, resetData];
};
