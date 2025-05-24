import React, { useState } from 'react';
import { ChevronLeftIcon, PencilIcon, StarIcon, CreditCardIcon, CalendarIcon, UserIcon, SmartphoneIcon, MoonIcon, LogOutIcon, ChevronRightIcon } from 'lucide-react';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  return <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button className="p-2">
          <ChevronLeftIcon size={24} />
        </button>
        <h1 className="text-2xl font-serif font-bold">Profile</h1>
        <div className="w-8"></div> {/* Empty div for spacing */}
      </div>
      {/* Profile section */}
      <div className="flex flex-col items-center py-6">
        <div className="relative">
          <img src="/profile_expo.jpg" alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-gray-100" />
          <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
            <PencilIcon size={18} color="white" />
          </button>
        </div>
        <h2 className="mt-4 text-2xl font-bold">Ethan Carter</h2>
        <p className="text-gray-500">ethan.carter@email.com</p>
      </div>
      {/* Statistics section */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          STATISTICS
        </h3>
        <div className="flex justify-between">
          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm mx-1 flex flex-col items-center">
            <p className="text-sm text-gray-700">Books</p>
            <p className="text-3xl font-bold text-blue-500">120</p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm mx-1 flex flex-col items-center">
            <p className="text-sm text-gray-700">Authors</p>
            <p className="text-3xl font-bold text-blue-500">50</p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm mx-1 flex flex-col items-center">
            <p className="text-sm text-gray-700">Genres</p>
            <p className="text-3xl font-bold text-blue-500">10</p>
          </div>
        </div>
      </div>
      {/* Subscription section */}
      <div className="px-4 py-2 mt-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          SUBSCRIPTION
        </h3>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-100">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <StarIcon size={20} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Plan</p>
              <p className="text-gray-500 text-sm">Premium</p>
            </div>
            <ChevronRightIcon size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center p-4 border-b border-gray-100">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <CreditCardIcon size={20} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Payment Status</p>
              <p className="text-gray-500 text-sm">Active</p>
            </div>
            <ChevronRightIcon size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center p-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <CalendarIcon size={20} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Next payment: July 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
      {/* Account Information section */}
      <div className="px-4 py-2 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            ACCOUNT INFORMATION
          </h3>
          <button className="text-blue-500 font-medium">Edit</button>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-100">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <UserIcon size={20} className="text-blue-500" />
            </div>
            <div>
              <p className="font-medium">Username</p>
              <p className="text-gray-500 text-sm">Ethan Carter</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <SmartphoneIcon size={20} className="text-blue-500" />
            </div>
            <div>
              <p className="font-medium">Phone Number</p>
              <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      {/* Settings section */}
      <div className="px-4 py-2 mt-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          SETTINGS
        </h3>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <MoonIcon size={20} className="text-blue-500" />
              </div>
              <p className="font-medium">Dark Mode</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>
      </div>
      {/* Logout button */}
      <div className="px-4 py-4 mt-auto mb-6">
        <button className="w-full bg-gray-200 text-red-500 rounded-lg py-3 px-4 flex items-center justify-center">
          <LogOutIcon size={18} className="mr-2" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>;
}