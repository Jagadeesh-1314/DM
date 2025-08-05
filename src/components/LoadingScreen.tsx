import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src="/TJArya.png" 
        alt="TJ Arya Logo"
        className="w-32 h-32 md:w-48 md:h-48 animate-pulse animate-fade-in"
      />
    </div>
  );
};

export default LoadingScreen;
