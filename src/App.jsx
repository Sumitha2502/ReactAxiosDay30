import "./App.css";
import React from "react";
import AppRoutes from "./AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// API base URL
export const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  // Create a browser router using the defined routes
  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      {/* Provide the router to the entire app using RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
