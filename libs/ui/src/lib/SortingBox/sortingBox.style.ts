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
        background: '#f00',
      },
      swap: {
        background: '#0f0',
      },
      highlight: {
        background: '#ff0',
      },
    },
  },
});
