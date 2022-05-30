import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import * as SliderPrimitive from '@radix-ui/react-slider';

export const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 'auto',
  marginTop: '8px',

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
});

export const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: mauve.mauve6,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

export const StyledRange = styled(SliderPrimitive.Range, {
  backgroundColor: violet.violet9,
  position: 'absolute',
  borderRadius: '9999px',
  height: '100%',
});

export const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 3px ${blackA.blackA8}` },
});
