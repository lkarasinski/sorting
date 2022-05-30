import { red, violet } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const Box = styled('div', {
  flex: 1,
  height: '100%',
  transformOrigin: 'bottom',
  variants: {
    state: {
      default: {
        background: violet.violet6,
      },
      compare: {
        background: violet.violet8,
      },
      swap: {
        background: violet.violet9,
      },
      highlight: {
        background: red.red9,
      },
    },
  },
});
