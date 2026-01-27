import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router'
import Footer from '../pages/Footer'

export const MainLayout = () => {
  return (
<>

<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
</>
  )
}
