import { blackA, mauve, red, violet } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    color: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
    size: {
      small: {
        fontSize: 13,
        height: 30,
      },
      medium: {
        fontSize: 15,
        height: 35,
      },
      large: {
        fontSize: 20,
        height: 45,
      },
    },
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
    color: 'violet',
    size: 'medium',
    state: 'default',
  },
});
