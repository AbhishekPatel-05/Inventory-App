import React, { useContext } from "react";
import ItemForm from "./components/ItemForm";
import ViewItems from "./pages/ViewItems";
import { ItemContext } from "./context/ItemContext";

const AppContent = () => {
  const { currentPage } = useContext(ItemContext);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {currentPage === "add" && <ItemForm />}
        {currentPage === "view" && <ViewItems />}
      </div>
    </>
  );
};

export default AppContent;
