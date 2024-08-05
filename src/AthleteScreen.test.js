import { render, screen } from '@testing-library/react';
import AthleteScreen from './AthleteScreen';

test('renders learn react link', () => {
  render(<AthleteScreen/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
