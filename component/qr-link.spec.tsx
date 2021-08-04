import React from 'react';
import { render } from '@testing-library/react';
import { BasicQrLink } from './qr-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicQrLink />);
  const rendered = getByText('hello from QrLink');
  expect(rendered).toBeTruthy();
});
