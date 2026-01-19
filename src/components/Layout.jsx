import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'


const Layout = () => {
  return (
    <div>
        <nav>
            <Header />
        </nav>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout