import { useMemoizedFn } from 'ahooks';
import _ from 'lodash';
import * as React from 'react';
import { Container, InputContainer, Text } from './numberInput.style';

type NumberInputProps = {
  value: number;
  setValue: (value: React.SetStateAction<number>) => void;
  id: string;
  min: number;
  max: number;
};

export const NumberInput = ({
  value,
  setValue,
  id,
  min,
  max,
}: NumberInputProps) => {
  const handleChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value, 10), min), max);
      setValue(value);
    }
  );

  return (
    <Container>
      <Text>{_.capitalize(id)}</Text>
      <InputContainer>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          id={id}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          value={value}
          id={id}
          min={min}
          max={max}
          onChange={(e) => handleChange(e)}
        />
      </InputContainer>
    </Container>
  );
};

NumberInput.defaultProps = {
  min: 10,
  max: 500,
};
