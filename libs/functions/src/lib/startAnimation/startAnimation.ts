import { Step, VisualizationData } from '@sorting/types';
import { animateStep } from '../animateStep';

type Props = {
  visualizationData: VisualizationData;
  setVisualizationData: React.Dispatch<React.SetStateAction<VisualizationData>>;
  steps: Step[];
  delay: React.MutableRefObject<number>;
  stop: React.MutableRefObject<boolean>;
  resetData: () => void;
};

export const startAnimation = async ({
  visualizationData,
  setVisualizationData,
  steps,
  delay,
  stop,
  resetData,
}: Props) => {
  for (const step of steps) {
    await animateStep({ step, visualizationData, setVisualizationData, delay });
    if (stop?.current) {
      resetData();
      break;
    }
  }
};
