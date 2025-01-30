import { render, screen } from '@testing-library/react';
import App from './App';

describe ('app render',()=>{

  test('renders application with header as Todo Application', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading',{name:"Todo Application"});
  expect(linkElement).toBeInTheDocument();
  });

})
