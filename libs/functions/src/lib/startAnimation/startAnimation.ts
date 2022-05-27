import { Step, VisualizationData } from '@sorting/types';
import { animateStep } from '../animateStep';

type Props = {
  visualizationData: VisualizationData;
  setVisualizationData: React.Dispatch<React.SetStateAction<VisualizationData>>;
  steps: Step[];
  delay: React.MutableRefObject<number>;
};

export const startAnimation = async ({
  visualizationData,
  setVisualizationData,
  steps,
  delay,
}: Props) => {
  for (const step of steps) {
    await animateStep({ step, visualizationData, setVisualizationData, delay });
  }
};
