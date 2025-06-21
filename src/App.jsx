import React from "react";
import Navigation from "./components/Navigation";
import AppContent from "./AppContent";
import { ItemProvider } from "./context/ItemContext";

const App = () => {
  return (
    <ItemProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <AppContent />
      </div>
    </ItemProvider>
  );
};

export default App;
