import React from 'react';
import { render } from '@testing-library/react';
import { UrlGeneratedQrlink } from './qr-link.composition';

const ComponentLibraryLink = "https://bit.dev/jonathandagan/utils";

it('should render with the correct link', () => {
  const { getByTestId } = render(<UrlGeneratedQrlink />);
  const rendered = getByTestId("qr-link");
  expect(rendered.firstElementChild).toHaveAttribute('href', ComponentLibraryLink)
});
