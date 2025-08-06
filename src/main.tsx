import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Error boundary for the entire app
const AppWithErrorBoundary = () => {
  try {
    return <App />;
  } catch (error) {
    console.error("App initialization error:", error);
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Fehler beim Laden der App</h1>
          <p className="text-gray-600 mb-4">
            Die Anwendung konnte nicht geladen werden.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Seite neu laden
          </button>
        </div>
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AppWithErrorBoundary />
  </React.StrictMode>
); 