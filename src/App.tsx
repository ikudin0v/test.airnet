import React from "react";
import MainPage from "./layouts/mainPage";
import ContextProvider from "./hooks/useContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MainPage />
      </ContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
