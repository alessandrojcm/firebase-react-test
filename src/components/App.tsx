import * as React from 'react';

import classnames from 'classnames';

import MessageList from './MessageList';
import NavBar from './NavBar';

export const App = () => (
  <div className={classnames('container')}>
    <NavBar />
    <main className={classnames('section')}>
      <MessageList messages={[]} />
    </main>
  </div>
);
