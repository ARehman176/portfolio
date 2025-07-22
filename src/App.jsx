// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Work from './Component/Work';
import Talk from './Component/Talk';
import './App.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <Aboutme />,
  },
  {
    path: '/projects',
    element: <Work />,
  },
  {
    path: '/contact',
    element: <Talk />,
  },
]);

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}