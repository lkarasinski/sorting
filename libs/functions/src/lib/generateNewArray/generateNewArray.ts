import { BoxStateType, VisualizationData } from '@sorting/types';

export const generateNewArray = (length: number): VisualizationData => {
  // Gererate a new array of numbers from 10 to 100
  const values = Array.from(
    { length: length },
    () => Math.floor(Math.random() * 90) + 10
  );

  // Generate a new array of states
  const states = Array.from(
    { length: length },
    () => 'default' as BoxStateType
  );

  // Set random element of the array to 100
  values[Math.floor(Math.random() * length)] = 100;

  return {
    values,
    states,
  };
};
