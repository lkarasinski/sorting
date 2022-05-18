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
      compared: {
        background: '#f00',
      },
      swapped: {
        background: '#0f0',
      },
      highlighted: {
        background: '#ff0',
      },
    },
  },
});
