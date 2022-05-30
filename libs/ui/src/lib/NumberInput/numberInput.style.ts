import { blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const Container = styled('div', {
  padding: 12,
  margin: 0,
  borderRadius: 4,
  background: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,

  variants: {
    state: {
      disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      default: {
        opacity: 1,
        cursor: 'default',
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
