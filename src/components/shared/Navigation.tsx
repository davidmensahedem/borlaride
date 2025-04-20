import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import NavigationProfileSection from './NavigationProfileSection';
import NavLogo from './NavLogo';

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
     {/* Navigation Logo */}
      <NavLogo />

      {/* Navigation links */}
      <div className="flex space-x-8">
          <NavigationLink activeTab={activeTab} setActiveTab={setActiveTab} title={"Buy"}/>
          <NavigationLink activeTab={activeTab} setActiveTab={setActiveTab} title={"Sell"}/>
          <NavigationLink activeTab={activeTab} setActiveTab={setActiveTab} title={"Rent"}/>
      </div>

        {/* Navigation Profile Section */}
      <NavigationProfileSection 
        dropdownOpen={dropdownOpen} 
        toggleDropdown={toggleDropdown}/>
    </div>
  );
};

export default Navigation; 