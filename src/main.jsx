import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Meals from './Components/Meals/Meals'
import Error from './Components/Error/Error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <h1 className="text-3xl font-semibold">This is Home section</h1>,
        errorElement: <Error></Error>,
      },
      {
        path: '/meals',
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        errorElement: <Error></Error>,
      },
      {
        path: '/contact',
        element: <h1 className="text-3xl font-semibold">This is Contact section</h1>,
        errorElement: <Error></Error>,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
