import React, { useState, useContext } from 'react';
import { Plus } from 'lucide-react';
import { ItemContext } from '../context/ItemContext';
import Toast from './Toast';
import FileUpload from './FileUpload';
import ImagePreview from './ImagePreview';

const ItemForm = () => {
  const { addItem, darkMode, setCurrentPage } = useContext(ItemContext);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: []
  });
  const [toast, setToast] = useState(null);

  const itemTypes = ['Shirt', 'Pant', 'Shoes', 'Sports Gear', 'Accessories', 'Jacket'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverImageSelect = (imageData) => {
    setFormData({ ...formData, coverImage: imageData });
  };

  const handleAdditionalImageSelect = (imageData) => {
    setFormData({
      ...formData,
      additionalImages: [...formData.additionalImages, imageData]
    });
  };

  const removeAdditionalImage = (index) => {
    setFormData({
      ...formData,
      additionalImages: formData.additionalImages.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.type || !formData.description) {
      setToast({ message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    addItem(formData);
    setToast({ message: 'Item successfully added ✅', type: 'success' });

    setFormData({
      name: '',
      type: '',
      description: '',
      coverImage: '',
      additionalImages: []
    });

    setTimeout(() => {
      setCurrentPage('view');
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Add New Item</h1>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Item Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Item Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              >
                <option value="">Select item type</option>
                {itemTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cover Image
              </label>
              {formData.coverImage ? (
                <ImagePreview
                  src={formData.coverImage}
                  alt="Cover"
                  onRemove={() => setFormData({ ...formData, coverImage: '' })}
                  className="w-full h-48"
                />
              ) : (
                <FileUpload onFileSelect={handleCoverImageSelect} />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Images
              </label>
              <FileUpload onFileSelect={handleAdditionalImageSelect} multiple />
              {formData.additionalImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {formData.additionalImages.map((img, index) => (
                    <ImagePreview
                      key={index}
                      src={img}
                      alt={`Additional ${index + 1}`}
                      onRemove={() => removeAdditionalImage(index)}
                      className="h-24"
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add Item
            </button>
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

export default ItemForm;
