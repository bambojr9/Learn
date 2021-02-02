import React from 'react';

const Header = (props: { onLogout: () => void }) => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <h1 className="text-blue-900 blue:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
    </div>
  );
};

export default Header;
