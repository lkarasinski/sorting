import * as React from 'react';
import {
  StyledSlider,
  StyledTrack,
  StyledRange,
  StyledThumb,
} from './slider.style';

type SliderProps = {
  value: number;
  setValue: (value: React.SetStateAction<number>) => void;
  disabled?: boolean;
  label?: string;
};

export const Slider = ({ value, setValue, disabled, label }: SliderProps) => {
  return (
    <form>
      <StyledSlider
        value={[value]}
        onValueChange={([value]) => setValue(value)}
        min={10}
        max={500}
        step={10}
        aria-label={label}
        disabled={disabled}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </StyledSlider>
    </form>
  );
};
