import React from 'react';
import { render } from '@testing-library/react';
import { configureAxe, toHaveNoViolations } from 'jest-axe';
import Layout from './layout';

expect.extend(toHaveNoViolations)

test('Accessibility Test for Layout Component', async () => {
  const { container } = render(<Layout />);
  // Run the accessibility test using jest-axe
  const axe = configureAxe()
  const results = await axe(container);

  // Expect no accessibility violations
  expect(results).toHaveNoViolations();
});
