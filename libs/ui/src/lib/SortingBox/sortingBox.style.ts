import { styled } from '@stitches/react';

export const Box = styled('div', {
  flex: 1,
  height: '100%',
  transformOrigin: 'bottom',
  variants: {
    state: {
      default: {
        background: '#333',
      },
      compare: {
        background: 'hsl(201, 80%, 30%)',
      },
      swap: {
        background: 'hsl(201, 100%, 48%)',
      },
      highlight: {
        background: 'hsl(349, 90%, 61%)',
      },
    },
  },
});
