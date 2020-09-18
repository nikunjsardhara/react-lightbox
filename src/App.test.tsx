import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Click an image/i);
  expect(headerElement).toBeInTheDocument();
});

test('test lightbox', () => {
  const { container } = render(<App />);
  const imageClicked = container.querySelector('div.ImagePreview--image');
  fireEvent(
    imageClicked,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
  expect(container.querySelector('div.Lightbox--image img')).toBeInTheDocument();
  expect(imageClicked.getAttribute('style')).toEqual('background-image: url('+container.querySelector('div.Lightbox--image img').getAttribute('src')+');');
});
