import React from 'react';
import Map from '../components/Map';
import Header from '../components/shared/Header';
import LeftSideBar from '../components/shared/LeftSideBar';
import Navigation from '../components/shared/Navigation';

const Home: React.FC = () => {


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col h-screen bg-gray-100">
        <Navigation />
        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar - Filters */}
          <LeftSideBar />

          {/* Map Area */}
          <div className="flex-1 relative">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;