import React, { useContext, useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import { ItemContext } from '../context/ItemContext';
import Toast from './Toast';
import ImageCarousel from './ImageCarousel';
import EnquireButton from './EnquireButton';

const ItemModel = ({ item, onClose }) => {
  const { deleteItem, darkMode } = useContext(ItemContext);
  const [toast, setToast] = useState(null);
  const allImages = [item.coverImage, ...item.additionalImages].filter(Boolean);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(item.id);
      setToast({ message: 'Item deleted successfully', type: 'success' });
      setTimeout(onClose, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{item.name}</h2>
            <div className="flex gap-2">
              <button onClick={handleDelete} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg">
                <Trash2 size={20} />
              </button>
              <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <X size={20} />
              </button>
            </div>
          </div>

          <ImageCarousel images={allImages} />
          <span className="inline-block mt-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {item.type}
          </span>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>

          <div className="mt-6">
            <EnquireButton itemName={item.name} />
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ItemModel;
