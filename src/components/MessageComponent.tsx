import * as React from 'react';
import classnames from 'classnames';

import { Message } from '../models';

const MessageComponent: React.FunctionComponent<{ message: Message }> = ({
  message,
}) => {
  return (
    <div className={classnames('media')}>
      <div className={classnames('media-content')}>
        <div className={classnames('content')}>
          <div style={{ paddingBottom: '0.5rem' }}>
            <strong
              className={classnames('title')}
              style={{ paddingRight: '0.5rem' }}
            >
              {message.title}
            </strong>
            <small className={classnames('subtitle')}>
              {new Date(message.date).toLocaleDateString()}
            </small>
          </div>
          <p className={classnames('has-text-left')}>{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
