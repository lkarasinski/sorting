import * as React from 'react';
import { SortingAlgorithms, SortingAlgorithmsData, Step } from '@sorting/types';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import init, {
  bubble_sort,
  quick_sort,
  insertion_sort,
  selection_sort,
  heap_sort,
  gnome_sort,
} from 'libs/wasm/build/wasm';
import { useDeepCompareEffect } from 'ahooks';

type StepData = Record<SortingAlgorithms, Step[]>;

export type UseSortingSteps = (
  visualizationData: SortingAlgorithmsData
) => StepData;
export const useSortingSteps: UseSortingSteps = (visualizationData) => {
  const [steps, setSteps] = React.useState<StepData>({
    quick: [],
    bubble: [],
    insertion: [],
    selection: [],
    heap: [],
    gnome: [],
  });

  useDeepCompareEffect(() => {
    (async () => {
      await init();
      const steps: StepData = {
        quick: JSON.parse(
          quick_sort(Uint32Array.from([...visualizationData.quick.values]))
        ),
        bubble: JSON.parse(
          bubble_sort(Float64Array.from([...visualizationData.bubble.values]))
        ),
        insertion: JSON.parse(
          insertion_sort(
            Float64Array.from([...visualizationData.bubble.values])
          )
        ),
        selection: JSON.parse(
          selection_sort(
            Float64Array.from([...visualizationData.bubble.values])
          )
        ),
        heap: JSON.parse(
          heap_sort(Uint32Array.from([...visualizationData.bubble.values]))
        ),
        gnome: JSON.parse(
          gnome_sort(Uint32Array.from([...visualizationData.bubble.values]))
        ),
      };

      setSteps(steps);
    })();
  }, [visualizationData]);

  return steps;
};
