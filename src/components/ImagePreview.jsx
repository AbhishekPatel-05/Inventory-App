import React from 'react';
import { X } from 'lucide-react';

const ImagePreview = ({ src, alt, onRemove, className = "" }) => (
  <div className={`relative group ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
    {onRemove && (
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    )}
  </div>
);

export default ImagePreview;
