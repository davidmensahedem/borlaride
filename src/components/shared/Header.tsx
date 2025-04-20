import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="p-4 bg-blue-50 text-center">
      <h1 className="text-4xl font-bold">
        <span className="text-blue-600">Real Estate</span>
        <span className="text-slate-800"> Dashboard UI KIT</span>
      </h1>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="bg-yellow-400 p-2 rounded">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#FFC107" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
          </svg>
        </div>
        <div className="bg-pink-600 p-2 rounded">
          <span className="text-white font-bold text-xl">Xd</span>
        </div>
        <div className="bg-slate-800 p-2 rounded">
          <span className="text-blue-400 font-bold">Figma</span>
        </div>
        <div className="bg-blue-900 p-2 rounded">
          <span className="text-blue-400 font-bold">Ps</span>
        </div>
      </div>
    </div>
  );
};

export default Header; 