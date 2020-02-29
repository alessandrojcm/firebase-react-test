import * as React from 'react';
import { render } from '@testing-library/react';

import { App } from '../App';

test('List shows no elements message', async () => {
  const { getByText } = render(<App />);
  expect(getByText('No messages received')).toBeInTheDocument();
});
