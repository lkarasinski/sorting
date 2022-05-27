import * as React from 'react';
import { Step, VisualizationData } from '@sorting/types';
import { changeState } from '../changeState';
import { sleep } from '../sleep';
import { swap } from '../swap';

type SetArrayType = React.Dispatch<React.SetStateAction<VisualizationData>>;

type Props = {
  visualizationData: VisualizationData;
  setVisualizationData: SetArrayType;
  step: Step;
  delay: React.MutableRefObject<number>;
};

export const animateStep = async ({
  visualizationData,
  setVisualizationData,
  step,
  delay,
}: Props) => {
  if (step.type === 'swap') {
    swap(visualizationData.values, step.targets[0], step.targets[1]);
    changeState(visualizationData.states, step.targets, 'swap');
    setVisualizationData({
      values: [...visualizationData.values],
      states: visualizationData.states,
    });
    await sleep(delay.current);
  }
  changeState(visualizationData.states, step.targets, 'default');
  if (step.type === 'compare') {
    changeState(visualizationData.states, step.targets, 'compare');
    setVisualizationData({
      values: [...visualizationData.values],
      states: visualizationData.states,
    });
    await sleep(delay.current);
  }
  changeState(visualizationData.states, step.targets, 'default');

  if (step.type === 'highlight') {
    changeState(visualizationData.states, step.targets, 'highlight');
    setVisualizationData({
      values: [...visualizationData.values],
      states: visualizationData.states,
    });
  }

  setVisualizationData({
    values: [...visualizationData.values],
    states: visualizationData.states,
  });
};
