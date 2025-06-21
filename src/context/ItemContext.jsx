import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Premium Running Shoes",
      type: "Shoes",
      description: "High-performance running shoes with advanced cushioning technology. Perfect for marathon training and daily runs.",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCq3RUiyESsXd16XLpMJsQKvRA6B8RJW2vw&s",
      additionalImages: []
    },
    {
      id: 2,
      name: "Cotton Polo Shirt",
      type: "Shirt",
      description: "Classic cotton polo shirt in navy blue. Comfortable fit with moisture-wicking properties.",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdujsM1VWEoxx15TPBupW3O70H-Q4dhQslXg&s",
      additionalImages: []
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('view');

  const addItem = (item) => {
    const newItem = { ...item, id: Date.now() };
    setItems(prev => [...prev, newItem]);
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id, updatedItem) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updatedItem } : item));
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterType || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <ItemContext.Provider value={{
      items,
      addItem,
      deleteItem,
      updateItem,
      filteredItems,
      searchTerm,
      setSearchTerm,
      filterType,
      setFilterType,
      darkMode,
      setDarkMode,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </ItemContext.Provider>
  );
};
