import React, { useContext, useState } from 'react';
import { Search, Filter, Grid } from 'lucide-react';
import { ItemContext } from '../context/ItemContext';
import ItemCard from '../components/ItemCard';
import ItemModel from '../components/ItemModel';

const ViewItems = () => {
  const { filteredItems, searchTerm, setSearchTerm, filterType, setFilterType, darkMode } = useContext(ItemContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemTypes = ['', 'Shirt', 'Pant', 'Shoes', 'Sports Gear', 'Accessories', 'Jacket'];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-blue-400 mb-6">Inventory Items</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white appearance-none"
            >
              <option value="">All Types</option>
              {itemTypes.slice(1).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Grid className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No items found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm || filterType ? 'Try adjusting your search or filter.' : 'Add some items to get started.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}

        {selectedItem && (
          <ItemModel item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </div>
  );
};

export default ViewItems;
