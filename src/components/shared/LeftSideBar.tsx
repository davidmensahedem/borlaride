import { Search } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const LeftSideBar = () => {
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(2);
  const [propertySize, setPropertySize] = useState(150);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

useEffect(() => {
    fetchUsers();
}, []);

  return (
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
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-white mb-1"
              >
                <path fill="currentColor" d="M12 3L4 9v12h16V9l-8-6z" />
              </svg>
            </div>
            <div className="text-sm mt-1">House</div>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-600 mb-1"
              >
                <path fill="currentColor" d="M12 7V3H2v18h20V7H12z" />
              </svg>
            </div>
            <div className="text-sm mt-1">Commercial</div>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-600 mb-1"
              >
                <path
                  fill="currentColor"
                  d="M4 10v7h7v-7H4zm9 0v7h7v-7h-7zm-9-9v7h7V1H4zm9 0v7h7V1h-7z"
                />
              </svg>
            </div>
            <div className="text-sm mt-1">Apartment</div>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-600 mb-1"
              >
                <path
                  fill="currentColor"
                  d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                />
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
            {[1, 2, 3, 4, "5+"].map((num, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded flex items-center justify-center ${
                  bedrooms === num
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
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
            {[1, 2, 3, 4, "5+"].map((num, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded flex items-center justify-center ${
                  bathrooms === num
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
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
      <div>
        {users?.map(u => <p>{u["name"]}</p>)}
      </div>
    </div>
  );
};

export default LeftSideBar;
