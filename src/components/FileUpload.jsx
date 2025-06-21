import React from 'react';
import { Upload } from 'lucide-react';

const FileUpload = ({ onFileSelect, multiple = false, accept = "image/*" }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => onFileSelect(e.target.result, file.name);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
        id={multiple ? "multi-upload" : "single-upload"}
      />
      <label
        htmlFor={multiple ? "multi-upload" : "single-upload"}
        className="cursor-pointer flex flex-col items-center gap-2"
      >
        <Upload className="w-8 h-8 text-gray-400" />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {multiple ? "Click to upload multiple images" : "Click to upload cover image"}
        </span>
      </label>
    </div>
  );
};

export default FileUpload;
