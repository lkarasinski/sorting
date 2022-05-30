import { violet } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '16px 0',
});

export const Title = styled('h1', {
  fontSize: '32px',
  color: violet.violet9,
});

export const Anchor = styled('a', {
  color: violet.violet9,
});
