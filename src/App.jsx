import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Travel from './pages/Travel'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/travel' element={<Travel />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App