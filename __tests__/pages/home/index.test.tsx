import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const logo = screen.getByAltText('Creaition Logo');

    expect(logo).toBeInTheDocument();
  });
});
