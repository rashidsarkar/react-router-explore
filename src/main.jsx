import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import myCreatedRoute from "./Pages/Routes/Routes.jsx";
// Rename your component to avoid conflicts

// Use createRoot only once at the root level
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
