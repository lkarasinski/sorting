export type StepType = 'compare' | 'swap' | 'highlight';

export interface Step {
  type: StepType;
  targets: number[];
}

export type BoxStateType = StepType | 'default';

export interface VisualizationData {
  values: number[];
  states: BoxStateType[];
}

export type SortingAlgorithms =
  | 'bubble'
  | 'quick'
  | 'insertion'
  | 'selection'
  | 'heap'
  | 'gnome';

export type SortingAlgorithmsData = Record<
  SortingAlgorithms,
  VisualizationData
>;
