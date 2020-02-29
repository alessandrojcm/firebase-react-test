import * as React from 'react';
import classnasmes from 'classnames';

const PermissionsMessage: React.FunctionComponent<{
  permissionStatus: 'granted' | 'denied' | 'default';
}> = ({ permissionStatus }) => {
  return (
    <div className={classnasmes('container')}>
      <h1 className={classnasmes('title')}>
        {permissionStatus === 'denied' || permissionStatus === 'default'
          ? 'Please grant notification permissions and reload the page'
          : 'Push notifications enabled!'}
      </h1>
    </div>
  );
};

export default PermissionsMessage;
