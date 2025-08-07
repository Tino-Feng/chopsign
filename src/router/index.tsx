import { createHashRouter, RouterProvider } from 'react-router'

import Home from '$/Home'
import Login from '$/Login'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const Router = () => <RouterProvider router={router} />

export { router as default, Router }
