import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home/>},
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)