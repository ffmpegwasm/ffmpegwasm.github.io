import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FFMPEG.WASM test', () => {
  render(<App />);
  const elm = screen.getByText(/FFMPEG.WASM/i);
  expect(elm).toBeInTheDocument();
});
