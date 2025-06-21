import React, { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemContext';

const fallbackImage = 'https://via.placeholder.com/400x300?text=Image+Unavailable';

const ItemCard = ({ item, onClick }) => {
  const { darkMode } = useContext(ItemContext);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800`}
    >
      <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {!loaded && (
          <div className="w-full h-full animate-pulse bg-gray-300 dark:bg-gray-600 absolute top-0 left-0 z-0" />
        )}
        <img
          src={error ? fallbackImage : item.coverImage}
          alt={item.name}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(true);
            setError(true);
          }}
          className={`w-full h-full object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="bg-white dark:bg-gray-900 p-4">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 truncate">
          {item.name}
        </h3>
        <span className="inline-block bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
          {item.type}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
