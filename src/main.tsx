import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Todo } from './pages/Todo/todoIndex.tsx';
import { LandingPage } from './pages/LandingPage/landingIndex.tsx';
import { Relogio } from './pages/Relogio/relogioIndex.tsx';
import { Calculadora } from './pages/Calculadora/calculadoraIndex.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />
    children: [
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/relogio",
        element: <Relogio />,
      },
      {
        path: "/calculadora",
        element: <Calculadora />,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
