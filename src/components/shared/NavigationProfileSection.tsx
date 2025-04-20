import { BellIcon, ChevronDown } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

interface NavigationProfileSectionProps {
    toggleDropdown:() => void;
    dropdownOpen:boolean;
}

const NavigationProfileSection:React.FC<NavigationProfileSectionProps> = ({dropdownOpen,toggleDropdown}) => {
    return (  <div className="flex items-center space-x-4">
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
          <ProfileDropdown dropdownOpen={dropdownOpen}/>
        </div>
      </div> );
}
 
export default NavigationProfileSection;