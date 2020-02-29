import * as React from 'react';

import classnames from 'classnames';
import { useMessages, useNotification } from '../core/hooks';

import NavBar from './NavBar';
import PermissionsMessage from './PermissionsMessage';
import { pushSupported } from '../core/utils/pushSupported';

export const App = () => {
  const messagingPermission = useNotification();
  useMessages(messagingPermission);

  if (!pushSupported) {
    return (
      <h1 className={classnames('title')}>
        Push notifications are not supported by your browser ;(
      </h1>
    );
  }

  return (
    <div className={classnames('container')}>
      <NavBar />
      <main className={classnames('section')}>
        <PermissionsMessage permissionStatus={messagingPermission} />
      </main>
    </div>
  );
};
