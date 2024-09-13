import { useState } from 'react'

import Navbar from './components/shared/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/login'
import Home from './components/Home'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter} />
     
    </>
  )
}

export default App
