import * as React from 'react';
import classnames from 'classnames';

import { Message } from '../models';
import MessageComponent from './MessageComponent';

const MessageList: React.FunctionComponent<{ messages: Message[] }> = ({
  messages,
}) => {
  return (
    <section className={classnames('container')}>
      {messages.length === 0 ? (
        <h1 className={classnames('title', 'hast-text-centered')}>
          No messages received
        </h1>
      ) : (
        messages.map(s => <MessageComponent key={s.id} message={s} />)
      )}
    </section>
  );
};

export default MessageList;
