import React from 'react';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className="fixed top-28 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-[100] animate-fade-in-out">
      <i className="fas fa-check-circle mr-2"></i>
      {message}
    </div>
  );
};

export default Notification;
