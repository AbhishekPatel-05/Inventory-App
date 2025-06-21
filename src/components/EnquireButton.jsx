import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Toast from './Toast';

const EnquireButton = ({ itemName }) => {
  const [toast, setToast] = useState(null);

  const handleEnquire = () => {
    setToast({ message: 'Enquiry email sent successfully! ✉️', type: 'success' });
    // Uncomment to trigger mail client:
    // window.location.href = `mailto:shop@example.com?subject=Enquiry about ${itemName}&body=Hi, I am interested in the ${itemName}. Please provide more details.`;
  };

  return (
    <>
      <button
        onClick={handleEnquire}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
      >
        <Mail size={20} />
        Send Enquiry
      </button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default EnquireButton;
