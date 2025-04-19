import { BellIcon, ChevronDown, LogOut, Search, User } from 'lucide-react';
import { useState } from 'react';
import Map from '../components/Map';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(2);
  const [propertySize, setPropertySize] = useState(150); // in sqft
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const markers = [
    {
      position: [5.5557, -0.2186] as [number, number], // La Paz
      title: 'Modern House',
      price: '$17,000/mo'
    },
    {
      position: [5.6037, -0.1870] as [number, number], // Dzorwulu
      title: 'Luxury Apartment', 
      price: '$12,000/mo'
    },
    {
      position: [5.5586, -0.2030] as [number, number], // Circle
      title: 'Family Home',
      price: '$15,000/mo'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header with UI Kit info */}
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

      {/* Main Navigation */}
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <div className="font-bold text-xl">Real Estate</div>
        
        <div className="flex space-x-8">
          <button 
            className={`px-4 py-1 ${activeTab === 'Buy' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveTab('Buy')}
          >
            Buy
          </button>
          <button 
            className={`px-4 py-1 ${activeTab === 'Sell' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveTab('Sell')}
          >
            Sell
          </button>
          <button 
            className={`px-4 py-1 ${activeTab === 'Rent' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveTab('Rent')}
          >
            Rent
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full">
            <BellIcon size={20} />
          </button>
          <div className="relative">
            <button 
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Dale Bradley</span>
              <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* User Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-700">Signed in as</p>
                    <p className="text-sm font-medium text-gray-900 truncate">dale.bradley@example.com</p>
                  </div>
                  <a href="#profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User size={16} className="mr-2" />
                    Profile
                  </a>
                  <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="mr-2">
                      <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                    </svg>
                    Settings
                  </a>
                  <hr className="my-1" />
                  <a href="#logout" className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Filters */}
        <div className="w-64 bg-white p-4 overflow-y-auto">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 text-gray-800"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Property Type</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-600 text-white p-3 rounded text-center">
                <div className="flex justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="text-white mb-1">
                    <path fill="currentColor" d="M12 3L4 9v12h16V9l-8-6z" />
                  </svg>
                </div>
                <div className="text-sm mt-1">House</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="flex justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-600 mb-1">
                    <path fill="currentColor" d="M12 7V3H2v18h20V7H12z" />
                  </svg>
                </div>
                <div className="text-sm mt-1">Commercial</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="flex justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-600 mb-1">
                    <path fill="currentColor" d="M4 10v7h7v-7H4zm9 0v7h7v-7h-7zm-9-9v7h7V1H4zm9 0v7h7V1h-7z" />
                  </svg>
                </div>
                <div className="text-sm mt-1">Apartment</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <div className="flex justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-600 mb-1">
                    <path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <div className="text-sm mt-1">Vacant Land</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Property Room</h3>
            
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-2">Bedroom</div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, '5+'].map((num, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded flex items-center justify-center ${
                      bedrooms === num ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setBedrooms(num as number)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Bathroom</div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, '5+'].map((num, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded flex items-center justify-center ${
                      bathrooms === num ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setBathrooms(num as number)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Property Size</h3>
            <input
              type="range"
              min="0"
              max="500"
              className="w-full"
              value={propertySize}
              onChange={(e) => setPropertySize(parseInt(e.target.value))}
            />
            <div className="text-sm text-gray-500">{propertySize} sqft</div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <Map 
            center={[51.505, -0.09]} 
            zoom={13} 
            markers={markers}
          />
        </div>
      </div>
    </div>
  );
}