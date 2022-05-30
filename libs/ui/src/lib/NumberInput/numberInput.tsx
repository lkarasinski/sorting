import { useMemoizedFn } from 'ahooks';
import _ from 'lodash';
import * as React from 'react';
import { Slider } from '../Slider/slider';
import { Container } from './numberInput.style';

import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '@stitches/react';
import { blackA, mauve, violet } from '@radix-ui/colors';

type NumberInputProps = {
  value: number;
  setValue: (value: React.SetStateAction<number>) => void;
  id: string;
  min: number;
  max: number;
  disabled?: boolean;
};

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 600,
  color: mauve.mauve12,
  userSelect: 'none',
  paddingRight: 16,
});

const Input = styled('input', {
  all: 'unset',
  width: 100,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  marginLeft: 'auto',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet9,
  backgroundColor: violet.violet2,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const NumberInput = ({
  value,
  setValue,
  id,
  min,
  max,
  disabled,
}: NumberInputProps) => {
  const handleChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value, 10), min), max);
      setValue(value);
    }
  );

  return (
    <Container state={disabled ? 'disabled' : 'default'}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <StyledLabel>{_.capitalize(id)}</StyledLabel>
        <Input
          type="number"
          value={value}
          id={id}
          min={min}
          max={max}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
        />
      </div>
      <Slider value={value} setValue={setValue} disabled={disabled} />
    </Container>
  );
};

NumberInput.defaultProps = {
  min: 10,
  max: 500,
};
