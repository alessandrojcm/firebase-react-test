import { useEffect, useState } from 'react';

const useNotification = () => {
  const [hasPermissions, setHasPermissions] = useState<
    'granted' | 'denied' | 'default'
  >('default');

  useEffect(() => {
    const getNotificationPermission = async () => {
      const permissionPrompt = await Notification.requestPermission();
      setHasPermissions(permissionPrompt);
    };
    getNotificationPermission();
  }, []);

  return hasPermissions;
};

export { useNotification };
