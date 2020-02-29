import * as React from 'react';
import { Message } from '../../models';
import { render } from '@testing-library/react';

import MessageList from '../MessageList';

const messageMock: Message[] = Array.of(100).map((_, i) => ({
  id: i,
  date: new Date().toUTCString(),
  title: 'título',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}));

test('Should render messages', async () => {
  const { queryAllByText } = render(<MessageList messages={messageMock} />);

  expect(queryAllByText(messageMock[0].content).length).toBe(
    messageMock.length
  );
});
