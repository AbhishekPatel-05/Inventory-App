import React, { useContext } from 'react';
import { Plus, Eye, Moon, Sun } from 'lucide-react';
import { ItemContext } from '../context/ItemContext';

const Navigation = () => {
  const { darkMode, setDarkMode, currentPage, setCurrentPage } = useContext(ItemContext);

  return (
    <nav className={`bg-white dark:bg-gray-800 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Inventory Manager
            </h1>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('add')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'add'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Plus size={16} />
                Add Items
              </button>
              <button
                onClick={() => setCurrentPage('view')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'view'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Eye size={16} />
                View Items
              </button>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
